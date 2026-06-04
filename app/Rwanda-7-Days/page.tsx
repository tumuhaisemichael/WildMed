"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Rwanda7DaysPage() {
  return (
    <div className="bg-white">
      
  {/*  Header  */}
  







  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/*  Parallax Background with subtle zoom effect  */}
    <div className="absolute inset-0 parallax-bg bg-cover bg-center transition-transform duration-1000 ease-out transform scale-100 hover:scale-105" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=African%20safari%20landscape%20with%20acacia%20trees%20at%20golden%20sunset%2C%20vast%20savanna%20plains%20stretching%20to%20horizon%2C%20warm%20orange%20and%20amber%20lighting%2C%20majestic%20wildlife%20silhouettes%20in%20distance%2C%20professional%20nature%20photography%2C%20cinematic%20composition%20with%20dramatic%20sky&width=1920&height=1080&seq=hero-safari&orientation=landscape')"}}>
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
          WILDLIFE EXPERIENCE
        </span>
      </div>

      {/*  Main Headline with Gradient Text  */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-green-300 to-green-400">
          Craft Your Perfect
        </span>
        <span className="block mt-2 text-white">Safari Adventure</span>
      </h1>

      {/*  Description with Animated Underline  */}
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 relative inline-block group">
        <span>Design a personalized expedition tailored to your dreams</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </p>

      {/*  CTA Button with Glow Effect  */}
      <button id="startPlanningBtn" className="relative overflow-hidden group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20">
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>Start Planning Your Journey</span>
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

  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">7-Day Rwanda-Uganda Expedition</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore Volcanoes National Park in Rwanda, and Bwindi
          Impenetrable, Queen Elizabeth, and Lake Mburo National Parks in Uganda</p>
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
                <h3 className="text-2xl font-bold text-gray-900">Day 1: Arrival & Transfer</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kigali to Volcanoes NP</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-plane-line text-secondary"></i>
                    </div>
                    Journey Highlights
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Arrival at Kigali International Airport</li>
                    <li>• Scenic drive to Volcanoes National Park</li>
                    <li>• Briefing about golden monkey tracking</li>
                    <li>• Dinner with mountain views</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-information-line text-secondary"></i>
                    </div>
                    Important Notes
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Altitude: 2,500-4,500 meters</li>
                    <li>• Pack warm clothing for evenings</li>
                    <li>• Camera batteries fully charged</li>
                    <li>• Passport and permits ready</li>
                  </ul>
                </div>
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
                <h3 className="text-2xl font-bold text-gray-900">Day 2: Golden Monkeys & Border Crossing</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Rwanda to Uganda</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-monkey-line text-orange-500"></i>
                    </div>
                    Morning Activities
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Early breakfast at lodge</li>
                    <li>• Golden monkey tracking experience</li>
                    <li>• Photography of endangered primates</li>
                    <li>• Bamboo forest exploration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-car-line text-blue-500"></i>
                    </div>
                    Afternoon Journey
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Cross border into Uganda</li>
                    <li>• Scenic drive to Bwindi Impenetrable NP</li>
                    <li>• Lodge check-in and orientation</li>
                    <li>• Evening gorilla trekking briefing</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-lightbulb-flash-line text-green-600"></i>
                  </div>
                  Wildlife Insight
                </h4>
                <p className="text-gray-600 text-sm">Golden monkeys are endangered and only found in the Virunga massif.
                  Their acrobatics in bamboo forests are spectacular to observe.</p>
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
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Bwindi Impenetrable NP</span>
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
                    <li>• Early morning briefing with rangers</li>
                    <li>• 2-6 hour trek through dense forest</li>
                    <li>• 1 hour with mountain gorilla family</li>
                    <li>• Professional photography guidance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-community-line text-purple-500"></i>
                    </div>
                    Afternoon Options
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Batwa cultural experience</li>
                    <li>• Community walk and crafts</li>
                    <li>• Transfer to Queen Elizabeth NP</li>
                    <li>• Optional lodge relaxation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shield-check-line text-blue-600"></i>
                  </div>
                  Trekking Essentials
                </h4>
                <p className="text-gray-600 text-sm">Sturdy hiking boots, rain jacket, gloves, and walking sticks provided.
                  Physical fitness recommended but multiple difficulty levels available.</p>
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
                <h3 className="text-2xl font-bold text-gray-900">Day 4: Queen Elizabeth Safari</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Queen Elizabeth NP</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-lion-line text-yellow-500"></i>
                    </div>
                    Morning Game Drive
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Dawn safari in Kasenyi plains</li>
                    <li>• Search for tree-climbing lions</li>
                    <li>• Elephant and buffalo herds</li>
                    <li>• Professional guide commentary</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-ship-line text-blue-500"></i>
                    </div>
                    Afternoon Boat Cruise
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Kazinga Channel wildlife cruise</li>
                    <li>• Hippo and crocodile viewing</li>
                    <li>• Birdwatching (300+ species)</li>
                    <li>• Sunset photography opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  Day 5  */}
          <div className="relative flex items-start">
            <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-sm">5</span>
            </div>
            <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Day 5: Chimps & Community</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Kyambura Gorge</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-user-smile-line text-green-500"></i>
                    </div>
                    Chimpanzee Tracking
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Descend into Kyambura Gorge</li>
                    <li>• 2-3 hour chimp tracking</li>
                    <li>• Observe feeding behaviors</li>
                    <li>• Forest ecosystem education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-home-heart-line text-purple-500"></i>
                    </div>
                    Community Experience
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Local village visit</li>
                    <li>• Traditional craft demonstrations</li>
                    <li>• Twin Lakes sunset viewing</li>
                    <li>• Cultural exchange activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  Day 6  */}
          <div className="relative flex items-start">
            <div className="absolute left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-sm">6</span>
            </div>
            <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Day 6: Lake Mburo Safari</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Lake Mburo NP</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-safari-line text-purple-500"></i>
                    </div>
                    Wildlife Viewing
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Morning game drive for zebras</li>
                    <li>• Boat cruise for hippos & birds</li>
                    <li>• Ankole cattle ranch visit</li>
                    <li>• Guided nature walk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-camera-line text-blue-500"></i>
                    </div>
                    Photography Highlights
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Zebra herds on open plains</li>
                    <li>• Impala and topi antelopes</li>
                    <li>• Water birds at lake shore</li>
                    <li>• Traditional long-horned cattle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  Day 7  */}
          <div className="relative flex items-start">
            <div className="absolute left-4 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-sm">7</span>
            </div>
            <div className="ml-20 day-card bg-white rounded-xl shadow-lg p-6 w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Day 7: Return & Crocodile Farm</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Lake Mburo to Entebbe</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-roadster-line text-gray-500"></i>
                    </div>
                    Return Journey
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Scenic drive to Kampala</li>
                    <li>• Uganda Equator crossing</li>
                    <li>• Local craft market stops</li>
                    <li>• Lunch en route</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-restaurant-line text-red-500"></i>
                    </div>
                    Final Experience
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Uganda Crocs LTD visit</li>
                    <li>• Crocodile farming education</li>
                    <li>• Optional crocodile meat tasting</li>
                    <li>• Transfer to Entebbe Airport</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-flight-takeoff-line text-yellow-600"></i>
                  </div>
                  Departure Notes
                </h4>
                <p className="text-gray-600 text-sm">Ensure all souvenirs are packed. Flight should be scheduled for evening
                  (after 6pm) to allow time for activities.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*  Image Gallery  */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <h3 className="text-2xl font-bold text-center mb-8">Expedition Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/*  Thumbnail Images  */}
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day1.jpg" alt="Golden monkeys" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day2.jpg" alt="Mountain gorillas" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day3.jpg" alt="Queen Elizabeth wildlife" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day4.jpg" alt="Kazinga Channel" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day5.jpg" alt="Chimpanzees" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day6.jpg" alt="Lake Mburo" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day7.jpg" alt="Ankole cattle" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <img src="assets/8day trip/8day8.jpg" alt="Cultural experience" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
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

  

  
  
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Trip Preparation Guide</h2>
        <p className="text-xl text-gray-600">Everything you need to know before your adventure begins</p>
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
                  <li>• Visa requirements by destination</li>
                  <li>• International vaccination certificate</li>
                  <li>• Travel insurance documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Medical Requirements</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Yellow fever vaccination (required)</li>
                  <li>• Malaria prophylaxis consultation</li>
                  <li>• Medical fitness certificate</li>
                  <li>• Emergency contact information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 preparation-toggle" data-target="packing">
            <h3 className="text-lg font-semibold text-gray-900">Packing Essentials</h3>
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-down-s-line text-gray-400 transition-transform duration-200"></i>
            </div>
          </button>
          <div className="px-6 pb-6 hidden preparation-content" id="packing">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Clothing</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Neutral colored safari clothing</li>
                  <li>• Long-sleeved shirts and pants</li>
                  <li>• Comfortable walking boots</li>
                  <li>• Sun hat and sunglasses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Equipment</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Binoculars (8x32 recommended)</li>
                  <li>• Camera with extra batteries</li>
                  <li>• Headlamp and flashlight</li>
                  <li>• Personal first aid kit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Items</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Sunscreen (SPF 30+)</li>
                  <li>• Insect repellent</li>
                  <li>• Personal medications</li>
                  <li>• Reusable water bottle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 preparation-toggle" data-target="fitness">
            <h3 className="text-lg font-semibold text-gray-900">Fitness & Health</h3>
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-down-s-line text-gray-400 transition-transform duration-200"></i>
            </div>
          </button>
          <div className="px-6 pb-6 hidden preparation-content" id="fitness">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Physical Preparation</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Regular walking/hiking practice</li>
                  <li>• Cardiovascular fitness building</li>
                  <li>• Flexibility and stretching routine</li>
                  <li>• Altitude acclimatization tips</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Health Considerations</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Pre-travel medical consultation</li>
                  <li>• Dietary restrictions planning</li>
                  <li>• Mental preparation techniques</li>
                  <li>• Emergency medical procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p className="text-xl text-gray-600">Clear breakdown of costs with no hidden fees</p>
      </div>
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">7-Day Custom Safari Package</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Base safari experience (per person)</span>
                
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Luxury accommodation upgrade</span>
                
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Medical/conservation activities</span>
                
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Cultural immersion program</span>
                
              </div>
              <div className="flex justify-between items-center py-3 font-bold text-lg">
                <span className="text-gray-900">Estimated Total per person (subject to change by season/time)</span>
                <span className="text-secondary">$3,800*</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">*Prices are subject to change based on season, availability,
              and exchange rates.</p>
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Early Booking Benefits</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• 15% discount for bookings 6+ months in advance</li>
                <li>• Free airport transfers</li>
                <li>• Complimentary cultural workshop</li>
                <li>• Priority accommodation selection</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-green-500"></i>
                </div>
                Included in Price
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• All accommodation (7 nights)</li>
                <li>• All meals and beverages</li>
                <li>• Professional guide services</li>
                <li>• Transportation and transfers</li>
                <li>• Park entrance fees</li>
                <li>• Medical supervision</li>
                <li>• Equipment and safety gear</li>
                <li>• Certificate of participation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-close-line text-red-500"></i>
                </div>
                Not Included
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• International flights</li>
                <li>• Visa fees</li>
                <li>• Travel insurance</li>
                <li>• Personal shopping</li>
                <li>• Alcoholic beverages (premium)</li>
                <li>• Gratuities</li>
                <li>• Optional activities</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-secondary hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap mr-4 book-adventure-btn">
            Book Your Adventure
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 text-lg font-semibold !rounded-button transition-colors duration-200 whitespace-nowrap">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Adventurers Say</h2>
        <p className="text-xl text-gray-600">Real experiences from our custom expedition participants</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-fill text-gray-600"></i>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Dr. Sarah Mitchell</h4>
              <p className="text-sm text-gray-600">Wildlife Veterinarian, Canada</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
          </div>
          <p className="text-gray-600 italic">"The custom medical expedition exceeded all expectations. Working alongside
            local veterinarians while experiencing incredible wildlife was transformative. The attention to detail in
            planning made every day seamless."</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-fill text-gray-600"></i>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">James Rodriguez</h4>
              <p className="text-sm text-gray-600">Photography Enthusiast, Spain</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
          </div>
          <p className="text-gray-600 italic">"As a wildlife photographer, I needed specific timing and locations. WildMed
            created a perfect itinerary that captured the great migration at its peak. The guides knew exactly where to
            position us for the best shots."</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-fill text-gray-600"></i>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Dr. Amara Okafor</h4>
              <p className="text-sm text-gray-600">Medical Researcher, Nigeria</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
          </div>
          <p className="text-gray-600 italic">"The cultural immersion component was incredible. Living with the Masai
            community and learning traditional medicine practices while contributing to conservation efforts created
            memories that will last forever."</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Modal for Booking Form  */}
  <div id="bookingModal" className="fixed inset-0 z-50 hidden w-full h-full bg-black bg-opacity-80 overflow-y-auto">
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative fade-in">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold transition-colors" aria-label="Close Modal">×</button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your 7-Day Rwanda-Uganda Expedition</h2>
        <form id="customBookingForm" className="space-y-6">
          <input type="hidden" name="safari" defaultValue="7 Day Safaria" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
            <input type="text" id="travelDate" name="date" placeholder="Select travel date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary pl-10 text-black" />
            <span className="absolute left-3 top-10 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
            <input type="range" min="2" max="10" defaultValue="2" className="w-full" name="groupSize" onInput={undefined} />
            <span id="groupValue" className="ml-2 text-gray-600">2 people</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
            <div className="flex space-x-4">
              <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="beginner">Beginner</button>
              <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="intermediate">Intermediate</button>
              <button type="button" className="activity-btn flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary hover:text-secondary text-black" data-level="advanced">Advanced</button>
            </div>
            <input type="hidden" name="activityLevel" id="activityLevel" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference</label>
            <div className="relative">
              <button id="accommodationBtn" type="button" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black text-left focus:outline-none focus:ring-2 focus:ring-secondary flex justify-between items-center">
                <span id="accommodationText">Select Accommodation</span>
                <span className="text-gray-400">▾</span>
              </button>
              <div id="accommodationDropdown" className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 hidden shadow-lg z-10">
                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="budget">Budget
                  Camps</div>
                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="midrange">
                  Midrange Lodges</div>
                <div className="accommodation-option px-4 py-2 hover:bg-gray-50 cursor-pointer" data-value="luxury">Luxury
                  Tents</div>
              </div>
              <input type="hidden" name="accommodation" id="accommodationInput" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <textarea name="requests" rows={3} placeholder="e.g., dietary needs, medical support" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-secondary hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">Submit
              Booking</button>
          </div>
        </form>
      </div>
    </div>
  </div>


  
  
  
  
  
  
  









    </div>
  );
}
