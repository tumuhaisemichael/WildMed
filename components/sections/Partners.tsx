import Image from 'next/image';

type Partner = { name: string; role: string; description: string; logo?: string; href?: string };

const partners: Partner[] = [
  { name: 'Uganda Tourism Board', role: 'Tourism', description: 'Uganda’s national body for promoting and developing tourism.', logo: '/assets/partners/uganda-tourism-board.png', href: 'https://utb.go.ug/' },
  { name: 'Strevolt Foundation', role: 'Foundation', description: 'Healthy communities, thriving ecosystems.', logo: '/assets/partners/strevolt-logo.png' },
  { name: 'Makerere University', role: 'Academic', description: 'Uganda’s oldest university, supporting field training and research.', logo: '/assets/partners/makerere-university.png', href: 'https://www.mak.ac.ug/' },
  { name: 'EduPartnershipsGlobal (EPG Consult)', role: 'Education', description: 'Systems and services in education.', logo: '/assets/partners/EPG.jpg' },
  { name: 'Lovy Adventures', role: 'Travel', description: 'Adventure travel partner for journeys across East Africa.' },
  { name: 'African Union of Conservationists', role: 'Regional network', description: 'A pan-African network of conservation practitioners.', logo: '/assets/partners/african-union-of-conservationists.png' },
];

const cardClass = 'partner-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl shadow-black/20 transition duration-300';
const interactiveClass = 'hover:-translate-y-1 hover:border-sunset-gold/60 hover:shadow-[0_18px_45px_rgba(251,191,36,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunset-gold';

function initials(name: string) {
  return name.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase();
}

function PartnerContent({ partner }: { partner: Partner }) {
  return (
    <>
      <div className="relative h-40 bg-white">
        {partner.logo ? (
          <Image src={partner.logo} alt={`${partner.name} logo`} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw" className="object-contain p-6 transition duration-300 group-hover:scale-105" />
        ) : (
          // Shown until the partner's logo is added to /assets/partners.
          <span className="flex h-full items-center justify-center text-4xl font-black tracking-wider text-slate-300" aria-hidden="true">{initials(partner.name)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sunset-orange">{partner.role}</p>
        <h3 className="mt-2 font-bold leading-snug text-white">{partner.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{partner.description}</p>
        {partner.href && <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sunset-gold">Visit website <i className="ri-arrow-right-up-line" aria-hidden="true" /></span>}
      </div>
    </>
  );
}

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
          <h2 className="headline text-4xl font-bold text-white sm:text-5xl">Together in the field.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">We work alongside institutions advancing wildlife conservation, practical learning, and healthier communities across East Africa.</p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <li key={partner.name} className="flex">
              {partner.href ? (
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className={`${cardClass} ${interactiveClass} w-full`} style={{ animationDelay: `${index * 90}ms` }}>
                  <PartnerContent partner={partner} />
                </a>
              ) : (
                <div className={`${cardClass} w-full`} style={{ animationDelay: `${index * 90}ms` }}>
                  <PartnerContent partner={partner} />
                </div>
              )}
            </li>
          ))}
          <li className="flex">
            <a href="mailto:info@wildmedug.com?subject=Partnership%20with%20WildMed" className={`partner-card flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-sunset-gold/40 bg-sunset-gold/5 p-8 text-center transition duration-300 ${interactiveClass}`} style={{ animationDelay: `${partners.length * 90}ms` }}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sunset-gold/15 text-2xl text-sunset-gold"><i className="ri-hand-heart-line" aria-hidden="true" /></span>
              <h3 className="headline mt-5 text-2xl font-bold text-white">Partner with WildMed</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Universities, conservation bodies, and health organisations: let’s build field programmes together.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-sunset-gold">Get in touch <i className="ri-arrow-right-line" aria-hidden="true" /></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
