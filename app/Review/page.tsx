"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ReviewPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    






    {/*  Hero Section  */}
    {/*  Modern Hero Section  */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16 bg-gray-900">
        {/*  Background Video  */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-eat-and-drink-by-the-campfire-4646-large.mp4" type="video/mp4" />
            {/*  Fallback image  */}
            <img src="https://readdy.ai/api/search-image?query=African%20safari%20sunset%20with%20group%20of%20happy%20travelers%20toasting%20with%20drinks%2C%20golden%20hour%20lighting%2C%20professional%20photography%2C%20authentic%20travel%20experience%2C%20community%20and%20camaraderie%20mood&width=1920&height=600&seq=reviews_hero&orientation=landscape" alt="Safari sunset" className="absolute inset-0 w-full h-full object-cover" />
        </video>

        {/*  Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-blue-900/70 to-indigo-900/80"></div>

        {/*  Animated Floating Elements  */}
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-amber-400/20 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-400/20 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white/10 animate-float3"></div>

        {/*  Content Container  */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            {/*  Animated Title  */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                <span className="inline-block animate-fadeInUp">
                    Guest <span className="text-amber-300">Reviews</span>
                </span>
            </h1>

            {/*  Subtitle with Typing Effect  */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeInUp delay-100">
                <span className="typed-text">Hear what travelers say about their WildMed Safaris adventures</span>
                <span className="cursor">|</span>
            </p>

            {/*  Interactive Rating Display  */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fadeInUp delay-200">
                <div className="flex mr-3">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <span className="text-white font-medium">4.9/5 from 127 reviews</span>
            </div>

            {/*  Animated Scroll Indicator  */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    </section>

    

    
    {/*  Reviews Section  */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Traveler Experiences</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Read authentic reviews from our guests who have
                    explored East Africa with us</p>
            </div>

            {/*  Review Submission Form  */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h3>
                <form id="review-form" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="safari" className="block text-gray-700 font-medium mb-2">Safari Package</label>
                        <select id="safari" name="safari" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                            <option value="">Select your safari package</option>
                            <option value="Kenya Wildlife Safari">Kenya Wildlife Safari</option>
                            <option value="Tanzania Adventure">Tanzania Adventure</option>
                            <option value="Uganda Gorilla Trek">Uganda Gorilla Trek</option>
                            <option value="Rwanda Conservation Tour">Rwanda Conservation Tour</option>
                            <option value="Custom Expedition">Custom Expedition</option>
                            <option value="Medical Volunteer Program">Medical Volunteer Program</option>
                            <option value="Veterinary Field Experience">Veterinary Field Experience</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Rating</label>
                        <div className="flex space-x-2">
                            <input type="radio" id="star1" name="rating" defaultValue="1" className="hidden" />
                            <label htmlFor="star1" className="star-rating cursor-pointer text-3xl transition-colors duration-200 text-gray-300">★</label>
                            <input type="radio" id="star2" name="rating" defaultValue="2" className="hidden" />
                            <label htmlFor="star2" className="star-rating cursor-pointer text-3xl transition-colors duration-200 text-gray-300">★</label>
                            <input type="radio" id="star3" name="rating" defaultValue="3" className="hidden" />
                            <label htmlFor="star3" className="star-rating cursor-pointer text-3xl transition-colors duration-200 text-gray-300">★</label>
                            <input type="radio" id="star4" name="rating" defaultValue="4" className="hidden" />
                            <label htmlFor="star4" className="star-rating cursor-pointer text-3xl transition-colors duration-200 text-gray-300">★</label>
                            <input type="radio" id="star5" name="rating" defaultValue="5" className="hidden" />
                            <label htmlFor="star5" className="star-rating cursor-pointer text-3xl transition-colors duration-200 text-gray-300">★</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="review" className="block text-gray-700 font-medium mb-2">Your Review</label>
                        <textarea id="review" name="review" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"></textarea>
                    </div>
                    <div>
                        <label htmlFor="photos" className="block text-gray-700 font-medium mb-2">Upload Photos
                            (Optional)</label>
                        <input type="file" id="photos" name="photos" multiple accept="image/*" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="consent" name="consent" required className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <label htmlFor="consent" className="ml-2 text-gray-700">I agree to have my review published on the
                            WildMed Safaris website</label>
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
                        Submit Review
                    </button>
                </form>
            </div>

            {/*  Reviews Grid  */}
            <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Reviews will be dynamically inserted here  */}
            </div>

            <div className="text-center mt-12">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 !rounded-button text-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                    Load More Reviews
                </button>
            </div>
        </div>
    </section>

    {/*  Call to Action  */}
    <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{"backgroundImage":"url('https://readdy.ai/api/search-image?query=group%20of%20happy%20travelers%20on%20safari%20vehicle%20african%20sunset&width=1920&height=600&seq=reviews_cta&orientation=landscape')"}}>
        </div>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Ready for Your Adventure?</h2>
            <p className="text-xl mb-8">Join the hundreds of travelers who've had life-changing experiences with WildMed
                Safaris</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="Custom-Safaris.html" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 !rounded-button text-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                    Book Your Safari Now
                </a>
                <a href="#" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 !rounded-button text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                    Contact Us
                </a>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    
    









    </div>
  );
}
