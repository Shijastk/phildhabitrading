import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const displayFont = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Phildhabi General Trading | Cosmetics, Food & FMCG',
  description: 'Wholesale cosmetics, personal care, food and FMCG supply for businesses across Dubai and Abu Dhabi.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
