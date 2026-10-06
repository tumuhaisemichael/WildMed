export type ReviewInput = { name: string; tripType: string; review: string; rating: number };

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

export function validateReview(value: unknown): { data?: ReviewInput; error?: string } {
  if (!value || typeof value !== 'object') return { error: 'Invalid review information.' };
  const body = value as Record<string, unknown>;
  const name = clean(body.name);
  const tripType = clean(body.tripType);
  const review = typeof body.review === 'string' ? body.review.trim() : '';
  const rating = Number(body.rating ?? 5);
  if (name.length < 2 || name.length > 100) return { error: 'Name must contain between 2 and 100 characters.' };
  if (tripType.length < 2 || tripType.length > 120) return { error: 'Please select a valid trip type.' };
  if (review.length < 20 || review.length > 2000) return { error: 'Review must contain between 20 and 2,000 characters.' };
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return { error: 'Rating must be between 1 and 5.' };
  return { data: { name, tripType, review, rating } };
}

export function isReviewAdmin(request: Request) {
  const configured = process.env.REVIEW_ADMIN_TOKEN;
  const supplied = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  return Boolean(configured && supplied && supplied === configured);
}
