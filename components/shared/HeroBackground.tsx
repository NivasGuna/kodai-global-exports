'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  blur?: boolean;
}

export const HeroBackground = ({
  src,
  alt,
  priority = true,
  className,
  imageClassName,
  blur = false,
}: HeroBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div
      className={cn(  
        'absolute inset-0 -z-10 overflow-hidden bg-[#10261a]',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        priority={priority}
        decoding="async"
        quality={70}
        className={cn(
          'object-cover object-center transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          blur ? 'blur-[4px] scale-[1.05]' : 'blur-0 scale-100',
          imageClassName,
        )}
        onLoad={() => setIsLoaded(true)}
      />

      <div className="absolute inset-0 bg-black/75 md:bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
    </div>
  );
};