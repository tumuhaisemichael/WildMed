'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import UnifiedHero from '@/components/layout/UnifiedHero';
import FormSuccess from '@/components/forms/FormSuccess';

const heroImage =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const focusAreas = [
  { icon: 'ri-heart-pulse-line', title: 'Human health', text: 'Public health systems, clinical exposure, nutrition, and community health.' },
  { icon: 'ri-bear-smile-line', title: 'Animal health', text: 'Veterinary public health, wildlife management, and diagnostic laboratories.' },
  { icon: 'ri-leaf-line', title: 'Environment', text: 'Ecosystem health, food systems, conservation, and the human–wildlife interface.' },
];

const gallery = [
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
];

const disciplines = [
  'Biological Sciences', 'Environmental Sciences', 'Medical Sciences',
  'Veterinary Sciences', 'Pre-Medicine', 'Pre-Veterinary Medicine',
  'Biotechnology & Biolab Sciences', 'Public Health', 'Animal Production',
  'Wildlife Sciences', 'Aquatic Sciences', 'Food Sciences',
];

const prices = [
  { duration: '14 days', small: '$3,600', medium: '$3,200', large: '$2,800' },
  { duration: '21 days', small: '$4,200', medium: '$3,800', large: '$3,400' },
  { duration: '28 days', small: '$4,600', medium: '$4,000', large: '$3,600' },
  { duration: '35 days', small: '$4,600', medium: '$4,000', large: '$3,600' },
];

const partners = [
  'Makerere University COVAB', 'Uganda Wildlife Authority', 'Gorilla Doctors',
  'Uganda Virus Research Institute', 'Central Public Health Laboratories',
  'Uganda Wildlife Conservation Education Centre', 'Kiruddu Hospital',
  'Makerere University Biological Field Station', 'Ndere Cultural Centre',
];

