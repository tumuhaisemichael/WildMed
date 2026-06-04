"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function recentgalleryPage() {
  return (
    <div className="bg-white">
      

    

    {/*  Hero Section  */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
            <img src="https://readdy.ai/api/search-image?query=professional%20wildlife%20photographer%20in%20african%20savanna%20with%20large%20lens%20golden%20hour%2C%20cinematic%20lighting%2C%20adventure%20atmosphere&width=1920&height=1080&seq=recent_hero&orientation=landscape" alt="Field Photography" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="italic text-amber-500">Recent</span> Field Moments
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
                A curated collection of the latest wildlife sightings, team field work, and medical expeditions directly
                from our current missions.
            </p>
            <div className="flex justify-center space-x-4">
                <div className="flex items-center text-white/80 text-sm">
                    <i className="ri-calendar-line mr-2 text-amber-500"></i>
                    <span>Updated: Jan 2026</span>
                </div>
                <div className="flex items-center text-white/80 text-sm border-l border-white/30 pl-4">
                    <i className="ri-map-pin-line mr-2 text-amber-500"></i>
                    <span>Uganda & Rwanda</span>
                </div>
            </div>
        </div>
    </section>

    {/*  Gallery Content  */}
    <main className="max-w-7xl mx-auto px-6 py-16">

        {/*  Tab Controls  */}
        <div className="flex flex-col items-center mb-16">
            <div className="inline-flex p-1 bg-gray-200/50 rounded-full mb-8">
                <button id="tab-images" className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-white shadow-sm text-green-700">
                    <i className="ri-image-line mr-2"></i> Recent Photos
                </button>
                <button id="tab-videos" className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 text-gray-600 hover:text-green-700">
                    <i className="ri-video-line mr-2"></i> Recent Clips
                </button>
            </div>
            <p className="text-gray-500 text-center max-w-xl">
                Select a category to view our latest updates from the field expeditions. All media captured by our
                professional guides and researchers.
            </p>
        </div>

        <div id="gallery-images" className="animate-gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Image 1  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.27.38 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 2  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.27.39 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 3  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.28.11 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 4  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.31 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 5  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.34 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 6  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.37 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 7  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.42 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 8  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.46 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 9  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.47 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 10  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.49 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 11  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.50 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 12  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.30.51 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 13  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.00 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 14  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.02 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 15  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.03 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 16  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.05 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 17  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.06 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 18  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.08 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 19  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.09 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 20  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.10 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 21  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.12 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 22  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.13 AM (1).jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 23  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.13 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 24  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.15 AM (1).jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 25  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.15 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 26  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.16 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 27  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.17 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 28  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.19 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 29  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image 2026-01-29 at 8.31.20 AM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/Image1.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/newimage4 PM.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>

                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/newimage6.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/newimage7.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/newimage8.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
                {/*  Image 30  */}
                <div className="gallery-item group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img src="assets/recent/imgs/newimage9.jpeg" alt="Field Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">WildMed</span>
                        <h3 className="text-white text-2xl font-bold">Field Moment</h3>
                    </div>
                </div>
            </div>
        </div>

        <div id="gallery-videos" className="hidden animate-gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/*  Video 1  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.28.23 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 2  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.34.30 AM (1).mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 3  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.34.30 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 4  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.35.37 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 5  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.38.21 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 6  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.38.28 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 7  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/WhatsApp Video 2026-01-29 at 8.38.38 AM.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
                {/*  Video 7  */}
                <div className="gallery-item bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <video className="w-full h-full object-cover" controls>
                            <source src="assets/recent/clips/video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase animate-pulse">
                            Recent Clip</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Wildlife Action</h3>
                        <p className="text-gray-600">Fresh footage from our latest field expedition.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    {/*  Lightbox  */}
    <div className="lightbox" id="lightbox">
        <div className="lightbox-content">
            <span className="lightbox-close" id="lightbox-close"><i className="ri-close-line"></i></span>
            <img src="" alt="" className="lightbox-img" id="lightbox-img" />
            <div className="lightbox-caption" id="lightbox-caption"></div>
        </div>
    </div>

    {/*  CTA Section  */}
    <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 italic">Want to capture your own moments?</h2>
            <p className="text-xl text-blue-100 mb-10">Join our upcoming expeditions and experience the thrill of the
                African wilderness firsthand.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="index.html#planExpedition" className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition-all">Book
                    Your Safari</a>
                <a href="Medical-Expedition-Programs.html" className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">Apply
                    for Professional Field Work</a>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    {/*  Back to Top Button  */}
    <button id="backToTop" className="bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
        <i className="ri-arrow-up-line text-2xl group-hover:-translate-y-1 transition-transform block"></i>
    </button>

    







    </div>
  );
}
