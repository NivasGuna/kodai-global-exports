import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import contactContent from '../contact.json';
import { sendContactEmail } from '../actions';

export type FormValues = {
  name: string;
  email: string;
  country: string;
  message: string;
  robot: boolean;
};

export type FormStatus = 'idle' | 'submitting' | 'success';

export function useContactForm() {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('idle');

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
      country: '',
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
        country: data.country,
        message: data.message,
      });

      if (result.success) {
        setFormStatus('success');
        toast.success(contactContent.status.messages.success);
        setTimeout(() => {
          setFormStatus('idle');
          reset({ name: '', email: '', country: '', message: '', robot: false });
          clearErrors();
        }, 3000);
      } else {
        setFormStatus('idle');
        toast.error(result.error || contactContent.status.messages.error);
      }
    } catch {
      setFormStatus('idle');
      toast.error(contactContent.status.messages.unexpected);
    }
  };

  // Map and Address Logic
  const address = 'S New St, Periyakulam, Tamil Nadu 625601, India.';

  const mapQuery = encodeURIComponent(address.replace(/\n/g, ', '));
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return {
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
  };
}
