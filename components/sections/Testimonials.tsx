"use client";

import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Veterinary Medicine Student, UK',
    text: 'The Veterinary Conservation Expedition completely changed my perspective on wildlife medicine. Working alongside local vets in Uganda was an experience I\'ll carry throughout my career.',
    rating: 5,
    img: '/img/home/move4.jpg',
  },
  {
    name: 'James Okafor',
    role: 'Conservation Biologist, Nigeria',
    text: 'WildMed organized the most seamless and scientifically enriching expedition I\'ve ever attended. The gorilla trekking in Bwindi was absolutely phenomenal.',
    rating: 5,
    img: '/img/home/move6.jpg',
  },
  {
    name: 'Prof. Anna Bergström',
    role: 'University of Stockholm',
    text: 'We brought a group of 18 students and the logistics were flawless. The One Health programme exceeded our curriculum expectations in every way.',
    rating: 5,
    img: '/img/home/move8.jpg',
  },
  {
    name: 'Dr. Kwame Asante',
    role: 'Medical Professional, Ghana',
    text: 'The Medical Expedition Programme in Tanzania gave me hands-on experience in tropical medicine I simply could not get at home. Highly recommended.',
    rating: 5,
    img: '/img/home/move2.jpg',
  },
  {
    name: 'Emily Chen',
    role: 'Wildlife Photographer, Canada',
    text: 'From Kidepo to Queen Elizabeth Park, WildMed\'s custom safari was beautifully curated. Every detail was thoughtful and the wildlife encounters were breathtaking.',
    rating: 5,
    img: '/img/home/move9.jpg',
  },
];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scroll = (dir: number) => {
    const next = (active + dir + testimonials.length) % testimonials.length;
    setActive(next);
  };

  useEffect(() => {
    const interval = setInterval(() => scroll(1), 6000);
    return () => clearInterval(interval);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sunset-purple/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-brown/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-3">
            What Our Clients Say
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-white">Stories from the Field</h2>
          <p className="text-gray-400 text-lg">Real experiences from travellers, researchers, and professionals</p>
        </div>

        {/* Testimonial card */}
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-3xl p-10 border border-sunset-brown/20 shadow-2xl transition-all duration-500">
          {/* Quote mark */}
          <i className="ri-double-quotes-l text-6xl text-sunset-gold/20 absolute top-6 left-8 leading-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-sunset-gold/40 shadow-lg">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-sunset-gold text-sm" />
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sunset-honey text-sm">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === active ? 'w-8 bg-sunset-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full border border-sunset-brown/40 hover:border-sunset-gold text-gray-400 hover:text-sunset-gold flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-sunset-brown/40 hover:border-sunset-gold text-gray-400 hover:text-sunset-gold flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {testimonials
            .filter((_, idx) => idx !== active)
            .slice(0, 4)
            .map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActive(testimonials.indexOf(t))}
                className="group text-left p-4 rounded-2xl bg-slate-800/50 border border-sunset-brown/10 hover:border-sunset-gold/30 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 truncate group-hover:text-sunset-honey transition-colors">{t.name}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">"{t.text}"</p>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
