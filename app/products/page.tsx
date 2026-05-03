'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { Award, Leaf, Building2, CheckCircle2 } from 'lucide-react';
import { ProductCarousel } from '@/components/shared/ProductCarousel';
import { FormattedText } from '@/components/shared/FormattedText';
import { HeroCarousel } from '@/components/shared/HeroCarousel';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { FadeIn } from '@/components/shared/FadeIn';
import { PRODUCTS } from '@/lib/config';
import productsData from './products.json';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useProductSync } from './hooks/useProductSync';
import { ProductDetailsDialog } from './components/ProductDetailsDialog';

function ProductsContent() {
  const { activeProductId } = useProductSync();

  return (
    <main className="pb-24">
      <HeroCarousel slides={productsData.hero.slides} highlights={productsData.hero.features} />

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <FadeIn className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>{productsData.range.tagline}</SectionLabel>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              {productsData.range.title}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product, idx) => {
            const isActive = activeProductId === product.id;
            return (
              <FadeIn key={product.id} delay={idx * 0.1} className="h-full">
                <div
                  id={product.id}
                  data-active={isActive}
                  className={cn(
                    'group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] border transition-all duration-500 scroll-mt-32',
                    isActive
                      ? 'border-kodai-green bg-white shadow-[0_40px_80px_rgba(45,122,79,0.25)] ring-2 ring-kodai-green/50 -translate-y-3 z-10'
                      : 'border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]',
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
                        {productsData.ui.selected}
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-kodai-green">
                      <Award size={18} />
                      <span className="text-xs font-bold uppercase tracking-[0.22em]">
                        {productsData.ui.premiumGrade}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-kodai-dark">{product.name}</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p className="mt-4 text-sm leading-7 text-gray-600 line-clamp-4 cursor-help">
                            {product.description}
                          </p>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-[300px]">
                          {product.description}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <div className="mt-auto pt-8">
                      <ProductDetailsDialog
                        product={product}
                        isActive={isActive}
                        ui={productsData.ui}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}

          <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-kodai-green/20 bg-kodai-green/5 p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-kodai-green shadow-sm">
              <Leaf size={38} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-kodai-dark">
              {productsData.soon.title}
            </h3>
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
