import { articleParamsForPrefix, metadataForArticlePath, renderArticlePath } from '../../article-route';

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParamsForPrefix('/blog')
    .filter(({ slug }) => slug !== 'what-should-small-business-automate-first');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metadataForArticlePath(`/blog/${slug}`);
}

export default async function BlogArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderArticlePath(`/blog/${slug}`);
}
