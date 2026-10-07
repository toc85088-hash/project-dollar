import { notFound } from 'next/navigation';
import { Breadcrumbs, Footer, Header } from '../../components/site-shell';
import { SiteLink as Link } from '../../components/site-link';
import { siteConfig } from '../../site-config';
import { cleaningOffer } from '../offer';
import { cleaningResources, getCleaningResource, resourceSources } from '../resources';
import { cleaningBreadcrumbSchema, cleaningSeoMetadata } from '../resource-metadata';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return cleaningResources.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const resource = getCleaningResource((await params).slug);
  if (!resource) notFound();
  return cleaningSeoMetadata(resource);
}
export default async function CleaningResourcePage({ params }: Props) {
  const resource = getCleaningResource((await params).slug);
  if (!resource) notFound();
  const schema = cleaningBreadcrumbSchema(resource);
  const checkedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${resource.updatedAt}T00:00:00Z`));
  const sourceIds = [...new Set(resource.sections.flatMap(section => section.sourceIds ?? []))] as (keyof typeof resourceSources)[];
  return <><Header /><main id="main-content" className="shell article-page">
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cleaning automation', href: '/cleaning' }, { label: resource.label }]} />
    <header className="article-header"><p className="eyebrow">RESIDENTIAL CLEANING · WORKFLOW GUIDE</p><h1>{resource.title}</h1><p className="article-dek">{resource.answer}</p><div className="byline"><Link href="/editorial-policy">{siteConfig.editorialByline}</Link><span>Sources checked <time dateTime={resource.updatedAt}>{checkedDate}</time></span></div><p className="demo-note">A planning method, not a customer case study or hands-on software review. Examples and acceptance checks below are proposed, not results of a connected test.</p></header>
    <div className="article-layout"><div className="article-body">
      {resource.sections.map(section => <section id={section.id} key={section.id}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}{section.example && <blockquote className="quick-answer"><p>{section.example}</p></blockquote>}{section.sourceIds?.map(id => { const source = resourceSources[id as keyof typeof resourceSources]; return <p key={id} className="source-date">Documentation: <a href={source.href}>{source.label}</a> (checked {source.checked}; no account test).</p>; })}</section>)}
      <section id="acceptance-checks"><h2>Acceptance checks before connecting a live workflow</h2><p>Use fictional, non-sensitive records in a separate test setup. Keep sending and booking disabled until the owner has checked the results. This checklist is a test plan, not a claim that any integration has passed.</p><dl>{resource.checks.map(check => <div key={check.input}><dt><strong>{check.input}</strong></dt><dd>{check.expected}</dd></div>)}</dl></section>
      <section id="sources"><h2>Sources and evidence boundary</h2><p>The workflow design and example wording are original editorial guidance. Vendor documentation supports only the specific capability descriptions beside its links. No software price, free-plan suitability, conversion result or customer saving was verified or is promised. Check current settings and permissions in your actual tools before implementation.</p><ul>{sourceIds.map(id => <li key={id}><a href={resourceSources[id].href}>{resourceSources[id].label}</a> — checked {resourceSources[id].checked}</li>)}</ul></section>
      <section><h2>Continue with the next handoff</h2><div className="article-related-grid">{resource.related.map(slug => { const related = getCleaningResource(slug)!; return <Link key={slug} className="article-related-card" href={related.path}><strong>{related.label}</strong><span>{related.intent}</span></Link>; })}</div></section>
      <section className="article-cta"><h2>Map one workflow before connecting accounts</h2><p>Review the <Link href="/cleaning">Cleaning automation service</Link>, try the fictional demo, or ask whether your handoff fits the limited pilot. An inquiry is not a booking or permission to enable automation.</p><div className="button-row"><Link className="button button-primary" href={cleaningOffer.primaryCta.href}>{cleaningOffer.primaryCta.label}</Link><Link className="button button-secondary" href={cleaningOffer.secondaryCta.href}>{cleaningOffer.secondaryCta.label}</Link></div></section>
    </div><aside className="article-aside"><p className="eyebrow">ON THIS PAGE</p><h2>{resource.label}</h2><nav aria-label="Guide contents"><ul>{resource.sections.map(section => <li key={section.id}><Link className="text-link" href={`${resource.path}#${section.id}`}>{section.heading}</Link></li>)}<li><Link className="text-link" href={`${resource.path}#acceptance-checks`}>Acceptance checks</Link></li></ul></nav><Link className="text-link" href="/cleaning">Cleaning service scope</Link></aside></div>
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll('<', '\\u003c') }} />}
  </main><Footer /></>;
}
