'use client';

import { useState } from 'react';
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

  const [prevSrc, setPrevSrc] = useState(src);
  if (src !== prevSrc) {
    setPrevSrc(src);
    setIsLoaded(false);
  }

  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 overflow-hidden bg-[#10261a] bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={{ backgroundImage: `url(${src})` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        preload={priority}
        unoptimized
        decoding="async"
        className={cn(
          'object-cover object-center brightness-[1] saturate-[1.1] transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          blur ? 'blur-[4px] scale-[1.05]' : 'blur-0 scale-100',
          imageClassName,
        )}
        quality={95}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Premium overlay: Clean, subtle gradients for text readability */}
      <div className="absolute inset-0 bg-black/25 sm:bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
    </div>
  );
};
