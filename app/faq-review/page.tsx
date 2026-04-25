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

export const metadata = {
  title: 'FAQ & Reviews | Kodai Global Exports',
  description: 'Frequently asked questions and customer reviews about Kodai Global Exports essential oil products.',
};

export default function Page() {
  return (
    <main className="pb-24">
      <section className="relative isolate min-h-[72svh] overflow-hidden sm:min-h-[calc(100vh-var(--kodai-header-height))]">
        <Image
          src="/images/mission-vision.jpg"
          alt="FAQ Banner"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.94]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,31,46,0.5)_0%,rgba(26,31,46,0)_40%),linear-gradient(to_right,rgba(26,31,46,0.75)_0%,rgba(26,31,46,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,122,79,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[85rem] flex-col justify-end px-4 py-12 sm:min-h-[calc(100vh-var(--kodai-header-height))] sm:justify-center sm:px-6 md:px-10 md:py-20">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-kodai-green uppercase backdrop-blur-md">
            Help Center
          </span>
          <h1 className="mt-5 max-w-4xl font-playfair text-3xl font-semibold leading-tight text-white sm:mt-6 sm:text-5xl md:text-7xl">
            Frequently Asked <span className="text-kodai-green">Questions</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
            Everything you need to know about our premium essential oils, sourcing process, and global export standards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {['Premium Quality', 'Global Logistics', 'Expert Support'].map((item, index) => (
              <div
                key={item}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-[0.08em] uppercase backdrop-blur-md ${
                  index === 1
                    ? 'border-kodai-green/30 bg-kodai-green/15 text-white shadow-[0_10px_30px_rgba(45,122,79,0.18)]'
                    : 'border-white/15 bg-white/8 text-white/78'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-kodai-green' : 'bg-white/55'}`} />
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
                  alt="Kodai Global Exports FAQ"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-black/5 px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-kodai-green">
                  Still need help?
                </p>
                <p className="mt-2 font-playfair text-2xl font-semibold leading-tight text-kodai-dark">
                  Talk to our export team
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Can&apos;t find what you&apos;re looking for? Reach out for product guidance, documentation support, and export clarifications.
                </p>
                <a
                  href="mailto:kge@kodaiglobalexports.com"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-kodai-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kodai-dark/90"
                >
                  Contact Support <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                FAQ
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                Questions we hear most often
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-[1.5rem] border border-white/70 bg-white/85 px-5 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-kodai-green/20 hover:shadow-[0_18px_50px_rgba(45,122,79,0.08)]"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-kodai-dark hover:no-underline sm:text-lg">
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-kodai-green/10 text-xs font-bold text-kodai-green">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-12 text-base leading-8 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-kodai-green/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-kodai-green">
            Real Experiences
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-4xl font-semibold leading-tight text-kodai-dark sm:text-5xl">
            Trusted by <span className="text-kodai-green">Global Partners</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-kodai-green/20 hover:shadow-[0_20px_60px_rgba(45,122,79,0.08)]"
            >
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
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      );
                    } else if (review.rating >= ratingValue - 0.5) {
                      return (
                        <StarHalf
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      );
                    } else {
                      return (
                        <Star
                          key={i}
                          size={18}
                          className="text-gray-200"
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <p className="relative z-10 mt-6 text-base leading-8 text-gray-600 italic">
                “{review.comment}”
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
