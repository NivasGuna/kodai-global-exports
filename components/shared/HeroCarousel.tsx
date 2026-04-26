'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { HeroBackground } from './HeroBackground';
import { HeroBadge } from './HeroBadge';
import { FormattedText } from './FormattedText';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileCheck2, ShieldCheck, LucideIcon } from 'lucide-react';

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  highlights: string[];
}

const introIcons: LucideIcon[] = [CheckCircle2, FileCheck2, ShieldCheck];

export function HeroCarousel({ slides, highlights }: HeroCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative isolate h-screen min-h-screen overflow-hidden">
      <Carousel setApi={setApi} className="h-screen w-full" opts={{ loop: true, duration: 45 }}>
        <CarouselContent className="h-screen -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen pl-0">
              <HeroBackground
                src={slide.imageSrc}
                alt={slide.imageAlt}
                priority={index === 0}
                blur={true}
              />

              <div className="relative z-10 mx-auto flex h-full max-w-[85rem] flex-col justify-center items-start text-left px-4 pt-[calc(var(--kodai-header-height)+1rem)] pb-20 sm:pt-[calc(var(--kodai-header-height)+2rem)] sm:pb-32 sm:px-6 md:px-10 md:pt-0 md:pb-16">
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="max-w-5xl"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <HeroBadge>{slide.badge}</HeroBadge>
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mt-4 font-playfair text-4xl font-semibold leading-tight text-white/95 sm:mt-6 sm:text-5xl md:text-7xl hero-text-shadow"
                      >
                        <FormattedText text={slide.title} />
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg hero-text-shadow-sm"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-6 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3"
                      >
                        {highlights.map((item, hIdx) => {
                          const Icon = introIcons[hIdx] || CheckCircle2;
                          return (
                            <div
                              key={item}
                              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-kodai-green shadow-xl shadow-black/10 backdrop-blur-sm transition-transform hover:scale-105"
                            >
                              <Icon size={14} className="text-kodai-green" />
                              <span>{item}</span>
                            </div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-6 sm:bottom-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className="group relative flex h-10 w-10 items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <svg className="absolute inset-0 h-full w-full -rotate-90 scale-125">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="white"
                strokeWidth="1.5"
                fill="transparent"
                className={cn(
                  'opacity-20 transition-opacity duration-300',
                  current === i && 'opacity-40'
                )}
              />
              {current === i && (
                <motion.circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="var(--kodai-green)"
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray="113"
                  initial={{ strokeDashoffset: 113 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 4, ease: 'linear' }}
                />
              )}
            </svg>
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all duration-500',
                current === i
                  ? 'scale-150 bg-white shadow-[0_0_15px_rgba(255,255,255,1)]'
                  : 'bg-white/40 group-hover:bg-white/70'
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
