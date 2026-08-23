import type { MetadataRoute } from 'next';
import { pageContent } from './page-content';
import { siteConfig } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', ...Object.keys(pageContent), 'blog/ai-automation-for-small-business'];
  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date('2026-08-24T00:00:00+08:00'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === 'blog/ai-automation-for-small-business' ? 0.8 : 0.7,
  }));
}
