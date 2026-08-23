import type { MetadataRoute } from 'next';
import { getPublishedArticles } from './content/articles';
import { pageContent } from './page-content';
import { siteConfig } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isLaunchReady) return [];

  const articleRoutes = getPublishedArticles().map((article) => `blog/${article.slug}`);
  const staticRoutes = ['', ...Object.keys(pageContent), ...articleRoutes];
  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date('2026-08-24T00:00:00+08:00'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('blog/') ? 0.8 : 0.7,
  }));
}
