import { Footer, Header } from './components/site-shell';
import { SiteLink as Link } from './components/site-link';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="shell not-found">
        <p className="eyebrow">404 — PAGE NOT FOUND</p>
        <h1>This workflow has no page.</h1>
        <p>The address may be incorrect, or the guide may not have been published after review.</p>
        <Link className="button button-primary" href="/">Return home</Link>
      </main>
      <Footer />
    </>
  );
}
