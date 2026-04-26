'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar';
import navbarContent from './navbar.json';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(undefined);
    }, 350);
    setMenuTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (menuTimeout) clearTimeout(menuTimeout);
    };
  }, [menuTimeout]);

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkBase = 'relative rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300';
  const linkActive = 'bg-kodai-green text-white shadow-[0_4px_16px_rgba(45,122,79,0.40)]';
  const linkIdle = 'text-white/80 hover:bg-white/10 hover:text-white';

  const menuTriggerActive = 'bg-kodai-green text-white shadow-[0_4px_16px_rgba(45,122,79,0.40)] hover:bg-kodai-green hover:text-white';
  const menuTriggerIdle = 'text-white/80 hover:bg-white/10 hover:text-white';
  const menuTriggerOpen = 'bg-white/12 text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? 'border-b border-white/[0.07] bg-kodai-dark/92 shadow-[0_4px_32px_rgba(0,0,0,0.22)] backdrop-blur-2xl'
        : 'bg-transparent'
        }`}
    >
      {scrolled && (
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-kodai-green/50 to-transparent" />
      )}

      <div className="mx-auto flex h-[var(--kodai-header-height)] max-w-[85rem] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-90">
          <div className="relative flex h-11 w-11 flex-none items-center justify-center  bg-white/80 p-3 rounded-full  shadow-lg transition-all duration-500 group-hover:bg-white/15 group-hover:ring-white/30 sm:h-18 sm:w-18">
            <Image
              src="/images/logo.png"
              alt="Kodai Global logo"
              width={54}
              height={54}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-playfair text-[20px] font-bold tracking-tight text-white sm:text-[24px]">
              KODAI
            </span>
            <span className="mt-1 font-sans text-[9px] font-bold tracking-[0.35em] text-kodai-green uppercase sm:text-[10px]">
              GLOBAL EXPORTS
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navbarContent.navLinks.slice(0, 2).map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActiveLink(href) ? 'page' : undefined}
              className={`${linkBase} ${isActiveLink(href) ? linkActive : linkIdle}`}
            >
              {label}
            </Link>
          ))}

          <Menubar
            value={activeMenu}
            onValueChange={setActiveMenu}
            className="h-auto rounded-full border-0 bg-transparent p-0 shadow-none"
          >
            <MenubarMenu value="products">
              <MenubarTrigger
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
                aria-current={pathname?.startsWith('/products') ? 'page' : undefined}
                className={`${linkBase} flex items-center gap-1.5 outline-none ${pathname?.startsWith('/products')
                  ? menuTriggerActive
                  : activeMenu === 'products'
                    ? menuTriggerOpen
                    : menuTriggerIdle
                  }`}
              >
                {navbarContent.productsMenu.title}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`}
                />
              </MenubarTrigger>

              <MenubarContent
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
                align="start"
                sideOffset={5}
                className="w-56 rounded-2xl border border-white/[0.08] bg-[#0f1623]/98 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1">
                  <MenubarItem asChild className="cursor-pointer rounded-xl px-4 py-3 focus:bg-white/8 focus:text-white">
                    <Link
                      href="/products"
                      onClick={() => setActiveMenu(undefined)}
                      className="text-sm font-semibold text-white/90"
                    >
                      {navbarContent.productsMenu.viewAll}
                    </Link>
                  </MenubarItem>

                  <MenubarSeparator className="mx-2 bg-white/[0.07]" />

                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-white/65 outline-none hover:text-white focus:bg-white/8 focus:text-white data-[state=open]:bg-white/8 data-[state=open]:text-white">
                      {navbarContent.productsMenu.categoryTitle}
                    </MenubarSubTrigger>
                    <MenubarSubContent
                      sideOffset={4}
                      className="w-56 rounded-2xl border border-white/[0.08] bg-[#0f1623]/98 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur-xl"
                    >
                      {navbarContent.productLinks.map((item) => (
                        <MenubarItem
                          key={item.href}
                          asChild
                          className="cursor-pointer rounded-xl px-4 py-3 focus:bg-white/8 focus:text-white"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(undefined)}
                            className="text-sm font-medium text-white/65"
                          >
                            {item.label}
                          </Link>
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {navbarContent.navLinks.slice(2).map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActiveLink(href) ? 'page' : undefined}
              className={`${linkBase} ${isActiveLink(href) ? linkActive : linkIdle}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-kodai-dark/96 px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-[85rem] space-y-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.06] px-4 py-3">
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-[0.12em] text-white"
              >
                {navbarContent.productsMenu.title}
              </Link>
              <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.04] p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-kodai-green">
                  {navbarContent.productsMenu.categoryTitle}
                </p>
                <div className="mt-2 space-y-1">
                  {navbarContent.productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navbarContent.navLinks.map(({ label, href }) => {
              const isActive = isActiveLink(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive
                    ? 'border-kodai-green/30 bg-kodai-green/15 text-white'
                    : 'border-white/[0.07] text-white/65 hover:border-white/10 hover:bg-white/[0.06] hover:text-white'
                    }`}
                >
                  <span>{label}</span>
                  {isActive && <Leaf size={15} className="text-kodai-green" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
