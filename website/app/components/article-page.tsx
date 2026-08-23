import Link from 'next/link';
import type { ArticleRecord } from '../content/articles';
import { isPublishable } from '../content/articles';
import { siteConfig } from '../site-config';
import { Breadcrumbs, Footer, Header } from './site-shell';

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}

export function ArticlePage({ article }: { article: ArticleRecord }) {
  const published = isPublishable(article);
  const articlePath = `/blog/${article.slug}`;
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: article.title },
  ];

  const articleSchema = published
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: { '@type': article.author.type, name: article.author.name },
        publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
        mainEntityOfPage: `${siteConfig.url}${articlePath}`,
      }
    : null;

  const breadcrumbSchema = published
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: `${siteConfig.url}${articlePath}` },
        ],
      }
    : null;

  return (
    <>
      <Header />
      <main id="main-content">
        <article className="shell article-page">
          <Breadcrumbs items={breadcrumbItems} />
          {!published && (
            <div className="draft-banner" role="status">
              <strong>Editorial preview — not published.</strong> Claims, evidence, screenshots, author ownership, and human approval are incomplete.
            </div>
          )}
          <header className="article-header">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-dek">{article.dek}</p>
            <div className="byline">
              {published ? (
                <>
                  <span>By {article.author.name}</span>
                  <span>Published {displayDate(article.publishedAt!)}</span>
                </>
              ) : (
                <>
                  <span>Status: {article.status.replace('_', ' ')}</span>
                  <span>Draft last updated {displayDate(article.updatedAt)}</span>
                  <strong>Not eligible for public indexing</strong>
                </>
              )}
            </div>
          </header>

          <div className="article-layout">
            <div className="article-body">
              {article.sections.map((section) => (
                <section key={section.heading} className={section.tone === 'callout' ? 'quick-answer' : undefined}>
                  {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                  {section.steps && (
                    <ol className="steps">
                      {section.steps.map((step) => <li key={step.title}><strong>{step.title}</strong> {step.text}</li>)}
                    </ol>
                  )}
                  {section.table && (
                    <div className="decision-table" role="region" aria-label={section.table.label} tabIndex={0}>
                      <table>
                        <thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join('|')}>{row.map((cell, index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <section className="article-cta">
                <p className="eyebrow">{article.cta.eyebrow}</p>
                <h2>{article.cta.heading}</h2>
                <p>{article.cta.text}</p>
                <div className="button-row">
                  {article.cta.links.map((link) => (
                    <Link key={link.href} className={`button ${link.primary ? 'button-primary' : 'button-secondary'}`} href={link.href}>{link.label}</Link>
                  ))}
                </div>
              </section>
            </div>

            <aside className="article-aside" aria-labelledby="article-checklist-heading">
              <p className="eyebrow">{article.aside.eyebrow}</p>
              <h2 id="article-checklist-heading">{article.aside.heading}</h2>
              <ul>{article.aside.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <Link className="text-link" href={article.categoryHref}>{article.aside.linkLabel}</Link>
            </aside>
          </div>
        </article>
        {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
        {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
      </main>
      <Footer />
    </>
  );
}
