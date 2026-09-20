export type CleaningLead = {
  testId: string;
  firstName: string;
  replyEmail: string;
  zip: string;
  service: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  timing: string;
};

export const demoCases: Array<{ label: string; lead: CleaningLead }> = [
  { label: 'Complete inquiry', lead: { testId: 'NAV-CLN-S1-20260921-OK', firstName: 'Morgan', replyEmail: 'morgan@cleaning-demo.test', zip: '78701', service: 'Standard clean', frequency: 'Every two weeks', bedrooms: 3, bathrooms: 2, timing: 'A weekday morning, subject to confirmation' } },
  { label: 'Missing reply email', lead: { testId: 'NAV-CLN-S1-20260921-NOEMAIL', firstName: 'Riley', replyEmail: '', zip: '78701', service: 'Standard clean', frequency: 'One time', bedrooms: 2, bathrooms: 1, timing: 'Not specified' } },
  { label: 'Outside demo service area', lead: { testId: 'NAV-CLN-S1-20260921-AREA', firstName: 'Jordan', replyEmail: 'jordan@cleaning-demo.test', zip: '10001', service: 'Standard clean', frequency: 'One time', bedrooms: 2, bathrooms: 2, timing: 'Flexible' } },
];

export type DemoResult = {
  status: 'READY FOR OWNER REVIEW' | 'MANUAL REVIEW' | 'DUPLICATE SKIPPED';
  reason: string;
  draft: { subject: string; body: string } | null;
  task: string | null;
  quoteChecklist: string[];
  bookingStatus: 'NOT CONFIRMED';
  log: { testId: string; status: string; nextOwner: string; emailSent: false };
};

export function processCleaningLead(lead: CleaningLead, previousIds: readonly string[] = []): DemoResult {
  const base = { bookingStatus: 'NOT CONFIRMED' as const, quoteChecklist: [] as string[] };
  const log = (status: string) => ({ testId: lead.testId, status, nextOwner: 'Cleaning business owner', emailSent: false as const });
  if (previousIds.includes(lead.testId)) return { ...base, status: 'DUPLICATE SKIPPED', reason: 'This test ID already has a result in this browser session. Review the original record before retrying.', draft: null, task: null, log: log('DUPLICATE SKIPPED') };
  const problems: string[] = [];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.replyEmail.trim())) problems.push('A valid reply email is missing. Check the original inquiry; do not guess an address.');
  if (lead.zip.trim() !== '78701') problems.push('The ZIP is outside the illustrative service area. The owner must check actual coverage.');
  if (!['Standard clean', 'Deep clean', 'Move-out clean'].includes(lead.service)) problems.push('The service is not in the demo service list. The owner must review scope.');
  if (!lead.firstName.trim() || !Number.isInteger(lead.bedrooms) || lead.bedrooms < 0 || !Number.isInteger(lead.bathrooms) || lead.bathrooms < 1) problems.push('Home or inquiry details need review.');
  if (problems.length) return { ...base, status: 'MANUAL REVIEW', reason: problems.join(' '), draft: null, task: `Review ${lead.testId} against the original inquiry. Resolve the missing or out-of-scope details manually.`, log: log('MANUAL REVIEW') };
  return {
    ...base,
    status: 'READY FOR OWNER REVIEW',
    reason: 'Required demo fields are present and the ZIP matches the illustrative area. The owner still reviews the reply and scope.',
    draft: {
      subject: `Your ${lead.service.toLowerCase()} inquiry`,
      body: `Hi ${lead.firstName},\n\nThank you for asking about a ${lead.service.toLowerCase()} for your ${lead.bedrooms}-bedroom, ${lead.bathrooms}-bathroom home. We have noted your preference: ${lead.frequency.toLowerCase()}.\n\nCould you confirm the approximate square footage and any requested add-ons? Our team will review the scope and availability before preparing a quote or confirming a booking.\n\nThank you,\nThe cleaning team`,
    },
    task: `Review draft for ${lead.testId}; confirm home size, add-ons, scope, and available timing. Approve the quote separately before offering a booking.`,
    quoteChecklist: ['Confirm approximate square footage', 'Confirm requested add-ons and property conditions', 'Review the business’s approved pricing rules', 'Confirm crew availability before proposing a slot'],
    log: log('READY FOR OWNER REVIEW'),
  };
}
