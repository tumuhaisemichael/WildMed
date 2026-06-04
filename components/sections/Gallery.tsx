"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const row1 = [
  { src: '/img/home/move1.jpg',  alt: 'Gorilla trekking in Bwindi Forest' },
  { src: '/img/home/move2.jpg',  alt: 'Chimpanzee encounter, Kibale' },
  { src: '/img/home/move3.jpg',  alt: 'Elephant herd in the savanna' },
  { src: '/img/home/move4.jpg',  alt: 'Field work session' },
  { src: '/img/home/move5.jpg',  alt: 'Sunrise safari drive' },
  { src: '/img/home/move11.jpg', alt: 'Leopard tracking expedition' },
  { src: '/img/home/move12.jpg', alt: 'Bird watching in the wetlands' },
  { src: '/img/home/move13.jpeg', alt: 'Community conservation meeting' },
  { src: '/img/home/MtElogn.webp', alt: 'Trekking on Mt. Elgon' },
  { src: '/img/home/kibale.webp', alt: 'Rainforest canopy walk' },
];

const row2 = [
  { src: '/img/home/move6.jpg',  alt: 'Student field research' },
  { src: '/img/home/move7.jpg',  alt: 'Mountain gorilla family' },
  { src: '/img/home/move8.jpg',  alt: 'Medical expedition team' },
  { src: '/img/home/move9.jpg',  alt: 'Lions of Kidepo Valley' },
  { src: '/img/home/move10.jpg', alt: 'Boat safari exploration' },
  { src: '/img/home/move14.jfif', alt: 'Traditional cultural encounter' },
  { src: '/img/home/move15.jfif', alt: 'Wildflower survey in the valley' },
  { src: '/img/home/move16.jfif', alt: 'Veterinary care in the field' },
  { src: '/img/home/kidapo.webp', alt: 'Rugged landscape of Kidepo' },
  { src: '/img/home/lakemburo.webp', alt: 'Sunset over Lake Mburo' },
  { src: '/img/home/rwen.webp', alt: 'The majestic Rwenzori Mountains' },
];

const Gallery = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedImg, setSelectedImg] = useState<{src: string, alt: string} | null>(null);

  useEffect(() => setMounted(true), []);

  const openLightbox = (img: {src: string, alt: string}) => {
    setSelectedImg(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = '';
  };

  if (!mounted) return null;

  return (
    <section className="py-20 bg-slate-950 overflow-hidden relative border-t border-white/5">
      {/* Soft edge masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-3">
          Moments from the Wild
        </span>
        <h2 className="text-4xl font-bold text-white mb-4">Experience the Journey</h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          A glimpse into our recent field expeditions, wildlife encounters, and professional training programs across East Africa.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Left Moving */}
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll-slow hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(img)}
                className="relative w-[300px] h-[200px] mx-3 rounded-2xl overflow-hidden group shadow-2xl border border-white/5 cursor-pointer bg-slate-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-2">
                     <i className="ri-expand-diagonal-line text-white text-xs" />
                   </div>
                   <p className="text-white text-xs font-bold leading-tight whitespace-normal">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Moving */}
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll-slow-reverse hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(img)}
                className="relative w-[300px] h-[200px] mx-3 rounded-2xl overflow-hidden group shadow-2xl border border-white/5 cursor-pointer bg-slate-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-2">
                     <i className="ri-expand-diagonal-line text-white text-xs" />
                   </div>
                   <p className="text-white text-xs font-bold leading-tight whitespace-normal">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center relative z-10">
        <Link
          href="/gallery"
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-slate-300 font-bold hover:bg-sunset-gold hover:text-black hover:border-sunset-gold transition-all duration-300 shadow-lg"
        >
          <span>View Full Collection</span>
          <i className="ri-arrow-right-line" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-6"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <i className="ri-close-line text-4xl" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
            <Image
              src={selectedImg.src}
              alt={selectedImg.alt}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white font-bold text-lg px-6">{selectedImg.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-slow {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-slow-reverse {
          animation: scroll-reverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
