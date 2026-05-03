import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function useNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(undefined);
      menuTimeoutRef.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleProductClick = (e: React.MouseEvent | React.KeyboardEvent, href: string) => {
    const [basePath, hash] = href.split('#');

    if (pathname === basePath) {
      e.preventDefault();
      if (hash) {
        window.history.replaceState(null, '', `${basePath}#${hash}`);
        window.dispatchEvent(new Event('hashchange'));
      } else {
        window.history.replaceState(null, '', basePath);
        window.dispatchEvent(new Event('hashchange'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveMenu(undefined);
      setMenuOpen(false);
    } else {
      e.preventDefault();
      setActiveMenu(undefined);
      setMenuOpen(false);

      setTimeout(() => {
        router.push(href);
      }, 10);
    }
  };

  return {
    pathname,
    menuOpen,
    setMenuOpen,
    activeMenu,
    setActiveMenu,
    scrolled,
    handleMouseEnter,
    handleMouseLeave,
    isActiveLink,
    handleProductClick,
  };
}
