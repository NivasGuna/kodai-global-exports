'use server';

import React from 'react';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Kodai Global Exports <onboarding@resend.dev>', // Update this with your verified domain in Resend
      to: ['nivasguna26@gmail.com'],
      subject: `${subject}`,
      react: <ContactEmail name={name} email={email} subject={subject} message={message} />,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Server Action Error:', err);
    return { success: false, error: err.message || 'Failed to send email' };
  }
}
