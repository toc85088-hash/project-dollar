import type { Metadata } from 'next';
import { siteConfig } from '../site-config';
import { cleaningIndexingPolicy, type CleaningSeoPage } from './resources';

export function cleaningSeoMetadata(page: CleaningSeoPage): Metadata {
  const policy = cleaningIndexingPolicy(page, siteConfig.isLaunchReady);
  return {
    title: page.title, description: page.description,
    alternates: { canonical: policy.canonical },
    robots: { index: policy.indexable, follow: policy.indexable, nocache: !policy.indexable },
    openGraph: { type: 'website', locale: 'en_US', title: page.title, description: page.description, siteName: siteConfig.name,
      url: `${siteConfig.url}${page.path}`, images: [{ url: '/og.png', alt: `${siteConfig.name}: ${siteConfig.positioning}`, width: 1731, height: 909 }] },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: ['/og.png'] },
  };
}

export function cleaningBreadcrumbSchema(page: CleaningSeoPage) {
  if (!cleaningIndexingPolicy(page, siteConfig.isLaunchReady).indexable) return null;
  const items = [{ name: 'Home', path: '/' }, { name: 'Cleaning automation', path: '/cleaning' }, { name: page.title, path: page.path }];
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({
    '@type': 'ListItem', position: index + 1, name: item.name, item: `${siteConfig.url}${item.path}`,
  })) };
}
