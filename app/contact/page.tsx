'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/shared/FormInput';
import { FormTextarea } from '@/components/shared/FormTextarea';
import contactContent from './contact.json';
import { Label } from '@/components/ui/label';
import { HeroBackground } from '@/components/shared/HeroBackground';
import { HeroBadge } from '@/components/shared/HeroBadge';
import { FadeIn } from '@/components/shared/FadeIn';
import { useContactForm } from './hooks/useContactForm';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    errors,
    formStatus,
    isVerified,
    setValue,
    clearErrors,
    onSubmit,
    address,
    mapQuery,
    mapEmbedUrl,
  } = useContactForm();

  return (
    <main className="pb-24">
      <section className="relative isolate min-h-screen overflow-hidden">
        <HeroBackground src="/images/contact-hero-banner.png" alt="Contact Us Banner" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[85rem] flex-col justify-center items-start text-left px-4 pt-32 pb-16 sm:pt-40 sm:pb-32 sm:px-6 md:px-10 lg:pt-48 lg:pb-24">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <HeroBadge>{contactContent.hero.badge}</HeroBadge>
            <h1 className="mt-5 font-playfair text-3xl font-medium leading-[1.2] text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-wide hero-text-shadow">
              {contactContent.hero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/95 sm:mt-6 sm:text-xl sm:leading-9 hero-text-shadow-sm font-light tracking-wide">
              {contactContent.hero.subtitle}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
            {contactContent.hero.features.map((item) => (
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

      <div className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                {contactContent.info.title}
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                {contactContent.info.subtitle}
              </h2>
            </FadeIn>

            <div className="space-y-4">
              {contactContent.info.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Mail;
                return (
                  <FadeIn
                    key={index}
                    delay={index * 0.1}
                    className="group rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(26,31,46,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-kodai-green/20 hover:shadow-[0_18px_50px_rgba(45,122,79,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-kodai-green/10 text-kodai-green transition-all duration-300 group-hover:bg-kodai-green group-hover:text-white">
                        <IconComponent size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
                          {item.label}
                        </p>
                        <p className="mt-2 whitespace-pre-line text-base font-medium leading-7 text-kodai-dark">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-kodai-dark p-8 text-white shadow-[0_20px_60px_rgba(26,31,46,0.14)]">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-kodai-green/20 blur-3xl" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-green">
                  {contactContent.extra.badge}
                </p>
                <p className="mt-4 text-base leading-8 text-white/75">
                  {contactContent.extra.description}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(26,31,46,0.08)] backdrop-blur-xl sm:p-8 md:p-10">
              <FadeIn delay={0.2} className="mb-8">
                <h2 className="font-playfair text-3xl font-semibold text-kodai-dark">
                  {contactContent.form.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                  {contactContent.form.description}
                </p>
              </FadeIn>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label={contactContent.form.fields.name.label}
                    placeholder={contactContent.form.fields.name.placeholder}
                    required
                    registration={register('name', {
                      required: contactContent.form.fields.name.error.required,
                    })}
                    error={errors.name?.message as string}
                  />
                  <FormInput
                    type="email"
                    label={contactContent.form.fields.email.label}
                    placeholder={contactContent.form.fields.email.placeholder}
                    required
                    registration={register('email', {
                      required: contactContent.form.fields.email.error.required,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: contactContent.form.fields.email.error.invalid,
                      },
                    })}
                    error={errors.email?.message as string}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <FormInput
                    label={contactContent.form.fields.country.label}
                    placeholder={contactContent.form.fields.country.placeholder}
                    required
                    registration={register('country', {
                      required: contactContent.form.fields.country.error.required,
                    })}
                    error={errors.country?.message as string}
                  />
                  <FormTextarea
                    rows={5}
                    label={contactContent.form.fields.message.label}
                    placeholder={contactContent.form.fields.message.placeholder}
                    required
                    registration={register('message', {
                      required: contactContent.form.fields.message.error.required,
                    })}
                    error={errors.message?.message as string}
                  />
                </div>

                <div className="rounded-2xl border border-dashed border-kodai-green/15 bg-kodai-green/5 px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="hidden"
                      id="robot-hidden"
                      {...register('robot', {
                        required: contactContent.form.fields.robot.error.required,
                      })}
                    />
                    <Checkbox
                      id="robot"
                      checked={isVerified}
                      onCheckedChange={(checked) => {
                        setValue('robot', checked === true);
                        if (checked === true) clearErrors('robot');
                      }}
                      className={`w-5 h-5 rounded data-[state=checked]:bg-kodai-green data-[state=checked]:border-kodai-green ${errors.robot ? 'border-red-500 border-2' : ''}`}
                    />
                    <Label
                      htmlFor="robot"
                      className="text-sm font-medium leading-none cursor-pointer select-none"
                    >
                      {contactContent.form.fields.robot.label}
                    </Label>
                  </div>
                  {errors.robot && (
                    <p className="mt-2 text-sm font-medium text-red-500 animate-fade-in">
                      {errors.robot.message as string}
                    </p>
                  )}
                </div>

                <Button
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full rounded-2xl py-7 text-lg font-bold transition-all duration-300 overflow-hidden ${
                    formStatus === 'success'
                      ? 'border-none bg-emerald-500 hover:bg-emerald-600'
                      : 'border-none bg-kodai-green hover:bg-kodai-green-dark'
                  } ${formStatus === 'submitting' ? 'opacity-80' : ''}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {formStatus === 'idle' && (
                      <>
                        {contactContent.form.buttonText}
                        <Send size={20} />
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    )}
                    {formStatus === 'success' && (
                      <>
                        {contactContent.status.success}
                        <CheckCircle2 size={20} />
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <section className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_rgba(26,31,46,0.08)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_1fr]">
            <div className="bg-kodai-dark p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-green">
                {contactContent.map.badge}
              </p>
              <h3 className="mt-3 font-playfair text-3xl font-semibold">
                {contactContent.map.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white/75 sm:text-base">
                {address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-kodai-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-kodai-green-dark"
              >
                {contactContent.map.buttonText}
              </a>
            </div>

            <div className="relative min-h-[360px]">
              <iframe
                title={contactContent.map.accessibilityLabel}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
