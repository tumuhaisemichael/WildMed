import Image from 'next/image';

const partners = [
  { name: 'Makerere University', detail: 'Academic partner', logo: '/partners/makerere.png', href: 'https://www.mak.ac.ug/' },
  { name: 'Uganda Wildlife Authority', detail: 'Conservation partner', logo: '/partners/uganda-wildlife-authority.png', href: 'https://ugandawildlife.org/' },
  { name: 'African Union of Conservationists', detail: 'Regional partner', logo: '/partners/african_union_of_conservationists_logo.jpeg', href: 'https://afrucafrica.org/' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden border-y border-white/5 bg-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-72 w-72 rounded-full bg-sunset-orange/10 blur-[100px]" />
        <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-sunset-gold/10 blur-[110px]" />
        <div className="partner-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold"><span className="h-px w-8 bg-sunset-gold" />Trusted collaborators<span className="h-px w-8 bg-sunset-gold" /></p>
          <h2 className="headline mt-5 text-4xl font-bold text-white sm:text-5xl">Together in the field.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">We work alongside institutions advancing wildlife conservation, practical learning, and healthier communities across East Africa.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3 sm:gap-6">
          {partners.map((partner, index) => (
            <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name}`} className="partner-card group relative grid min-h-[250px] place-items-center overflow-hidden border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-2 hover:border-sunset-gold/60 hover:shadow-[0_20px_55px_rgba(251,191,36,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunset-gold" style={{ animationDelay: `${index * 130}ms` }}>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sunset-gold/10 blur-2xl transition duration-500 group-hover:bg-sunset-gold/25" />
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-sunset-gold to-transparent transition duration-500 group-hover:scale-x-100" />
              <div className="relative grid h-full w-full place-items-center overflow-hidden border border-white/10 bg-white p-7 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.16),transparent_62%)]" />
                <Image src={partner.logo} alt={`${partner.name} logo`} width={240} height={135} className="relative max-h-[132px] w-auto max-w-full object-contain transition duration-500 group-hover:scale-110 group-focus-visible:scale-110" />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent px-6 pb-6 pt-14 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sunset-orange">{partner.detail}</p>
                <div className="mt-2 flex items-end justify-between gap-3"><h3 className="headline text-xl font-bold leading-tight text-white">{partner.name}</h3><i className="ri-arrow-up-right-line text-lg text-sunset-gold" /></div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Collaboration that leaves a lasting impact</p>
      </div>

    </section>
  );
}
