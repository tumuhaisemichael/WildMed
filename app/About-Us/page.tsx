export const metadata = {
  title: 'About WildMed Safaris',
  description: 'Learn about WildMed Safaris, our mission, team, and East Africa conservation and education programs.',
};

export default function AboutUsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.20),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(249,115,22,0.14),transparent_38%)]" />
        <div className="absolute inset-0 hero-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur text-sm uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-sunset-gold animate-ping" />
              About WildMed Safaris
            </div>
            <h1 className="text-5xl md:text-7xl mt-6 mb-6 font-black tracking-tight leading-[0.95]">
              Built For <span className="italic bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-amber bg-clip-text text-transparent">Impact</span>, <br />
              Driven By Adventure
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-xl">
              We design wildlife experiences and professional programs that connect people to East Africa’s most extraordinary ecosystems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#mission" className="bg-sunset-gold hover:bg-white text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1">
                Our Mission
              </a>
              <a href="/Destinations" className="border border-white/30 hover:border-sunset-gold px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:text-sunset-gold">
                Explore Destinations
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-slate-300">Countries</p>
                <p className="text-xl font-black text-sunset-gold">4</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-slate-300">Programs</p>
                <p className="text-xl font-black text-sunset-orange">30+</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-slate-300">Years</p>
                <p className="text-xl font-black text-sunset-amber">12+</p>
              </div>
            </div>
          </div>

          <div>
            <div className="motion-card rounded-3xl p-8 border border-white/20 bg-slate-950/60 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Impact Snapshot</p>
                  <h2 className="headline text-3xl text-white">WildMed at a Glance</h2>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-sunset-gold/20 text-sunset-gold text-sm font-semibold border border-sunset-gold/40">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="motion-card rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-slate-400">Years Experience</p>
                  <p className="text-2xl font-semibold text-white">12+</p>
                </div>
                <div className="motion-card rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-slate-400">Programs</p>
                  <p className="text-2xl font-semibold text-white">30+</p>
                </div>
                <div className="motion-card rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-slate-400">Partners</p>
                  <p className="text-2xl font-semibold text-white">20+</p>
                </div>
                <div className="motion-card rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-slate-400">Countries</p>
                  <p className="text-2xl font-semibold text-white">4</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                <i className="ri-compass-3-line text-sunset-gold" />
                Every expedition supports conservation and community projects.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="motion-reveal py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sunset-gold">Our Mission</p>
            <h2 className="headline text-4xl mt-4">Meaningful Travel with Purpose</h2>
            <p className="text-lg text-slate-300 mt-6">
              WildMed Safaris curates experiences that blend conservation, education, and unforgettable adventure. From wildlife expeditions to medical missions, every program is designed to create real impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="motion-card rounded-2xl bg-white/10 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-4 text-sunset-gold">Conservation First</h3>
              <p className="text-sm text-slate-300 mt-3">We champion wildlife preservation and sustainable tourism practices across East Africa.</p>
            </div>
            <div className="motion-card rounded-2xl bg-white/10 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-4 text-sunset-orange">Education & Research</h3>
              <p className="text-sm text-slate-300 mt-3">Academic programs connect students and professionals with field research opportunities.</p>
            </div>
            <div className="motion-card rounded-2xl bg-white/10 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-4 text-sunset-amber">Community Impact</h3>
              <p className="text-sm text-slate-300 mt-3">Our itineraries empower local communities and support training initiatives.</p>
            </div>
            <div className="motion-card rounded-2xl bg-white/10 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-4 text-sunset-honey">Adventure Crafted</h3>
              <p className="text-sm text-slate-300 mt-3">Every journey is custom-built to match your pace, purpose, and passion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-reveal py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline text-4xl text-white">Our Services</h2>
            <p className="text-lg text-slate-300 mt-4">Explore our custom, professional, and academic programmes across Uganda and East Africa.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="motion-card bg-white/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sunset-gold/20 rounded-2xl flex items-center justify-center mb-6 border border-sunset-gold/30">
                <i className="ri-map-2-line text-sunset-gold text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Expeditions</h3>
              <p className="text-slate-300 leading-relaxed mb-6">Tailored journeys designed around your interests, timelines, and learning goals for individuals, institutions, and groups.</p>
              <a href="/Custom-Safaris" className="text-sunset-gold hover:text-sunset-orange font-medium">Learn More →</a>
            </div>
            <div className="motion-card bg-white/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sunset-orange/20 rounded-2xl flex items-center justify-center mb-6 border border-sunset-orange/30">
                <i className="ri-stethoscope-line text-sunset-orange text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Biological Field Expeditions</h3>
              <ul className="text-slate-300 space-y-2 mb-6 leading-relaxed">
                <li>Tailored Science Driven Field Expeditions</li>
                <li>Veterinary and Conservation Field Expeditions</li>
                <li>Medical professional expeditions</li>
              </ul>
              <a href="/Professional-Biological-Field-Research-Expeditions" className="text-sunset-gold hover:text-sunset-orange font-medium">Learn More →</a>
            </div>
            <div className="motion-card bg-white/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sunset-amber/20 rounded-2xl flex items-center justify-center mb-6 border border-sunset-amber/30">
                <i className="ri-graduation-cap-line text-sunset-amber text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Study Abroad Programmes</h3>
              <ul className="text-slate-300 space-y-2 mb-6 leading-relaxed">
                <li>Custom science-based programmes</li>
                <li>Cultural Study Abroad programmes</li>
                <li>One Health Study Abroad programme</li>
                <li>Tropical diseases and One Health</li>
                <li>Tropical Veterinary Medicine and One Health</li>
              </ul>
              <a href="/Study-Aboard" className="text-sunset-gold hover:text-sunset-orange font-medium">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-12 items-start mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-emerald-300">Meet the Crew</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Team</h2>
              <p className="text-white/70 mt-4 text-lg">Guides, researchers, and planners who shape every WildMed journey with care and expertise.</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Trusted specialists across safari, conservation, and medical programs.
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Expertise</p>
                  <p className="text-2xl font-semibold mt-3">Wildlife + Medical</p>
                  <p className="text-white/70 mt-2 text-sm">From field research to expedition leadership.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Coverage</p>
                  <p className="text-2xl font-semibold mt-3">East Africa</p>
                  <p className="text-white/70 mt-2 text-sm">Uganda, Rwanda, Kenya, Tanzania.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/img/team/t2.jpg',
                name: 'Dr. Benigna G. Namara',
                title: 'Microbiologist | Epidemiologist | M&E',
                bio: 'MBChB | MMED Microbiology | MPH | Field Epidemiology | M&E',
                contact: 'mailto:benignamara@gmail.com?subject=WildMedUG',
                icon: 'ri-mail-line',
              },
              {
                img: '/img/nicki.jpg',
                name: 'Nicki Grønkjær Jensen',
                title: 'Denmark & Europe Representative',
                bio: 'Phone: +45 60 13 18 28',
                contact: 'tel:+4560131828',
                icon: 'ri-phone-line',
              },
              {
                img: '/assets/img/team/t1.jfif',
                name: 'Margaret L. Khaitsa, BVM, MSc, Ph. D, ACVPM',
                title: 'USA Representative, WildMed',
                bio: 'Professor, Dept. Pathobiology and Population Medicine',
                contact: 'mailto:mkhaitsa@cvm.msstate.edu?subject=WildMedUG',
                icon: 'ri-mail-line',
              },
              {
                img: '/assets/img/team/t1.jfif',
                name: 'Mary Lisa Kasakamu',
                title: 'Graduate Research Assistant',
                bio: 'Stress physiology, animal behavior, and welfare with emphasis on swine.',
                contact: 'mailto:mkasakamu2@huskers.unl.edu?subject=WildMedUG',
                icon: 'ri-mail-line',
              },
              {
                img: '/assets/img/team/t3.jpg',
                name: 'Carol Namae',
                title: 'Finland European representative',
                bio: 'Supporting European travelers with tailored planning and logistics.',
                contact: 'mailto:caroline.namae.cn@gmail.com?subject=WildMedUG',
                icon: 'ri-mail-line',
              },
              {
                img: '/assets/img/team/Michael.jpg',
                name: 'Michael Tumuhaise',
                title: 'Web Developer & IT',
                bio: 'Cool, calm, and collected. Ready to tackle any tech challenge.',
                contact: 'mailto:michaeltumuhaise11@gmail.com?subject=WildMedUG',
                icon: 'ri-mail-line',
              },
            ].map((member) => (
              <div key={member.name} className="motion-card h-full bg-white/10 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform flex flex-col">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 h-16 w-16 rounded-2xl bg-emerald-500/20 blur-xl" />
                  <img src={member.img} alt={member.name} className="h-32 w-32 rounded-2xl object-cover border-2 border-white/20" />
                </div>
                <h4 className="text-xl font-semibold mt-5">{member.name}</h4>
                <span className="text-emerald-300 text-sm border-b border-white/10 pb-2 block mb-2">{member.title}</span>
                <p className="text-sm text-white/70 mt-2 flex-grow">{member.bio}</p>
                <div className="flex items-center space-x-4 mt-4 text-white/60">
                  <a href={member.contact} aria-label={`Contact ${member.name}`} className="hover:text-emerald-300"><i className={member.icon} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-reveal py-20 bg-slate-900/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-300 uppercase tracking-widest mb-12">Our Collaborators</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src="/assets/logos/mak.png" alt="Makerere University" className="h-16 md:h-20 object-contain" />
            <img src="/assets/logos/uma.jfif" alt="Uganda Wildlife Authority" className="h-16 md:h-20 object-contain" />
            <img src="/assets/logos/auc.jfif" alt="African Union of Conservationists" className="h-16 md:h-20 object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
}
