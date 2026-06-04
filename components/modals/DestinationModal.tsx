"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DestinationDetail } from '../../lib/destinationModals';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DestinationDetail | null;
  id: string;
}

export default function DestinationModal({ isOpen, onClose, data, id }: DestinationModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleDownloadPDF = async () => {
    if (!data) return;
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text(data.title, 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    const splitDescription = doc.splitTextToSize(data.description, 170);
    doc.text(splitDescription, 20, 35);
    let yPos = 35 + (splitDescription.length * 7) + 10;
    doc.setFontSize(16);
    doc.setTextColor(30, 30, 30);
    doc.text('Highlights:', 20, yPos);
    yPos += 10;
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    data.highlights.forEach(h => {
      if (yPos > 270) { doc.addPage(); yPos = 20; }
      doc.text(`• ${h}`, 25, yPos);
      yPos += 7;
    });
    yPos += 5;
    doc.setFontSize(16);
    doc.setTextColor(30, 30, 30);
    doc.text('Specifications:', 20, yPos);
    yPos += 10;
    doc.setFontSize(11);
    Object.entries(data.details).forEach(([key, val]) => {
      if (yPos > 270) { doc.addPage(); yPos = 20; }
      doc.setTextColor(50, 50, 50);
      doc.text(`${key}:`, 25, yPos);
      doc.setTextColor(100, 100, 100);
      doc.text(val, 70, yPos);
      yPos += 7;
    });
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Generated from WildMed - ${new Date().toLocaleDateString()}`, 105, 285, { align: 'center' });
    }
    doc.save(`${data.title.replace(/\s+/g, '_')}_WildMed.pdf`);
  };

  if (!mounted || !isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-full max-h-[95vh] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-3xl animate-scale-in flex flex-col overflow-hidden">
        
        {/* Sticky Header Actions */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
          <button 
            onClick={handleDownloadPDF}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-sunset-gold hover:text-black transition-all group"
            title="Download Itinerary"
          >
            <i className="ri-download-cloud-line text-xl group-hover:scale-110 transition-transform"></i>
          </button>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-sunset-gold hover:text-black transition-all"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Hero Section */}
          <div className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
            <Image 
              src={data.image.startsWith('http') ? data.image : `/${data.image}`}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-12 left-8 right-8 md:left-16 md:right-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunset-gold text-black text-[10px] font-black uppercase tracking-widest mb-4">
                <i className="ri-compass-3-line"></i>
                Premium Experience
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl italic leading-none">
                {data.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-16">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light first-letter:text-5xl first-letter:font-black first-letter:text-sunset-gold first-letter:mr-3 first-letter:float-left">
                    {data.description}
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-gold rounded-full"></span>
                    Key Expedition Highlights
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {data.highlights.map((h, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-sunset-gold/30 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-sunset-gold/10 flex items-center justify-center shrink-0 group-hover:bg-sunset-gold transition-colors">
                          <i className="ri-check-line text-sunset-gold group-hover:text-black"></i>
                        </div>
                        <span className="text-slate-400 text-sm leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Additional Dynamic Content */}
                {(data.climate || data.travelTips || data.programs || data.admission) && (
                  <section className="grid sm:grid-cols-2 gap-8">
                    {data.climate && (
                      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                        <i className="ri-sun-cloudy-line text-3xl text-sunset-orange mb-4 block"></i>
                        <h4 className="text-lg font-bold text-white mb-2">Climate & Season</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{data.climate}</p>
                      </div>
                    )}
                    {data.travelTips && (
                      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                        <i className="ri-lightbulb-line text-3xl text-sunset-gold mb-4 block"></i>
                        <h4 className="text-lg font-bold text-white mb-2">Expert Strategy</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{data.travelTips}</p>
                      </div>
                    )}
                    {data.programs && (
                      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                        <i className="ri-book-read-line text-3xl text-sunset-orange mb-4 block"></i>
                        <h4 className="text-lg font-bold text-white mb-2">Academic Programs</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{data.programs}</p>
                      </div>
                    )}
                    {data.admission && (
                      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                        <i className="ri-graduation-cap-line text-3xl text-sunset-gold mb-4 block"></i>
                        <h4 className="text-lg font-bold text-white mb-2">Admission Path</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{data.admission}</p>
                      </div>
                    )}
                  </section>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div className="sticky top-0 space-y-8">
                  <div className="p-8 rounded-[2.5rem] bg-slate-800/50 border border-white/10 backdrop-blur-xl shadow-2xl">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-black mb-8">Technical Specs</h3>
                    <div className="space-y-6">
                      {Object.entries(data.details).map(([key, val]) => (
                        <div key={key} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <span className="text-[10px] uppercase tracking-widest text-sunset-gold/50 font-black block mb-2">{key}</span>
                          <p className="text-sm text-white font-medium leading-relaxed">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-sunset-orange/20 to-sunset-gold/10 border border-sunset-gold/20">
                    <div className="text-xs uppercase tracking-widest text-sunset-gold font-black mb-2">Expedition Value</div>
                    <div className="text-3xl font-black text-white mb-8">{data.price}</div>
                    <button 
                      onClick={() => {
                        onClose();
                        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-sunset-gold transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar - Optional, but keeps the action close */}
        <div className="p-6 md:p-8 border-t border-white/5 bg-slate-900/80 backdrop-blur-md flex items-center justify-between gap-4">
           <div className="hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <Image src={data.image.startsWith('http') ? data.image : `/${data.image}`} alt="Mini" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none mb-1">{data.title}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Selected Expedition</p>
              </div>
           </div>
           
           <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={onClose}
                className="flex-1 md:flex-none px-10 py-4 rounded-2xl bg-white/5 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Return
              </button>
              <button 
                onClick={() => {
                  onClose();
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 md:flex-none px-10 py-4 rounded-2xl bg-sunset-gold text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg"
              >
                Apply Now
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
