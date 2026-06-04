import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/About-Us' },
      { name: 'Our Gallery', href: '/gallery' },
      { name: 'Recent Clips', href: '/recentgallery' },
      { name: 'Guest Reviews', href: '/Review' },
    ],
    services: [
      { name: 'Safari Packages', href: '/Custom-Safaris' },
      { name: 'Medical Expeditions', href: '/Medical-Expedition-Programs' },
      { name: 'Vet Programs', href: '/Veterinary-Conservation-' },
      { name: 'Study Abroad', href: '/Study-Aboard' },
      { name: 'Course Programs', href: '/Course' },
    ],
    destinations: [
      { name: 'Uganda Adventures', href: '/Uganda-Adventures' },
      { name: 'Kenya Safaris', href: '/Kenya-Safaris' },
      { name: 'Tanzania Adventure', href: '/Tanzania-Safari' },
      { name: 'Rwanda Experience', href: '/Rwanda-Safaris' },
      { name: 'Grand 15-Day Tour', href: '/Uganda-15-Days' },
    ]
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sunset-orange/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sunset-purple/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/img/logo.png"
                  alt="WildMed Logo"
                  width={60}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-wider bg-gradient-to-r from-sunset-orange to-sunset-gold bg-clip-text text-transparent">
                  WildMed
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                  Safaris & Field Projects
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting meaningful wildlife adventures that combine expert conservation science, professional education, and unforgettable wilderness experiences across East Africa.
            </p>
            <div className="flex space-x-3">
              {['facebook-fill', 'instagram-line', 'twitter-x-line', 'whatsapp-line'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-sunset-gold hover:text-black hover:border-sunset-gold transition-all duration-300 shadow-xl"
                >
                  <i className={`ri-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-sunset-gold mr-3 rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-sunset-gold transition-colors duration-300 flex items-center group">
                    <i className="ri-arrow-right-s-line mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-sunset-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-sunset-orange mr-3 rounded-full" />
              Our Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-sunset-gold transition-colors duration-300 flex items-center group">
                    <i className="ri-arrow-right-s-line mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-sunset-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-sunset-amber mr-3 rounded-full" />
              Get In Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-2-line text-sunset-gold" />
                </div>
                <div className="text-sm text-slate-400 leading-relaxed">
                  Seguku Katale, Plot 626<br />
                  Kampala, Uganda
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <i className="ri-phone-line text-sunset-orange" />
                </div>
                <div className="text-sm text-slate-400">
                  +256 740 205146<br />
                  +256 777 370494
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <i className="ri-mail-send-line text-sunset-amber" />
                </div>
                <div className="text-sm text-slate-400 truncate">
                  wildmeduganda@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter / Bottom Strip */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            <p>&copy; {currentYear} WildMed Safaris. All rights reserved.</p>
            <Link href="/Privacy-Policy" className="hover:text-sunset-gold transition-colors underline decoration-white/10 underline-offset-4">Privacy Policy</Link>
            <Link href="/Terms-of-Service" className="hover:text-sunset-gold transition-colors underline decoration-white/10 underline-offset-4">Terms of Service</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Official Partner of</span>
            <div className="flex space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <img src="/assets/logos/mak.png" alt="Makerere" className="h-6 w-auto object-contain" />
               <img src="/assets/logos/uma.jfif" alt="UWA" className="h-6 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
