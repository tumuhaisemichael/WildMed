"use client";

import React, { useEffect, useState } from 'react';

const StickyBookButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 80vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openExpeditionModal'));
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <button
        onClick={openModal}
        aria-label="Book your safari"
        className="group flex items-center gap-2 bg-gradient-to-r from-sunset-gold to-sunset-amber hover:from-sunset-amber hover:to-sunset-coral text-black px-5 py-3.5 rounded-full font-bold shadow-2xl hover:shadow-sunset-gold/40 hover:-translate-y-0.5 transition-all duration-300 text-sm"
      >
        <i className="ri-map-pin-line text-base" />
        <span>Book Now</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full ring-4 ring-sunset-gold/30 animate-ping opacity-60 group-hover:opacity-0" />
      </button>
    </div>
  );
};

export default StickyBookButton;
