import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';
import { enquiryAddresses, escapeHtml, getTransporter } from '@/app/_lib/mailer';
import { ensureReviewsTable, getPool, ReviewRow } from '@/app/_lib/mysql';
import { appendJsonReview, jsonOnlyId, readJsonReviews, StoredReview } from '@/app/_lib/review-json';
import { isReviewAdmin, usesDatabase, validateReview } from '@/app/_lib/review-validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function toStoredReview(row: ReviewRow): StoredReview {
  return { id: row.id, name: row.name, tripType: row.trip_type, review: row.review_text, rating: row.rating, status: row.status === 'pending' ? 'pending' : 'approved', createdAt: new Date(row.created_at).toISOString() };
}

async function databaseReviews(limit: number, approvedOnly: boolean) {
  await ensureReviewsTable();
  const [rows] = await getPool().query<ReviewRow[]>(`SELECT id, name, trip_type, review_text, rating, status, created_at FROM reviews ${approvedOnly ? "WHERE status = 'approved'" : ''} ORDER BY created_at DESC LIMIT ?`, [limit]);
  return rows.map(toStoredReview);
}

// Visitors see approved reviews only; the admin view (?admin=1) includes pending ones.
// Reviews come from the database when it is in use and reachable, plus any saved only to the JSON file.
export async function GET(request: Request) {
  const admin = new URL(request.url).searchParams.get('admin') === '1';
  if (admin && !isReviewAdmin(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  const limit = admin ? 500 : 100;

  const [database, json] = await Promise.allSettled([
    usesDatabase() ? databaseReviews(limit, !admin) : Promise.reject(new Error('Database disabled by REVIEW_STORAGE=json')),
    readJsonReviews(),
  ]);
  if (database.status === 'rejected' && usesDatabase()) console.error('Unable to retrieve reviews from the database:', database.reason);
  if (json.status === 'rejected') console.error('Unable to read the reviews JSON file:', json.reason);
  if (database.status === 'rejected' && json.status === 'rejected') return NextResponse.json({ error: 'Reviews are temporarily unavailable.' }, { status: 503 });

  const jsonReviews = (json.status === 'fulfilled' ? json.value : []).filter((review) => admin || review.status === 'approved');
  const reviews = database.status === 'fulfilled'
    ? [...database.value, ...jsonReviews.filter((review) => typeof review.id === 'string')]
    : jsonReviews;
  reviews.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return NextResponse.json({ reviews: reviews.slice(0, limit) });
}

// Emails the company inbox so someone knows a review is waiting for approval.
async function notifyNewReview(review: StoredReview, request: Request) {
  const adminUrl = `${(process.env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '')}/admin/reviews`;
  const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  const name = review.name.replace(/[\r\n]+/g, ' ');
  const rows: [string, string][] = [['Name', review.name], ['Trip type', review.tripType], ['Rating', `${stars} (${review.rating}/5)`], ['Review', review.review], ['Submitted', new Date(review.createdAt).toUTCString()]];
  const { from, to } = enquiryAddresses();
  await getTransporter().sendMail({
    from,
    to,
    subject: `New review awaiting approval – ${name} (${review.rating}/5)`,
    text: ['A new traveller review has been submitted and is waiting for approval.', '', ...rows.map(([label, value]) => `${label}: ${value}`), '', `Approve or remove it: ${adminUrl}`].join('\n'),
    html: `<h2 style="font-family:sans-serif">New review awaiting approval</h2><table style="font-family:sans-serif;border-collapse:collapse">${rows
      .map(([label, value]) => `<tr><th style="text-align:left;vertical-align:top;padding:6px 12px;border-bottom:1px solid #eee">${escapeHtml(label)}</th><td style="padding:6px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
      .join('')}</table><p style="font-family:sans-serif"><a href="${escapeHtml(adminUrl)}">Open the review admin page</a> to approve or remove it.</p>`,
  });
}

// New reviews wait for approval. Each is saved to the database (when in use) and the JSON file;
// the submission succeeds if either save works.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid review information.' }, { status: 400 });
  }
  const result = validateReview(body);
  if (!result.data) return NextResponse.json({ error: result.error }, { status: 400 });

  const createdAt = new Date().toISOString();
  let id: number | string | undefined;
  if (usesDatabase()) {
    try {
      await ensureReviewsTable();
      const { name, tripType, review, rating } = result.data;
      const [insert] = await getPool().execute<ResultSetHeader>("INSERT INTO reviews (name, trip_type, review_text, rating, status) VALUES (?, ?, ?, ?, 'pending')", [name, tripType, review, rating]);
      id = insert.insertId;
    } catch (error) {
      console.error('Unable to save review to the database:', error);
    }
  }

  const stored: StoredReview = { ...result.data, id: id ?? jsonOnlyId(), status: 'pending', createdAt };
  let savedToJson = false;
  try {
    await appendJsonReview(stored);
    savedToJson = true;
  } catch (error) {
    console.error('Unable to save review to the JSON file:', error);
  }

  if (id === undefined && !savedToJson) return NextResponse.json({ error: 'The review could not be saved. Please try again.' }, { status: 500 });

  // The review is already saved, so a failed email is logged rather than reported to the visitor.
  try {
    await notifyNewReview(stored, request);
  } catch (error) {
    console.error('Unable to send new review notification:', error);
  }
  return NextResponse.json({ received: true }, { status: 201 });
}
