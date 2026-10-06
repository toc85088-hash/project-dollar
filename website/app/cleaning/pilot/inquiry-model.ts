// Shared validation contains no recipient, binding access or provider credentials.
export const leadSources = ['Website form', 'Email inbox', 'Phone / text', 'Google Business Profile', 'Referral', 'Booking / CRM system', 'Other'] as const;
export const inquiryVolumes = ['Under 10', '10–49', '50–199', '200 or more', 'Not sure'] as const;
export const inquiryLimits = { name: 100, businessName: 160, email: 254, website: 300, notes: 3000 } as const;
export type Inquiry = { name: string; businessName: string; email: string; website: string; leadSource: string; monthlyInquiries: string; notes: string };
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

export function isEmail(value: string) {
  return value.length <= 254 && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/.test(value)
    && value.split('@')[0].length <= 64 && !value.startsWith('.') && !value.includes('..') && !value.includes('.@');
}

export function validateInquiry(input: unknown): { value?: Inquiry; errors: InquiryErrors; rejected?: boolean } {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { errors: {}, rejected: true };
  const data = input as Record<string, unknown>;
  const allowed = ['name', 'businessName', 'email', 'website', 'leadSource', 'monthlyInquiries', 'notes', 'fax'];
  // Reject unknown fields rather than allowing recipient/header injection.
  if (Object.keys(data).some(key => !allowed.includes(key)) || (data.fax !== undefined && (typeof data.fax !== 'string' || data.fax.trim()))) return { errors: {}, rejected: true };
  const errors: InquiryErrors = {};
  const value: Inquiry = { name: '', businessName: '', email: '', website: '', leadSource: '', monthlyInquiries: '', notes: '' };
  for (const key of Object.keys(value) as (keyof Inquiry)[]) {
    const raw = data[key];
    if (raw !== undefined && typeof raw !== 'string') { errors[key] = 'Enter a text value.'; continue; }
    value[key] = (raw as string | undefined)?.trim() ?? '';
    const limit = key in inquiryLimits ? inquiryLimits[key as keyof typeof inquiryLimits] : 80;
    // Newlines are permitted only in the message body.
    const forbidden = key === 'notes' ? /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/ : /[\x00-\x1F\x7F]/;
    if (value[key].length > limit || forbidden.test(value[key])) errors[key] = `Use at most ${limit} characters without control characters.`;
  }
  for (const key of ['name', 'businessName', 'email', 'leadSource', 'notes'] as const) {
    if (!value[key]) errors[key] = 'This field is required.';
  }
  if (value.email && !isEmail(value.email)) errors.email = 'Enter a valid email address.';
  if (value.leadSource && !(leadSources as readonly string[]).includes(value.leadSource)) errors.leadSource = 'Choose a lead source from the list.';
  if (value.monthlyInquiries && !(inquiryVolumes as readonly string[]).includes(value.monthlyInquiries)) errors.monthlyInquiries = 'Choose an inquiry range from the list.';
  if (value.website) {
    try {
      const url = new URL(value.website);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || !url.hostname.includes('.')) throw new Error('invalid');
    } catch { errors.website = 'Use a full http:// or https:// website address, or leave this blank.'; }
  }
  return Object.keys(errors).length ? { errors } : { value, errors };
}

const maxBytes = 16 * 1024;
const windowMs = 10 * 60 * 1000;
export function createInquiryHandler(options: {
  origin: string;
  send: (inquiry: Inquiry, reference: string) => Promise<void>;
  now?: () => number;
}) {
  // Best-effort, isolate-local abuse limits. No durable visitor/content storage.
  const attempts = new Map<string, { until: number; count: number }>();
  let globalWindow = { until: 0, count: 0 };
  const json = (status: number, body: object) => Response.json(body, { status, headers: {
    'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow',
    ...(status === 429 ? { 'Retry-After': '600' } : {}),
  } });
  return async function handle(request: Request) {
    if (request.method !== 'POST') return json(405, { ok: false, message: 'Use the inquiry form to submit a request.' });
    const url = new URL(request.url);
    const origin = request.headers.get('origin');
    const local = ['localhost', '127.0.0.1'].includes(url.hostname);
    if (!origin || (origin !== options.origin && !(local && origin === url.origin)) || request.headers.get('sec-fetch-site') === 'cross-site') {
      return json(403, { ok: false, message: 'Open the inquiry form on this website and try again.' });
    }
    if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') return json(415, { ok: false, message: 'Submit using the website form.' });
    const now = options.now?.() ?? Date.now();
    for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
    if (globalWindow.until <= now) globalWindow = { until: now + windowMs, count: 0 };
    const ip = request.headers.get('cf-connecting-ip') ?? 'local-or-unknown';
    const count = attempts.get(ip) ?? { until: now + windowMs, count: 0 };
    if (count.count >= 5 || globalWindow.count >= 30 || (!attempts.has(ip) && attempts.size >= 1000)) {
      return json(429, { ok: false, message: 'Too many attempts. Please wait 10 minutes or use our public email address.' });
    }
    attempts.set(ip, { ...count, count: count.count + 1 });
    globalWindow.count += 1;
    if (Number(request.headers.get('content-length')) > maxBytes) return json(413, { ok: false, message: 'Your message is too long. Please shorten it.' });
    let data: unknown;
    try {
      const reader = request.body?.getReader();
      if (!reader) return json(400, { ok: false, message: 'Complete the required fields.' });
      const chunks: Uint8Array[] = [];
      let length = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > maxBytes) { await reader.cancel(); return json(413, { ok: false, message: 'Your message is too long. Please shorten it.' }); }
        chunks.push(value);
      }
      const bytes = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
      data = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
    } catch { return json(400, { ok: false, message: 'We could not read the form. Please check the fields and try again.' }); }
    const result = validateInquiry(data);
    if (!result.value) return json(400, { ok: false, message: 'Please check your form entries.', errors: result.errors });
    const reference = `PILOT-${crypto.randomUUID()}`;
    try {
      await options.send(result.value, reference);
      return json(200, { ok: true, reference });
    } catch {
      // Provider exceptions may contain the private recipient. Never return or log them.
      return json(503, { ok: false, message: 'We could not confirm your submission. Please contact us by email before retrying; do not assume it was received.' });
    }
  };
}
