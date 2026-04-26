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
    default: 'Kodai Global Exports',
    template: '%s | Kodai Global Exports',
  },
  description: 'Premium Essential Oils & Natural Extracts Export Company',
  keywords: [
    'essential oils',
    'natural extracts',
    'lemongrass oil',
    'oil export India',
    'natural oils supplier',
    'Kodai exports',
  ],
  authors: [{ name: 'Kodai Global Exports' }],
  creator: 'Kodai Global Exports',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Kodai Global Exports',
    description: 'Premium Essential Oils & Natural Extracts Export Company',
    url: 'https://yourdomain.com',
    siteName: 'Kodai Global Exports',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col font-sans text-kodai-dark" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
