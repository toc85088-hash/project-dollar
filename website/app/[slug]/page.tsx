import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, Footer, Header } from '../components/site-shell';
import { pageContent } from '../page-content';
import { siteConfig } from '../site-config';

type RouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pageContent[slug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: 'website',
      title: page.title,
      description: page.description,
      url: `/${slug}`,
      siteName: siteConfig.name,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${siteConfig.name}: ${siteConfig.tagline}` }],
    },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: ['/og.png'] },
  };
}

export default async function StandardPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = pageContent[slug];
  if (!page) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: page.title, item: `${siteConfig.url}/${slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="shell inner-page">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: page.title }]} />
          <header className="page-hero">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </header>
          <div className="content-layout">
            <div className="prose">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.points && (
                    <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  )}
                </section>
              ))}
            </div>
            <aside className="related-panel" aria-labelledby="related-heading">
              <p className="eyebrow">NEXT STEPS</p>
              <h2 id="related-heading">Keep moving with context.</h2>
              {page.related.map((item) => (
                <Link key={item.href} href={item.href}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </aside>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  );
}
