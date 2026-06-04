"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Customisable Expeditions',
    desc: 'We offer flexible, tailor-made expeditions designed for students, researchers, professionals, and adventure travelers.',
    icon: 'ri-compass-3-line',
    accent: 'bg-sunset-gold/10 text-sunset-gold border-sunset-gold/30',
  },
  {
    title: 'Science Meets Adventure',
    desc: 'WildMed Safaris offers innovative field expeditions that combine wildlife exploration with scientific learning.',
    icon: 'ri-microscope-line',
    accent: 'bg-sunset-orange/10 text-sunset-orange border-sunset-orange/30',
  },
  {
    title: 'Authentic Field Experience',
    desc: 'Participate in hands-on activities such as satellite wildlife tracking, biodiversity surveys, and conservation fieldwork.',
    icon: 'ri-safari-line',
    accent: 'bg-sunset-amber/10 text-sunset-amber border-sunset-amber/30',
  },
  {
    title: "Africa's Most Iconic Wildlife Destinations",
    desc: "Our programs take you to extraordinary landscapes across Uganda and East Africa.",
    icon: 'ri-map-pin-line',
    accent: 'bg-sunset-honey/10 text-sunset-honey border-sunset-honey/30',
  },
  {
    title: 'Expert Guidance',
    desc: 'Learn from experienced professionals in wildlife conservation, veterinary medicine, and ecology.',
    icon: 'ri-user-star-line',
    accent: 'bg-sunset-peach/10 text-sunset-peach border-sunset-peach/30',
  },
  {
    title: 'Interdisciplinary Learning',
    desc: 'WildMed integrates veterinary science, conservation, and ecology for a comprehensive understanding.',
    icon: 'ri-graduation-cap-line',
    accent: 'bg-sunset-coral/10 text-sunset-coral border-sunset-coral/30',
  }
];

const WhyChooseUs = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(new Array(features.length).fill(false));

  useEffect(() => {
    const observers = itemRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sunset-amber text-sm font-semibold uppercase tracking-widest mb-3">
            Our Difference
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-gray-900">Science. Adventure. Impact.</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Here's what sets WildMed apart from the rest.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Features list */}
          <div className="space-y-4">
            {features.map((item, idx) => (
              <div
                key={item.title}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className={`flex items-start space-x-4 rounded-2xl bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-sunset-gold/30 transition-all duration-500 ${
                  visible[idx]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`w-10 h-10 flex items-center justify-center ${item.accent} rounded-xl border flex-shrink-0 mt-0.5 shadow-sm`}>
                  <i className={`${item.icon} text-lg`} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-0.5 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2-photo mosaic with subtle parallax feel */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-br from-sunset-gold/20 via-sunset-orange/10 to-sunset-brown/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative grid grid-cols-2 grid-rows-3 gap-4 h-[450px] transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-1">
              {/* Tall left image */}
              <div className="relative row-span-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/home/DSC_0112.JPG"
                  alt="WildMed field expedition in action"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Top right image */}
              <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/img/home/move5.jpg"
                  alt="Wildlife safari experience"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Bottom right accent card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sunset-purple to-slate-950 shadow-xl flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold text-sunset-gold">15+</div>
                  <div className="text-sm text-gray-300 mt-1">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
