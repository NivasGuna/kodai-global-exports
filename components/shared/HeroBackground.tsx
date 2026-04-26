import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const HeroBackground = ({
  src,
  alt,
  priority = true,
  className,
  imageClassName,
}: HeroBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={cn(
          'object-cover object-center transition-transform duration-[8s] ease-out brightness-[0.70] blur-[1px]',
          imageClassName
        )}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kodai-dark/15 via-kodai-dark/30 to-kodai-dark/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-kodai-dark/25 via-kodai-dark/20 to-kodai-dark/0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(45,122,79,0.25),transparent_60%)]" />
    </div>
  );
};
