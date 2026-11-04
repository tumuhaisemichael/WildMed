"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/Skeleton';

type Testimonial = { name: string; role: string; text: string; rating: number };
type ApiReview = { name: string; tripType: string; review: string; rating: number };

const MAX_TESTIMONIALS = 5;
const DEFAULT_AVATAR = '/img/default-avatar.svg';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  // Published (approved) reviews only; highest rated first, newest first within a rating.
  useEffect(() => {
    fetch('/api/reviews', { cache: 'no-store' })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        const reviews = [...(data.reviews as ApiReview[])].sort((a, b) => b.rating - a.rating).slice(0, MAX_TESTIMONIALS);
        setTestimonials(reviews.map((review) => ({ name: review.name, role: review.tripType, text: review.review, rating: review.rating })));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const scroll = (dir: number) => {
    if (!testimonials.length) return;
    setActive((current) => (current + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length < 2) return;
    const interval = setInterval(() => scroll(1), 6000);
    return () => clearInterval(interval);
  }, [active, testimonials.length]);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sunset-purple/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-brown/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-3">
            What Our Clients Say
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-white">Stories from the Field</h2>
          <p className="text-gray-400 text-lg">Real experiences from travellers, researchers, and professionals</p>
        </div>

        {loading && (
          <div className="rounded-3xl border border-sunset-brown/20 bg-slate-800/60 p-10">
            <Skeleton className="h-4 w-24" /><Skeleton className="mt-6 h-5 w-full" /><Skeleton className="mt-3 h-5 w-4/5" /><Skeleton className="mt-8 h-4 w-40" />
          </div>
        )}

        {!loading && !t && (
          <div className="rounded-3xl border border-dashed border-sunset-brown/30 bg-slate-800/40 p-10 text-center">
            <i className="ri-chat-quote-line text-4xl text-sunset-gold/60" />
            <p className="headline mt-4 text-2xl font-bold text-white">Be the first to share your story</p>
            <p className="mx-auto mt-3 max-w-xl text-gray-400">Travelled, studied, or worked in the field with WildMed? Your experience helps the next traveller.</p>
            <Link href="/Review#share-your-story" className="mt-7 inline-block rounded-full bg-sunset-gold px-7 py-3 font-bold text-slate-950 transition hover:bg-white">Write a review</Link>
          </div>
        )}

        {!loading && t && <>
        {/* Testimonial card */}
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-3xl p-10 border border-sunset-brown/20 shadow-2xl transition-all duration-500">
          {/* Quote mark */}
          <i className="ri-double-quotes-l text-6xl text-sunset-gold/20 absolute top-6 left-8 leading-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-sunset-gold/40 shadow-lg">
                <img src={DEFAULT_AVATAR} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-sunset-gold text-sm" />
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sunset-honey text-sm">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === active ? 'w-8 bg-sunset-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full border border-sunset-brown/40 hover:border-sunset-gold text-gray-400 hover:text-sunset-gold flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-sunset-brown/40 hover:border-sunset-gold text-gray-400 hover:text-sunset-gold flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {testimonials
            .filter((_, idx) => idx !== active)
            .slice(0, 4)
            .map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActive(testimonials.indexOf(t))}
                className="group text-left p-4 rounded-2xl bg-slate-800/50 border border-sunset-brown/10 hover:border-sunset-gold/30 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={DEFAULT_AVATAR} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 truncate group-hover:text-sunset-honey transition-colors">{t.name}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">"{t.text}"</p>
              </button>
            ))}
        </div>
        </>}
      </div>
    </section>
  );
};

export default Testimonials;
