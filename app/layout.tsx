import type { Metadata } from 'next';
import { Inter, Playfair_Display, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

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
  description: 'Kodai Global Exports is a leading essential oil export company from India offering premium steam-distilled Lemongrass Oil and Eucalyptus Oil. FSSAI certified, APEDA registered, serving Germany, France, UAE, Saudi Arabia and more.',
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
    description: 'Leading exporter of premium steam-distilled Lemongrass Oil & Eucalyptus Oil from India. FSSAI certified, APEDA registered. Serving 7+ global markets with consistent quality.',
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
    description: 'Leading exporter of premium Lemongrass Oil & Eucalyptus Oil from India. FSSAI certified, APEDA registered.',
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
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-kodai-dark" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
