'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const testImage =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

type MediaItem = {
  type: 'photo' | 'video';
  src: string;
  title: string;
  location: string;
};

const recentMedia: MediaItem[] = [
  {
    type: 'photo',
    src: testImage,
    title: 'Quiet giants of the savanna',
    location: 'East Africa',
  },
  {
    type: 'video',
    src: '/assets/recent/clips/WhatsApp Video 2026-01-29 at 8.28.23 AM.mp4',
    title: 'Morning field encounter',
    location: 'Uganda',
  },
  {
    type: 'video',
    src: '/assets/recent/clips/WhatsApp Video 2026-01-29 at 8.34.30 AM (1).mp4',
    title: 'On the conservation trail',
    location: 'Uganda',
  },
  {
    type: 'video',
    src: '/assets/recent/clips/WhatsApp Video 2026-01-29 at 8.35.37 AM.mp4',
    title: 'Life in the field',
    location: 'East Africa',
  },
];

export default function RecentGalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mediaFilter, setMediaFilter] = useState<'all' | 'photo' | 'video'>('all');
  const visibleMedia = recentMedia.filter(
    (item) => mediaFilter === 'all' || item.type === mediaFilter,
  );

  useEffect(() => {
    if (!isLightboxOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLightboxOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isLightboxOpen]);

  return (
    <main className="gallery-page min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="gallery-hero relative isolate min-h-[82vh] overflow-hidden">
        <Image
          src={testImage}
          alt="Elephant walking through the East African wilderness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/45" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-16 pt-36 sm:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-sunset-gold">
              <span className="h-px w-10 bg-sunset-gold" />
              Latest from the field
            </div>
            <h1 className="headline text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Field notes,
              <span className="block italic text-sunset-gold">fresh from the wild.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Recent wildlife sightings, conservation work, and expedition moments
              shared by the WildMed team across East Africa.
            </p>
            <a
              href="#latest"
              className="mt-9 inline-flex items-center gap-3 border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur-md transition hover:border-sunset-gold hover:bg-sunset-gold hover:text-slate-950"
            >
              View latest dispatch
              <i className="ri-arrow-down-line text-lg" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden items-center gap-5 border-l border-white/25 pl-5 text-xs text-slate-300 md:flex">
          <span><i className="ri-map-pin-line mr-2 text-sunset-orange" />East Africa</span>
          <span><i className="ri-camera-3-line mr-2 text-sunset-orange" />Field archive</span>
        </div>
      </section>

      <section id="latest" className="relative px-6 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-sunset-orange/10 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Dispatch 001</p>
              <h2 className="headline text-4xl font-bold sm:text-5xl">A moment on the trail</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              One test photograph is being used in this first layout. The same
              component can later render a complete expedition collection.
            </p>
          </div>

          <article className="grid overflow-hidden border border-white/10 bg-slate-900 shadow-2xl lg:grid-cols-[1.5fr_0.7fr]">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="group relative min-h-[440px] cursor-zoom-in overflow-hidden text-left sm:min-h-[600px]"
              aria-label="Open photograph in full screen"
            >
              <Image
                src={testImage}
                alt="Elephant walking through the East African wilderness"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/35 text-xl backdrop-blur-md transition group-hover:border-sunset-gold group-hover:bg-sunset-gold group-hover:text-slate-950">
                <i className="ri-fullscreen-line" aria-hidden="true" />
              </span>
            </button>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-sunset-gold/30 bg-sunset-gold/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-sunset-gold">Wildlife</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-400">Recent</span>
                </div>
                <h3 className="headline mt-8 text-3xl font-bold leading-tight">Quiet giants of the savanna</h3>
                <p className="mt-5 leading-7 text-slate-400">
                  A calm encounter on the open plains—one of those moments when
                  the landscape asks everyone to slow down and simply observe.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500">Location</dt>
                  <dd className="mt-2 font-bold text-white">East Africa</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500">Collection</dt>
                  <dd className="mt-2 font-bold text-white">Field moments</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-slate-950 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Recent media</p>
              <h2 className="headline text-4xl font-bold sm:text-5xl">Photos and clips from the field</h2>
              <p className="mt-5 leading-7 text-slate-400">A living feed of photographs and short videos from our newest expeditions.</p>
            </div>

            <div className="flex w-fit rounded-full border border-white/10 bg-white/5 p-1" aria-label="Filter recent media">
              {(['all', 'photo', 'video'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setMediaFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${mediaFilter === filter ? 'bg-sunset-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  {filter === 'all' ? 'All media' : filter === 'photo' ? 'Photos' : 'Clips'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid auto-rows-[320px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleMedia.map((item, index) => (
              <article
                key={`${item.type}-${item.src}`}
                className={`gallery-media group relative overflow-hidden border border-white/10 bg-slate-900 ${index === 0 && mediaFilter === 'all' ? 'lg:col-span-2' : ''}`}
              >
                {item.type === 'photo' ? (
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute inset-0 h-full w-full cursor-zoom-in text-left"
                    aria-label={`Open ${item.title}`}
                  >
                    <Image src={item.src} alt={item.title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </button>
                ) : (
                  <video className="absolute inset-0 h-full w-full object-cover" controls preload="metadata">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                )}

                <div className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 pt-16 ${item.type === 'video' ? 'opacity-0 transition group-hover:opacity-100' : ''}`}>
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-sunset-gold">
                    <i className={item.type === 'photo' ? 'ri-image-line' : 'ri-video-line'} aria-hidden="true" />
                    {item.type}
                  </div>
                  <h3 className="headline text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-300"><i className="ri-map-pin-line mr-1 text-sunset-orange" />{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta border-y border-white/10 bg-slate-900/70 px-6 py-20 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Step into the story</p>
          <h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Capture your own field moment</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Join a safari, research expedition, or professional field programme
            designed around meaningful encounters.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/Custom-Safaris" className="bg-sunset-gold px-7 py-3.5 font-black text-slate-950 transition hover:bg-white">Plan an expedition</Link>
            <Link href="/gallery" className="border border-white/20 px-7 py-3.5 font-black transition hover:border-sunset-gold hover:text-sunset-gold">Browse the archive</Link>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="gallery-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded field photograph"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl transition hover:border-sunset-gold hover:text-sunset-gold"
            aria-label="Close photograph"
          >
            <i className="ri-close-line" aria-hidden="true" />
          </button>
          <div className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={testImage}
              alt="Elephant walking through the East African wilderness"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
