import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';
import { ensureReviewsTable, getPool } from '@/app/_lib/mysql';
import { isReviewAdmin } from '@/app/_lib/review-validation';

export const runtime = 'nodejs';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!isReviewAdmin(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  const id = Number(params.id);
  if (!Number.isSafeInteger(id) || id < 1) return NextResponse.json({ error: 'Invalid review ID.' }, { status: 400 });
  try {
    await ensureReviewsTable();
    const [result] = await getPool().execute<ResultSetHeader>('DELETE FROM reviews WHERE id = ?', [id]);
    if (!result.affectedRows) return NextResponse.json({ error: 'Review not found.' }, { status: 404 });
    return NextResponse.json({ deleted: true });
  } catch (error) {
    console.error('Unable to delete review:', error);
    return NextResponse.json({ error: 'The review could not be deleted.' }, { status: 500 });
  }
}
