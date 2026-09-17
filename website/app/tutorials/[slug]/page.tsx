import { articleParamsForPrefix, metadataForArticlePath, renderArticlePath } from '../../article-route';

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParamsForPrefix('/tutorials');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metadataForArticlePath(`/tutorials/${slug}`);
}

export default async function TutorialArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderArticlePath(`/tutorials/${slug}`);
}
