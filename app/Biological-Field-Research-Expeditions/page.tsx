'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const placeholder = 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const themes = [
  { icon: 'ri-leaf-line', title: 'Ecology and biodiversity', text: 'Study ecosystem dynamics, habitats, and species richness in natural settings.' },
  { icon: 'ri-heart-pulse-line', title: 'Wildlife health and disease', text: 'Link observations with disease surveillance, diagnostics, and One Health thinking.' },
  { icon: 'ri-map-2-line', title: 'Conservation planning', text: 'Generate practical information supporting wildlife management and habitat protection.' },
];

const activities = [
  { icon: 'ri-leaf-line', title: 'Biodiversity Surveys', text: 'Conduct field surveys to identify and document plant, bird, and animal species using standard ecological sampling methods.' },
  { icon: 'ri-footprint-line', title: 'Wildlife Monitoring and Tracking', text: 'Monitor wildlife populations through observation, camera trapping, GPS tracking, and ecological field techniques.' },
  { icon: 'ri-earth-line', title: 'Habitat and Ecosystem Assessments', text: 'Study habitat characteristics, vegetation types, and ecological interactions to understand ecosystem dynamics.' },
  { icon: 'ri-file-list-3-line', title: 'Field Data Collection and Analysis', text: 'Collect, record, and analyse biological data including species abundance, behaviour, and distribution.' },
  { icon: 'ri-microscope-line', title: 'Disease Surveillance', text: 'Monitor wildlife health through observation, sample collection, and basic diagnostics for zoonotic and emerging diseases.' },
  { icon: 'ri-test-tube-line', title: 'Ecological Sampling Techniques', text: 'Practise transect walks, quadrat sampling, and environmental sampling methods for ecological research.' },
  { icon: 'ri-book-open-line', title: 'Species Identification Training', text: 'Identify wildlife species, tracks, signs, and plants with experienced field scientists.' },
  { icon: 'ri-seedling-line', title: 'Conservation Research Projects', text: 'Join short research projects focused on wildlife conservation, ecosystem management, and biodiversity protection.' },
  { icon: 'ri-camera-lens-line', title: 'Scientific Documentation', text: 'Record observations through research notes, photography, mapping, and basic field reports.' },
  { icon: 'ri-group-line', title: 'Community and Conservation Engagement', text: 'Learn from communities and practitioners about human–wildlife interactions and sustainable resource management.' },
];

const tools = [
  ['Tracking technology', 'GPS and satellite-based systems for movement and distribution data.'],
  ['Camera trapping', 'Non-invasive wildlife monitoring for elusive and nocturnal species.'],
  ['Molecular diagnostics', 'Field-linked sampling supporting wildlife health and disease studies.'],
  ['Ecological sampling', 'Transects, quadrats, and environmental sampling for biodiversity data.'],
];

const ecosystems = [
  ['Savannahs', 'Open systems ideal for visibility, movement studies, and large-mammal ecology.'],
  ['Forests', 'Rich biodiversity, primate studies, and complex habitat interactions.'],
  ['Wetlands', 'Important for birds, aquatic ecology, ecosystem health, and resource-use studies.'],
  ['Mountain Habitats', 'Useful for altitudinal comparisons, endemic species, and habitat resilience.'],
];

const experiences = [
  ['Photography Expeditions', 'Detour inside national parks for unparalleled wildlife photography. Our experts help capture stunning images while ensuring minimal disturbance to animals.'],
  ['Research Opportunities', 'Participate in cutting-edge wildlife projects, contribute to field data collection, and support conservation medicine and biodiversity science.'],
  ['Community Education', 'Deliver educational programmes about wildlife conservation, animal health, and sustainable coexistence practices.'],
];

export default function BiologicalFieldResearchExpeditionsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openEnquiry = () => window.dispatchEvent(new CustomEvent('openExpeditionModal'));

  useEffect(() => {
    if (!lightboxOpen) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setLightboxOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
  }, [lightboxOpen]);

  return (
    <main className="biological-research-page min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="immersive-hero relative isolate min-h-[92vh] overflow-hidden">
        <Image src={placeholder} alt="Biological field research in East Africa" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-40 sm:px-8 lg:pb-28">
          <div className="max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold"><span className="h-px w-10 bg-sunset-gold" />Tailored science-driven field expeditions</p>
            <h1 className="headline text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">Research, training<br /><span className="italic text-sunset-gold">& conservation.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">Structured scientific expeditions studying living organisms and their interactions with natural environments—bringing together researchers, students, conservationists, and field professionals.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#activities" className="bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">View activities</a><button onClick={openEnquiry} className="border border-white/25 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:border-sunset-gold hover:text-sunset-gold">Plan a research expedition</button></div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-7 text-xs font-bold uppercase tracking-wider text-slate-300"><span>Ecology</span><span>Wildlife biology</span><span>One Health</span><span>Conservation science</span></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Overview</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Field research connecting science and the natural world</h2><p className="mt-6 leading-7 text-slate-400">Modern biological field research uses GPS and satellite tracking, camera trapping, molecular diagnostics, and ecological sampling to understand ecosystem function and changing wildlife health.</p><p className="mt-4 leading-7 text-slate-400">East Africa offers opportunities to study savannahs, forests, wetlands, and mountain habitats while contributing valuable data for conservation planning, wildlife management, and sustainable use of natural resources.</p><p className="mt-4 leading-7 text-slate-400">These expeditions also help students and professionals build practical skills, ask scientific questions, and understand the importance of protecting species and habitats.</p></div><div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">{themes.map((theme) => <article key={theme.title} className="bg-slate-900 p-7"><i className={theme.icon + ' text-3xl text-sunset-gold'} /><h3 className="headline mt-8 text-xl font-bold">{theme.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{theme.text}</p></article>)}</div></div></section>

      <section id="activities" className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Practical fieldwork</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Activities for tailored science-driven expeditions</h2><p className="mt-5 leading-7 text-slate-400">An expedition may include one or several sessions depending on its design, location, and season.</p></div><div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{activities.map((activity, index) => <article key={activity.title} className="group bg-slate-950 p-7 transition hover:bg-white/5"><div className="flex justify-between"><i className={activity.icon + ' text-3xl text-sunset-gold'} /><span className="text-xs font-black text-slate-600">{String(index + 1).padStart(2, '0')}</span></div><h3 className="headline mt-10 text-xl font-bold">{activity.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{activity.text}</p></article>)}</div></div></section>

      <section className="px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl overflow-hidden border border-white/10 bg-slate-900 lg:grid-cols-2"><div className="gallery-media relative min-h-[460px]"><Image src={placeholder} alt="Biological research tools and fieldwork" fill sizes="50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" /><p className="absolute bottom-7 left-7 text-xs font-black uppercase tracking-[0.25em] text-sunset-gold">Methods & tools</p></div><div className="p-8 sm:p-12"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Modern field techniques</p><h2 className="headline mt-4 text-4xl font-bold">Classical observation. Better tools.</h2><p className="mt-5 leading-7 text-slate-400">Biological research increasingly combines ecological observation with modern tools to improve accuracy, strengthen decisions, and generate useful conservation data.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{tools.map(([title, text]) => <div key={title} className="border border-white/10 bg-white/5 p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div></div></section>

      <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">A living laboratory</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Why East Africa works so well for field research</h2><p className="mt-5 leading-7 text-slate-400">Diverse ecosystems create unusual opportunities for comparative learning, conservation science, and applied wildlife research.</p></div><div className="grid gap-4 md:grid-cols-4">{ecosystems.map(([title, text], index) => <article key={title} className="border border-white/10 bg-slate-950 p-6"><span className="text-xs font-black text-sunset-orange">0{index + 1}</span><h3 className="headline mt-8 text-2xl font-bold text-sunset-gold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div></section>

      <section className="px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Experiential tourism</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Wildlife encounters linked to conservation</h2><p className="mt-5 leading-7 text-slate-400">Technology-assisted tracking and conservation-linked travel create meaningful ways to encounter East African wildlife.</p></div><div className="grid gap-6 lg:grid-cols-3">{experiences.map(([title, text], index) => <article key={title} className="overflow-hidden border border-white/10 bg-slate-900"><div className="gallery-media relative h-56"><Image src={placeholder} alt={title} fill sizes="33vw" className={'object-cover ' + (index === 1 ? 'object-left' : index === 2 ? 'object-right' : '')} /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></div><div className="p-7"><h3 className="headline text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{text}</p><button onClick={openEnquiry} className="mt-6 font-black text-sunset-gold hover:text-sunset-orange">Learn more <i className="ri-arrow-right-line ml-1" /></button></div></article>)}</div><p className="mt-5 text-xs italic text-slate-500">Simple downloadable summaries can be provided for quick sharing and future expansion.</p></div></section>

      <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-10"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Field archive</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Science-driven field work gallery</h2><p className="mt-4 text-slate-400">Select any frame to view the field image at full display size.</p></div><div className="grid auto-rows-[210px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 16 }).map((_, index) => <button key={index} onClick={() => setLightboxOpen(true)} className={'gallery-media group relative overflow-hidden ' + (index === 0 ? 'lg:col-span-2 lg:row-span-2' : index === 3 ? 'lg:row-span-2' : index === 8 ? 'lg:col-span-2' : '')}><Image src={placeholder} alt={'Science-driven field work image ' + (index + 1)} fill sizes="25vw" className={'object-cover transition duration-700 group-hover:scale-105 ' + (index % 3 === 1 ? 'object-left' : index % 3 === 2 ? 'object-right' : '')} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white">Field record {String(index + 1).padStart(2, '0')}</span></button>)}</div></div></section>

      <section className="immersive-hero relative isolate px-6 py-24"><Image src={placeholder} alt="" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-slate-950/90" /><div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Join the programme</p><h2 className="headline mt-4 text-4xl font-bold text-white">Interested in a tailored science-driven field expedition?</h2><p className="mt-5 leading-7 text-slate-300">Designed for structured scientific exposure, practical field skills, and deeper understanding of biodiversity, wildlife health, and ecosystem conservation.</p><div className="mt-7 space-y-3 text-slate-200"><p><i className="ri-mail-line mr-3 text-sunset-gold" />wildmeduganda@gmail.com</p><p><i className="ri-phone-line mr-3 text-sunset-gold" />+256 740 205146 / +256 777 370494</p></div></div><div className="border border-white/15 bg-white/10 p-8 backdrop-blur"><h3 className="headline text-2xl font-bold text-white">What participants gain</h3><ul className="mt-5 space-y-4 text-slate-200"><li className="flex gap-3"><i className="ri-arrow-right-line text-sunset-gold" />Hands-on ecological and wildlife field methods.</li><li className="flex gap-3"><i className="ri-arrow-right-line text-sunset-gold" />Research documentation and applied conservation science experience.</li><li className="flex gap-3"><i className="ri-arrow-right-line text-sunset-gold" />Understanding of biodiversity protection across East African ecosystems.</li></ul><button onClick={openEnquiry} className="mt-7 bg-sunset-gold px-7 py-3.5 font-black text-slate-950 hover:bg-white">Start an enquiry</button><Link href="/Professional-Biological-Field-Expeditions" className="ml-5 text-sm font-bold text-white underline decoration-sunset-gold underline-offset-4">All pathways</Link></div></div></section>

      {lightboxOpen && <div className="gallery-lightbox fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/95 p-5 backdrop-blur-xl" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}><button onClick={() => setLightboxOpen(false)} className="absolute right-5 top-5 text-3xl text-white" aria-label="Close image">×</button><div className="relative h-[85vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={placeholder} alt="Expanded science field work" fill sizes="100vw" className="object-contain" /></div></div>}
    </main>
  );
}
