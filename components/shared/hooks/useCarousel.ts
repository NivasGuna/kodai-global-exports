import * as React from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export function useCarousel(intervalTime = 4000) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);
    api.on('reInit', handleSelect);
    const interval = setInterval(() => {
      api.scrollNext();
    }, intervalTime);

    return () => {
      clearInterval(interval);
      api.off('select', handleSelect);
      api.off('reInit', handleSelect);
    };
  }, [api, intervalTime]);

  return {
    api,
    setApi,
    current,
    setCurrent,
    count,
  };
}
