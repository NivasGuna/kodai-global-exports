'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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

  const isActiveLink = (href: string) => {
    if (!pathname) return false;

    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[var(--kodai-nav-surface)] shadow-[0_10px_40px_rgba(26,31,46,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--kodai-nav-surface)]">
      <div className="mx-auto flex h-[var(--kodai-header-height)] max-w-[85rem] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-5 transition-transform duration-300 hover:-translate-y-0.5">
          <div className="flex h-[72px] w-[72px] flex-none items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-0.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]  sm:h-[80px] sm:w-[80px]">
            <Image
              src="/images/logo.png"
              alt="Kodai Global logo"
              width={50}
              height={50}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-none pt-1">
            <span className="font-playfair text-[20px] font-extrabold tracking-[0.02em] text-kodai-dark sm:text-[26px]">
              KODAI
            </span>
            <span className="mt-1 font-sans text-[10px] font-bold tracking-[0.45em] text-kodai-green uppercase sm:text-[11px]">
              GLOBAL
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-2 rounded-full border border-[var(--kodai-nav-border)] bg-white/75 p-1 shadow-[0_12px_40px_rgba(26,31,46,0.08)] backdrop-blur-xl md:flex">
          {navbarContent.navLinks.slice(0, 2).map(({ label, href }) => {
            const isActive = isActiveLink(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${isActive
                  ? 'bg-[var(--kodai-nav-active)] text-white shadow-lg shadow-[var(--kodai-nav-active-ring)] ring-1 ring-[var(--kodai-nav-active-ring)]'
                  : 'text-[var(--kodai-nav-text)] hover:bg-kodai-green/10 hover:text-[var(--kodai-nav-active)]'
                  }`}
              >
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}

          <Menubar
            value={activeMenu}
            onValueChange={setActiveMenu}
            className="h-auto rounded-full border-0 bg-transparent p-0 shadow-none"
          >
            <MenubarMenu value="products">
              <MenubarTrigger
                onMouseEnter={() => setActiveMenu('products')}
                onMouseLeave={() => setActiveMenu(undefined)}
                aria-current={pathname?.startsWith('/products') ? 'page' : undefined}
                className={`relative flex items-center gap-1.5 rounded-full px-5 py-2 text-[13px] font-semibold outline-none transition-all duration-300 ${pathname?.startsWith('/products')
                  ? 'bg-[var(--kodai-nav-active)] text-white shadow-lg shadow-[var(--kodai-nav-active-ring)] ring-1 ring-[var(--kodai-nav-active-ring)] hover:bg-[var(--kodai-nav-active)] hover:text-white'
                  : activeMenu === 'products'
                    ? 'bg-kodai-green/10 text-[var(--kodai-nav-active)]'
                    : 'text-[var(--kodai-nav-text)] hover:bg-kodai-green/10 hover:text-[var(--kodai-nav-active)]'
                  }`}
              >
                <span className="relative z-10">{navbarContent.productsMenu.title}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`}
                />
              </MenubarTrigger>

              <MenubarContent
                onMouseEnter={() => setActiveMenu('products')}
                onMouseLeave={() => setActiveMenu(undefined)}
                align="start"
                sideOffset={0}
                className="w-56 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_20px_60px_rgba(26,31,46,0.12)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1">
                  <MenubarItem
                    asChild
                    className="cursor-pointer rounded-xl px-4 py-3 focus:bg-kodai-green/10 focus:text-kodai-green"
                  >
                    <Link
                      href="/products"
                      onClick={() => setActiveMenu(undefined)}
                      className="text-sm font-semibold text-kodai-dark"
                    >
                      {navbarContent.productsMenu.viewAll}
                    </Link>
                  </MenubarItem>

                  <MenubarSeparator className="mx-2 bg-kodai-green/10" />

                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-[var(--kodai-nav-text)] outline-none hover:text-kodai-green focus:bg-kodai-green/10 focus:text-kodai-green data-[state=open]:bg-kodai-green/10 data-[state=open]:text-kodai-green">
                      {navbarContent.productsMenu.categoryTitle}
                    </MenubarSubTrigger>
                    <MenubarSubContent
                      sideOffset={4}
                      className="w-56 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-xl backdrop-blur-xl"
                    >
                      {navbarContent.productLinks.map((item) => (
                        <MenubarItem
                          key={item.href}
                          asChild
                          className="cursor-pointer rounded-xl px-4 py-3 focus:bg-kodai-green/10 focus:text-kodai-green"
                        >
                          <Link
                            href={item.href}
                            replace
                            onClick={() => setActiveMenu(undefined)}
                            className="text-sm font-medium text-[var(--kodai-nav-text)]"
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

          {navbarContent.navLinks.slice(2).map(({ label, href }) => {
            const isActive = isActiveLink(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${isActive
                  ? 'bg-[var(--kodai-nav-active)] text-white shadow-lg shadow-[var(--kodai-nav-active-ring)] ring-1 ring-[var(--kodai-nav-active-ring)]'
                  : 'text-[var(--kodai-nav-text)] hover:bg-kodai-green/10 hover:text-[var(--kodai-nav-active)]'
                  }`}
              >
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-kodai-dark shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white/90 px-4 py-4 shadow-[0_20px_60px_rgba(26,31,46,0.08)] backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-[85rem] space-y-2">
            <div className="rounded-2xl border border-kodai-green/10 bg-kodai-green/5 px-4 py-3">
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-[0.12em] text-kodai-dark"
              >
                {navbarContent.productsMenu.title}
              </Link>
              <div className="mt-3 rounded-2xl border border-white/60 bg-white/60 p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-kodai-green">
                  {navbarContent.productsMenu.categoryTitle}
                </p>
                <div className="mt-2 space-y-2">
                  {navbarContent.productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--kodai-nav-text)] transition-colors hover:bg-white/70 hover:text-kodai-dark"
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
                    ? 'border-kodai-green/20 bg-kodai-green/10 text-[var(--kodai-nav-active)]'
                    : 'border-transparent text-[var(--kodai-nav-text)] hover:border-kodai-green/10 hover:bg-kodai-green/5 hover:text-[var(--kodai-nav-active)]'
                    }`}
                >
                  <span>{label}</span>
                  {isActive && <Leaf size={16} className="text-kodai-green" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
