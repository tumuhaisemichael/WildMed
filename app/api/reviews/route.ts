import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';
import { ensureReviewsTable, getPool, ReviewRow } from '@/app/_lib/mysql';
import { isReviewAdmin, validateReview } from '@/app/_lib/review-validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function publicReview(row: ReviewRow) {
  return { id: row.id, name: row.name, tripType: row.trip_type, review: row.review_text, rating: row.rating, createdAt: row.created_at };
}

export async function GET(request: Request) {
  try {
    await ensureReviewsTable();
    const admin = new URL(request.url).searchParams.get('admin') === '1';
    if (admin && !isReviewAdmin(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    const [rows] = await getPool().query<ReviewRow[]>('SELECT id, name, trip_type, review_text, rating, created_at FROM reviews ORDER BY created_at DESC LIMIT ?', [admin ? 500 : 100]);
    return NextResponse.json({ reviews: rows.map(publicReview) });
  } catch (error) {
    console.error('Unable to retrieve reviews:', error);
    return NextResponse.json({ error: 'Reviews are temporarily unavailable.' }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const result = validateReview(await request.json());
    if (!result.data) return NextResponse.json({ error: result.error }, { status: 400 });
    await ensureReviewsTable();
    const { name, tripType, review, rating } = result.data;
    const [insert] = await getPool().execute<ResultSetHeader>('INSERT INTO reviews (name, trip_type, review_text, rating) VALUES (?, ?, ?, ?)', [name, tripType, review, rating]);
    return NextResponse.json({ review: { id: insert.insertId, name, tripType, review, rating, createdAt: new Date().toISOString() } }, { status: 201 });
  } catch (error) {
    console.error('Unable to create review:', error);
    return NextResponse.json({ error: 'The review could not be saved. Please try again.' }, { status: 500 });
  }
}
