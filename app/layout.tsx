import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { company, products, seoFaqs } from '@/data/site';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = 'https://shijastk.github.io/phildhabitrading/';
const logoUrl = 'https://shijastk.github.io/phildhabitrading/phildhabi-logo.webp';
const iconUrl = 'https://shijastk.github.io/phildhabitrading/phildhabi-icon.webp';
const socialImage = 'https://shijastk.github.io/phildhabitrading/hero-phildhabi-premium.webp';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Phildhabi General Trading | Cosmetics, Food & FMCG Wholesale UAE',
    template: '%s | Phildhabi General Trading',
  },
  description:
    'Phildhabi General Trading supplies wholesale cosmetics, skincare, personal care, food and FMCG products for retailers, resellers and business buyers across Dubai and Abu Dhabi, UAE.',
  applicationName: 'Phildhabi General Trading',
  authors: [{ name: 'Phildhabi General Trading' }],
  creator: 'Phildhabi General Trading',
  publisher: 'Phildhabi General Trading',
  category: 'Wholesale General Trading',
  keywords: [
    'Phildhabi General Trading',
    'general trading company UAE',
    'cosmetics wholesale UAE',
    'cosmetics supplier Dubai',
    'beauty products wholesale Abu Dhabi',
    'skincare wholesale UAE',
    'personal care supplier Dubai',
    'food wholesale UAE',
    'food trading Abu Dhabi',
    'FMCG wholesale Dubai',
    'FMCG supplier UAE',
    'wholesale distributor Dubai',
    'general trading Abu Dhabi',
    'food and cosmetics trading UAE',
    'B2B wholesale UAE',
    'Dubai Abu Dhabi wholesale supplier',
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-AE': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteUrl,
    siteName: 'Phildhabi General Trading',
    title: 'Phildhabi General Trading | Wholesale Cosmetics, Food & FMCG UAE',
    description:
      'Serving UAE trade since 2018 with wholesale cosmetics, personal care, food and FMCG sourcing across Dubai and Abu Dhabi.',
    images: [
      {
        url: socialImage,
        width: 1672,
        height: 941,
        alt: 'Phildhabi General Trading wholesale cosmetics, food and FMCG hero visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phildhabi General Trading | Wholesale UAE',
    description:
      'Wholesale cosmetics, food and FMCG sourcing for business buyers across Dubai and Abu Dhabi.',
    images: [socialImage],
  },
  icons: {
    icon: iconUrl,
    shortcut: iconUrl,
    apple: iconUrl,
  },
  manifest: 'https://shijastk.github.io/phildhabitrading/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'AE',
    'geo.placename': 'Dubai and Abu Dhabi, United Arab Emirates',
    'theme-color': '#0d477d',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d477d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: company.name,
    alternateName: ['Phildhabi General Trading', 'فيلدابي للتجارة العامة'],
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 720,
      height: 523,
    },
    telephone: company.phoneHref,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phoneHref,
      contactType: 'sales',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.registeredCity,
      addressCountry: 'AE',
    },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    slogan: company.experienceLabel,
    knowsAbout: [
      'Cosmetics wholesale',
      'Skincare and personal care',
      'Food wholesale',
      'FMCG distribution',
      'General trading',
      'B2B sourcing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wholesale product categories',
      itemListElement: products.map((product) => ({
        '@type': 'OfferCatalog',
        name: product.title,
        description: product.copy,
      })),
    },
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: company.name,
        publisher: { '@id': `${siteUrl}#organization` },
        inLanguage: 'en-AE',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}#webpage`,
        url: siteUrl,
        name: 'Phildhabi General Trading | Cosmetics, Food & FMCG Wholesale UAE',
        description:
          'Wholesale cosmetics, personal care, food and FMCG sourcing for business buyers in Dubai and Abu Dhabi.',
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': `${siteUrl}#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: socialImage,
        },
        inLanguage: 'en-AE',
      },
      {
        '@type': 'FAQPage',
        mainEntity: seoFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en-AE" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://f.nooncdn.com" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
