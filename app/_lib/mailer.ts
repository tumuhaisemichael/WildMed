import nodemailer, { type Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable ${name}`);
  return value;
}

export function getTransporter() {
  if (transporter) return transporter;
  const port = Number(process.env.SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: requireEnv('SMTP_HOST'),
    port,
    secure: port === 465,
    auth: { user: requireEnv('SMTP_USER'), pass: requireEnv('SMTP_PASSWORD') },
  });
  return transporter;
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] as string);
}

export function enquiryAddresses() {
  const user = requireEnv('SMTP_USER');
  return {
    from: `"${process.env.ENQUIRY_FROM_NAME || 'WildMed Website'}" <${process.env.ENQUIRY_FROM || user}>`,
    to: process.env.ENQUIRY_TO || user,
  };
}
