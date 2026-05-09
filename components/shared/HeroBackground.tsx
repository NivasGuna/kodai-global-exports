'use client';

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
        sizes="100vw"
        priority={priority}
        decoding="async"
        quality={70}
        className={cn(
          'object-cover object-center',
          blur ? 'blur-[4px] scale-[1.05]' : 'blur-0 scale-100',
          imageClassName,
        )}
      />

      <div className="absolute inset-0 bg-black/75 md:bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
    </div>
  );
};