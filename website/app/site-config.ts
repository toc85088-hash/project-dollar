const configuredName = process.env.NEXT_PUBLIC_SITE_NAME?.trim();
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const fallbackUrl = 'http://localhost:3000';

function normalizedUrl(value?: string) {
  if (!value) return fallbackUrl;
  try {
    return new URL(value).origin;
  } catch {
    return fallbackUrl;
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

const name = configuredName || 'PROJECT DOLLAR';
const isTemporaryBrand = !configuredName || name === 'PROJECT DOLLAR';
const hasProductionUrl = isPublicHttpsUrl(configuredUrl);
const hasConfiguredContact = Boolean(
  configuredContactEmail &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredContactEmail) &&
    !configuredContactEmail.toLowerCase().endsWith('@example.com'),
);
const contentLaunchApproved = process.env.CONTENT_LAUNCH_APPROVED === 'true';
const trustPagesApproved = process.env.TRUST_PAGES_APPROVED === 'true';
const isLaunchReady = Boolean(
  process.env.SITE_LAUNCH_READY === 'true' &&
    hasProductionUrl &&
    !isTemporaryBrand &&
    hasConfiguredContact &&
    contentLaunchApproved &&
    trustPagesApproved,
);

export const siteConfig = {
  name,
  mark: name.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
  status: isTemporaryBrand ? 'TEMPORARY BRAND NAME' : 'INDEPENDENT PUBLICATION',
  isTemporaryBrand,
  tagline: 'Simple AI Automation for Small Business',
  promise: 'No coding. No AI hype. Just practical workflows that save time and money.',
  description:
    'Practical, evidence-led AI automation guides, workflows, tool comparisons, and templates for non-technical small business owners.',
  url: normalizedUrl(configuredUrl),
  hasProductionUrl,
  hasConfiguredContact,
  contentLaunchApproved,
  trustPagesApproved,
  isLaunchReady,
  contactEmail: hasConfiguredContact ? configuredContactEmail! : null,
  google: {
    siteVerification: process.env.GOOGLE_SITE_VERIFICATION?.trim() || null,
    analyticsMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
    adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?.trim() || null,
  },
} as const;
