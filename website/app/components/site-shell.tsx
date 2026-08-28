import { siteConfig } from '../site-config';
import { SiteLink as Link } from './site-link';

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
          <span className="brand-wordmark">{siteConfig.name}</span>
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <Link href="/workflows">Workflows</Link>
          <Link href="/ai-tools">AI Tools</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/templates">Templates</Link>
          <Link className="nav-cta" href="/blog">Browse guides</Link>
        </nav>
        <details className="mobile-navigation">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/ai-automation">AI Automation</Link>
            <Link href="/workflows">Workflows</Link>
            <Link href="/ai-tools">AI Tools</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/comparisons">Comparisons</Link>
            <Link href="/templates">Templates</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">{siteConfig.status}</p>
          <p className="footer-brand">{siteConfig.name}</p>
          <p className="muted">Independent, practical guidance for owners who would rather run their business than learn to code.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </nav>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
