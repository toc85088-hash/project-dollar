import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePage } from '../../components/article-page';
import { articles, canPreviewDrafts, getArticle, isPublishable } from '../../content/articles';
import { siteConfig } from '../../site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles
    .filter((article) => article.slug !== 'ai-automation-for-small-business')
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const published = isPublishable(article);
  const title = published ? article.title : `[Draft preview] ${article.title}`;
  const description = published ? article.description : `Unpublished editorial preview. ${article.description}`;
  const path = `/blog/${article.slug}`;

  return {
    title,
    description,
    alternates: published ? { canonical: path } : { canonical: null },
    robots: published ? undefined : { index: false, follow: false, nocache: true },
    openGraph: {
      type: published ? 'article' : 'website',
      title,
      description,
      url: published ? path : undefined,
      siteName: siteConfig.name,
      publishedTime: published ? `${article.publishedAt}T00:00:00Z` : undefined,
      modifiedTime: published ? `${article.updatedAt}T00:00:00Z` : undefined,
      images: [],
    },
    twitter: { card: 'summary', title, description, images: [] },
  };
}

export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || (!isPublishable(article) && !canPreviewDrafts())) notFound();
  return <ArticlePage article={article} />;
}
