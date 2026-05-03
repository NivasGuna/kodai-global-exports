import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useProductSync() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleSync = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveProductId(hash || null);

      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      }
    };

    handleSync();
    window.addEventListener('hashchange', handleSync);
    return () => window.removeEventListener('hashchange', handleSync);
  }, [pathname, searchParams]);

  // Auto-clear product selection after scroll completes
  useEffect(() => {
    if (activeProductId) {
      const timeout = setTimeout(() => {
        setActiveProductId(null);
        window.history.replaceState(null, '', pathname);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [activeProductId, pathname]);

  return {
    activeProductId,
    setActiveProductId,
  };
}
