"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    id: 'uganda',
    country: 'Uganda',
    tagline: 'The Pearl of Africa',
    title: 'Misty Forest Kingdom',
    desc: 'Home to half of the world\'s mountain gorillas, the source of the Nile, and diverse savanna parks.',
    image: '/img/Destination/UG/bwindi.jpeg',
    signature: 'Gorilla Trekking & Murchison Falls',
    parks: ['Bwindi', 'Queen Elizabeth', 'Murchison Falls', 'Kibale'],
    href: '/Uganda-Adventures',
    accent: 'from-sunset-gold/20 to-transparent'
  },
  {
    id: 'kenya',
    country: 'Kenya',
    tagline: 'The Classic Safari',
    title: 'Savanna Legends',
    desc: 'Witness the Great Migration, encounter the Big Five, and immerse yourself in Maasai culture.',
    image: '/img/Destination/Kenya/greatmig.webp',
    signature: 'Maasai Mara & Amboseli Elephants',
    parks: ['Maasai Mara', 'Amboseli', 'Tsavo', 'Lake Nakuru'],
    href: '/Kenya-Safaris',
    accent: 'from-sunset-orange/20 to-transparent'
  },
  {
    id: 'tanzania',
    country: 'Tanzania',
    tagline: 'The Land of Kilimanjaro',
    title: 'Wild Horizon',
    desc: 'From the endless plains of the Serengeti to the tropical paradise of Zanzibar.',
    image: '/img/Destination/TZ/mbalageti-serengeti.jpg',
    signature: 'Serengeti Migration & Ngorongoro Crater',
    parks: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Zanzibar'],
    href: '/Tanzania-Safari',
    accent: 'from-sunset-amber/20 to-transparent'
  },
  {
    id: 'rwanda',
    country: 'Rwanda',
    tagline: 'Land of a Thousand Hills',
    title: 'Volcanic Escapes',
    desc: 'A pristine sanctuary for primates and a testament to remarkable conservation success.',
    image: '/img/Destination/rwanda/volcanoes park.jpeg',
    signature: 'Volcanoes Gorillas & Akagera Safari',
    parks: ['Volcanoes', 'Akagera', 'Nyungwe', 'Lake Kivu'],
    href: '/Rwanda-Safaris',
    accent: 'from-sunset-peach/20 to-transparent'
  }
];

const stats = [
  { label: 'Wildlife Parks', value: '16+', icon: 'ri-safari-line', color: 'text-sunset-gold' },
  { label: 'Academic Partners', value: '12+', icon: 'ri-graduation-cap-line', color: 'text-sunset-orange' },
  { label: 'Unique Itineraries', value: '40+', icon: 'ri-map-2-line', color: 'text-sunset-amber' },
  { label: 'Expert Guides', value: '100%', icon: 'ri-user-star-line', color: 'text-sunset-honey' },
];

export default function DestinationsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/home/DSC_0112.JPG"
          alt="East Africa Landscape"
          fill
          className="object-cover opacity-60 scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-sunset-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.4em] text-sunset-gold font-bold">The Expedition Atlas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-6 drop-shadow-2xl">
            Choose Your <span className="bg-gradient-to-r from-sunset-orange to-sunset-gold bg-clip-text text-transparent">Wild Trail</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            From the misty gorilla sanctuaries of the Albertine Rift to the golden savannas of the Mara, every destination is a different rhythm of the wild.
          </p>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:border-r last:border-0 border-white/5">
              <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Destination Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore the Region</h2>
              <p className="text-slate-400">We specialize in four key East African nations, each offering a unique blend of high-impact wildlife conservation and academic immersion.</p>
            </div>
            <div className="flex gap-2">
              <div className="h-1 w-20 bg-sunset-orange rounded-full" />
              <div className="h-1 w-8 bg-sunset-gold rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {destinations.map((dest) => (
              <div key={dest.id} className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl h-[500px]">
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-90"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.accent} to-slate-950/40`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                   <div className="mb-4">
                      <span className="text-xs uppercase tracking-[0.3em] text-sunset-gold font-black mb-2 block">{dest.tagline}</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{dest.country}</h3>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {dest.desc}
                      </p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 mb-8">
                      {dest.parks.map(park => (
                        <span key={park} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300 font-bold backdrop-blur-md">
                          {park}
                        </span>
                      ))}
                   </div>

                   <Link 
                     href={dest.href}
                     className="inline-flex items-center space-x-3 w-fit bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-sunset-gold hover:text-black transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100"
                   >
                     <span>Explore {dest.country}</span>
                     <i className="ri-arrow-right-line" />
                   </Link>
                </div>

                {/* Corner Label */}
                <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center space-x-2">
                   <i className="ri-map-pin-line text-sunset-gold" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">{dest.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Builder CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05)_0%,transparent_70%)]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 shadow-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to <span className="text-sunset-gold italic">Mix</span> Your Experience?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Our expeditions blend professional wildlife conservation, university placements, and immersive cultural discovery. Tell us your pace, and we'll craft the perfect route.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/Custom-Safaris" 
                className="w-full sm:w-auto bg-sunset-gold text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,165,0,0.3)]"
              >
                Start Planning
              </Link>
              <Link 
                href="/Review" 
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all duration-300"
              >
                See Guest Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
