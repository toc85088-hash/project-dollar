import { Breadcrumbs, Footer, Header } from '../components/site-shell';
import { SiteLink as Link } from '../components/site-link';
import { cleaningServiceMetadata } from './metadata';
import { cleaningOffer } from './offer';
import { siteConfig } from '../site-config';

export const metadata = cleaningServiceMetadata;

export default function CleaningPage() {
  return <><Header /><main id="main-content" className="shell inner-page">
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Residential Cleaning' }]} />
    <header className="page-hero cleaning-page-hero">
      <p className="eyebrow">US RESIDENTIAL CLEANING · FIRST PILOT</p>
      <h1>Keep the inquiry moving.<br /><span>Keep the decisions yours.</span></h1>
      <p className="page-intro">A focused automation pilot for cleaning owners who want a clear follow-up queue, complete quote details, and a reliable handoff to booking.</p>
      <div className="button-row"><Link className="button button-primary" href={cleaningOffer.primaryCta.href}>{cleaningOffer.primaryCta.label}</Link><Link className="button button-secondary" href={cleaningOffer.secondaryCta.href}>{cleaningOffer.secondaryCta.label}</Link></div>
      <p className="trust-note">Pilot setup: {cleaningOffer.price}. <Link className="text-link" href="/cleaning/pilot">Included scope and exclusions</Link>. Questions: <a className="text-link" href={siteConfig.contactHref}>{siteConfig.contactEmail}</a>.</p>
    </header>
    <div className="content-layout"><div className="prose">
      <section id="follow-up"><h2>Follow up with the right context.</h2><p>An inquiry starts with a few checks: can the team reply, is the home in the service area, and is the requested cleaning offered? The proposed workflow prepares an acknowledgment draft and assigns an internal next step. Missing information goes to a review queue.</p><p>The owner approves the wording and sends it through the agreed channel. No automatic discount, availability claim, or service commitment is included.</p></section>
      <section id="quote"><h2>Prepare the quote. Let your team price it.</h2><p>Collect service type, frequency, bedroom and bathroom counts, approximate home size, and approved add-ons. Note anything that needs an inspection or a custom conversation, such as unusual property conditions.</p><p>The handoff is a quote-preparation checklist. Prices come from the cleaning business’s approved rules and human review. This MVP does not calculate or promise a price.</p></section>
      <section id="booking"><h2>A requested date is a request.</h2><p>Record preferred timing and the person responsible for checking the schedule. Your team confirms service duration, crew capacity, travel, scope, and any required customer agreement before a booking becomes confirmed.</p><p>A draft reply never holds a slot or creates a confirmed calendar event. If availability is unclear, the next step stays with the owner.</p></section>
      <section><h2>Fit the workflow to your current tools.</h2><p>The pilot starts by mapping one existing form or inbox and one tracking destination. Existing native automations are reviewed first. Make or another connector is considered only when it fits the agreed account, permissions, plan, and failure handling.</p><p>AI can be considered for bounded drafting from an approved service FAQ. Required-field checks, service-area rules, pricing, and booking authority remain explicit. The interactive demo uses fixed templates in your browser; it does not call an AI model or prove a live integration.</p></section>
      <section><h2>Who the first pilot is for</h2><ul><li>A US residential cleaning business with an existing inquiry source.</li><li>An owner or office lead available to approve replies and review exceptions.</li><li>Defined service areas and a written description of offered cleans.</li><li>A willingness to test with fictional records before any live workflow.</li></ul><p>Emergency dispatch, hazardous cleanup, payment collection, cold SMS campaigns, and fully autonomous sales agents are outside this pilot.</p></section>
      <section><h2>What counts as useful evidence?</h2><p>During an agreed pilot, record eligible inquiries, missing details, drafts corrected, manual-review reasons, duplicate records, and the time the reviewer spends. Compare the actual process with its manual baseline. No booking increase, revenue result, or time saving is promised.</p><p>Each integration must pass normal, missing-field, duplicate, and failure tests. The manual process remains available when automation is paused.</p></section>
    </div><aside className="related-panel"><p className="eyebrow">START WITH ONE WORKFLOW</p><h2>See it before discussing a pilot.</h2><Link href={cleaningOffer.primaryCta.href}><strong>{cleaningOffer.primaryCta.label}</strong><span>Fictional draft, review task, and status previews.</span></Link><Link href="/cleaning/pilot"><strong>Pilot scope and pricing</strong><span>Review the setup range and prepare a local brief.</span></Link><Link href="/editorial-policy"><strong>Read the evidence standard</strong><span>How demonstrations and verified results are distinguished.</span></Link></aside></div>
  </main><Footer /></>;
}
