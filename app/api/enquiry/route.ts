import { NextResponse } from 'next/server';
import { enquiryAddresses, escapeHtml, getTransporter } from '@/app/_lib/mailer';
import { SPAM_TRAP_FIELD } from '@/lib/enquiry';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FIELDS = 40;
const MAX_VALUE_LENGTH = 5000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  recentByIp.set(ip, recent);
  return false;
}

function singleLine(value: string, max = 150) {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

// "first_name" / "program_interest[]" -> "First name" / "Program interest"
function label(key: string) {
  const text = key.replace(/\[\]$/, '').replace(/[_-]+/g, ' ').trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function validate(body: unknown) {
  if (!body || typeof body !== 'object') return null;
  const { formName, fields } = body as { formName?: unknown; fields?: unknown };
  if (typeof formName !== 'string' || !formName.trim() || !fields || typeof fields !== 'object' || Array.isArray(fields)) return null;
  const entries = Object.entries(fields as Record<string, unknown>);
  if (entries.length > MAX_FIELDS) return null;
  const clean: Record<string, string> = {};
  for (const [key, value] of entries) {
    if (typeof value !== 'string' || key.length > 80) return null;
    clean[key] = value.slice(0, MAX_VALUE_LENGTH);
  }
  return { formName: singleLine(formName, 120), fields: clean };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = validate(body);
  if (!data) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });

  // Bots fill the hidden field; pretend success so they don't retry.
  if (data.fields[SPAM_TRAP_FIELD]) {
    console.warn(`Enquiry dropped by spam trap: "${data.formName}"`);
    return NextResponse.json({ ok: true });
  }
  delete data.fields[SPAM_TRAP_FIELD];

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    console.warn(`Enquiry rate-limited for ${ip}: "${data.formName}"`);
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const { fields, formName } = data;
  const name = singleLine([fields.first_name, fields.last_name].filter(Boolean).join(' ') || fields.name || fields.full_name || '');
  const email = singleLine(fields.email || '', 254);
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;
  const rows = Object.entries(fields);

  try {
    const { from, to } = enquiryAddresses();
    const info = await getTransporter().sendMail({
      from,
      to,
      replyTo,
      subject: `New enquiry – ${formName}${name ? ` from ${name}` : ''}`,
      text: [`Form: ${formName}`, '', ...rows.map(([key, value]) => `${label(key)}: ${value}`)].join('\n'),
      html: `<h2 style="font-family:sans-serif">${escapeHtml(formName)}</h2><table style="font-family:sans-serif;border-collapse:collapse">${rows
        .map(([key, value]) => `<tr><th style="text-align:left;vertical-align:top;padding:6px 12px;border-bottom:1px solid #eee">${escapeHtml(label(key))}</th><td style="padding:6px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
        .join('')}</table>${replyTo ? '<p style="font-family:sans-serif;color:#666">Reply to this email to answer the visitor directly.</p>' : ''}`,
    });
    console.info(`Enquiry email sent: "${formName}" -> ${to} (${info.response})`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Unable to send enquiry email:', error);
    return NextResponse.json({ error: 'The enquiry could not be sent. Please try again.' }, { status: 500 });
  }
}
