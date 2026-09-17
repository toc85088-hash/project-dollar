import type { MetadataRoute } from 'next';
import { getPublishedArticles } from './content/articles';
import { pageContent } from './page-content';
import { isStandardRouteIndexable } from './route-indexing';
import { siteConfig } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isLaunchReady) return [];

  const standardRoutes: MetadataRoute.Sitemap = Object.entries(pageContent)
    .filter(([slug]) => isStandardRouteIndexable(slug, siteConfig.isLaunchReady))
    .map(([slug, page]) => ({
      url: `${siteConfig.url}/${slug}`,
      lastModified: new Date(`${page.updatedAt ?? '2026-09-17'}T00:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  const articleRoutes: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: `${siteConfig.url}${article.path}`,
    lastModified: new Date(`${article.updatedAt}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date('2026-09-17T00:00:00Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...standardRoutes,
    ...articleRoutes,
  ];
}
