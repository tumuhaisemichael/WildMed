import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Custom Expeditions',
    desc: 'Tailored journeys designed around your interests, timelines, and learning goals for individuals, institutions, and groups.',
    href: '/Custom-Safaris',
    icon: 'ri-map-2-line',
    price: 'From $980',
    accent: 'text-sunset-gold',
    border: 'border-sunset-gold/30 hover:border-sunset-gold/60',
    glow: 'hover:shadow-sunset-gold/10',
  },
  {
    title: 'Professional Biological Field Expeditions',
    desc: 'Science driven expeditions including Veterinary, Conservation, and Medical professional programs.',
    href: '/Professional-Biological-Field-Expeditions',
    icon: 'ri-stethoscope-line',
    price: 'From $1,490',
    accent: 'text-sunset-orange',
    border: 'border-sunset-orange/30 hover:border-sunset-orange/60',
    glow: 'hover:shadow-sunset-orange/10',
    list: [
      { label: 'Tailored Science Driven Field Expeditions', href: '/Biological-Field-Research-Expeditions' },
      { label: 'Veterinary and Conservation Field Expeditions', href: '/Veterinary-Conservation-' },
      { label: 'Medical Professional Expeditions', href: '/Medical-Expedition-Programs' },
    ]
  },
  {
    title: 'Study Abroad Programmes',
    desc: 'Academic programs focused on One Health, Tropical Medicine, and Cultural immersion.',
    href: '/Study-Aboard',
    icon: 'ri-graduation-cap-line',
    price: 'From $1,200',
    accent: 'text-sunset-honey',
    border: 'border-sunset-honey/30 hover:border-sunset-honey/60',
    glow: 'hover:shadow-sunset-honey/10',
    list: [
      { label: 'Custom science-based programmes', href: '/Study-Aboard' },
      { label: 'One Health Study Abroad programme', href: '/Study-Aboard' },
      { label: 'Tropical Veterinary Medicine', href: '/Study-Aboard' },
    ]
  }
];

const OurServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-sunset-amber text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Explore our custom, professional, and academic programmes across Uganda and East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl shadow-xl hover:shadow-2xl ${service.glow} transition-all duration-500 p-10 border ${service.border} flex flex-col group overflow-hidden`}
            >
              {/* Background glow blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-current opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} ${service.accent} text-3xl`} />
              </div>

              {/* Price badge */}
              <span className={`text-xs font-semibold uppercase tracking-widest ${service.accent} mb-2`}>
                {service.price} per person
              </span>

              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.desc}</p>

              {service.list && (
                <ul className="mb-8 space-y-3 flex-grow">
                  {service.list.map((item) => (
                    <li key={item.label} className="flex items-start text-sm text-gray-400">
                      <i className="ri-checkbox-circle-fill mr-2 text-sunset-gold mt-0.5 flex-shrink-0" />
                      <Link href={item.href} className="hover:text-sunset-honey transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto pt-6 border-t border-white/10">
                <Link
                  href={service.href}
                  className={`inline-flex items-center font-bold ${service.accent} hover:opacity-80 group/link transition-opacity`}
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
