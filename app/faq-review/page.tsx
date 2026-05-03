import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Star, StarHalf, ArrowRight } from 'lucide-react';
import faqList from './faq.json';
import reviews from './reviews.json';
import pageContent from './content.json';
import { HeroBackground } from '@/components/shared/HeroBackground';
import { HeroBadge } from '@/components/shared/HeroBadge';
import { FormattedText } from '@/components/shared/FormattedText';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata = pageContent.metadata;

export default function Page() {
  return (
    <main className="pb-24">
      <section className="relative isolate min-h-screen overflow-hidden">
        <HeroBackground src="/images/mission-vision.jpg" alt={pageContent.hero.imageAlt} />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[85rem] flex-col justify-center items-start text-left px-4 pt-[calc(var(--kodai-header-height)+1rem)] pb-12 sm:pt-[calc(var(--kodai-header-height)+2rem)] sm:px-6 md:px-10 md:pt-36 md:pb-20">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <HeroBadge>{pageContent.hero.badge}</HeroBadge>
            <h1 className="mt-5 font-playfair text-3xl font-medium leading-[1.2] text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-wide hero-text-shadow">
              <FormattedText
                text={pageContent.hero.title}
                highlightClassName="font-semibold text-white"
              />
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/95 sm:mt-6 sm:text-xl sm:leading-9 hero-text-shadow-sm font-light tracking-wide">
              {pageContent.hero.subtitle}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
            {pageContent.hero.highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-kodai-green shadow-xl shadow-black/10 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-kodai-green shadow-[0_0_8px_rgba(45,122,79,0.4)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="lg:sticky lg:top-[calc(var(--kodai-header-height)+1.5rem)] h-fit">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_rgba(26,31,46,0.08)] backdrop-blur-xl">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/faq.jpg"
                  alt={pageContent.contact.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-black/5 px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-kodai-green">
                  {pageContent.contact.tagline}
                </p>
                <p className="mt-2 font-playfair text-2xl font-semibold leading-tight text-kodai-dark">
                  {pageContent.contact.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {pageContent.contact.description}
                </p>
                <a
                  href="mailto:kge@kodaiglobalexports.com"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-kodai-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kodai-dark/90"
                >
                  {pageContent.contact.buttonText} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                {pageContent.faq.tagline}
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                {pageContent.faq.title}
              </h2>
            </FadeIn>

            <Accordion type="single" collapsible className="space-y-4">
              {faqList.map((item, index) => (
                <FadeIn key={index} delay={index * 0.05} className="h-auto">
                  <AccordionItem
                    value={`item-${index}`}
                    className="h-auto rounded-[1.5rem] border border-white/70 bg-white/85 px-5 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-kodai-green/20 hover:shadow-[0_18px_50px_rgba(45,122,79,0.08)]"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-kodai-dark hover:no-underline sm:text-lg">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-kodai-green/10 text-xs font-bold text-kodai-green">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span>{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-12 text-base leading-8 text-gray-600 whitespace-pre-line h-auto">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-kodai-green/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-kodai-green">
            {pageContent.reviews.tagline}
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-4xl font-semibold leading-tight text-kodai-dark sm:text-5xl">
            <FormattedText text={pageContent.reviews.title} />
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_60px_rgba(45,122,79,0.08)]">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <Star size={96} className="fill-kodai-green text-kodai-green" />
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green font-bold transition-all duration-300 group-hover:bg-kodai-green group-hover:text-white">
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-kodai-dark">{review.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
                      {review.role}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      if (review.rating >= ratingValue) {
                        return (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        );
                      } else if (review.rating >= ratingValue - 0.5) {
                        return (
                          <StarHalf key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        );
                      } else {
                        return <Star key={i} size={18} className="text-gray-200" />;
                      }
                    })}
                  </div>
                </div>
                <p className="relative z-10 mt-6 text-base leading-8 text-gray-600 italic">
                  &quot;{review.comment}&quot;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
