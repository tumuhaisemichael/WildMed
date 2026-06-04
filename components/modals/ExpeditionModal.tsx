"use client";

import React, { useState, useEffect } from 'react';

const ExpeditionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openExpeditionModal', handleOpen);
    return () => window.removeEventListener('openExpeditionModal', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

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
        alert('Thank you! Your expedition request has been submitted. We will contact you soon.');
        closeModal();
        (e.target as HTMLFormElement).reset();
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
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-auto relative shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Plan Your Expedition</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" name="name" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" name="phone" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <select id="destination" name="destination" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="">Select a destination</option>
              <option value="kenya">Kenya</option>
              <option value="tanzania">Tanzania</option>
              <option value="uganda">Uganda</option>
              <option value="rwanda">Rwanda</option>
            </select>
          </div>
          <div>
            <label htmlFor="dates" className="block text-sm font-medium text-gray-700">Travel Dates</label>
            <input type="text" id="dates" name="dates" placeholder="MM/DD/YYYY - MM/DD/YYYY" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Expedition Type</label>
            <select id="type" name="type" required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="">Select type</option>
              <option value="custom">Custom Safari</option>
              <option value="vet">Veterinary Program</option>
              <option value="medical">Medical Mission</option>
              <option value="study">Study Abroad</option>
            </select>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Requests</label>
            <textarea id="notes" name="notes" rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Modal"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ExpeditionModal;
