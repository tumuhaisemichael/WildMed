'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const placeholder =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const safaris = [
  { days: 3, title: '3-Day Gorilla Trekking', category: 'Short Adventure', place: 'Bwindi, Uganda', href: '/Ugandan-3Days', description: 'A focused escape into Bwindi’s rainforest for a once-in-a-lifetime gorilla encounter.', highlights: ['Gorilla trekking', 'Rainforest lodge', 'Private guide'] },
  { days: 4, title: '4-Day Uganda Express', category: 'Short Adventure', place: 'Western Uganda', href: '/Ugandan-4Days', description: 'A quick blend of rainforest trekking and Uganda’s signature wildlife moments.', highlights: ['Game drive', 'Boat safari', 'Wildlife'] },
  { days: 4, title: '4-Day Luxury Fly-in', category: 'Luxury', place: 'Bwindi, Uganda', href: '/Ugandan-4Days2', description: 'Aerial transfers and premium jungle lodges near mountain gorilla habitats.', highlights: ['Fly-in transfer', 'Luxury lodge', 'Gorillas'] },
  { days: 5, title: '5-Day Best of Kisoro', category: 'Explorer', place: 'Kisoro, Uganda', href: '/Ugandan-5-Days', description: 'Gorilla trekking, scenic lake districts, and meaningful cultural encounters.', highlights: ['Gorillas', 'Lake Mutanda', 'Culture'] },
  { days: 5, title: '5-Day Short Holiday', category: 'Explorer', place: 'Uganda', href: '/Ugandan-5Days', description: 'A balanced itinerary for travelers who want both gorillas and open landscapes.', highlights: ['Primates', 'Landscapes', 'Safari'] },
  { days: 6, title: '6-Day Kisoro Adventure', category: 'Explorer', place: 'Southwestern Uganda', href: '/Ugandan-6Days2', description: 'Extended gorilla trekking with wildlife drives and cultural immersion.', highlights: ['Gorillas', 'Community', 'Game drive'] },
  { days: 7, title: '7-Day Rwanda Explorer', category: 'Explorer', place: 'Rwanda', href: '/Rwanda-7-Days', description: 'Volcanoes, Nyungwe, and Kigali culture in one primate-focused journey.', highlights: ['Volcanoes', 'Nyungwe', 'Kigali'] },
  { days: 8, title: '8-Day Chimps & Gorillas', category: 'Grand Tour', place: 'Uganda', href: '/Ugandan-8days', description: 'The classic primate combination with rainforest trekking and savanna wildlife.', highlights: ['Chimpanzees', 'Gorillas', 'Savanna'] },
  { days: 8, title: '8-Day Uganda & Rwanda', category: 'Grand Tour', place: 'Uganda + Rwanda', href: '/Ugandan-8days2', description: 'A cross-border journey through rainforests, crater lakes, and gorilla country.', highlights: ['Two countries', 'Gorillas', 'Crater lakes'] },
  { days: 8, title: '8-Day Luxury Big Five', category: 'Luxury', place: 'Uganda', href: '/Ugandan-8days3', description: 'Luxury lodges, private game drives, and iconic Big Five encounters.', highlights: ['Big Five', 'Private drives', 'Luxury'] },
  { days: 11, title: '11-Day Uganda & Rwanda', category: 'Grand Tour', place: 'Uganda + Rwanda', href: '/Ugandan-11-Days', description: 'An extended cross-border journey blending primates, savannas, and culture.', highlights: ['Primates', 'Savanna', 'Culture'] },
  { days: 11, title: '11-Day Luxury Safari', category: 'Luxury', place: 'Uganda', href: '/Ugandan-11Days', description: 'High-end lodges, private guides, and curated wildlife moments across Uganda.', highlights: ['Private guide', 'Fine lodges', 'Wildlife'] },
  { days: 14, title: '14-Day Luxury Safari', category: 'Luxury', place: 'East Africa', href: '/Ugandan-14-Days', description: 'The ultimate East African journey with premium lodges and Big Five experiences.', highlights: ['Grand circuit', 'Big Five', 'Premium stays'] },
];

type Safari = (typeof safaris)[number];

