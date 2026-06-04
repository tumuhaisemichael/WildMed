"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Ugandan11DaysPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    







    {/*  Updated Hero Section  */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/*  Parallax Background with subtle zoom effect  */}
        <div className="absolute inset-0 parallax-bg bg-cover bg-center transition-transform duration-1000 ease-out transform scale-100 hover:scale-105" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=luxury%20safari%20uganda%20gorillas%20chimpanzees%20virunga%20mountains%20luxury%20lodge%20sunset%20professional%20wildlife%20photography&width=1920&height=1080&seq=11day-luxury-hero&orientation=landscape')"}}>
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
                <span className="inline-block px-4 py-2 bg-amber-600/30 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium tracking-wider border border-amber-400/30">
                    LUXURY PRIMATE SAFARI
                </span>
            </div>

            {/*  Main Headline with Gradient Text  */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-green-300 to-amber-400">
                    Immerse Yourself in the Wild
                </span>
                <span className="block mt-2 text-white">Heart of Africa</span>
            </h1>

            {/*  Description with Animated Underline  */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 relative inline-block group">
                <span>11-Day Luxury Uganda Safari: Gorillas, Chimps & the Great Rift Valley</span>
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
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">11-Day Luxury Primate Safari</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Chimpanzees, mountain gorillas, and luxury lodges in
                    Uganda's Great Rift Valley</p>
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
                                <h3 className="text-2xl font-bold text-gray-900">Day 1: Arrival in Entebbe</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Gateway to
                                    Adventure</span>
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
                                        <li>• Private guide welcome with Ugandan hospitality</li>
                                        <li>• Luxury transfer to your accommodation</li>
                                        <li>• Relaxing evening to recover from travel</li>
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
                                        <li>• Stay at Hotel No.5 (Luxury hotel)</li>
                                        <li>• Elegant rooms and amenities</li>
                                        <li>• Welcome dinner included</li>
                                        <li>• Briefing about the safari ahead</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-lightbulb-flash-line text-blue-600"></i>
                                    </div>
                                    Luxury Note
                                </h4>
                                <p className="text-gray-600 text-sm">Hotel No.5 offers sophisticated comfort as your
                                    introduction to Uganda, with personalized service to start your journey in style.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 2-4  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">2-4</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 2-4: Kibale Forest National Park</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kingdom of the
                                    Chimps</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-monkey-line text-orange-500"></i>
                                        </div>
                                        Chimpanzee Experiences
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Travel to Kibale Forest National Park</li>
                                        <li>• Guided chimpanzee treks (multiple days)</li>
                                        <li>• See red colobus and olive baboons</li>
                                        <li>• Nature walks through tropical forest</li>
                                        <li>• Sunset views over forest canopy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-home-8-line text-green-500"></i>
                                        </div>
                                        Lodge & Activities
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Kibale Forest Lodge (3 nights)</li>
                                        <li>• Mid-range eco-lodge inside the park</li>
                                        <li>• All meals included</li>
                                        <li>• Optional community visits</li>
                                        <li>• Birdwatching opportunities</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-team-line text-green-600"></i>
                                    </div>
                                    Primate Capital
                                </h4>
                                <p className="text-gray-600 text-sm">Kibale has the highest density of primates in Africa,
                                    with 13 species including our closest relatives - perfect for immersive primate
                                    encounters.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 5-7  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">5-7</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 5-7: Queen Elizabeth National Park
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Wildlife &
                                    Scenery</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-star-line text-red-500"></i>
                                        </div>
                                        Lost Chimpanzees & Wildlife
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Fly or drive to Queen Elizabeth NP</li>
                                        <li>• Track "Lost Chimpanzees" in Kyambura Gorge</li>
                                        <li>• Scenic Kazinga Channel boat cruise</li>
                                        <li>• Hippo, crocodile, and bird viewing</li>
                                        <li>• Game drives for lions and elephants</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-landscape-line text-amber-500"></i>
                                        </div>
                                        Luxury Lodge Stay
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Kyambura Gorge Lodge (3 nights)</li>
                                        <li>• Deluxe lodge with panoramic views</li>
                                        <li>• All meals included</li>
                                        <li>• Private balconies overlooking gorge</li>
                                        <li>• Sunset drinks with wildlife views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-compass-3-line text-yellow-600"></i>
                                    </div>
                                    Unique Experience
                                </h4>
                                <p className="text-gray-600 text-sm">The "Lost Chimpanzees" of Kyambura Gorge are a unique
                                    population living in a geological wonder - a true conservation story.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Days 8-10  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">8-10</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Days 8-10: Mgahinga Gorilla National Park
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Gorilla Trekking
                                    in the Virungas</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-user-heart-line text-yellow-500"></i>
                                        </div>
                                        Gorilla Encounters
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Travel to Mgahinga Gorilla National Park</li>
                                        <li>• Track endangered mountain gorillas</li>
                                        <li>• 2 full days of gorilla experiences</li>
                                        <li>• Awe-inspiring face-to-face encounters</li>
                                        <li>• Photography with professional guidance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-hotel-line text-purple-500"></i>
                                        </div>
                                        Volcano Lodge Stay
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Stay at Mount Gahinga Lodge (3 nights)</li>
                                        <li>• Luxury lodge at foot of volcanoes</li>
                                        <li>• All meals included</li>
                                        <li>• Optional cultural community visits</li>
                                        <li>• Views of Virunga Mountains</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-heart-line text-purple-600"></i>
                                    </div>
                                    Emotional Journey
                                </h4>
                                <p className="text-gray-600 text-sm">Meeting mountain gorillas in their misty mountain home
                                    is a deeply moving experience that stays with travelers forever.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Day 11  */}
                    <div className="relative flex items-start">
                        <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                            <span className="text-white font-bold text-sm">11</span>
                        </div>
                        <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Day 11: Return to Entebbe</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">End of Your
                                    Journey</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-sun-line text-green-500"></i>
                                        </div>
                                        Morning Departure
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Final breakfast with mountain views</li>
                                        <li>• Last photos of the Virunga Mountains</li>
                                        <li>• Transfer back to Entebbe</li>
                                        <li>• Light aircraft transfer available</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                                            <i className="ri-flight-takeoff-line text-gray-500"></i>
                                        </div>
                                        Final Arrangements
                                    </h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Arrival in Entebbe</li>
                                        <li>• Optional last-minute shopping</li>
                                        <li>• Possible Lake Victoria visit</li>
                                        <li>• Airport drop-off or hotel transfer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                                        <i className="ri-calendar-check-line text-yellow-600"></i>
                                    </div>
                                    Departure Note
                                </h4>
                                <p className="text-gray-600 text-sm">We recommend scheduling international flights for
                                    evening departures. Day rooms can be arranged if needed.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/*  Image Gallery  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Adventure Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/*  1  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day1.jpg" alt="Mountain Gorilla Encounter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  2  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day4.jpg" alt="Chimpanzee Tracking in Kibale" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  3  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day5.jpg" alt="Tree Climbing Lions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  4  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day3.jpg" alt="Kazinga Channel Boat Cruise" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  5  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day6.jpg" alt="Scenic Lake Bunyonyi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  6  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day8.jpg" alt="Luxury Lodge Experience" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  7  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day2.jpg" alt="Ugandan Wildlife" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
                {/*  8  */}
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative aspect-[4/3]">
                    <img src="assets/15 day trip/15day7.jpg" alt="Cultural Encounters" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300">
                    </div>
                </div>
            </div>
        </div>



    </section>

    {/*  Updated: Tour Details & Accommodations Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Accommodations & Details</h2>
                <p className="text-xl text-gray-600">A blend of luxury, nature, and sustainable tourism</p>
            </div>

            {/*  Luxury Accommodations  */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Luxury Stay Experience</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/*  Hotel No.5  */}
                    <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg border border-amber-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/luxury-uganda/sheraton-kampala.jpg" alt="Hotel No.5 Entebbe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Hotel No.5</h4>
                                    <p className="text-gray-600 text-sm">Entebbe • 1 Night</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Elegant luxury hotel offering sophisticated comfort
                                and personalized service as your gateway to Uganda.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-star-s-fill text-amber-500 mr-2"></i>
                                    <span>5-star amenities</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-restaurant-line text-amber-500 mr-2"></i>
                                    <span>Fine dining restaurant</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-spa-line text-amber-500 mr-2"></i>
                                    <span>Spa & wellness center</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Kibale Forest Lodge  */}
                    <div className="bg-green-50 rounded-xl overflow-hidden shadow-lg border border-green-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/luxury-uganda/lux1.png" alt="Kibale Forest Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Kibale Forest Lodge</h4>
                                    <p className="text-gray-600 text-sm">Kibale NP • 3 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Eco-Lodge</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Mid-range eco-lodge inside the park, perfect for
                                immersive primate experiences and forest living.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-tree-line text-green-500 mr-2"></i>
                                    <span>Inside national park</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-leaf-line text-green-500 mr-2"></i>
                                    <span>Sustainable tourism</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-eye-line text-green-500 mr-2"></i>
                                    <span>Forest canopy views</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Kyambura Gorge Lodge  */}
                    <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg border border-blue-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/luxury-uganda/lux2.png" alt="Kyambura Gorge Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Kyambura Gorge Lodge</h4>
                                    <p className="text-gray-600 text-sm">Queen Elizabeth • 3 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Deluxe</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Luxury lodge with breathtaking panoramic views of the
                                gorge and exceptional wildlife sightings.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-landscape-line text-blue-500 mr-2"></i>
                                    <span>Panoramic gorge views</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-hotel-line text-blue-500 mr-2"></i>
                                    <span>Private balconies</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-wine-line text-blue-500 mr-2"></i>
                                    <span>Sunset drinks included</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Mount Gahinga Lodge  */}
                    <div className="bg-purple-50 rounded-xl overflow-hidden shadow-lg border border-purple-100">
                        <div className="h-48 overflow-hidden">
                            <img src="assets/11day-luxury/mount-gahinga.jpg" alt="Mount Gahinga Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Mount Gahinga Lodge</h4>
                                    <p className="text-gray-600 text-sm">Mgahinga • 3 Nights</p>
                                </div>
                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Luxury</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Luxury lodge at the foot of volcanoes offering
                                intimate gorilla experiences and mountain views.</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-fire-line text-purple-500 mr-2"></i>
                                    <span>Volcano views</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-hearth-line text-purple-500 mr-2"></i>
                                    <span>Fireplace suites</span>
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <i className="ri-walk-line text-purple-500 mr-2"></i>
                                    <span>Direct park access</span>
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
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-crown-line text-amber-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Private Luxury</h4>
                        <p className="text-gray-600 text-sm">Exclusive tour with personalized service</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-plane-line text-green-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Light Aircraft</h4>
                        <p className="text-gray-600 text-sm">Seamless transfers between destinations</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-calendar-event-line text-blue-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Flexible Dates</h4>
                        <p className="text-gray-600 text-sm">Start any day (subject to availability)</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-user-smile-line text-purple-600 text-xl"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solo Friendly</h4>
                        <p className="text-gray-600 text-sm">Perfect for individual luxury travelers</p>
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
                        Luxury Inclusions
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Airport transfers in Entebbe (private luxury)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Domestic flights or luxury transfers between parks</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Experienced English-speaking private guide</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All luxury accommodations (10 nights)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All meals during the tour (as specified)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Primate tracking permits (gorillas & chimpanzees)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">All national park fees and Kazinga Channel boat cruise</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Bottled water during all game drives and transfers</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personalized itinerary planning and concierge service</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-600"><span className="font-semibold">Important:</span> Gorilla and
                            chimpanzee permits are limited and must be booked early. Minimum age: 15 years for primate
                            tracking.</p>
                    </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-close-line text-red-600"></i>
                        </div>
                        Not Included
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">International flights to/from Entebbe</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Uganda visa fees (approximately USD $50)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Travel and medical insurance (mandatory)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Premium alcoholic beverages and champagne</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal shopping, souvenirs, and laundry</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Tips for guides, lodge staff, and drivers</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Optional activities not mentioned in itinerary</span>
                        </li>
                        <li className="flex items-start">
                            <i className="ri-close-circle-fill text-red-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Personal expenses (phone calls, internet)</span>
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
    {/*  Updated Pricing Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Investment</h2>
                <p className="text-xl text-gray-600">All-inclusive 11-day luxury primate safari with premium experiences
                </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">11-Day Luxury Primate Safari Package</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Luxury safari experience (per person)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Gorilla trekking permits (2 days)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Chimpanzee permits (multiple days)</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Luxury lodges & light aircraft transfers</span>
                                
                            </div>
                            <div className="flex justify-between items-center py-3 font-bold text-lg bg-amber-50 px-4 rounded-lg">
                                <span className="text-gray-900">Estimated Total per person (subject to change by season/time)</span>
                                <span className="text-amber-600 text-2xl">$19,740 USD*</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic">*Prices are subject to change based on season,
                                availability, and exchange rates.</p>
                        </div>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Premium Benefits</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• Complimentary spa treatment at one lodge</li>
                                <li>• Private guide exclusively for your group</li>
                                <li>• Gourmet dining with premium wine pairing</li>
                                <li>• Guaranteed gorilla permit allocation with early booking</li>
                                <li>• Flexible payment plans available</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-check-line text-green-500"></i>
                                </div>
                                Value Proposition
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• 10 nights in luxury & deluxe accommodations</li>
                                <li>• Multiple primate tracking experiences</li>
                                <li>• Private transfers & light aircraft options</li>
                                <li>• All meals and premium beverages</li>
                                <li>• Expert private guide throughout</li>
                                <li>• Exclusive access to premium viewing areas</li>
                                <li>• Personalized itinerary with flexibility</li>
                                <li>• Conservation contribution included</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                    <i className="ri-information-line text-amber-500"></i>
                                </div>
                                Booking Information
                            </h4>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Price based on double occupancy</li>
                                <li>• Single supplement: $3,200</li>
                                <li>• 40% deposit required to secure permits</li>
                                <li>• Minimum age: 15 years</li>
                                <li>• Maximum group size: 4 for premium experience</li>
                                <li>• Book 6+ months in advance for best dates</li>
                                <li>• Customizable for honeymoon/special occasions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap mr-4 book-adventure-btn">
                        Book Your Luxury Safari
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap">
                        Request Luxury Brochure
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your 11-Day Luxury Primate Safari
                </h2>
                <form id="customBookingForm" className="space-y-6">
                    <input type="hidden" name="safari" defaultValue="11-Day Luxury Primate Safari" />
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
