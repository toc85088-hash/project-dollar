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
  tone?: 'default' | 'callout';
};

export type ArticleRecord = {
  slug: string;
  status: ArticleStatus;
  humanApproved: boolean;
  evidenceComplete: boolean;
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
  sources: Array<{ label: string; href: string }>;
  sections: ArticleSection[];
  aside: { eyebrow: string; heading: string; bullets: string[]; linkLabel: string };
  cta: { eyebrow: string; heading: string; text: string; links: Array<{ label: string; href: string; primary?: boolean }> };
};

const articleRecords: ArticleRecord[] = [
  {
    slug: 'ai-automation-for-small-business',
    status: 'draft',
    humanApproved: false,
    evidenceComplete: false,
    screenshotsComplete: false,
    category: 'FOUNDATION GUIDE',
    categoryHref: '/ai-automation',
    title: 'AI Automation for Small Business: Start Small, Stay in Control',
    description: 'A plain-English guide to choosing, mapping, testing, and reviewing one useful AI automation in a small business.',
    dek: 'You do not need an AI strategy. You need one repetitive task, a visible process, a safe test, and a person who remains responsible.',
    createdAt: '2026-08-24',
    updatedAt: '2026-08-24',
    author: { name: 'Editorial owner not assigned', type: 'Organization' },
    sources: [],
    sections: [
      {
        eyebrow: 'THE SHORT ANSWER',
        heading: 'AI automation helps with one step inside a controlled workflow.',
        paragraphs: [
          'For a small business, that step might classify an enquiry, extract details, draft a reply, or summarise a meeting. The surrounding process still needs rules, exceptions, a human review point, and a manual fallback.',
        ],
        tone: 'callout',
      },
      {
        heading: 'Start with the work, not the software',
        paragraphs: [
          'Tools make it easy to build an impressive demo and surprisingly hard to build a dependable process. Begin by writing down what happens today: what starts the task, what information is required, who decides, what the finished result looks like, and what happens when something is missing.',
          'If the manual process changes every time or depends on judgment nobody can explain, automation will hide the confusion rather than remove it.',
        ],
      },
      {
        heading: 'Choose a task with a forgiving failure mode',
        paragraphs: [
          'A practical first candidate is frequent, repetitive, easy to describe, and cheap to correct before it reaches a customer. Drafting for review is usually a safer pattern than taking an external action automatically.',
        ],
        table: {
          label: 'First automation candidate comparison',
          headers: ['Better first candidate', 'Leave manual for now'],
          rows: [
            ['Sort routine enquiries into a review queue', 'Decide whether a customer deserves a refund'],
            ['Draft notes from an approved meeting transcript', 'Create the authoritative record without review'],
            ['Prepare a follow-up draft from supplied facts', 'Send a promise or price automatically'],
          ],
        },
      },
      {
        heading: 'A five-step starting method',
        steps: [
          { title: 'Inventory.', text: 'Notice repetitive tasks for one working week. Record frequency and frustration without estimating imaginary savings.' },
          { title: 'Map.', text: 'Write the trigger, inputs, decisions, output, exceptions, owner, and manual fallback on one page.' },
          { title: 'Bound.', text: 'Choose the exact AI-assisted step and list what it is not allowed to decide or send.' },
          { title: 'Test.', text: 'Use fictional or non-sensitive examples. Include missing, duplicated, ambiguous, and unsafe inputs—not only the happy path.' },
          { title: 'Review.', text: 'Compare the full process before and after, including checking, corrections, maintenance, and failures.' },
        ],
      },
      {
        heading: 'Example: an enquiry becomes a draft, not an automatic promise',
        paragraphs: [
          'Imagine a contact form for a local service business. A new submission can be checked for required fields, assigned to a category, and used to prepare a reply from approved notes. The draft then waits for the owner.',
          'The owner verifies the recipient, facts, tone, availability, price language, and next step. Angry messages, sensitive details, unusual requests, and missing information bypass the draft and move straight to manual handling.',
          'This pattern is intended to reduce blank-page work while keeping the decision and external communication accountable; the real effect must be measured in the tested business workflow.',
        ],
      },
      {
        heading: 'Do not automate a broken or high-stakes decision',
        paragraphs: [
          'Leave a task manual when an error could create a payment, legal commitment, safety issue, employment decision, or exposure of sensitive information. Also pause when nobody owns the process, the source information is unreliable, or there is no way to detect a bad result.',
          'Privacy, recording, consumer, employment, and industry rules vary. Check the actual workflow with qualified advisers before using real people’s data; this guide is not legal advice.',
        ],
      },
      {
        heading: 'Measure the whole workflow',
        paragraphs: [
          'Record a manual baseline before changing anything. After the test, compare preparation time, review time, corrections, missed exceptions, tool cost, and maintenance. A faster automated step is not useful if the owner spends more time checking unreliable output.',
        ],
      },
    ],
    aside: {
      eyebrow: 'FIRST-WORKFLOW CHECK',
      heading: 'Before you automate',
      bullets: [
        'The task happens often.',
        'The current steps are written down.',
        'A bad draft can be caught before harm.',
        'Test data contains no sensitive records.',
        'One person owns review and maintenance.',
        'A manual fallback still works.',
      ],
      linkLabel: 'Back to the topic hub',
    },
    cta: {
      eyebrow: 'YOUR NEXT STEP',
      heading: 'Map one task before connecting one tool.',
      text: 'List the trigger, input, output, exception, reviewer, and fallback. If you cannot fill those six fields, improve the process first.',
      links: [
        { label: 'See the template roadmap', href: '/templates', primary: true },
        { label: 'Explore practical workflows', href: '/workflows' },
      ],
    },
  },
];

export const articles = articleRecords;

export function getArticle(slug: string) {
  return articleRecords.find((article) => article.slug === slug);
}

export function isPublishable(article: ArticleRecord) {
  return Boolean(
    article.status === 'published' &&
      article.humanApproved &&
      article.evidenceComplete &&
      article.author.name !== 'Editorial owner not assigned' &&
      article.publishedAt,
  );
}

export function getPublishedArticles() {
  return articleRecords.filter(isPublishable);
}

export function canPreviewDrafts() {
  return (
    process.env.NODE_ENV !== 'production' &&
    process.env.NEXT_PUBLIC_SHOW_DRAFTS === 'true' &&
    process.env.SITE_LAUNCH_READY !== 'true'
  );
}
