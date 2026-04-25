import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight, Leaf } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProductCarousel } from '@/components/shared/ProductCarousel';
import { FormattedText } from '@/components/shared/FormattedText';
import { PRODUCTS } from '@/lib/config';
import productsData from './products.json';

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
            src="/images/product-hero-banner.png"
            alt="Kodai Global products"
            fill
            className="object-cover object-[90%_center] brightness-[0.94]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,31,46,0.5)_0%,rgba(26,31,46,0)_40%),linear-gradient(to_right,rgba(26,31,46,0.75)_0%,rgba(26,31,46,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,122,79,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-var(--kodai-header-height))] max-w-[85rem] flex-col justify-center px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="max-w-4xl rounded-3xl bg-kodai-dark/10 p-2 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-kodai-green uppercase backdrop-blur-md">
              {productsData.hero.badge}
            </span>
            <h1 className="mt-6 max-w-2xl font-playfair text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              <FormattedText text={productsData.hero.title} />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white sm:text-lg">
              {productsData.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {productsData.hero.features.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
              {productsData.range.tagline}
            </span>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              {productsData.range.title}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="group flex flex-col h-full overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_60px_rgba(45,122,79,0.08)]"
            >
              <div className="relative aspect-square overflow-hidden">
                {product.images && product.images.length > 1 ? (
                  <ProductCarousel images={product.images} name={product.name} />
                ) : (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-kodai-green">
                  <Award size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Pure Extract</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-kodai-dark">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 line-clamp-4">
                  {product.description}
                </p>
                <div className="mt-auto pt-8">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group/btn flex w-full items-center justify-between rounded-2xl border border-kodai-green/10 bg-kodai-green/5 p-2 pl-6 transition-all duration-300 hover:bg-kodai-green hover:border-kodai-green">
                        <span className="text-sm font-bold uppercase tracking-widest text-kodai-dark transition-colors group-hover/btn:text-white">More Details</span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-kodai-green transition-all duration-500 group-hover/btn:bg-white/15 group-hover/btn:text-white group-hover/btn:rotate-[360deg]">
                          <ArrowRight size={22} className="transition-transform group-hover/btn:translate-x-0.5" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] rounded-3xl p-6 md:p-8 bg-white z-[60] border border-black/10 shadow-[0_24px_80px_rgba(26,31,46,0.14)] overflow-y-auto max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle className="font-playfair text-2xl font-semibold text-kodai-dark mb-4">
                          {product.name} Details
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-6">
                        <div>
                          <h4 className="font-bold text-kodai-dark mb-3">Specifications</h4>
                          <div className="grid gap-0 border-t border-black/5">
                            {product.specifications?.map((spec, idx) => (
                              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-black/5 last:border-0">
                                <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">{spec.label}</span>
                                <span className="text-gray-600 text-sm font-medium text-left sm:text-right sm:max-w-[60%]">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {product.applications && product.applications.length > 0 && (
                          <div>
                            <h4 className="font-bold text-kodai-dark mb-3">Applications</h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 font-medium">
                              {product.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}

          <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-kodai-green/20 bg-kodai-green/5 p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-kodai-green shadow-sm">
              <Leaf size={38} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-kodai-dark">{productsData.soon.title}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
              {productsData.soon.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
