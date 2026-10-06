import { env } from 'cloudflare:workers';
import { EmailMessage } from 'cloudflare:email';
import { Buffer } from 'node:buffer';
import { siteConfig } from '../../site-config';
import { createInquiryHandler, isEmail } from '../../cleaning/pilot/inquiry-model';

type PilotEnvironment = { PILOT_EMAIL?: SendEmail; PILOT_RECIPIENT?: string };

const handle = createInquiryHandler({
  origin: siteConfig.url,
  async send(inquiry, reference) {
    // Resolve only inside the server request. The browser can never choose To/CC/BCC.
    const bindings = env as PilotEnvironment;
    const recipient = bindings.PILOT_RECIPIENT?.trim();
    if (!bindings.PILOT_EMAIL || !recipient || !isEmail(recipient) || recipient.toLowerCase() === siteConfig.contactEmail.toLowerCase()) throw new Error('Notification is not configured');
    const body = [
      `${siteConfig.name} — Cleaning pilot inquiry`, `Reference: ${reference}`, '',
      'Visitor-supplied information; not independently verified. This is an inquiry, not an order.', '',
      `Name: ${inquiry.name}`, `Business: ${inquiry.businessName}`, `Email: ${inquiry.email}`,
      `Website: ${inquiry.website || 'Not supplied'}`, `Lead source: ${inquiry.leadSource}`,
      `Approximate monthly inquiries: ${inquiry.monthlyInquiries || 'Not supplied'}`, '',
      'Automation needs / notes:', inquiry.notes,
    ].join('\r\n');
    // Fixed safe headers and base64 plain text keep visitor content out of MIME headers.
    const encodedBody = Buffer.from(body, 'utf8').toString('base64').match(/.{1,76}/g)?.join('\r\n') ?? '';
    const raw = [
      `From: ${siteConfig.contactEmail}`, `To: ${recipient}`, `Reply-To: ${inquiry.email}`,
      `Subject: ${siteConfig.name} Cleaning pilot inquiry ${reference}`,
      `Message-ID: <${reference}@${new URL(siteConfig.url).hostname}>`,
      `Date: ${new Date().toUTCString()}`, 'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', encodedBody, '',
    ].join('\r\n');
    await bindings.PILOT_EMAIL.send(new EmailMessage(siteConfig.contactEmail, recipient, raw));
  },
});

export const POST = handle;
export const GET = handle;
