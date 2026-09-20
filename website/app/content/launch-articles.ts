import type { ArticleRecord } from './articles';
import { siteConfig } from '../site-config';

const verifiedOn = '2026-09-18';

const nistCore = {
  label: 'NIST AI RMF Core: governance, mapping, measurement, and human oversight',
  href: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/',
  verifiedOn,
};

const nistGenAi = {
  label: 'NIST AI RMF Generative AI Profile',
  href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
  verifiedOn,
};

const oaicCommercialAi = {
  label: 'OAIC: privacy and the use of commercially available AI products',
  href: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
  verifiedOn,
};

const icoAiGuidance = {
  label: 'UK ICO: about its AI and data protection guidance',
  href: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/about-this-guidance/',
  verifiedOn,
};

const canadaAiPrinciples = {
  label: 'Office of the Privacy Commissioner of Canada: privacy principles for generative AI',
  href: 'https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai',
  verifiedOn,
};

export const launchArticleRecords: ArticleRecord[] = [
  {
    slug: 'automate-repetitive-tasks-small-business',
    path: '/tutorials/automate-repetitive-tasks-small-business',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'PRACTICAL TUTORIAL',
    categoryHref: '/tutorials',
    title: 'How to Automate Repetitive Tasks in a Small Business',
    description: 'A no-code, tool-neutral process for choosing, mapping, testing, and maintaining one small-business automation without losing human control.',
    dek: 'Inventory the work, choose one low-risk handoff, map the exceptions, test with fictional data, and keep the manual route available.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: `This is a vendor-neutral operating method. It does not claim that ${siteConfig.name} tested a particular product, setup time, saving, error rate, or free plan.`,
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance],
    relatedArticleSlugs: ['small-business-automation-ideas', 'ai-email-automation-small-business'],
    sections: [
      {
        eyebrow: 'THE SHORT ANSWER',
        heading: 'Automate one clear handoff, not an entire department.',
        paragraphs: [
          'The safest starting point is a repetitive task with a visible trigger, consistent inputs, a checkable output, and a person who can stop or correct it. Write the manual process first. Then automate only the stable steps.',
          'A first workflow should not approve money, make a sensitive decision, delete an authoritative record, or send an irreversible customer promise. If a mistake cannot be caught before harm, keep that step manual.',
        ],
        tone: 'callout',
      },
      {
        heading: '1. Keep a one-week task inventory',
        paragraphs: [
          'For five working days, record recurring tasks when they happen. Capture the trigger, the information you need, the action you take, the result, the usual exceptions, and who notices a problem. Do not begin with a list of software features.',
          'Look for repeated copying, routing, reminders, draft preparation, and internal status updates. These often have clearer boundaries than work that depends on negotiation, empathy, policy interpretation, or professional judgement.',
        ],
        table: {
          label: 'Repetitive task inventory fields',
          headers: ['Field', 'Question to answer'],
          rows: [
            ['Trigger', 'What event starts the work?'],
            ['Inputs', 'Which fields or documents are genuinely required?'],
            ['Rules', 'Which steps happen the same way each time?'],
            ['Exceptions', 'What makes a person stop and investigate?'],
            ['Output', 'What observable result means the task is complete?'],
            ['Owner', 'Who reviews failures and maintains the process?'],
          ],
        },
      },
      {
        heading: '2. Reject risky candidates before scoring convenience',
        paragraphs: [
          'Frequency and frustration make a task noticeable, but they do not make it safe. Reject a first candidate when it handles sensitive data without a reviewed data path, creates a legal or financial commitment, affects someone’s rights, or regularly needs context that is not written down.',
          'NIST’s AI Risk Management Framework emphasizes defining the supported task, documenting knowledge limits, assigning human-oversight roles, and testing under conditions similar to use. For a small business, that translates into a simple rule: the owner must know what the workflow is allowed to do, what it must never do, and how to take over.',
        ],
        bullets: [
          'Prefer internal drafts over automatic external sends.',
          'Prefer reversible updates over deletion or replacement.',
          'Prefer structured fields over unrestricted free text.',
          'Prefer one responsible owner over a shared assumption that someone is watching.',
        ],
      },
      {
        heading: '3. Map the current process on one page',
        steps: [
          { title: 'Trigger.', text: 'Name the event that starts one run.' },
          { title: 'Required input.', text: 'List the minimum fields and their source.' },
          { title: 'Rules.', text: 'Write only the repeatable decisions.' },
          { title: 'Exceptions.', text: 'Define missing, conflicting, sensitive, or unusual inputs.' },
          { title: 'Output.', text: 'Describe the record, draft, task, or notification created.' },
          { title: 'Review.', text: 'Name the person and the checks they perform.' },
          { title: 'Fallback.', text: 'Describe how the work continues when automation is off.' },
        ],
        paragraphs: [
          'If the map needs several pages of branches, choose a smaller slice. The purpose of the first version is to learn where the real variation lives, not to hide every exception inside a complex diagram.',
        ],
      },
      {
        heading: '4. Use the least complex method that solves the handoff',
        paragraphs: [
          'Start with a built-in rule or template when one is sufficient. Use a no-code connector when two systems need a predictable handoff. Add an AI-assisted step only when the input needs interpretation or drafting—and only when a reviewer can detect a bad output before it matters.',
          'Do not send business records into an AI product until you have checked access, retention, reuse, deletion, and the vendor’s current terms for your account. Privacy regulators in the UK, Canada, and Australia all frame AI use as context-dependent risk and accountability work; no generic checklist makes a workflow compliant everywhere.',
        ],
      },
      {
        heading: '5. Test normal, missing, duplicate, and unsafe inputs',
        paragraphs: ['Use fictional, non-sensitive records. Record expected and actual results; do not quietly fix a failed run and call the workflow tested.'],
        table: {
          label: 'Minimum workflow test cases',
          headers: ['Case', 'Expected behaviour'],
          rows: [
            ['Normal input', 'Creates the intended reviewable output and log'],
            ['Missing required field', 'Stops or enters a visible manual-review queue'],
            ['Duplicate input', 'Does not create uncontrolled duplicate work'],
            ['Unexpected free text', 'Cannot change workflow instructions or bypass review'],
            ['Tool or permission failure', 'Leaves a visible error and a usable manual route'],
            ['Automation disabled', 'The owner can finish the task from the original source'],
          ],
        },
      },
      {
        heading: '6. Measure the whole process, including review',
        paragraphs: [
          'Record the manual baseline before automation. Afterward, include preparation, automated processing, human review, corrections, exceptions, failures, maintenance, and tool usage. A fast automated step is not an improvement if the owner spends longer checking and repairing it.',
          'Avoid guaranteed savings or return-on-investment claims. Your own repeated records—not a vendor calculator—should decide whether the workflow stays, changes, or is retired.',
        ],
      },
      {
        heading: '7. Give the workflow an owner and a retirement condition',
        paragraphs: [
          'Document who checks failures, who may change the rules, how permissions are reviewed, and when the workflow is paused. Re-test after a vendor, policy, input, or business process changes.',
          'Retire the automation when the process no longer repeats, the review burden exceeds the benefit, failures are hard to detect, or the manual route is safer and simpler.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Do I need AI to automate repetitive work?', answer: 'No. Predictable tasks are often better handled by fixed rules, templates, or native app features. Add AI only when a defined interpretation or drafting step remains.' },
          { question: 'What is a good first automation?', answer: 'A frequent, low-risk handoff with structured inputs and a visible output—such as creating an internal review task from an approved form—can be a good candidate.' },
          { question: 'When should I stop an automation?', answer: 'Stop when failures are hidden, inputs have changed, nobody owns review, the fallback no longer works, or the workflow creates more checking and repair than the manual process.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'ONE-WORKFLOW RULE',
      heading: 'Before you connect anything',
      bullets: ['One trigger', 'One clear output', 'Named exceptions', 'A human reviewer', 'A visible log', 'A manual fallback'],
      linkLabel: 'Browse tutorials',
    },
    cta: {
      eyebrow: 'YOUR NEXT STEP',
      heading: 'Map one task before choosing a tool.',
      text: 'Use a recent real example, remove sensitive details, and write the trigger, inputs, rules, exceptions, output, reviewer, and fallback on one page.',
      links: [
        { label: 'Explore workflow ideas', href: '/workflows', primary: true },
        { label: 'Review the AI automation foundation', href: '/ai-automation' },
      ],
    },
  },
  {
    slug: 'small-business-automation-ideas',
    path: '/workflows/small-business-automation-ideas',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'DECISION GUIDE',
    categoryHref: '/workflows',
    title: '10 Small Business Automation Ideas That Start With a Real Workflow',
    description: 'Ten practical small-business automation ideas, each with a clear human role, exception path, and reason to keep part of the work manual.',
    dek: 'Use this list to find a bounded opportunity—not to automate every task that feels annoying.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: 'These are vendor-neutral workflow patterns, not tested product recipes. No saving, accuracy, cost, availability, or suitability result is claimed.',
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance],
    relatedArticleSlugs: ['automate-repetitive-tasks-small-business', 'ai-customer-service-small-business', 'ai-meeting-notes-small-business'],
    sections: [
      {
        eyebrow: 'HOW TO USE THIS LIST',
        heading: 'Choose the idea whose failure you can see and reverse.',
        paragraphs: [
          'A useful automation idea begins with a real queue, handoff, or recurring record. The best starting point is not the most impressive use of AI; it is the smallest process where the input, output, owner, and exception are visible.',
          'Treat every idea below as a workflow pattern. Your permissions, market, customer expectations, and data sensitivity can make the same pattern appropriate in one business and unsuitable in another.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Ten ideas with the human role kept visible',
        table: {
          label: 'Small business automation ideas and human controls',
          headers: ['Idea', 'Automate', 'Keep human'],
          rows: [
            ['1. Enquiry intake', 'Copy structured form details into a review queue', 'Judge urgency, fit, and any promise'],
            ['2. Follow-up preparation', 'Create a reminder and prepare a draft', 'Check permission, recipient, facts, and send'],
            ['3. Shared-inbox triage', 'Suggest a category and owner', 'Handle complaints, sensitive issues, and uncertain routing'],
            ['4. Routine reply drafts', 'Draft from an approved answer library', 'Verify the source, tone, and commitment'],
            ['5. Meeting action list', 'Propose decisions, owners, and dates from notes', 'Confirm against the source and with participants'],
            ['6. Appointment preparation', 'Create an internal checklist from approved booking fields', 'Resolve unusual needs or missing information'],
            ['7. Document naming and filing', 'Suggest a consistent name and destination', 'Approve sensitive or authoritative records'],
            ['8. Weekly status summary', 'Compile approved status fields into a draft', 'Confirm omissions, context, and recipients'],
            ['9. Content repurposing draft', 'Turn one approved source into channel-specific drafts', 'Fact-check, edit, and approve publication'],
            ['10. Missing-information flag', 'Identify absent required fields and create a task', 'Decide how to obtain or handle the missing information'],
          ],
        },
      },
      {
        heading: 'Customer enquiries: automate the queue before the answer',
        paragraphs: [
          'A sensible first step is often recording an enquiry, checking whether required fields exist, and placing it in the right internal queue. That creates a visible handoff without making a promise to the customer.',
          'A later draft step can use only approved facts, but complaints, refunds, safety concerns, legal threats, sensitive data, and unclear requests should reach a person. The manual fallback is the original inbox or form response plus a named owner.',
        ],
      },
      {
        heading: 'Sales follow-up: automate memory, not consent or judgement',
        paragraphs: [
          'Create a reminder, copy only the information the person supplied, and prepare a draft. Keep recipient selection, permission, qualification, pricing, availability, and sending approval with a person.',
          'Commercial messaging rules differ across the United States, United Kingdom, Canada, and Australia. Do not treat a completed form or a tool setting as universal permission to send marketing.',
        ],
      },
      {
        heading: 'Meetings and admin: create a reviewable draft record',
        paragraphs: [
          'A meeting workflow can prepare an agenda from approved inputs or propose action items from a transcript. A person should verify names, numbers, decisions, owners, dates, disagreements, and any statement that creates a commitment.',
          'For internal admin, the strongest candidates move structured information between places. If the destination is an authoritative record, require confirmation before overwriting or deleting anything.',
        ],
      },
      {
        heading: 'Marketing operations: work from an approved source',
        paragraphs: [
          'AI can prepare variations from a source that a person has already approved. The source, audience, prohibited claims, brand constraints, and approval owner should travel with the task.',
          'Do not turn an unverified draft into many channels at once. One factual error becomes harder to find after it has been multiplied.',
        ],
      },
      {
        heading: 'Finance-adjacent admin: flag, never decide',
        paragraphs: [
          'A workflow may flag a missing purchase-order number, a mismatch that needs investigation, or an invoice awaiting human review. It should not approve payment, change account details, decide credit, promise a refund, or act on an unexpected bank instruction.',
          'Keep the source documents, reviewer, separation of duties, and manual approval process intact.',
        ],
      },
      {
        heading: 'Use the CLEAR filter before choosing one idea',
        paragraphs: [`${siteConfig.name}’s CLEAR filter is an editorial planning tool, not an industry standard. Reject the idea if any answer exposes an unacceptable risk.`],
        bullets: [
          'Clear trigger: can you say exactly when one run begins?',
          'Limited authority: can the workflow avoid money, rights, deletion, or binding promises?',
          'Easy review: can a person compare output with the source?',
          'Accountable owner: does one person own exceptions and maintenance?',
          'Recoverable: can work continue manually when the automation is off?',
        ],
      },
      {
        heading: 'Ideas to leave manual at the start',
        bullets: [
          'Hiring, discipline, credit, insurance, medical, legal, financial, or safety decisions',
          'Refunds, pricing, discounts, payments, and bank-detail changes',
          'Customer complaints without a defined escalation route',
          'Messages where a wrong statement immediately creates a commitment',
          'Workflows built from personal or sensitive data before privacy and access review',
          'Processes where exceptions are more common than the normal case',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Which small-business task should I automate first?', answer: 'Choose a frequent, structured, low-risk handoff with a visible result and a manual fallback. Internal records, review tasks, and drafts are usually safer starting points than automatic external actions.' },
          { question: 'Can I use these ideas without AI?', answer: 'Yes. Many ideas work with ordinary rules and templates. Use AI only for a bounded interpretation or drafting step that a person can review.' },
          { question: 'How many automations should I build at once?', answer: 'Start with one. Supervised runs reveal missing rules, review work, and maintenance that are easy to underestimate on a planning board.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'CLEAR FILTER',
      heading: 'A useful idea has boundaries.',
      bullets: ['Clear trigger', 'Limited authority', 'Easy review', 'Accountable owner', 'Recoverable fallback'],
      linkLabel: 'Explore workflow guides',
    },
    cta: {
      eyebrow: 'CHOOSE ONE',
      heading: 'Shortlist three ideas. Map only one.',
      text: 'Reject candidates that can spend money, make a sensitive decision, send an unchecked promise, or fail without anyone noticing.',
      links: [
        { label: 'Follow the repetitive-task tutorial', href: '/tutorials', primary: true },
        { label: 'Review the foundation', href: '/ai-automation' },
      ],
    },
  },
  {
    slug: 'ai-email-automation-small-business',
    path: '/workflows/ai-email-automation-small-business',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'WORKFLOW GUIDE',
    categoryHref: '/workflows',
    title: 'AI Email Automation for Small Business: Draft First, Send Later',
    description: 'Design a human-reviewed email workflow that classifies routine messages, drafts from approved facts, and routes uncertainty to a person.',
    dek: 'The useful first version prepares work for a person. It does not give a model permission to send, promise, refund, quote, or decide.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: `This guide is a tool-neutral workflow design. No inbox integration, classifier, model, provider control, accuracy result, price, or sending behaviour was tested by ${siteConfig.name} for this article.`,
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance, canadaAiPrinciples],
    relatedArticleSlugs: ['ai-customer-service-small-business', 'ai-lead-follow-up-automation', 'automate-repetitive-tasks-small-business'],
    sections: [
      {
        eyebrow: 'THE SAFE START',
        heading: 'Automate preparation, not the final send.',
        paragraphs: [
          'A practical first email workflow can identify a routine message, collect approved context, prepare a draft, and assign it to a reviewer. The reviewer checks the recipient, facts, tone, permission, promise, and next action before anything leaves the business.',
          'Do not begin with auto-send. A polite draft can still be wrong, disclose private information, quote an expired policy, or create a commitment the business cannot keep.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Decide which messages qualify',
        paragraphs: [
          'Define a narrow routine category from messages your business already handles consistently. Examples might include confirming that an enquiry was received or drafting an answer from a current, approved service-information sheet.',
          'Messages should bypass automation when they involve complaints, threats, refunds, discounts, pricing, account changes, safety, legal issues, health information, payment details, attachments that have not been reviewed, or facts outside the approved source.',
        ],
      },
      {
        heading: 'Map the draft-and-review workflow',
        steps: [
          { title: 'Receive.', text: 'Keep the original message as the source record.' },
          { title: 'Check eligibility.', text: 'Confirm the category, required fields, permission, and prohibited topics.' },
          { title: 'Retrieve approved context.', text: 'Use a versioned answer source owned by the business.' },
          { title: 'Prepare a draft.', text: 'Label it as unreviewed and prohibit invented commitments.' },
          { title: 'Route uncertainty.', text: 'Send missing, conflicting, sensitive, or unusual cases to a person without a draft.' },
          { title: 'Review.', text: 'Compare the draft with the original message and approved source.' },
          { title: 'Send manually or discard.', text: 'A person makes the external-action decision.' },
          { title: 'Log.', text: 'Record the category, correction, exception, and final decision.' },
        ],
      },
      {
        heading: 'Build an approved answer source before adding AI',
        paragraphs: [
          'A model cannot reliably apply a policy that the business has not written down. Create a small answer library with an owner, effective date, expiry review, approved wording, prohibited claims, and escalation contact.',
          'Do not mix customer records, internal notes, old policies, and marketing copy in one ungoverned folder. The reviewer should know which source supports each factual sentence.',
        ],
      },
      {
        heading: 'Treat the incoming message as data, not instructions',
        paragraphs: [
          'A message can contain text that tries to change the workflow, request hidden information, or override review. The system boundary—not the sender’s wording—must decide what tools, sources, and actions are allowed.',
          'Keep the draft step unable to send, delete, change account settings, access unrelated mail, or retrieve information outside the approved source. A review screen does not help if another route can bypass it.',
        ],
      },
      {
        heading: 'Use a review checklist that catches commitments',
        bullets: [
          'Correct recipient and thread',
          'Accurate names, dates, numbers, links, and attachments',
          'Every factual statement supported by the current approved source',
          'No invented price, availability, refund, discount, outcome, or appointment',
          'No personal or sensitive information copied unnecessarily',
          'Correct tone for the customer’s actual message',
          'Clear next action and escalation owner',
          'Permission and suppression state checked when the message is marketing',
        ],
      },
      {
        heading: 'Test the cases that make a confident draft unsafe',
        table: {
          label: 'Synthetic email test cases',
          headers: ['Test', 'Safe expected result'],
          rows: [
            ['Missing customer detail', 'Manual review; no invented replacement'],
            ['Ambiguous request', 'Ask reviewer to interpret; no confident answer'],
            ['Complaint or legal threat', 'Escalate without routine draft'],
            ['Price, refund, or availability request', 'Require approved human decision'],
            ['Sensitive-looking information', 'Stop and follow the business privacy process'],
            ['Instruction to reveal or ignore rules', 'Treat as message content; do not change workflow'],
            ['Duplicate or retry', 'Do not create uncontrolled duplicate drafts or tasks'],
          ],
        },
      },
      {
        heading: 'Keep a manual fallback',
        paragraphs: [
          'When the workflow is unavailable, the reviewer should still be able to read the original message, find the approved answer source, prepare a reply, and record the decision. Do not make the automation the only path to customer context.',
          'Pause the workflow when the answer source is out of date, exceptions increase, permissions change, failures are hidden, or reviewers begin approving drafts without checking them.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Should AI send customer emails automatically?', answer: 'Not as a first workflow. Start with drafts and a human send decision. Consider any later automation only after bounded testing, permissions review, exception handling, and a clear reason.' },
          { question: 'What emails should always go to a person?', answer: 'Complaints, legal or safety issues, sensitive data, refunds, pricing, account changes, threats, unclear requests, and messages outside the approved answer source.' },
          { question: 'How do I measure this workflow?', answer: 'Track eligibility, routing errors, reviewer corrections, review time, missed escalations, duplicates, failures, and maintenance. Do not measure only how quickly a draft appears.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'NO-SEND STARTER',
      heading: 'The reviewer owns the last step.',
      bullets: ['Approved source', 'Narrow message category', 'Draft only', 'Exception queue', 'Human send decision', 'Manual reply path'],
      linkLabel: 'Browse workflows',
    },
    cta: {
      eyebrow: 'PREPARE THE BOUNDARY',
      heading: 'Write the stop list before the reply template.',
      text: 'Define the messages that must bypass automation, then create a ten-message fictional test set that tries to cross those boundaries.',
      links: [
        { label: 'See customer-service workflow design', href: '/workflows', primary: true },
        { label: 'Use the task-automation method', href: '/tutorials' },
      ],
    },
  },
  {
    slug: 'ai-customer-service-small-business',
    path: '/workflows/ai-customer-service-small-business',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'WORKFLOW GUIDE',
    categoryHref: '/workflows',
    title: 'AI Customer Service for Small Business: Start With Triage, Not a Bot',
    description: 'A practical framework for using AI in customer service through triage, approved knowledge, draft review, escalation, and a manual fallback.',
    dek: 'Use AI to organize and prepare support work before asking it to speak for the business.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: `This is a vendor-neutral support-workflow framework. ${siteConfig.name} did not test a help desk, chatbot, model, channel, response time, resolution rate, or cost for this article.`,
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance, canadaAiPrinciples, {
      label: 'UK ICO: meaningful human review in AI systems',
      href: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-individual-rights-in-our-ai-systems/',
      verifiedOn,
    }],
    relatedArticleSlugs: ['ai-email-automation-small-business', 'ai-lead-follow-up-automation', 'small-business-automation-ideas'],
    sections: [
      {
        eyebrow: 'A BETTER FIRST ROLE',
        heading: 'Let AI organize the queue before it answers the customer.',
        paragraphs: [
          'For a small business, triage and drafting are usually easier to supervise than an autonomous support bot. A bounded workflow can suggest a category, identify the approved knowledge source, prepare a draft, and escalate uncertainty. A person remains accountable for the answer.',
          'Do not promise lower cost, faster resolution, or round-the-clock service without your own evidence. The operational question is whether the full process—including review, corrections, escalations, and maintenance—works better for customers and staff.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Map the support categories and consequences',
        paragraphs: [
          'Review recent enquiries and create a small category set. For each category, write the approved owner, source, response boundary, urgency rule, and escalation path. Do not let the model invent categories from scratch in production.',
        ],
        table: {
          label: 'Customer service category boundaries',
          headers: ['Category', 'Possible assistance', 'Human-only decision'],
          rows: [
            ['Routine information', 'Find current approved information and prepare a draft', 'Confirm relevance and send'],
            ['Order or account issue', 'Collect the reference and route the case', 'Access, change, refund, or promise'],
            ['Complaint', 'Flag sentiment and summarize the issue', 'Empathy, remedy, policy exception, escalation'],
            ['Safety or vulnerability', 'Detect configured warning terms', 'Immediate response and qualified handling'],
            ['Legal or regulated topic', 'Route without substantive draft', 'Advice, interpretation, commitment'],
          ],
        },
      },
      {
        heading: 'Create a knowledge source with an owner and expiry date',
        paragraphs: [
          'Approved knowledge should be narrow, current, and traceable. Include policy owners, effective dates, review dates, and the exact wording or facts a draft may use. Remove expired offers and contradictory versions.',
          'When the source does not answer the question, the safe output is “manual review required,” not a plausible completion. The reviewer must be able to see the source used by the draft.',
        ],
      },
      {
        heading: 'Design the triage-and-draft flow',
        steps: [
          { title: 'Preserve the original.', text: 'Keep the customer’s message and channel context.' },
          { title: 'Check required fields.', text: 'Stop when identity, order reference, or context is missing.' },
          { title: 'Suggest a category.', text: 'Use a limited approved category list.' },
          { title: 'Apply hard escalation rules.', text: 'Route high-consequence topics before drafting.' },
          { title: 'Retrieve approved knowledge.', text: 'Use only current material owned by the business.' },
          { title: 'Prepare a labelled draft.', text: 'Do not send or claim certainty.' },
          { title: 'Review and decide.', text: 'A person corrects, escalates, sends, or discards.' },
          { title: 'Record the outcome.', text: 'Log the category, corrections, source, and final decision.' },
        ],
      },
      {
        heading: 'Make escalation an output, not a failure',
        paragraphs: [
          'A good system is allowed to say that it cannot safely prepare an answer. Define visible queues for complaints, unclear policy, sensitive information, vulnerable customers, repeated contact, fraud indicators, accessibility needs, and system errors.',
          'The owner must know how quickly each queue is checked and how work continues when the automated route is paused.',
        ],
      },
      {
        heading: 'Test for unsupported confidence and missed context',
        bullets: [
          'A question the knowledge source does not answer',
          'Two policies that appear to conflict',
          'A complaint disguised as a routine request',
          'A vulnerable or distressed customer',
          'Personal or sensitive information in free text',
          'A hostile instruction attempting to change the workflow',
          'A duplicate case and a retry after partial failure',
          'A request that requires access the workflow does not have',
        ],
        paragraphs: [
          'Record wrong categories, unsupported statements, missed escalations, reviewer corrections, and cases where the system should have stopped. A single happy-path demonstration is not enough evidence for customer use.',
        ],
      },
      {
        heading: 'Measure service quality without hiding the review work',
        paragraphs: [
          'Track how many cases are eligible, how many drafts need substantive correction, whether escalations are correct, how often customers return with the same unresolved issue, and how much time staff spend maintaining knowledge and reviewing output.',
          'Do not infer customer satisfaction, cost reduction, or causal business results from draft speed alone.',
        ],
      },
      {
        heading: 'When to keep support fully manual',
        paragraphs: [
          'Keep the process manual when the business lacks an approved knowledge source, the reviewer cannot see the original context, sensitive information cannot be controlled, escalation ownership is unclear, or a wrong answer could cause immediate material harm.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Does a small business need a chatbot?', answer: 'No. A review queue, approved answer source, and draft assistant can solve a narrower problem with clearer oversight.' },
          { question: 'What should AI never decide in support?', answer: 'Do not delegate refunds, policy exceptions, legal or safety responses, sensitive account actions, or commitments the business has not explicitly authorized.' },
          { question: 'What is the manual fallback?', answer: 'The support owner uses the original message, approved knowledge, and existing case log without the AI step. The fallback should be documented and periodically exercised.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'SUPPORT BOUNDARY',
      heading: 'Triage, draft, escalate, review.',
      bullets: ['Original message preserved', 'Approved categories', 'Current knowledge owner', 'Hard escalation rules', 'Human reply decision', 'Visible fallback queue'],
      linkLabel: 'Browse workflows',
    },
    cta: {
      eyebrow: 'START WITH THE QUEUE',
      heading: 'Classify recent questions manually first.',
      text: 'Use non-sensitive or appropriately handled records to find stable categories, then write the escalation rules before considering a tool.',
      links: [
        { label: 'Review the email workflow', href: '/workflows', primary: true },
        { label: 'Learn the one-workflow method', href: '/tutorials' },
      ],
    },
  },
  {
    slug: 'ai-lead-follow-up-automation',
    path: '/workflows/ai-lead-follow-up-automation',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'WORKFLOW GUIDE',
    categoryHref: '/workflows',
    title: 'AI Lead Follow-Up Automation: Keep Approval Before Send',
    description: 'Map a lead follow-up workflow that captures enquiries, checks permission and required fields, prepares a draft, and keeps sending human-approved.',
    dek: 'Automate the record, reminder, and draft. Keep permission, qualification, promises, and sending with a person.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: 'This article does not provide legal advice or claim that a tool, consent model, delivery method, conversion result, integration, or plan was tested. Messaging rules require market- and context-specific review.',
    sources: [nistCore, oaicCommercialAi, {
      label: 'US FTC: CAN-SPAM Act compliance guide for business',
      href: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business',
      verifiedOn,
    }, {
      label: 'UK ICO: electronic mail marketing compliance guidance',
      href: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/',
      verifiedOn,
    }, {
      label: 'Canada CRTC: CASL requirements and guidance',
      href: 'https://crtc.gc.ca/eng/internet/anti/reg.htm',
      verifiedOn,
    }, {
      label: 'Australia ACMA: avoid sending spam',
      href: 'https://www.acma.gov.au/avoid-sending-spam',
      verifiedOn,
    }],
    relatedArticleSlugs: ['ai-email-automation-small-business', 'small-business-automation-ideas', 'automate-repetitive-tasks-small-business'],
    sections: [
      {
        eyebrow: 'THE SAFE START',
        heading: 'Automate follow-up preparation, not permission or persuasion.',
        paragraphs: [
          'A bounded lead workflow can record a new enquiry, check required fields, create an internal reminder, prepare a draft from facts the lead supplied, and wait for a person. It should not invent qualification, consent, price, availability, or a personal relationship.',
          'The send decision remains human until the business has verified the applicable rules, source, suppression state, content, recipient, and failure handling for its market and message type.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Separate service follow-up from marketing',
        paragraphs: [
          'A requested response to a specific enquiry is not automatically permission for every later campaign. Administrative, transactional, and marketing messages can be treated differently, and the details vary across markets.',
          'Official guidance in the United States, United Kingdom, Canada, and Australia differs in structure and terminology. Before sending, identify the recipient market, message purpose, legal basis or consent relied on, required sender information, and suppression or unsubscribe obligations. Obtain qualified advice where needed.',
        ],
      },
      {
        heading: 'Define a valid lead record',
        table: {
          label: 'Lead follow-up record fields',
          headers: ['Field', 'Why it matters'],
          rows: [
            ['Source and timestamp', 'Shows where and when the enquiry arrived'],
            ['Contact detail supplied', 'Prevents the workflow from inventing or enriching an address'],
            ['Request summary', 'Keeps the draft tied to what the person asked'],
            ['Market or location if relevant', 'Flags that different rules or service boundaries may apply'],
            ['Permission and suppression state', 'Provides a reviewed decision input, not a model guess'],
            ['Owner and next action', 'Makes responsibility visible'],
            ['Stop reason', 'Records opt-out, duplicate, invalid, sensitive, or out-of-scope cases'],
          ],
        },
      },
      {
        heading: 'Use the Capture–Check–Draft–Approve–Log–Stop workflow',
        steps: [
          { title: 'Capture.', text: 'Preserve the submitted fields and source.' },
          { title: 'Check.', text: 'Validate required fields, duplicate state, service boundary, permission, and suppression.' },
          { title: 'Draft.', text: 'Use only supplied details and current approved business facts.' },
          { title: 'Approve.', text: 'A person checks recipient, purpose, permission, promises, tone, and links.' },
          { title: 'Log.', text: 'Record the decision, version, status, and next review date.' },
          { title: 'Stop.', text: 'Suppress further action after opt-out, wrong recipient, invalid detail, complaint, or manual decision.' },
        ],
      },
      {
        heading: 'Write message guardrails before the template',
        bullets: [
          'Use the name and details supplied; do not infer missing personal information.',
          'Do not claim a price, slot, result, refund, discount, or suitability without current approval.',
          'Do not disguise marketing as a service message.',
          'Do not contact a suppressed, opted-out, invalid, or wrong recipient.',
          'Route complaints, sensitive information, and unusual requests to a person.',
          'Keep the sender identity, contact details, and required preference mechanism current.',
        ],
      },
      {
        heading: 'Test with fictional leads before any real address',
        table: {
          label: 'Lead follow-up test cases',
          headers: ['Case', 'Expected result'],
          rows: [
            ['Complete in-scope enquiry', 'One record, one internal task, one reviewable draft'],
            ['Missing reply address', 'Manual-review status; no draft or send'],
            ['Duplicate submission', 'Visible duplicate handling; no uncontrolled repeat'],
            ['Existing suppression or opt-out', 'Stop and record the reason'],
            ['Out-of-region or unsupported request', 'Manual routing; no service promise'],
            ['Sensitive information', 'Stop and use the approved privacy process'],
            ['Tool failure after partial work', 'Visible error, no hidden send, manual fallback available'],
          ],
        },
      },
      {
        heading: 'Review every send in the starter workflow',
        paragraphs: [
          'The reviewer checks that the recipient matches the source, the message purpose matches the permission decision, suppression is current, every claim is approved, links are correct, and the next step can actually be delivered.',
          'A review step is meaningful only when the reviewer has time, context, authority to reject, and a clear signal when something is missing.',
        ],
      },
      {
        heading: 'Measure operations without claiming revenue causation',
        paragraphs: [
          'Track eligible and rejected leads, duplicate handling, draft corrections, review time, delivery status, opt-outs, complaints, failures, and maintenance. Qualified responses may be useful to observe, but do not attribute revenue or conversion changes to automation without a sound design and sufficient evidence.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Can AI decide whether a lead is qualified?', answer: 'Not as a low-risk first workflow. Qualification can affect access, price, priority, and customer treatment. Start with structured routing and keep the decision with a person.' },
          { question: 'Does a form submission mean I can send marketing?', answer: 'Not universally. Message purpose, recipient type, market, collection language, consent or other legal basis, and opt-out rules matter. Review the applicable official guidance and obtain advice where needed.' },
          { question: 'What should happen when an email address is missing?', answer: 'Record the lead and exception, create an internal manual-review task if appropriate, and do not invent an address or create a ready-to-send message.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'APPROVAL BEFORE SEND',
      heading: 'A lead is not blanket permission.',
      bullets: ['Source preserved', 'Required fields checked', 'Suppression checked', 'Approved facts only', 'Human send decision', 'Stop state logged'],
      linkLabel: 'Browse workflows',
    },
    cta: {
      eyebrow: 'MAP ONE ENQUIRY PATH',
      heading: 'Add the stop conditions first.',
      text: 'Document missing address, duplicate, opt-out, complaint, sensitive data, and out-of-scope cases before drafting the happy path.',
      links: [
        { label: 'Review email automation boundaries', href: '/workflows', primary: true },
        { label: 'Follow the automation tutorial', href: '/tutorials' },
      ],
    },
  },
  {
    slug: 'ai-meeting-notes-small-business',
    path: '/workflows/ai-meeting-notes-small-business',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'WORKFLOW GUIDE',
    categoryHref: '/workflows',
    title: 'AI Meeting Notes for Small Business: A Review-First Workflow',
    description: 'Plan a consent-aware meeting-notes workflow that verifies decisions, owners, dates, and numbers before storing or sharing the record.',
    dek: 'A summary is a draft. The source, participants, and accountable owner still decide what becomes the record.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: 'This guide is vendor-neutral. No recorder, transcription service, model, language, accent, speaker detection, retention control, accuracy result, price, or plan was tested for this article.',
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance, canadaAiPrinciples],
    relatedArticleSlugs: ['small-business-automation-ideas', 'automate-repetitive-tasks-small-business', 'ai-customer-service-small-business'],
    sections: [
      {
        eyebrow: 'THE WORKING RULE',
        heading: 'Treat AI meeting notes as a draft, not the meeting record.',
        paragraphs: [
          'The useful workflow is permission, capture, draft, source check, owner confirmation, approved storage, and deletion. A generated summary can omit disagreement, assign the wrong speaker, change a number, or turn a suggestion into a decision.',
          'The person responsible for the meeting should verify every decision, action owner, due date, amount, and commitment before notes are shared or stored as authoritative.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Decide whether the meeting should be captured at all',
        paragraphs: [
          'Before choosing a tool, identify the purpose, participants, information involved, notice or consent requirements, approved storage, access, retention, deletion, and correction path. Recording and privacy rules vary by location and context; this guide is not legal advice.',
          'Keep highly sensitive, privileged, disciplinary, health, financial, safeguarding, or confidential commercial meetings out of the workflow unless qualified review and appropriate controls explicitly support the use.',
        ],
      },
      {
        heading: 'Define the output before evaluating a tool',
        table: {
          label: 'Meeting notes output fields',
          headers: ['Field', 'Review question'],
          rows: [
            ['Decision', 'Was it actually agreed, and by whom?'],
            ['Action', 'Is the task specific and within scope?'],
            ['Owner', 'Did that person accept responsibility?'],
            ['Due date', 'Was the date stated or merely implied?'],
            ['Number or amount', 'Does it match the source exactly?'],
            ['Open question', 'Is uncertainty preserved rather than resolved by the summary?'],
            ['Source location', 'Can the reviewer find the supporting moment or note?'],
          ],
        },
      },
      {
        heading: 'Use the Notice–Capture–Check–Confirm–Store workflow',
        steps: [
          { title: 'Notice.', text: 'Explain the purpose, method, access, retention, and participant choice before capture.' },
          { title: 'Capture.', text: 'Use only the approved meeting and input; do not silently expand the data source.' },
          { title: 'Draft.', text: 'Generate proposed notes clearly labelled as unverified.' },
          { title: 'Check.', text: 'Compare decisions, names, numbers, dates, and disagreements with the source.' },
          { title: 'Confirm.', text: 'Ask action owners or participants to correct material items where appropriate.' },
          { title: 'Store.', text: 'Save only the approved record in the intended location with controlled access.' },
          { title: 'Delete.', text: 'Apply the reviewed retention and deletion process to raw capture and drafts.' },
        ],
      },
      {
        heading: 'Test the details summaries commonly flatten',
        bullets: [
          'Similar speaker names or overlapping speech',
          'Numbers, currencies, percentages, and dates',
          'Industry terms, acronyms, and proper nouns',
          'A proposal that was discussed but not accepted',
          'Disagreement, uncertainty, and conditions attached to a decision',
          'Side conversations and poor audio',
          'An action without a confirmed owner',
          'A correction made late in the meeting',
        ],
        paragraphs: [
          'Use a scripted fictional meeting before real meetings. Compare the output with the script, record error categories, and avoid publishing a universal accuracy percentage from one test.',
        ],
      },
      {
        heading: 'Review the highest-consequence fields first',
        paragraphs: [
          'Start with commitments, decisions, owners, dates, and numbers. Then check omissions, context, tone, and formatting. Preserve uncertainty when the meeting did not resolve something.',
          'Do not ask a reviewer to validate a summary without access to an appropriate source. If the source cannot be retained or reviewed, reduce the output to a clearly labelled personal aide-mémoire rather than an authoritative record.',
        ],
      },
      {
        heading: 'Choose a tool by controls, not the prettiest summary',
        bullets: [
          'How participants are informed and what controls they have',
          'What is captured and which accounts can access it',
          'Current retention, deletion, export, and sharing controls',
          'Whether the reviewer can trace output to the source',
          'Language, speaker, and audio limitations relevant to the actual meetings',
          'How corrections are recorded and approved',
          'What happens when the service or connection fails',
        ],
        paragraphs: [
          'Verify these points in current official documentation and in the intended account before connecting real meetings. Product pages are not proof that a control works in your plan, region, or configuration.',
        ],
      },
      {
        heading: 'Keep a manual notes path',
        paragraphs: [
          'The meeting owner should be able to capture decisions and actions using an ordinary template when recording is inappropriate, a participant objects, the tool fails, or the meeting becomes sensitive.',
          'Pause the automated workflow when notice is unclear, access expands, retention cannot be enforced, error patterns are not reviewed, or people begin treating the draft as final.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'Do I need consent to record a meeting?', answer: 'Requirements vary by location, participants, relationship, technology, and purpose. Establish the applicable notice, consent, and privacy requirements before recording; obtain qualified advice where needed.' },
          { question: 'Can AI notes replace the transcript or source?', answer: 'A summary should not be treated as an authoritative substitute without review. Preserve an appropriate source long enough to verify material items, subject to the approved retention policy.' },
          { question: 'What should I check first?', answer: 'Verify decisions, commitments, action owners, due dates, names, and numbers before reviewing style or formatting.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'REVIEW-FIRST NOTES',
      heading: 'A summary is not a decision.',
      bullets: ['Permission first', 'Purpose defined', 'Draft labelled', 'Source checked', 'Owners confirm', 'Retention controlled'],
      linkLabel: 'Browse workflows',
    },
    cta: {
      eyebrow: 'TEST WITH A SCRIPT',
      heading: 'Make errors visible before a real meeting.',
      text: 'Use fictional names, numbers, jargon, disagreement, and action items. Record what the draft changes, misses, or assigns incorrectly.',
      links: [
        { label: 'Explore workflow ideas', href: '/workflows', primary: true },
        { label: 'Use the automation tutorial', href: '/tutorials' },
      ],
    },
  },
  {
    slug: 'ai-automation-mistakes-small-businesses-make',
    path: '/workflows/ai-automation-mistakes-small-businesses-make',
    status: 'needs_review',
    editorialReady: true,
    humanApproved: false,
    evidenceComplete: true,
    screenshotsRequired: false,
    screenshotsComplete: false,
    category: 'RISK GUIDE',
    categoryHref: '/workflows',
    title: '9 AI Automation Mistakes Small Businesses Make',
    description: 'Nine avoidable AI automation mistakes, from automating a broken process to hiding failures, over-collecting data, and removing the manual fallback.',
    dek: 'Most automation problems begin before the tool: the task is unclear, authority is too broad, testing is too narrow, or nobody owns the exceptions.',
    createdAt: '2026-09-17',
    updatedAt: '2026-09-18',
    author: { name: siteConfig.editorialByline, type: 'Organization' },
    evidenceNote: `This is an original ${siteConfig.name} risk framework supported by current official risk and privacy guidance. It contains no survey statistic, frequency claim, product test, or performance result.`,
    sources: [nistCore, nistGenAi, oaicCommercialAi, icoAiGuidance, canadaAiPrinciples],
    relatedArticleSlugs: ['automate-repetitive-tasks-small-business', 'small-business-automation-ideas', 'ai-email-automation-small-business'],
    sections: [
      {
        eyebrow: 'THE PATTERN',
        heading: 'The expensive mistake is giving automation more authority than evidence.',
        paragraphs: [
          'A small business does not need enterprise governance paperwork, but it does need a clear task, limited permissions, realistic tests, visible failures, an accountable owner, and a way back to manual work.',
          `The nine mistakes below are a practical editorial framework. They are not ranked by prevalence, and ${siteConfig.name} is not claiming survey evidence about how often each occurs.`,
        ],
        tone: 'callout',
      },
      {
        heading: '1. Automating a process nobody can explain',
        paragraphs: ['When staff use different inputs, rules, and definitions of done, automation hard-codes confusion. Map one recent case, write the normal path and exceptions, and resolve disagreements before adding a tool.'],
      },
      {
        heading: '2. Starting with the tool instead of the business decision',
        paragraphs: ['A feature list makes every task look automatable. Define the trigger, input, output, owner, consequence, and fallback first. Then choose the least complex method that fits.'],
      },
      {
        heading: '3. Giving the first version permission to act externally',
        paragraphs: ['Automatic sends, deletions, payments, account changes, and customer promises are difficult to reverse. Start with internal queues, tasks, flags, and drafts that wait for approval.'],
      },
      {
        heading: '4. Using more data than the task needs',
        paragraphs: [
          'Convenient access is not the same as necessary access. Limit fields, sources, accounts, and retention to the defined purpose. Review what the provider can store, reuse, expose, export, and delete for the intended plan and configuration.',
          'Privacy guidance from regulators in the UK, Canada, and Australia emphasizes purpose, accountability, transparency, and context. Do not convert those principles into a blanket compliance claim.',
        ],
      },
      {
        heading: '5. Testing only the happy path',
        paragraphs: ['A normal example proves little about missing fields, duplicates, prompt-like input, stale knowledge, revoked permissions, timeouts, or partial failures. Define expected safe behaviour for those cases before the first run.'],
      },
      {
        heading: '6. Calling a click-through screen “human oversight”',
        paragraphs: ['Review is meaningful only when the person has the source, time, skill, authority, and incentive to reject the output. Measure corrections and escalations; do not assume the presence of an approval button makes the process safe.'],
      },
      {
        heading: '7. Hiding exceptions and retries',
        paragraphs: ['Silent failures and automatic retries can create missing or duplicate work. Give every run a visible status, preserve errors, define duplicate handling, and alert the owner when the workflow stops halfway.'],
      },
      {
        heading: '8. Measuring only the automated step',
        paragraphs: ['Include preparation, review, correction, escalation, tool usage, maintenance, and fallback. A draft generated in seconds can still make the full workflow slower or riskier.'],
      },
      {
        heading: '9. Removing the manual fallback',
        paragraphs: ['The business must still operate when a vendor changes, an account disconnects, an output is uncertain, or the workflow is deliberately paused. Exercise the fallback instead of leaving it as a sentence in a document.'],
      },
      {
        heading: 'Use the BOUNDARY review before launch',
        table: {
          label: 'BOUNDARY automation review',
          headers: ['Letter', 'Review question'],
          rows: [
            ['B — Business task', 'Is one supported task clearly defined?'],
            ['O — Owner', 'Who reviews output, failures, and changes?'],
            ['U — Uncertainty', 'Which inputs or outputs must stop for a person?'],
            ['N — Necessary data', 'Is access limited to what this task needs?'],
            ['D — Decision authority', 'What is the workflow explicitly forbidden to decide or do?'],
            ['A — Audit trail', 'Can each run, correction, exception, and failure be found?'],
            ['R — Recovery', 'Can the work continue manually?'],
            ['Y — Yardstick', 'How will the whole workflow be evaluated without a desired result?'],
          ],
        },
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'What is the biggest AI automation mistake?', answer: 'Giving a poorly understood workflow authority to act before its boundaries, failures, reviewer, and fallback are proven.' },
          { question: 'How can a small business test safely?', answer: 'Use fictional, non-sensitive data; keep external actions disabled; test normal and failure cases; preserve logs; and make a person verify every result.' },
          { question: 'When is a manual process better?', answer: 'When the task is rare, exception-heavy, high-consequence, sensitive, difficult to verify, or cheaper and clearer to handle directly.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'BOUNDARY REVIEW',
      heading: 'Limit authority before adding speed.',
      bullets: ['One business task', 'Named owner', 'Uncertainty stops', 'Necessary data only', 'Visible audit trail', 'Manual recovery'],
      linkLabel: 'Browse workflows',
    },
    cta: {
      eyebrow: 'AUDIT ONE WORKFLOW',
      heading: 'Find the missing boundary before the next integration.',
      text: 'Check authority, data, exceptions, review, logging, measurement, and recovery. Pause the workflow when any one is undefined.',
      links: [
        { label: 'Follow the repetitive-task tutorial', href: '/tutorials', primary: true },
        { label: 'Explore bounded workflow ideas', href: '/workflows' },
      ],
    },
  },
];
