import { Breadcrumbs, Footer, Header } from '../../components/site-shell';
import { SiteLink as Link } from '../../components/site-link';
import { cleaningMetadata } from '../metadata';
import { CleaningDemo } from './demo-client';

export const metadata = cleaningMetadata('Cleaning Inquiry Demo', 'Try fictional cleaning inquiries and inspect reply drafts, manual review, quote preparation, and booking handoffs. Nothing is sent.');

export default function CleaningDemoPage() {
  return <><Header /><main id="main-content" className="shell inner-page">
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cleaning', href: '/cleaning' }, { label: 'Demo' }]} />
    <header className="demo-heading"><p className="eyebrow">INTERACTIVE WORKFLOW DEMO</p><h1>Run a cleaning inquiry.</h1><p>Choose a fictional case. This local simulation uses fixed rules and reply templates. It sends nothing, calls no AI service, and stores no customer information.</p></header>
    <CleaningDemo />
    <section className="cleaning-next"><h2>How the manual fallback works</h2><p>Pause the connected workflow, open the original inquiry, and assign an owner. Confirm missing contact or service details manually. Draft the reply, review the quote, and check the schedule in the existing tools. Record the resolution before resuming automation.</p><p>The demo shows intended behavior. A pilot must separately prove the same cases in the chosen tools.</p><Link className="button button-primary" href="/cleaning/pilot">Prepare a pilot brief</Link></section>
  </main><Footer /></>;
}
