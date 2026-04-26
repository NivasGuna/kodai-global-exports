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
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={cn(
          'object-cover object-center brightness-[1] saturate-[1.1] transition-all duration-700',
          blur && 'blur-[2px] scale-102',
          imageClassName
        )}
        priority={priority}
        loading={priority ? 'eager' : undefined}
      />
      {/* 
        Ultra-minimal premium overlays:
        We only add a slight gradient at the bottom and a very soft left-side 
        vignette to ensure white text remains readable while keeping 
        the image bright and "perfect".
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.2),transparent_60%)]" />
    </div>
  );
};
