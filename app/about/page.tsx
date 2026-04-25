import React from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import aboutData from './about.json';
import { FormattedText } from '@/components/shared/FormattedText';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kodai Global Exports - our structured approach to quality essential oils, our mission, vision, and core values.',
};

const iconMap: Record<string, React.ElementType> = {
  Award: LucideIcons.Award,
  ShieldCheck: LucideIcons.ShieldCheck,
  Zap: LucideIcons.Zap,
  Handshake: LucideIcons.Handshake,
  Eye: LucideIcons.Eye,
  Target: LucideIcons.Target,
  Sparkles: LucideIcons.Sparkles,
  CheckCircle2: LucideIcons.CheckCircle2,
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      <section className="relative isolate min-h-[calc(100vh-var(--kodai-header-height))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={aboutData.hero.imageSrc}
            alt={aboutData.hero.imageAlt}
            fill
            className="object-cover object-center brightness-[0.94]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,31,46,0.5)_0%,rgba(26,31,46,0)_40%),linear-gradient(to_right,rgba(26,31,46,0.75)_0%,rgba(26,31,46,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,122,79,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-var(--kodai-header-height))] max-w-[85rem] flex-col justify-center px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-kodai-green uppercase backdrop-blur-md">
              {aboutData.hero.badge}
            </span>
            <h1 className="mt-6 font-playfair text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              <FormattedText text={aboutData.hero.title} />
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              {aboutData.hero.subtitle}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              aboutData.whyChooseUs.badges.tested,
              aboutData.whyChooseUs.badges.origin,
              aboutData.cta.button,
            ].map((item, index) => (
              <div
                key={item}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-[0.08em] uppercase backdrop-blur-md ${
                  index === 2
                    ? 'border-kodai-green/30 bg-kodai-green/15 text-white shadow-[0_10px_30px_rgba(45,122,79,0.18)]'
                    : 'border-white/15 bg-white/8 text-white/78'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${index === 2 ? 'bg-kodai-green' : 'bg-white/55'}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                {aboutData.whyChooseUs.title}
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                Why we stand out
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p><FormattedText text={aboutData.whyChooseUs.description} /></p>
              <p>{aboutData.whyChooseUs.subDescription}</p>
              <div className="rounded-[1.75rem] border border-kodai-green/10 bg-kodai-green/5 p-6 text-kodai-dark">
                {aboutData.whyChooseUs.quote}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_40px_rgba(26,31,46,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-semibold text-kodai-dark">{aboutData.whyChooseUs.badges.tested}</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_40px_rgba(26,31,46,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-semibold text-kodai-dark">{aboutData.whyChooseUs.badges.origin}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_24px_80px_rgba(26,31,46,0.12)]">
              <Image
                src={aboutData.whyChooseUs.imageSrc}
                alt={aboutData.whyChooseUs.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-kodai-green/10 blur-3xl" />
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-emerald-100 blur-2xl" />

            <div className="absolute top-1/2 -right-8 hidden -translate-y-1/2 rounded-3xl border border-white/70 bg-white p-6 shadow-xl md:block">
              <p className="mb-1 text-4xl font-bold text-kodai-green">{aboutData.whyChooseUs.stat.value}</p>
              <p className="whitespace-nowrap font-medium text-gray-500">{aboutData.whyChooseUs.stat.label}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(26,31,46,0.08)] backdrop-blur-xl sm:p-8 md:p-10">
          <div className="absolute inset-0">
            <Image
              src={aboutData.missionVision.bgSrc}
              alt={aboutData.missionVision.bgAlt}
              fill
              sizes="100vw"
              className="object-cover opacity-[0.06]"
              priority
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[2.25rem] border border-kodai-green/10 bg-kodai-green/5 p-8 text-center">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-kodai-green text-white shadow-lg shadow-kodai-green/20">
                <iconMap.Target size={34} />
              </div>
              <h3 className="font-playfair text-3xl font-semibold text-kodai-dark">
                {aboutData.missionVision.mission.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-gray-600">
                {aboutData.missionVision.mission.description}
              </p>
            </div>

            <div className="rounded-[2.25rem] bg-kodai-dark p-8 text-center text-white shadow-[0_24px_80px_rgba(26,31,46,0.12)]">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-kodai-green text-white shadow-lg shadow-kodai-green/20">
                <iconMap.Eye size={34} />
              </div>
              <h3 className="font-playfair text-3xl font-semibold">
                {aboutData.missionVision.vision.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-white/75">
                {aboutData.missionVision.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
            {aboutData.values.tagline}
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-4xl font-semibold text-kodai-dark sm:text-5xl">
            <FormattedText text={aboutData.values.title} />
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutData.values.items.map((value, index) => {
            const Icon = iconMap[value.icon] || Sparkles;

            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_12px_40px_rgba(26,31,46,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_50px_rgba(45,122,79,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green transition-all duration-300 group-hover:bg-kodai-green group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-kodai-dark">{value.title}</h4>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
                <p className="mt-4 text-xs font-medium leading-6 text-gray-400">
                  {value.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_24px_80px_rgba(26,31,46,0.12)]">
            <Image
              src={aboutData.mdMessage.imageSrc}
              alt={aboutData.mdMessage.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
              <FormattedText text={aboutData.mdMessage.title} />
            </h2>
            <div className="space-y-4 text-base leading-8 text-gray-600">
              {aboutData.mdMessage.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-kodai-dark p-10 text-center text-white shadow-[0_24px_80px_rgba(26,31,46,0.14)] sm:p-14">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <Sparkles size={48} className="mx-auto mb-8 opacity-40" />
            <h3 className="font-playfair text-3xl font-semibold sm:text-4xl">
              {aboutData.cta.title}
            </h3>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-2xl bg-white px-10 py-5 font-bold text-kodai-green shadow-xl transition-colors hover:bg-gray-50"
            >
              {aboutData.cta.button}
            </a>
          </div>
          <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
        </div>
      </section>
    </main>
  );
}
