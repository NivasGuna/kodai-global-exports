import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';

export default function NotFound() {
  return (
    <main className="relative isolate min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-[50%] [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,122,79,0.05)_0%,transparent_70%)]" />
        </div>
      </div>

      <FadeIn className="text-center">
        <p className="text-base font-bold uppercase tracking-[0.4em] text-kodai-green">
          Error 404
        </p>
        <h1 className="mt-4 font-playfair text-4xl font-semibold tracking-tight text-kodai-dark sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 max-w-lg mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, 
          deleted, or the link might be broken.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-kodai-green px-8 py-4 text-sm font-bold text-white shadow-xl shadow-kodai-green/20 transition-all hover:bg-kodai-green-dark hover:-translate-y-1 active:translate-y-0"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-8 py-4 text-sm font-bold text-kodai-dark backdrop-blur-sm transition-all hover:bg-white hover:border-black/20 hover:-translate-y-1 active:translate-y-0"
          >
            <Search size={18} />
            Explore Products
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16 pt-8 border-t border-black/5 w-full max-w-md">
        <p className="text-center text-sm text-gray-500">
          Looking for something specific? 
          <Link href="/contact" className="ml-1 text-kodai-green font-bold hover:underline">
            Contact our export team
          </Link>
        </p>
      </FadeIn>
    </main>
  );
}
