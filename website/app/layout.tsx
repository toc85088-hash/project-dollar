import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from './site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.positioning} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  robots: siteConfig.isLaunchReady
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  verification: siteConfig.google.siteVerification
    ? { google: siteConfig.google.siteVerification }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.positioning,
    description: siteConfig.description,
    url: '/',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: `${siteConfig.name}: ${siteConfig.positioning}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.positioning,
    description: siteConfig.description,
    images: ['/og.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        {siteConfig.isLaunchReady && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        )}
      </body>
    </html>
  );
}
