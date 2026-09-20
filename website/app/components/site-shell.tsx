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
          <Link href="/cleaning">For cleaning businesses</Link>
          <Link href="/cleaning/demo">Demo</Link>
          <Link href="/about">About</Link>
          <Link className="nav-cta" href="/cleaning/pilot">Explore the pilot</Link>
        </nav>
        <details className="mobile-navigation">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/cleaning">For cleaning businesses</Link>
            <Link href="/cleaning/demo">Demo</Link>
            <Link href="/cleaning/pilot">Explore the pilot</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
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
          <p className="muted">Simple AI automation for small business. Our first focus: inquiry follow-up, quote preparation, and booking handoffs for US residential cleaning businesses.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
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
