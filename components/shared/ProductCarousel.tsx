'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ProductCarouselProps {
  images: string[];
  name: string;
}

export function ProductCarousel({ images, name }: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative h-full w-full group/carousel">
      <Carousel setApi={setApi} className="h-full w-full" opts={{ loop: true }}>
        <CarouselContent className="h-full -ml-0">
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="relative h-full pl-0 aspect-square">
              <Image
                src={img}
                alt={`${name} ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Navigation */}
      {count > 1 && (
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-300",
                current === i 
                  ? "w-6 bg-kodai-green shadow-[0_0_8px_rgba(45,122,79,0.5)]" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Subtle overlay to prevent "black" flashes/artifacts */}
      <div className="absolute inset-0 pointer-events-none bg-kodai-dark/5 opacity-0 transition-opacity duration-500 rounded-[2.5rem]" />
    </div>
  );
}
