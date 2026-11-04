import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';
import { ensureReviewsTable, getPool } from '@/app/_lib/mysql';
import { deleteJsonReview, setJsonReviewStatus } from '@/app/_lib/review-json';
import { isReviewAdmin, isReviewStatus, usesDatabase } from '@/app/_lib/review-validation';

export const runtime = 'nodejs';

type Params = { params: { id: string } };

// Database reviews have numeric IDs; reviews saved only to the JSON file have "json-<uuid>" IDs.
function parseId(raw: string) {
  const numeric = Number(raw);
  if (Number.isSafeInteger(numeric) && numeric > 0) return { id: numeric, inDatabase: usesDatabase() };
  if (/^json-[0-9a-f-]{36}$/.test(raw)) return { id: raw, inDatabase: false };
  return null;
}

// Approves or hides a review in both the database and the JSON file.
export async function PATCH(request: Request, { params }: Params) {
  if (!isReviewAdmin(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  const target = parseId(params.id);
  if (!target) return NextResponse.json({ error: 'Invalid review ID.' }, { status: 400 });
  const body = await request.json().catch(() => null);
  const status = body?.status;
  if (!isReviewStatus(status)) return NextResponse.json({ error: 'Status must be "approved" or "pending".' }, { status: 400 });

  try {
    let updated = false;
    if (target.inDatabase) {
      await ensureReviewsTable();
      const [result] = await getPool().execute<ResultSetHeader>('UPDATE reviews SET status = ? WHERE id = ?', [status, target.id]);
      updated = result.affectedRows > 0;
    }
    if (await setJsonReviewStatus(target.id, status)) updated = true;
    if (!updated) return NextResponse.json({ error: 'Review not found.' }, { status: 404 });
    return NextResponse.json({ status });
  } catch (error) {
    console.error('Unable to update review status:', error);
    return NextResponse.json({ error: 'The review could not be updated.' }, { status: 500 });
  }
}

// Removes the review from both the database and the JSON file.
export async function DELETE(request: Request, { params }: Params) {
  if (!isReviewAdmin(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  const target = parseId(params.id);
  if (!target) return NextResponse.json({ error: 'Invalid review ID.' }, { status: 400 });

  try {
    let deleted = false;
    if (target.inDatabase) {
      await ensureReviewsTable();
      const [result] = await getPool().execute<ResultSetHeader>('DELETE FROM reviews WHERE id = ?', [target.id]);
      deleted = result.affectedRows > 0;
    }
    if (await deleteJsonReview(target.id)) deleted = true;
    if (!deleted) return NextResponse.json({ error: 'Review not found.' }, { status: 404 });
    return NextResponse.json({ deleted: true });
  } catch (error) {
    console.error('Unable to delete review:', error);
    return NextResponse.json({ error: 'The review could not be deleted.' }, { status: 500 });
  }
}
