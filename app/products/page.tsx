'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight, Leaf, Building2, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProductCarousel } from '@/components/shared/ProductCarousel';
import { FormattedText } from '@/components/shared/FormattedText';
import { HeroBackground } from '@/components/shared/HeroBackground';
import { HeroBadge } from '@/components/shared/HeroBadge';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { PRODUCTS } from '@/lib/config';
import productsData from './products.json';
import { cn } from '@/lib/utils';

function ProductsContent() {
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname, searchParams]);

  return (
    <main className="pb-24">
      <section className="relative isolate min-h-screen overflow-hidden">
        <HeroBackground
          src="/images/product-hero-banner.png"
          alt="Kodai Global products"
          imageClassName="object-[90%_center]"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[85rem] flex-col justify-center items-center text-center md:items-start md:text-left px-4 pb-16 sm:px-6 md:px-10 md:pt-36 md:pb-20">
          <div className="max-w-4xl rounded-3xl bg-kodai-dark/10 p-2 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <HeroBadge>{productsData.hero.badge}</HeroBadge>
            <h1 className="mt-6 max-w-2xl font-playfair text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              <FormattedText text={productsData.hero.title} />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
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
            <SectionLabel>{productsData.range.tagline}</SectionLabel>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              {productsData.range.title}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => {
            const isActive = currentHash === `#${product.id}`;
            return (
              <div
                key={product.id}
                id={product.id}
                className={cn(
                  "group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] border transition-all duration-700 scroll-mt-32",
                  isActive 
                    ? "border-kodai-green bg-white shadow-[0_30px_70px_rgba(45,122,79,0.22)] ring-1 ring-kodai-green/40 -translate-y-3 z-10" 
                    : "border-white/70 bg-white/85 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_60px_rgba(45,122,79,0.08)]"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,122,79,0.1),transparent_70%)] pointer-events-none" />
                )}

                <div className="relative aspect-square overflow-hidden">
                  {product.images && product.images.length > 1 ? (
                    <ProductCarousel images={product.images} name={product.name} />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  {isActive && (
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-full bg-kodai-green px-4 py-2 text-[10px] font-bold text-white uppercase tracking-[0.15em] shadow-xl ring-4 ring-white/10 animate-in fade-in zoom-in duration-500">
                      <CheckCircle2 size={12} />
                      Selected
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-kodai-green">
                    <Award size={18} />
                    <span className="text-xs font-bold uppercase tracking-[0.22em]">Premium Grade</span>
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
                        <button className={cn(
                          "group/btn flex w-full items-center justify-between rounded-2xl border p-2 pl-6 transition-all duration-300",
                          isActive 
                            ? "bg-kodai-green border-kodai-green text-white shadow-lg" 
                            : "border-kodai-green/10 bg-kodai-green/5 hover:bg-kodai-green hover:border-kodai-green"
                        )}>
                          <span className={cn(
                            "text-sm font-bold uppercase tracking-widest transition-colors",
                            isActive ? "text-white" : "text-kodai-dark group-hover/btn:text-white"
                          )}>More Details</span>
                          <div className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover/btn:rotate-[360deg]",
                            isActive ? "bg-white/20 text-white" : "bg-white text-kodai-green group-hover/btn:bg-white/15 group-hover/btn:text-white"
                          )}>
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
            );
          })}

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

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <SectionLabel>{productsData.brands.tagline}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-3xl font-playfair text-4xl font-semibold text-kodai-dark sm:text-5xl">
            <FormattedText text={productsData.brands.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500">
            {productsData.brands.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {productsData.brands.items.map((brand) => (
            <div
              key={brand}
              className="group flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/70 bg-white/85 px-6 py-8 text-center shadow-[0_8px_32px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_16px_48px_rgba(45,122,79,0.10)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-kodai-green/8 text-kodai-green transition-all duration-300 group-hover:bg-kodai-green group-hover:text-white">
                <Building2 size={26} />
              </div>
              <p className="text-sm font-bold leading-snug text-kodai-dark tracking-[0.02em]">
                {brand}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
