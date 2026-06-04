"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Ugandan8daysPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    







    {/*  Updated Hero Section  */}
    {/*  Updated Hero Section  */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/*  Parallax Background with subtle zoom effect  */}
        <div className="absolute inset-0 parallax-bg bg-cover bg-center transition-transform duration-1000 ease-out transform scale-100 hover:scale-105" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=luxury%20safari%20uganda%20gorilla%20trekking%20luxury%20lodge%20bwindi%20chimpanzees%20kibale%20forest%20professional%20wildlife%20photography%20elegant%20safari%20experience&width=1920&height=1080&seq=8day-luxury-hero&orientation=landscape')"}}>
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
                <span className="inline-block px-4 py-2 bg-amber-500/30 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium tracking-wider border border-amber-400/30">
                    LUXURY PRIVATE SAFARI
                </span>
            </div>

            {/*  Main Headline with Gradient Text  */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-green-300 to-amber-400">
                    Experience Uganda in Style
                </span>
                <span className="block mt-2 text-white">From Chimpanzees to Gorillas</span>
            </h1>

            {/*  Description with Animated Underline  */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 relative inline-block group">
                <span>8-Day Luxury Safari: Chimpanzees, Gorillas & Premium Lodges</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </p>

            {/*  CTA Button with Glow Effect  */}
            <button id="startPlanningBtn" className="relative overflow-hidden group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/20">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Start Your Luxury Journey</span>
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
    {/*  Updated Itinerary Section  */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">8-Day Luxury Uganda Safari</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">From chimpanzee trekking in Kibale to gorilla
                    encounters in Bwindi, all in Uganda's finest luxury lodges</p>
            </div>

            <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line rounded-full"></div>
                <div className="space-y-12">

                    {/*  Day 1  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 1: Arrival in Entebbe</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Luxury
                                    Arrival</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-plane-line text-amber-500"></i>
                                        </div>
                                        Arrival & Welcome
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Arrive at Entebbe International Airport</li>
                                        <li>• Private meet & greet by your guide</li>
                                        <li>• Luxury transfer to Hotel No.5</li>
                                        <li>• Welcome dinner and safari briefing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-amber-500"></i>
                                        </div>
                                        Luxury Accommodation
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Hotel No.5 Entebbe</li>
                                        <li>• Premier luxury hotel experience</li>
                                        <li>• Unwind after your international flight</li>
                                        <li>• Personalized service from arrival</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-sparkling-line text-amber-600"></i>
                                    </div>
                                    Luxury Touch
                                </h4>
                                <p className="text-gray-600 text-sm">Hotel No.5 is Entebbe's premier luxury hotel, offering
                                    exquisite service, gourmet dining, and perfect relaxation before your safari
                                    adventure.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 2-3  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">2-3</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 2-3: Chimpanzee Trekking in Kibale
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kibale Forest
                                    National Park</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-star-line text-green-500"></i>
                                        </div>
                                        Primate Experience
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Travel to Kibale Forest National Park</li>
                                        <li>• Guided chimpanzee trekking experience</li>
                                        <li>• See 13 primate species in their habitat</li>
                                        <li>• Nature walks through tropical forest</li>
                                        <li>• Cultural village visits</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-green-500"></i>
                                        </div>
                                        Luxury Forest Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Primate Lodge Kibale</li>
                                        <li>• Luxury lodge nestled inside the park</li>
                                        <li>• Forest canopy views from your room</li>
                                        <li>• Gourmet meals with local ingredients</li>
                                        <li>• Evening wildlife sounds</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-leaf-line text-green-600"></i>
                                    </div>
                                    Primate Capital
                                </h4>
                                <p className="text-gray-600 text-sm">Kibale Forest has the highest concentration of primates
                                    in Africa. Primate Lodge offers exclusive access right in the heart of the forest.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 4-5  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">4-5</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 4-5: Wildlife in Queen Elizabeth NP
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Queen Elizabeth
                                    National Park</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-safari-line text-blue-500"></i>
                                        </div>
                                        Wildlife Adventures
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Morning and afternoon game drives</li>
                                        <li>• Search for tree-climbing lions</li>
                                        <li>• Elephant herds in Kasenyi plains</li>
                                        <li>• Scenic boat cruise on Kazinga Channel</li>
                                        <li>• Hippo and crocodile viewing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Iconic Safari Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Mweya Safari Lodge</li>
                                        <li>• Most iconic luxury lodge in the park</li>
                                        <li>• Panoramic views of Kazinga Channel</li>
                                        <li>• Infinity pool overlooking wildlife</li>
                                        <li>• Fine dining with local flavors</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-lion-line text-blue-600"></i>
                                    </div>
                                    Wildlife Diversity
                                </h4>
                                <p className="text-gray-600 text-sm">Queen Elizabeth NP has 95 mammal species and over 600
                                    bird species. Mweya Lodge's location offers unparalleled wildlife viewing from your
                                    room.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 6-7  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">6-7</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 6-7: Gorilla Trekking in Bwindi</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Bwindi
                                    Impenetrable National Park</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-heart-line text-purple-500"></i>
                                        </div>
                                        Gorilla Encounter
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Travel to Bwindi Impenetrable Forest</li>
                                        <li>• Morning briefing with park rangers</li>
                                        <li>• Gorilla trekking through ancient forest</li>
                                        <li>• 1 hour with mountain gorilla family</li>
                                        <li>• Emotional, life-changing experience</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-purple-500"></i>
                                        </div>
                                        Serene Forest Lodge
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Buhoma Lodge</li>
                                        <li>• Upscale lodge with breathtaking views</li>
                                        <li>• Forest canopy and mountain vistas</li>
                                        <li>• Luxury cottages with fireplaces</li>
                                        <li>• Spa treatments available</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-heart-line text-purple-600"></i>
                                    </div>
                                    Conservation Success
                                </h4>
                                <p className="text-gray-600 text-sm">Bwindi is home to nearly half of the world's remaining
                                    mountain gorillas. Your visit supports critical conservation efforts for these
                                    endangered primates.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 8  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">8</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 8: Return to Entebbe</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Journey
                                    Home</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-sun-line text-gray-500"></i>
                                        </div>
                                        Final Morning
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Final breakfast overlooking the forest</li>
                                        <li>• Last moments enjoying lodge luxury</li>
                                        <li>• Souvenir shopping at lodge boutique</li>
                                        <li>• Farewell from lodge staff</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-plane-line text-gray-500"></i>
                                        </div>
                                        Return Journey
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Scenic drive back to Entebbe</li>
                                        <li>• Stop for lunch at premium restaurant</li>
                                        <li>• Drop-off at Entebbe Airport</li>
                                        <li>• Or your preferred hotel in Entebbe/Kampala</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-flight-takeoff-line text-gray-600"></i>
                                    </div>
                                    Departure Notes
                                </h4>
                                <p className="text-gray-600 text-sm">Schedule international flights for evening (after 7pm).
                                    We can arrange additional nights at Hotel No.5 if you prefer to depart the following
                                    day.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/*  Image Gallery  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Luxury Safari Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/*  Thumbnail Images  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury1.png" alt="Hotel No.5 Entebbe" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury2.png" alt="Primate Lodge Kibale" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury3.png" alt="Chimpanzee Trekking" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury4.png" alt="Mweya Safari Lodge" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury5.png" alt="Game Drive in Queen Elizabeth" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury6.png" alt="Buhoma Lodge Bwindi" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury7.png" alt="Mountain Gorilla Encounter" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/8day-luxury/luxury8.png" alt="Luxury Safari Vehicle" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
        </div>
    </section>

    {/*  NEW: Tour Details & Luxury Accommodations Section  */}
    {/*  NEW: Luxury Tour Details & Accommodations Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Tour Details</h2>
                <p className="text-xl text-gray-600">Handpicked premium lodges with exceptional service and sustainable
                    tourism</p>
            </div>

            {/*  Luxury Accommodations Highlight  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Luxury Accommodations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/*  Hotel No.5  */}
                    <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg border border-amber-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/8day-luxury/hotel-no5.jpg" alt="Hotel No.5 Entebbe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Hotel No.5</h4>
                                    <p className="text-gray-600 text-sm">Entebbe • 1 Night</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Premium
                                    Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Entebbe's premier luxury hotel offering exquisite
                                service and gourmet dining.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-wifi-line mr-2 text-amber-600"></i>
                                    <span>Premium WiFi</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-restaurant-line mr-2 text-amber-600"></i>
                                    <span>Fine Dining Restaurant</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-spa-line mr-2 text-amber-600"></i>
                                    <span>Spa Services</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Primate Lodge Kibale  */}
                    <div className="bg-green-50 rounded-2xl overflow-hidden shadow-lg border border-green-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/8day-luxury/primate-lodge.jpg" alt="Primate Lodge Kibale" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Primate Lodge Kibale</h4>
                                    <p className="text-gray-600 text-sm">Kibale NP • 2 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Forest
                                    Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Luxury lodge nestled inside Kibale Forest with canopy
                                views.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-tree-line mr-2 text-green-600"></i>
                                    <span>Forest Canopy Views</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-hotel-line mr-2 text-green-600"></i>
                                    <span>Luxury Cottages</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-fire-line mr-2 text-green-600"></i>
                                    <span>Fireplace Rooms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Mweya Safari Lodge  */}
                    <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg border border-blue-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/8day-luxury/mweya-lodge.jpg" alt="Mweya Safari Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Mweya Safari Lodge</h4>
                                    <p className="text-gray-600 text-sm">Queen Elizabeth • 2 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Iconic
                                    Lodge</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Most iconic luxury lodge in Queen Elizabeth with
                                panoramic views.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-landscape-line mr-2 text-blue-600"></i>
                                    <span>Kazinga Channel Views</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-swimming-pool-line mr-2 text-blue-600"></i>
                                    <span>Infinity Pool</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-restaurant-2-line mr-2 text-blue-600"></i>
                                    <span>Fine Dining</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Buhoma Lodge  */}
                    <div className="bg-purple-50 rounded-2xl overflow-hidden shadow-lg border border-purple-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/8day-luxury/buhoma-lodge.jpg" alt="Buhoma Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Buhoma Lodge</h4>
                                    <p className="text-gray-600 text-sm">Bwindi • 2 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Forest
                                    Retreat</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Upscale lodge with breathtaking forest and mountain
                                views.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-mountain-line mr-2 text-purple-600"></i>
                                    <span>Mountain Views</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-fireplace-line mr-2 text-purple-600"></i>
                                    <span>Fireplace Cottages</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-spa-line mr-2 text-purple-600"></i>
                                    <span>Spa Treatments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tour Features Grid  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Exclusive Tour Features</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white border border-amber-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-crown-line text-amber-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Luxury Tour</h4>
                        <p className="text-gray-600 text-sm">Premium lodges throughout your journey</p>
                    </div>
                    <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-calendar-line text-blue-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Flexible Dates</h4>
                        <p className="text-gray-600 text-sm">Start any day (subject to availability)</p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-settings-3-line text-green-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Fully Customizable</h4>
                        <p className="text-gray-600 text-sm">Adjust itinerary to suit your preferences</p>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-group-line text-purple-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Group Focused</h4>
                        <p className="text-gray-600 text-sm">Ideal for couples, families & small groups</p>
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-600 text-sm">
                    <p><span className="font-semibold">Note:</span> Minimum age 18 years. Not suitable for solo travelers.
                    </p>
                </div>
            </div>

            {/*  What's Included/Excluded  */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-check-line text-amber-600"></i>
                        </div>
                        What's Included
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Airport transfers (available upon request)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All internal transport in luxury 4x4 pop-up roof vehicle</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Experienced English-speaking driver/guide</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Gorilla trekking permit* (USD 700 value)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Chimpanzee trekking permit</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All luxury accommodations (7 nights)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All meals as listed in itinerary</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Park fees, boat cruise, and guided activities</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-amber-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Bottled water during game drives</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                        <p className="text-sm text-gray-600"><span className="font-semibold">Note:</span> Gorilla permits are
                            limited and must be booked early. We recommend booking at least 6 months in advance for peak
                            season.</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-close-line text-gray-600"></i>
                        </div>
                        What's Not Included
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">International flights to/from Uganda</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Uganda visa fees (USD $50)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Travel and medical insurance</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Premium alcoholic beverages</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal shopping and souvenirs</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Tips for guides and lodge staff</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Optional spa treatments</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-gray-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal expenses</span>
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
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Safari Pricing</h2>
                <p className="text-xl text-gray-600">All-inclusive 8-day luxury tour with premium accommodations</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-amber-200">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">8-Day Luxury Uganda Safari Package</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Luxury tour package (per person)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Gorilla trekking permit*</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Chimpanzee trekking permit</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Premium activities & park fees</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 font-bold text-lg bg-amber-50 px-4 rounded-lg border border-amber-100">
                                <span className="text-gray-900">Estimated Total per person (subject to change by season/time)</span>
                                <span className="text-amber-600 text-2xl">$9,400 USD*</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 italic">*Prices are subject to change based on season,
                            availability, and exchange rates.</p>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h4 className="font-semibold text-blue-800 mb-2">Premium Booking Benefits</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• Complimentary spa treatment at one lodge</li>
                                <li>• Private vehicle with pop-up roof for optimal viewing</li>
                                <li>• Airport transfers included upon request</li>
                                <li>• Priority gorilla permit allocation</li>
                                <li>• Customized dining preferences accommodated</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-6 shadow-lg mb-6 border border-amber-100">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-check-line text-amber-500"></i>
                                </div>
                                Luxury Inclusions Summary
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• 7 nights in Uganda's finest luxury lodges</li>
                                <li>• All gourmet meals as specified</li>
                                <li>• Professional English-speaking guide</li>
                                <li>• Private luxury 4x4 pop-up roof vehicle</li>
                                <li>• Gorilla & chimpanzee permits included</li>
                                <li>• All park entrance and activity fees</li>
                                <li>• Kazinga Channel boat cruise</li>
                                <li>• Game drives in Queen Elizabeth NP</li>
                                <li>• Bottled water and snacks throughout</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-information-line text-blue-500"></i>
                                </div>
                                Important Notes
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Price based on double occupancy</li>
                                <li>• Single supplement: $1,800</li>
                                <li>• Gorilla permits non-refundable once issued</li>
                                <li>• Minimum age: 18 years</li>
                                <li>• Maximum group: 4 people (for premium experience)</li>
                                <li>• 40% deposit required to confirm booking</li>
                                <li>• Not suitable for solo travelers</li>
                                <li>• Recommended booking: 6+ months in advance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap mr-4 book-adventure-btn">
                        Book Your Luxury Safari
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap">
                        Request Custom Luxury Quote
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your 8-Day Luxury Uganda Safari</h2>
                
                <form id="customBookingForm" className="space-y-6">
                    <input type="hidden" name="safari" defaultValue="8-Day Luxury Uganda Safari" />
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
