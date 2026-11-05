'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UnifiedHero from '@/components/layout/UnifiedHero';

const collections = [
  { name: 'Wildlife', icon: 'ri-bear-smile-line' },
  { name: 'Conservation', icon: 'ri-leaf-line' },
  { name: 'Field work', icon: 'ri-microscope-line' },
];

const PAGE_SIZE = 9;
const layoutPattern = ['md:col-span-2 md:row-span-2', '', '', 'md:row-span-2', '', 'md:col-span-2', '', '', ''];

const galleryItems = [
  { title: 'Quiet giants', category: 'Wildlife', location: 'Queen Elizabeth NP', image: '/assets/8day-luxury/queen-elizabeth-elephants.jpg' },
  { title: 'Across the open plains', category: 'Landscapes', location: 'Murchison Falls NP', image: '/assets/14day-luxury/murchison-sunrise.jpg' },
  { title: 'Morning on the river', category: 'Field work', location: 'Uganda', image: '/assets/programs/biological/cta-river-team.jpg' },
  { title: 'Conservation in action', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-02.jpg' },
  { title: 'Among the wild', category: 'Wildlife', location: 'Bwindi', image: '/assets/3day-gorilla/bwindi-gorilla-juvenile.jpg' },
  { title: 'Golden-hour encounter', category: 'Wildlife', location: 'Queen Elizabeth NP', image: '/assets/14day-luxury/queen-elizabeth-lion-kob.jpg' },
  { title: 'Caring for the wild', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/hero-lioness-procedure.jpg' },
  { title: 'A landscape alive', category: 'Landscapes', location: 'Murchison Falls', image: '/assets/8day-uganda-rwanda/murchison-falls.jpg' },
  { title: 'The road into the wild', category: 'Expedition', location: 'Uganda', image: '/assets/7day-rwanda-uganda/8day8.jpg' },
  { title: 'Forest kin', category: 'Wildlife', location: 'Kibale Forest', image: '/assets/4day-express/kibale-chimpanzee.jpg' },
  { title: 'Guardians of Ziwa', category: 'Wildlife', location: 'Ziwa Rhino Sanctuary', image: '/assets/8day-uganda-rwanda/ziwa-rhinos.jpg' },
  { title: 'Reading the river', category: 'Field work', location: 'Uganda', image: '/assets/programs/biological/archive-02.jpg' },
  { title: 'Rothschild’s giraffe', category: 'Wildlife', location: 'Murchison Falls NP', image: '/assets/8day-uganda-rwanda/murchison-giraffe.jpg' },
  { title: 'Under the microscope', category: 'Field work', location: 'Field laboratory', image: '/assets/programs/biological/archive-05.jpg' },
  { title: 'Giraffe health check', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-01.jpg' },
  { title: 'Kazinga Channel', category: 'Wildlife', location: 'Queen Elizabeth NP', image: '/assets/5day-holiday/kazinga-hippo-yawn.jpg' },
  { title: 'Small mammal survey', category: 'Field work', location: 'Uganda', image: '/assets/programs/biological/archive-03.jpg' },
  { title: 'Stripes of Mburo', category: 'Wildlife', location: 'Lake Mburo NP', image: '/assets/7day-rwanda-uganda/lake-mburo-zebras.jpg' },
  { title: 'Lessons with rangers', category: 'Conservation', location: 'Uganda', image: '/assets/programs/biological/experience-community-education.jpg' },
  { title: 'Lions of Ishasha', category: 'Wildlife', location: 'Ishasha', image: '/assets/8day-uganda-rwanda/ishasha-lion.jpg' },
  { title: 'Measuring what matters', category: 'Field work', location: 'Uganda', image: '/assets/programs/biological/methods-biometrics.jpg' },
  { title: 'Virunga skyline', category: 'Landscapes', location: 'Kisoro', image: '/assets/6day-kisoro/virunga-volcano.jpg' },
  { title: 'A careful capture', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-05.jpg' },
  { title: 'Face of the forest', category: 'Wildlife', location: 'Bwindi', image: '/assets/4day-flyin-primate/bwindi-gorilla-closeup.jpg' },
  { title: 'Learning in the lab', category: 'Field work', location: 'Uganda', image: '/assets/programs/biological/experience-research-lab.jpg' },
  { title: 'Nile crocodile', category: 'Wildlife', location: 'Murchison Falls NP', image: '/assets/8day-uganda-rwanda/murchison-crocodile.jpg' },
  { title: 'Livestock health clinic', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-10.jpg' },
  { title: 'Lakeshore fieldwork', category: 'Field work', location: 'Uganda', image: '/assets/programs/professional/cta-lakeshore-fieldwork.jpg' },
  { title: 'Golden monkey', category: 'Wildlife', location: 'Volcanoes NP', image: '/img/Destination/rwanda/golden-monkey.jpg' },
  { title: 'Rhythms of Uganda', category: 'Culture', location: 'Kampala', image: '/assets/14day-luxury/kampala-cultural-dance.jpg' },
  { title: 'Small patients', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-07.jpg' },
  { title: 'Community clinic', category: 'Field work', location: 'Uganda', image: '/assets/programs/medical/hero-community-clinic.jpg' },
  { title: 'Hands-on husbandry', category: 'Conservation', location: 'Uganda', image: '/assets/programs/veterinary/gallery-06.jpg' },
  { title: 'Ward rounds', category: 'Field work', location: 'Uganda', image: '/assets/programs/medical/program-hospital-visits.jpg' },
  { title: 'On the Equator', category: 'Expedition', location: 'Uganda', image: '/assets/programs/study-abroad/gallery-06.jpg' },
  { title: 'Evening on the lake', category: 'Landscapes', location: 'Uganda', image: '/assets/5day-holiday/lake-sunset.jpg' },
];

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
      <UnifiedHero title={<>Stories written <span className="block italic text-sunset-gold">in the wild.</span></>} description="An evolving visual record of wildlife, conservation, research, and the people who make every expedition meaningful." backgroundImage="/assets/heroes/gallery-conservation-hero.png" mainImage="/assets/heroes/gallery-conservation-hero.png" secondaryImage="/assets/14day-luxury/luxury2.png" imageAlt="Responsible gorilla photography in Uganda" trustText="Captured across East Africa" note="Every image has a story" stats={[{value:String(galleryItems.length),label:'Field moments',icon:'ri-camera-3-line'},{value:'3',label:'Collections',icon:'ri-gallery-line'},{value:'4',label:'Countries',icon:'ri-earth-line'},{value:'1',label:'Shared purpose',icon:'ri-leaf-line'}]} actions={<><a href="#archive" className="rounded-2xl bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">Explore the archive</a><Link href="/recentgallery" className="rounded-2xl border border-sunset-gold/70 bg-slate-950/30 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-sunset-gold hover:text-slate-950">See recent moments</Link></>} />

      <section id="archive" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Browse by story</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">One archive.<br />Many perspectives.</h2></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {collections.map((collection, index) => (
                <div key={collection.name} className={'bg-slate-950 p-6 ' + (index === 0 ? 'border-b-2 border-sunset-gold sm:border-b-0 sm:border-t-2' : '')}>
                  <i className={collection.icon + ' text-2xl text-sunset-gold'} aria-hidden="true" />
                  <h3 className="mt-5 font-bold text-white">{collection.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{String(galleryItems.filter((item) => item.category === collection.name).length).padStart(2, '0')} photographs</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid auto-rows-[260px] gap-4 sm:auto-rows-[300px] md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, visibleCount).map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => { setActiveIndex(index); setIsLightboxOpen(true); }}
                className={'gallery-media group relative min-h-[260px] cursor-zoom-in overflow-hidden border border-white/10 text-left ' + layoutPattern[index % PAGE_SIZE]}
                aria-label={'Open ' + item.title}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
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
            <p className="max-w-xl text-sm leading-6 text-slate-400">Every frame was taken on a WildMed expedition or field programme. Select any photograph to view it full size.</p>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-sunset-gold">Showing {Math.min(visibleCount, galleryItems.length)} of {galleryItems.length} moments</span>
          </div>

          {visibleCount < galleryItems.length && (
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="inline-flex items-center gap-2 border border-sunset-gold/70 px-8 py-4 font-black text-white transition hover:bg-sunset-gold hover:text-slate-950">
                Load more <i className="ri-arrow-down-line" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="gallery-cta border-y border-white/10 bg-slate-900/70 px-6 py-20 text-center sm:px-8">
        <div className="mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Beyond the photograph</p><h2 className="headline mt-4 text-4xl font-bold text-white sm:text-5xl">Experience the story yourself</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Travel with the guides, researchers, and conservation professionals behind these field moments.</p><Link href="/Custom-Safaris" className="mt-9 inline-block bg-sunset-gold px-8 py-4 font-black text-slate-950 transition hover:bg-white">Plan your expedition</Link></div>
      </section>

      {isLightboxOpen && (
        <div className="gallery-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-lg" role="dialog" aria-modal="true" aria-label="Expanded gallery photograph" onClick={() => setIsLightboxOpen(false)}>
          <button type="button" onClick={() => setIsLightboxOpen(false)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white hover:border-sunset-gold hover:text-sunset-gold" aria-label="Close photograph"><i className="ri-close-line" aria-hidden="true" /></button>
          <div className="relative h-[84vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={galleryItems[activeIndex].image} alt={galleryItems[activeIndex].title} fill sizes="100vw" className="object-contain" /></div>
        </div>
      )}
    </main>
  );
}
