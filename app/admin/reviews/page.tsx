'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

type ReviewStatus = 'pending' | 'approved';
type Review = { id: number | string; name: string; tripType: string; review: string; rating: number; status: ReviewStatus; createdAt: string };
type Filter = 'pending' | 'approved' | 'all';

const filters: { value: Filter; label: string }[] = [
  { value: 'pending', label: 'Awaiting approval' },
  { value: 'approved', label: 'Published' },
  { value: 'all', label: 'All' },
];

export default function AdminReviewsPage() {
  const [token, setToken] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState<number | string | null>(null);
  const [filter, setFilter] = useState<Filter>('pending');
  const [error, setError] = useState('');

  useEffect(() => { setToken(sessionStorage.getItem('wildmed-review-token') || ''); }, []);

  const loadReviews = async (event?: FormEvent) => {
    event?.preventDefault(); setLoading(true); setError('');
    try {
      const response = await fetch('/api/reviews?admin=1', { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to load reviews.');
      sessionStorage.setItem('wildmed-review-token', token);
      setReviews(data.reviews);
      setLoaded(true);
    } catch (err) { setReviews([]); setLoaded(false); setError(err instanceof Error ? err.message : 'Unable to load reviews.'); }
    finally { setLoading(false); }
  };

  const setStatus = async (review: Review, status: ReviewStatus) => {
    setError(''); setBusyId(review.id);
    try {
      const response = await fetch(`/api/reviews/${review.id}`, { method: 'PATCH', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to update review.');
      setReviews((current) => current.map((item) => (item.id === review.id ? { ...item, status } : item)));
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to update review.'); }
    finally { setBusyId(null); }
  };

  const removeReview = async (review: Review) => {
    if (!window.confirm(`Remove the review from ${review.name}? This cannot be undone.`)) return;
    setError(''); setBusyId(review.id);
    try {
      const response = await fetch(`/api/reviews/${review.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to delete review.');
      setReviews((current) => current.filter((item) => item.id !== review.id));
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to delete review.'); }
    finally { setBusyId(null); }
  };

  const counts = { pending: reviews.filter((item) => item.status === 'pending').length, approved: reviews.filter((item) => item.status === 'approved').length, all: reviews.length };
  const visible = filter === 'all' ? reviews : reviews.filter((item) => item.status === filter);

  return (
    <main className="min-h-screen bg-slate-950 px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Private administration</p>
        <h1 className="headline mt-3 text-4xl font-bold sm:text-6xl">Manage traveler reviews</h1>
        <p className="mt-4 max-w-2xl text-slate-400">New reviews stay hidden until you approve them. Approve to publish a review, hide it to take it off the site again, or remove it permanently.</p>

        <form onSubmit={loadReviews} className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900 p-5 sm:flex-row">
          <label className="flex-1 text-xs font-bold uppercase tracking-wider text-slate-400">Admin token<input type="password" value={token} onChange={(event) => setToken(event.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sunset-gold" /></label>
          <button disabled={loading} className="self-end rounded-xl bg-sunset-gold px-7 py-3 font-black text-slate-950 disabled:opacity-60">{loading ? <Skeleton className="h-5 w-24 bg-slate-950/25" /> : loaded ? 'Refresh' : 'Open reviews'}</button>
        </form>
        {error && <p role="alert" className="mt-5 max-w-2xl rounded-xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-sm text-red-300">{error}</p>}

        {loaded && (
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter reviews">
            {filters.map((item) => (
              <button key={item.value} role="tab" aria-selected={filter === item.value} onClick={() => setFilter(item.value)} className={`rounded-full border px-5 py-2 text-sm font-bold transition ${filter === item.value ? 'border-sunset-gold bg-sunset-gold text-slate-950' : 'border-white/15 text-slate-300 hover:border-sunset-gold'}`}>
                {item.label} <span className="ml-1 opacity-70">{counts[item.value]}</span>
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4">
          {loading && [0, 1, 2].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-6"><Skeleton className="h-7 w-48" /><Skeleton className="mt-5 h-4 w-full" /><Skeleton className="mt-3 h-4 w-4/5" /><Skeleton className="mt-6 h-3 w-32" /></div>)}
          {!loading && visible.map((review) => (
            <article key={review.id} className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900 p-6 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="headline text-2xl font-bold">{review.name}</h2>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${review.status === 'approved' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-amber-400/15 text-amber-300'}`}>{review.status === 'approved' ? 'Published' : 'Awaiting approval'}</span>
                  <span className="rounded-full border border-sunset-gold/30 px-3 py-1 text-xs text-sunset-gold">{review.tripType}</span>
                  <span className="text-sm text-sunset-gold" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                </div>
                <p className="mt-4 whitespace-pre-line leading-7 text-slate-300">{review.review}</p>
                <p className="mt-4 text-xs text-slate-500">Submitted {new Date(review.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:flex-col">
                {review.status === 'pending'
                  ? <button disabled={busyId === review.id} onClick={() => setStatus(review, 'approved')} className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-300 disabled:opacity-60"><i className="ri-check-line mr-2" />Approve</button>
                  : <button disabled={busyId === review.id} onClick={() => setStatus(review, 'pending')} className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-slate-200 hover:border-sunset-gold disabled:opacity-60"><i className="ri-eye-off-line mr-2" />Hide</button>}
                <button disabled={busyId === review.id} onClick={() => removeReview(review)} className="rounded-xl border border-red-400/25 bg-red-400/10 px-5 py-3 text-sm font-bold text-red-300 hover:bg-red-400 hover:text-slate-950 disabled:opacity-60"><i className="ri-delete-bin-line mr-2" />Remove</button>
              </div>
            </article>
          ))}
          {!loading && loaded && visible.length === 0 && <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-slate-400">{filter === 'pending' ? 'No reviews are waiting for approval.' : filter === 'approved' ? 'No reviews are published yet.' : 'No reviews are currently stored.'}</div>}
        </div>
      </div>
    </main>
  );
}
