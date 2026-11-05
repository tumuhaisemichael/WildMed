'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import UnifiedHero from '@/components/layout/UnifiedHero';

const featuredPhoto = '/assets/recent/imgs/newimage9.jpeg';

type MediaItem = {
  type: 'photo' | 'video';
  src: string;
  title: string;
  location: string;
  /** Still image shown before a video plays (photos use their own src). */
  poster?: string;
  /** Video length in seconds. */
  duration?: number;
  portrait?: boolean;
};

const video = (
  name: string,
  title: string,
  location: string,
  duration: number,
  portrait = false,
): MediaItem => ({
  type: 'video',
  src: `/assets/videos/${name}.mp4`,
  poster: `/assets/videos/posters/${name}.jpg`,
  title,
  location,
  duration,
  portrait,
});

const recentMedia: MediaItem[] = [
  {
    type: 'photo',
    src: featuredPhoto,
    title: 'Quiet giants of the savanna',
    location: 'Queen Elizabeth NP',
  },
  video('queen-elizabeth-bul-bul-lodge-elephant', 'Elephant at Bul Bul Lodge', 'Queen Elizabeth NP', 79),
  video('elephants-sparring', 'Elephants sparring', 'Uganda', 63),
  video('banded-mongooses', 'Morning field encounter', 'Uganda', 37),
  video('crocodile-in-water', 'Crocodile along the bank', 'Uganda', 18),
  video('shoreline-waterbirds', 'Waterbirds on the shoreline', 'Uganda', 17),
  video('boat-ride-fishing-village', 'Boat ride past a fishing village', 'Uganda', 28),
  video('boat-ride-riverbank', 'Along the riverbank', 'Uganda', 11),
  video('bushy-hillside', 'Life in the field', 'East Africa', 12),
  video('gorilla-mother-and-baby', 'Gorilla mother and baby', 'East Africa', 130),
  video('forest-trek-with-rangers', 'Trekking with the rangers', 'Uganda', 80, true),
  video('forest-trek-group', 'Into the forest', 'Uganda', 42, true),
  video('forest-trek-short', 'On the forest trail', 'Uganda', 3, true),
  video('students-forest-walk', 'Students on a forest walk', 'Uganda', 33, true),
  video('forest-road-walk', 'Walking the forest road', 'Uganda', 7),
  video('uganda-tourism-promo', 'Discover Uganda', 'Uganda', 185),
];

const videoCount = recentMedia.filter((item) => item.type === 'video').length;
const photoCount = recentMedia.length - videoCount;

