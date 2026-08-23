export type PageSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: PageSection[];
  related: Array<{ label: string; href: string; description: string }>;
};

export const pageContent: Record<string, PageContent> = {
  'ai-automation': {
    eyebrow: 'FOUNDATION',
    title: 'AI automation that starts with the work.',
    description: 'A plain-English starting point for using AI automation safely in a small business.',
    intro: 'Before you connect a tool, choose one repetitive task, make the current process visible, and decide where a person stays responsible.',
    sections: [
      {
        heading: 'What it means here',
        paragraphs: ['AI automation is a workflow in which an AI-assisted step helps classify, extract, draft, or summarise—inside a process with a clear owner. It is not a promise that the business can run itself.'],
        points: ['Use rules for predictable decisions.', 'Use AI where language or messy input needs interpretation.', 'Keep human approval where an error could affect a customer, payment, promise, or sensitive record.'],
      },
      {
        heading: 'A sensible first task',
        paragraphs: ['A good candidate is frequent, easy to describe, low-risk, and measurable. A bad candidate depends on unspoken judgment, contains many exceptions, or creates serious consequences when the output is wrong.'],
      },
      {
        heading: 'The five-part method',
        paragraphs: ['Inventory the task. Map the manual process. Define exceptions and approval. Test with dummy data. Measure the full workload—including review and maintenance—not just the automated step.'],
      },
    ],
    related: [
      { label: 'Review the foundation hub', href: '/ai-automation', description: 'A starting framework for selecting a low-risk workflow.' },
      { label: 'Explore workflows', href: '/workflows', description: 'See how the method applies to recurring business tasks.' },
      { label: 'Use a template', href: '/templates', description: 'Map a task before giving any tool access.' },
    ],
  },
  workflows: {
    eyebrow: 'WORKFLOWS',
    title: 'Solve one repetitive job at a time.',
    description: 'Practical AI workflow guides for email, support, follow-up, meetings, and small-business admin.',
    intro: 'Each workflow guide begins with the manual process, adds the smallest useful automation, and documents the review and fallback path.',
    sections: [
      {
        heading: 'Publishing sequence',
        paragraphs: ['The first workflow cluster will cover task selection, email drafts, customer-service triage, lead follow-up, and meeting notes. These pages will be published only after their steps and claims are tested.'],
        points: ['Choose and map the task.', 'Prepare non-sensitive test cases.', 'Test normal inputs and failures.', 'Keep a named reviewer and manual fallback.', 'Measure whether the whole workflow improves.'],
      },
      {
        heading: 'What every workflow includes',
        paragraphs: ['You will see the trigger, required inputs, rules, AI-assisted step, exception path, human approval, output, test plan, owner, and maintenance check—not just a screenshot of an app.'],
      },
    ],
    related: [
      { label: 'Start with AI automation', href: '/ai-automation', description: 'Learn the shared safety and selection framework.' },
      { label: 'Browse tutorials', href: '/tutorials', description: 'Move from a workflow map to a tested implementation.' },
      { label: 'Get templates', href: '/templates', description: 'Use a task inventory and workflow map.' },
    ],
  },
  'ai-tools': {
    eyebrow: 'AI TOOLS',
    title: 'Choose by workflow. Verify with evidence.',
    description: 'A transparent approach to evaluating AI tools for non-technical small business owners.',
    intro: 'A tool earns a recommendation only when it solves a defined task, survives relevant failure tests, and makes its ongoing cost and maintenance understandable.',
    sections: [
      {
        heading: 'Our evaluation lens',
        paragraphs: ['We look beyond feature lists. The useful questions are whether the tool fits the workflow, keeps a person in control, exposes errors, protects access, supports an exit, and remains manageable after setup.'],
        points: ['Scenario fit and setup clarity', 'Reliability, logs, and error recovery', 'Human approval and permissions', 'Data controls and export options', 'Current plan limits and total ongoing work'],
      },
      {
        heading: 'No untested rankings',
        paragraphs: ['Planned roundups and comparisons remain unpublished until the same scenario is run across eligible products. Pricing, integrations, and policies are checked against current official sources at publication time.'],
      },
    ],
    related: [
      { label: 'Comparison methodology', href: '/comparisons', description: 'See how same-scenario comparisons are structured.' },
      { label: 'Build the workflow first', href: '/workflows', description: 'Define the job before shopping for a tool.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand how commissions and editorial decisions are separated.' },
    ],
  },
  tutorials: {
    eyebrow: 'TUTORIALS',
    title: 'Build, test, and keep a way back.',
    description: 'Step-by-step, no-code AI automation tutorials with test cases, human review, and maintenance guidance.',
    intro: 'A tutorial is complete only when the workflow can be checked, paused, and handled manually—not when a happy-path demo runs once.',
    sections: [
      {
        heading: 'The tutorial standard',
        paragraphs: ['Every tutorial states prerequisites, uses dummy data first, shows the exact test scope, includes common failures, and defines a manual fallback. Product screenshots appear only when the interface was actually used.'],
      },
      {
        heading: 'Before following a tool-specific step',
        paragraphs: ['Interfaces, plans, and integrations change. Check the article review date and the vendor’s current official documentation before connecting a real account or business data.'],
        points: ['Never paste passwords or API keys into a public document.', 'Start with the least access required.', 'Test with fictional records.', 'Review output before any external action.'],
      },
    ],
    related: [
      { label: 'Understand AI automation', href: '/ai-automation', description: 'Start with suitability and risk.' },
      { label: 'Find a workflow', href: '/workflows', description: 'Choose the business job to solve.' },
      { label: 'Prepare a template', href: '/templates', description: 'Document inputs, exceptions, and tests.' },
    ],
  },
  comparisons: {
    eyebrow: 'COMPARISONS',
    title: 'The same task. The same test. Honest limits.',
    description: 'Evidence-led AI tool comparisons for small business, with transparent scenarios and no universal winner.',
    intro: 'We compare tools only when the decision matters to a defined reader. A result is framed by scenario, plan, date, and test scope.',
    sections: [
      {
        heading: 'How a comparison earns a verdict',
        paragraphs: ['Both products must run equivalent workflows with the same dummy data and failure cases. We record setup, permissions, logs, recovery, reviewer corrections, usage model, export, and limitations.'],
      },
      {
        heading: 'Planned first comparison',
        paragraphs: ['Zapier vs Make for small business is in the research plan. No verdict, feature claim, or price is published here because current hands-on testing has not been completed.'],
      },
      {
        heading: 'Commercial independence',
        paragraphs: ['Affiliate eligibility does not determine inclusion or ranking. Paying and non-paying vendors receive the same evidence standard, and the page can recommend neither tool when a native feature is enough.'],
      },
    ],
    related: [
      { label: 'AI tools', href: '/ai-tools', description: 'Review the broader evaluation framework.' },
      { label: 'Workflows', href: '/workflows', description: 'Define the scenario a comparison should answer.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'See the rules for commercial links.' },
    ],
  },
  templates: {
    eyebrow: 'TEMPLATES',
    title: 'Put the workflow on paper first.',
    description: 'Vendor-neutral small business automation templates for planning, testing, reviewing, and maintaining a workflow.',
    intro: 'The safest first automation tool may be a one-page worksheet. These resources are designed to make assumptions, exceptions, and ownership visible.',
    sections: [
      {
        heading: 'Template roadmap',
        paragraphs: ['The initial set will include a repetitive-task inventory, one-page workflow map, human-review checklist, test log, simple ROI worksheet, and tool-evaluation scorecard. Downloads appear only after the actual files pass usability and accessibility checks.'],
      },
      {
        heading: 'What to write down',
        paragraphs: ['Name the trigger, required input, rule, output, exception, reviewer, fallback, owner, and maintenance date. If a step is hard to describe, improve the manual process before automating it.'],
      },
      {
        heading: 'Free before paid',
        paragraphs: ['Free templates will validate whether the system helps real owners. A paid pack is considered only after genuine user feedback; there is no checkout or email gate in this prototype.'],
      },
    ],
    related: [
      { label: 'Start with the foundation', href: '/ai-automation', description: 'Use the decision framework before mapping a task.' },
      { label: 'Explore workflow examples', href: '/workflows', description: 'See what a complete workflow needs.' },
      { label: 'Read the product approach', href: '/about', description: 'Understand the editorial and product standard.' },
    ],
  },
  blog: {
    eyebrow: 'BLOG',
    title: 'Practical guides, published with a reason.',
    description: 'Original, evidence-led guides about simple AI automation for small business.',
    intro: 'The editorial queue has ten approved briefs and no published articles yet. Drafts stay outside navigation, indexing, and the sitemap until research, testing, fact checking, and human review are complete.',
    sections: [
      {
        heading: 'Current publishing status',
        paragraphs: ['A foundation draft exists for editorial preview only. It is not presented as a published article, and its route is unavailable unless local draft preview is explicitly enabled.'],
      },
      {
        heading: 'What is coming after verification',
        paragraphs: ['Task selection, automation ideas, email, customer service, lead follow-up, meeting notes, a tested tools guide, a same-scenario comparison, and usable templates. Publishing order may change after SERP and audience validation.'],
      },
    ],
    related: [
      { label: 'Review the foundation topic', href: '/ai-automation', description: 'Start with the public topic framework while articles are researched.' },
      { label: 'Browse topic hubs', href: '/ai-automation', description: 'Explore the planned content architecture.' },
      { label: 'About our standards', href: '/about', description: 'See what must happen before a guide is published.' },
    ],
  },
  about: {
    eyebrow: 'ABOUT',
    title: 'No coding. No theatre. No invented experience.',
    description: `About ${siteConfig.name}, its audience, editorial standard, and temporary brand status.`,
    intro: `${siteConfig.name} is the temporary name for an independent English-language resource about simple AI automation for small business owners.`,
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: ['We write for non-technical owners in the United States, United Kingdom, Canada, and Australia who want fewer repetitive tasks and more reliable processes—not another stream of AI news.'],
      },
      {
        heading: 'How we work',
        paragraphs: ['Content starts with a reader problem and a written brief. Tool claims require current primary-source research; hands-on language requires a reproducible test. A person reviews every article before publication.'],
        points: ['No fake reviews or first-hand claims', 'No invented prices, statistics, or savings', 'Clear limits and human approval points', 'Affiliate relationships disclosed without changing the verdict'],
      },
      {
        heading: 'What remains temporary',
        paragraphs: ['The brand name, domain, public email, authors, and legal text require owner approval before launch. This prototype is not an operating publication and does not collect submissions or payments.'],
      },
    ],
    related: [
      { label: 'Review the foundation topic', href: '/ai-automation', description: 'See the intended editorial method and safety boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand the commercial boundary.' },
      { label: 'Contact', href: '/contact', description: 'See how corrections and enquiries will be handled.' },
    ],
  },
  contact: {
    eyebrow: 'CONTACT',
    title: 'Questions, corrections, and clear boundaries.',
    description: `How to contact ${siteConfig.name} after the owner approves a public email address.`,
    intro: siteConfig.contactEmail
      ? `Email ${siteConfig.name} at ${siteConfig.contactEmail}. Do not include passwords, payment details, customer records, or other sensitive information.`
      : 'A verified public email address has not yet been approved. The production site must configure and test one before accepting messages.',
    sections: [
      {
        heading: 'What we plan to receive',
        paragraphs: ['Readers will be able to report an error, suggest a workflow question, request an accessibility fix, or ask about a disclosed commercial relationship.'],
        points: ['Do not send passwords, API keys, payment details, customer records, or other sensitive information.', 'Product pitches do not guarantee coverage.', 'Corrections will be checked against evidence before the page is changed.'],
      },
      {
        heading: 'Contact configuration status',
        paragraphs: siteConfig.contactEmail
          ? [`The approved public address is ${siteConfig.contactEmail}. Inbox ownership, delivery, retention, access, and the privacy notice require final launch review.`]
          : ['No public address is displayed. The owner must set NEXT_PUBLIC_CONTACT_EMAIL, verify inbox ownership and delivery, and review the privacy notice before launch.'],
      },
    ],
    related: [
      { label: 'About', href: '/about', description: 'Learn how the publication is meant to operate.' },
      { label: 'Privacy policy', href: '/privacy-policy', description: 'Read the draft data-handling boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Review the commercial policy.' },
    ],
  },
  'privacy-policy': {
    eyebrow: 'DRAFT POLICY',
    title: 'Privacy Policy',
    description: `Prototype privacy policy for ${siteConfig.name}; requires qualified human review before launch.`,
    intro: 'This is a prototype draft, not legal advice. It describes the current local site, which does not intentionally collect submissions, run analytics, serve ads, or process payments. It must be rewritten for the final services and reviewed before launch.',
    sections: [
      {
        heading: 'Current prototype',
        paragraphs: ['The local prototype displays static editorial content. It has no working contact form, account system, newsletter signup, advertising code, analytics tag, checkout, or customer database.'],
      },
      {
        heading: 'Information that may be added later',
        paragraphs: ['A production site may process server logs, contact messages, consent choices, analytics events, affiliate click parameters, or newsletter details. Each category, purpose, provider, retention period, legal basis, transfer, and user choice must be documented from the actual implementation.'],
      },
      {
        heading: 'Owner actions before launch',
        paragraphs: ['Name the responsible entity and contact method; inventory every service and cookie; document retention and rights handling; review requirements for all target markets; add a clear effective date and change process.'],
      },
    ],
    related: [
      { label: 'Contact boundary', href: '/contact', description: 'See why no live inbox is connected yet.' },
      { label: 'Terms', href: '/terms', description: 'Review the draft terms boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand future commercial links.' },
    ],
  },
  terms: {
    eyebrow: 'DRAFT POLICY',
    title: 'Terms of Use',
    description: `Prototype terms for ${siteConfig.name}; requires qualified legal review before launch.`,
    intro: 'This prototype draft is not legal advice and is not ready for production. The final terms must identify the owner, jurisdiction, services, effective date, and actual commercial relationships.',
    sections: [
      {
        heading: 'Educational information',
        paragraphs: ['The planned site provides general educational information about workflows and tools. It is not a substitute for professional legal, privacy, security, accounting, medical, financial, or employment advice.'],
      },
      {
        heading: 'Your responsibility',
        paragraphs: ['Readers must check current vendor documentation, test with appropriate data, obtain necessary permission, and decide whether a workflow fits their business. Automation output must be reviewed when an error could affect another person or create a commitment.'],
      },
      {
        heading: 'Accuracy, links, and changes',
        paragraphs: ['Software, pricing, policies, and availability can change. Articles will state their review scope, but the owner must define the final correction, external-link, liability, intellectual-property, and dispute terms with qualified counsel.'],
      },
    ],
    related: [
      { label: 'Privacy policy', href: '/privacy-policy', description: 'Review the current data boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'See how commercial links will be labelled.' },
      { label: 'About', href: '/about', description: 'Read the editorial commitment.' },
    ],
  },
  'affiliate-disclosure': {
    eyebrow: 'DISCLOSURE',
    title: 'Affiliate Disclosure',
    description: `How ${siteConfig.name} plans to label affiliate relationships and protect editorial independence.`,
    intro: 'The prototype has no active affiliate links. If the site later earns a commission from a link, the relationship will be disclosed clearly and will not change the testing standard or verdict.',
    sections: [
      {
        heading: 'What an affiliate link means',
        paragraphs: ['The site may receive compensation if a reader follows a labelled link and completes an eligible purchase or signup. The owner must verify each program and disclosure requirement before activation.'],
      },
      {
        heading: 'Editorial independence',
        paragraphs: ['Commission does not buy inclusion, a ranking, a positive review, or the removal of limitations. A non-affiliate tool can win, and an affiliate tool can be excluded.'],
        points: ['No fake hands-on experience', 'No unverified prices or features', 'Testing scope shown on the page', 'Disclosure before or near the first commercial link', 'Sponsored placements separated from editorial results'],
      },
      {
        heading: 'What is not active today',
        paragraphs: ['No program enrollment, tracking setup, payout account, sponsored content, or affiliate revenue is active in this local prototype. Those actions require explicit human approval.'],
      },
    ],
    related: [
      { label: 'AI tools', href: '/ai-tools', description: 'See the evidence-led tool approach.' },
      { label: 'Comparisons', href: '/comparisons', description: 'Review same-scenario testing principles.' },
      { label: 'About', href: '/about', description: 'Read the broader editorial standard.' },
    ],
  },
};
import { siteConfig } from './site-config';
