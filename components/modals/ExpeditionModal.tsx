"use client";

import React, { useState, useEffect } from 'react';
import FormSuccess from '@/components/forms/FormSuccess';

const ExpeditionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openExpeditionModal', handleOpen);
    return () => window.removeEventListener('openExpeditionModal', handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
    document.body.style.overflow = '';
  };

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
        (e.target as HTMLFormElement).reset();
        setSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again or contact us directly.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[220] overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-xl sm:p-6"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="expedition-modal-title"
    >
      <div className="relative mx-auto my-4 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 text-white shadow-[0_32px_90px_rgba(0,0,0,0.55)] sm:my-8">
        {submitted ? <div className="p-5 sm:p-8"><FormSuccess title="Expedition request received" message="Thank you for sharing your plans. Our expedition team will review your request and contact you to shape the next steps." onClose={closeModal} /></div> : <>
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-8 sm:px-10">
          <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-sunset-gold/15 blur-3xl" />
          <p className="relative flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-sunset-gold"><span className="h-px w-8 bg-sunset-gold" />Tailored East African journeys</p>
          <h2 id="expedition-modal-title" className="headline relative mt-3 text-3xl font-bold sm:text-4xl">Plan your expedition</h2>
          <p className="relative mt-3 max-w-xl text-sm leading-6 text-slate-400">Share the essentials and our local team will shape a journey around your dates, interests, and travel style.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Full name</label>
            <input type="text" id="name" name="name" required
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Email address</label>
            <input type="email" id="email" name="email" required
              autoComplete="email"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Phone</label>
            <input type="tel" id="phone" name="phone" required
              autoComplete="tel"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold" />
          </div>
          <div>
            <label htmlFor="destination" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Destination</label>
            <select id="destination" name="destination" required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold">
              <option value="">Select a destination</option>
              <option value="kenya">Kenya</option>
              <option value="tanzania">Tanzania</option>
              <option value="uganda">Uganda</option>
              <option value="rwanda">Rwanda</option>
            </select>
          </div>
          <div>
            <label htmlFor="dates" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Travel dates</label>
            <input type="text" id="dates" name="dates" placeholder="MM/DD/YYYY - MM/DD/YYYY" required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold" />
          </div>
          <div>
            <label htmlFor="type" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Expedition type</label>
            <select id="type" name="type" required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold">
              <option value="">Select type</option>
              <option value="custom">Custom Safari</option>
              <option value="vet">Veterinary Program</option>
              <option value="medical">Medical Mission</option>
              <option value="study">Study Abroad</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="notes" className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Special requests</label>
            <textarea id="notes" name="notes" rows={3}
              placeholder="Tell us what would make this journey meaningful for you..."
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-sunset-gold focus:ring-1 focus:ring-sunset-gold"></textarea>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-500"><i className="ri-shield-check-line mr-2 text-sunset-gold" />Private enquiry · Response within 24 hours</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-sunset-gold px-8 py-4 font-black text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
          </div>
        </form>
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-slate-950/50 text-slate-300 transition hover:border-sunset-gold hover:text-sunset-gold"
          aria-label="Close Modal"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
        </>}
      </div>
    </div>
  );
};

export default ExpeditionModal;