export default function StudyAbroadPage() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!applicationOpen && !selectedImage) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setApplicationOpen(false);
        setSelectedImage(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [applicationOpen, selectedImage]);

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      programme: 'Study Abroad — One Health East Africa',
      ...Object.fromEntries(new FormData(form)),
    };

    try {
      const response = await fetch('https://formspree.io/f/mldlkwke', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Application submission failed');

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error('Study Abroad application error:', error);
      alert('There was an error submitting your application. Please try again or contact us at info@wildmedug.com.');
    }
  };

  return (
    <main className="study-abroad-page min-h-screen overflow-hidden bg-slate-950 text-white">
      <UnifiedHero eyebrow="One Health · East Africa" title={<>Study beyond <span className="block italic text-sunset-gold">the classroom.</span></>} description="Immersive field rotations connecting human, animal, and environmental health across Uganda and East Africa." backgroundImage="/assets/heroes/study-abroad-hero.png" mainImage="/assets/heroes/study-abroad-hero.png" secondaryImage="/img/Destination/Rwensori.png" imageAlt="Students conducting field research with a Ugandan instructor" trustText="Supported by partner institutions" note="Education with purpose" stats={[{value:'50+',label:'Annual participants',icon:'ri-group-line'},{value:'10+',label:'Partner institutions',icon:'ri-government-line'},{value:'14–35',label:'Programme days',icon:'ri-calendar-event-line'},{value:'12',label:'Disciplines',icon:'ri-book-open-line'}]} actions={<><button onClick={() => setApplicationOpen(true)} className="rounded-2xl bg-sunset-gold px-8 py-4 font-black text-slate-950 transition hover:bg-white">Apply for the programme</button><a href="#programme" className="rounded-2xl border border-sunset-gold/70 bg-slate-950/30 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-sunset-gold hover:text-slate-950">Explore the experience</a></>} />

      <section id="programme" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">The programme</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">One world.<br />One shared health.</h2><p className="mt-6 leading-7 text-slate-400">Train alongside Ugandan and international students in settings that reveal how human wellbeing, animal health, and the environment are inseparable.</p><p className="mt-4 leading-7 text-slate-400">The annual programme runs from June to July, with flexible winter, spring, and autumn schedules available for university groups.</p></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {focusAreas.map((area) => <article key={area.title} className="bg-slate-900 p-7 sm:p-8"><i className={area.icon + ' text-3xl text-sunset-gold'} /><h3 className="headline mt-8 text-2xl font-bold">{area.title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{area.text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Life in the field</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Learning that stays with you</h2></div><p className="max-w-md leading-7 text-slate-400">Clinical visits, conservation fieldwork, community learning, and cultural exchange—captured by programme participants.</p></div>
          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image)} className={'gallery-media group relative overflow-hidden text-left ' + (index === 0 ? 'md:col-span-2 md:row-span-2' : index === 3 ? 'md:row-span-2' : '')}>
                <img src={image} alt={'Study Abroad field experience ' + (index + 1)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-black uppercase tracking-[0.24em] text-sunset-gold">Field rotation</p><p className="headline mt-2 text-xl font-bold text-white">{index % 2 ? 'Learning across disciplines' : 'One Health in practice'}</p></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Who can join</p><h2 className="headline mt-4 text-4xl font-bold">Built for curious minds</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{disciplines.map((discipline) => <div key={discipline} className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"><i className="ri-check-line text-sunset-gold" />{discipline}</div>)}</div></div>
          <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Our network</p><h2 className="headline mt-4 text-4xl font-bold">Learn with institutions shaping the region</h2><div className="mt-8 divide-y divide-white/10 border-y border-white/10">{partners.map((partner, index) => <div key={partner} className="flex items-center gap-4 py-4"><span className="text-xs font-black text-sunset-gold">{String(index + 1).padStart(2, '0')}</span><span className="text-sm text-slate-300">{partner}</span></div>)}</div></div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Programme investment</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Choose your field rotation</h2><p className="mt-4 max-w-2xl text-slate-400">Per-person pricing decreases for larger cohorts. Custom quotations are available for programmes shorter than two weeks.</p></div>
          <div className="overflow-x-auto border border-white/10"><table className="w-full min-w-[720px] text-left"><thead className="bg-sunset-gold text-slate-950"><tr><th className="p-5">Duration</th><th className="p-5">1–4 participants</th><th className="p-5">4–6 participants</th><th className="p-5">7+ participants</th></tr></thead><tbody className="divide-y divide-white/10">{prices.map((price) => <tr key={price.duration} className="transition hover:bg-white/5"><th className="p-5 text-white">{price.duration}</th><td className="p-5 text-slate-300">{price.small}</td><td className="p-5 text-slate-300">{price.medium}</td><td className="p-5 font-bold text-sunset-gold">{price.large}</td></tr>)}</tbody></table></div>
          <div className="mt-6 grid gap-4 md:grid-cols-2"><div className="border border-white/10 bg-white/5 p-6"><p className="font-bold text-white">Included</p><p className="mt-3 text-sm leading-6 text-slate-400">Airport transfers, local transport, accommodation, three meals daily, field personnel, and facility entrance fees.</p></div><div className="border border-white/10 bg-white/5 p-6"><p className="font-bold text-white">Not included</p><p className="mt-3 text-sm leading-6 text-slate-400">International flights, medical insurance, alcohol, and personal expenses.</p></div></div>
        </div>
      </section>

      <section className="immersive-hero relative isolate px-6 py-24 text-center"><div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: 'url("' + heroImage + '")' }} /><div className="absolute inset-0 -z-10 bg-slate-950/90" /><div className="mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Applications open</p><h2 className="headline mt-4 text-4xl font-bold text-white sm:text-6xl">Take your education into the field</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Build a programme around your discipline, academic calendar, and learning objectives.</p><button onClick={() => setApplicationOpen(true)} className="mt-9 bg-sunset-gold px-9 py-4 font-black text-slate-950 transition hover:bg-white">Start your application</button></div></section>

      {selectedImage && <div className="gallery-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-5 backdrop-blur-xl" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true"><button onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 text-3xl text-white" aria-label="Close image">×</button><img src={selectedImage} alt="Expanded Study Abroad field experience" className="max-h-[85vh] max-w-full object-contain" onClick={(event) => event.stopPropagation()} /></div>}

      {applicationOpen && <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/90 p-5 backdrop-blur-xl" role="dialog" aria-modal="true" onClick={() => setApplicationOpen(false)}><div className="mx-auto my-10 max-w-xl bg-[#fff7e8] p-7 text-slate-900 shadow-2xl sm:p-10" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-orange-700">One Health programme</p><h2 className="headline mt-2 text-3xl font-bold">Begin your application</h2></div><button onClick={() => setApplicationOpen(false)} className="text-3xl" aria-label="Close application">×</button></div>{submitted ? <FormSuccess title="Study Abroad application received" message="Our programme team will review your academic interests and contact you with the next steps." onClose={() => { setApplicationOpen(false); setSubmitted(false); }} /> : <form onSubmit={submitApplication} className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-600">Full name<input required name="name" className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange" /></label><label className="text-sm text-slate-600">Email address<input required type="email" name="email" className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange" /></label><label className="text-sm text-slate-600 sm:col-span-2">University or institution<input required name="institution" className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange" /></label><label className="text-sm text-slate-600">Preferred start date<input required type="date" name="date" className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange" /></label><label className="text-sm text-slate-600">Duration<select name="duration" className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange">{prices.map((price) => <option key={price.duration}>{price.duration}</option>)}</select></label><label className="text-sm text-slate-600 sm:col-span-2">Special interests<textarea name="interests" rows={3} className="mt-2 w-full border-b border-slate-400 bg-transparent px-0 py-2 text-slate-900 outline-none focus:border-sunset-orange" /></label><button type="submit" className="bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-sunset-orange sm:col-span-2">Submit application request</button></form>}</div></div>}
    </main>
  );
}
