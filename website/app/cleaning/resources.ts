// Service-support resources, not additions to the legacy draft article registry.
// Public readability does not constitute owner approval for search indexing.
export type CleaningSeoPage = { path: string; title: string; description: string; contentReady: boolean; updatedAt: string };
type ResourceSection = { id: string; heading: string; paragraphs: string[]; bullets?: string[]; example?: string; sourceIds?: string[] };
export type CleaningResource = CleaningSeoPage & {
  slug: string; label: string; intent: string; answer: string;
  sections: ResourceSection[];
  checks: { input: string; expected: string }[];
  related: string[];
};
export const resourceSources = {
  forms: { label: 'Google Forms: choose where to save responses', href: 'https://support.google.com/docs/answer/2917686?hl=en', checked: '2026-10-08' },
  booking: { label: 'Jobber: online booking and request forms', href: 'https://help.getjobber.com/en/articles/online-booking/', checked: '2026-10-08' },
  automations: { label: 'Jobber: automations and quote follow-ups', href: 'https://help.getjobber.com/en/articles/automations/', checked: '2026-10-08' },
  approvals: { label: 'Jobber: quote approvals, changes and conversion to jobs', href: 'https://help.getjobber.com/en/articles/quote-approvals/', checked: '2026-10-08' },
} as const;

export const cleaningLanding: CleaningSeoPage = {
  path: '/cleaning', title: 'Cleaning Business Automation for Lead Follow-Up',
  description: 'Plan a focused automation pilot for your US residential cleaning business: lead follow-up, quote preparation and booking handoffs with human review.',
  contentReady: false, updatedAt: '2026-10-08',
};

