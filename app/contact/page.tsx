'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/shared/FormInput';
import { FormTextarea } from '@/components/shared/FormTextarea';
import { useForm, useWatch } from 'react-hook-form';
import contactContent from './contact.json';
import { Label } from '@/components/ui/label';
import { HeroBackground } from '@/components/shared/HeroBackground';
import { HeroBadge } from '@/components/shared/HeroBadge';
import { sendContactEmail } from './actions';
import { toast } from 'sonner';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  robot: boolean;
};

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');
  const address =
    contactContent.info.items.find((item) => item.type === 'address')?.value ??
    'Kodai Global Exports, Periyakulam, Theni District-625601, Tamilnadu, India.';
  const mapQuery = encodeURIComponent(address.replace(/\n/g, ', '));
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      robot: false,
    },
  });

  const isVerified = useWatch({
    control,
    name: 'robot',
  });

  const onSubmit = async (data: FormValues) => {
    setFormStatus('submitting');
    try {
      const result = await sendContactEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (result.success) {
        setFormStatus('success');
        toast.success('Message sent successfully! We will get back to you soon.');
        setTimeout(() => {
          setFormStatus('idle');
          reset({ name: '', email: '', subject: '', message: '', robot: false });
          clearErrors();
        }, 3000);
      } else {
        setFormStatus('idle');
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('idle');
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <main className="pb-24">
      <section className="relative isolate min-h-screen overflow-hidden">
        <HeroBackground
          src="/images/contact-hero-banner.jpeg"
          alt="Contact Us Banner"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[85rem] flex-col justify-center items-center text-center md:items-start md:text-left px-4 pt-[calc(var(--kodai-header-height)+2rem)] pb-16 sm:px-6 md:px-10 md:pt-36 md:pb-20">
          <div className="max-w-3xl">
            <HeroBadge>{contactContent.hero.badge}</HeroBadge>
            <h1 className="mt-6 font-playfair text-4xl font-semibold leading-tight text-white/95 sm:text-5xl md:text-7xl hero-text-shadow">
              {contactContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg hero-text-shadow-sm">
              {contactContent.hero.subtitle}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              'Premium product inquiries',
              'Direct export support',
            ].map((item) => (
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
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
                {contactContent.info.title}
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-semibold text-kodai-dark sm:text-4xl">
                Reach us directly
              </h2>
            </div>

            <div className="space-y-4">
              {contactContent.info.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Mail;
                return (
                  <div
                    key={index}
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
                  </div>
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
              <div className="mb-8">
                <h2 className="font-playfair text-3xl font-semibold text-kodai-dark">
                  {contactContent.form.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                  {contactContent.form.description}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label={contactContent.form.fields.name.label}
                    placeholder={contactContent.form.fields.name.placeholder}
                    required
                    registration={register('name', { required: contactContent.form.fields.name.error.required })}
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
                    label={contactContent.form.fields.subject.label}
                    placeholder={contactContent.form.fields.subject.placeholder}
                    required
                    registration={register('subject', { required: contactContent.form.fields.subject.error.required })}
                    error={errors.subject?.message as string}
                  />
                  <FormTextarea
                    rows={5}
                    label={contactContent.form.fields.message.label}
                    placeholder={contactContent.form.fields.message.placeholder}
                    required
                    registration={register('message', { required: contactContent.form.fields.message.error.required })}
                    error={errors.message?.message as string}
                  />
                </div>

                <div className="rounded-2xl border border-dashed border-kodai-green/15 bg-kodai-green/5 px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="hidden"
                      id="robot-hidden"
                      {...register('robot', { required: contactContent.form.fields.robot.error.required })}
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
                  className={`w-full rounded-2xl py-7 text-lg font-bold transition-all duration-300 overflow-hidden ${formStatus === 'success'
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
                Visit Us
              </p>
              <h3 className="mt-3 font-playfair text-3xl font-semibold">
                Find our location
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
                Open in Maps
              </a>
            </div>

            <div className="relative min-h-[360px]">
              <iframe
                title="Kodai Global Exports location map"
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
