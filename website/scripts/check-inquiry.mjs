import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

// Isolated transport tests: these never send email or contact an external service.
const source = await readFile(new URL('../app/cleaning/pilot/inquiry-model.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { validateInquiry, createInquiryHandler, isEmail } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const origin = 'https://naveliqo.com';
const fixture = { name: 'Fictional QA Owner', businessName: 'Fictional Cleaning QA', email: 'qa@inquiry-fixture.test', website: '', leadSource: 'Website form', monthlyInquiries: '', notes: 'Fictional test: prepare a reply for owner review.', fax: '' };
let checks = 0;
function check(condition) { assert.ok(condition); checks++; }
function request(data = fixture, headers = {}, method = 'POST') {
  return new Request(`${origin}/api/pilot-inquiry`, { method, headers: { origin, 'content-type': 'application/json', ...headers }, ...(method === 'POST' ? { body: typeof data === 'string' ? data : JSON.stringify(data) } : {}) });
}
check(Boolean(validateInquiry(fixture).value));
check(Boolean(validateInquiry({ ...fixture, name: '  Fictional QA Owner  ', notes: 'Line one\nLine two' }).value));
for (const field of ['name', 'businessName', 'email', 'leadSource', 'notes']) check(Boolean(validateInquiry({ ...fixture, [field]: '' }).errors[field]));
for (const email of ['not-an-address', 'a@localhost', '.a@inquiry-fixture.test', 'a..b@inquiry-fixture.test', 'a@inquiry-fixture.test\r\nBcc: b@inquiry-fixture.test']) check(!isEmail(email));
for (const [field, value] of [['name', 'a'.repeat(101)], ['name', 'Owner\r\nBcc: injected'], ['notes', 'a'.repeat(3001)], ['notes', 'x\u0000y'], ['leadSource', 'unrecognised'], ['monthlyInquiries', 'unrecognised'], ['website', 'javascript:alert(1)'], ['website', 'https://user:pass@inquiry-fixture.test']]) check(Boolean(validateInquiry({ ...fixture, [field]: value }).errors[field]));
for (const extra of [{ fax: 'bot' }, { to: 'alternate@inquiry-fixture.test' }, { cc: 'alternate@inquiry-fixture.test' }, { name: {} }]) check(!validateInquiry({ ...fixture, ...extra }).value);
for (const data of [null, [], 42]) check(!validateInquiry(data).value);

let sent = [];
function handler(send = async (data, reference) => { sent.push({ data, reference }); }, now) { return createInquiryHandler({ origin, send, now }); }
async function expectStatus(req, status, handle = handler()) {
  const before = sent.length;
  const response = await handle(req);
  assert.equal(response.status, status);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.match(response.headers.get('x-robots-tag'), /noindex/);
  const body = await response.json();
  if (status !== 200) { assert.equal(body.ok, false); assert.equal(sent.length, before); assert.equal(body.reference, undefined); }
  checks++;
  return { response, body };
}
const success = await expectStatus(request(), 200);
check(success.body.ok === true && /^PILOT-[a-f0-9-]{36}$/.test(success.body.reference));
check(sent.length === 1 && sent[0].reference === success.body.reference && sent[0].data.email === fixture.email);
await expectStatus(request(undefined, {}, 'GET'), 405);
await expectStatus(request(fixture, { origin: 'https://outside.test' }), 403);
await expectStatus(request(fixture, { origin: '' }), 403);
await expectStatus(request(fixture, { 'sec-fetch-site': 'cross-site' }), 403);
await expectStatus(request(fixture, { 'content-type': 'text/plain' }), 415);
await expectStatus(request('{invalid'), 400);
await expectStatus(request({ ...fixture, email: '' }), 400);
await expectStatus(request({ ...fixture, email: 'not-an-address' }), 400);
await expectStatus(request({ ...fixture, fax: 'filled' }), 400);
await expectStatus(request({ ...fixture, to: 'alternate@inquiry-fixture.test' }), 400);
await expectStatus(request(fixture, { 'content-length': '17000' }), 413);
await expectStatus(request(' '.repeat(17000)), 413);
const failed = await expectStatus(request(), 503, handler(async () => { throw new Error('server-only-recipient@inquiry-fixture.test'); }));
check(!JSON.stringify(failed.body).includes('server-only-recipient'));
let time = 1;
const limited = handler(undefined, () => time);
for (let i = 0; i < 5; i++) await expectStatus(request({ ...fixture, email: '' }), 400, limited);
const limitedResult = await expectStatus(request(), 429, limited);
check(limitedResult.response.headers.get('retry-after') === '600');
time += 600001;
await expectStatus(request(), 200, limited);
const globalLimit = handler();
for (let i = 0; i < 30; i++) await expectStatus(request({ ...fixture, fax: 'filled' }, { 'cf-connecting-ip': `192.0.2.${i + 1}` }), 400, globalLimit);
await expectStatus(request(fixture, { 'cf-connecting-ip': '192.0.2.200' }), 429, globalLimit);

const route = await readFile(new URL('../app/api/pilot-inquiry/route.ts', import.meta.url), 'utf8');
assert.match(route, /bindings\.PILOT_RECIPIENT/);
assert.match(route, /await bindings\.PILOT_EMAIL\.send\(new EmailMessage\(siteConfig\.contactEmail, recipient, raw\)\)/);
assert.doesNotMatch(route, /console\.|process\.env\.NEXT_PUBLIC/);
const form = await readFile(new URL('../app/cleaning/pilot/inquiry-form.tsx', import.meta.url), 'utf8');
assert.doesNotMatch(form, /PILOT_RECIPIENT|PILOT_EMAIL|cloudflare:email/);
assert.match(form, /method="post" action="\/api\/pilot-inquiry"/);
assert.match(form, /disabled=\{pending \|\| !ready\}/);
console.log(`Inquiry checks passed: ${checks} validation/handler assertions; mock transport only, no email sent. Private destination stays server-side.`);
