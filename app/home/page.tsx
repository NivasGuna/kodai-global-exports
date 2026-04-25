import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Globe2, ShieldCheck, FileCheck2 } from 'lucide-react';
import homeContent from './home.json';
import { FormattedText } from '@/components/shared/FormattedText';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Kodai Global Exports is a professionally managed essential oil export company serving Indian and international markets with structured quality and compliance.',
};

const introIcons = [CheckCircle2, FileCheck2, ShieldCheck];

export default function HomePage() {
  return (
    <main className="pb-24">
      <section className="relative isolate min-h-[calc(100vh-var(--kodai-header-height))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homeContent.hero.imageSrc}
            alt={homeContent.hero.imageAlt}
            fill
            className="object-cover object-center brightness-[0.94]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,31,46,0.5)_0%,rgba(26,31,46,0)_40%),linear-gradient(to_right,rgba(26,31,46,0.75)_0%,rgba(26,31,46,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,122,79,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-var(--kodai-header-height))] max-w-[85rem] flex-col justify-center px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-kodai-green uppercase backdrop-blur-md">
            {homeContent.hero.badge}
          </span>
          <h1 className="mt-6 max-w-5xl font-playfair text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
            <FormattedText text={homeContent.hero.title} />
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            {homeContent.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {homeContent.intro.highlights.map((item, index) => {
              const Icon = introIcons[index] || CheckCircle2;

              return (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-white/80 backdrop-blur-md"
                >
                  <Icon size={14} className="text-kodai-green" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                {homeContent.intro.tagline}
              </span>
              <h2 className="mt-3 max-w-4xl font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                <FormattedText text={homeContent.intro.title} />
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              {homeContent.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {homeContent.intro.highlights.map((item, index) => {
              const Icon = introIcons[index] || CheckCircle2;

              return (
                <div
                  key={item}
                  className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_16px_48px_rgba(26,31,46,0.06)] backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-kodai-dark">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    Structured processes, documentation, and quality control built for dependable export partnerships.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="rounded-[3rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(26,31,46,0.08)] backdrop-blur-xl sm:p-8 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
              {homeContent.markets.tagline}
            </span>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              <FormattedText text={homeContent.markets.title} />
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              {homeContent.markets.description}
            </p>
          </div>

          <div className="mt-10 mb-10 overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_16px_48px_rgba(26,31,46,0.06)]">
            <Image
              src="/images/global_markets_map.png"
              alt="Global markets highlighted on world map: Germany, France, Kuwait, Saudi Arabia, UAE, Bangladesh, South Africa"
              width={1600}
              height={900}
              sizes="100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap">
            {homeContent.markets.countries.map((country) => (
              <div
                key={country}
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-kodai-green/10 bg-kodai-green/5 px-5 py-4 text-sm font-semibold text-kodai-dark whitespace-nowrap min-w-[160px] max-w-full lg:min-w-fit"
              >
                <Globe2 size={18} className="text-kodai-green shrink-0" />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
            {homeContent.certifications.tagline}
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-4xl font-semibold text-kodai-dark sm:text-5xl">
            <FormattedText text={homeContent.certifications.title} />
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {homeContent.certifications.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex min-h-[180px] w-full max-w-[240px] flex-col items-center justify-center rounded-[2rem] border border-white/70 bg-white/85 p-6 text-center shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={logo.imageSrc}
                  alt={logo.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[3rem] bg-kodai-dark p-10 text-white shadow-[0_24px_80px_rgba(26,31,46,0.14)] sm:p-14">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-playfair text-3xl font-semibold sm:text-4xl">
              {homeContent.cta.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-white/75">
              {homeContent.cta.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={homeContent.cta.primary.href}
                className="inline-flex items-center rounded-2xl bg-kodai-green px-6 py-3 font-semibold text-white transition-colors hover:bg-kodai-green-dark"
              >
                {homeContent.cta.primary.label}
              </Link>
              <Link
                href={homeContent.cta.secondary.href}
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/15"
              >
                {homeContent.cta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
