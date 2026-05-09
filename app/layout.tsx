import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kodai Global Exports | Premium Essential Oils & Natural Extracts from India',
    template: '%s | Kodai Global Exports',
  },
  description:
    'Kodai Global Exports is a leading essential oil export company from India offering premium steam-distilled Lemongrass Oil and Eucalyptus Oil. FSSAI certified, APEDA registered, serving Germany, France, UAE, Saudi Arabia and more.',
  keywords: [
    'essential oils exporter India',
    'lemongrass oil supplier',
    'eucalyptus oil exporter',
    'natural extracts India',
    'steam distilled oils',
    'bulk essential oils',
    'Kodai Global Exports',
    'essential oil manufacturer India',
    'FSSAI certified essential oils',
    'APEDA registered exporter',
    'premium lemongrass oil',
    'therapeutic grade eucalyptus oil',
    'essential oil wholesale India',
    'organic essential oils export',
  ],
  authors: [{ name: 'Kodai Global Exports' }],
  creator: 'Kodai Global Exports',
  publisher: 'Kodai Global Exports',
  metadataBase: new URL('https://kodaiglobalexports.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kodai Global Exports | Premium Essential Oils from India',
    description:
      'Leading exporter of premium steam-distilled Lemongrass Oil & Eucalyptus Oil from India. FSSAI certified, APEDA registered. Serving 7+ global markets with consistent quality.',
    url: 'https://kodaiglobalexports.com',
    siteName: 'Kodai Global Exports',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Kodai Global Exports Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kodai Global Exports | Premium Essential Oils from India',
    description:
      'Leading exporter of premium Lemongrass Oil & Eucalyptus Oil from India. FSSAI certified, APEDA registered.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  verification: {},
  category: 'Essential Oils & Natural Extracts',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kodai Global Exports',
  url: 'https://kodaiglobalexports.com',
  logo: 'https://kodaiglobalexports.com/images/logo.png',
  description: 'Premium Essential Oils & Natural Extracts Export Company from India',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Periyakulam',
    addressLocality: 'Theni District',
    addressRegion: 'Tamil Nadu',
    postalCode: '625601',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9677447233',
    contactType: 'sales',
    email: 'kge@kodaiglobalexports.com',
    areaServed: ['IN', 'DE', 'FR', 'KW', 'SA', 'AE', 'BD', 'ZA'],
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        inter.variable,
        playfair.variable,
        'font-sans',
        geist.variable,
      )}
    >
      <head>
        <Script
          id="handle-lang-attribute"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const cookieValue = document.cookie
                  .split('; ')
                  .find((row) => row.startsWith('googtrans='))
                  ?.split('=')[1];
                if (cookieValue) {
                  const lang = cookieValue.split('/').pop();
                  if (lang) {
                    document.documentElement.lang = lang;
                  }
                }
              })();
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="disable-copy"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.addEventListener('copy', event => event.preventDefault());
              document.addEventListener('cut', event => event.preventDefault());
            `,
          }}
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          id="google-translate-script"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans text-kodai-dark"
        suppressHydrationWarning
      >
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <style dangerouslySetInnerHTML={{
          __html: `
            iframe.goog-te-banner-frame { display: none !important; }
            .goog-te-banner-frame.skiptranslate { display: none !important; }
            body { top: 0px !important; margin-top: 0px !important; }
            html { top: 0px !important; }
            .goog-te-gadget-icon { display: none !important; }
            .goog-te-gadget-simple { background-color: transparent !important; border: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-tooltip:hover { display: none !important; }
            .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
            #goog-gt-tt { display: none !important; visibility: hidden !important; }
            .VIpgJd-Zvi9ab-OR9Zq-aZ2w3d { display: none !important; }
            .skiptranslate { display: none !important; }
            .goog-te-spinner-pos { display: none !important; }
          `
        }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
