"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DestinationModal from '../../components/modals/DestinationModal';
import BookingForm from '../../components/sections/BookingForm';
import { rwandaDetailsData } from '../../lib/destinationModals';

const stats = [
  { label: 'Mountain Gorillas', value: '340+', color: 'text-sunset-gold' },
  { label: 'National Parks', value: '4', color: 'text-sunset-orange' },
  { label: 'Bird Species', value: '700+', color: 'text-sunset-amber' },
  { label: 'Primate Species', value: '14', color: 'text-sunset-honey' },
];

const highlights = [
  { title: 'Mountain Gorilla', desc: 'Gentle giants of the Virunga Mountains, Rwanda\'s most famous residents', image: '/img/Destination/UG/gorilla.jpeg' },
  { title: 'Golden Monkey', desc: 'Playful and endangered primates found in the Virunga volcanic region', image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=400' },
  { title: 'Chimpanzee', desc: 'Our closest relatives, thriving in Nyungwe Forest\'s ancient canopy', image: '/img/Destination/UG/Chimpanzee-Tracking-in-Kibale-National-Park.jpg' },
  { title: 'African Elephant', desc: 'Majestic herds roaming Akagera\'s savannas and wetlands', image: '/img/Destination/UG/elephant.jpeg' },
  { title: 'Lion', desc: 'Reintroduced to Akagera, now thriving in Rwanda\'s only savanna park', image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400' },
  { title: 'Hippopotamus', desc: 'Abundant in Akagera\'s lakes and along Lake Kivu\'s shores', image: '/img/Destination/UG/hippos.jpeg' },
];

const wildlifeDestinations = [
  { id: 'volcanoes', name: 'Volcanoes NP', type: 'Mountain Gorillas', price: '$1,500', image: '/img/Destination/rwanda/volcanoes park.jpeg', desc: 'Home to Rwanda\'s famous mountain gorillas in the dramatic Virunga Mountains.' },
  { id: 'nyungwe', name: 'Nyungwe Forest', type: 'Primate Paradise', price: '$1,200', image: '/img/Destination/rwanda/nyungwe.jpeg', desc: 'Ancient rainforest with chimpanzees, colobus monkeys, and spectacular canopy walks.' },
  { id: 'akagera', name: 'Akagera NP', type: 'Big Five Safari', price: '$950', image: '/img/Destination/rwanda/akagera.jpeg', desc: 'Rwanda\'s only savanna park with lions, elephants, and diverse wildlife.' },
  { id: 'lake-kivu', name: 'Lake Kivu', type: 'Scenic Retreat', price: '$800', image: '/img/Destination/rwanda/lakekivu.jpeg', desc: 'Beautiful freshwater lake perfect for relaxation after gorilla trekking.' },
];

const universities = [
  { id: 'ur', name: 'University of Rwanda', type: 'Premier Institution', price: 'Public University', image: '/img/Destination/rwanda/uor.jpeg', desc: 'Rwanda\'s largest and most prestigious public university with multiple campuses.' },
  { id: 'alu', name: 'ALU Rwanda', type: 'Leadership Education', price: 'Private University', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400', desc: 'Innovative pan-African university focused on developing future leaders.' },
  { id: 'ughe', name: 'UGHE', type: 'Global Health', price: 'Specialized University', image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=400', desc: 'Specialized institution focused on global health equity and community-driven care.' },
  { id: 'cmu', name: 'CMU-Africa', type: 'Tech & Engineering', price: 'Postgraduate Campus', image: '/img/Destination/rwanda/CMU.jpeg', desc: 'The Rwanda campus of the world-renowned Carnegie Mellon University.' },
];

const accommodations = [
  { name: 'Bisate Lodge', tier: 'Luxury', image: '/img/Destination/rwanda/Bisate-Lodge-1.jpg', price: '$1,800+/night', desc: 'Eco-luxury villas near Volcanoes National Park with intimate gorilla experiences.' },
  { name: 'Ruzizi Tented Lodge', tier: 'Mid-Range', image: '/img/Destination/rwanda/ruzizi.jpeg', price: '$300-600/night', desc: 'Comfortable riverside tented lodge ideal for Akagera wildlife and birding.' },
  { name: 'Virunga Lodge', tier: 'Experience', image: '/img/Destination/rwanda/virunga.jpeg', price: '$500-800/night', desc: 'Ridge-top bandas between twin lakes with panoramic volcano views.' },
  { name: 'Red Rocks Rwanda', tier: 'Budget', image: '/img/Destination/rwanda/Red-Rocks-Rwanda.jpg', price: '$50-150/night', desc: 'Community-focused eco-lodge in Musanze, great base for trekking.' },
];

export default function RwandaSafarisPage() {
  const [activeTab, setActiveTab] = useState<'wildlife' | 'universities'>('wildlife');
  const [mounted, setMounted] = useState(false);
  const [selectedDestId, setSelectedDestId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [featuredStayIndex, setFeaturedStayIndex] = useState(0);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedStayIndex((prev) => (prev + 1) % accommodations.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showBookingForm ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showBookingForm]);

  const openModal = (id: string) => {
    setSelectedDestId(id);
    setIsModalOpen(true);
  };

  const closeBookingForm = () => setShowBookingForm(false);

  const handleApply = () => {
    setShowBookingForm(true);
  };

  if (!mounted) return null;

  const activeDestData = selectedDestId ? rwandaDetailsData[selectedDestId] : null;
  const featuredStay = accommodations[featuredStayIndex];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <DestinationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={activeDestData || null} 
        id={selectedDestId || ''} 
      />

      {/* Cinematic Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/Destination/rwanda/volcanoes park.jpeg"
          alt="Volcanoes National Park"
          fill
          className="object-cover opacity-60 scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-sunset-gold animate-ping" />
            <span className="text-xs uppercase tracking-[0.6em] text-sunset-gold font-black">Land of a Thousand Hills</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-8 leading-none">
            Rwanda's <br />
            <span className="bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-amber bg-clip-text text-transparent">Emerald Peaks</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light italic drop-shadow-2xl">
            "A pristine sanctuary for primates and a testament to remarkable conservation success."
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleApply}
              className="px-10 py-5 rounded-2xl bg-sunset-gold text-black font-black text-lg hover:bg-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(251,191,36,0.35)] shadow-[0_0_50px_rgba(255,165,0,0.2)]"
            >
              Start Your Expedition
            </button>
            <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-widest text-xs">
              <span className="w-12 h-[1px] bg-white/20"></span>
              Scroll to Explore
              <span className="w-12 h-[1px] bg-white/20"></span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[2px] h-12 bg-gradient-to-b from-sunset-gold to-transparent"></div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="motion-reveal relative z-20 -mt-20 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-1 md:p-2 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="motion-card group p-8 md:p-12 text-center rounded-[2.5rem] hover:bg-white/5 transition-all duration-500">
              <div className={`text-2xl md:text-3xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="motion-reveal py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Choose Your <span className="italic text-sunset-gold">Path</span></h2>
            <div className="inline-flex p-2 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-md">
              <button 
                onClick={() => setActiveTab('wildlife')}
                className={`px-12 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 ${activeTab === 'wildlife' ? 'bg-sunset-gold text-black shadow-2xl' : 'text-slate-500 hover:text-white'}`}
              >
                Wildlife Escapes
              </button>
              <button 
                onClick={() => setActiveTab('universities')}
                className={`px-12 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 ${activeTab === 'universities' ? 'bg-sunset-gold text-black shadow-2xl' : 'text-slate-500 hover:text-white'}`}
              >
                Academic Centers
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {(activeTab === 'wildlife' ? wildlifeDestinations : universities).map(item => (
              <div key={item.id} className="motion-card group relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl h-[600px] transition-all duration-700 hover:border-sunset-gold/30">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-sunset-gold/20 border border-sunset-gold/30 text-[10px] text-sunset-gold font-black uppercase tracking-widest mb-4">
                      {item.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 italic leading-none">{item.name}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                    <button 
                      onClick={() => openModal(item.id)}
                      className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-sunset-gold transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={handleApply}
                      className="text-white text-sm font-black uppercase tracking-[0.2em] hover:text-sunset-gold transition-all duration-300 hover:translate-x-1 flex items-center gap-2"
                    >
                      Apply Now <i className="ri-arrow-right-line" />
                    </button>
                    {item.price && <span className="ml-auto text-sunset-orange font-black text-lg">{item.price}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Highlights - Restored and Redesigned */}
      <section className="motion-reveal py-32 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-sunset-gold text-xs font-black uppercase tracking-[0.4em] mb-4 block">Rwanda Conservation</span>
              <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none">The <span className="text-sunset-gold">Hill</span> Kings</h2>
            </div>
            <p className="text-slate-400 text-lg max-w-sm border-l-2 border-sunset-gold/30 pl-8 italic">
              "Discover the incredible biodiversity of Rwanda's ecosystems, where gentle giants roam the misty volcanoes."
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
            {highlights.map(item => (
              <div key={item.title} className="motion-card group text-center">
                <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-10">
                  <div className="absolute inset-0 bg-sunset-gold rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/5 group-hover:border-sunset-gold/30 transition-all duration-700">
                    <Image src={item.image} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 italic">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Intelligence */}
      <section className="motion-reveal py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic tracking-tighter leading-none">Practical <br /> <span className="text-sunset-orange">Intelligence</span></h2>
                <p className="text-slate-400 text-lg">Essential information for the modern explorer.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                 {[
                   { icon: 'ri-sun-cloudy-line', label: 'Climate', desc: 'Mild and temperate. Best from June to September.', color: 'text-sunset-gold' },
                   { icon: 'ri-heart-pulse-line', label: 'Health', desc: 'Yellow fever cert required. Malaria prevention advised.', color: 'text-sunset-orange' },
                   { icon: 'ri-passport-line', label: 'Visas', desc: 'Visa-free for many. Online applications for others.', color: 'text-sunset-amber' },
                   { icon: 'ri-money-dollar-circle-line', label: 'Currency', desc: 'Rwandan Franc (RWF). Cashless economy focus.', color: 'text-sunset-honey' }
                 ].map(info => (
                   <div key={info.label} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                      <i className={`${info.icon} ${info.color} text-4xl mb-6 block group-hover:scale-110 transition-transform`} />
                      <h4 className="text-xl font-bold text-white mb-3">{info.label}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{info.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="relative group rounded-[4rem] overflow-hidden border border-white/10 h-[700px] shadow-3xl">
               <Image src={featuredStay.image} alt={featuredStay.name} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-16 flex flex-col justify-end">
                  <span className="text-sunset-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Featured Stay</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 italic leading-none">{featuredStay.name}</h3>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-sm">
                    {featuredStay.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <button onClick={handleApply} className="w-fit bg-white text-black px-12 py-5 rounded-2xl font-black hover:bg-sunset-gold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(251,191,36,0.35)]">Inquire Now</button>
                    <span className="text-sunset-gold font-black">{featuredStay.price}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="motion-reveal py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Accommodation Options in Rwanda</h3>
            <p className="text-slate-400 text-lg">From upscale lodges to immersive camps and eco-stays</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {accommodations.map((stay) => (
              <div key={stay.name} className="motion-card group rounded-3xl overflow-hidden bg-slate-950 border border-white/10 hover:border-sunset-gold/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] transition-all duration-500">
                <div className="relative h-52">
                  <Image src={stay.image} alt={stay.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-sunset-gold text-xs font-bold uppercase tracking-wider border border-white/20">{stay.tier}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{stay.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{stay.desc}</p>
                  <div className="pt-4 border-t border-white/10 text-sunset-gold font-black">{stay.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Wildlife Viewing Seasons */}
      <section className="motion-reveal py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] bg-emerald-500/10 border border-emerald-300/20 p-8 md:p-12 hover:bg-emerald-500/15 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-10">Best Wildlife Viewing Seasons</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="motion-card rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-emerald-300/40 hover:bg-white/10 transition-all duration-500">
                <h4 className="text-xl font-bold text-white mb-4">Dry Season (June - September)</h4>
                <ul className="space-y-3 text-slate-200">
                  <li>Best time for gorilla trekking with drier trails</li>
                  <li>Wildlife gathers around water sources in Akagera</li>
                  <li>Clear skies and minimal rainfall</li>
                </ul>
              </div>
              <div className="motion-card rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-emerald-300/40 hover:bg-white/10 transition-all duration-500">
                <h4 className="text-xl font-bold text-white mb-4">Wet Season (October - May)</h4>
                <ul className="space-y-3 text-slate-200">
                  <li>Lush green landscapes and dramatic skies</li>
                  <li>Fewer tourists and lower prices</li>
                  <li>Birdwatching peaks with migratory species</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Travel Information */}
      <section className="motion-reveal pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Essential Travel Information</h3>
            <p className="text-slate-400 text-lg">Everything you need to know for your Rwanda adventure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="motion-card rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-sunset-gold/40 hover:bg-white/10 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-4">Visa Requirements</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Visa on arrival for most nationalities</li>
                <li>East African Tourist Visa available (Rwanda, Kenya, Uganda)</li>
                <li>Typical validity is 30 days</li>
              </ul>
            </div>
            <div className="motion-card rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-sunset-gold/40 hover:bg-white/10 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-4">Health & Safety</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Yellow fever certificate required</li>
                <li>Malaria prophylaxis recommended</li>
                <li>Travel insurance strongly advised</li>
              </ul>
            </div>
            <div className="motion-card rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-sunset-gold/40 hover:bg-white/10 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-4">Packing Essentials</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Waterproof hiking boots for trekking</li>
                <li>Rain jacket for unpredictable weather</li>
                <li>Light layers for cool mornings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      {showBookingForm && (
        <div className="fixed inset-0 z-[120] overlay-fade-in">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeBookingForm} />
          <div className="relative h-full w-full flex items-center justify-center p-4 md:p-6">
            <div id="booking-section" className="overlay-pop-in w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-950 shadow-2xl">
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur border-b border-white/10">
                <h3 className="text-white text-xl font-bold">Inquire Now</h3>
                <button onClick={closeBookingForm} className="text-slate-300 hover:text-white transition-colors" aria-label="Close inquiry form">
                  <i className="ri-close-line text-2xl" />
                </button>
              </div>
              <BookingForm
                country="Rwanda"
                destinations={wildlifeDestinations.map(d => d.name)}
                universities={universities.map(u => u.name)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 italic tracking-tighter leading-none">
            Begin Your <br /> <span className="bg-gradient-to-r from-sunset-orange to-sunset-gold bg-clip-text text-transparent">Rwanda Story</span>
          </h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to climb into the emerald peaks? Contact our team to design a bespoke Rwandan expedition.
          </p>
          <button 
            onClick={handleApply}
            className="inline-block bg-sunset-gold text-black px-12 py-4 rounded-2xl font-black text-lg hover:bg-white hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(251,191,36,0.35)] shadow-[0_0_50px_rgba(255,165,0,0.3)]"
          >
            Start Planning
          </button>
        </div>
      </section>
    </div>
  );
}
