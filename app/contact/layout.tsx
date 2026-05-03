import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Kodai Global Exports – Get in Touch for Essential Oil Exports',
  description: 'Contact Kodai Global Exports for premium essential oil inquiries, export pricing, bulk orders, and partnership opportunities. Located in Periyakulam, Tamil Nadu, India. Email: kge@kodaiglobalexports.com, Phone: +91 9677447233.',
  keywords: [
    'contact Kodai Global Exports',
    'essential oil inquiry',
    'bulk oil order India',
    'lemongrass oil pricing',
    'eucalyptus oil export inquiry',
    'essential oil supplier contact',
  ],
  openGraph: {
    title: 'Contact Us | Kodai Global Exports',
    description: 'Get in touch for premium essential oil inquiries, export pricing, and partnership opportunities.',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