export const cleaningResources: CleaningResource[] = [
  {
    slug: 'lead-follow-up', path: '/cleaning/lead-follow-up', label: 'New lead follow-up',
    title: 'Cleaning Lead Follow-Up: A Practical Workflow',
    description: 'Build a cleaning lead follow-up queue with required fields, reply drafts, an assigned owner and clear stop rules. Includes a manual fallback and test checklist.',
    contentReady: false, updatedAt: '2026-10-08', intent: 'Handle a new residential cleaning inquiry before a quote exists.',
    answer: 'Start with one intake record, one responsible person and one next action. Check whether you can reply and whether the request fits your service. Prepare a response for review, log the outcome, and route missing information to a person. A new lead is not a confirmed job.',
    sections: [
      { id: 'fit', heading: 'Use this for inbound requests, not a cold campaign', paragraphs: [
        'This workflow is for a US residential cleaning owner who already receives inquiries through a website form or inbox. It addresses the gap between receiving a request and knowing who should handle it next. It does not find leads, sell a contact list or promise more bookings.',
        'Keep the first version narrow. Choose one source that you can inspect manually and one shared queue your office actually checks. If the existing volume is easy to manage reliably, an assigned inbox and a checklist may be enough. Automating a step nobody owns only makes the responsibility harder to see.',
        'Missed phone calls need a separate callback process. Do not infer an email address or automatically text an unidentified caller. Before adding customer messaging, review the permitted channels, communication preferences and stop rules with the business owner.',
      ] },
      { id: 'intake', heading: 'Collect enough to decide the next step', paragraphs: [
        'Use a request ID that stays with the inquiry, even if the same event is retried. Record the source and received time, the customer’s name and reply channel, the requested service, service-area information, an owner and a next-action date. Keep the original message accessible to the reviewer rather than relying only on a summary.',
        'For quote preparation, ask about cleaning type, frequency, approximate home size and requested add-ons. Distinguish a blank answer from “not applicable.” Ask for an exact property address only when needed for scope or scheduling; do not collect entry codes, payment details or customer identity documents in a lead-tracking sheet.',
        'If you use Google Forms, Google documents saving responses in a new or existing linked spreadsheet. That is an intake option, not a complete follow-up system. Google also notes that form and sheet access need separate attention when permissions change. Restrict access to the people handling the inquiry.',
      ], sourceIds: ['forms'] },
      { id: 'route', heading: 'Give every record an explicit destination', paragraphs: [
        'Use a small set of statuses that describe the next action rather than optimism about the sale. These are proposed operating rules, not features we have tested in your software.',
      ], bullets: [
        'NEW: captured, with an owner assigned, but not yet reviewed.',
        'NEEDS DETAILS: a reply channel or required service detail is absent; a person checks the original inquiry.',
        'READY FOR REVIEW: required fields are present and the request appears to fit; prepare an acknowledgment draft.',
        'WAITING FOR CUSTOMER: a reviewed message has actually been sent and the reply is still outstanding.',
        'QUOTE PREPARATION: enough detail exists for a person to scope and price the work.',
        'CLOSED or DO NOT CONTACT: no further follow-up is scheduled; keep the reason without inventing one.',
      ] },
      { id: 'reply', heading: 'Acknowledge the request without making promises', paragraphs: [
        'A first reply should show what was understood, ask for the next missing detail and explain the review boundary. Do not include a price, discount or available appointment unless a person has verified it. A predictable acknowledgment can use fixed wording; AI is not required.',
        'Fictional example to adapt, not a message sent by this site: a homeowner asks about a recurring clean but has not supplied home size. The owner should check the recipient, service wording and actual next step before using the draft below.',
      ], example: 'Thanks for asking about recurring home cleaning. Before we prepare an estimate, could you tell us the approximate home size and any add-ons you would like considered? We will review the scope and availability before confirming a price or appointment.' },
      { id: 'ownership', heading: 'Decide when a person checks the queue', paragraphs: [
        'Choose review windows the team can sustain during its actual operating hours. An after-hours acknowledgment is not a promise that someone is available immediately. Give each waiting request a next-action date based on the conversation, not a universal “best” response interval.',
        'At review time, check for a newer customer reply, an existing customer record, a duplicate request and any instruction not to continue. A response about the same property may need to join an existing conversation rather than create a second task. Assign a backup owner for absences.',
        'Do not mark a message sent merely because a draft was created or a notification was accepted by a provider. Keep preparation, send confirmation and customer response as separate events. For quotes already sent, use the separate quote-follow-up process linked below.',
      ] },
      { id: 'tool-choice', heading: 'Check the native workflow before adding a connector', paragraphs: [
        'Start with your current form, inbox or service software. Jobber, for example, documents request forms that can collect information for review before scheduling, with booking as an optional form behavior. Inspect the settings in the actual account; this documentation check is not a tested recommendation or a statement about your plan.',
        'Consider an external connector only for a specific missing handoff, such as preparing an internal review task. Document which account can read the source, which fields it needs and how it reports failure. Do not grant broad access merely because a template asks for it.',
      ], sourceIds: ['booking'] },
      { id: 'fallback', heading: 'Keep a manual path that does not depend on the automation', paragraphs: [
        'If the queue stops updating, pause the affected handoff and check the original inbox or form responses. Assign a reviewer, record the request ID in the existing tracker and prepare a reply manually. Reconcile drafts and sent messages before retrying so the same lead is not contacted twice.',
        'Review missed records, duplicate tasks, unresolved details and corrections to drafts. Measure your actual handling effort before and after a change with the same definition of an eligible inquiry. Do not treat a small test or a faster notification as evidence of increased revenue.',
      ] },
    ],
    checks: [
      { input: 'Complete fictional request', expected: 'One review record and one owner; draft contains no unsupported price or date.' },
      { input: 'Reply address missing', expected: 'NEEDS DETAILS; inspect the source, do not guess or send.' },
      { input: 'Same request ID delivered again', expected: 'Existing record reused; no second task or message.' },
      { input: 'Unsupported service or area', expected: 'Owner reviews the exception; no acceptance promise.' },
      { input: 'Customer replies before the reminder', expected: 'Old follow-up paused and owner alerted to the new context.' },
      { input: 'Tracker unavailable after a draft was created', expected: 'Partial failure visible; reconcile the draft before retrying.' },
    ], related: ['quote-follow-up', 'booking-automation'],
  },
  {
    slug: 'quote-follow-up', path: '/cleaning/quote-follow-up', label: 'Outstanding quote follow-up',
    title: 'Cleaning Quote Follow-Up: Messages and Stop Rules',
    description: 'Follow up on a residential cleaning quote without inventing urgency. Use quote status, reviewed messages, stop rules and a practical tracking checklist.',
    contentReady: false, updatedAt: '2026-10-08', intent: 'Follow up after a real cleaning quote has been prepared and sent.',
    answer: 'Follow up on the current quote, not on a timer alone. Confirm that it was sent, is still valid and has no new reply or requested change. Assign a reviewer, ask one useful question, and stop the sequence when the customer responds, declines or asks not to be contacted.',
    sections: [
      { id: 'before-follow-up', heading: 'First establish which quote you are following up on', paragraphs: [
        'This process starts after a person has approved and sent a residential cleaning quote. If you still need home size, service frequency or scope information, return to lead follow-up. Do not turn an incomplete request into a guessed price simply to start a sequence.',
        'Keep a quote ID and version, the approved scope, the recipient, when and how it was sent, the owner, the last customer reply and the next review date. Store the current quote in one authoritative place. A copied amount in an old message can become wrong after an add-on or scope change.',
        'Useful statuses are AWAITING RESPONSE, CHANGES REQUESTED, ACCEPTED, DECLINED, EXPIRED and DO NOT CONTACT. Define who may move a record between them. “Email sent” is not “customer approved,” and approval is not a reserved cleaning appointment.',
      ] },
      { id: 'timing', heading: 'Choose a review date, not an endless sequence', paragraphs: [
        'Ask when the customer expects to decide and use that context when setting the next review. If no date was agreed, choose a modest internal review point within your business hours and check the conversation before contacting them. There is no universally proven follow-up cadence offered here.',
        'At that review, verify delivery information if available, the current scope and any actual validity period on the quote. If the customer has already replied through another channel, update the record and cancel the stale reminder. A quiet quote may mean changed plans; do not assume it is an objection to overcome.',
        'Decide in advance when the owner will close an unanswered inquiry. Closing the review task should stop additional messages, not enroll the contact in a win-back campaign. Do not invent an expiring discount, busy calendar or last available slot to force a response.',
      ] },
      { id: 'messages', heading: 'Use a message with a specific purpose', paragraphs: [
        'The following original examples are wording to adapt to an existing conversation, not tested conversion scripts. Keep the customer’s real quote available to the reviewer. Use a direct question about the decision or missing information rather than claiming to know why the customer has not replied.',
        'For a first check-in after a recurring-cleaning quote, a reviewer could adapt this message:',
      ], example: 'I’m following up on the recurring cleaning quote we sent. Does the proposed scope match what you need, or is there anything you would like clarified before deciding? We can review changes before you move forward. An appointment will be confirmed separately.' },
      { id: 'scope-change', heading: 'Treat a requested change as a new review, not another nudge', paragraphs: [
        'If the customer changes the frequency, asks for an add-on or describes a different property condition, pause follow-up on the old quote. The estimator should decide whether the price and work description need revision. Send the revised version only after approval, and make clear which version replaces the earlier one.',
        'A fictional change-request reply could say: “Thanks for clarifying the add-on. We will review it against the original scope and send an updated quote if needed. Please do not rely on the earlier total for the changed work.” Use this only when that accurately describes your next action.',
        'For a customer who no longer wants to proceed, acknowledge the decision if appropriate and close the task. Do not add another persuasion message. A request to stop contact should remain visible to anyone handling the same record.',
      ] },
      { id: 'native-tools', heading: 'Inspect built-in quote follow-up before connecting another tool', paragraphs: [
        'Jobber’s documentation describes automatic quote reminders, plan-dependent availability and communication settings. That is a reason to check existing settings before layering another reminder on top, not evidence that the feature is suitable for every cleaning business or included in your subscription.',
        'Its quote-approval documentation also distinguishes requested changes, approved quotes and conversion to a job. For your chosen software, confirm exactly which events stop reminders and whether a phone response needs manual entry. Test that behavior instead of assuming a label or status does it for you.',
        'This guide does not rank CRMs, quote a current software price or claim a hands-on test of Jobber. Vendor features can change; review the linked documentation and your actual account before enabling a sequence.',
      ], sourceIds: ['automations', 'approvals'] },
      { id: 'review-and-stop', heading: 'A review checklist before every customer message', paragraphs: [
        'Compare the outgoing draft with the current quote and original conversation. Check the recipient, scope, version, tone, reply channel and next action. Remove any invented price, discount, testimonial or promise about available dates. If an AI tool helps draft wording, it should not decide these facts.',
        'Do not automate new SMS campaigns as part of this starter workflow. The business needs to resolve channel permissions, preferences and applicable requirements before changing how it contacts people. A quote request is not a reason to add unrelated promotions.',
      ], bullets: [
        'Stop on a reply, requested change, decline, expired quote or instruction not to contact.',
        'Pause when the owner is unsure which quote or recipient is correct.',
        'Check existing native reminders so an external workflow does not send a duplicate.',
        'Route an accepted quote to scheduling review; do not promise a slot from this sequence.',
      ] },
      { id: 'recovery', heading: 'Recover manually and measure what actually happened', paragraphs: [
        'If a reminder fails, inspect the quote record and customer conversation before trying again. Check whether the provider accepted the previous message and whether the recipient replied. Mark uncertain delivery for manual review; a network timeout is not proof that nothing was sent.',
        'A small tracking sheet can record the quote version, review date, reviewer, message outcome and closure reason. Keep only data needed for the work and restrict access. Compare overdue review tasks and stale-quote errors before and after the change. Any claim about bookings or revenue needs separate evidence and cannot be inferred from a reminder being sent.',
      ] },
    ],
    checks: [
      { input: 'Current quote awaiting response', expected: 'One review task referencing the correct quote version.' },
      { input: 'Customer has asked for a scope change', expected: 'Follow-up paused; estimator reviews a revision.' },
      { input: 'Quote accepted before the reminder', expected: 'Reminder canceled; scheduling review created separately.' },
      { input: 'Customer declines or requests no contact', expected: 'No later sequence message; closure reason visible.' },
      { input: 'Duplicate timer event or native reminder', expected: 'No duplicate external message or review task.' },
      { input: 'Send result uncertain', expected: 'Manual reconciliation before retrying; not labeled delivered.' },
    ], related: ['lead-follow-up', 'booking-automation'],
  },
  {
    slug: 'booking-automation', path: '/cleaning/booking-automation', label: 'Booking request handoff',
    title: 'Cleaning Booking Automation: Request to Confirmation',
    description: 'Separate cleaning booking requests from confirmed appointments. Plan availability checks, owner approval, rescheduling and a safe manual fallback.',
    contentReady: false, updatedAt: '2026-10-08', intent: 'Choose and design a safe booking handoff for residential cleaning.',
    answer: 'Use automation to collect preferences and prepare a scheduling review before promising a slot. Confirm the scope, duration, crew capacity and travel constraints in the business’s authoritative schedule. Only an authorized person should turn a request into a confirmed appointment in this starter workflow.',
    sections: [
      { id: 'choose-mode', heading: 'Choose between a request, an assessment and a bookable job', paragraphs: [
        'A request form asks for preferred timing and work details. It should leave the appointment unconfirmed. An assessment booking reserves a conversation or inspection, not necessarily a cleaning visit. Direct job booking lets the customer select a slot that the software treats as bookable. These are different promises.',
        'For variable home conditions, uncertain scope or a changing crew schedule, start with request-and-review. Direct booking needs service definitions, duration rules, capacity and exceptions that the team can keep accurate. An open block on a calendar is not enough to establish that the right crew can perform the work.',
        'Jobber documents request forms that can optionally include booking questions for assessments or jobs. This illustrates why the form setting matters: do not assume every “booking form” merely collects a preference. Verify what your chosen form creates and what message the customer sees.',
      ], sourceIds: ['booking'] },
      { id: 'handoff', heading: 'Prepare a scheduling packet from the accepted scope', paragraphs: [
        'Pass the current quote or approved service scope, property location needed for scheduling, frequency, requested date or window, relevant restrictions and a reliable reply channel to the scheduling owner. Keep the request ID so a retry can find the same record.',
        'Do not put lockbox codes, payment details or unnecessary personal information into a shared calendar title. Use the business’s approved system and access controls for operational details that actually need protection. A lead tracker should not become an unrestricted home-access directory.',
        'Before offering a time, the scheduler should check the latest scope and duration, crew skills and capacity, travel between jobs and the business’s cancellation or change process. Define the time zone of the offered appointment. If the business serves multiple time zones, record that explicitly rather than interpreting a bare time.',
      ] },
      { id: 'state', heading: 'Keep requested, offered and confirmed separate', paragraphs: [
        'Use REQUESTED when the customer gives a preference; REVIEWING while an owner checks the schedule; OFFERED only after a person has checked a proposed time; and CONFIRMED only when the business’s actual acceptance conditions are met and recorded. Add CHANGE REQUESTED and CANCELED rather than overwriting history.',
        'Write down whether an offered time is held, for how long, and by which system. If there is no real hold, do not imply one in the message. Two people should not independently promise the same crew slot from different inboxes. Choose one scheduling authority and check it again before confirmation.',
        'An accepted quote does not eliminate this step. Jobber’s documentation describes converting an approved quote into a job to set up the schedule. For your own software, verify how quote acceptance, job creation and visit scheduling relate instead of treating them as one event.',
      ], sourceIds: ['approvals'] },
      { id: 'wording', heading: 'Tell the customer what is and is not confirmed', paragraphs: [
        'For a fictional customer who requests a weekday morning, a reviewed acknowledgment could use the wording below. It is an example, not evidence of a connected scheduling system or a real appointment.',
      ], example: 'We have your request for a weekday morning clean. We will check the agreed scope and crew availability before offering a time. Your appointment is not confirmed yet. Please let us know if your timing requirements change.' },
      { id: 'changes', heading: 'Plan rescheduling before adding reminders', paragraphs: [
        'A reschedule request should alert the scheduling owner and pause reminders that refer to the old visit. Keep a record of the old appointment and the requested change until the owner has resolved the conflict. Do not silently move a customer into a new time because a connector wrote to a calendar.',
        'For recurring cleaning, check the actual recurrence pattern and exceptions such as holidays, skipped visits or changed service frequency. Changing one visit and changing the entire series have different effects. Test the chosen software’s behavior with fictional records before allowing either action in a live workflow.',
        'A cancellation should stop upcoming reminders for that visit and trigger the business’s existing review process. Do not invent a fee or promise a refund. Payments, cancellation charges and policy decisions are outside this starter automation.',
      ] },
      { id: 'select-tools', heading: 'What to ask of scheduling software', paragraphs: [
        'Inspect the native settings before adding a second calendar or connector. Ask which system is authoritative, how busy time is updated, who may confirm visits and what happens if a write fails. Check the account’s plan and supported integration; a product page is not proof that your configuration works.',
        'A useful walkthrough should show how the system handles the exceptions below, not just a clean booking. Do not buy a platform because of an unverified promise about automatic scheduling. This page does not provide a product ranking, price comparison or tested integration verdict.',
        'Keep customer emails and booking notifications separate from internal alerts. A draft or internal task is not a customer confirmation. The browser demo illustrates draft-and-review behavior and does not create a calendar booking, connect accounts or hold a slot.',
      ] },
      { id: 'manual', heading: 'Use the original request as the recovery point', paragraphs: [
        'If synchronization fails, pause the affected handoff. The scheduler should inspect the original request and the authoritative schedule, check whether a job or message was already created, and record the decision manually. Do not retry a booking write until you know whether the first attempt succeeded.',
        'Track requests that needed clarification, conflicts caught before confirmation, duplicate records and changes requiring manual intervention. These observations help decide whether the workflow is dependable enough to extend. They do not establish time savings or more bookings without a comparable baseline.',
      ] },
    ],
    checks: [
      { input: 'Preferred slot with complete scope', expected: 'Review task created; no appointment confirmed automatically.' },
      { input: 'Two requests for the same crew slot', expected: 'Scheduling owner resolves conflict; no double commitment.' },
      { input: 'Scope changes after quote acceptance', expected: 'Duration and availability reviewed again before confirmation.' },
      { input: 'Customer changes one recurring visit', expected: 'Correct visit reviewed; no unintended series-wide change.' },
      { input: 'Cancellation arrives before a reminder', expected: 'Old visit reminder stopped and owner notified.' },
      { input: 'Calendar write times out', expected: 'Existing event checked before retry; uncertain state visible.' },
    ], related: ['lead-follow-up', 'quote-follow-up'],
  },
];

export function getCleaningResource(slug: string) { return cleaningResources.find(resource => resource.slug === slug); }
export function cleaningIndexingPolicy(page: CleaningSeoPage, launchReady: boolean) {
  const indexable = launchReady && page.contentReady;
  return { indexable, canonical: indexable ? page.path : null };
}
export function getIndexableCleaningPages(launchReady: boolean) {
  return [cleaningLanding, ...cleaningResources].filter(page => cleaningIndexingPolicy(page, launchReady).indexable);
}
