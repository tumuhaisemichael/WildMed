import React from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-sunset-purple via-sunset-brown/80 to-slate-950 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
      <Link
        href="/About-Us"
        className="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-10"
      >
        About Us
      </Link>
      <div className="flex items-center justify-center space-x-2">
        <span className="animate-pulse">✨</span>
        <span className="relative z-10">
          Discover Our New 2026 Custom Expeditions!{" "}
          <Link href="/Ugandan-14-Days" className="underline ml-1 hover:text-amber-300 transition-colors">
            Explore Packages →
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
