import Link from 'next/link';
import { siteConfig } from './site-config';
import { Footer, Header } from './components/site-shell';

const categories = [
  {
    number: '01',
    title: 'Start with AI automation',
    body: 'Understand what to automate, what to keep human, and how to choose a low-risk first workflow.',
    href: '/ai-automation',
  },
  {
    number: '02',
    title: 'Build a practical workflow',
    body: 'Follow plain-English processes for email, customer service, follow-up, meetings, and admin.',
    href: '/workflows',
  },
  {
    number: '03',
    title: 'Choose tools with evidence',
    body: 'Use transparent testing criteria and comparisons—without invented hands-on claims or hype.',
    href: '/ai-tools',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <p className="eyebrow">Built for non-technical business owners</p>
              <h1>Make busywork smaller.<br /><span>Keep your business human.</span></h1>
              <p className="hero-copy">{siteConfig.promise}</p>
              <div className="button-row">
                <Link className="button button-primary" href="/ai-automation">Start with the plain-English guide</Link>
                <Link className="button button-secondary" href="/templates">See workflow templates</Link>
              </div>
              <p className="trust-note">Clear steps · Honest limitations · Human review built in</p>
            </div>
            <aside className="workflow-card" aria-label="Example automation workflow">
              <p className="card-label">A SMALL, SAFE FIRST WIN</p>
              <h2>Turn a new enquiry into a ready-to-review reply</h2>
              <ol>
                <li><span>1</span><div><strong>Capture</strong><small>A form submission arrives</small></div></li>
                <li><span>2</span><div><strong>Draft</strong><small>AI prepares a reply from approved notes</small></div></li>
                <li><span>3</span><div><strong>Review</strong><small>You check it before anything is sent</small></div></li>
              </ol>
              <p className="card-foot">The person stays in control.</p>
            </aside>
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-heading">
          <div className="shell principles-grid">
            <div>
              <p className="eyebrow">OUR EDITORIAL STANDARD</p>
              <h2 id="principles-heading">Useful before impressive.</h2>
            </div>
            <p>We explain the work, the trade-offs, and the checks. Any tool claim that needs hands-on testing stays clearly labelled until it is verified.</p>
          </div>
        </section>

        <section className="section shell" aria-labelledby="path-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A PRACTICAL PATH</p>
              <h2 id="path-heading">From one repetitive task to one reliable system.</h2>
            </div>
            <p>Start small, document what should happen, then add automation only where it earns its keep.</p>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <Link key={category.number} href={category.href} className="category-row">
                <span className="category-number">{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.body}</p>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="featured">
          <div className="shell featured-grid">
            <div>
              <p className="eyebrow">FOUNDATION GUIDE</p>
              <h2>AI automation for small business, explained without the theatre.</h2>
              <p>Learn how to find a sensible use case, map the manual process, protect customer information, and define a human approval point.</p>
              <Link className="text-link" href="/blog/ai-automation-for-small-business">Read the guide <span aria-hidden="true">→</span></Link>
            </div>
            <div className="checklist" aria-label="What the guide covers">
              <p>Before you automate</p>
              <ul>
                <li>Is the task repetitive and rule-based?</li>
                <li>What could go wrong if the output is wrong?</li>
                <li>Who reviews the result?</li>
                <li>How will you measure saved time?</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
