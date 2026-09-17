import type { ArticleRecord } from '../content/articles';
import { getArticle, getUnresolvedEditorialMarkers, isPubliclyAvailable } from '../content/articles';
import { siteConfig } from '../site-config';
import { Breadcrumbs, Footer, Header } from './site-shell';
import { SiteLink as Link } from './site-link';

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}

export function ArticlePage({ article }: { article: ArticleRecord }) {
  const published = isPubliclyAvailable(article);
  const articlePath = article.path;
  const pendingRequirements = [
    article.status !== 'published' ? 'publication status' : null,
    !article.humanApproved ? 'human approval' : null,
    !article.evidenceComplete ? 'evidence' : null,
    article.screenshotsRequired && !article.screenshotsComplete ? 'required screenshots' : null,
    article.author.name === 'Editorial owner not assigned' ? 'editorial ownership' : null,
    !article.publishedAt ? 'publication date' : null,
    getUnresolvedEditorialMarkers(article).length > 0 ? 'editorial markers' : null,
    !siteConfig.isLaunchReady ? 'site launch approval' : null,
  ].filter((requirement): requirement is string => Boolean(requirement));
  const categoryLabel = article.categoryHref
    .split('/')
    .filter(Boolean)
    .map((part) => part.replaceAll('-', ' '))
    .join(' ')
    .replace(/^\w/, (letter) => letter.toUpperCase());
  const relatedArticles = article.relatedArticleSlugs
    .map((slug) => getArticle(slug))
    .filter((related): related is ArticleRecord => Boolean(related && isPubliclyAvailable(related)));
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryLabel, href: article.categoryHref },
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
          { '@type': 'ListItem', position: 2, name: categoryLabel, item: `${siteConfig.url}${article.categoryHref}` },
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
              <strong>Editorial preview — not published.</strong>{' '}
              Pending: {pendingRequirements.join(', ')}.
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
                      {section.steps.map((step, index) => (
                        <li key={step.title}>
                          <span className="step-number" aria-hidden="true">{index + 1}</span>
                          <span><strong>{step.title}</strong> {step.text}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.faqs && (
                    <div className="faq-list">
                      {section.faqs.map((faq) => (
                        <section key={faq.question}>
                          <h3>{faq.question}</h3>
                          <p>{faq.answer}</p>
                        </section>
                      ))}
                    </div>
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

              {article.sources.length > 0 && (
                <section aria-labelledby="article-sources-heading">
                  <h2 id="article-sources-heading">Sources and evidence boundary</h2>
                  <p>{article.evidenceNote}</p>
                  <ul>
                    {article.sources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} rel="noopener noreferrer" target="_blank">{source.label}</a>{' '}
                        <span className="source-date">(checked {displayDate(source.verifiedOn)})</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {relatedArticles.length > 0 && (
                <section aria-labelledby="related-articles-heading">
                  <p className="eyebrow">RELATED GUIDES</p>
                  <h2 id="related-articles-heading">Continue with a connected workflow.</h2>
                  <div className="article-related-grid">
                    {relatedArticles.map((related) => (
                      <Link key={related.path} className="article-related-card" href={related.path}>
                        <strong>{related.title}</strong>
                        <span>{related.description}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

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
