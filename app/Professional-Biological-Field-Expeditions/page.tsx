'use client';

import Image from 'next/image';
import Link from 'next/link';

const placeholder =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const pathways = [
  {
    number: '01',
    icon: 'ri-microscope-line',
    title: 'Biological Field Research',
    audience: 'Biologists, ecologists, researchers, and students',
    description: 'Structured scientific expeditions studying living organisms and their relationship with East African ecosystems.',
    activities: ['Biodiversity surveys', 'Wildlife monitoring', 'Ecological sampling', 'Habitat assessment'],
    href: '/Biological-Field-Research-Expeditions',
  },
  {
    number: '02',
    icon: 'ri-stethoscope-line',
    title: 'Veterinary & Conservation',
    audience: 'Veterinarians, wildlife professionals, and conservation students',
    description: 'Field programmes connecting wildlife health, conservation medicine, and communities surrounding protected areas.',
    activities: ['Disease surveillance', 'Primate health', 'Predator tracking', 'Conservation technology'],
    href: '/Veterinary-Conservation-',
  },
  {
    number: '03',
    icon: 'ri-heart-pulse-line',
    title: 'Medical Professional Expeditions',
    audience: 'Healthcare professionals, medical students, and public-health teams',
    description: 'Practical health and outreach experiences in diverse communities near important wildlife landscapes.',
    activities: ['Medical outreach', 'Public health', 'Zoonotic surveillance', 'Community education'],
    href: '/Medical-Expedition-Programs',
  },
];

const methods = [
  { icon: 'ri-footprint-line', title: 'Wildlife tracking', text: 'Observe movement, behaviour, and population indicators.' },
  { icon: 'ri-test-tube-line', title: 'Field sampling', text: 'Practice responsible ecological and biological sampling.' },
  { icon: 'ri-radar-line', title: 'Habitat assessment', text: 'Read landscapes through structured environmental surveys.' },
  { icon: 'ri-health-book-line', title: 'Disease surveillance', text: 'Explore health at the human–animal–environment interface.' },
  { icon: 'ri-team-line', title: 'Community exchange', text: 'Learn with local professionals and neighbouring communities.' },
  { icon: 'ri-file-chart-line', title: 'Documentation', text: 'Turn field observations into useful scientific records.' },
];

const comparisons = [
  ['Biological research', 'Biologists & ecology students', 'Species, habitats, and ecosystems'],
  ['Veterinary conservation', 'Veterinary & wildlife teams', 'Animal and ecosystem health'],
  ['Medical expeditions', 'Medical & public-health teams', 'Community health and One Health'],
];

