import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePage } from './components/article-page';
import { articles, canPreviewDrafts, getArticleByPath, isPubliclyAvailable } from './content/articles';
import { siteConfig } from './site-config';

export function articleParamsForPrefix(prefix: string) {
  return articles
    .filter((article) => article.path.startsWith(`${prefix}/`))
    .map((article) => ({ slug: article.slug }));
}

export function metadataForArticlePath(path: string): Metadata {
  const article = getArticleByPath(path);
  if (!article) return {};

  const published = isPubliclyAvailable(article);
  const title = published ? article.title : `[Editorial review] ${article.title}`;
  const description = published ? article.description : `Unpublished editorial review. ${article.description}`;

  return {
    title,
    description,
    alternates: published ? { canonical: article.path } : { canonical: null },
    robots: published ? undefined : { index: false, follow: false, nocache: true },
    openGraph: {
      type: published ? 'article' : 'website',
      title,
      description,
      url: published ? article.path : undefined,
      siteName: siteConfig.name,
      publishedTime: published ? `${article.publishedAt}T00:00:00Z` : undefined,
      modifiedTime: published ? `${article.updatedAt}T00:00:00Z` : undefined,
      authors: published ? [article.author.name] : undefined,
      section: published ? article.category : undefined,
      images: [],
    },
    twitter: { card: 'summary', title, description, images: [] },
  };
}

export function renderArticlePath(path: string) {
  const article = getArticleByPath(path);
  if (!article || (!isPubliclyAvailable(article) && !canPreviewDrafts())) notFound();
  return <ArticlePage article={article} />;
}
