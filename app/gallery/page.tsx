'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const galleryImage =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const collections = [
  { name: 'Wildlife', count: '12 photographs', icon: 'ri-bear-smile-line' },
  { name: 'Conservation', count: '08 photographs', icon: 'ri-leaf-line' },
  { name: 'Field work', count: '10 photographs', icon: 'ri-microscope-line' },
];

const galleryItems = [
  { title: 'Quiet giants', category: 'Wildlife', location: 'East Africa', layout: 'md:col-span-2 md:row-span-2' },
  { title: 'Across the open plains', category: 'Landscapes', location: 'Serengeti', layout: '' },
  { title: 'Morning on the trail', category: 'Field work', location: 'Uganda', layout: '' },
  { title: 'Conservation in action', category: 'Conservation', location: 'Rwanda', layout: 'md:row-span-2' },
  { title: 'Among the wild', category: 'Wildlife', location: 'Kenya', layout: '' },
  { title: 'Golden-hour encounter', category: 'Wildlife', location: 'Tanzania', layout: 'md:col-span-2' },
  { title: 'Following the tracks', category: 'Field work', location: 'Uganda', layout: '' },
  { title: 'A landscape alive', category: 'Landscapes', location: 'East Africa', layout: '' },
  { title: 'The road into the wild', category: 'Expedition', location: 'East Africa', layout: '' },
];

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      <section className="gallery-hero relative isolate min-h-[88vh] overflow-hidden">
        <Image src={galleryImage} alt="Elephant in the East African wilderness" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold"><span className="h-px w-10 bg-sunset-gold" />The WildMed archive</p>
            <h1 className="headline text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">Stories written<span className="block italic text-sunset-gold">in the wild.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">An evolving visual record of wildlife, conservation, research, and the people who make every expedition meaningful.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#archive" className="bg-sunset-gold px-7 py-3.5 text-center text-sm font-black text-slate-950 transition hover:bg-white">Explore the archive</a>
              <Link href="/recentgallery" className="border border-white/25 bg-white/10 px-7 py-3.5 text-center text-sm font-black text-white backdrop-blur transition hover:border-sunset-gold hover:text-sunset-gold">See recent moments</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="archive" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Browse by story</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">One archive.<br />Many perspectives.</h2></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {collections.map((collection, index) => (
                <div key={collection.name} className={'bg-slate-950 p-6 ' + (index === 0 ? 'border-b-2 border-sunset-gold sm:border-b-0 sm:border-t-2' : '')}>
                  <i className={collection.icon + ' text-2xl text-sunset-gold'} aria-hidden="true" />
                  <h3 className="mt-5 font-bold text-white">{collection.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{collection.count}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid auto-rows-[260px] gap-4 sm:auto-rows-[300px] md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className={'gallery-media group relative min-h-[260px] cursor-zoom-in overflow-hidden border border-white/10 text-left ' + item.layout}
                aria-label={'Open ' + item.title}
              >
                <Image
                  src={galleryImage}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                  className={'object-cover transition duration-700 group-hover:scale-105 ' + (index % 3 === 1 ? 'object-left' : index % 3 === 2 ? 'object-right' : 'object-center')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent transition group-hover:from-black/95" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-300 group-hover:translate-y-0 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sunset-gold">{item.category} · {item.location}</p>
                      <h3 className="headline mt-2 text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><i className="ri-fullscreen-line" aria-hidden="true" /></span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-slate-400">The repeated photograph is a placeholder. Each card already supports its own image source, title, category, and location.</p>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-sunset-gold">Showing 9 of 30 moments</span>
          </div>
        </div>
      </section>

      <section className="gallery-cta border-y border-white/10 bg-slate-900/70 px-6 py-20 text-center sm:px-8">
        <div className="mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Beyond the photograph</p><h2 className="headline mt-4 text-4xl font-bold text-white sm:text-5xl">Experience the story yourself</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Travel with the guides, researchers, and conservation professionals behind these field moments.</p><Link href="/Custom-Safaris" className="mt-9 inline-block bg-sunset-gold px-8 py-4 font-black text-slate-950 transition hover:bg-white">Plan your expedition</Link></div>
      </section>

      {isLightboxOpen && (
        <div className="gallery-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Expanded gallery photograph" onClick={() => setIsLightboxOpen(false)}>
          <button type="button" onClick={() => setIsLightboxOpen(false)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white hover:border-sunset-gold hover:text-sunset-gold" aria-label="Close photograph"><i className="ri-close-line" aria-hidden="true" /></button>
          <div className="relative h-[84vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={galleryImage} alt="Elephant in the East African wilderness" fill sizes="100vw" className="object-contain" /></div>
        </div>
      )}
    </main>
  );
}
