export type HubIndexingPolicy = {
  contentReady: boolean;
  currentStatus: 'foundation_ready' | 'method_only' | 'roadmap_only' | 'empty_publication' | 'review_queue';
  reason: string;
  humanActionRequired: string;
};

export const hubIndexingPolicies = {
  'ai-automation': {
    contentReady: false,
    currentStatus: 'foundation_ready',
    reason: 'The generic framework is retained as an unindexed resource while the first commercial MVP focuses on residential cleaning.',
    humanActionRequired: 'Review its role after the Cleaning MVP; generic content is not approved for indexing by this sprint.',
  },
  workflows: {
    contentReady: false,
    currentStatus: 'review_queue',
    reason: 'Six substantive workflow guides are in editorial review, but none has final human approval or a publication date.',
    humanActionRequired: 'Approve the workflow guides, publish only the accepted records, review the hub with its live links, then change contentReady.',
  },
  'ai-tools': {
    contentReady: false,
    currentStatus: 'method_only',
    reason: 'The route explains evaluation criteria, but contains no completed first-hand tool evaluations.',
    humanActionRequired: 'Complete real tool testing and approve substantive hub content.',
  },
  tutorials: {
    contentReady: false,
    currentStatus: 'review_queue',
    reason: 'One vendor-neutral task-automation tutorial is in editorial review; no tutorial is publicly publishable yet.',
    humanActionRequired: 'Approve and publish the tutorial, review the hub with its live article card, then change contentReady.',
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
    currentStatus: 'review_queue',
    reason: 'Seven evidence-bounded launch guides await human approval; the public article count remains zero.',
    humanActionRequired: 'Approve and publish the accepted articles, verify the generated guide list, then change contentReady.',
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
