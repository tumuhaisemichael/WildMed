import Link from 'next/link';
import UnifiedHero from '@/components/layout/UnifiedHero';

const defaultImage =
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85';

const testimonials = [
  { name: 'Amelia R.', trip: 'Uganda Gorilla Trek', quote: 'Every detail was handled with care. The gorilla tracking experience felt personal, well-organized, and deeply meaningful. It was the trip of a lifetime.', rotation: 'md:-rotate-1' },
  { name: 'David K.', trip: 'Kenya Safari Escape', quote: 'The wildlife was extraordinary, but the professionalism of the guides made the experience stand out. We felt safe, informed, and completely immersed in the landscape.', rotation: 'md:rotate-1' },
  { name: 'Sofia M.', trip: 'Rwanda Conservation Tour', quote: 'WildMed balanced adventure and purpose brilliantly. We saw incredible wildlife and learned how conservation work changes lives on the ground.', rotation: 'md:-rotate-2' },
  { name: 'Noah T.', trip: 'Tanzania Adventure', quote: 'From the first briefing to the final game drive, the experience was smooth, thoughtful, and unforgettable. We would book again in a heartbeat.', rotation: 'md:rotate-1' },
  { name: 'Priya N.', trip: 'Custom Expedition', quote: 'The team created a custom itinerary that matched our interests perfectly. It felt curated, not generic, and every stop was memorable.', rotation: 'md:-rotate-1' },
  { name: 'Martin C.', trip: 'Medical Field Program', quote: 'A powerful mix of learning, service, and hands-on fieldwork. It was structured, inspiring, and truly impactful in the best way.', rotation: 'md:rotate-2' },
];

const stats = [
  { value: '98%', label: 'Traveler satisfaction' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '500+', label: 'Trips delivered' },
  { value: '72%', label: 'Repeat travelers' },
];

export default function ReviewPage() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      <UnifiedHero eyebrow="Real journeys · Real perspectives" title={<>Stories from <span className="block italic text-sunset-gold">the field.</span></>} description="Hear from travelers, students, and professionals whose East African experiences became stories worth bringing home." backgroundImage="/assets/heroes/traveler-reviews-hero.png" mainImage="/assets/heroes/traveler-reviews-hero.png" secondaryImage="/assets/uganda-rwanda-11day/day7-lake-bunyonyi.png" imageAlt="Travelers with a WildMed safari guide" trustText="4.9 from 127 reviews" note="Memories worth sharing" stats={stats.map((stat,index)=>({...stat,icon:['ri-emotion-happy-line','ri-star-line','ri-suitcase-3-line','ri-repeat-line'][index]}))} actions={<><a href="#traveler-stories" className="rounded-2xl bg-sunset-gold px-8 py-4 text-center font-black text-slate-950 transition hover:bg-white">Read their stories</a><Link href="/Custom-Safaris" className="rounded-2xl border border-sunset-gold/70 bg-slate-950/30 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-sunset-gold hover:text-slate-950">Plan your journey</Link></>} />

      <section id="traveler-stories" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_12%,rgba(251,191,36,0.16),transparent_24%),radial-gradient(circle_at_83%_6%,rgba(249,115,22,0.14),transparent_27%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-sunset-gold">Traveler stories</p><h1 className="headline text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">Pinned to the corkboard</h1></div>
            <p className="max-w-sm border-l-2 border-sunset-gold/70 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">A handful of the field notes travelers have sent back from East Africa.</p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-11">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={`group relative mt-2 bg-[#fff7e8] px-6 pb-7 pt-8 text-slate-800 shadow-[0_16px_28px_rgba(0,0,0,0.32)] transition duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_24px_40px_rgba(0,0,0,0.38)] ${testimonial.rotation}`}>
                <span className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border border-amber-700/30 bg-gradient-to-br from-sunset-honey via-sunset-gold to-sunset-orange shadow-[0_3px_5px_rgba(0,0,0,0.45)]" />
                <div className="mb-4 flex items-start justify-between gap-3"><div><h2 className="headline text-xl font-bold text-slate-900">{testimonial.name}</h2><span className="mt-1 inline-block rounded-full border border-sunset-orange/45 px-2.5 py-0.5 text-[11px] font-medium text-orange-800">{testimonial.trip}</span></div><div className="flex pt-1 text-sm tracking-tight text-sunset-gold" aria-label="5 out of 5 stars">★★★★★</div></div>
                <p className="text-[15px] leading-6 text-slate-700"><span className="mr-0.5 font-bold text-sunset-orange">“</span>{testimonial.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-sm bg-[#fff7e8] text-slate-800 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
          <div className="relative px-8 py-12 sm:px-14 lg:px-20 lg:py-16"><div className="pointer-events-none absolute inset-y-0 left-8 border-l border-sunset-orange/35 sm:left-16 lg:left-20" />
            <div className="relative ml-5 sm:ml-7"><p className="mb-3 text-sm font-bold text-orange-800">Add your entry</p><h2 className="headline max-w-xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">Tell us about your WildMed journey</h2><p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">We&apos;d love to hear how your East African trip shaped your perspective — the moments, the learning, and what you&apos;d tell the next traveler.</p>
              <form className="mt-10 grid gap-x-8 gap-y-7 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-500">Your name<input className="mt-2 w-full border-b border-slate-400/70 bg-transparent px-0 py-2 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sunset-orange" placeholder="Jane Doe" /></label>
                <label className="block text-sm font-medium text-slate-500">Trip type<select defaultValue="Uganda Gorilla Trek" className="mt-2 w-full border-b border-slate-400/70 bg-transparent px-0 py-2 text-base text-slate-900 outline-none transition focus:border-sunset-orange"><option>Uganda Gorilla Trek</option><option>Kenya Safari Escape</option><option>Tanzania Adventure</option><option>Rwanda Conservation Tour</option><option>Custom Expedition</option></select></label>
                <label className="md:col-span-2 block text-sm font-medium text-slate-500">Your review<textarea rows={5} className="mt-2 w-full resize-y border-b border-slate-400/70 bg-transparent px-0 py-2 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sunset-orange" placeholder="What stood out about your trip?" /></label>
                <div className="md:col-span-2 flex justify-end pt-1"><button type="button" className="bg-slate-900 px-8 py-3.5 text-sm font-black text-[#fff7e8] transition hover:bg-sunset-orange">Submit review</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="immersive-hero relative overflow-hidden bg-slate-950 px-6 py-20 text-center"><div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("' + defaultImage + '")' }} /><div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.32em] text-sunset-gold">Your next field note starts here</p><h2 className="headline mt-4 text-4xl font-bold sm:text-5xl">Ready for your next adventure?</h2><p className="mx-auto mt-5 max-w-2xl text-slate-300">Start planning a safari, expedition, or study-abroad experience designed around your goals.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/Custom-Safaris" className="bg-sunset-gold px-7 py-3.5 font-black text-slate-950 transition hover:bg-white">Book Your Safari</Link><Link href="/Destinations" className="border border-white/25 px-7 py-3.5 font-black text-white transition hover:border-sunset-gold hover:text-sunset-gold">Explore Destinations</Link></div></div>
      </section>
    </main>
  );
}
