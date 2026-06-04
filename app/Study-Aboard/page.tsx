"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function StudyAboardPage() {
  return (
    <div className="bg-white">
      
  {/*  Header  */}
  







  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 parallax-bg bg-cover bg-center" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=International%20students%20in%20Uganda%20studying%20One%20Health%20program%2C%20group%20of%20students%20in%20field%20training%2C%20outdoor%20classroom%20with%20savanna%20landscape%2C%20instructors%20teaching%20about%20human-animal-environment%20interface%2C%20cultural%20diversity%2C%20golden%20hour%20lighting%2C%20acacia%20trees%20in%20background%2C%20professional%20study%20abroad%20atmosphere&width=1920&height=1080&seq=study-abroad-hero&orientation=landscape')"}}>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-transparent"></div>
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium tracking-wider border border-green-400/30">
            STUDY ABROAD
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
            Study Abroad
          </span>
          <span className="block text-white mt-4">Field Rotations</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 font-light">
          Explore health and cultural diversity in Uganda and East Africa
        </p>
        <div className="grid grid-cols-2 gap-6 w-full max-w-md mt-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">50+</div>
            <div className="text-sm">Annual Participants</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-300">10+</div>
            <div className="text-sm">Partner Institutions</div>
          </div>
        </div>
        <button id="applyNowBtn" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          Apply Now
        </button>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
  </section>

  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">One Health Annual Study Abroad Program</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Immersive learning experiences in Uganda and East Africa</p>
      </div>
      <div className="program-card bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Program Description</h3>
        <p className="text-gray-600 mb-4">This program exposes students to a One Health approach in a tropical and
          developing country setting, focusing on:</p>
        <ul className="text-gray-600 mb-4 space-y-2">
          <li className="flex items-start">
            <i className="ri-check-line text-secondary mr-2 mt-1"></i>
            Human public health systems and animal health
          </li>
          <li className="flex items-start">
            <i className="ri-check-line text-secondary mr-2 mt-1"></i>
            Wildlife health and management
          </li>
          <li className="flex items-start">
            <i className="ri-check-line text-secondary mr-2 mt-1"></i>
            Veterinary public health and diagnostic laboratories
          </li>
          <li className="flex items-start">
            <i className="ri-check-line text-secondary mr-2 mt-1"></i>
            Food science, nutrition, and environmental conservation
          </li>
          <li className="flex items-start">
            <i className="ri-check-line text-secondary mr-2 mt-1"></i>
            Cultural diversity and natural ecosystems
          </li>
        </ul>
        <p className="text-gray-600 mb-4">Running from June to July annually, with customizable schedules for winter,
          spring, or autumn programs. International students train alongside local Ugandan and East African students in
          settings emphasizing the Human-Animal-Environment interface.</p>
        <p className="text-gray-600 mb-4">Coordinated by Expert Expeditions, Africa, Muse Safaris, Muse Wildlife Industry
          (MWI), and the Department of Wildlife and Aquatic Animal Resources at Makerere University’s College of
          Veterinary Medicine, Animal Resources, and Biosecurity (COVAB).</p>
      </div>
    </div>
  </section>

  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Gallery</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the experiences awaiting you</p>
      </div>

      <div className="gallery-grid bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*  Image 1  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/bleed.jpg" alt="Study Abroad Image 1" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*  Image 2  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/IMG-20240629-WA0043.jpg" alt="Study Abroad Image 2" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*  Image 3  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/move13.jpeg" alt="Study Abroad Image 3" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*  Image 4  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/IMG-20240630-WA0027.jpg" alt="Study Abroad Image 4" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*  Image 5  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/Nshaara1.jpg" alt="Study Abroad Image 5" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*  Image 6  */}
          <div className="gallery-item group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img src="assets/Study Abroad Program/PHOTO-2024-05-14-22-08-49.jpg" alt="Study Abroad Image 6" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  Lightbox Modal  */}
    <div id="lightbox" className="fixed inset-0 bg-black bg-opacity-90 hidden items-center justify-center z-50 p-4">
      <div className="max-w-4xl w-full max-h-full relative">
        <span className="close-lightbox absolute -top-12 right-0 text-4xl text-white cursor-pointer hover:text-gray-300 z-10">×</span>
        <div className="lightbox-content">
          <img id="lightbox-img" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" src="" alt="" />
          <div className="text-white text-center mt-4 text-xl" id="lightbox-caption"></div>
        </div>
        <button className="lightbox-arrow prev-arrow absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70">◀</button>
        <button className="lightbox-arrow next-arrow absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70">▶</button>
      </div>
    </div>
  </section>

  

  

  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Participating Entities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Collaborating institutions and organizations</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>College of Health Sciences (CHS)</li>
            <li>Uganda Wildlife Authority (UWA)</li>
            <li>College of Agricultural and Environmental Sciences (CAES)</li>
            <li>Makerere University Biological Field Station (MUBFS)</li>
            <li>Uganda Wildlife Conservation Education Centre (UWEC)</li>
          </ul>
        </div>
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>African Union of Conservationists (AUC)</li>
            <li>Reform Africa (RA)</li>
            <li>JESA Farm</li>
            <li>The Uganda Society for the Protection and Care of Animals (USPCA)</li>
            <li>Dr. Naluyima's One Acre Farm</li>
          </ul>
        </div>
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Victoria Treasures Fish Farm</li>
            <li>Central Public Health Laboratories (CPHLs)</li>
            <li>Kirudu Hospital, Kampala</li>
            <li>National Animal Diseases and Epidemiology Centre (NADDEC)</li>
            <li>Uganda Virus Research Institute (UVRI)</li>
          </ul>
        </div>
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>National Animal Genetics Resources and Data Bank (NAGR&DB)</li>
            <li>Gorilla Doctors</li>
            <li>Ndere Cultural Centre</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligible Disciplines</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fields of study for program enrollment</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Biological Sciences</li>
            <li>Environmental Sciences</li>
            <li>Medical Sciences</li>
            <li>Veterinary Sciences</li>
            <li>Pre-Meds</li>
          </ul>
        </div>
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Pre-Vets</li>
            <li>Veterinary Medicine</li>
            <li>Biotechnology and Biolab Sciences</li>
            <li>Public Health</li>
          </ul>
        </div>
        <div className="specialty-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Animal Production</li>
            <li>Wildlife Sciences</li>
            <li>Aquatic Sciences</li>
            <li>Food Sciences</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Costs</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Pricing details for the One Health Study Abroad Program</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4 bg-secondary text-white">Program Duration</th>
              <th className="border border-gray-300 p-4 bg-secondary text-white">1-4 Participants</th>
              <th className="border border-gray-300 p-4 bg-secondary text-white">4-6 Participants</th>
              <th className="border border-gray-300 p-4 bg-secondary text-white">≥7 Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 text-center">14 days</td>
              <td className="border border-gray-300 p-4 text-center">$3,600 per head</td>
              <td className="border border-gray-300 p-4 text-center">$3,200 per head</td>
              <td className="border border-gray-300 p-4 text-center">$2,800 per head</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 text-center">21 days</td>
              <td className="border border-gray-300 p-4 text-center">$4,200</td>
              <td className="border border-gray-300 p-4 text-center">$3,800</td>
              <td className="border border-gray-300 p-4 text-center">$3,400</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 text-center">28 days</td>
              <td className="border border-gray-300 p-4 text-center">$4,600</td>
              <td className="border border-gray-300 p-4 text-center">$4,000</td>
              <td className="border border-gray-300 p-4 text-center">$3,600</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 text-center">35 days</td>
              <td className="border border-gray-300 p-4 text-center">$4,600</td>
              <td className="border border-gray-300 p-4 text-center">$4,000</td>
              <td className="border border-gray-300 p-4 text-center">$3,600</td>
            </tr>
            <tr>
              <td colSpan={4} className="border border-gray-300 p-4 text-left">
                <strong>Includes:</strong>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Airport pickup and drop off</li>
                  <li>Local transport</li>
                  <li>Accommodation</li>
                  <li>Meals (Breakfast, lunch, and supper)</li>
                  <li>Payment of field training personnel</li>
                  <li>Entrance fees to facilities</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="border border-gray-300 p-4 text-left">
                <strong>Excludes:</strong>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Any private expenses</li>
                  <li>Medical insurance</li>
                  <li>Air ticket</li>
                  <li>Alcohol</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600 mt-4">Note: For participants wishing to attend for less than 2 weeks, a budget quote can
          be provided based on the number of activities accommodated within the chosen timeframe.</p>
      </div>
    </div>
  </section>




  {/*  Modal for Booking Form  */}
  <div id="bookingModal" className="fixed inset-0 z-50 hidden w-full h-full bg-black bg-opacity-80 overflow-y-auto">
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative modal-fade-in">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold transition-colors" aria-label="Close Modal">×</button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">One Health Study Abroad Application</h2>

        {/*  Success Message (initially hidden)  */}
        <div id="successMessage" className="hidden text-center py-8 modal-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-checkbox-circle-fill text-5xl text-green-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Sent!</h3>
          <p className="text-gray-600 mb-8">Thank you for your interest in the One Health Study Abroad program. We've
            received your details and our team will contact you via email within 24 hours.</p>
          <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Close
          </button>
        </div>

        <form id="studyAbroadForm" className="space-y-6">
          <input type="hidden" name="program" defaultValue="One Health Study Abroad Program" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" name="name" required placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" name="email" required placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">University / Institution</label>
            <input type="text" name="institution" required placeholder="Enter your university" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
            <input type="text" id="travelDate" name="date" required placeholder="Select start date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary pl-10 text-black" />
            <span className="absolute left-3 top-10 text-gray-400">
              <i className="ri-calendar-line"></i>
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Program Duration</label>
            <select name="duration" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black">
              <option value="14 days">14 Days</option>
              <option value="21 days">21 Days</option>
              <option value="28 days">28 Days</option>
              <option value="35 days">35 Days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Interests / Major</label>
            <textarea name="interests" rows={3} placeholder="e.g., Veterinary, Medical, Wildlife Conservation, Public Health" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-black"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-secondary hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 w-full">Submit
              Application Request</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  
  









    </div>
  );
}
