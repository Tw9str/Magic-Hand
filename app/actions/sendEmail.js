'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const EmailSchema = z.object({
  name: z.string().min(1, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres formaat'),
  subject: z.string().min(1, 'Onderwerp is verplicht'),
  message: z
    .string()
    .min(10, 'Bericht moet minstens 10 tekens bevatten')
    .max(500, 'Bericht mag maximaal 500 tekens bevatten'),
});

export async function sendEmailAction(formData) {
  const formObject = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const parsed = EmailSchema.safeParse(formObject);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return { success: false, errors };
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return {
      success: false,
      message: 'E-mailserverconfiguratie is onvolledig.',
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: process.env.SMTP_PORT || 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nieuw Bericht Ontvangen</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
      .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
      .header { background-color: #4caf50; color: #ffffff; text-align: center; padding: 20px; }
      .header h1 { margin: 0; font-size: 24px; }
      .content { padding: 20px; color: #333333; }
      .content p { margin: 10px 0; }
      .footer { background-color: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #777777; }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Nieuw Bericht Ontvangen</h1>
      </div>
      <div class="content">
        <p><strong>Naam:</strong> ${formObject.name}</p>
        <p><strong>E-mail:</strong> ${formObject.email}</p>
        <p><strong>Onderwerp:</strong> ${formObject.subject}</p>
        <p><strong>Bericht:</strong></p>
        <p>${formObject.message}</p>
      </div>
      <div class="footer">
        <p>U heeft een nieuw bericht ontvangen van uw website. Reageer zo snel mogelijk.</p>
      </div>
    </div>
  </body>
  </html>
`;

  const userHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bericht Ontvangen</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
      .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
      .header { background-color: #4caf50; color: #ffffff; text-align: center; padding: 20px; }
      .header h1 { margin: 0; font-size: 24px; }
      .content { padding: 20px; color: #333333; }
      .content p { margin: 10px 0; }
      .footer { background-color: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #777777; }
      .button { display: inline-block; margin-top: 20px; background-color: #4caf50; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Bedankt Voor Uw Bericht</h1>
      </div>
      <div class="content">
        <p>Beste ${formObject.name},</p>
        <p>We hebben uw bericht met het onderwerp <strong>${formObject.subject}</strong> ontvangen. Bedankt dat u contact met ons heeft opgenomen!</p>
        <p>Ons team zal uw bericht zo snel mogelijk behandelen en contact met u opnemen.</p>
        <p>Voor vragen kunt u altijd contact opnemen via onze website of per e-mail.</p>
        <a href="https://www.magichand.nl" target="_blank" class="button">Bezoek Onze Website</a>
      </div>
      <div class="footer">
        <p>Met vriendelijke groet,</p>
        <p>Magic Hand Team</p>
      </div>
    </div>
  </body>
  </html>
`;

  try {
    await transporter.sendMail({
      from: `"${formObject.name}" <${formObject.email}>`,
      to: process.env.EMAIL_USER,
      subject: formObject.subject,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formObject.email,
      subject: `Wij hebben uw bericht ontvangen: ${formObject.subject}`,
      html: userHtml,
    });

    return { success: true, message: 'Uw bericht is succesvol verzonden!' };
  } catch (error) {
    console.error('Fout bij het verzenden van e-mail:', error);
    return {
      success: false,
      message: 'E-mail verzenden is mislukt. Probeer het later opnieuw.',
    };
  }
}
