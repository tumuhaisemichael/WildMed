'use client';

import { FormEvent, useEffect, useState } from 'react';

type Review = { id: number; name: string; tripType: string; review: string; rating: number; createdAt: string };

export default function AdminReviewsPage() {
  const [token, setToken] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
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
    } catch (err) { setReviews([]); setError(err instanceof Error ? err.message : 'Unable to load reviews.'); }
    finally { setLoading(false); }
  };

  const removeReview = async (review: Review) => {
    if (!window.confirm(`Remove the review from ${review.name}? This cannot be undone.`)) return;
    setError('');
    const response = await fetch(`/api/reviews/${review.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    const data = await response.json();
    if (!response.ok) { setError(data.error || 'Unable to delete review.'); return; }
    setReviews((current) => current.filter((item) => item.id !== review.id));
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Private administration</p>
        <h1 className="headline mt-3 text-4xl font-bold sm:text-6xl">Manage traveler reviews</h1>
        <p className="mt-4 max-w-2xl text-slate-400">Reviews appear publicly as soon as they are submitted. Use this page to remove inappropriate, duplicate, or unwanted entries.</p>

        <form onSubmit={loadReviews} className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900 p-5 sm:flex-row">
          <label className="flex-1 text-xs font-bold uppercase tracking-wider text-slate-400">Admin token<input type="password" value={token} onChange={(event) => setToken(event.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sunset-gold" /></label>
          <button disabled={loading} className="self-end rounded-xl bg-sunset-gold px-7 py-3 font-black text-slate-950 disabled:opacity-60">{loading ? 'Loading…' : 'Open reviews'}</button>
        </form>
        {error && <p role="alert" className="mt-5 max-w-2xl rounded-xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-sm text-red-300">{error}</p>}

        <div className="mt-10 space-y-4">
          {reviews.map((review) => <article key={review.id} className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900 p-6 md:grid-cols-[1fr_auto] md:items-start"><div><div className="flex flex-wrap items-center gap-3"><h2 className="headline text-2xl font-bold">{review.name}</h2><span className="rounded-full border border-sunset-gold/30 px-3 py-1 text-xs text-sunset-gold">{review.tripType}</span><span className="text-sm text-sunset-gold" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span></div><p className="mt-4 leading-7 text-slate-300">{review.review}</p><p className="mt-4 text-xs text-slate-500">Submitted {new Date(review.createdAt).toLocaleString()}</p></div><button onClick={() => removeReview(review)} className="rounded-xl border border-red-400/25 bg-red-400/10 px-5 py-3 text-sm font-bold text-red-300 hover:bg-red-400 hover:text-slate-950"><i className="ri-delete-bin-line mr-2" />Remove</button></article>)}
          {!loading && token && !error && reviews.length === 0 && <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-slate-400">No reviews are currently stored.</div>}
        </div>
      </div>
    </main>
  );
}
