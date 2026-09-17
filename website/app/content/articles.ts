import editorialMarkerConfig from './editorial-markers.json';
import { launchArticleRecords } from './launch-articles';
import { siteConfig } from '../site-config';

export type ArticleStatus = 'draft' | 'needs_review' | 'published' | 'needs_update';

export type ArticleTable = {
  label: string;
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: Array<{ title: string; text: string }>;
  table?: ArticleTable;
  faqs?: Array<{ question: string; answer: string }>;
  tone?: 'default' | 'callout';
};

export type ArticleRecord = {
  slug: string;
  path: string;
  status: ArticleStatus;
  humanApproved: boolean;
  evidenceComplete: boolean;
  screenshotsRequired: boolean;
  screenshotsComplete: boolean;
  category: string;
  categoryHref: string;
  title: string;
  description: string;
  dek: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  author: { name: string; type: 'Person' | 'Organization' };
  evidenceNote: string;
  sources: Array<{ label: string; href: string; verifiedOn: string }>;
  relatedArticleSlugs: string[];
  sections: ArticleSection[];
  aside: { eyebrow: string; heading: string; bullets: string[]; linkLabel: string };
  cta: { eyebrow: string; heading: string; text: string; links: Array<{ label: string; href: string; primary?: boolean }> };
};

export const editorialMarkers = editorialMarkerConfig.markers;

