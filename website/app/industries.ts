// The parent brand remains general. Only the first vertical has public routes.
export const industries = [
  { slug: 'cleaning', label: 'Residential Cleaning', market: 'United States', stage: 'mvp' },
  { slug: 'hvac', label: 'HVAC', market: 'United States', stage: 'planned' },
  { slug: 'plumbing', label: 'Plumbing', market: 'United States', stage: 'planned' },
  { slug: 'landscaping', label: 'Landscaping', market: 'United States', stage: 'planned' },
  { slug: 'pest-control', label: 'Pest Control', market: 'United States', stage: 'planned' },
  { slug: 'other-home-services', label: 'Other Home Services', market: 'United States', stage: 'planned' },
] as const;

export const cleaningMvp = {
  title: 'Lead Follow-Up Automation for US Cleaning Businesses',
  description: 'Plan a residential cleaning inquiry workflow that prepares reply drafts, gathers quote details, and hands booking decisions to your team.',
  servicePath: '/cleaning',
  demoPath: '/cleaning/demo',
  pilotPath: '/cleaning/pilot',
  contentReady: false,
  updatedAt: '2026-09-21',
} as const;
