"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Ugandan14DaysPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    







    {/*  Updated Hero Section  */}
    {/*  Updated Hero Section  */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/*  Parallax Background with subtle zoom effect  */}
        <div className="absolute inset-0 parallax-bg bg-cover bg-center transition-transform duration-1000 ease-out transform scale-100 hover:scale-105" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=luxury%20safari%20uganda%20gorilla%20trekking%20sunset%20lake%20victoria%20exclusive%20lodge%20landscape%2C%20professional%20travel%20photography%2C%20elegant%20wildlife%20experience&width=1920&height=1080&seq=14day-luxury-hero&orientation=landscape')"}}>
        </div>

        {/*  Gradient Overlay with Diagonal Split  */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-transparent"></div>

        {/*  Floating Wildlife Silhouettes  */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-1/4 w-32 h-32">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path d="M50,100 C70,50 130,50 150,100 C170,150 130,180 100,150 C70,120 30,150 50,100 Z" fill="#059669"></path>
                </svg>
            </div>
            <div className="absolute right-20 top-1/3 w-24 h-24">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path d="M100,50 C150,70 150,130 100,150 C50,170 30,130 50,100 C70,70 50,30 100,50 Z" fill="#059669"></path>
                </svg>
            </div>
        </div>

        {/*  Content Container  */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
            {/*  Eyebrow Text  */}
            <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium tracking-wider border border-green-400/30">
                    ULTIMATE LUXURY SAFARI
                </span>
            </div>

            {/*  Main Headline with Gradient Text  */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-green-300 to-green-400">
                    Discover Uganda in
                </span>
                <span className="block mt-2 text-white">Unparalleled Style & Comfort</span>
            </h1>

            {/*  Description with Animated Underline  */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 relative inline-block group">
                <span>14-Day Luxury Safari: Gorillas, Chimps & Exclusive Lodges</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </p>

            {/*  CTA Button with Glow Effect  */}
            <button id="startPlanningBtn" className="relative overflow-hidden group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Start Planning Your Luxury Journey</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            {/*  Scrolling Indicator  */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-8 text-white">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>

        {/*  Bottom Gradient Fade  */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>

    {/*  Updated Itinerary Section  */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">14-Day Ultimate Uganda Luxury Safari</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gorilla trekking, chimpanzee tracking, big game
                    viewing, and exclusive luxury lodges across Uganda's top destinations</p>
            </div>

            <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line rounded-full"></div>
                <div className="space-y-12">

                    {/*  Day 1  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 1: Arrival in Entebbe → Kampala</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Arrival
                                    Day</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-plane-line text-secondary"></i>
                                        </div>
                                        Arrival & Welcome
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Arrive at Entebbe International Airport</li>
                                        <li>• Meet your personal driver-guide</li>
                                        <li>• Transfer to Sheraton Kampala Hotel</li>
                                        <li>• Relax after your international flight</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-secondary"></i>
                                        </div>
                                        Evening in Kampala
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Check into luxury hotel</li>
                                        <li>• Explore Uganda's vibrant capital</li>
                                        <li>• Dinner at hotel or local restaurant</li>
                                        <li>• Briefing about the luxury safari ahead</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-star-line text-blue-600"></i>
                                    </div>
                                    Luxury Accommodation
                                </h4>
                                <p className="text-gray-600 text-sm">Sheraton Kampala Hotel offers 5-star luxury with
                                    exceptional amenities, perfect for starting your Ugandan adventure in comfort.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 2–3  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">2-3</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 2–3: Murchison Falls National Park
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Big Game
                                    Safari</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-lion-line text-orange-500"></i>
                                        </div>
                                        Wildlife Experiences
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Morning and afternoon game drives</li>
                                        <li>• Spot lions, elephants, giraffes</li>
                                        <li>• Boat ride to base of Murchison Falls</li>
                                        <li>• Photography of powerful waterfalls</li>
                                        <li>• Birdwatching along the Nile</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Luxury Lodge Stay
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Paraa Safari Lodge</li>
                                        <li>• Nile River views from your room</li>
                                        <li>• Fine dining with local cuisine</li>
                                        <li>• Sunset cocktails overlooking river</li>
                                        <li>• Spa treatments available</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-landscape-line text-green-600"></i>
                                    </div>
                                    Park Highlight
                                </h4>
                                <p className="text-gray-600 text-sm">Murchison Falls is Uganda's largest national park,
                                    where the Nile River forces through a 7-meter gap creating one of Africa's most
                                    powerful waterfalls.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 4–5  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">4-5</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 4–5: Kibale Forest – Chimp Trekking
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Primate
                                    Paradise</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-star-line text-red-500"></i>
                                        </div>
                                        Chimpanzee Adventures
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Chimpanzee trekking in Kibale Forest</li>
                                        <li>• Observe intelligent primates in habitat</li>
                                        <li>• See 13 primate species including colobus</li>
                                        <li>• Optional forest nature walks</li>
                                        <li>• Birding excursions available</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-tree-line text-green-500"></i>
                                        </div>
                                        Forest Experience
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Chimpundu Lodge</li>
                                        <li>• Luxury accommodation in forest</li>
                                        <li>• Guided forest walks</li>
                                        <li>• Local community visits</li>
                                        <li>• Tea plantation tours available</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-group-line text-yellow-600"></i>
                                    </div>
                                    Primate Capital
                                </h4>
                                <p className="text-gray-600 text-sm">Kibale Forest has one of Africa's highest
                                    concentrations of primates. The chimpanzee habituation experience allows extended
                                    time with these fascinating creatures.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 6–7  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">6-7</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 6–7: Queen Elizabeth National Park
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Diverse
                                    Ecosystems</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-safari-line text-yellow-500"></i>
                                        </div>
                                        Wildlife Activities
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Morning game drives in Kasenyi plains</li>
                                        <li>• Search for tree-climbing lions in Ishasha</li>
                                        <li>• Kazinga Channel boat cruise</li>
                                        <li>• Hippo and crocodile viewing</li>
                                        <li>• Birdwatching (600+ species)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Mweya Safari Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at iconic Mweya Safari Lodge</li>
                                        <li>• Panoramic views of Kazinga Channel</li>
                                        <li>• Luxury rooms with private balconies</li>
                                        <li>• Fine dining with local specialties</li>
                                        <li>• Swimming pool with wildlife views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-ship-line text-purple-600"></i>
                                    </div>
                                    Unique Experience
                                </h4>
                                <p className="text-gray-600 text-sm">The Kazinga Channel boat cruise offers unparalleled
                                    wildlife viewing where hippos, elephants, buffalo, and countless birds gather at the
                                    water's edge.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 8–9  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">8-9</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 8–9: Bwindi – Gorilla Trekking</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">UNESCO World
                                    Heritage</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-heart-line text-green-500"></i>
                                        </div>
                                        Gorilla Trekking Experience
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Gorilla trekking in Bwindi Impenetrable Forest</li>
                                        <li>• UNESCO World Heritage Site</li>
                                        <li>• Once-in-a-lifetime gorilla encounter</li>
                                        <li>• Professional guides and trackers</li>
                                        <li>• Support gorilla conservation efforts</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Four Gorillas Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Luxury stay at Four Gorillas Lodge</li>
                                        <li>• Stunning forest views</li>
                                        <li>• Spa services after trekking</li>
                                        <li>• Gourmet meals with local ingredients</li>
                                        <li>• Cultural performances available</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-heart-line text-blue-600"></i>
                                    </div>
                                    Conservation Highlight
                                </h4>
                                <p className="text-gray-600 text-sm">Bwindi is home to almost half of the world's remaining
                                    mountain gorillas. Your permit directly funds conservation and community
                                    development.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 10–11  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">10-11</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 10–11: Lake Bunyonyi Relaxation</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">"Place of Many
                                    Birds"</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-sailboat-line text-purple-500"></i>
                                        </div>
                                        Lake Activities
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Relaxation after gorilla trekking</li>
                                        <li>• Kayaking on tranquil waters</li>
                                        <li>• Boat rides to different islands</li>
                                        <li>• Hiking around lake shores</li>
                                        <li>• Visiting local communities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Arcadia Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Arcadia Lodge Lake Bunyonyi</li>
                                        <li>• Lakeside luxury accommodation</li>
                                        <li>• Private balconies with lake views</li>
                                        <li>• Fresh local cuisine</li>
                                        <li>• Spa and massage services</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-water-flash-line text-green-600"></i>
                                    </div>
                                    Scenic Beauty
                                </h4>
                                <p className="text-gray-600 text-sm">Lake Bunyonyi is Africa's second deepest lake with 29
                                    islands. Its name means "Place of Many Birds" and offers perfect tranquility after
                                    jungle adventures.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 12  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">12</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 12: Lake Mburo National Park</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Walking Safari
                                    Experience</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-walk-line text-pink-500"></i>
                                        </div>
                                        Unique Safari Activities
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Guided walking safari (unique to Mburo)</li>
                                        <li>• Game drive to see zebra, impala, eland</li>
                                        <li>• Sunset boat cruise on Lake Mburo</li>
                                        <li>• Birdwatching for water species</li>
                                        <li>• Photography of acacia woodlands</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Mihingo Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Luxury stay at Mihingo Lodge</li>
                                        <li>• Built into kopje rock formations</li>
                                        <li>• Infinity pool with wildlife views</li>
                                        <li>• Fine dining with panoramic vistas</li>
                                        <li>• Stargazing from private decks</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-footprint-line text-yellow-600"></i>
                                    </div>
                                    Walking Safari
                                </h4>
                                <p className="text-gray-600 text-sm">Lake Mburo is one of the few Ugandan parks where you
                                    can take guided walking safaris, offering an intimate connection with nature and
                                    wildlife.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 13  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">13</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 13: Jinja – Source of the Nile</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Adventure &
                                    History</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-water-flood-line text-indigo-500"></i>
                                        </div>
                                        Nile Experiences
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Visit the Source of the Nile in Jinja</li>
                                        <li>• Scenic tour of Nile River origins</li>
                                        <li>• Optional white-water rafting</li>
                                        <li>• Kayaking on calmer sections</li>
                                        <li>• Historical exploration of Jinja town</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Wildwaters Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Luxury stay at Wildwaters Lodge</li>
                                        <li>• Private island on the Nile River</li>
                                        <li>• Riverside dining with Nile views</li>
                                        <li>• Spa treatments with river sounds</li>
                                        <li>• Luxury tented accommodation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-history-line text-blue-600"></i>
                                    </div>
                                    Historical Significance
                                </h4>
                                <p className="text-gray-600 text-sm">Jinja is where the Nile River begins its 6,650 km
                                    journey to the Mediterranean. It's known as the adventure capital of East Africa.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 14  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">14</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 14: Return to Kampala → Departure</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Farewell
                                    Day</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-sun-line text-amber-500"></i>
                                        </div>
                                        Final Morning
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Final breakfast at Wildwaters Lodge</li>
                                        <li>• Last views of the Nile River</li>
                                        <li>• Pack and prepare for departure</li>
                                        <li>• Final photos and memories</li>
                                        <li>• Transfer to Kampala or Entebbe</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-flight-takeoff-line text-gray-500"></i>
                                        </div>
                                        Departure Transfer
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Scenic drive back to Kampala</li>
                                        <li>• Lunch en route or in Kampala</li>
                                        <li>• Transfer to Entebbe International Airport</li>
                                        <li>• Check-in for international flight</li>
                                        <li>• Farewell from your guide</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-hearts-line text-yellow-600"></i>
                                    </div>
                                    Journey's End
                                </h4>
                                <p className="text-gray-600 text-sm">Your 14-day luxury Ugandan adventure concludes with
                                    memories of gorillas, chimps, big game, and exclusive lodges that will last a
                                    lifetime.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        {/*  Image Gallery  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">14-Day Adventure Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/*  Thumbnail Images  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury1.png" alt="Sheraton Kampala Hotel Luxury" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury2.png" alt="Murchison Falls Game Drive" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury3.png" alt="Paraa Safari Lodge Luxury" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury4.png" alt="Chimpanzee Tracking Kibale" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury5.png" alt="Mweya Safari Lodge Views" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury6.png" alt="Gorilla Trekking Bwindi" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury7.png" alt="Four Gorillas Lodge Luxury" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/14day-luxury/luxury8.png" alt="Wildwaters Lodge Nile View" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
        </div>
        {/*  The Modal  */}
        <div id="imageModal" className="fixed inset-0 z-50 hidden w-full h-full bg-black bg-opacity-90 overflow-auto">
            <div className="relative w-full h-full flex items-center justify-center">
                {/*  Close Button  */}
                <span className="absolute top-4 right-4 text-white text-4xl font-bold cursor-pointer hover:text-gray-300 transition-colors">×</span>

                {/*  Modal Content  */}
                <div className="max-w-4xl mx-auto p-4">
                    <img id="modalImage" className="max-h-[80vh] max-w-full mx-auto" src="" alt="" />
                    <div id="caption" className="text-white text-center text-xl mt-4"></div>
                </div>

                {/*  Navigation Arrows  */}
                <button className="absolute left-4 text-white text-4xl font-bold cursor-pointer hover:text-gray-300 transition-colors">❮</button>
                <button className="absolute right-4 text-white text-4xl font-bold cursor-pointer hover:text-gray-300 transition-colors">❯</button>
            </div>
        </div>
    </section>

    {/*  NEW: Tour Details & Luxury Accommodations Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Accommodations & Tour Details</h2>
                <p className="text-xl text-gray-600">Exclusive lodges handpicked for exceptional service, scenic locations,
                    and ultimate comfort</p>
            </div>

            {/*  Accommodations Grid  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Luxury Stays</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/*  Sheraton Kampala  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/14day-luxury/sheraton-kampala.jpg" alt="Sheraton Kampala Hotel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Sheraton Kampala</h4>
                                    <p className="text-gray-600 text-sm">Kampala • Day 1</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">5-Star</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">5-star luxury in Uganda's capital with premium
                                amenities and fine dining.</p>
                            <div className="flex items-center text-gray-600 text-sm">
                                <i className="ri-star-line text-amber-500 mr-1"></i>
                                <i className="ri-star-line text-amber-500 mr-1"></i>
                                <i className="ri-star-line text-amber-500 mr-1"></i>
                                <i className="ri-star-line text-amber-500 mr-1"></i>
                                <i className="ri-star-line text-amber-500 mr-1"></i>
                            </div>
                        </div>
                    </div>

                    {/*  Paraa Safari Lodge  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/14day-luxury/paraa-lodge.jpg" alt="Paraa Safari Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Paraa Safari Lodge</h4>
                                    <p className="text-gray-600 text-sm">Murchison Falls • Days 2-3</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Nile River views, infinity pool, and luxury rooms in
                                prime wildlife location.</p>
                            <div className="flex items-center text-gray-600 text-sm">
                                <i className="ri-water-flash-line text-blue-500 mr-2"></i>
                                <span className="text-xs">Nile View</span>
                            </div>
                        </div>
                    </div>

                    {/*  Four Gorillas Lodge  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/14day-luxury/four-gorillas.png" alt="Four Gorillas Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Four Gorillas Lodge</h4>
                                    <p className="text-gray-600 text-sm">Bwindi • Days 8-9</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Forest-edge luxury with spa services and gourmet
                                dining near gorilla families.</p>
                            <div className="flex items-center text-gray-600 text-sm">
                                <i className="ri-tree-line text-green-500 mr-2"></i>
                                <span className="text-xs">Forest View</span>
                            </div>
                        </div>
                    </div>

                    {/*  Wildwaters Lodge  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/14day-luxury/wildwaters.jpg" alt="Wildwaters Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Wildwaters Lodge</h4>
                                    <p className="text-gray-600 text-sm">Jinja • Day 13</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Private island luxury on the Nile River with exclusive
                                tented accommodation.</p>
                            <div className="flex items-center text-gray-600 text-sm">
                                <i className="ri-water-flood-line text-blue-500 mr-2"></i>
                                <span className="text-xs">Nile Island</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tour Features Grid  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Luxury Tour Features</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-user-line text-green-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Private Tour</h4>
                        <p className="text-gray-600 text-sm">Exclusively for you and your group</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-calendar-line text-blue-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Flexible Dates</h4>
                        <p className="text-gray-600 text-sm">Start any day (subject to availability)</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-car-line text-purple-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Private 4x4 Vehicle</h4>
                        <p className="text-gray-600 text-sm">Open-sided for optimal game viewing</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-hotel-line text-amber-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Luxury Lodges</h4>
                        <p className="text-gray-600 text-sm">Handpicked exclusive accommodations</p>
                    </div>
                </div>
            </div>

            {/*  What's Included/Excluded  */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-check-line text-green-600"></i>
                        </div>
                        What's Included
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Airport transfers (Entebbe ↔ Kampala)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All transportation in private open-sided 4x4</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Professional English-speaking guide/driver</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All accommodation in luxury lodges</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Daily meals as specified in itinerary</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All park fees and boat cruises</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Gorilla trekking permit (USD 700 value)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Bottled water during game drives</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All taxes and service charges</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-600"><span className="font-semibold">Note:</span> Gorilla permits are
                            limited and must be booked early. Minimum age: 18 years for gorilla trekking.</p>
                    </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-close-line text-red-600"></i>
                        </div>
                        What's Not Included
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">International flights to/from Uganda</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Uganda visa fees (USD $50)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Travel and medical insurance</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Alcoholic and premium beverages</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Optional adventure activities</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal shopping and souvenirs</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Tips for guides and lodge staff</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal expenses (laundry, phone)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/*  Updated Preparation Guide  */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Safari Preparation Guide</h2>
                <p className="text-xl text-gray-600">Everything you need for your ultimate 14-day luxury Ugandan adventure
                </p>
            </div>
            <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 preparation-toggle" data-target="documentation">
                        <h3 className="text-lg font-semibold text-gray-900">Required Documentation</h3>
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-gray-400 transition-transform duration-200"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 hidden preparation-content" id="documentation">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Essential Documents</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Valid passport (6+ months remaining)</li>
                                    <li>• Uganda visa (available on arrival USD $50)</li>
                                    <li>• Yellow fever vaccination certificate</li>
                                    <li>• Travel insurance with medical evacuation</li>
                                    <li>• Gorilla permit confirmation copy</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Medical Requirements</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Yellow fever vaccination (mandatory)</li>
                                    <li>• Malaria prophylaxis recommended</li>
                                    <li>• COVID-19 vaccination recommended</li>
                                    <li>• Medical fitness for hiking at altitude</li>
                                    <li>• Emergency contact information</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 preparation-toggle" data-target="packing">
                        <h3 className="text-lg font-semibold text-gray-900">Gorilla Trekking Packing List</h3>
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-gray-400 transition-transform duration-200"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 hidden preparation-content" id="packing">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Trekking Gear</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Sturdy waterproof hiking boots</li>
                                    <li>• Garden gloves (for vegetation)</li>
                                    <li>• Walking sticks (provided)</li>
                                    <li>• Waterproof daypack</li>
                                    <li>• Rain poncho or jacket</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Clothing</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Long-sleeved shirts (neutral colors)</li>
                                    <li>• Long pants (quick-dry material)</li>
                                    <li>• Warm layers (fleece/jacket)</li>
                                    <li>• Hat with brim for sun/rain</li>
                                    <li>• Extra socks (wool recommended)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Essential Items</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• High SPF sunscreen</li>
                                    <li>• Insect repellent (DEET based)</li>
                                    <li>• Camera with extra batteries</li>
                                    <li>• Binoculars (8x32 ideal)</li>
                                    <li>• Personal first aid kit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 preparation-toggle" data-target="fitness">
                        <h3 className="text-lg font-semibold text-gray-900">Fitness & Gorilla Trekking Rules</h3>
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-gray-400 transition-transform duration-200"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 hidden preparation-content" id="fitness">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Physical Preparation</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Moderate fitness level required</li>
                                    <li>• Trekking can be 2-6 hours round trip</li>
                                    <li>• Altitude: 2,200-4,000 meters</li>
                                    <li>• Practice hiking with daypack</li>
                                    <li>• Stay hydrated before trek</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Gorilla Trekking Rules</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Maximum 1 hour with gorillas</li>
                                    <li>• Stay 7 meters from gorillas</li>
                                    <li>• No flash photography</li>
                                    <li>• Keep voices low</li>
                                    <li>• Follow guide instructions</li>
                                    <li>• If sick, do not trek</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Updated Pricing Section  */}
    {/*  Updated Pricing Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Safari Pricing</h2>
                <p className="text-xl text-gray-600">All-inclusive 14-day private luxury tour with exclusive accommodations
                </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">14-Day Ultimate Uganda Luxury Safari</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Base luxury tour package (per person)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Gorilla trekking permit*</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Luxury lodge accommodations</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Private 4x4 & expert guide</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">All meals & premium dining</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 font-bold text-lg bg-green-50 px-4 rounded-lg">
                                <span className="text-gray-900">Estimated Total per person (subject to change by season/time)</span>
                                <span className="text-secondary text-2xl">$9,570 USD*</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic">*Prices are subject to change based on season,
                                availability, and exchange rates.</p>
                        </div>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Luxury Benefits</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• Complimentary spa treatment at select lodges</li>
                                <li>• Priority gorilla permit allocation</li>
                                <li>• Welcome gift basket upon arrival</li>
                                <li>• Private check-in at all accommodations</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-check-line text-green-500"></i>
                                </div>
                                Luxury Inclusions Summary
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• All accommodation in luxury lodges (13 nights)</li>
                                <li>• All meals as specified in itinerary</li>
                                <li>• Private English-speaking guide/driver</li>
                                <li>• Open-sided 4x4 private vehicle</li>
                                <li>• Gorilla trekking permit included</li>
                                <li>• All park entrance fees</li>
                                <li>• Boat cruises on Nile, Kazinga, and lakes</li>
                                <li>• Bottled water throughout safari</li>
                                <li>• All taxes and service charges</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-information-line text-blue-500"></i>
                                </div>
                                Important Notes
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Price based on double occupancy</li>
                                <li>• Single supplement: $1,500</li>
                                <li>• Gorilla permits non-refundable</li>
                                <li>• Minimum age: 18 years</li>
                                <li>• 40% deposit to confirm booking</li>
                                <li>• Balance due 60 days before arrival</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-secondary hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap mr-4 book-adventure-btn">
                        Book Your Luxury Safari
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap">
                        Request Custom Luxury Itinerary
                    </button>
                </div>
            </div>
        </div>
    </section>

    

    {/*  Modal for Booking Form  */}
    <div id="bookingModal" className="fixed inset-0 z-50 hidden w-full h-full bg-black bg-opacity-80 overflow-y-auto">
        <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative fade-in">
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold transition-colors" aria-label="Close Modal">×</button>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your 14-Day Luxury Uganda Safari</h2>
                
                <form id="customBookingForm" className="space-y-6">
                    <input type="hidden" name="safari" defaultValue="14-Day Ultimate Uganda Luxury Safari" />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Date</label>
                        <input type="text" id="travelDate" name="date" placeholder="Select travel date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary pl-10 text-black" />
                        <span className="absolute left-3 top-10 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                        <input type="range" min="1" max="6" defaultValue="2" className="w-full" name="groupSize" onInput={undefined} />
                        <span id="groupValue" className="ml-2 text-gray-600">2 person(s)</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level Preference</label>
                        <div className="flex space-x-4">
                            <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="moderate">Moderate</button>
                            <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="intermediate">Intermediate</button>
                            <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="advanced">Advanced</button>
                        </div>
                        <input type="hidden" name="activityLevel" id="activityLevel" defaultValue="moderate" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Level</label>
                        <div className="relative">
                            <button id="accommodationBtn" type="button" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black text-left focus:outline-none focus:ring-2 focus:ring-secondary flex justify-between items-center">
                                <span id="accommodationText">Luxury Lodges (Included)</span>
                                <input type="hidden" name="accommodation" id="accommodationInput" defaultValue="luxury" /> <span className="text-gray-400">▾</span>
                            </button>
                            <div id="accommodationDropdown" className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 hidden shadow-lg z-10">
                                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="luxury">Luxury Lodges (Included)</div>
                                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="premium">Premium Luxury Upgrade (+$1,000)</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                        <textarea name="requests" rows={3} placeholder="e.g., dietary needs, photography focus, cultural interests" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-secondary hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">Submit
                            Booking Request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    

    

    









    </div>
  );
}
