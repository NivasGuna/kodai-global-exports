import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight, Leaf } from 'lucide-react';
import { PRODUCTS } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Kodai Global Exports product range, including premium export-grade Lemongrass Oil and Eucalyptus Oil.',
};

export default function ProductsPage() {
  return (
    <main className="pb-24">
      <section className="relative isolate min-h-[calc(100vh-var(--kodai-header-height))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lemongrassOils.jpg"
            alt="Kodai Global products"
            fill
            className="object-cover object-center brightness-[0.4]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-kodai-dark/92 via-kodai-dark/76 to-kodai-dark/42" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,122,79,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-var(--kodai-header-height))] max-w-[85rem] flex-col justify-center px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-kodai-green uppercase backdrop-blur-md">
            Our Products
          </span>
          <h1 className="mt-6 max-w-5xl font-playfair text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
            Premium oil products built for <span className="text-kodai-green italic">reliable exports</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            Our current range includes export-grade Lemongrass Oil and Eucalyptus Oil, prepared to support quality-focused buyers across Indian and international markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {['Lemongrass Oil', 'Eucalyptus Oil', 'Global documentation support'].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-white/80 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-kodai-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
              Product Range
            </span>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              Products prepared for consistent quality and export readiness
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-kodai-green transition-colors hover:text-kodai-green-dark"
          >
            Request pricing <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="group overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_60px_rgba(45,122,79,0.08)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.featured && (
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/92 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-kodai-green shadow-sm">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-kodai-green">
                  <Award size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Pure Extract</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-kodai-dark">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-2xl bg-kodai-green px-5 py-3 font-semibold text-white transition-colors hover:bg-kodai-green-dark"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}

          <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-kodai-green/20 bg-kodai-green/5 p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-kodai-green shadow-sm">
              <Leaf size={38} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-kodai-dark">More products coming soon</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
              We are expanding our portfolio with additional essential oils and natural extracts while keeping the same quality-focused export process.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
