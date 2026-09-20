import { Breadcrumbs, Footer, Header } from '../../components/site-shell';
import { SiteLink } from '../../components/site-link';
import { siteConfig } from '../../site-config';
import { cleaningMetadata } from '../metadata';
import { PilotBriefBuilder } from './pilot-client';

export const metadata = cleaningMetadata('Plan a Residential Cleaning Automation Pilot', 'Scope one cleaning inquiry workflow with owner-reviewed replies, quote preparation, and a manual fallback. Create a local planning brief; no signup or purchase.');

export default function CleaningPilotPage() {
  return <><Header /><main id="main-content" className="shell inner-page"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cleaning', href: '/cleaning' }, { label: 'Pilot plan' }]} />
    <header className="page-hero"><p className="eyebrow">RESIDENTIAL CLEANING · PILOT PLANNING</p><h1>Start with one handoff.<br /><span>Keep the scope small.</span></h1><p className="page-intro">An inquiry, a reviewed reply, a next action. Explore a limited pilot before connecting accounts or changing how your business handles customers.</p></header>
    <div className="pilot-scope"><section><h2>Proposed pilot scope</h2><ul><li>Map one existing inquiry source and one cleaning service.</li><li>Define missing-detail and service-area rules.</li><li>Prepare an acknowledgement draft, owner task, and status record.</li><li>Test with fictional inquiries and document manual recovery.</li><li>Hand over the agreed workflow and a review checklist.</li></ul></section><section><h2>What stays with you</h2><ul><li>Every outgoing reply, price, discount, and appointment decision.</li><li>Account access and approval of every permission.</li><li>Your service area, pricing rules, and crew availability.</li><li>The decision to accept the workflow after testing.</li></ul><p>No autonomous quoting, booking, payment collection, cold SMS, or performance guarantee.</p></section></div>
    <section className="cleaning-next"><h2>Before a pilot can start</h2><p>Compatibility, required permissions, software limits, and the fallback must be reviewed against your actual setup. Scope, fees, and timing need a separate written agreement; nothing on this page starts a paid service or trial.</p>{siteConfig.contactEmail ? <p>For a scope discussion, <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>email {siteConfig.name}</a>. Saving a brief does not send an email.</p> : <p>Pilot inquiries are not open yet. You can prepare and save your brief below; there is no active application or booking on this page.</p>}</section>
    <section id="brief" className="cleaning-next"><p className="eyebrow">LOCAL PLANNING TOOL</p><h2>Build your pilot brief</h2><PilotBriefBuilder brandName={siteConfig.name} /></section>
    <p className="cleaning-next"><SiteLink className="text-link" href="/cleaning/demo">Try the fictional inquiry demo first →</SiteLink></p>
  </main><Footer /></>;
}
