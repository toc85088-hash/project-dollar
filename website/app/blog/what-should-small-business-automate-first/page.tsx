import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePage } from '../../components/article-page';
import { canPreviewDrafts, getArticle, isPubliclyAvailable } from '../../content/articles';
import { siteConfig } from '../../site-config';

const article = getArticle('what-should-small-business-automate-first')!;

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

export default function ArticleOneDraftRoute() {
  if (!isPubliclyAvailable(article) && !canPreviewDrafts()) notFound();
  return <ArticlePage article={article} />;
}
