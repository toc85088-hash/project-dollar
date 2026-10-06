import { cleaningMvp } from '../industries';

// Approved by the owner on 2026-09-23; this is our setup offer, not vendor pricing.
export const cleaningOffer = {
  price: 'US$149–199',
  priceScope: 'Pilot setup for one inquiry source and one residential cleaning service. Final scope and fee are agreed in writing before work begins.',
  primaryCta: { label: 'Get a Free 90-Second Demo', href: cleaningMvp.demoPath },
  secondaryCta: {
    label: 'Ask About the Pilot Setup',
    href: cleaningMvp.pilotPath,
  },
} as const;
