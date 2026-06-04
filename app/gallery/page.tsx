"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function galleryPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    







    {/*  Hero Section  */}
    {/*  Modern Hero Section  */}
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden mt-0">
        {/*  Background Video  */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-wildlife-in-the-forest-1583-large.mp4" type="video/mp4" />
            {/*  Fallback image  */}
            <img src="https://readdy.ai/api/search-image?query=African%20savanna%20sunset%20with%20silhouettes%20of%20wildlife%2C%20dramatic%20colors%2C%20professional%20wildlife%20photography&width=1920&height=1080&seq=hero_fallback&orientation=landscape" alt="African wildlife" className="w-full h-full object-cover" />
        </video>

        {/*  Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/40 to-emerald-900/70 z-1">
        </div>

        {/*  Animated Particles  */}
        <div id="particles-js" className="absolute inset-0 z-2"></div>

        {/*  Content Container  */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            {/*  Animated Title  */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                <span className="inline-block animate-fadeInUp">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500">
                        WildMed Gallery
                    </span>
                </span>
            </h1>

            {/*  Subtitle with Typing Animation  */}
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto animate-fadeIn delay-300">
                <span id="typing-text" className="border-r-2 border-amber-400 pr-1"></span>
            </p>

            {/*  Interactive Button  */}
            <div className="animate-fadeIn delay-500">
                <a href="#gallery" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                    <span>Explore Gallery</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>

            {/*  Scroll Indicator  */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    </section>

    {/*  CSS for Animations  */}
    

    {/*  JavaScript for Typing Effect  */}
    

    {/*  Include particles.js library  */}
    
    {/*  Gallery Section  */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Safari Moments</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Browse through our collection of breathtaking
                    wildlife photography and unforgettable safari experiences</p>
            </div>

            {/*  Gallery Toggle commented out
            <div className="gallery-toggle">
                <button id="photos-btn" className="active">Photos</button>
                <button id="videos-btn">Videos</button>
            </div>
             */}

            {/*  Photos Gallery  */}
            <div id="photos-gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Images from assets/15 day trip  */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day1.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day1.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                {/*  Repeat for all 15day images  */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day2.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day2.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day3.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day3.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day4.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day4.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day5.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day5.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day6.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day6.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day7.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day7.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day8.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day8.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day9.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day9.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day10.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day10.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day11.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day11.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day12.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day12.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day13.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day13.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day14.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day14.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day15.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day15.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day16.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day16.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day17.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day17.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/15day18.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/15day18.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/20240616_094407-a60a.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/20240616_094407-a60a.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/20240617_213355-4147.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/20240617_213355-4147.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/Livestock and Zebras grazing2.jpeg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/Livestock and Zebras grazing2.jpeg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/15 day trip/culture.jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/15 day trip/culture.jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>

                {/*  Images from assets/gallery (EFE)  */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (1).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (1).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (2).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (2).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (3).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (3).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (4).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (4).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (5).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (5).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (6).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (6).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (7).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (7).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (8).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (8).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (9).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (9).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (10).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (10).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (11).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (11).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (12).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (12).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (13).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (13).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (14).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (14).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (15).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (15).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (16).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (16).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (17).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (17).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (18).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (18).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (19).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (19).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (20).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (20).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (21).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (21).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (22).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (22).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (23).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (23).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img src="assets/gallery/EFE (24).jpg" alt="WildMed Safaris" className="w-full h-96 object-cover image-hover cursor-pointer" data-caption="WildMed Safaris" data-fullsize="assets/gallery/EFE (24).jpg" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">WildMed Safaris</h3>
                            <p className="text-sm">WildMed Safaris</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Videos Gallery commented out
            <div id="videos-gallery" className="video-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ... 
            </div>
             */}

            {/*  View More Photos button removed as all images are shown  */}
        </div>
    </section>

    {/*  Lightbox  */}
    <div className="lightbox" id="lightbox">
        <div className="lightbox-content">
            <span className="lightbox-close" id="lightbox-close"><i className="ri-close-line"></i></span>
            <img src="" alt="" className="lightbox-img" id="lightbox-img" />
            <div className="lightbox-caption" id="lightbox-caption"></div>
        </div>
    </div>

    {/*  Call to Action  */}
    <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=African%20sunset%20over%20savanna%20with%20silhouettes%20of%20acacia%20trees%2C%20warm%20golden%20and%20orange%20sky%2C%20peaceful%20wilderness%20atmosphere%2C%20cinematic%20landscape%20photography%2C%20inspiring%20and%20adventurous%20mood%2C%20perfect%20for%20travel%20marketing&width=1920&height=600&seq=cta1&orientation=landscape')"}}>
        </div>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Inspired by These Moments?</h2>
            <p className="text-xl mb-8">Join a WildMed Safari to capture your own unforgettable wildlife experiences</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 !rounded-button text-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                    Book Your Safari Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 !rounded-button text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                    Contact Us
                </button>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    
    









    </div>
  );
}
