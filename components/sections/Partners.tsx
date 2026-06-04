"use client";

import React from 'react';
import Link from 'next/link';

const partners = [
  { name: 'Makerere University', logo: '/assets/logos/mak.png', href: 'https://www.mak.ac.ug/' },
  { name: 'Uganda Wildlife Authority', logo: '/assets/logos/uma.jfif', href: 'https://ugandawildlife.org/' },
  { name: 'African Union of Conservationists', logo: '/assets/logos/auc.jfif', href: 'https://afrucafrica.org/' },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-sunset-gold/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Trusted Collaborators
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">Our Partners</h2>
          <p className="text-gray-400 text-lg">We are proud to collaborate with these respected organizations</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="group flex flex-col items-center justify-center gap-3 w-[180px]"
            >
              <div className="w-[180px] h-[110px] p-5 bg-white/5 border border-sunset-brown/20 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-sunset-gold/40 group-hover:bg-white/10 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 brightness-150 group-hover:brightness-100"
                />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-sunset-honey transition-colors text-center font-medium">
                {partner.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
