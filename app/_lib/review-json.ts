import 'server-only';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import type { ReviewInput, ReviewStatus } from './review-validation';

export type StoredReview = ReviewInput & { id: number | string; status: ReviewStatus; createdAt: string };

const filePath = () => process.env.REVIEWS_JSON_PATH || path.join(process.cwd(), 'data', 'reviews.json');

// Serialises writes within this server process so concurrent submissions don't overwrite each other.
let queue: Promise<unknown> = Promise.resolve();
function exclusive<T>(task: () => Promise<T>) {
  const run = queue.then(task, task);
  queue = run.catch(() => undefined);
  return run;
}

export async function readJsonReviews(): Promise<StoredReview[]> {
  try {
    const data = JSON.parse(await fs.readFile(filePath(), 'utf8'));
    return Array.isArray(data) ? data.map((review) => ({ ...review, status: review.status === 'pending' ? 'pending' : 'approved' })) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
}

async function writeJsonReviews(reviews: StoredReview[]) {
  const target = filePath();
  await fs.mkdir(path.dirname(target), { recursive: true });
  const temp = `${target}.${process.pid}.tmp`;
  await fs.writeFile(temp, JSON.stringify(reviews, null, 2), 'utf8');
  await fs.rename(temp, target);
}

// Reviews saved without a database ID get a "json-" ID so they can still be shown and deleted.
export function jsonOnlyId() {
  return `json-${randomUUID()}`;
}

export function appendJsonReview(review: StoredReview) {
  return exclusive(async () => {
    const reviews = await readJsonReviews();
    reviews.push(review);
    await writeJsonReviews(reviews);
  });
}

export function setJsonReviewStatus(id: number | string, status: ReviewStatus) {
  return exclusive(async () => {
    const reviews = await readJsonReviews();
    const review = reviews.find((item) => String(item.id) === String(id));
    if (!review) return false;
    review.status = status;
    await writeJsonReviews(reviews);
    return true;
  });
}

export function deleteJsonReview(id: number | string) {
  return exclusive(async () => {
    const reviews = await readJsonReviews();
    const remaining = reviews.filter((review) => String(review.id) !== String(id));
    if (remaining.length === reviews.length) return false;
    await writeJsonReviews(remaining);
    return true;
  });
}
