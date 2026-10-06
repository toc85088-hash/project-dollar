import { siteConfig } from './site-config';
import { Footer, Header } from './components/site-shell';
import { SiteLink as Link } from './components/site-link';
import type { Metadata } from 'next';
import { cleaningMvp } from './industries';
import { cleaningOffer } from './cleaning/offer';

export const metadata: Metadata = {
  title: { absolute: `${cleaningMvp.title} | ${siteConfig.name}` },
  description: cleaningMvp.description,
  openGraph: {
    title: cleaningMvp.title, description: cleaningMvp.description, url: '/',
    type: 'website', locale: 'en_US', siteName: siteConfig.name,
    images: [{ url: '/og.png', width: 1731, height: 909, alt: `${siteConfig.name}: ${siteConfig.positioning}` }],
  },
  twitter: { card: 'summary_large_image', title: cleaningMvp.title, description: cleaningMvp.description, images: ['/og.png'] },
};

const categories = [
  {
    number: '01',
    title: 'Follow up on a cleaning inquiry',
    body: 'Check the request, prepare an acknowledgment draft, and put the next action in an owner’s queue.',
    href: '/cleaning#follow-up',
  },
  {
    number: '02',
    title: 'Get the details needed for a quote',
    body: 'Gather service type, home size, frequency, and requested extras. Your team sets the price and confirms the scope.',
    href: '/cleaning#quote',
  },
  {
    number: '03',
    title: 'Hand off a booking request',
    body: 'Capture preferred timing and route it for availability review. A requested slot is never treated as confirmed.',
    href: '/cleaning#booking',
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
              <p className="eyebrow">For US residential cleaning businesses</p>
              <h1>A new cleaning lead.<br /><span>A clear next step.</span></h1>
              <p className="hero-copy">Keep inquiries moving from first reply to quote preparation and booking review—with your team in control of prices, promises, and the final send.</p>
              <div className="button-row">
                <Link className="button button-primary" href={cleaningOffer.primaryCta.href}>{cleaningOffer.primaryCta.label}</Link>
                <Link className="button button-secondary" href={cleaningOffer.secondaryCta.href}>{cleaningOffer.secondaryCta.label}</Link>
              </div>
              <p className="trust-note">Free self-guided demo · Fictional data · No signup<br />Pilot setup: {cleaningOffer.price}. <Link className="text-link" href="/cleaning/pilot">View scope and exclusions</Link>.</p>
            </div>
            <aside className="workflow-card" aria-label="Illustrative cleaning inquiry workflow">
              <p className="card-label">THE CLEANING WORKFLOW</p>
              <h2>Inquiry → quote-ready details → booking review</h2>
              <ol>
                <li><span>1</span><div><strong>Check the request</strong><small>Service area, cleaning type, and reply details</small></div></li>
                <li><span>2</span><div><strong>Prepare the handoff</strong><small>A reply draft and a quote checklist for your team</small></div></li>
                <li><span>3</span><div><strong>Approve the next step</strong><small>You confirm pricing, availability, and any message</small></div></li>
              </ol>
              <p className="card-foot">Illustrative flow. The demo uses fictional records and sends nothing.</p>
            </aside>
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-heading">
          <div className="shell principles-grid">
            <div>
              <p className="eyebrow">A FOCUSED FIRST PILOT</p>
              <h2 id="principles-heading">One inbox. One handoff. One owner.</h2>
            </div>
            <p>Start with one residential cleaning inquiry source. Define the reply, the missing-detail questions, and the person who approves the quote and booking. Choose integrations only after that process is clear.</p>
          </div>
        </section>

        <section className="section shell" aria-labelledby="path-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM INQUIRY TO HANDOFF</p>
              <h2 id="path-heading">Three moments to make easier.</h2>
            </div>
            <p>Use rules for required fields and routing. Consider AI for a bounded draft only when your approved service information can support it.</p>
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
              <p className="eyebrow">SEE THE EXCEPTIONS TOO</p>
              <h2>What happens when a lead is missing a reply address?</h2>
              <p>Run a complete inquiry, a missing-email case, or an out-of-area request. See the draft, follow-up task, and status each case should produce.</p>
              <Link className="text-link" href={cleaningOffer.primaryCta.href}>{cleaningOffer.primaryCta.label}</Link>
            </div>
            <div className="checklist" aria-label="Pilot scope">
              <p>Inside the pilot setup</p>
              <ul>
                <li>Map one existing inquiry source.</li>
                <li>Prepare replies from your approved service notes.</li>
                <li>Route missing details to manual review.</li>
                <li>Test before connecting a live workflow.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section shell cleaning-close">
          <p className="eyebrow">{siteConfig.name} · SIMPLE AI AUTOMATION</p>
          <h2>Start with your cleaning inquiry process.</h2>
          <p>Review the pilot scope and prepare a short brief about your current tools. No customer records are needed.</p>
          <Link className="button button-secondary" href={cleaningOffer.secondaryCta.href}>{cleaningOffer.secondaryCta.label}</Link>
          <p className="trust-note">Use the web inquiry form, or write to <a className="text-link" href={siteConfig.contactHref}>{siteConfig.contactEmail}</a>.</p>
          <p className="trust-note">{siteConfig.tagline}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
