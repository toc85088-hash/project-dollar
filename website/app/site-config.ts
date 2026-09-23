const approvedBrand = {
  name: 'Naveliqo',
  siteUrl: 'https://naveliqo.com',
  contactEmail: 'hello@naveliqo.com',
  positioning: 'Simple AI Automation for Small Business',
  tagline: 'No coding. No AI hype. Just practical workflows that save time and money.',
} as const;

const configuredName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || approvedBrand.name;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || approvedBrand.siteUrl;
// The public address is owner-approved. Never render a forwarding address from an environment override.
const configuredContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || approvedBrand.contactEmail;
if (configuredContactEmail !== approvedBrand.contactEmail) {
  throw new Error('NEXT_PUBLIC_CONTACT_EMAIL must match the approved public contact address.');
}

function normalizedUrl(value: string) {
  try {
    return new URL(value).origin;
  } catch {
    return approvedBrand.siteUrl;
  }
}

function isPublicHttpsUrl(value?: string) {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    const host = parsed.hostname.toLowerCase();
    const reservedHost = host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host.endsWith('.local') || host.endsWith('.test') || host.endsWith('.example') || host === 'example.com';
    return parsed.protocol === 'https:' && !reservedHost;
  } catch {
    return false;
  }
}

const name = configuredName;
const url = normalizedUrl(configuredUrl);
const isApprovedBrand = name === approvedBrand.name;
const hasProductionUrl = isPublicHttpsUrl(configuredUrl) && url === approvedBrand.siteUrl;
const hasConfiguredContact = configuredContactEmail === approvedBrand.contactEmail;
const contentLaunchApproved = process.env.CONTENT_LAUNCH_APPROVED === 'true';
const trustPagesApproved = process.env.TRUST_PAGES_APPROVED === 'true';
const isLaunchReady = Boolean(
  process.env.SITE_LAUNCH_READY === 'true' &&
    hasProductionUrl &&
    isApprovedBrand &&
    hasConfiguredContact &&
    contentLaunchApproved &&
    trustPagesApproved,
);

export const siteConfig = {
  name,
  editorialByline: `${name} Editorial`,
  status: isLaunchReady ? 'PRACTICAL AUTOMATION' : 'PRE-LAUNCH',
  isApprovedBrand,
  positioning: approvedBrand.positioning,
  tagline: approvedBrand.tagline,
  promise: approvedBrand.tagline,
  description:
    `${name} helps small businesses plan practical automation, starting with lead follow-up, quote preparation, and booking handoffs for US residential cleaning businesses.`,
  url,
  hasProductionUrl,
  hasConfiguredContact,
  contentLaunchApproved,
  trustPagesApproved,
  isLaunchReady,
  contactEmail: approvedBrand.contactEmail,
  contactHref: `mailto:${approvedBrand.contactEmail}`,
  google: {
    siteVerification: process.env.GOOGLE_SITE_VERIFICATION?.trim() || null,
    analyticsMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
    adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?.trim() || null,
  },
} as const;
