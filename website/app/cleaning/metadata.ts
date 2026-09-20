import type { Metadata } from 'next';
import { siteConfig } from '../site-config';
import { cleaningMvp } from '../industries';

export function cleaningMetadata(title: string, description: string): Metadata {
  // All MVP pages require their own release review; knowing the domain is not approval.
  return {
    title, description,
    alternates: { canonical: null },
    robots: { index: false, follow: false, nocache: true },
    openGraph: { title, description, type: 'website', siteName: siteConfig.name, url: undefined, images: [] },
    twitter: { card: 'summary', title, description, images: [] },
  };
}

export const cleaningServiceMetadata = cleaningMetadata(cleaningMvp.title, cleaningMvp.description);
