import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shijastk.github.io/phildhabitrading/'),
  title: 'Phildhabi General Trading | Cosmetics, Food & FMCG Wholesale UAE',
  description:
    'Phildhabi General Trading supplies cosmetics, personal care, food, beverages and FMCG products to retailers, resellers and business buyers across Dubai and Abu Dhabi.',
  keywords: [
    'general trading UAE',
    'cosmetics wholesale Dubai',
    'food wholesale UAE',
    'FMCG distributor Dubai',
    'personal care wholesale Abu Dhabi',
    'Phildhabi General Trading',
  ],
  openGraph: {
    title: 'Phildhabi General Trading',
    description: 'Cosmetics, food and FMCG wholesale supply across the UAE.',
    url: 'https://shijastk.github.io/phildhabitrading/',
    siteName: 'Phildhabi General Trading',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phildhabi General Trading',
    url: 'https://shijastk.github.io/phildhabitrading/',
    telephone: '+971547444094',
    areaServed: ['Dubai', 'Abu Dhabi', 'United Arab Emirates'],
    description:
      'Wholesale general trading company supplying cosmetics, personal care, food and FMCG products in the UAE.',
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
