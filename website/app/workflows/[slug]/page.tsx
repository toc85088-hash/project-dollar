import { articleParamsForPrefix, metadataForArticlePath, renderArticlePath } from '../../article-route';

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParamsForPrefix('/workflows');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metadataForArticlePath(`/workflows/${slug}`);
}

export default async function WorkflowArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderArticlePath(`/workflows/${slug}`);
}
