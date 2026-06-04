"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function CoursePage() {
  return (
    <div className="bg-white">
      
  

  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 parallax-bg bg-cover bg-center" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=students%20and%20professionals%20attending%20wildlife%20conservation%20field%20lecture%20in%20East%20Africa%2C%20outdoor%20classroom%20with%20notebooks%20and%20binoculars%2C%20scientific%20training%20environment%2C%20warm%20natural%20light&width=1920&height=1080&seq=course-hero-1&orientation=landscape')"}}>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-900/75 to-emerald-900/40"></div>

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div className="text-white">
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold leading-tight">
            Course Methods
            <span className="block text-green-300">& Lectures</span>
          </h1>
          <p className="mt-6 text-lg text-slate-100 max-w-3xl leading-relaxed">
            A practical learning page for participants who want structured course methods, lecture tracks, and
            hands-on sessions in field biology, veterinary conservation, medical outreach, and One Health.
          </p>
          <p className="mt-4 text-lg text-slate-200 max-w-3xl leading-relaxed">
            Content is built from WildMed's current expedition streams across Uganda and East Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#course-methods" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Explore Methods
            </a>
            <a href="#lecture-series" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              View Lectures
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-green-200 mb-2">Learning Streams</p>
            <p className="text-slate-100">Field Biology, Veterinary and Conservation, and Medical One Health modules.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-bold text-green-300">3</div>
              <p className="mt-2 text-sm text-slate-100">Course tracks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-bold text-green-300">10+</div>
              <p className="mt-2 text-sm text-slate-100">Lecture themes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="lecture-announcement" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="rounded-[2rem] overflow-hidden shadow-xl border border-blue-100">
        <div className="bg-gradient-to-r from-blue-900 to-green-700 px-8 py-6 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-green-200 mb-2">Upcoming Lecture</p>
          <h2 className="text-3xl md:text-4xl font-bold">Online Class Session and Physical Follow-Up</h2>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-blue-100 p-6">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Online Meeting</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thursday, April 16, 2026</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Time:</span> 10:00 AM - 12:00 PM</p>
              <p className="text-gray-700 mb-5"><span className="font-semibold">Platform:</span> Google Meet</p>
              <a href="https://meet.google.com/cvu-huyb-wyk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl font-semibold transition-colors">
                Join Online Lecture
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">Physical Interaction</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thursday, April 23, 2026</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Format:</span> In-person follow-up session</p>
              <p className="text-gray-700">Further coordination details can be shared with participants before the session.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">Please join a few minutes early to confirm audio and connectivity.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="course-methods" className="py-20 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Course Methods</h2>
        <p className="mt-4 text-lg text-gray-600">
          These methods are adapted from activities already running across our professional expedition pages.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Observation and Tracking</h3>
          <p className="text-gray-600">Wildlife monitoring, species identification, and ecosystem assessment in protected
            landscapes.</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-On Veterinary Skills</h3>
          <p className="text-gray-600">Wildlife health checks, disease surveillance, rescue support, and recovery
            monitoring methods.</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Based Learning</h3>
          <p className="text-gray-600">Medical outreach, public health education, and cultural exchange at the
            wildlife-community interface.</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Collection and Documentation</h3>
          <p className="text-gray-600">Field logs, ecological sampling notes, health records, and scientific reporting
            fundamentals.</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology-Aided Monitoring</h3>
          <p className="text-gray-600">Use of camera traps, GPS-based tracking, and practical monitoring tools for field
            teams.</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">One Health Integration</h3>
          <p className="text-gray-600">Applied learning on links between human, animal, and environmental health systems.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="lecture-series" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Lecture Series</h2>
        <p className="mt-4 text-lg text-gray-600">
          Suggested lecture blocks that participants can follow before and during field activities.
        </p>
      </div>

      <div className="space-y-10">
        <div className="program-card rounded-[2rem] border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            <div className="min-h-[260px] bg-cover bg-center" style={{"backgroundImage":"url('img/home/DSC_0974.JPG')"}}>
            </div>
            <div className="p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Field Biology Lectures</h3>
              <p className="text-gray-600 mb-6">Biodiversity surveys, habitat and ecosystem assessment, species
                identification, ecological sampling, and conservation research documentation.</p>
              <a href="Biological-Field-Research-Expeditions.html" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">
                Open Field Biology Source Page
              </a>
            </div>
          </div>
        </div>

        <div className="program-card rounded-[2rem] border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            <div className="min-h-[260px] bg-cover bg-center" style={{"backgroundImage":"url('img/home/move9.jpg')"}}>
            </div>
            <div className="p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <i className="ri-stethoscope-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Veterinary and Conservation Lectures</h3>
              <p className="text-gray-600 mb-6">Disease surveillance, conservation medicine, wildlife immobilisation,
                rehabilitation operations, predator ecology, and conservation technology monitoring.</p>
              <a href="Veterinary-Conservation-.html" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">
                Open Veterinary Source Page
              </a>
            </div>
          </div>
        </div>

        <div className="program-card rounded-[2rem] border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            <div className="min-h-[260px] bg-cover bg-center" style={{"backgroundImage":"url('img/home/move16.jfif')"}}>
            </div>
            <div className="p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medical and One Health Lectures</h3>
              <p className="text-gray-600 mb-6">Community outreach clinics, zoonotic disease surveillance, tropical and
                travel medicine, environmental health, screening programmes, and vector-borne disease monitoring.</p>
              <a href="Medical-Expedition-Programs.html" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">
                Open Medical Source Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 text-green-200 text-sm font-semibold mb-6">
            Course Structure
          </span>
          <h2 className="text-4xl font-bold mb-6">Suggested learning flow</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Begin with foundational lectures, then move to supervised practical sessions, and end with a short
            reflection report built from your field notes and observations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-300">Lecture Block</h3>
            <p className="text-slate-300 text-sm">Core theory in conservation, ecology, veterinary and medical fieldwork.</p>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-300">Method Lab</h3>
            <p className="text-slate-300 text-sm">Practical techniques, data capture, and safety protocols.</p>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-300">Field Rotation</h3>
            <p className="text-slate-300 text-sm">Guided participation in real activities with partner teams.</p>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-300">Review Session</h3>
            <p className="text-slate-300 text-sm">Debrief, evidence summary, and learning outcomes review.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="start-course" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6">
      <div className="rounded-[2rem] bg-gradient-to-r from-blue-900 to-green-700 p-10 md:p-14 text-white shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold">Plan Your Course Pathway</h2>
            <p className="mt-5 text-blue-50 leading-relaxed">
              Choose a stream and we can help you combine lectures, methods, and field sessions based on your training
              background and learning goals.
            </p>
            <div className="mt-8 space-y-4 text-blue-50">
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-green-300"></i>
                <span>wildmeduganda@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-green-300"></i>
                <span>+256 740 205146 / +256 777 370494</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
            <h3 className="text-2xl font-semibold mb-4">Recommended start points</h3>
            <ul className="space-y-3 text-blue-50">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Field Biology for research methods and ecosystem monitoring skills.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Veterinary and Conservation for wildlife health and intervention techniques.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Medical One Health for public health and disease surveillance training.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  








    </div>
  );
}
