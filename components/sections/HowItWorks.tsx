"use client";

import React from 'react';

const steps = [
  {
    number: '01',
    icon: 'ri-search-eye-line',
    title: 'Choose Your Programme',
    desc: 'Browse our custom safaris, professional expeditions, and study abroad programmes. Filter by duration, destination, or interest.',
    accent: 'text-sunset-gold',
    border: 'border-sunset-gold/30',
    bg: 'bg-sunset-gold/10',
  },
  {
    number: '02',
    icon: 'ri-edit-2-line',
    title: 'Customise Your Plan',
    desc: 'Work with our expert team to tailor every detail — dates, activities, group size, accommodation, and learning objectives.',
    accent: 'text-sunset-orange',
    border: 'border-sunset-orange/30',
    bg: 'bg-sunset-orange/10',
  },
  {
    number: '03',
    icon: 'ri-flight-takeoff-line',
    title: 'Embark on Your Expedition',
    desc: 'Arrive and let WildMed handle the rest. From airport transfers to expert field guides, you focus on the adventure.',
    accent: 'text-sunset-honey',
    border: 'border-sunset-honey/30',
    bg: 'bg-sunset-honey/10',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sunset-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sunset-amber text-sm font-semibold uppercase tracking-widest mb-3">
            Simple Process
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Getting started with WildMed is straightforward. Here's how your expedition comes to life.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-sunset-gold/30 via-sunset-orange/30 to-sunset-honey/30 z-0" style={{ left: '16.66%', right: '16.66%' }} />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Step number circle */}
              <div className={`relative z-10 w-28 h-28 rounded-3xl ${step.bg} border-2 ${step.border} flex flex-col items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <i className={`${step.icon} ${step.accent} text-3xl mb-1`} />
                <span className={`text-xs font-bold ${step.accent} opacity-60`}>{step.number}</span>
              </div>

              {/* Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-14 -right-4 z-20 w-8 h-8 items-center justify-center text-gray-300">
                  <i className="ri-arrow-right-line text-2xl text-sunset-gold/40" />
                </div>
              )}

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-sunset-brown transition-colors">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4 text-sm">Ready to start? It takes less than 2 minutes.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openExpeditionModal'))}
            className="bg-gradient-to-r from-sunset-gold to-sunset-amber hover:from-sunset-amber hover:to-sunset-coral text-black px-10 py-4 rounded-full text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Planning →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
