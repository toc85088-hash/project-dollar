export const siteConfig = {
  name: 'PROJECT DOLLAR',
  status: 'TEMPORARY BRAND NAME',
  tagline: 'Simple AI Automation for Small Business',
  promise: 'No coding. No AI hype. Just practical workflows that save time and money.',
  description:
    'Practical, evidence-led AI automation guides, workflows, tool comparisons, and templates for non-technical small business owners.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@example.com',
} as const;