const formatDuration = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2, '0')}`;

const thumbnailOf = (item: MediaItem) => item.poster ?? item.src;

type LightboxState = { items: MediaItem[]; index: number } | null;

function MediaCard({ item, featured, onOpen }: { item: MediaItem; featured: boolean; onOpen: () => void }) {
  const previewRef = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);
  const isVideo = item.type === 'video';

  // Silent preview on hover (mouse only — touch devices just tap to open the player).
  const startPreview = () => {
    const preview = previewRef.current;
    if (!preview) return;
    preview.currentTime = 0;
    preview.play().then(() => setPreviewing(true)).catch(() => {});
  };
  const stopPreview = () => {
    previewRef.current?.pause();
    setPreviewing(false);
  };

  return (
    <article
      className={`gallery-media group relative overflow-hidden border border-white/10 bg-slate-900 ${featured ? 'lg:col-span-2' : ''} ${item.portrait ? 'row-span-2' : ''}`}
    >
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={isVideo ? startPreview : undefined}
        onMouseLeave={isVideo ? stopPreview : undefined}
        onFocus={isVideo ? startPreview : undefined}
        onBlur={isVideo ? stopPreview : undefined}
        className="absolute inset-0 h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sunset-gold"
        aria-label={`${isVideo ? 'Play' : 'Open'} ${item.title}`}
      >
        <Image
          src={thumbnailOf(item)}
          alt={item.title}
          fill
          sizes={featured ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {isVideo && (
          <video
            ref={previewRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${previewing ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

        {isVideo && (
          <>
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-3xl text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-sunset-gold group-hover:bg-sunset-gold group-hover:text-slate-950">
              <i className="ri-play-fill translate-x-[2px]" aria-hidden="true" />
            </span>
            {item.duration !== undefined && (
              <span className="absolute right-4 top-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white backdrop-blur">
                {formatDuration(item.duration)}
              </span>
            )}
          </>
        )}
        {!isVideo && (
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-base backdrop-blur transition group-hover:border-sunset-gold group-hover:bg-sunset-gold group-hover:text-slate-950">
            <i className="ri-fullscreen-line" aria-hidden="true" />
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-sunset-gold">
            <i className={isVideo ? 'ri-video-line' : 'ri-image-line'} aria-hidden="true" />
            {item.type}
          </div>
          <h3 className="headline text-2xl font-bold leading-tight text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-slate-300">
            <i className="ri-map-pin-line mr-1 text-sunset-orange" aria-hidden="true" />
            {item.location}
          </p>
        </div>
      </button>
    </article>
  );
}

function MediaLightbox({ items, index, onClose, onNavigate }: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[index];
  const hasMany = items.length > 1;
  const stripRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (step: number) => onNavigate((index + step + items.length) % items.length),
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight') go(1);
      else if (event.key === 'ArrowLeft') go(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [go, onClose]);

  // Keep the active thumbnail in view.
  useEffect(() => {
    stripRef.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [index]);

  return (
    <div
      className="gallery-lightbox fixed inset-0 z-[100] flex flex-col bg-slate-950/50 backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-sunset-gold">
            <i className={item.type === 'video' ? 'ri-video-line' : 'ri-image-line'} aria-hidden="true" />
            {item.type}
            {hasMany && <span className="text-slate-500">· {index + 1} / {items.length}</span>}
          </div>
          <h3 className="headline mt-1 truncate text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
          <p className="text-xs text-slate-400">
            <i className="ri-map-pin-line mr-1 text-sunset-orange" aria-hidden="true" />
            {item.location}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl transition hover:border-sunset-gold hover:text-sunset-gold"
          aria-label="Close"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(event) => event.target === event.currentTarget && onClose()}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const dx = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (hasMany && Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        }}
      >
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full bg-black shadow-2xl"
          />
        ) : (
          <div className="relative h-full w-full">
            <Image src={item.src} alt={item.title} fill sizes="100vw" className="object-contain" />
          </div>
        )}

        {hasMany && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-2xl backdrop-blur transition hover:border-sunset-gold hover:bg-sunset-gold hover:text-slate-950 sm:flex sm:left-5"
              aria-label="Previous"
            >
              <i className="ri-arrow-left-s-line" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-2xl backdrop-blur transition hover:border-sunset-gold hover:bg-sunset-gold hover:text-slate-950 sm:flex sm:right-5"
              aria-label="Next"
            >
              <i className="ri-arrow-right-s-line" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMany && (
        <div ref={stripRef} className="flex gap-2 overflow-x-auto px-4 py-4 sm:justify-center sm:px-6" aria-label="All media">
          {items.map((thumb, i) => (
            <button
              key={thumb.src}
              type="button"
              data-index={i}
              onClick={() => onNavigate(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 transition sm:h-16 sm:w-24 ${i === index ? 'border-sunset-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-90'}`}
              aria-label={`Show ${thumb.title}`}
              aria-current={i === index}
            >
              <Image src={thumbnailOf(thumb)} alt="" fill sizes="96px" className="object-cover" />
              {thumb.type === 'video' && (
                <i className="ri-play-fill absolute bottom-0.5 left-1 text-sm text-white drop-shadow" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RecentGalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [mediaFilter, setMediaFilter] = useState<'all' | 'photo' | 'video'>('all');
  const visibleMedia = recentMedia.filter(
    (item) => mediaFilter === 'all' || item.type === mediaFilter,
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navigateLightbox = useCallback(
    (index: number) => setLightbox((current) => (current ? { ...current, index } : current)),
    [],
  );

  return (
    <main className="gallery-page min-h-screen overflow-hidden bg-slate-950 text-white">
      <UnifiedHero title={<>Field notes, <span className="block italic text-sunset-gold">fresh from the wild.</span></>} description="Recent wildlife sightings, conservation work, and expedition moments shared by the WildMed team across East Africa." backgroundImage="/assets/heroes/recent-field-hero.png" mainImage="/assets/heroes/recent-field-hero.png" secondaryImage="/assets/8day-uganda-rwanda/day3.png" imageAlt="Wildlife rangers documenting elephants" trustText="Shared by our field team" note="Fresh from East Africa" stats={[{value:String(recentMedia.length),label:'Latest stories',icon:'ri-file-list-3-line'},{value:String(videoCount),label:'Field videos',icon:'ri-video-line'},{value:String(photoCount),label:photoCount === 1 ? 'Photo story' : 'Photo stories',icon:'ri-camera-line'},{value:'Live',label:'Field archive',icon:'ri-signal-wifi-line'}]} actions={<><a href="#latest" className="rounded-2xl bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">View latest dispatch</a><Link href="/gallery" className="rounded-2xl border border-sunset-gold/70 bg-slate-950/30 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-sunset-gold hover:text-slate-950">Open full gallery</Link></>} />

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
              onClick={() => setLightbox({ items: recentMedia, index: 0 })}
              className="group relative min-h-[440px] cursor-zoom-in overflow-hidden text-left sm:min-h-[600px]"
              aria-label="Open photograph in full screen"
            >
              <Image
                src={featuredPhoto}
                alt="Two elephants grazing in Queen Elizabeth National Park"
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
              <p className="mt-5 leading-7 text-slate-400">A living feed of photographs and short videos from our newest expeditions. Tap any clip to watch it full screen.</p>
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

          <div className="mt-12 grid grid-flow-row-dense auto-rows-[300px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleMedia.map((item, index) => (
              <MediaCard
                key={item.src}
                item={item}
                featured={index === 0 && mediaFilter === 'all'}
                onOpen={() => setLightbox({ items: visibleMedia, index })}
              />
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

      {lightbox && (
        <MediaLightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </main>
  );
}