function SafariCard({ safari, onOpenImage }: { safari: Safari; onOpenImage: () => void }) {
  const images = [placeholder, placeholder, placeholder];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="overflow-hidden border border-white/10 bg-slate-900 shadow-xl transition duration-500 hover:-translate-y-1 hover:border-sunset-gold/35 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
      <div className="gallery-media grid h-64 grid-cols-[1.75fr_0.8fr] gap-1 bg-slate-950 p-1">
        <button type="button" onClick={onOpenImage} className="relative overflow-hidden text-left" aria-label={'View full image for ' + safari.title}>
          <Image src={images[activeImage]} alt={safari.title} fill sizes="(min-width: 1024px) 34vw, 70vw" className={'object-cover transition duration-500 ' + (activeImage === 1 ? 'object-left' : activeImage === 2 ? 'object-right' : 'object-center')} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-sunset-gold px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">{safari.days} days</span>
            <span className="rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur">{safari.category}</span>
          </div>
          <p className="absolute bottom-4 left-4 text-xs font-bold text-white"><i className="ri-map-pin-line mr-1 text-sunset-gold" />{safari.place}</p>
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><i className="ri-fullscreen-line" /></span>
        </button>
        <div className="grid grid-rows-2 gap-1">
          {[1, 2].map((imageIndex) => (
            <button key={imageIndex} type="button" onClick={onOpenImage} onMouseEnter={() => setActiveImage(imageIndex)} onMouseLeave={() => setActiveImage(0)} onFocus={() => setActiveImage(imageIndex)} onBlur={() => setActiveImage(0)} className="relative overflow-hidden" aria-label={'View image ' + (imageIndex + 1) + ' for ' + safari.title}>
              <Image src={images[imageIndex]} alt="" fill sizes="18vw" className={'object-cover transition duration-500 hover:scale-110 ' + (imageIndex === 1 ? 'object-left' : 'object-right')} />
              <span className="absolute inset-0 bg-black/10 transition hover:bg-transparent" />
              {imageIndex === 2 && <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[9px] font-bold text-white backdrop-blur">+3 more</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h2 className="headline text-2xl font-bold">{safari.title}</h2>
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">{safari.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {safari.highlights.map((highlight) => <li key={highlight} className="border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">{highlight}</li>)}
        </ul>
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <Link href={safari.href} className="text-sm font-black text-sunset-gold transition hover:text-sunset-orange">View itinerary <i className="ri-arrow-right-line ml-1" /></Link>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openExpeditionModal'))} className="text-xs font-bold text-slate-400 transition hover:text-white">Customize</button>
        </div>
      </div>
    </article>
  );
}

export default function CustomSafarisPage() {
  const [filter, setFilter] = useState('All');
  const [selectedSafari, setSelectedSafari] = useState<Safari | null>(null);
  const filters = ['All', 'Short Adventure', 'Explorer', 'Grand Tour', 'Luxury'];
  const visibleSafaris = filter === 'All' ? safaris : safaris.filter((safari) => safari.category === filter);

  useEffect(() => {
    if (!selectedSafari) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedSafari(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedSafari]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="immersive-hero relative isolate min-h-[88vh] overflow-hidden">
        <Image src={placeholder} alt="Elephant in the East African wilderness" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 pt-40 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold"><span className="h-px w-10 bg-sunset-gold" />Tailored East African journeys</p>
            <h1 className="headline text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">Your pace.<br /><span className="italic text-sunset-gold">Your wild.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Begin with one of our field-tested routes, then shape every detail around your interests, dates, and travel style.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#safaris" className="bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">Browse journeys</a><button onClick={() => window.dispatchEvent(new CustomEvent('openExpeditionModal'))} className="border border-white/25 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:border-sunset-gold hover:text-sunset-gold">Build a custom route</button></div>
          </div>
        </div>
      </section>

      <section id="safaris" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Choose a starting point</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Journeys made to become yours</h2><p className="mt-5 leading-7 text-slate-400">Every itinerary can be adjusted—from the pace and accommodation to the wildlife encounters that matter most.</p></div>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
              {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={'whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-wider transition ' + (filter === item ? 'bg-sunset-gold text-slate-950' : 'border border-white/10 text-slate-400 hover:border-sunset-gold hover:text-sunset-gold')}>{item}</button>)}
            </div>
          </div>
          <div className="mt-12 grid gap-7 lg:grid-cols-2">{visibleSafaris.map((safari) => <SafariCard key={safari.title} safari={safari} onOpenImage={() => setSelectedSafari(safari)} />)}</div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Designed around you</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">No fixed route fits every traveler.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Tell us what draws you to East Africa. We will balance wildlife, culture, travel time, and comfort into one considered route.</p></div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">{['Share your vision', 'Receive your route', 'Refine and travel'].map((step, index) => <div key={step} className="bg-slate-900 p-7"><span className="text-xs font-black text-sunset-orange">0{index + 1}</span><h3 className="headline mt-8 text-xl font-bold">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{index === 0 ? 'Dates, interests, group size, and travel style.' : index === 1 ? 'A thoughtful itinerary built by our local team.' : 'Fine-tune the details, confirm, and arrive.'}</p></div>)}</div>
        </div>
      </section>

      <section className="immersive-hero relative isolate px-6 py-24 text-center"><Image src={placeholder} alt="" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-slate-950/90" /><div className="mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Start with a conversation</p><h2 className="headline mt-4 text-4xl font-bold text-white sm:text-6xl">Let’s shape your East African story</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Your dates and interests are enough to begin. Our team will guide the rest.</p><button onClick={() => window.dispatchEvent(new CustomEvent('openExpeditionModal'))} className="mt-9 bg-sunset-gold px-9 py-4 font-black text-slate-950 transition hover:bg-white">Plan my custom safari</button><Link href="/Review" className="ml-0 mt-4 block text-sm font-bold text-white underline decoration-sunset-gold underline-offset-4 sm:ml-6 sm:inline-block">Read traveler stories</Link></div></section>

      {selectedSafari && (
        <div className="gallery-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={'Full image for ' + selectedSafari.title} onClick={() => setSelectedSafari(null)}>
          <button type="button" onClick={() => setSelectedSafari(null)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:border-sunset-gold hover:text-sunset-gold" aria-label="Close full image"><i className="ri-close-line" /></button>
          <div className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={placeholder} alt={selectedSafari.title} fill sizes="100vw" className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20 text-center"><p className="text-xs font-black uppercase tracking-[0.25em] text-sunset-gold">{selectedSafari.category} · {selectedSafari.place}</p><h2 className="headline mt-2 text-2xl font-bold text-white">{selectedSafari.title}</h2></div>
          </div>
        </div>
      )}
    </main>
  );
}
