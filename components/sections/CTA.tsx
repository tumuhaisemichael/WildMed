"use client";

import React from 'react';
import Link from 'next/link';

const CTA = () => {
  const openExpeditionModal = () => {
    const event = new CustomEvent('openExpeditionModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[12s] hover:scale-110"
        style={{ backgroundImage: "url('/img/home/kidapo.webp')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sunset-purple/90 via-slate-950/80 to-black/85" />

      {/* Ambient glows */}
      <div className="absolute top-10 left-20 w-48 h-48 bg-sunset-orange/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-sunset-gold/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Your Adventure Awaits
        </span>
        <h2 className="headline text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready for Your <span className="text-sunset-gold italic">Expedition?</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-300">
          Join us for an unforgettable journey that combines wildlife adventure with meaningful conservation work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={openExpeditionModal}
            className="w-full sm:w-auto bg-gradient-to-r from-sunset-gold to-sunset-amber hover:from-sunset-amber hover:to-sunset-coral text-black px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-sunset-gold/30 hover:-translate-y-0.5"
          >
            Book Your Safari Now
          </button>
          <Link
            href="mailto:wildmeduganda@gmail.com?subject=Brochure Request - WildMed Safaris"
            className="w-full sm:w-auto border-2 border-sunset-gold/60 hover:border-sunset-gold text-sunset-honey hover:bg-sunset-gold/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
          >
            Request Brochure
          </Link>
        </div>

        {/* WhatsApp shortcut */}
        <div className="flex items-center justify-center gap-6 mb-12 text-sm text-gray-400">
          <Link
            href="https://wa.me/256740205146?text=Hi%20WildMed%2C%20I%27d%20like%20to%20plan%20an%20expedition"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <i className="ri-whatsapp-line text-green-400 text-lg" />
            Chat on WhatsApp
          </Link>
          <span className="text-white/20">|</span>
          <Link
            href="mailto:wildmeduganda@gmail.com"
            className="flex items-center gap-2 hover:text-sunset-honey transition-colors"
          >
            <i className="ri-mail-line text-sunset-gold text-lg" />
            wildmeduganda@gmail.com
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
          {[
            { icon: 'ri-shield-check-line', text: 'Secure Booking', color: 'text-sunset-gold' },
            { icon: 'ri-flight-takeoff-line', text: 'Flexible Cancellation', color: 'text-sunset-honey' },
            { icon: 'ri-star-fill', text: '4.9★ Google Rating', color: 'text-sunset-orange' },
            { icon: 'ri-24-hours-line', text: '24/7 Expert Support', color: 'text-sunset-peach' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-300">
              <i className={`${badge.icon} ${badge.color} text-base`} />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
