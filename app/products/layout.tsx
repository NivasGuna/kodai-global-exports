import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Essential Oil Products | Kodai Global Exports',
  description: 'Explore our range of export-grade essential oils including premium Lemongrass Oil (75-85% citral) and Eucalyptus Oil (60-80% cineole). Steam-distilled, quality-tested, and export-ready with FSSAI certification.',
  keywords: [
    'lemongrass oil',
    'eucalyptus oil',
    'essential oil products',
    'steam distilled essential oils',
    'bulk essential oils India',
    'export grade lemongrass oil',
    'therapeutic eucalyptus oil',
    'natural essential oils supplier',
  ],
  openGraph: {
    title: 'Premium Essential Oil Products | Kodai Global Exports',
    description: 'Export-grade Lemongrass Oil & Eucalyptus Oil. Steam-distilled, quality-tested, FSSAI certified.',
    type: 'website',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
