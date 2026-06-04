"use client";

import React, { useState, useEffect } from 'react';

interface BookingFormProps {
  country: string;
  destinations: string[];
  universities?: string[];
}

export default function BookingForm({ country, destinations, universities }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/mldlkwke', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="booking-section" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-[3rem]">
            <i className="ri-checkbox-circle-fill text-6xl text-emerald-500 mb-6 block"></i>
            <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
            <p className="text-slate-300 mb-8">Thank you for your interest in {country}. Our team will review your requirements and get back to you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all"
            >
              Send Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-section" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunset-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-sunset-gold font-black mb-4 block">Tailor Your Journey</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Book Your <span className="italic text-sunset-gold">{country}</span> Expedition</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Start planning your unforgettable safari experience today. Tell us your preferences and we'll handle the rest.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Preferred Destination</label>
                <select 
                  name="destination"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Select Destination</option>
                  {destinations.map(dest => (
                    <option key={dest} value={dest} className="bg-slate-900">{dest}</option>
                  ))}
                </select>
              </div>

              {universities && universities.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Interested Institution</label>
                  <select 
                    name="institution"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select Institution (Optional)</option>
                    {universities.map(uni => (
                      <option key={uni} value={uni} className="bg-slate-900">{uni}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Number of Travelers</label>
                <select 
                  name="travelers"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Group Size</option>
                  <option value="1" className="bg-slate-900">Solo Traveler</option>
                  <option value="2" className="bg-slate-900">2 People</option>
                  <option value="3-5" className="bg-slate-900">Small Group (3-5)</option>
                  <option value="6+" className="bg-slate-900">Large Group (6+)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Budget Range (Per Person)</label>
                <select 
                  name="budget"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Select Budget</option>
                  <option value="budget" className="bg-slate-900">Economy (Under $2,000)</option>
                  <option value="mid" className="bg-slate-900">Comfort ($2,000 - $4,000)</option>
                  <option value="luxury" className="bg-slate-900">Premium ($4,000+)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-black ml-1">Special Requirements & Interests</label>
              <textarea 
                name="requirements" 
                rows={4}
                placeholder="Tell us about your dream trip, dietary restrictions, or specific academic interests..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sunset-gold transition-all placeholder:text-white/20 resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-sunset-gold text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? 'Sending Request...' : 'Get My Bespoke Quote'}
              </button>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-6">
                Free Consultation • Secure & Private • Response in 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
