"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Ugandan4DaysPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    







    {/*  Updated Hero Section  */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/*  Parallax Background with subtle zoom effect  */}
        <div className="absolute inset-0 parallax-bg bg-cover bg-center transition-transform duration-1000 ease-out transform scale-100 hover:scale-105" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=gorilla%20and%20chimpanzee%20in%20uganda%20forest%2C%20bwindi%20impenetrable%20national%20park%20kibale%20forest%20primates%2C%20misty%20mountains%20sunrise%2C%20wildlife%20photography%20professional&width=1920&height=1080&seq=4day-express-hero&orientation=landscape')"}}>
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
                    EXPRESS PRIMATE SAFARI
                </span>
            </div>

            {/*  Main Headline with Gradient Text  */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-green-300 to-green-400">
                    Experience Two Primate Encounters
                </span>
                <span className="block mt-2 text-white">in Just 4 Days!</span>
            </h1>

            {/*  Description with Animated Underline  */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 relative inline-block group">
                <span>4-Day Uganda Express Safari: Gorillas & Chimpanzees from Kigali</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </p>

            {/*  CTA Button with Glow Effect  */}
            <button id="startPlanningBtn" className="relative overflow-hidden group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Book This Express Safari</span>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">4-Day Uganda Express Safari</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Chimpanzee tracking in Kibale Forest & gorilla
                    trekking in Bwindi - all from Kigali</p>
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
                                <h3 className="text-2xl font-bold text-gray-900">Day 1: Kigali to Kibale Forest</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kigali to
                                    Uganda</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-roadster-line text-secondary"></i>
                                        </div>
                                        Morning Journey
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Pickup from Kigali hotel/airport</li>
                                        <li>• Cross border into Uganda</li>
                                        <li>• Scenic drive to Kibale Forest</li>
                                        <li>• Arrive at Kibale Forest National Park</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-star-line text-green-500"></i>
                                        </div>
                                        Afternoon Experience
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Chimpanzee tracking session</li>
                                        <li>• See other primates in the forest</li>
                                        <li>• Check into Kibale Forest Lodge</li>
                                        <li>• Dinner at own expense at lodge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-lightbulb-flash-line text-blue-600"></i>
                                    </div>
                                    Safari Insight
                                </h4>
                                <p className="text-gray-600 text-sm">Kibale Forest is known as Africa's premier chimpanzee
                                    tracking destination, with over 1,500 chimpanzees and 12 other primate species.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 2  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 2: Journey to Bwindi Forest</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kibale to
                                    Bwindi</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-car-line text-orange-500"></i>
                                        </div>
                                        Travel Day
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Breakfast at the lodge</li>
                                        <li>• Scenic drive to Bwindi Forest</li>
                                        <li>• Views of Ugandan countryside</li>
                                        <li>• Lunch en route at local restaurant</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-blue-500"></i>
                                        </div>
                                        Evening Preparation
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Arrive at Rushaga Gorilla Haven's Lodge</li>
                                        <li>• Briefing about gorilla trekking</li>
                                        <li>• Prepare gear for tomorrow's trek</li>
                                        <li>• Dinner and rest at lodge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-team-line text-green-600"></i>
                                    </div>
                                    Expert Guidance
                                </h4>
                                <p className="text-gray-600 text-sm">Bwindi Impenetrable Forest is home to nearly half of
                                    the world's remaining mountain gorillas - about 459 individuals in 36 families.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 3  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 3: Gorilla Trekking Experience</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Bwindi
                                    Impenetrable Forest</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-star-line text-red-500"></i>
                                        </div>
                                        Gorilla Trekking
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Early breakfast at the lodge</li>
                                        <li>• Transfer to park headquarters</li>
                                        <li>• Morning briefing by park rangers</li>
                                        <li>• Trek to find mountain gorilla family</li>
                                        <li>• 1 hour with the gentle giants</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-camera-line text-purple-500"></i>
                                        </div>
                                        Afternoon & Reflection
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Return to lodge for lunch</li>
                                        <li>• Rest and relaxation time</li>
                                        <li>• Review photos and memories</li>
                                        <li>• Optional village community visit</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-shield-check-line text-yellow-600"></i>
                                    </div>
                                    Trekking Essentials
                                </h4>
                                <p className="text-gray-600 text-sm">Trekking can take 2-8 hours depending on gorilla
                                    location. Good fitness required. Minimum age 15. Follow guide instructions at all
                                    times.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 4  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 4: Return to Kigali</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Bwindi to
                                    Kigali</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-sun-line text-yellow-500"></i>
                                        </div>
                                        Morning Departure
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Breakfast at the lodge</li>
                                        <li>• Pack and prepare for departure</li>
                                        <li>• Scenic drive back to Rwanda</li>
                                        <li>• Cross border into Rwanda</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-plane-line text-gray-500"></i>
                                        </div>
                                        Arrival in Kigali
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Lunch en route at local restaurant</li>
                                        <li>• Views of Rwanda's rolling hills</li>
                                        <li>• Drop-off at Kigali hotel/airport</li>
                                        <li>• End of unforgettable safari</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-flight-takeoff-line text-purple-600"></i>
                                    </div>
                                    Departure Notes
                                </h4>
                                <p className="text-gray-600 text-sm">Schedule flights from Kigali for evening (after 5pm) to
                                    allow comfortable travel time. We recommend overnight in Kigali if you have early
                                    morning flights.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/*  Image Gallery  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Safari Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/*  Thumbnail Images  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express1.png" alt="Chimpanzee Tracking Kibale" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express2.png" alt="Mountain Gorillas Bwindi" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express3.png" alt="Kibale Forest Lodge" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express4.png" alt="Rushaga Gorilla Lodge" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express5.png" alt="Bwindi Impenetrable Forest" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express6.png" alt="Scenic Uganda Countryside" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express7.png" alt="Group Safari Experience" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img src="assets/4day-express/express8.png" alt="Kigali City Views" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
        </div>
    </section>
    {/*  Image Gallery  */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">Safari Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/*  Thumbnail Images  */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day1.jpg" alt="Queen Elizabeth National Park" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day2.jpg" alt="Tree-climbing Lions" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day3.jpg" alt="Kazinga Channel Boat Cruise" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day4.jpg" alt="Bwindi Gorilla Trekking" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day5.jpg" alt="Mountain Gorillas" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day6.jpg" alt="Ride 4 a Woman Guesthouse" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day7.jpg" alt="Lake Bunyonyi" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img src="assets/5day-holiday/day8.jpg" alt="Itambira Island Resort" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
        </div>
    </div>

    {/*  NEW: Tour Details & Accommodations Section  */}
    {/*  NEW: Tour Details & Accommodations Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Details & Accommodations</h2>
                <p className="text-xl text-gray-600">Budget-friendly shared group safari with comfortable lodges</p>
            </div>

            {/*  Accommodations Highlight  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Accommodations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/*  Kibale Forest Lodge  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                        <div className="h-64 overflow-hidden">
                            <img src="assets/4day-express/kibale-lodge.png" alt="Kibale Forest Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Kibale Forest Lodge</h4>
                                    <p className="text-gray-600">Kibale National Park • 1 Night</p>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Mid-range</span>
                            </div>
                            <p className="text-gray-600 mb-4">Lodge located inside Kibale Forest National Park, offering
                                easy access for chimpanzee tracking and comfortable accommodation.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-tree-line mr-2 text-green-600"></i>
                                    <span className="text-sm">Inside national park</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-restaurant-line mr-2 text-green-600"></i>
                                    <span className="text-sm">Restaurant available</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-wifi-line mr-2 text-green-600"></i>
                                    <span className="text-sm">Limited WiFi</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-hotel-line mr-2 text-green-600"></i>
                                    <span className="text-sm">En-suite bathrooms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Rushaga Gorilla Haven's Lodge  */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                        <div className="h-64 overflow-hidden">
                            <img src="assets/4day-express/rushaga-lodge.png" alt="Rushaga Gorilla Haven's Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Rushaga Gorilla Haven's Lodge</h4>
                                    <p className="text-gray-600">Bwindi Forest • 2 Nights</p>
                                </div>
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Budget-friendly</span>
                            </div>
                            <p className="text-gray-600 mb-4">Simple and comfortable lodge near Bwindi park entrance,
                                perfect for gorilla trekkers seeking authentic experience at great value.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-map-pin-line mr-2 text-amber-600"></i>
                                    <span className="text-sm">Near park entrance</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-restaurant-line mr-2 text-amber-600"></i>
                                    <span className="text-sm">All meals included</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-fire-line mr-2 text-amber-600"></i>
                                    <span className="text-sm">Hot water available</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <i className="ri-landscape-line mr-2 text-amber-600"></i>
                                    <span className="text-sm">Forest views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tour Features Grid  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tour Features</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-group-line text-green-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Shared Group Tour</h4>
                        <p className="text-gray-600 text-sm">Join other travelers (max 6 people)</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-wallet-3-line text-blue-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Budget-Friendly</h4>
                        <p className="text-gray-600 text-sm">Great value for primate encounters</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-calendar-line text-purple-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Flexible Dates</h4>
                        <p className="text-gray-600 text-sm">Start any day (subject to availability)</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-user-add-line text-amber-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solo Traveler Friendly</h4>
                        <p className="text-gray-600 text-sm">Join existing group (min 2 guests)</p>
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
                            <span className="text-gray-700">All ground transportation in 4x4 vehicle</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Professional English-speaking driver/guide</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Chimpanzee tracking permit in Kibale</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Gorilla trekking permit in Bwindi*</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Accommodation as listed (3 nights)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All meals as specified in itinerary</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Park fees and entry charges</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Bottled water during drives</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Pickup & drop-off in Kigali</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-600"><span className="font-semibold">Note:</span> Gorilla permits are
                            limited and must be booked early. This tour requires minimum 2 guests to run. Minimum age:
                            15 years.</p>
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
                            <span className="text-gray-700">International flights to/from Kigali</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Uganda & Rwanda visa fees</span>
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
                            <span className="text-gray-700">Dinner on Day 1 at Kibale Lodge</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Tips for guides and lodge staff</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Optional activities not mentioned</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal expenses (souvenirs, laundry)</span>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Gorilla Trekking Preparation Guide</h2>
                <p className="text-xl text-gray-600">Essential information for your mountain gorilla adventure</p>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                <p className="text-xl text-gray-600">Budget-friendly 4-day primate safari from Kigali</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">4-Day Uganda Express Safari Package</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Shared group safari base (per person)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Gorilla trekking permit*</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Chimpanzee tracking permit</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Accommodation & meals (3 nights)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 font-bold text-lg bg-green-50 px-4 rounded-lg">
                                <span className="text-gray-900">Estimated Total per person (subject to change by season/time)</span>
                                <span className="text-secondary text-2xl">$2,840 USD*</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic">*Prices are subject to change based on season,
                                availability, and exchange rates.</p>
                        </div>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Group Discounts Available</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• 5% discount for groups of 4+ people</li>
                                <li>• 10% discount for groups of 6 people</li>
                                <li>• Solo traveler supplement: $450</li>
                                <li>• Private tour upgrade: +$600 per person</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-check-line text-green-500"></i>
                                </div>
                                Tour Inclusions Summary
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• All accommodation (3 nights)</li>
                                <li>• All meals as specified in itinerary</li>
                                <li>• Professional English-speaking guide</li>
                                <li>• Shared 4x4 transportation</li>
                                <li>• Gorilla & chimpanzee permits</li>
                                <li>• All park entrance fees</li>
                                <li>• Bottled water throughout</li>
                                <li>• Kigali pickup & drop-off</li>
                                <li>• Border crossing assistance</li>
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
                                <li>• Price based on shared group (2-6 people)</li>
                                <li>• Minimum 2 guests required for tour to run</li>
                                <li>• Gorilla permits non-refundable</li>
                                <li>• Minimum age: 15 years</li>
                                <li>• Maximum group size: 6 people</li>
                                <li>• 30% deposit to confirm booking</li>
                                <li>• Balance due 60 days before travel</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-secondary hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap mr-4 book-adventure-btn">
                        Book This Express Safari
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap">
                        Check Group Availability
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your 4-Day Uganda Express Safari</h2>

                <form id="customBookingForm" className="space-y-6">
                    <input type="hidden" name="safari" defaultValue="4-Day Uganda Express Safari" />
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level
                            Preference</label>
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
                                <span id="accommodationText">Mid-range Lodges (Included)</span>
                                <span className="text-gray-400">▾</span>
                            </button>
                            <div id="accommodationDropdown" className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 hidden shadow-lg z-10">
                                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="midrange">Mid-range Lodges (Included)</div>
                                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="upgrade">Upgrade to Luxury (+$500)</div>
                            </div>
                            <input type="hidden" name="accommodation" id="accommodationInput" defaultValue="midrange" />
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
