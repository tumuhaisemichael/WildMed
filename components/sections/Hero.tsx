"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const heroImages = [
  '/img/home/move1.jpg',
  '/img/home/move3.jpg',
  '/img/home/kibale.webp',
  '/img/home/kidapo.webp',
  '/img/home/lakemburo.webp',
  '/img/home/elephant heard.webp',
];

const stats = [
  { icon: 'ri-earth-line', value: '4', label: 'Countries' },
  { icon: 'ri-compass-3-line', value: '500+', label: 'Expeditions' },
  { icon: 'ri-star-fill', value: '4.9★', label: 'Rating' },
  { icon: 'ri-graduation-cap-line', value: '12+', label: 'Partner Universities' },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPrevImage(currentImage);
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setFading(false);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const openExpeditionModal = () => {
    const event = new CustomEvent('openExpeditionModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Images — crossfade */}
      {heroImages.map((img, idx) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${img}')`,
            opacity: idx === currentImage ? (fading ? 0 : 1) : idx === prevImage ? (fading ? 1 : 0) : 0,
            backgroundAttachment: 'fixed',
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-sunset-purple/30 to-black/85" />

      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-sunset-orange/15 blur-2xl" />
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-sunset-gold/15 blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/10 blur-xl" />

      {/* Slide indicator dots */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentImage ? 'w-8 bg-sunset-gold' : 'w-2 bg-white/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 text-white max-w-2xl">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="italic text-sunset-orange">Wild</span>
                <span className="italic text-sunset-gold">Med</span>
                <span
                  className="block text-3xl md:text-4xl font-light tracking-wide text-sunset-honey mt-2"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Safaris and Field Projects
                </span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed">
              Discover our innovative, science-driven field expeditions that blend luxury, adventure, and exploration
              across the spectacular landscapes of Uganda and East Africa.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openExpeditionModal}
                className="relative overflow-hidden group bg-gradient-to-r from-sunset-gold to-sunset-amber hover:from-sunset-amber hover:to-sunset-coral text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="relative z-10">Plan Your Expedition</span>
                <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
              </button>

              <Link
                href="/Destinations"
                className="relative overflow-hidden group border-2 border-sunset-gold/60 hover:border-sunset-gold text-sunset-honey hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sunset-gold/20"
              >
                Explore Destinations
              </Link>
            </div>
          </div>

          {/* Services card */}
          <div className="safari-card animate-float bg-gradient-to-br from-slate-900/85 via-slate-950/90 to-black/90 p-8 rounded-3xl backdrop-blur-md border border-sunset-brown/30 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-6 text-sunset-orange flex items-center">
              <i className="ri-map-pin-2-line mr-3" />
              Our Services
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-4 text-sunset-orange">
                  <i className="ri-map-pin-line text-xl" />
                </div>
                <div>
                  <Link href="/Custom-Safaris" className="block">
                    <h4 className="font-semibold text-white group-hover:text-sunset-peach transition-colors">
                      Custom Expeditions
                    </h4>
                  </Link>
                  <p className="mt-2 text-sm text-gray-400">
                    Tailored journeys designed around your interests, timelines, and learning goals for individuals, institutions, and groups.
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-4 text-sunset-orange">
                  <i className="ri-star-line text-xl" />
                </div>
                <div>
                  <Link href="/Professional-Biological-Field-Expeditions" className="block">
                    <h4 className="font-semibold text-white group-hover:text-sunset-peach transition-colors">
                      Professional Biological Field Expeditions
                    </h4>
                  </Link>
                  <ul className="mt-2 space-y-1 text-sm text-gray-400 list-disc list-inside">
                    <li><Link href="/Biological-Field-Research-Expeditions" className="hover:text-sunset-peach transition-colors">Tailored Science Driven Field Expeditions</Link></li>
                    <li><Link href="/Veterinary-Conservation-" className="hover:text-sunset-peach transition-colors">Veterinary & Conservation Field Expeditions</Link></li>
                    <li><Link href="/Medical-Expedition-Programs" className="hover:text-sunset-peach transition-colors">Medical Professional Expeditions</Link></li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-4 text-sunset-orange">
                  <i className="ri-graduation-cap-line text-xl" />
                </div>
                <div>
                  <Link href="/Study-Aboard" className="block">
                    <h4 className="font-semibold text-white group-hover:text-sunset-peach transition-colors">
                      Study Abroad Programmes
                    </h4>
                  </Link>
                  <ul className="mt-2 space-y-1 text-sm text-gray-400 list-disc list-inside">
                    <li>Custom science-based programmes</li>
                    <li>One Health Study Abroad programme</li>
                    <li>Tropical Veterinary Medicine and One Health</li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-sunset-brown/30">
              <div className="flex items-center text-sm text-gray-400">
                <i className="ri-shield-check-line mr-2 text-sunset-gold" />
                <span>Certified &amp; Sustainable Tourism</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center px-4 gap-1">
                <i className={`${stat.icon} text-sunset-gold text-xl mb-1`} />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce text-white/60 text-2xl">
          <i className="ri-arrow-down-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
