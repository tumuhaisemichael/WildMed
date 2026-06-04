"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function MedicalExpeditionProgramsPage() {
  return (
    <div className="bg-white">
      
  {/*  Header  */}
  






  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/*  Background with parallax effect  */}
    <div className="absolute inset-0 parallax-bg bg-cover bg-center" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=Medical%20professionals%20providing%20healthcare%20in%20rural%20African%20village%20setting%20with%20mobile%20clinic%20tent%2C%20doctors%20and%20nurses%20treating%20patients%20outdoors%2C%20medical%20equipment%20and%20supplies%20visible%2C%20community%20members%20receiving%20care%2C%20golden%20hour%20lighting%20over%20savanna%20landscape%2C%20acacia%20trees%20in%20background%2C%20professional%20humanitarian%20medical%20mission%20atmosphere%2C%20warm%20earth%20tones%20and%20natural%20colors&width=1920&height=1080&seq=med-expedition-hero&orientation=landscape')"}}>
    </div>

    {/*  Gradient overlay  */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-transparent"></div>

    {/*  Content container with proper spacing  */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <div className="flex flex-col items-center text-center space-y-8">
        {/*  Header/tagline  */}
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium tracking-wider border border-green-400/30">
            MEDICAL MISSIONS
          </span>
        </div>

        {/*  Main headline  */}
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
            Medical Profession
          </span>
          <span className="block text-white mt-4">Expeditions</span>
        </h1>

        {/*  Description  */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 font-light">
          For healthcare professionals seeking to expand their knowledge in East Africa
        </p>

        {/*  Stats grid - properly spaced  */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md mt-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">100+</div>
            <div className="text-sm">Medical Volunteers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">25+</div>
            <div className="text-sm">Communities Served</div>
          </div>
        </div>

        {/*  CTA button  */}
        <a href="#expedition-form" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          Apply Now
        </a>
      </div>
    </div>

    {/*  Bottom gradient fade  */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
  </section>

  <section id="medical-expeditions-overview" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        {/*  <span
          className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
          2.3 Medical Professional Expeditions
        </span>  */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical field programmes in and around protected areas</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Field programs that bring healthcare professionals, medical students, and public health experts into diverse
          and often remote environments, such as those in and around wildlife protected areas, to provide healthcare
          services, conduct medical outreach, participate in health research, and coordinate with veterinarians to
          improve public health.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme overview</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These expeditions may include community health clinics, disease surveillance, health education, and
            collaboration with local health systems. In addition to delivering essential medical services, they create
            valuable opportunities for practical experience in global health, tropical medicine, and public health
            interventions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            They also promote cross-cultural exchange and contribute to improving access to healthcare in underserved
            communities while strengthening local health capacities for better long-term health outcomes and
            sustainability.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-red-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Medical work at the wildlife-community interface</h3>
          <p className="text-red-50 leading-relaxed mb-6">
            These programs are especially useful for professionals who want to understand how community health,
            zoonotic disease risk, environmental conditions, and local health systems connect in real field settings.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">Community health clinics and outreach</div>
            <div className="bg-white/10 rounded-xl p-4">Public health education and awareness</div>
            <div className="bg-white/10 rounded-xl p-4">Zoonotic disease surveillance</div>
            <div className="bg-white/10 rounded-xl p-4">Tropical and travel medicine exposure</div>
            <div className="bg-white/10 rounded-xl p-4">Environmental health assessments</div>
            <div className="bg-white/10 rounded-xl p-4">Vector-borne disease monitoring</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="medical-types" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Program Types</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive healthcare programs combining medical expertise
          with community outreach in East Africa</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/*  Medical Camps  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/medicalcamps.jpeg')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-truck-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Camps</h3>
            <p className="text-gray-600 mb-4">Bringing essential healthcare to remote rural communities in Uganda through
              temporary medical camps.</p>
            <div className="text-sm text-gray-500 mb-4">Duration: 2-4 weeks | Requirements: MD/RN</div>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="medical-camps">Learn More</button>
          </div>
        </div>

        {/*  Hospital & Lab Visits  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/m3.jpg')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-graduation-cap-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospital & Lab Visits</h3>
            <p className="text-gray-600 mb-4">Organized visits to public and private hospitals and laboratories for
              experiential learning.</p>
            <div className="text-sm text-gray-500 mb-4">Duration: 1-3 weeks | Requirements: Medical Student+</div>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="hospital-lab-visits">Learn More</button>
          </div>
        </div>

        {/*  Traditional Medicine  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('img/a2.JPG')"}}></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-leaf-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Traditional Medicine</h3>
            <p className="text-gray-600 mb-4">Learn from African medicine men about traditional healing using local herbs
              and knowledge.</p>
            <div className="text-sm text-gray-500 mb-4">Duration: 1-2 weeks | Requirements: Open to all</div>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="traditional-medicine">Learn More</button>
          </div>
        </div>

        {/*  One Health Initiatives  */}
        <div className="program-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-cover bg-center" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"}}>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <i className="ri-heart-pulse-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">One Health Initiatives</h3>
            <p className="text-gray-600 mb-4">Collaborative programs addressing animal and human health through the One
              Health approach.</p>
            <div className="text-sm text-gray-500 mb-4">Duration: 3-6 weeks | Requirements: Health Professionals</div>
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 whitespace-nowrap view-details" data-target="one-health-initiatives">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    {/*  Modal Overlay  */}
    <div id="medicalModal" className="fixed inset-0 bg-black bg-opacity-80 hidden items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <span className="close-modal absolute top-4 right-6 text-4xl text-gray-500 cursor-pointer hover:text-gray-700 z-10">×</span>
        <div id="medicalModalContent" className="p-8 pt-16">
          {/*  Dynamic content will be inserted here  */}
        </div>
      </div>
    </div>
  </section>

  {/*  Load jsPDF with proper error handling  */}
  
  

  <section id="medical-field-activities" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Activities for Medical Professional Expeditions</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">Some activities for medical professional expeditions in and
          around wildlife protected areas in Uganda and East Africa.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
            <i className="ri-hospital-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Medical Outreach Clinics</h3>
          <p className="text-gray-600">Provide basic medical services such as consultations, treatment of common illnesses,
            and patient referrals in communities surrounding protected areas.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
            <i className="ri-presentation-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Health Education and Awareness</h3>
          <p className="text-gray-600">Conduct health education sessions on hygiene, sanitation, nutrition, malaria
            prevention, and disease prevention in rural communities.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-5">
            <i className="ri-microscope-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Zoonotic Disease Surveillance</h3>
          <p className="text-gray-600">Collaborate with veterinarians and conservation teams to monitor and report diseases
            that can be transmitted between animals and humans using the One Health approach.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
            <i className="ri-medicine-bottle-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Tropical and Travel Medicine Training</h3>
          <p className="text-gray-600">Gain practical exposure to malaria, typhoid, parasitic infections, and other common
            tropical conditions affecting communities at the wildlife-community interface.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
            <i className="ri-leaf-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Health Assessments</h3>
          <p className="text-gray-600">Assess water quality, sanitation facilities, and waste management practices in
            communities near protected areas.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-5">
            <i className="ri-heart-pulse-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Screening Programs</h3>
          <p className="text-gray-600">Conduct community health screenings including blood pressure checks, malaria testing,
            and basic diagnostic assessments.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
            <i className="ri-file-search-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Research and Data Collection</h3>
          <p className="text-gray-600">Support public health research on disease prevalence, health behaviours, and health
            risks associated with wildlife-human interactions.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
            <i className="ri-building-4-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration with Local Health Facilities</h3>
          <p className="text-gray-600">Work with nearby clinics and hospitals to strengthen healthcare delivery and
            understand the challenges of providing services in remote areas.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-5">
            <i className="ri-group-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Engagement and Cultural Exchange</h3>
          <p className="text-gray-600">Interact with local communities to understand cultural practices, traditional health
            beliefs, and their influence on health-seeking behaviour.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2 lg:col-span-3 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
            <i className="ri-bug-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Vector-Borne Disease Monitoring</h3>
          <p className="text-gray-600">Study and monitor vector-borne diseases such as malaria and other insect-transmitted
            infections that are common in tropical ecosystems.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="focus-areas" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Focus Areas</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Key medical expedition focus areas in Uganda and East Africa
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-heart-pulse-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Tropical Medicine</h3>
          <p className="text-gray-600 mb-4 text-center">Study of disease dynamics at the animal-human-environment interface
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Neglected Tropical Diseases</li>
              <li>• Communicable diseases</li>
              <li>• Non-communicable diseases</li>
              <li>• Disease surveillance</li>
            </ul>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-community-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Public Health</h3>
          <p className="text-gray-600 mb-4 text-center">Community health programs and disease prevention initiatives</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Rural healthcare access</li>
              <li>• Maternal and child health</li>
              <li>• Health education</li>
              <li>• Medical supply distribution</li>
            </ul>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-flask-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Medical Research</h3>
          <p className="text-gray-600 mb-4 text-center">Field research on unique health challenges in East Africa</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Salt mining health impacts</li>
              <li>• Vitiligo and stigmatized conditions</li>
              <li>• Synaesthesia research</li>
              <li>• Traditional medicine efficacy</li>
            </ul>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-team-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Medical Training</h3>
          <p className="text-gray-600 mb-4 text-center">Capacity building for local healthcare workers</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Internship programs</li>
              <li>• Student exchanges</li>
              <li>• Clinical skill development</li>
              <li>• Emergency response training</li>
            </ul>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-first-aid-kit-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Medical Supplies</h3>
          <p className="text-gray-600 mb-4 text-center">Supporting rural clinics with critical supplies</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Medicine donations</li>
              <li>• Equipment distribution</li>
              <li>• Supply chain support</li>
              <li>• Infrastructure improvement</li>
            </ul>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-leaf-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Traditional Medicine</h3>
          <p className="text-gray-600 mb-4 text-center">Documenting and studying African healing practices</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Herbal medicine research</li>
              <li>• Cultural healing practices</li>
              <li>• Integration with modern medicine</li>
              <li>• Knowledge preservation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="specialties-required" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Specialties Required</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Healthcare expertise needed for our medical expedition
          programs</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-stethoscope-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Medical Physicians</h3>
          <p className="text-gray-600 mb-4 text-center">Doctors across all specialties for clinical work and training</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Valid medical license</li>
              <li>• 2+ years clinical experience</li>
              <li>• Tropical medicine knowledge</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 2-6 weeks</div>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-nurse-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Nurses</h3>
          <p className="text-gray-600 mb-4 text-center">RNs for patient care, education and capacity building</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Active nursing license</li>
              <li>• Clinical experience</li>
              <li>• Community health interest</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 2-4 weeks</div>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-empathize-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Paramedics</h3>
          <p className="text-gray-600 mb-4 text-center">Emergency responders for field conditions</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Certified paramedic</li>
              <li>• Field experience</li>
              <li>• Emergency response training</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 2-3 weeks</div>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-microscope-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Lab Technicians</h3>
          <p className="text-gray-600 mb-4 text-center">For diagnostic support and training</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Laboratory certification</li>
              <li>• Diagnostic experience</li>
              <li>• Equipment maintenance skills</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 3-5 weeks</div>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-group-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Public Health</h3>
          <p className="text-gray-600 mb-4 text-center">Professionals for community health programs</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Public health background</li>
              <li>• Program development</li>
              <li>• Community engagement</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 4-8 weeks</div>
          </div>
        </div>

        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i className="ri-book-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Medical Students</h3>
          <p className="text-gray-600 mb-4 text-center">For educational rotations and field experience</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Requirements:</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Currently enrolled</li>
              <li>• Clinical rotations completed</li>
              <li>• Letter from institution</li>
            </ul>
            <div className="text-sm text-gray-600 mt-3">Commitment: 4-12 weeks</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  <section id="application-requirements" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Requirements</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Essential requirements for medical expedition participation
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-star-fill text-white text-sm"></i>
            </div>
            Professional Requirements
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Medical License</h4>
                <p className="text-gray-600 text-sm">Valid medical license in good standing from home country</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Professional Experience</h4>
                <p className="text-gray-600 text-sm">Minimum 2 years post-residency clinical experience</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Medical Clearance</h4>
                <p className="text-gray-600 text-sm">Complete medical examination and vaccination records</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Insurance Coverage</h4>
                <p className="text-gray-600 text-sm">International medical and evacuation insurance</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Background Check</h4>
                <p className="text-gray-600 text-sm">Clean criminal background check and references</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Language Proficiency</h4>
                <p className="text-gray-600 text-sm">Fluent English communication skills</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-file-list-line text-white text-sm"></i>
            </div>
            Documentation Required
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Curriculum Vitae</h4>
                <p className="text-gray-600 text-sm">Detailed CV with medical education and experience</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Medical Diploma</h4>
                <p className="text-gray-600 text-sm">Certified copy of medical degree and certifications</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Professional References</h4>
                <p className="text-gray-600 text-sm">Three professional references from medical colleagues</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Passport Copy</h4>
                <p className="text-gray-600 text-sm">Valid passport with minimum 6 months validity</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Vaccination Records</h4>
                <p className="text-gray-600 text-sm">Complete vaccination history including travel vaccines</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                <i className="ri-file-line text-white text-xs"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Motivation Letter</h4>
                <p className="text-gray-600 text-sm">Personal statement explaining your interest and goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  */}

  {/*  <section id="program-calendar" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Calendar</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Upcoming medical expedition dates and application deadlines
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            className="calendar-card border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Jun</div>
              <div className="text-sm text-gray-600 mb-3">Uganda Medical Camps</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Application:</span>
                  <span className="font-semibold text-red-500">Apr 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Program:</span>
                  <span className="font-semibold">Jun 10-24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Spots:</span>
                  <span className="font-semibold text-secondary">8 available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Specialty:</span>
                  <span className="font-semibold">All Specialties</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="calendar-card border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Aug</div>
              <div className="text-sm text-gray-600 mb-3">Traditional Medicine</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Application:</span>
                  <span className="font-semibold text-green-600">Jun 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Program:</span>
                  <span className="font-semibold">Aug 5-19</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Spots:</span>
                  <span className="font-semibold text-secondary">12 available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Specialty:</span>
                  <span className="font-semibold">Open to all</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="calendar-card border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Oct</div>
              <div className="text-sm text-gray-600 mb-3">One Health Initiative</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Application:</span>
                  <span className="font-semibold text-green-600">Aug 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Program:</span>
                  <span className="font-semibold">Oct 7-28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Spots:</span>
                  <span className="font-semibold text-secondary">6 available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Specialty:</span>
                  <span className="font-semibold">Vets & MDs</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="calendar-card border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Jan</div>
              <div className="text-sm text-gray-600 mb-3">Hospital & Lab Visits</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Application:</span>
                  <span className="font-semibold text-green-600">Nov 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Program:</span>
                  <span className="font-semibold">Jan 15-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Spots:</span>
                  <span className="font-semibold text-secondary">10 available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Specialty:</span>
                  <span className="font-semibold">Students+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap mr-4">
            View Full Calendar
          </button>
          <a href="#expedition-form"
            className="bg-secondary hover:bg-green-700 text-white px-8 py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </section>  */}

  <section id="start-expedition" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Medical Expedition</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to make a difference in East African healthcare? Apply
          for our medical expedition programs</p>
      </div>
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Inquiry Form</h3>
            <form id="expedition-form" className="space-y-6" action="https://formspree.io/f/mldlkwke" method="POST">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expedition_first_name" className="block text-sm font-semibold text-gray-700 mb-2">First
                    Name</label>
                  <input id="expedition_first_name" name="first_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your first name" required />
                </div>
                <div>
                  <label htmlFor="expedition_last_name" className="block text-sm font-semibold text-gray-700 mb-2">Last
                    Name</label>
                  <input id="expedition_last_name" name="last_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your last name" required />
                </div>
              </div>
              <div>
                <label htmlFor="expedition_email" className="block text-sm font-semibold text-gray-700 mb-2">Email
                  Address</label>
                <input id="expedition_email" name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="medical_specialty" className="block text-sm font-semibold text-gray-700 mb-2">Medical
                  Specialty</label>
                <select id="medical_specialty" name="medical_specialty" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" required>
                  <option value="">Select your medical specialty</option>
                  <option value="Emergency Medicine">Emergency Medicine</option>
                  <option value="General Practice">General Practice</option>
                  <option value="Public Health">Public Health</option>
                  <option value="Tropical Medicine">Tropical Medicine</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Nursing">Nursing</option>
                </select>
              </div>
              <div>
                <label htmlFor="years_experience" className="block text-sm font-semibold text-gray-700 mb-2">Years of
                  Experience</label>
                <select id="years_experience" name="years_experience" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" required>
                  <option value="">Select your experience level</option>
                  <option value="2-5">2-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Program Interest</label>
                <div className="grid grid-cols-2 gap-3">
                  <label htmlFor="program_interest_camps" className="flex items-center cursor-pointer">
                    <input id="program_interest_camps" name="program_interest[]" defaultValue="Medical Camps" type="checkbox" className="hidden program-checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                      <i className="ri-check-line text-white text-xs hidden"></i>
                    </div>
                    <span className="text-sm text-gray-700">Medical Camps</span>
                  </label>
                  <label htmlFor="program_interest_visits" className="flex items-center cursor-pointer">
                    <input id="program_interest_visits" name="program_interest[]" defaultValue="Hospital Visits" type="checkbox" className="hidden program-checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                      <i className="ri-check-line text-white text-xs hidden"></i>
                    </div>
                    <span className="text-sm text-gray-700">Hospital Visits</span>
                  </label>
                  <label htmlFor="program_interest_traditional" className="flex items-center cursor-pointer">
                    <input id="program_interest_traditional" name="program_interest[]" defaultValue="Traditional Medicine" type="checkbox" className="hidden program-checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                      <i className="ri-check-line text-white text-xs hidden"></i>
                    </div>
                    <span className="text-sm text-gray-700">Traditional Medicine</span>
                  </label>
                  <label htmlFor="program_interest_one_health" className="flex items-center cursor-pointer">
                    <input id="program_interest_one_health" name="program_interest[]" defaultValue="One Health" type="checkbox" className="hidden program-checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-2 checkbox-custom">
                      <i className="ri-check-line text-white text-xs hidden"></i>
                    </div>
                    <span className="text-sm text-gray-700">One Health</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                <textarea id="availability" name="availability" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Please describe your availability and preferred program dates..." required></textarea>
              </div>
              <div>
                <label htmlFor="additional_info" className="block text-sm font-semibold text-gray-700 mb-2">Additional
                  Information</label>
                <textarea id="additional_info" name="additional_info" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Tell us about your motivation for joining medical expeditions and any relevant experience..."></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary hover:bg-green-700 text-white py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap">
                Submit Application
              </button>
            </form>
            <div id="expedition-success-message" className="hidden mt-6 p-6 bg-green-50 border border-green-300 text-green-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Application Submitted!</h4>
              <p>Thank you for your interest. We have received your application and will be in touch shortly.</p>
            </div>
            <div id="expedition-error-message" className="hidden mt-6 p-6 bg-red-50 border border-red-300 text-red-800 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Submission Failed</h4>
              <p>We're sorry, but there was a problem submitting your application. Please try again later.</p>
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
                  <h4 className="font-semibold text-gray-900 mb-1">Medical Program Coordinator</h4>
                  <p className="text-gray-600 mb-2">Speak with our medical expedition specialists</p>
                  <div className="space-y-1">
                    <p className="text-primary font-semibold">+256 740 205146</p>
                    <p className="text-primary font-semibold">+256 777 370494</p>
                  </div>
                  <p className="text-sm text-gray-500">Monday - Saturday, 8:00 AM - 6:00 PM EAT</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medical Programs Email</h4>
                  <p className="text-gray-600 mb-2">Get detailed program information and requirements</p>
                  <p className="text-secondary font-semibold">wildmeduganda@gmail.com</p>
                  <p className="text-sm text-gray-500">Response within 12 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600 mb-2">Visit our headquarters in Uganda</p>
                  <p className="text-orange-600 font-semibold text-sm">Plot 626, Seguku Katale, P.O.Box 10296, Kampala</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-heart-pulse-line text-blue-600"></i>
                </div>
                Medical Professional Priority
              </h4>
              <p className="text-blue-800 text-sm">Healthcare professionals receive priority processing and dedicated
                support throughout the application process.</p>
            </div>
            <div className="mt-4 p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-shield-check-line text-green-600"></i>
                </div>
                Comprehensive Support
              </h4>
              <p className="text-green-800 text-sm">Full pre-departure training, in-country support, and post-mission
                debrief included with every program.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="supplies-initiative" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Supplies Initiative</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Supporting rural clinics with critical medical supplies</p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate Medical Supplies</h3>
            <p className="text-gray-600 mb-6">We coordinate the collection and distribution of medical supplies to support
              rural health clinics and laboratories in Uganda that are facing critical shortages.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span>Medicines and pharmaceuticals</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span>Diagnostic equipment and lab supplies</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span>Surgical instruments and supplies</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span>Personal protective equipment (PPE)</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span>Medical training materials</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">How to Contribute</h4>
            <form id="supplies-form" className="space-y-4" action="https://formspree.io/f/mldlkwke" method="POST">
              <div>
                <label htmlFor="donor_name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input id="donor_name" name="donor_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="donor_email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input id="donor_email" name="donor_email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="donation_type" className="block text-sm font-semibold text-gray-700 mb-2">Type of
                  Donation</label>
                <select id="donation_type" name="donation_type" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" required>
                  <option value="">Select donation type</option>
                  <option value="Medical Equipment">Medical Equipment</option>
                  <option value="Medicines">Medicines</option>
                  <option value="Financial Contribution">Financial Contribution</option>
                  <option value="Other Supplies">Other Supplies</option>
                </select>
              </div>
              <div>
                <label htmlFor="donor_message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="donor_message" name="donor_message" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm" placeholder="Tell us about your donation..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white py-3 !rounded-button font-semibold transition-colors duration-200 whitespace-nowrap">
                Submit Donation Inquiry
              </button>
            </form>
            <div id="supplies-success-message" className="hidden mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Your donation inquiry has been sent successfully. Thank you for your support!
            </div>
            <div id="supplies-error-message" className="hidden mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              There was a problem submitting your inquiry. Please try again later.
            </div>
          </div>
        </div>
      </div>
  </div></section>

  

  

  

  

  

  

  










    </div>
  );
}
