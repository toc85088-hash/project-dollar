import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, Footer, Header } from '../../components/site-shell';
import { siteConfig } from '../../site-config';

const path = '/blog/ai-automation-for-small-business';
const title = 'AI Automation for Small Business: Start Small, Stay in Control';
const description = 'A plain-English guide to choosing, mapping, testing, and reviewing one useful AI automation in a small business.';
const published = '2026-08-24';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    title,
    description,
    url: path,
    siteName: siteConfig.name,
    publishedTime: `${published}T00:00:00+08:00`,
    modifiedTime: `${published}T00:00:00+08:00`,
    images: [],
  },
  twitter: { card: 'summary', title, description, images: [] },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'AI Automation for Small Business' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished: published,
  dateModified: published,
  author: { '@type': 'Organization', name: `${siteConfig.name} editorial prototype` },
  publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}${path}`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
    { '@type': 'ListItem', position: 3, name: 'AI Automation for Small Business', item: `${siteConfig.url}${path}` },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <article className="shell article-page">
          <Breadcrumbs items={breadcrumbItems} />
          <header className="article-header">
            <p className="eyebrow">FOUNDATION GUIDE</p>
            <h1>{title}</h1>
            <p className="article-dek">You do not need an AI strategy. You need one repetitive task, a visible process, a safe test, and a person who remains responsible.</p>
            <div className="byline">
              <span>By {siteConfig.name} editorial prototype</span>
              <span>Prototype published 24 August 2026</span>
              <strong>Human review required before public launch</strong>
            </div>
          </header>

          <div className="article-layout">
            <div className="article-body">
              <section className="quick-answer" aria-labelledby="quick-answer-heading">
                <p className="eyebrow">THE SHORT ANSWER</p>
                <h2 id="quick-answer-heading">AI automation helps with one step inside a controlled workflow.</h2>
                <p>For a small business, that step might classify an enquiry, extract details, draft a reply, or summarise a meeting. The surrounding process still needs rules, exceptions, a human review point, and a manual fallback.</p>
              </section>

              <section>
                <h2>Start with the work, not the software</h2>
                <p>Tools make it easy to build an impressive demo and surprisingly hard to build a dependable process. Begin by writing down what happens today: what starts the task, what information is required, who decides, what the finished result looks like, and what happens when something is missing.</p>
                <p>If the manual process changes every time or depends on judgment nobody can explain, automation will hide the confusion rather than remove it.</p>
              </section>

              <section>
                <h2>Choose a task with a forgiving failure mode</h2>
                <p>A practical first candidate is frequent, repetitive, easy to describe, and cheap to correct before it reaches a customer. Drafting for review is usually a safer pattern than taking an external action automatically.</p>
                <div className="decision-table" role="region" aria-label="First automation candidate comparison" tabIndex={0}>
                  <table>
                    <thead><tr><th>Better first candidate</th><th>Leave manual for now</th></tr></thead>
                    <tbody>
                      <tr><td>Sort routine enquiries into a review queue</td><td>Decide whether a customer deserves a refund</td></tr>
                      <tr><td>Draft notes from an approved meeting transcript</td><td>Create the authoritative record without review</td></tr>
                      <tr><td>Prepare a follow-up draft from supplied facts</td><td>Send a promise or price automatically</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2>A five-step starting method</h2>
                <ol className="steps">
                  <li><strong>Inventory.</strong> Notice repetitive tasks for one working week. Record frequency and frustration without estimating imaginary savings.</li>
                  <li><strong>Map.</strong> Write the trigger, inputs, decisions, output, exceptions, owner, and manual fallback on one page.</li>
                  <li><strong>Bound.</strong> Choose the exact AI-assisted step and list what it is not allowed to decide or send.</li>
                  <li><strong>Test.</strong> Use fictional or non-sensitive examples. Include missing, duplicated, ambiguous, and unsafe inputs—not only the happy path.</li>
                  <li><strong>Review.</strong> Compare the full process before and after, including checking, corrections, maintenance, and failures.</li>
                </ol>
              </section>

              <section>
                <h2>Example: an enquiry becomes a draft, not an automatic promise</h2>
                <p>Imagine a contact form for a local service business. A new submission can be checked for required fields, assigned to a category, and used to prepare a reply from approved notes. The draft then waits for the owner.</p>
                <p>The owner verifies the recipient, facts, tone, availability, price language, and next step. Angry messages, sensitive details, unusual requests, and missing information bypass the draft and move straight to manual handling.</p>
                <p>This pattern reduces blank-page work while keeping the decision and external communication accountable.</p>
              </section>

              <section>
                <h2>Do not automate a broken or high-stakes decision</h2>
                <p>Leave a task manual when an error could create a payment, legal commitment, safety issue, employment decision, or exposure of sensitive information. Also pause when nobody owns the process, the source information is unreliable, or there is no way to detect a bad result.</p>
                <p>Privacy, recording, consumer, employment, and industry rules vary. Check the actual workflow with qualified advisers before using real people’s data; this guide is not legal advice.</p>
              </section>

              <section>
                <h2>Measure the whole workflow</h2>
                <p>Record a manual baseline before changing anything. After the test, compare preparation time, review time, corrections, missed exceptions, tool cost, and maintenance. A faster automated step is not useful if the owner spends more time checking unreliable output.</p>
              </section>

              <section className="article-cta">
                <p className="eyebrow">YOUR NEXT STEP</p>
                <h2>Map one task before connecting one tool.</h2>
                <p>List the trigger, input, output, exception, reviewer, and fallback. If you cannot fill those six fields, improve the process first.</p>
                <div className="button-row">
                  <Link className="button button-primary" href="/templates">See the template roadmap</Link>
                  <Link className="button button-secondary" href="/workflows">Explore practical workflows</Link>
                </div>
              </section>
            </div>

            <aside className="article-aside" aria-labelledby="article-checklist-heading">
              <p className="eyebrow">FIRST-WORKFLOW CHECK</p>
              <h2 id="article-checklist-heading">Before you automate</h2>
              <ul>
                <li>The task happens often.</li>
                <li>The current steps are written down.</li>
                <li>A bad draft can be caught before harm.</li>
                <li>Test data contains no sensitive records.</li>
                <li>One person owns review and maintenance.</li>
                <li>A manual fallback still works.</li>
              </ul>
              <Link className="text-link" href="/ai-automation">Back to the topic hub</Link>
            </aside>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  );
}
