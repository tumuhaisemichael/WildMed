"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function VeterinaryConservationPage() {
  return (
    <div className="bg-white">
      
  {/*  Header  */}
  






  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/*  Parallax Background  */}
    <div className="absolute inset-0 parallax-bg bg-cover bg-center" style={{"backgroundImage":"url('img/Science driven field work/IMG_5476.JPG')"}}>
    </div>

    {/*  Gradient Overlay  */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-transparent"></div>

    {/*  Main Content Container  */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
      <div className="flex flex-col items-center">
        {/*  Eyebrow Tag  */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium tracking-wider border border-green-400/30">
            Veterinary and Conservation Field Expeditions
          </span>
        </div>

        {/*  Headline  */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-blue-300">
              Veterinary and Conservation 
            </span>
            <span className="block text-white mt-4">Field Expeditions</span>
          </h1>
        </div>

        {/*  Stats Grid  */}
        <div className="grid grid-cols-3 gap-6 mb-10 w-full max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">50+</div>
            <div className="text-sm">Wildlife Species</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">120+</div>
            <div className="text-sm">Veterinarians</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">15</div>
            <div className="text-sm">Countries</div>
          </div>
        </div>

        {/*  CTA Button  */}
        <a href="#inquiry-form" className="relative inline-block overflow-hidden group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30">
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Apply for Programs</span>
          </span>
          <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </div>

    {/*  Bottom Gradient Fade  */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
  </section>

  {/*  Veterinary Ecological Safaris Section  */}
  <section id="vet-safaris" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Veterinary and Conservation Field Expeditions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience wildlife veterinary medicine and conservation in
          East Africa</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-8">
        <p className="text-lg text-gray-700 mb-6">Visit Uganda and East Africa and work with our experienced wildlife and
          domestic animal veterinarians to study both the practical and theoretical elements of:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Wildlife veterinary medicine and conservation in Africa</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Wildlife search, rescue, and rehabilitation (snare removals and
                treatment)</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Interaction of wild and domestic animals and their implications</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Human-wildlife conflicts</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Park management</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Disease monitoring and surveillance</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Field laboratory settings</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Free-living aquatic animal health</span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-gray-700">Herptile management and therapeutics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="vet-expeditions-overview" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        {/*  <span
          className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
          2.2 Veterinary and Conservation Field Expeditions
        </span>  */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Veterinary and Conservation Field Expeditions</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Specialist field programmes that combine wildlife health management with conservation science, while also
          integrating the health management of domestic animals in communities adjacent to wildlife protected areas for
          holistic conservation of wildlife.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme overview</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These expeditions provide opportunities for veterinarians, researchers, students, and conservation
            practitioners to participate in hands-on activities such as wildlife and domestic animal health monitoring,
            disease surveillance, animal capture and translocation support, and rehabilitation of injured wildlife.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Conducted in national parks, wildlife reserves, and surrounding communities, they support species
            protection by tackling health issues that affect wildlife while strengthening informed conservation
            practice. They also serve as valuable learning platforms in veterinary medicine, conservation biology, and
            ecosystem management.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Signature Veterinary Experiences in Uganda</h3>
          <p className="text-blue-100 leading-relaxed mb-6">
            WildMed Safaris and Field Projects coordinates unique opportunities to experience wildlife conservation
            through the lens of veterinary science and One Health. Our signature programs combine scientific learning,
            field research, and conservation action in Uganda and East Africa's most remarkable ecosystems.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">Disease surveillance in wildlife and livestock</div>
            <div className="bg-white/10 rounded-xl p-4">Conservation medicine field training</div>
            <div className="bg-white/10 rounded-xl p-4">Gorilla health and conservation expeditions</div>
            <div className="bg-white/10 rounded-xl p-4">Chimpanzee research and habituation experiences</div>
            <div className="bg-white/10 rounded-xl p-4">Rhino veterinary monitoring programs</div>
            <div className="bg-white/10 rounded-xl p-4">Predator tracking and carnivore ecology</div>
            <div className="bg-white/10 rounded-xl p-4">Wildlife rescue and rehabilitation operations</div>
            <div className="bg-white/10 rounded-xl p-4">One Health field investigations</div>
            <div className="bg-white/10 rounded-xl p-4 sm:col-span-2">Conservation technology and wildlife monitoring</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="signature-vet-experiences" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured field experiences</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Some of the Veterinary and Conservation Field Expeditions you can plan in Uganda and East Africa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-5">
            <i className="ri-microscope-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Disease Surveillance in Wildlife and Livestock</h3>
          <p className="text-gray-600">Conduct surveillance for zoonotic and emerging diseases at the wildlife-livestock-human
            interface using a One Health approach.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
            <i className="ri-heart-pulse-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservation Medicine Field Training</h3>
          <p className="text-gray-600">Gain practical exposure to conservation medicine principles linking wildlife health,
            ecosystem health, and biodiversity protection.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
            <i className="ri-shield-cross-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Gorilla Health and Conservation Expeditions</h3>
          <p className="text-gray-600">Join conservation teams in Bwindi to monitor mountain gorilla health and behaviour,
            and learn about primate health surveillance, disease prevention, and conservation medicine.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
            <i className="ri-search-eye-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Chimpanzee Research and Habituation</h3>
          <p className="text-gray-600">Participate in chimpanzee tracking and behavioural observation programs in Kibale
            National Park while learning about primate ecology, health monitoring, and long-term research.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
            <i className="ri-shield-star-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Rhino Veterinary Monitoring Programs</h3>
          <p className="text-gray-600">Observe and support rhino monitoring in Ajai Game Reserve, Kidepo Conservation Area,
            and Ziwa Rhino Sanctuary through health checks, habitat assessment, and anti-poaching learning.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-5">
            <i className="ri-footprint-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predator Tracking and Carnivore Ecology</h3>
          <p className="text-gray-600">Track lions and leopards in Queen Elizabeth or Murchison Falls while learning about
            carnivore ecology, satellite tracking technologies, and predator conservation.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
            <i className="ri-first-aid-kit-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Wildlife Rescue and Rehabilitation Operations</h3>
          <p className="text-gray-600">Participate in rescue and rehabilitation activities involving injured animals such as
            cranes, antelopes, and other species before release back into the wild.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
            <i className="ri-earth-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">One Health Field Investigations</h3>
          <p className="text-gray-600">Explore the connections between wildlife health, livestock health, and human health
            in communities surrounding protected areas while addressing zoonotic disease risks.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
            <i className="ri-camera-lens-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservation Technology and Wildlife Monitoring</h3>
          <p className="text-gray-600">Gain practical exposure to camera traps, GPS tracking devices, and ecological
            monitoring technologies used to study wildlife populations and ecosystem health.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Wildlife Immobilisation Course Section  */}
  <section id="immobilisation-course" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Wildlife Immobilisation Course in Uganda</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our signature 14-day training course in field techniques for
          wildlife capture</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h3>
          <p className="text-gray-700 mb-6">Designed for veterinary students and veterinarians, our Field Techniques for Zoo
            and Wildlife Capture course provides hands-on training in wildlife immobilization techniques. The course can
            be tailored to meet the specific needs of your group.</p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Comprehensive Training</h4>
                <p className="text-gray-600 text-sm">Learn safe and effective wildlife capture techniques</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Practical Experience</h4>
                <p className="text-gray-600 text-sm">Hands-on field work with various African wildlife species</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Customizable Content</h4>
                <p className="text-gray-600 text-sm">Tailored to meet your group's specific learning objectives</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Highlights</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Drug Delivery Systems</h4>
                <p className="text-gray-600">Learn various methods for administering immobilizing drugs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Safety Protocols</h4>
                <p className="text-gray-600">Understand safety measures for both animals and handlers</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Species-Specific Techniques</h4>
                <p className="text-gray-600">Specialized approaches for different African wildlife</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Monitoring & Recovery</h4>
                <p className="text-gray-600">Proper procedures for animal monitoring and recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Experiential Tourism Section  */}
  
  

  
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/*  Favicon  */}
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
    <title>Experiential Tourism in Uganda</title>
    
    {/*  Include jsPDF library for PDF generation  */}
    
    
  

  
    <section id="experiential-tourism" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiential Tourism in Uganda and East Africa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Unique wildlife encounters through technology-assisted
            tracking</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{"backgroundImage":"url('img/predator.jpg')"}}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predator Tracking</h3>
              <p className="text-gray-600 mb-4">Join our local veterinarians and researchers to track large predators like
                lions and leopards using satellite technology. Experience up-close encounters while contributing to
                conservation research.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="predator-tracking">Learn More</button>
            </div>
          </div>
          <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{"backgroundImage":"url('img/home/IMG-20150902-WA0011.jpg')"}}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Photography Expeditions</h3>
              <p className="text-gray-600 mb-4">Detour inside national parks for unparalleled wildlife photography
                opportunities. Our experts will help you capture stunning images while ensuring minimal disturbance to
                animals.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="photography-expeditions">Learn More</button>
            </div>
          </div>
        </div>
        <div id="pricingDisclaimer" className="mt-4 text-center">
          <p className="text-xs text-gray-500 italic">*Prices are subject to change based on season, availability, and
            exchange rates.</p>
        </div>
      </div>

      {/*  Modal Overlay  */}
      <div id="tourismModal" className="fixed inset-0 bg-black bg-opacity-80 hidden items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
          <span className="close-modal absolute top-4 right-6 text-4xl text-gray-500 cursor-pointer hover:text-gray-700 z-10">×</span>
          <div id="tourismModalContent" className="p-8 pt-16">
            {/*  Dynamic content will be inserted here  */}
          </div>
        </div>
      </div>
    </section>

    
    
  






  
  
  <section id="field-projects" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Field Projects in Uganda and East Africa</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conduct research at the interface between animals, humans,
          and the environment</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Support</h3>
            <p className="text-gray-700 mb-6">We welcome individual and group projects addressing critical conservation
              issues. Our team provides comprehensive support to facilitate your research in Uganda and East Africa.</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Permit Processing</h4>
                  <p className="text-gray-600 text-sm">Assistance with research permits and national park entry</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Community Access</h4>
                  <p className="text-gray-600 text-sm">Introduction letters to community leaders</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Legal Compliance</h4>
                  <p className="text-gray-600 text-sm">Materials transfer agreements (MTAs) and other necessary documents
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <i className="ri-leaf-line text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Wildlife Health</h4>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <i className="ri-community-line text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Human-Wildlife Conflict</h4>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <i className="ri-flask-line text-purple-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Disease Ecology</h4>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <i className="ri-map-pin-line text-orange-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Habitat Conservation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Veterinary Image Gallery Section  */}
  <section className="py-20 bg-gradient-to-b from-emerald-50 via-white to-sky-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide mb-4">
          Visual Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Veterinary Field Gallery</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Click any image to view it full size</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[170px] md:auto-rows-[210px] gap-4 md:gap-5">
        <button type="button" className="vet-gallery-btn vet-gallery-item col-span-2 row-span-2" data-index="0" data-src="img/Vet science/IMG_0514.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_0514.JPG" alt="Veterinary field image 1" className="w-full h-full object-cover" />
        </button>
        {/*  <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="1" data-src="img/Vet science/IMG_5476.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_5476.JPG" alt="Veterinary field image 2" className="w-full h-full object-cover">
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="2" data-src="img/Vet science/IMG_5478.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_5478.JPG" alt="Veterinary field image 3" className="w-full h-full object-cover">
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item row-span-2" data-index="3" data-src="img/Vet science/IMG_5484.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_5484.JPG" alt="Veterinary field image 4" className="w-full h-full object-cover">
        </button>  */}
        <button type="button" className="vet-gallery-btn vet-gallery-item col-span-2" data-index="4" data-src="img/Vet science/IMG_6606.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_6606.JPG" alt="Veterinary field image 5" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="5" data-src="img/Vet science/IMG_6607.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_6607.JPG" alt="Veterinary field image 6" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="6" data-src="img/Vet science/IMG_6661.JPG" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/IMG_6661.JPG" alt="Veterinary field image 7" className="w-full h-full object-cover" />
        </button>
        {/*  <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="7" data-src="img/Vet science/Research_slide2.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide2.jpg" alt="Veterinary field image 8" className="w-full h-full object-cover">
        </button>  */}
        <button type="button" className="vet-gallery-btn vet-gallery-item col-span-2" data-index="8" data-src="img/Vet science/Research_slide4.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide4.jpg" alt="Veterinary field image 9" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="9" data-src="img/Vet science/Research_slide5.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide5.jpg" alt="Veterinary field image 10" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="10" data-src="img/Vet science/Research_slide6.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide6.jpg" alt="Veterinary field image 11" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="11" data-src="img/Vet science/Research_slide7.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide7.jpg" alt="Veterinary field image 12" className="w-full h-full object-cover" />
        </button>
        <button type="button" className="vet-gallery-btn vet-gallery-item" data-index="12" data-src="img/Vet science/Research_slide8.jpg" data-caption="Veterinary and Conservation Field Expeditions">
          <img src="img/Vet science/Research_slide8.jpg" alt="Veterinary field image 13" className="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  </section>

  {/*  Gallery Lightbox  */}
  <div id="vet-lightbox" className="fixed inset-0 z-[120] hidden items-center justify-center bg-black/90 p-4">
    <button id="vet-lightbox-close" type="button" className="absolute top-4 right-4 md:top-6 md:right-8 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-3xl leading-none">×</button>
    <button id="vet-lightbox-prev" type="button" className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl leading-none">❮</button>
    <img id="vet-lightbox-image" src="" alt="Full-size veterinary gallery image" className="max-w-[95vw] max-h-[88vh] object-contain rounded-lg shadow-2xl" />
    <button id="vet-lightbox-next" type="button" className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl leading-none">❯</button>
    <p id="vet-lightbox-caption" className="absolute bottom-4 md:bottom-6 text-white text-sm md:text-base bg-black/40 px-3 py-1 rounded-full"></p>
  </div>

  {/*  Rest of your existing content (Our Conservation Initiatives, Application Process, etc.)  */}
  <section id="conservation-initiatives" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Some of our Conservation Initiatives in Uganda</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive programs that combine veterinary expertise with
          field conservation work to protect Africa's wildlife</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*  Wildlife Health Monitoring  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/Science driven field work/20150611_180903.jpg')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-heart-pulse-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wildlife Health Monitoring</h3>
            <p className="text-gray-600 mb-4">Conduct comprehensive health assessments of wild animal populations, track
              disease patterns, and implement preventive care strategies.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="wildlife-health">Learn More</button>
          </div>
        </div>

        {/*  Anti-Poaching Support  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/Gallery\\ Antipoaching\\ 1.jpg')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-shield-check-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Anti-Poaching Support</h3>
            <p className="text-gray-600 mb-4">Provide medical support to anti-poaching units, treat injured wildlife, and
              assist in rescue operations for endangered species.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="anti-poaching">Learn More</button>
          </div>
        </div>

        {/*  Research Opportunities  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/Science driven field work/DSC_0310.JPG')"}}>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-microscope-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Opportunities</h3>
            <p className="text-gray-600 mb-4">Participate in cutting-edge wildlife research projects, contribute to
              scientific publications, and advance conservation medicine.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="research-opportunities">Learn More</button>
          </div>
        </div>

        {/*  Field Veterinary Clinics  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/wetclinic.jpg')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-hospital-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Veterinary Clinics</h3>
            <p className="text-gray-600 mb-4">Establish and operate mobile veterinary clinics in remote areas, providing
              essential medical care to wildlife and domestic animals.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="field-clinics">Learn More</button>
          </div>
        </div>

        {/*  Community Education  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/Vet science/Research_slide7.jpg')"}}>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-graduation-cap-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Education</h3>
            <p className="text-gray-600 mb-4">Deliver educational programs to local communities about wildlife conservation,
              animal health, and sustainable coexistence practices.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="community-education">Learn More</button>
          </div>
        </div>

        {/*  Partnership Programs  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/Science driven field work/DSC_0078.JPG')"}}>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-team-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership Programs</h3>
            <p className="text-gray-600 mb-4">Collaborate with leading conservation organizations, research institutions,
              and government agencies on large-scale conservation initiatives.</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="partnership-programs">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    {/*  Modal Overlay  */}
    <div id="conservationModal" className="fixed inset-0 bg-black bg-opacity-80 hidden items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <span className="close-modal absolute top-4 right-6 text-4xl text-gray-500 cursor-pointer hover:text-gray-700 z-10">×</span>
        <div id="conservationModalContent" className="p-8 pt-16">
          {/*  Dynamic content will be inserted here  */}
        </div>
      </div>
    </div>
  </section>

  
  {/*  <sec id="qualifications" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Qualifications</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ensure you meet our program requirements before applying</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-star-fill text-white text-sm"></i>
            </div>
            Essential Requirements
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Doctor of Veterinary Medicine (DVM)</h4>
                <p className="text-gray-600 text-sm">From accredited veterinary school with valid license</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Minimum 2 Years Experience</h4>
                <p className="text-gray-600 text-sm">Clinical veterinary practice or related field</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Physical Fitness</h4>
                <p className="text-gray-600 text-sm">Ability to work in challenging field conditions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Valid Passport</h4>
                <p className="text-gray-600 text-sm">With at least 6 months validity remaining</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Insurance Coverage</h4>
                <p className="text-gray-600 text-sm">International travel and medical insurance</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Language Proficiency</h4>
                <p className="text-gray-600 text-sm">Fluent English (written and spoken)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
              <i className="ri-star-line text-white text-sm"></i>
            </div>
            Preferred Qualifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Wildlife Medicine Experience</h4>
                <p className="text-gray-600 text-sm">Previous work with exotic or wildlife species</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Research Background</h4>
                <p className="text-gray-600 text-sm">Published research or advanced degree</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Field Work Experience</h4>
                <p className="text-gray-600 text-sm">Previous experience in remote or challenging environments</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Additional Languages</h4>
                <p className="text-gray-600 text-sm">Swahili, French, or other African languages</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Teaching Experience</h4>
                <p className="text-gray-600 text-sm">Educational or training background</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-add-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Conservation Certifications</h4>
                <p className="text-gray-600 text-sm">Additional certifications in conservation or ecology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>  */}
    {/*  <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Calendar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Upcoming program dates and application deadlines</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Mar</div>
                <div className="text-sm text-gray-600 mb-3">Kenya Wildlife Health</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Application:</span>
                    <span className="font-semibold text-red-500">Jan 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Program:</span>
                    <span className="font-semibold">Mar 10-24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Spots:</span>
                    <span className="font-semibold text-secondary">8 available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Jun</div>
                <div className="text-sm text-gray-600 mb-3">Tanzania Research</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Application:</span>
                    <span className="font-semibold text-green-600">Apr 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Program:</span>
                    <span className="font-semibold">Jun 5-19</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Spots:</span>
                    <span className="font-semibold text-secondary">6 available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Sep</div>
                <div className="text-sm text-gray-600 mb-3">Botswana Community</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Application:</span>
                    <span className="font-semibold text-green-600">Jul 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Program:</span>
                    <span className="font-semibold">Sep 8-22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Spots:</span>
                    <span className="font-semibold text-secondary">10 available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Dec</div>
                <div className="text-sm text-gray-600 mb-3">South Africa Anti-Poaching</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Application:</span>
                    <span className="font-semibold text-green-600">Oct 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Program:</span>
                    <span className="font-semibold">Dec 3-17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Spots:</span>
                    <span className="font-semibold text-secondary">12 available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap mr-4">
              View Full Calendar
            </button>
            <a href="#inquiry-form"
              className="bg-secondary hover:bg-green-700 text-white px-8 py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>  */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to make a difference in wildlife conservation?
            Contact us to learn more about our programs</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Inquiry Form</h3>
              <form id="inquiry-form" className="space-y-6" action="https://formspree.io/f/mldlkwke" method="POST">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input id="first_name" name="first_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input id="last_name" name="last_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input id="email" name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your email" required />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">Veterinary
                    Experience</label>
                  <select id="experience" name="experience" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" required>
                    <option value="">Select your experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Program Interest</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label htmlFor="health_monitoring" className="flex items-center cursor-pointer">
                      <input id="health_monitoring" name="program_interest[]" defaultValue="Health Monitoring" type="checkbox" className="hidden program-checkbox" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                        <i className="ri-check-line text-white text-xs hidden"></i>
                      </div>
                      <span className="text-sm text-gray-700">Health Monitoring</span>
                    </label>
                    <label htmlFor="research" className="flex items-center cursor-pointer">
                      <input id="research" name="program_interest[]" defaultValue="Research" type="checkbox" className="hidden program-checkbox" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                        <i className="ri-check-line text-white text-xs hidden"></i>
                      </div>
                      <span className="text-sm text-gray-700">Research</span>
                    </label>
                    <label htmlFor="anti-poaching" className="flex items-center cursor-pointer">
                      <input id="anti-poaching" name="program_interest[]" defaultValue="Anti-Poaching" type="checkbox" className="hidden program-checkbox" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                        <i className="ri-check-line text-white text-xs hidden"></i>
                      </div>
                      <span className="text-sm text-gray-700">Anti-Poaching</span>
                    </label>
                    <label htmlFor="education" className="flex items-center cursor-pointer">
                      <input id="education" name="program_interest[]" defaultValue="Education" type="checkbox" className="hidden program-checkbox" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                        <i className="ri-check-line text-white text-xs hidden"></i>
                      </div>
                      <span className="text-sm text-gray-700">Education</span>
                    </label>
                    <label htmlFor="other_interest" className="flex items-center cursor-pointer">
                      <input id="other_interest" name="program_interest[]" defaultValue="Other" type="checkbox" className="hidden program-checkbox" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                        <i className="ri-check-line text-white text-xs hidden"></i>
                      </div>
                      <span className="text-sm text-gray-700">Other</span>
                    </label>
                  </div>
                  <p id="other-interest-note" className="hidden mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
                    Please specify your interest in the Message section.
                  </p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Tell us about your interest in Veterinary and Conservation Field Expeditions..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-green-700 text-white py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap">
                  Send Inquiry
                </button>
              </form>
              <div id="success-message" className="hidden mt-6 p-6 bg-green-50 border border-green-300 text-green-800 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Thank you!</h4>
                <p>Your inquiry has been sent successfully. We will get back to you shortly.</p>
              </div>
              <div id="error-message" className="hidden mt-6 p-6 bg-red-50 border border-red-300 text-red-800 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Oops!</h4>
                <p>There was a problem submitting your form. Please try again later.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                    <p className="text-gray-600 mb-2">Speak with our conservation program coordinators</p>
                    <div className="space-y-1">
                      <p className="text-primary font-semibold">+256 740 205146</p>
                      <p className="text-primary font-semibold">+256 777 370494</p>
                    </div>
                    <p className="text-sm text-gray-500">Monday - Saturday, 9:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-2">Get detailed information about programs</p>
                    <p className="text-secondary font-semibold">wildmeduganda@gmail.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600 mb-2">Visit our headquarters in Uganda</p>
                    <p className="text-gray-700">Plot 626, Seguku Katale, P.O.Box 10296<br />Kampala, Uganda</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-information-line text-blue-600"></i>
                  </div>
                  Quick Response Guarantee
                </h4>
                <p className="text-blue-800 text-sm">We respond to all program inquiries within 24 hours. For urgent
                  matters, please call our direct line.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    










    </div>
  );
}
