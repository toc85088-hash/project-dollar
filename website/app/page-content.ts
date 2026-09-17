import { siteConfig } from './site-config';

export type PageSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
  links?: Array<{ label: string; href: string }>;
};

export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  updatedAt?: string;
  articleCollection?: 'all' | 'category';
  sections: PageSection[];
  related: Array<{ label: string; href: string; description: string }>;
};

const updatedAt = '2026-09-17';

export const pageContent: Record<string, PageContent> = {
  'ai-automation': {
    eyebrow: 'FOUNDATION',
    title: 'AI automation that starts with the work.',
    description: 'A plain-English starting point for using AI automation safely in a small business.',
    intro: 'Choose one repetitive task, make the current process visible, and decide where a person stays responsible before connecting a tool.',
    updatedAt,
    articleCollection: 'all',
    sections: [
      {
        heading: 'What AI automation means here',
        paragraphs: [
          'AI automation is a workflow in which an AI-assisted step helps classify, extract, draft, or summarise inside a process with a clear owner. It is not a promise that a business can run itself.',
          'Use fixed rules for predictable decisions. Add AI only when language or messy input needs bounded interpretation, and keep human approval where an error could affect a customer, payment, promise, right, or sensitive record.',
        ],
      },
      {
        heading: 'Choose a task whose failure you can see',
        paragraphs: ['A useful first candidate is frequent, easy to describe, low-risk, and measurable. Reject tasks that depend on unspoken judgement, contain many exceptions, or create serious consequences before a person can intervene.'],
        points: [
          'Write the trigger, required inputs, rules, exceptions, output, reviewer, and fallback.',
          'Prefer internal drafts, tasks, and queues over automatic external actions.',
          'Test with fictional, non-sensitive records before using business data.',
          'Measure preparation, review, correction, failure, and maintenance—not only processing speed.',
        ],
      },
      {
        heading: 'Keep a manual route',
        paragraphs: ['A workflow is not ready when staff cannot finish the work without it. Assign one owner, make failures visible, document how to pause the automation, and exercise the fallback after meaningful changes.'],
      },
    ],
    related: [
      { label: 'Explore workflows', href: '/workflows', description: 'Apply the foundation to email, support, follow-up, meetings, and admin.' },
      { label: 'Browse tutorials', href: '/tutorials', description: 'Move from a workflow map to a tested implementation.' },
      { label: 'Read the editorial policy', href: '/editorial-policy', description: 'See how evidence, testing, and corrections are handled.' },
    ],
  },
  workflows: {
    eyebrow: 'WORKFLOWS',
    title: 'Solve one repetitive job at a time.',
    description: 'Practical AI workflow guides for email, support, follow-up, meetings, and small-business admin.',
    intro: 'Each guide begins with the manual process, adds the smallest useful automation, and keeps review, exceptions, and recovery visible.',
    updatedAt,
    articleCollection: 'category',
    sections: [
      {
        heading: 'The shared workflow pattern',
        paragraphs: ['A useful workflow names the trigger, required input, rules, AI-assisted step, output, exception route, reviewer, owner, and fallback. If one of those is missing, the diagram is not finished.'],
        points: [
          'Capture the source without silently expanding access.',
          'Check required fields and stop conditions before drafting.',
          'Route uncertainty to a named person.',
          'Record the outcome, correction, exception, and failure state.',
          'Keep the original manual process available while evidence is limited.',
        ],
      },
      {
        heading: 'What these guides do not promise',
        paragraphs: ['Vendor-neutral workflow patterns are not proof that a particular product, plan, integration, saving, or performance result will work for your business. Tool-specific claims require current documentation and reproducible first-hand testing.'],
      },
    ],
    related: [
      { label: 'Start with AI automation', href: '/ai-automation', description: 'Use the common suitability and risk framework.' },
      { label: 'Browse tutorials', href: '/tutorials', description: 'Learn how to map and test one workflow.' },
      { label: 'Get templates', href: '/templates', description: 'Document inputs, exceptions, ownership, and review.' },
    ],
  },
  'ai-tools': {
    eyebrow: 'AI TOOLS',
    title: 'Choose by workflow. Verify with evidence.',
    description: 'A transparent approach to evaluating AI tools for non-technical small business owners.',
    intro: 'A tool earns a recommendation only when it solves a defined task, survives relevant failure tests, and makes its ongoing work and limits understandable.',
    updatedAt,
    sections: [
      {
        heading: 'Our evaluation lens',
        paragraphs: ['We look beyond feature lists. The useful questions are whether the tool fits the workflow, keeps a person in control, exposes errors, limits access, supports an exit, and remains manageable after setup.'],
        points: ['Scenario fit and setup clarity', 'Reliability, logs, and recovery', 'Approval and permissions', 'Data controls and export', 'Current plan limits and total ongoing work'],
      },
      {
        heading: 'No untested rankings',
        paragraphs: ['Roundups and comparisons remain unpublished until equivalent scenarios are tested. Pricing, integrations, availability, and policies must be checked against current official sources for the intended account, region, and publication date.'],
      },
    ],
    related: [
      { label: 'Comparison methodology', href: '/comparisons', description: 'See how equivalent scenarios and failure cases are compared.' },
      { label: 'Build the workflow first', href: '/workflows', description: 'Define the job before shopping for a tool.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand how commercial links and editorial decisions are separated.' },
    ],
  },
  tutorials: {
    eyebrow: 'TUTORIALS',
    title: 'Build, test, and keep a way back.',
    description: 'Step-by-step, no-code AI automation tutorials with test cases, human review, and maintenance guidance.',
    intro: 'A tutorial is complete only when the workflow can be checked, paused, and handled manually—not when a happy-path demonstration runs once.',
    updatedAt,
    articleCollection: 'category',
    sections: [
      {
        heading: 'The tutorial standard',
        paragraphs: ['Every tutorial states its evidence boundary, uses fictional test data first, describes normal and failure cases, and defines a manual fallback. Product screenshots appear only when the interface was actually used.'],
      },
      {
        heading: 'Before following a tool-specific step',
        paragraphs: ['Interfaces, plans, and integrations change. Check the article review date and the vendor’s current official documentation before connecting a real account or business data.'],
        points: ['Use the least access required.', 'Keep credentials out of shared documents.', 'Test without real customer records.', 'Review output before any external action.', 'Re-test after material product or process changes.'],
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
    intro: 'A comparison should answer a defined decision for a defined reader. Results must be framed by scenario, plan, region, date, and test scope.',
    updatedAt,
    sections: [
      {
        heading: 'How a comparison earns a verdict',
        paragraphs: ['Eligible products must run equivalent workflows with the same fictional test data and failure cases. The record should cover setup, permissions, logs, recovery, reviewer corrections, usage model, export, and limitations.'],
      },
      {
        heading: 'Why no verdict is published yet',
        paragraphs: ['The planned Zapier versus Make comparison still requires current hands-on testing. This page does not publish a winner, feature claim, plan limit, or price before that evidence exists.'],
      },
      {
        heading: 'Commercial independence',
        paragraphs: ['Affiliate eligibility does not determine inclusion or ranking. A comparison can recommend a non-affiliate option, a native feature, a manual process, or neither product.'],
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
    intro: 'The safest first automation tool may be a one-page worksheet that makes assumptions, exceptions, and ownership visible.',
    updatedAt,
    sections: [
      {
        heading: 'What a useful template must capture',
        paragraphs: ['A workflow map should name the trigger, required input, rule, output, exception, reviewer, fallback, owner, and maintenance date. If a step is hard to describe, improve the manual process before automating it.'],
      },
      {
        heading: 'Download gate',
        paragraphs: ['Downloads will appear only after the actual files pass content, accessibility, security, and usability review. No email gate, checkout, or downloadable resource is active on this pre-launch site.'],
      },
      {
        heading: 'Free before paid',
        paragraphs: ['A free resource should prove that the system helps real owners before a paid pack is considered. There is no payment system or product sale on the site.'],
      },
    ],
    related: [
      { label: 'Start with the foundation', href: '/ai-automation', description: 'Use the decision framework before mapping a task.' },
      { label: 'Explore workflow examples', href: '/workflows', description: 'See what a complete workflow needs.' },
      { label: 'Read the product approach', href: '/about', description: 'Understand the editorial and product standard.' },
    ],
  },
  blog: {
    eyebrow: 'GUIDES',
    title: 'Practical guides, published with a reason.',
    description: 'Original, evidence-led guides about simple AI automation for small business.',
    intro: 'Every guide must solve a real reader problem, state its evidence boundary, and pass human review before it appears here.',
    updatedAt,
    articleCollection: 'all',
    sections: [
      {
        heading: 'What earns publication',
        paragraphs: ['A guide needs a clear answer, practical steps, limitations, review and fallback guidance where relevant, current sources for factual claims, honest testing language, and a named publication owner.'],
      },
      {
        heading: 'What stays outside the public site',
        paragraphs: ['Unverified prices, unsupported numbers, invented experience, unresolved editorial markers, incomplete tool tests, and drafts without human approval stay out of navigation, search indexing, and the sitemap.'],
      },
    ],
    related: [
      { label: 'Review the foundation topic', href: '/ai-automation', description: 'Start with the shared safety and selection framework.' },
      { label: 'Browse workflows', href: '/workflows', description: 'Find practical workflow patterns.' },
      { label: 'Editorial policy', href: '/editorial-policy', description: 'See the evidence, testing, and correction standard.' },
    ],
  },
  about: {
    eyebrow: 'ABOUT',
    title: 'Practical automation guidance without invented authority.',
    description: `About ${siteConfig.name}, its audience, editorial identity, and evidence standard.`,
    intro: `${siteConfig.name} is the approved brand for an independent English-language publication about simple AI automation for small business owners. It is not presented as a registered company, agency, or multi-person team.`,
    updatedAt,
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: ['We write for non-technical owners in the United States, United Kingdom, Canada, and Australia who want fewer repetitive tasks and more reliable processes—not a stream of AI news or unsupported promises.'],
      },
      {
        heading: 'Editorial identity',
        paragraphs: [`Articles prepared for the publication use the organisational byline “${siteConfig.editorialByline}”. That byline identifies the brand responsible for the material; it does not claim a separately named author, reviewer, legal entity, or editorial team. A real publication owner and any named author or reviewer biography still require human approval before launch.`],
      },
      {
        heading: 'How material is prepared',
        paragraphs: ['Content starts with a reader problem and a written brief. Current factual claims use traceable sources, with official or primary material preferred. Hands-on language requires a reproducible test record. A person must approve every article before publication.'],
        points: ['No invented reviews or first-hand claims', 'No unverified prices, statistics, savings, or results', 'Clear limitations, stop conditions, and human review', 'Commercial relationships disclosed without changing the evidence standard'],
      },
      {
        heading: 'Corrections and updates',
        paragraphs: ['Material corrections should state what changed and update the review date when the underlying facts are rechecked. Software, plans, laws, and policies can change; readers should verify current official information before acting.'],
      },
    ],
    related: [
      { label: 'Editorial policy', href: '/editorial-policy', description: 'Read the source, testing, AI-assistance, and correction rules.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand the commercial boundary.' },
      { label: 'Contact', href: '/contact', description: 'See how corrections and enquiries can be submitted.' },
    ],
  },
  'editorial-policy': {
    eyebrow: 'EDITORIAL POLICY',
    title: 'Evidence before confidence.',
    description: `${siteConfig.name} editorial policy for sources, tool testing, AI assistance, corrections, updates, and commercial independence.`,
    intro: 'This policy explains the publication standard. It does not claim that every planned article, tool test, or reviewer identity is already complete.',
    updatedAt,
    sections: [
      {
        heading: 'Sources and verification',
        paragraphs: ['Official documentation, regulators, standards bodies, and original provider material are preferred for changing factual claims. Sources are recorded with a verification date. Secondary sources may add context but do not replace a current primary source when one is available.'],
      },
      {
        heading: 'Hands-on testing',
        paragraphs: ['Words such as tested, used, measured, fastest, easiest, and best require a reproducible record that states the account or plan, date, scenario, test data, normal and failure cases, results, limitations, and reviewer. A vendor page alone is not hands-on evidence.'],
      },
      {
        heading: 'AI-assisted editorial work',
        paragraphs: ['AI may assist with planning, drafting, consistency checks, or code, but it does not become a source and cannot approve publication. A human must verify claims, links, calculations, testing records, disclosures, and the final article. Unverified generated material is removed rather than presented as fact.'],
      },
      {
        heading: 'Corrections, updates, and conflicts',
        paragraphs: ['Material errors should be corrected promptly after verification. Update dates reflect meaningful review, not cosmetic edits. Affiliate eligibility, sponsorship, or vendor access does not determine inclusion, ranking, or verdict.'],
      },
      {
        heading: 'Publication gate',
        paragraphs: ['An article remains unavailable to public navigation and indexing until its evidence requirements are complete, a responsible publication owner is assigned, editorial markers are cleared, metadata is checked, and a person records final approval.'],
      },
    ],
    related: [
      { label: 'About', href: '/about', description: 'Read the audience and organisational identity.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'See the commercial-link rules.' },
      { label: 'Contact', href: '/contact', description: 'Use the approved channel to report a correction.' },
    ],
  },
  contact: {
    eyebrow: 'CONTACT',
    title: 'Questions, corrections, and clear boundaries.',
    description: `How to contact ${siteConfig.name}${siteConfig.contactEmail ? '' : ' after a public inbox is approved'}.`,
    intro: siteConfig.contactEmail
      ? `Email ${siteConfig.name} at ${siteConfig.contactEmail}. Do not include passwords, payment details, customer records, or other sensitive information.`
      : 'A verified public email address has not been approved. No contact form or unverified address is shown on the pre-launch site.',
    updatedAt,
    sections: [
      {
        heading: 'What the contact channel is for',
        paragraphs: ['Readers may report a factual error, broken link, accessibility problem, unclear disclosure, or workflow question. Product pitches do not guarantee coverage, and corrections are checked against evidence before publication.'],
        points: ['Do not send passwords, authentication codes, API keys, payment details, customer records, health information, or other sensitive material.', 'Include the page address and a reliable source when reporting a factual issue.', 'Do not use this channel for urgent, legal, medical, financial, safety, or account-support requests.'],
      },
      {
        heading: 'Contact status',
        paragraphs: siteConfig.contactEmail
          ? ['The configured inbox must still pass ownership, delivery, access, retention, and privacy review before the full launch gate is approved.']
          : ['The owner must choose a real public address, verify inbox ownership and delivery, define access and retention, and update the Privacy Policy before launch.'],
        links: siteConfig.contactEmail ? [{ label: `Email ${siteConfig.contactEmail}`, href: `mailto:${siteConfig.contactEmail}` }] : undefined,
      },
    ],
    related: [
      { label: 'Editorial policy', href: '/editorial-policy', description: 'See how corrections and updates are handled.' },
      { label: 'Privacy policy', href: '/privacy-policy', description: 'Read the current data-handling boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Review the commercial policy.' },
    ],
  },
  'privacy-policy': {
    eyebrow: 'PRIVACY POLICY — PRE-LAUNCH DRAFT',
    title: 'Privacy Policy',
    description: `Pre-launch privacy policy for ${siteConfig.name}; final owner, provider, retention, and legal review remain required.`,
    intro: 'This draft describes the current site and known launch boundary. It is not legal advice and must be approved against the real hosting, contact, analytics, advertising, affiliate, and consent configuration before public launch.',
    updatedAt,
    sections: [
      {
        heading: 'Current collection',
        paragraphs: ['The current site displays editorial content. It has no contact form, user account, newsletter signup, analytics tag, advertising code, checkout, payment flow, or customer database. It does not intentionally ask visitors to submit personal information through the site.'],
      },
      {
        heading: 'Hosting and security data',
        paragraphs: ['A public hosting and network provider may process technical request data such as IP address, browser or device information, requested pages, timestamps, and security events to deliver and protect the site. The final provider, fields, purpose, retention, access, transfer, and deletion details must be confirmed from the actual production service.'],
      },
      {
        heading: 'Contact messages',
        paragraphs: ['If a public email is enabled, the email provider and authorised inbox users will process the address, message, headers, and any information the sender includes so the enquiry can be reviewed and answered. Visitors should not send sensitive records. The provider and retention period remain launch decisions.'],
      },
      {
        heading: 'Analytics, advertising, affiliates, and cookies',
        paragraphs: ['Google Analytics, AdSense, affiliate tracking, behavioural advertising, newsletter tools, and consent-management code are not active. If any service is added later, this policy and the relevant notice or choice must be updated before activation.'],
      },
      {
        heading: 'Rights and responsible owner',
        paragraphs: ['The responsible publisher, applicable rights process, complaint route, governing privacy framework, international-transfer safeguards, and public contact must be identified and reviewed for the actual target markets before launch.'],
      },
    ],
    related: [
      { label: 'Contact', href: '/contact', description: 'Review the current contact-channel status.' },
      { label: 'Terms', href: '/terms', description: 'Read the educational-use boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand future commercial links.' },
    ],
  },
  terms: {
    eyebrow: 'TERMS OF USE — PRE-LAUNCH DRAFT',
    title: 'Terms of Use',
    description: `Pre-launch terms for ${siteConfig.name}; final owner, jurisdiction, effective date, and qualified legal review remain required.`,
    intro: 'These draft terms describe the intended educational site. They are not legal advice and are not approved for public launch until the responsible publisher and applicable legal terms are confirmed.',
    updatedAt,
    sections: [
      {
        heading: 'Educational information',
        paragraphs: ['The site provides general information about workflows, automation planning, and software evaluation. It is not a substitute for legal, privacy, security, accounting, medical, financial, employment, or other professional advice.'],
      },
      {
        heading: 'Your responsibility',
        paragraphs: ['Readers are responsible for checking current vendor documentation, testing with appropriate data, obtaining necessary permission, protecting accounts and records, and deciding whether a workflow fits their circumstances. Automation output requires review when an error could affect another person or create a commitment.'],
      },
      {
        heading: 'Accuracy and external services',
        paragraphs: ['Software, availability, policies, and prices can change. Dates and evidence boundaries show the review scope but do not guarantee that information remains current. External links are provided for context; third-party services operate under their own terms and privacy practices.'],
      },
      {
        heading: 'Content use and submissions',
        paragraphs: ['The final publisher must define copyright ownership, permitted quotation, template licences, prohibited reuse, and the treatment of reader submissions. The current site does not accept user-generated content or sell downloadable products.'],
      },
      {
        heading: 'Terms still requiring approval',
        paragraphs: ['The responsible legal owner, effective date, governing law, eligibility, warranty and liability language, dispute process, change notice, intellectual-property terms, and any digital-product conditions require qualified review before launch.'],
      },
    ],
    related: [
      { label: 'Privacy policy', href: '/privacy-policy', description: 'Review the current data boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'See how commercial links will be labelled.' },
      { label: 'Editorial policy', href: '/editorial-policy', description: 'Read the evidence and correction standard.' },
    ],
  },
  'affiliate-disclosure': {
    eyebrow: 'AFFILIATE DISCLOSURE',
    title: 'Affiliate Disclosure',
    description: `How ${siteConfig.name} will label affiliate relationships and protect editorial independence.`,
    intro: 'There are no active affiliate links, program relationships, sponsored placements, or affiliate tracking on this site. A future commission relationship must be disclosed clearly before or near the relevant commercial link.',
    updatedAt,
    sections: [
      {
        heading: 'What an affiliate link would mean',
        paragraphs: ['The publisher may receive compensation if a reader follows a clearly labelled link and completes an eligible purchase or signup. The price to the reader may or may not be affected according to the actual program; that detail must be verified rather than assumed.'],
      },
      {
        heading: 'Editorial independence',
        paragraphs: ['Commission does not buy inclusion, ranking, a positive review, or removal of limitations. A non-affiliate tool can be preferred, and an affiliate tool can be excluded when the evidence does not support it.'],
        points: ['No unverified hands-on claim', 'No unverified price or feature', 'Testing scope and date shown', 'Clear disclosure before or near the first commercial link', 'Sponsored material separated from independent editorial work'],
      },
      {
        heading: 'Link and tracking rules',
        paragraphs: ['Future affiliate links must be recorded, labelled, use the appropriate sponsored relationship attribute, and be checked for destination, disclosure, market restrictions, tracking behaviour, and program terms. No relationship is active until a person approves it.'],
      },
    ],
    related: [
      { label: 'Editorial policy', href: '/editorial-policy', description: 'Read the evidence and commercial-independence rules.' },
      { label: 'AI tools', href: '/ai-tools', description: 'See the evidence-led tool approach.' },
      { label: 'Comparisons', href: '/comparisons', description: 'Review same-scenario testing principles.' },
    ],
  },
};
