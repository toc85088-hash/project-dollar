export type HubIndexingPolicy = {
  contentReady: boolean;
  currentStatus: 'foundation_draft' | 'method_only' | 'roadmap_only' | 'empty_publication';
  reason: string;
  humanActionRequired: string;
};

export const hubIndexingPolicies = {
  'ai-automation': {
    contentReady: false,
    currentStatus: 'foundation_draft',
    reason: 'The hub contains an editorial framework, but its foundation article and supporting evidence are not approved.',
    humanActionRequired: 'Approve the hub copy and at least one evidence-complete supporting article before changing contentReady.',
  },
  workflows: {
    contentReady: false,
    currentStatus: 'roadmap_only',
    reason: 'The route describes the planned workflow cluster; no tested workflow articles are published.',
    humanActionRequired: 'Publish and review useful workflow content, then approve the hub as a standalone reader resource.',
  },
  'ai-tools': {
    contentReady: false,
    currentStatus: 'method_only',
    reason: 'The route explains evaluation criteria, but contains no completed first-hand tool evaluations.',
    humanActionRequired: 'Complete real tool testing and approve substantive hub content.',
  },
  tutorials: {
    contentReady: false,
    currentStatus: 'method_only',
    reason: 'The route describes the tutorial standard; no verified tutorials are published.',
    humanActionRequired: 'Publish at least one complete tested tutorial and approve the hub copy.',
  },
  comparisons: {
    contentReady: false,
    currentStatus: 'method_only',
    reason: 'The route describes comparison methodology; Zapier vs Make testing and any verdict remain blocked.',
    humanActionRequired: 'Complete same-scenario testing, fact checking, disclosures, and human approval before indexing.',
  },
  templates: {
    contentReady: false,
    currentStatus: 'roadmap_only',
    reason: 'The route lists planned resources; no tested, accessible download is available.',
    humanActionRequired: 'Create and usability-test a real resource, then approve the hub as useful without a download claim gap.',
  },
  blog: {
    contentReady: false,
    currentStatus: 'empty_publication',
    reason: 'The editorial queue has briefs and drafts, but zero publishable articles.',
    humanActionRequired: 'Publish approved original articles and review the Blog landing page before changing contentReady.',
  },
} as const satisfies Record<string, HubIndexingPolicy>;

export type HubSlug = keyof typeof hubIndexingPolicies;

export function getHubIndexingPolicy(slug: string): HubIndexingPolicy | undefined {
  return hubIndexingPolicies[slug as HubSlug];
}

export function isStandardRouteIndexable(slug: string, siteLaunchReady: boolean) {
  if (!siteLaunchReady) return false;
  const hubPolicy = getHubIndexingPolicy(slug);
  return hubPolicy ? hubPolicy.contentReady : true;
}