const articleRecords: ArticleRecord[] = [
  {
    slug: 'what-should-small-business-automate-first',
    path: '/blog/what-should-small-business-automate-first',
    status: 'draft',
    humanApproved: false,
    evidenceComplete: false,
    screenshotsRequired: true,
    screenshotsComplete: false,
    category: 'BEGINNER GUIDE',
    categoryHref: '/ai-automation',
    title: 'What Should a Small Business Automate First?',
    description: 'Use the FIRST framework to choose a low-risk first automation, avoid poor candidates, and plan one practical small-business workflow.',
    dek: 'Start with one frequent, rule-based task that is low-risk, easy to check, and easy to undo. Your first useful automation may not need AI.',
    createdAt: '2026-08-24',
    updatedAt: '2026-08-30',
    author: { name: 'Editorial owner not assigned', type: 'Organization' },
    evidenceNote: 'This draft contains a planned product demonstration. It cannot be published until the real workflow, failure path, no-send control, screenshots, and human review are complete.',
    relatedArticleSlugs: [],
    sources: [
      { label: 'Google: choose where to save form responses', href: 'https://support.google.com/docs/answer/2917686?hl=en', verifiedOn: '2026-08-31' },
      { label: 'Google: view and manage form responses', href: 'https://support.google.com/docs/answer/139706?hl=en', verifiedOn: '2026-08-30' },
      { label: 'Google: publish and share a form', href: 'https://support.google.com/docs/answer/2839588', verifiedOn: '2026-08-30' },
      { label: 'Make: pricing and plan details', href: 'https://www.make.com/en/pricing', verifiedOn: '2026-08-31' },
      { label: 'Make: plan your first scenario', href: 'https://help.make.com/step-1-plan-your-scenario', verifiedOn: '2026-08-30' },
      { label: 'Make: Gmail modules', href: 'https://apps.make.com/gmail-modules', verifiedOn: '2026-08-31' },
      { label: 'NIST AI Risk Management Framework 1.0', href: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10', verifiedOn: '2026-08-30' },
      { label: 'NIST AI Resource Center', href: 'https://airc.nist.gov/', verifiedOn: '2026-08-30' },
      { label: 'Office of the Australian Information Commissioner: commercial AI privacy guidance', href: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products', verifiedOn: '2026-08-30' },
      { label: 'Office of the Privacy Commissioner of Canada: generative AI privacy principles', href: 'https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai', verifiedOn: '2026-08-30' },
    ],
    sections: [
      {
        eyebrow: 'THE SHORT ANSWER',
        heading: 'Choose the smallest useful workflow you can check and undo.',
        paragraphs: [
          'Good first candidates often move information between two places: recording a new lead, creating an internal follow-up task, or notifying the right person that something needs attention. The process should have a clear owner and a manual fallback.',
          'Do not start with a decision that can commit money, affect someone’s rights, expose sensitive information, or damage a customer relationship. And do not assume your first automation needs AI. A fixed rule such as “when this form is submitted, create that task” is often a better place to learn.',
        ],
        bullets: [
          'It happens often enough to observe.',
          'Its instructions can be written down.',
          'A mistake can be reversed before harm.',
          'A person can safely review the result.',
          'Each run produces a result you can track.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Start with the process, not the tool',
        paragraphs: [
          'Before choosing software, write down how the work happens today. Use one recent example and identify what starts the task, which information is required, which steps always happen, where a person makes a judgement, what a correct result looks like, and what happens when information is missing or a tool fails.',
          'If two people complete the task in completely different ways, the process may need a clearer rule before it needs automation. Software can repeat a confused process faster; it cannot decide what the process should have been.',
          'Separate dependable steps from judgement-heavy steps. Recording a lead can be dependable. Deciding whether the lead is genuine, urgent, affordable, or suitable may still need a person.',
        ],
      },
      {
        eyebrow: 'FIRST',
        heading: 'Score a candidate with five practical questions',
        paragraphs: [
          'FIRST stands for Frequent, Instructions are clear, Reversible, Safe to review, and Trackable. It is an editorial decision aid, not an industry standard or a validated scoring instrument.',
          'Give each factor 0, 1, or 2. A higher total helps compare candidates, but it does not overrule risk. If Reversible or Safe to review scores 0, do not choose that process as your first automation.',
        ],
        table: {
          label: 'FIRST automation candidate scorecard',
          headers: ['Factor', '0', '1', '2'],
          rows: [
            ['Frequent', 'Rare or unpredictable', 'Happens sometimes', 'Regular enough to observe and test'],
            ['Instructions', 'Depends on unstated judgement', 'Some rules are clear', 'Trigger, inputs, actions, and exceptions are written'],
            ['Reversible', 'Difficult or costly to undo', 'Correctable with effort', 'Stoppable or correctable before harm'],
            ['Safe', 'Sensitive or high-consequence judgement', 'Limited risk with close review', 'Internal output or waits for a person'],
            ['Trackable', 'No clear success or failure signal', 'Some outcomes are visible', 'Each run has a result, owner, and log'],
          ],
        },
      },
      {
        heading: 'Use the score to compare your work, not to follow a universal ranking',
        paragraphs: [
          'Imagine three tasks: copying new enquiry details into a tracking sheet, deciding whether to refund an unhappy customer, and preparing a weekly internal reminder from an approved list.',
          'The enquiry record and internal reminder may score well because their inputs and outputs are visible. The refund decision should remain manual because it can involve policy, money, context, and customer trust. Your business may score these differently. The value comes from examining the real workflow rather than accepting someone else’s list.',
        ],
      },
      {
        heading: 'Good processes to consider first',
        paragraphs: [
          'These are candidates, not promises. Lead capture and internal follow-up can have a clear trigger and visible outputs. Repetitive internal notifications can keep the action inside the business. Stable data entry between approved systems can remove a handoff when the source of truth and duplicate rules are clear.',
          'Appointment reminders, invoice reminders, and email triage can also be candidates, but they may carry more risk than expected. Define the recipient, message, stop conditions, exception owner, and recovery path. Keep unusual, sensitive, disputed, or high-stakes cases with a person.',
        ],
        bullets: [
          'Lead capture and internal follow-up preparation',
          'Repetitive internal notifications',
          'Stable data entry between approved systems',
          'Carefully bounded reminders',
          'Routine email routing into a review queue',
        ],
      },
      {
        heading: 'What not to automate first',
        paragraphs: [
          'Leave a process manual when a mistake could have a serious consequence before anyone notices. Do not automate a broken process simply because it is frustrating. If the inputs change every time, nobody agrees on the correct outcome, or exceptions are the normal case, clarify the work first.',
        ],
        bullets: [
          'Approving refunds, credit, discounts, or payments',
          'Setting a binding price or availability promise',
          'Hiring, firing, performance, or disciplinary decisions',
          'Legal, medical, financial, or safety advice',
          'Complaints without a clear escalation route',
          'Deleting or changing authoritative records',
          'Sensitive personal information before privacy and access review',
          'External messages that no person checks',
          'Any process with no owner, log, or manual fallback',
        ],
      },
      {
        eyebrow: 'PLANNED DEMONSTRATION',
        heading: 'A lead becomes a record, a draft, and an owner task',
        paragraphs: [
          'The planned demonstration uses this path: a fictional lead submits a Google Form; the response is recorded in Google Sheets; Make checks required fields; Gmail creates an acknowledgement draft; Google Tasks creates an owner follow-up task; and the owner reviews everything.',
          'The Gmail step creates a draft. It does not send the message. The owner decides whether to edit, send, or discard it.',
          'Google documents that Forms responses can be stored in a linked Sheet. Make currently documents integrations for Gmail drafts and Google Tasks. These official pages show that individual building blocks are listed; they do not prove that this complete workflow works as planned. [TEST REQUIRED]',
          'Make’s official pricing page displayed a Free plan when checked on 30 August 2026. Plans and limits change, and the exact account, region, modules, and usage have not been tested. [VERIFY CURRENT PLAN]',
          'No account connection, workflow run, or real screenshot has been completed. [SCREENSHOT REQUIRED]',
        ],
        tone: 'callout',
      },
      {
        heading: 'Why this is a useful teaching workflow',
        bullets: [
          'The input, record, draft, task, and owner are visible.',
          'Every external action stays behind human review.',
          'The workflow can be disabled while the manual process remains available.',
          'It is relevant to many businesses without claiming to fit all of them.',
          'It shows that structured automation can be useful before AI is added.',
        ],
        paragraphs: [
          'The future test must confirm that accepted fictional leads create the expected record, draft, and task; exceptions stop or reach manual review; retries do not create uncontrolled duplicates; and no external email is sent.',
          'It must also inspect permissions on both the Form and linked Sheet. Google notes that collaborators may have access to the linked Sheet and that permission changes may need to be made in both places. This is one reason a real account review is required before customer data is used.',
        ],
      },
      {
        heading: 'Start with less complexity than you think you need',
        paragraphs: [
          'Use one trigger, a small number of actions, one exception route, and one owner. That is enough to learn whether the trigger is dependable, the input is clean enough, the output is useful, and someone can see and recover from failure.',
          'Avoid adding AI, multiple databases, customer-facing sends, payment actions, and complex branching to the first version. Every extra connection adds another permission, failure point, and maintenance task.',
          'If the workflow later needs to interpret free-form text, test that step separately. Keep the rule-based path and manual fallback available while you compare outputs.',
        ],
      },
      {
        heading: 'Keep human review and a manual fallback',
        paragraphs: [
          'Human review means a named person checks or decides something before the workflow takes a consequential action. The reviewer should know what to check, where the source information came from, which exceptions need manual handling, how to stop the workflow, how to finish the work manually, and where failures are recorded.',
          'A review button alone is not enough. Test whether a retry, alternate route, account rule, or module can bypass the intended review.',
          'Privacy and other legal obligations vary by market, sector, and workflow. Government guidance supports risk assessment, testing, and human oversight, but it does not make this workflow compliant by default. This guide is not legal advice.',
        ],
      },
      {
        heading: 'Measure the whole workflow',
        paragraphs: [
          'Do not begin with an estimated savings claim. Record a manual baseline, then track eligible and exception cases, preparation time, processing time, human review, corrections, duplicates, failed or delayed runs, tool usage, setup, maintenance, and whether the manual fallback still works.',
          'Ask whether the full process became easier to operate without creating unacceptable risk or review work. A fast automated step is not an improvement if the owner spends more time checking and repairing it.',
          'This demonstration has not been measured, so no time-saving, error-reduction, revenue, or return-on-investment claim is made. [TEST REQUIRED]',
        ],
      },
      {
        heading: 'Choose the second automation only after the first teaches you something',
        paragraphs: [
          'Wait until the first workflow has enough supervised runs to reveal its normal cases, exceptions, and maintenance needs. The best second step is often adjacent because you already understand the data and owner. After a lead-record workflow is stable, for example, you might evaluate an internal reminder for overdue follow-up.',
          'Do not automatically add AI. Add it only when a specific unstructured task remains, a person can verify the output, and the failure mode is acceptable.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        faqs: [
          { question: 'What is the easiest business process to automate first?', answer: 'A structured handoff with a clear trigger and visible result is often a good candidate, such as creating an internal task from an approved form. “Easy” depends on your tools, permissions, and exceptions, so score the actual process.' },
          { question: 'Should my first automation use AI?', answer: 'Not necessarily. If a fixed rule can handle the task, start there. Use AI only when the workflow needs to interpret unstructured input and a person can review mistakes before harm.' },
          { question: 'Is lead follow-up a good first automation?', answer: 'Lead recording and internal follow-up preparation can be good candidates. Automatic customer replies are riskier. Keep the message as a draft, define exceptions, and test with fictional data before using real leads.' },
          { question: 'How do I know if a task is too risky to automate?', answer: 'Ask what happens if the workflow is wrong and nobody notices immediately. If it can commit money, affect rights, expose sensitive information, create a legal or safety issue, or damage a customer relationship, leave it manual until appropriate controls and review are in place.' },
          { question: 'How long should I test the first automation?', answer: 'There is no universal duration. Test enough normal, missing, duplicate, unusual, and failure cases to understand how it behaves. Keep it supervised until the owner can detect problems, stop the workflow, and use the manual fallback.' },
          { question: 'What should I measure?', answer: 'Measure the whole workflow: preparation, processing, review, corrections, failures, maintenance, tool usage, and fallback. Do not measure only the fastest automated step.' },
        ],
      },
    ],
    aside: {
      eyebrow: 'FIRST-WORKFLOW CHECK',
      heading: 'Before you connect a tool',
      bullets: [
        'The task happens often enough to test.',
        'Trigger, inputs, rules, and exceptions are written.',
        'A mistake can be stopped or corrected.',
        'No sensitive judgement is delegated.',
        'One person owns review and maintenance.',
        'A manual fallback still works.',
      ],
      linkLabel: 'Back to the topic hub',
    },
    cta: {
      eyebrow: 'YOUR NEXT STEP',
      heading: 'Score three tasks before choosing one tool.',
      text: 'Reject any candidate that scores zero for Reversible or Safe. Then map one trigger, input, output, exception, owner, and fallback.',
      links: [
        { label: 'See the template roadmap', href: '/templates', primary: true },
        { label: 'Explore practical workflows', href: '/workflows' },
      ],
    },
  },
  ...launchArticleRecords,
];

export const articles = articleRecords;

export function getArticle(slug: string) {
  return articleRecords.find((article) => article.slug === slug);
}

export function getArticleByPath(path: string) {
  return articleRecords.find((article) => article.path === path);
}

export function getUnresolvedEditorialMarkers(article: ArticleRecord) {
  const serializedArticle = JSON.stringify(article);
  return editorialMarkers.filter((marker) => serializedArticle.includes(marker));
}

export function isPublishable(article: ArticleRecord) {
  return Boolean(
    article.status === 'published' &&
      article.humanApproved &&
      article.evidenceComplete &&
      (!article.screenshotsRequired || article.screenshotsComplete) &&
      getUnresolvedEditorialMarkers(article).length === 0 &&
      article.author.name !== 'Editorial owner not assigned' &&
      article.publishedAt,
  );
}

export function getPublishedArticles() {
  return articleRecords.filter(isPubliclyAvailable);
}

export function isPubliclyAvailable(article: ArticleRecord) {
  return siteConfig.isLaunchReady && isPublishable(article);
}

export function canPreviewDrafts() {
  return (
    process.env.NODE_ENV !== 'production' &&
    process.env.NEXT_PUBLIC_SHOW_DRAFTS === 'true' &&
    process.env.SITE_LAUNCH_READY !== 'true'
  );
}
