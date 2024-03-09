import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import RecoilContextProvider from '@/components/providers/RecoilContextProvider';
import NextThemeProvider from '@/components/providers/ThemeProvider';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@jaison_john',
  },
  // authors: [
  //   {
  //     name: 'Jaison John',
  //     url: 'https://google.com',
  //   },
  // ],
};

const PoppinsFont = Poppins({
  subsets: ['devanagari', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${PoppinsFont.variable}`}
      // suppressHydrationWarning
    >
      <body>
        <NextThemeProvider>
          <ReactQueryProvider>
            <RecoilContextProvider>{children}</RecoilContextProvider>
          </ReactQueryProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
