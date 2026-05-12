'use server';

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactEmail } from '@/components/emails/ContactEmail';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  country: string;
  message: string;
}) {
  try {
    const { name, email, country, message } = formData;
    const defaultSubject = `New Business Inquiry: ${name} (${country})`;

    // Render React Email component to HTML string
    const emailHtml = await render(
      <ContactEmail name={name} email={email} country={country} message={message} />
    );

    const info = await transporter.sendMail({
      from: `"Kodai Global Exports" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: defaultSubject,
      replyTo: email,
      html: emailHtml,
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, data: info };
  } catch (err: unknown) {
    console.error('Server Action Error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Failed to send email' };
  }
}
