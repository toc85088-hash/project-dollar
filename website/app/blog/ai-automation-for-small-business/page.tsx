import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePage } from '../../components/article-page';
import { canPreviewDrafts, getArticle, isPublishable } from '../../content/articles';
import { siteConfig } from '../../site-config';

const article = getArticle('ai-automation-for-small-business')!;

export const metadata: Metadata = {
  title: `[Draft preview] ${article.title}`,
  description: `Unpublished editorial preview. ${article.description}`,
  alternates: { canonical: null },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    type: 'website',
    title: `[Draft preview] ${article.title}`,
    description: `Unpublished editorial preview. ${article.description}`,
    siteName: siteConfig.name,
    images: [],
  },
  twitter: {
    card: 'summary',
    title: `[Draft preview] ${article.title}`,
    description: `Unpublished editorial preview. ${article.description}`,
    images: [],
  },
};

export default function FoundationArticleRoute() {
  if (!isPublishable(article) && !canPreviewDrafts()) notFound();
  return <ArticlePage article={article} />;
}
