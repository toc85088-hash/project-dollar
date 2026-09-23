import { siteConfig } from './site-config';
import { cleaningOffer } from './cleaning/offer';

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

const updatedAt = '2026-09-18';

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
        paragraphs: ['Template packs will appear only after the actual files pass content, accessibility, security, and usability review. The Cleaning pilot page offers a local planning-brief download, not a connected automation template. No email gate or checkout is active.'],
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
    title: `About ${siteConfig.name}`,
    description: `About ${siteConfig.name}, its audience, editorial identity, and evidence standard.`,
    intro: `${siteConfig.name} is a practical automation brand for small business owners. Our first focus is US residential cleaning: inquiry follow-up, quote preparation, and booking handoffs with an owner in control. The name does not imply a registered company, certification, or multi-person team.`,
    updatedAt: '2026-09-23',
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: ['The first pilot is designed for US residential cleaning owners and office leads. The broader brand remains open to other small businesses and home services. Future verticals are not live service offerings, and the cleaning demo is not evidence of a completed customer implementation.'],
        links: [{ label: 'Explore the cleaning pilot', href: '/cleaning' }],
      },
      {
        heading: 'Editorial identity',
        paragraphs: [`Articles use the organisational byline “${siteConfig.editorialByline}”. It identifies the publication responsible for the material and does not imply a separately named author, reviewer, legal entity, or staff team. When a named contributor or reviewer is added later, the site will identify that person only after their role and biography are verified.`],
      },
      {
        heading: 'How material is prepared',
        paragraphs: ['Content starts with a reader problem and a written brief. Current factual claims use traceable sources, with official or primary material preferred. Hands-on language requires a reproducible test record. A person must approve every article before publication.'],
        points: ['No invented reviews or first-hand claims', 'No unverified prices, statistics, savings, or results', 'Clear limitations, stop conditions, and human review', 'Commercial relationships disclosed without changing the evidence standard'],
      },
      {
        heading: 'Corrections and updates',
        paragraphs: ['Material corrections state what changed when the error could affect a reader’s decision. Review dates change only after meaningful rechecking. Software, plans, laws, and policies can change, so readers should verify current official information before acting. Correction requests use the public channel listed on the Contact page.'],
      },
      {
        heading: 'Talk about your workflow',
        paragraphs: [`Contact ${siteConfig.name} at ${siteConfig.contactEmail} with a general description of your inquiry process. Please do not send customer records or account credentials. The free demo is a fictional simulation, not a customer case study or connected implementation.`],
        links: [cleaningOffer.secondaryCta, { label: 'Cleaning pilot scope and pricing', href: '/cleaning/pilot' }],
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
    intro: 'This policy explains how material earns publication, how evidence is described, and what remains unpublished when verification is incomplete.',
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
        paragraphs: ['Material errors are corrected after verification, with a visible note when the change could affect a reader’s decision. Update dates reflect meaningful review, not cosmetic edits. Affiliate eligibility, sponsorship, or vendor access does not determine inclusion, ranking, or verdict.'],
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
    description: `Contact ${siteConfig.name} for cleaning pilot questions, corrections, accessibility, and disclosures.`,
    intro: `Email ${siteConfig.name} at ${siteConfig.contactEmail}. This is our monitored public contact address. Do not include passwords, payment details, customer records, or other sensitive information.`,
    updatedAt: '2026-09-23',
    sections: [
      {
        heading: 'What the contact channel is for',
        paragraphs: ['Ask about a cleaning pilot setup, report a factual error, broken link, accessibility problem, unclear disclosure, or workflow question. An email starts a conversation, not an order or confirmed service booking. The local pilot-brief builder does not submit an enquiry.'],
        points: ['Do not send passwords, authentication codes, API keys, payment details, customer records, health information, or other sensitive material.', 'Include the page address and a reliable source when reporting a factual issue.', 'Do not use this channel for urgent, legal, medical, financial, safety, or account-support requests.'],
        links: [cleaningOffer.secondaryCta, cleaningOffer.primaryCta],
      },
      {
        heading: 'How to email us',
        paragraphs: [`Email links open your email app; nothing is sent automatically. If an app does not open, copy ${siteConfig.contactEmail} into your usual mail service. Include your inquiry source, existing tools and the handoff you want to discuss—not customer data. You may attach the locally generated planning brief after reviewing it.`, 'Messages are used to respond to enquiries, scope a requested pilot, handle corrections and prevent abuse. The Privacy Policy explains the data boundary. No reply-time or service-availability guarantee is made.'],
        links: [{ label: siteConfig.contactEmail, href: siteConfig.contactHref }],
      },
    ],
    related: [
      { label: 'Editorial policy', href: '/editorial-policy', description: 'See how corrections and updates are handled.' },
      { label: 'Privacy policy', href: '/privacy-policy', description: 'Read the current data-handling boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Review the commercial policy.' },
    ],
  },
  'privacy-policy': {
    eyebrow: 'PRIVACY POLICY',
    title: 'Privacy Policy',
    description: `How ${siteConfig.name} handles technical request data and messages under its current, privacy-minimising site configuration.`,
    intro: `Last updated 24 September 2026. This notice explains the ${siteConfig.name} information site, browser-only demo, local planning tool and email enquiries. For privacy questions, contact ${siteConfig.contactEmail}.`,
    updatedAt: '2026-09-24',
    sections: [
      {
        heading: 'What the site does not collect directly',
        paragraphs: ['The site displays information, a fictional cleaning-inquiry simulation, and a local pilot-planning tool. It has no submitted contact form, user account, newsletter signup, analytics tag, advertising code, affiliate tracking, checkout, payment flow, or customer database. It does not ask visitors to enter personal information on the site.'],
      },
      {
        heading: 'Local demo and planning choices',
        paragraphs: ['The demo uses predefined fictional records. The planning tool uses service and workflow choices rather than personal or customer details. Results stay in page memory and are cleared on refresh; the tools do not transmit those choices or save them in browser storage. A brief download creates a text file on the visitor’s device. It does not submit an application or contact us. Ordinary page and asset requests still reach the site’s hosting provider.'],
      },
      {
        heading: 'Technical request and security data',
        paragraphs: ['The public website is configured for Cloudflare Workers hosting and network delivery. Cloudflare processes technical request information needed to deliver and protect it, which may include IP address, browser or device information, requested URL, timestamp, response status and security signals. This is distinct from the demo choices, which stay in your browser. Optional persisted Worker application logs are disabled in the release configuration. Provider infrastructure records and necessary security controls remain governed by Cloudflare’s terms and settings; this notice does not promise anonymous access or zero infrastructure logging.'],
      },
      {
        heading: 'Contact messages',
        paragraphs: [`Email sent to ${siteConfig.contactEmail} passes through Cloudflare Email Routing to the operator’s managed inbox. Cloudflare, the inbox provider and the authorised site operator process the sender address, message, headers and any attachments you choose to send. The forwarding destination is not a public contact address. Messages are used to respond to your enquiry, discuss a requested pilot, record material corrections and prevent abuse.`, 'Do not send passwords, payment details, customer records, home access codes, health information or other sensitive material. The site does not connect to your inbox, CRM or customer accounts. Any later connected pilot requires a separate scope, permissions and data-handling agreement.'],
        links: [{ label: 'Cloudflare privacy policy', href: 'https://www.cloudflare.com/privacypolicy/' }],
      },
      {
        heading: 'Cookies, analytics, advertising, and affiliates',
        paragraphs: ['Google Analytics, AdSense, affiliate tracking, behavioural advertising, newsletter tools, and consent-management code are not active. The hosting or security layer may use strictly necessary storage or request controls to deliver and protect the site. Any optional measurement, advertising, affiliate, or consent technology requires a policy update and the appropriate notice or choice before activation.'],
      },
      {
        heading: 'Retention, access, and international processing',
        paragraphs: ['Enquiries are handled by the authorised operator and the providers needed to receive and protect them, not published as testimonials or customer examples. Retention depends on the purpose of the enquiry, any resulting agreement, legal obligations and provider backup or security records. You can request deletion or ask about retention at the public contact address; information required for an unresolved issue or legal obligation may need to be retained. Providers may process information in more than one country under their own terms.'],
      },
      {
        heading: 'Your choices and privacy questions',
        paragraphs: [`You can ask about information you sent, request correction or deletion, or raise a privacy concern at ${siteConfig.contactEmail}. Requests may require identity verification. Rights, exceptions and response requirements depend on applicable law; a person may also contact the relevant privacy regulator.`],
        links: [
          { label: 'Email a privacy enquiry', href: siteConfig.contactHref },
          { label: 'US Federal Trade Commission privacy resources', href: 'https://www.ftc.gov/business-guidance/privacy-security/consumer-privacy' },
          { label: 'UK Information Commissioner', href: 'https://ico.org.uk/make-a-complaint/data-protection-complaints/' },
          { label: 'Office of the Privacy Commissioner of Canada', href: 'https://www.priv.gc.ca/en/report-a-concern/' },
          { label: 'Office of the Australian Information Commissioner', href: 'https://www.oaic.gov.au/privacy/privacy-complaints' },
        ],
      },
      {
        heading: 'Children and changes to this notice',
        paragraphs: ['The publication is written for small-business owners and is not directed to children. The policy is reviewed when the site adds a service, changes provider, or changes how information is used. Material changes receive a new review date before the changed processing begins.'],
      },
    ],
    related: [
      { label: 'Contact', href: '/contact', description: 'Review the current contact-channel status.' },
      { label: 'Terms', href: '/terms', description: 'Read the educational-use boundary.' },
      { label: 'Affiliate disclosure', href: '/affiliate-disclosure', description: 'Understand future commercial links.' },
    ],
  },
  terms: {
    eyebrow: 'TERMS OF USE',
    title: 'Terms of Use',
    description: `Terms for using ${siteConfig.name}, the fictional demo, planning tools and pilot enquiries.`,
    intro: `Last updated 23 September 2026. Use ${siteConfig.name} lawfully and understand the planning, evidence and external-service limits below. These terms do not override rights or liabilities that applicable law does not allow to be excluded. Questions: ${siteConfig.contactEmail}.`,
    updatedAt: '2026-09-23',
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
        heading: 'Permitted use of the content',
        paragraphs: ['You may read, link to, and quote short excerpts with clear attribution. You may not republish substantially all of an article, remove attribution, misrepresent an endorsement, interfere with the site, attempt unauthorised access, or use the material unlawfully. Third-party names, marks, and linked material remain subject to their owners’ rights.'],
      },
      {
        heading: 'Demo, planning and pilot enquiries',
        paragraphs: ['The current site has no user accounts, public comments, online checkout, subscription purchase or submitted customer-data form. The free demo uses fictional records and fixed templates. The “90-second” description is an approximate walkthrough length, not a measured setup-time, software-performance or business-result claim. The simulation and downloaded brief do not create an external draft, task, quote, booking or service agreement.', `The Cleaning pilot setup range is ${cleaningOffer.price}. It covers the limited scope on the pilot page, not software subscriptions or ongoing services. Compatibility, final fee, scope, timing, payment, cancellation, permissions and acceptance terms require a separate written agreement before work or payment. Saving a brief or sending an email does not place an order.`],
        links: [{ label: 'Pilot scope, responsibilities and exclusions', href: '/cleaning/pilot' }],
      },
      {
        heading: 'Availability and responsibility limits',
        paragraphs: ['The site may be corrected, changed, suspended, or withdrawn. To the extent permitted by applicable law, the material is provided without a promise that it is complete, continuously available, error-free, or suitable for a particular decision. Nothing in these terms excludes a responsibility that applicable law says cannot be excluded.'],
      },
      {
        heading: 'Changes and questions',
        paragraphs: [`Material changes to these terms receive a new review date. Questions about these terms can be sent to ${siteConfig.contactEmail}. No lawyer review, certification or professional advice is implied by this notice.`],
        links: [{ label: 'Email a terms enquiry', href: siteConfig.contactHref }],
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
    updatedAt: '2026-09-23',
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
      {
        heading: 'Our own pilot service',
        paragraphs: [`The Cleaning pilot is ${siteConfig.name}’s own setup offer, not an affiliate recommendation or a third-party endorsement. Questions about fees, disclosures or commercial relationships can be sent to ${siteConfig.contactEmail}. No customer results or vendor partnerships are implied.`],
        links: [{ label: 'Email a disclosure question', href: siteConfig.contactHref }, { label: 'Review the pilot scope', href: '/cleaning/pilot' }],
      },
    ],
    related: [
      { label: 'Editorial policy', href: '/editorial-policy', description: 'Read the evidence and commercial-independence rules.' },
      { label: 'AI tools', href: '/ai-tools', description: 'See the evidence-led tool approach.' },
      { label: 'Comparisons', href: '/comparisons', description: 'Review same-scenario testing principles.' },
    ],
  },
};
