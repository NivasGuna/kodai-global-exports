'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { HeroBackground } from './HeroBackground';
import { HeroBadge } from './HeroBadge';
import { FormattedText } from './FormattedText';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileCheck2, ShieldCheck, LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCarousel } from './hooks/useCarousel';

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  highlights: string[];
}

const introIcons: LucideIcon[] = [CheckCircle2, FileCheck2, ShieldCheck];

export function HeroCarousel({ slides, highlights }: HeroCarouselProps) {
  const { api, setApi, current } = useCarousel(4000);

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
                imageClassName="object-[85%_center] sm:object-[75%_center] lg:object-center"
              />

              <div className="relative z-10 mx-auto flex h-full max-w-[85rem] flex-col justify-center items-start text-left px-4 pt-32 pb-16 sm:pt-40 sm:pb-32 sm:px-6 md:px-10 lg:pt-48 lg:pb-24">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: current === index ? 1 : 0, 
                    x: current === index ? 0 : 30,
                    visibility: current === index ? 'visible' : 'hidden'
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "w-full sm:w-[80%] md:w-[60%] lg:w-[50%]",
                    current !== index && "pointer-events-none absolute"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: current === index ? 1 : 0, scale: current === index ? 1 : 0.9 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <HeroBadge>{slide.badge}</HeroBadge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-5 font-playfair text-3xl font-medium leading-[1.2] text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-wide hero-text-shadow"
                  >
                    <FormattedText
                      text={slide.title}
                      highlightClassName="font-semibold text-white"
                    />
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="mt-5 text-base leading-relaxed text-white/95 sm:mt-6 sm:text-xl sm:leading-9 hero-text-shadow-sm font-light tracking-wide"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
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

                  {slide.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                      className="mt-8 sm:mt-12"
                    >
                      <Link
                        href={slide.cta.href}
                        className="group/btn relative inline-flex items-center gap-4 rounded-2xl bg-kodai-green px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(45,122,79,0.3)] transition-all hover:-translate-y-1 hover:bg-kodai-green-dark hover:shadow-[0_25px_60px_rgba(45,122,79,0.4)] sm:px-10 sm:py-5"
                      >
                        <span>{slide.cta.label}</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 transition-all group-hover/btn:rotate-[360deg] group-hover/btn:bg-white/30">
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover/btn:translate-x-0.5"
                          />
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-6 left-0 right-0 z-20 hidden lg:flex justify-center gap-6 sm:bottom-12">
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
                  current === i && 'opacity-40',
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
                  : 'bg-white/40 group-hover:bg-white/70',
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
