'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'FAQ & Reviews', href: '/faq-review' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Lemongrass Oil', href: '/products#lemongrass-oil' },
  { label: 'Eucalyptus Oil', href: '/products#eucalyptus-oil' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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
          <div className="flex h-[76px] w-[76px] flex-none items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/70 bg-white shadow-[0_12px_32px_rgba(45,122,79,0.14)] ring-1 ring-black/5 sm:h-[84px] sm:w-[84px]">
            <Image
              src="/images/logo.png"
              alt="Kodai Global logo"
              width={84}
              height={84}
              className="h-full w-full object-contain p-0.5 scale-[1.1]"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="block font-playfair text-[1.1rem] font-semibold tracking-wide text-kodai-dark sm:text-[1.2rem]">
              Kodai <span className="text-kodai-green">Global</span>
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-2 rounded-full border border-[var(--kodai-nav-border)] bg-white/70 p-1 shadow-[0_10px_40px_rgba(26,31,46,0.06)] backdrop-blur-md md:flex">
          <Menubar className="h-auto rounded-full border-0 bg-transparent p-0 shadow-none">
            <MenubarMenu open={productsOpen} onOpenChange={setProductsOpen}>
              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <MenubarTrigger
                  aria-current={pathname?.startsWith('/products') ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium outline-none transition-all duration-300 ${
                    pathname?.startsWith('/products') || productsOpen
                      ? 'bg-[var(--kodai-nav-active)] text-white shadow-lg shadow-[var(--kodai-nav-active-ring)] ring-1 ring-[var(--kodai-nav-active-ring)] hover:bg-[var(--kodai-nav-active)] hover:text-white aria-expanded:bg-[var(--kodai-nav-active)]'
                      : 'text-[var(--kodai-nav-text)] hover:bg-kodai-green/10 hover:text-[var(--kodai-nav-active)] aria-expanded:bg-kodai-green/10'
                  }`}
                >
                  <span className="relative z-10">Products</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}
                  />
                </MenubarTrigger>

                <MenubarContent
                  align="center"
                  sideOffset={14}
                  className="w-[26rem] rounded-[1.6rem] border border-white/70 bg-white/95 p-2 shadow-[0_20px_60px_rgba(26,31,46,0.12)] backdrop-blur-xl"
                >
                  <div className="grid gap-2 md:grid-cols-[0.95fr_1.2fr]">
                    <div className="rounded-[1.35rem] border border-kodai-green/12 bg-kodai-green/6 px-4 py-4">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-kodai-green">
                        Category
                      </p>
                      <p className="mt-3 text-lg font-semibold text-kodai-dark">
                        Essential Oils
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        Export-ready natural oils prepared with consistent quality and documentation support.
                      </p>
                    </div>

                    <div className="rounded-[1.35rem] border border-black/5 bg-white/90 p-2">
                      <MenubarItem asChild className="cursor-pointer rounded-2xl px-4 py-3">
                        <Link
                          href="/products"
                          onClick={() => setProductsOpen(false)}
                          className="text-sm font-semibold text-kodai-dark"
                        >
                          View All Products
                        </Link>
                      </MenubarItem>

                      <MenubarSeparator className="mx-2 bg-kodai-green/10" />

                      {productLinks.map((item) => (
                        <MenubarItem
                          key={item.href}
                          asChild
                          className="cursor-pointer rounded-2xl px-4 py-3"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setProductsOpen(false)}
                            className="text-sm font-medium text-[var(--kodai-nav-text)]"
                          >
                            {item.label}
                          </Link>
                        </MenubarItem>
                      ))}
                    </div>
                  </div>
                </MenubarContent>
              </div>
            </MenubarMenu>
          </Menubar>

          {navLinks.map(({ label, href }) => {
            const isActive = isActiveLink(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
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
                Products
              </Link>
              <div className="mt-3 rounded-2xl border border-white/60 bg-white/60 p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-kodai-green">
                  Essential Oils
                </p>
                <div className="mt-2 space-y-2">
                  {productLinks.map((item) => (
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

            {navLinks.map(({ label, href }) => {
              const isActive = isActiveLink(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
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
