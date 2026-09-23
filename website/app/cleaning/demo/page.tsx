import { Breadcrumbs, Footer, Header } from '../../components/site-shell';
import { SiteLink as Link } from '../../components/site-link';
import { cleaningMetadata } from '../metadata';
import { CleaningDemo } from './demo-client';
import { cleaningOffer } from '../offer';

export const metadata = cleaningMetadata('Cleaning Inquiry Demo', 'Try fictional cleaning inquiries and inspect reply drafts, manual review, quote preparation, and booking handoffs. Nothing is sent.');

export default function CleaningDemoPage() {
  return <><Header /><main id="main-content" className="shell inner-page">
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cleaning', href: '/cleaning' }, { label: 'Demo' }]} />
    <header className="demo-heading"><p className="eyebrow">FREE · SELF-GUIDED DEMO</p><h1>Run a cleaning inquiry.</h1><p>A short, roughly 90-second walkthrough: run a complete inquiry, inspect the draft, then try a missing-email case. Explore at your own pace; no signup or payment.</p><p>Choose a fictional case. This browser-only simulation uses fixed rules and reply templates. It sends nothing, calls no AI service, and stores no customer information. Gmail, Make, CRM, calendars, booking systems and customer accounts are not connected.</p></header>
    <CleaningDemo />
    <section className="cleaning-next"><h2>How the manual fallback would work</h2><p>In a separately approved connected pilot, pause the workflow, open the original inquiry, and assign an owner. Confirm missing contact or service details manually. Draft the reply, review the quote, and check the schedule in the existing tools. Record the resolution before resuming automation.</p><p>The demo shows intended behavior. A pilot must separately prove the same cases in the chosen tools.</p><Link className="button button-secondary" href={cleaningOffer.secondaryCta.href}>{cleaningOffer.secondaryCta.label}</Link><p className="trust-note"><Link className="text-link" href="/cleaning/pilot">Read the pilot scope and pricing</Link> before discussing a setup.</p></section>
  </main><Footer /></>;
}