export default function ProfessionalBiologicalFieldExpeditionsPage() {
  const openEnquiry = () => window.dispatchEvent(new CustomEvent('openExpeditionModal'));

  return (
    <main className="professional-expeditions-page min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="immersive-hero relative isolate min-h-[92vh] overflow-hidden">
        <Image src={placeholder} alt="Professional field expedition in East Africa" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-40 sm:px-8 lg:pb-28">
          <div className="max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.32em] text-sunset-gold"><span className="h-px w-10 bg-sunset-gold" />Professional field expeditions</p>
            <h1 className="headline text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">Science in the field.<br /><span className="italic text-sunset-gold">Impact on the ground.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">Immersive programmes connecting biological research, veterinary conservation, medical practice, and One Health across East Africa.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#pathways" className="bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">Explore pathways</a><button onClick={openEnquiry} className="border border-white/25 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:border-sunset-gold hover:text-sunset-gold">Tailor an expedition</button></div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7">
              {['Researchers & students', 'Three professional streams', 'East African field settings'].map((item, index) => <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300"><span className="text-sunset-gold">0{index + 1}</span>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Why the field matters</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Knowledge becomes useful when it meets a landscape.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2"><p className="leading-7 text-slate-400">These expeditions bring scientists, students, conservation professionals, and health practitioners into natural ecosystems where theory becomes direct observation, measurement, and responsible action.</p><p className="leading-7 text-slate-400">Participants work alongside local expertise—tracking wildlife, assessing habitats, monitoring health, and understanding how conservation and community wellbeing shape one another.</p></div>
        </div>
      </section>

      <section id="pathways" className="bg-slate-900 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Choose your pathway</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Three disciplines. One field context.</h2><p className="mt-5 leading-7 text-slate-400">Select the stream that fits your training and goals. Every programme can be adapted for individuals, institutions, or multidisciplinary teams.</p></div>

          <div className="space-y-7">
            {pathways.map((pathway, index) => (
              <article key={pathway.title} className="grid overflow-hidden border border-white/10 bg-slate-950 lg:grid-cols-2">
                <div className={'gallery-media relative min-h-[360px] overflow-hidden ' + (index % 2 ? 'lg:order-2' : '')}>
                  <Image src={placeholder} alt={pathway.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className={'object-cover ' + (index === 1 ? 'object-left' : index === 2 ? 'object-right' : 'object-center')} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 text-5xl font-black text-white/30">{pathway.number}</span>
                  <p className="absolute bottom-6 left-6 text-xs font-black uppercase tracking-[0.2em] text-sunset-gold">{pathway.audience}</p>
                </div>
                <div className={'flex flex-col justify-center p-7 sm:p-10 lg:p-12 ' + (index % 2 ? 'lg:order-1' : '')}>
                  <i className={pathway.icon + ' text-4xl text-sunset-gold'} aria-hidden="true" />
                  <h3 className="headline mt-6 text-3xl font-bold sm:text-4xl">{pathway.title}</h3>
                  <p className="mt-5 leading-7 text-slate-400">{pathway.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">{pathway.activities.map((activity) => <li key={activity} className="flex items-center gap-2 text-sm text-slate-300"><i className="ri-check-line text-sunset-orange" />{activity}</li>)}</ul>
                  <Link href={pathway.href} className="mt-9 inline-flex w-fit items-center gap-2 font-black text-sunset-gold transition hover:text-sunset-orange">Explore programme <i className="ri-arrow-right-line" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-orange">Field methods</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Learn by doing</h2></div><p className="max-w-md leading-7 text-slate-400">Methods are selected around programme goals, local conditions, permits, and participant experience.</p></div>
          <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4">{methods.map((method, index) => <article key={method.title} className="min-w-[280px] snap-start border border-white/10 bg-white/5 p-7 sm:min-w-[330px]"><div className="flex items-center justify-between"><i className={method.icon + ' text-3xl text-sunset-gold'} /><span className="text-xs font-black text-slate-600">0{index + 1}</span></div><h3 className="headline mt-12 text-2xl font-bold">{method.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{method.text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#fff7e8] px-6 py-20 text-slate-900 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-700">Quick route guide</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Find your professional fit</h2>
          <div className="mt-10 overflow-x-auto border border-slate-300/70"><table className="w-full min-w-[720px] text-left"><thead className="professional-table-head bg-slate-950 text-[#fff7e8]"><tr><th className="p-5">Pathway</th><th className="p-5">Best suited for</th><th className="p-5">Primary focus</th></tr></thead><tbody className="divide-y divide-slate-300/70">{comparisons.map((row) => <tr key={row[0]} className="transition hover:bg-white/60"><th className="p-5">{row[0]}</th><td className="p-5 text-slate-600">{row[1]}</td><td className="p-5 text-slate-600">{row[2]}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Built around your objectives</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">From research question to field itinerary</h2><p className="mt-5 leading-7 text-slate-400">We coordinate the practical context around your academic, institutional, or professional goals.</p></div>
          <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">{['Define objectives', 'Build the itinerary', 'Coordinate the field', 'Travel and contribute'].map((step, index) => <li key={step} className="bg-slate-900 p-7"><span className="text-xs font-black text-sunset-orange">0{index + 1}</span><h3 className="headline mt-7 text-xl font-bold">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{index === 0 ? 'Share your discipline, interests, and intended outcomes.' : index === 1 ? 'Match locations, partners, methods, and timing.' : index === 2 ? 'Align logistics, access, equipment, and local expertise.' : 'Enter the field prepared to learn and participate responsibly.'}</p></li>)}</ol>
        </div>
      </section>

      <section className="immersive-hero relative isolate px-6 py-24 text-center"><Image src={placeholder} alt="" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-slate-950/90" /><div className="mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">Professional enquiry</p><h2 className="headline mt-4 text-4xl font-bold text-white sm:text-6xl">Build an expedition with purpose</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Tell us your discipline, institution, dates, group size, and field objectives. We will help shape the right programme.</p><button onClick={openEnquiry} className="mt-9 bg-sunset-gold px-9 py-4 font-black text-slate-950 transition hover:bg-white">Discuss your expedition</button></div></section>
    </main>
  );
}
