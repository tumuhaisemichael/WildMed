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
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 18;
    const imageSource = data.image.startsWith('http') ? data.image : `/${data.image}`;

    const loadCover = async () => {
      try {
        const response = await fetch(imageSource);
        if (!response.ok) return null;
        const imageBlob = await response.blob();
        const imageData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = reject;
          reader.readAsDataURL(imageBlob);
        });
        return { imageData, format: imageBlob.type.includes('png') ? 'PNG' : 'JPEG' } as const;
      } catch {
        return null;
      }
    };

    const cover = await loadCover();
    const addFooter = (page: number) => {
      doc.setDrawColor(214, 162, 50);
      doc.setLineWidth(0.35);
      doc.line(margin, 282, pageWidth - margin, 282);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('WILDMED SAFARIS & FIELD PROJECTS  ·  EAST AFRICA', margin, 288);
      doc.text(`FIELD GUIDE  /  ${page}`, pageWidth - margin, 288, { align: 'right' });
    };

    const addSectionHeader = (title: string, subtitle: string) => {
      doc.setFillColor(2, 8, 23);
      doc.rect(0, 0, pageWidth, 35, 'F');
      doc.setFillColor(255, 184, 48);
      doc.rect(margin, 15, 18, 1, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(255, 255, 255);
      doc.text(title.toUpperCase(), margin, 25);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(203, 213, 225);
      doc.text(subtitle, pageWidth - margin, 25, { align: 'right' });
    };

    const addWrappedText = (text: string, x: number, y: number, width: number, fontSize = 10, colour: [number, number, number] = [71, 85, 105]) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(fontSize);
      doc.setTextColor(...colour);
      const lines = doc.splitTextToSize(text, width);
      doc.text(lines, x, y);
      return y + lines.length * (fontSize * 0.48);
    };

    const limitedLines = (text: string, width: number, maximum: number) => {
      const lines = doc.splitTextToSize(text, width) as string[];
      if (lines.length <= maximum) return lines;
      const clipped = lines.slice(0, maximum);
      clipped[maximum - 1] = `${clipped[maximum - 1].replace(/[.…\s]+$/, '')}…`;
      return clipped;
    };

    // Cover page
    doc.setFillColor(2, 8, 23);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    if (cover) {
      doc.addImage(cover.imageData, cover.format, 0, 0, pageWidth, pageHeight);
      doc.setFillColor(2, 8, 23);
      doc.setGState(new (doc as any).GState({ opacity: 0.64 }));
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setGState(new (doc as any).GState({ opacity: 1 }));
    }
    doc.setFillColor(255, 184, 48);
    doc.rect(margin, 28, 38, 1.4, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 184, 48);
    doc.text('WILDMED  /  DESTINATION FIELD GUIDE', margin, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(30);
    doc.setTextColor(255, 255, 255);
    const titleLines = doc.splitTextToSize(data.title, 160);
    doc.text(titleLines, margin, 72);
    const titleBottom = 72 + titleLines.length * 13;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(226, 232, 240);
    doc.text('A considered guide for your next East African experience.', margin, titleBottom + 12);
    const coverDescription = limitedLines(data.description, 154, 3);
    doc.setFontSize(10);
    doc.setTextColor(203, 213, 225);
    doc.text(coverDescription, margin, titleBottom + 26);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, 166, 174, 48, 4, 4, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin + 104, 174, margin + 104, 206);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text('EXPERIENCE VALUE', margin + 10, 180);
    doc.text('TRAVELLER RATING', margin + 114, 180);
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text(limitedLines(data.price, 86, 2), margin + 10, 191);
    doc.setTextColor(217, 119, 6);
    doc.text(`${data.rating} / 5`, margin + 114, 191);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text('Indicative rate; tailored on request.', margin + 10, 204);
    doc.text('Based on recent traveller feedback', margin + 114, 204);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(203, 213, 225);
    doc.text('WILDMED SAFARIS & FIELD PROJECTS  ·  UGANDA, RWANDA, KENYA & TANZANIA', margin, 266);
    doc.text('wildmedug.com  ·  info@wildmedug.com', margin, 272);
    addFooter(1);

    // A single, information-dense planning page keeps every guide to two pages.
    doc.addPage();
    addSectionHeader('Plan the experience', data.title);
    const left = margin;
    const right = 111;
    const columnWidth = 81;
    let leftY = 51;
    let rightY = 51;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('Why it stays with you', left, leftY);
    leftY = addWrappedText(data.description, left, leftY + 10, columnWidth, 9, [71, 85, 105]) + 9;
    doc.setFillColor(255, 247, 232);
    doc.roundedRect(left, leftY, columnWidth, 1, 0.5, 0.5, 'F');
    leftY += 11;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text('What makes it memorable', left, leftY);
    leftY += 8;
    data.highlights.forEach((highlight, index) => {
      const lines = limitedLines(highlight, columnWidth - 13, 3);
      const itemHeight = Math.max(13, lines.length * 4 + 5);
      doc.setFillColor(255, 184, 48);
      doc.circle(left + 3.5, leftY - 2.2, 3.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(15, 23, 42);
      doc.text(String(index + 1), left + 3.5, leftY + 0.2, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(lines, left + 11, leftY);
      leftY += itemHeight;
    });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('Destination snapshot', right, rightY);
    rightY += 10;
    Object.entries(data.details).forEach(([key, value]) => {
      const valueLines = limitedLines(value, columnWidth - 12, 3);
      const rowHeight = Math.max(15, valueLines.length * 4 + 7);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(right, rightY - 5, columnWidth, rowHeight, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(180, 83, 9);
      doc.text(key.toUpperCase(), right + 6, rightY + 0.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(valueLines, right + 6, rightY + 5.5);
      rightY += rowHeight + 3;
    });

    const planningNotes = [
      ['Climate & season', data.climate],
      ['Travel tip', data.travelTips],
      ['Available programmes', data.programs],
      ['Admission guidance', data.admission],
    ].filter((note): note is [string, string] => Boolean(note[1]));

    // Keep the guide strictly two pages. The destination snapshot is always
    // complete; one concise practical note is included when there is room.
    if (planningNotes.length && rightY < 215) {
      rightY += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('Useful planning notes', right, rightY);
      rightY += 8;
      planningNotes.slice(0, 1).forEach(([label, value]) => {
        const noteLines = limitedLines(value, columnWidth - 12, 3);
        const noteHeight = Math.max(18, noteLines.length * 4 + 9);
        doc.setFillColor(255, 247, 232);
        doc.roundedRect(right, rightY - 5, columnWidth, noteHeight, 3, 3, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(180, 83, 9);
        doc.text(label.toUpperCase(), right + 6, rightY + 0.5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(noteLines, right + 6, rightY + 5.5);
        rightY += noteHeight + 3;
      });
    }
    doc.setFillColor(2, 8, 23);
    doc.roundedRect(margin, 252, 174, 17, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 184, 48);
    doc.text('READY TO SHAPE YOUR EXPERIENCE?', margin + 7, 259);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(226, 232, 240);
    doc.text('Talk to the WildMed team at info@wildmedug.com', margin + 7, 265);
    addFooter(2);

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
