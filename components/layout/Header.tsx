"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AnnouncementBar from './AnnouncementBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [themeReady, setThemeReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      setThemeReady(true);
      return;
    }
    document.documentElement.setAttribute('data-theme', 'dark');
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, themeReady]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Destinations',
      href: '/Destinations',
      dropdown: [
        { name: 'Uganda', href: '/Uganda-Adventures' },
        { name: 'Rwanda', href: '/Rwanda-Safaris' },
        { name: 'Kenya', href: '/Kenya-Safaris' },
        { name: 'Tanzania', href: '/Tanzania-Safari' },
      ],
    },
    { name: 'About Us', href: '/About-Us' },
    {
      name: 'Custom Expeditions',
      href: '/Custom-Safaris',
      mega: true,
      sections: [
        {
          title: 'Short Adventures',
          links: [
            { name: 'All Custom Safaris', href: '/Custom-Safaris' },
            { name: '3-Day Gorilla Trekking', href: '/Ugandan-3Days' },
            { name: '4-Day Uganda Express', href: '/Ugandan-4Days' },
            { name: '4-Day Luxury Fly-in', href: '/Ugandan-4Days2' },
          ],
        },
        {
          title: 'Explorer Packages',
          links: [
            { name: '5-Day Best of Kisoro', href: '/Ugandan-5-Days' },
            { name: '5-Day Short Holiday', href: '/Ugandan-5Days' },
            { name: '6-Day Kisoro Adventure', href: '/Ugandan-6Days2' },
            { name: '7-Day Rwanda Explorer', href: '/Rwanda-7-Days' },
          ],
        },
        {
          title: 'Grand Tours',
          links: [
            { name: '8-Day Chimps & Gorillas', href: '/Ugandan-8days' },
            { name: '8-Day Uganda & Rwanda', href: '/Ugandan-8days2' },
            { name: '8-Day Luxury Big Five', href: '/Ugandan-8days3' },
            { name: '11-Day Uganda & Rwanda', href: '/Ugandan-11-Days' },
            { name: '11-Day Luxury Safari', href: '/Ugandan-11Days' },
            { name: '14-Day Luxury Safari', href: '/Ugandan-14-Days' },
          ],
        },
      ],
    },
    {
      name: 'Pro.Exp',
      href: '/Professional-Biological-Field-Expeditions',
      dropdown: [
        { name: 'Tailored Science Driven Field Expedition', href: '/Biological-Field-Research-Expeditions' },
        { name: 'Veterinary and Conservation Field Expeditions', href: '/Veterinary-Conservation-' },
        { name: 'Medical Professional Expeditions', href: '/Medical-Expedition-Programs' },
      ],
    },
    { name: 'Study Abroad', href: '/Study-Aboard' },
    {
      name: 'Gallery',
      href: '/gallery',
      dropdown: [
        { name: 'Photo Gallery', href: '/gallery' },
        { name: 'Recent Clips', href: '/recentgallery' },
      ],
    },
    { name: 'Reviews', href: '/Review' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-2 px-4' : 'py-0 px-0'
      }`}
    >
      <div className={`transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'}`}>
        <AnnouncementBar />
      </div>

      <nav 
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'max-w-7xl bg-slate-950/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 px-8 py-3' 
            : 'w-full bg-slate-950/95 backdrop-blur-md px-6 py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className={`relative transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="relative bg-white p-2 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500">
                <Image
                  src="/img/logo.png"
                  alt="WildMed Logo"
                  width={150}
                  height={110}
                  className="relative z-10 object-contain transition-all duration-500 brightness-110 contrast-125"
                  style={{ height: scrolled ? '50px' : '90px', width: 'auto' }}
                  priority
                />
              </div>
            </div>
            {!scrolled && (
              <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-wider bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-orange bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                  WildMed
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-sunset-honey/60 font-medium">
                  Safaris & Field Projects
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center transition-all duration-500 ${
            scrolled ? 'space-x-3 xl:space-x-4' : 'space-x-4 xl:space-x-6'
          }`}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown || link.mega ? (
                  <>
                    <Link
                      href={link.href}
                      className={`relative px-1 transition-all duration-300 flex items-center space-x-1 font-medium ${
                        scrolled ? 'text-xs' : 'text-sm xl:text-base'
                      } ${
                        pathname === link.href ? 'text-sunset-gold' : 'text-slate-100 hover:text-sunset-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      <i className="ri-arrow-down-s-line text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300"></i>
                      {pathname === link.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sunset-gold rounded-full" />
                      )}
                    </Link>
                    
                    {link.mega ? (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="w-[850px] bg-slate-950/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 p-8 grid grid-cols-3 gap-8">
                          {link.sections?.map((section) => (
                            <div key={section.title} className="space-y-4">
                              <h4 className="text-xs font-bold text-sunset-orange uppercase tracking-widest border-b border-white/5 pb-2">
                                {section.title}
                              </h4>
                              <div className="flex flex-col space-y-2">
                                {section.links.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    className="text-sm text-slate-300 hover:text-sunset-gold hover:translate-x-1 transition-all duration-200 flex items-center space-x-2"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-sunset-brown/40" />
                                    <span>{subLink.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="col-span-3 mt-4 pt-6 border-t border-white/5">
                            <Link
                              href="/Uganda-Adventures"
                              className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-sunset-gold/10 to-sunset-orange/5 hover:from-sunset-gold/20 hover:to-sunset-orange/10 border border-sunset-gold/20 transition-all group/banner"
                            >
                              <div className="flex items-center space-x-3">
                                <i className="ri-map-2-line text-sunset-gold text-xl"></i>
                                <div>
                                  <span className="block text-sm font-bold text-slate-100">View All Destinations</span>
                                  <span className="block text-[10px] text-slate-400 uppercase tracking-tighter">Explore all our packages across East Africa</span>
                                </div>
                              </div>
                              <i className="ri-arrow-right-line text-sunset-gold group-hover:translate-x-2 transition-transform"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="w-64 bg-slate-950/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 py-3 overflow-hidden">
                          {link.dropdown?.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-6 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-sunset-gold transition-all duration-300 border-l-2 border-transparent hover:border-sunset-gold"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-1 transition-all duration-300 font-medium ${
                      scrolled ? 'text-xs' : 'text-sm xl:text-base'
                    } ${
                      pathname === link.href ? 'text-sunset-gold' : 'text-slate-100 hover:text-sunset-gold'
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sunset-gold rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}

            {/* Action CTA */}
            <button
              onClick={toggleTheme}
              className={`ml-2 w-10 h-10 rounded-full border border-white/20 text-slate-100 hover:text-sunset-gold hover:border-sunset-gold/60 bg-white/5 hover:bg-white/10 transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
              aria-label="Toggle light and dark theme"
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <i className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-clear-line'} text-lg`} />
            </button>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openExpeditionModal'))}
              className={`ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-sunset-gold to-sunset-orange text-black font-bold text-sm shadow-lg hover:shadow-sunset-gold/20 hover:-translate-y-0.5 transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
            >
              Plan Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'w-10 h-10 bg-white/10 rounded-full' : ''
            } text-sunset-gold focus:outline-none`}
            aria-label="Toggle Menu"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu-4'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={toggleMobileMenu} />
          <div 
            className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-slate-950 shadow-2xl border-l border-white/10 transition-transform duration-500 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold italic text-sunset-orange">WildMed</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="w-9 h-9 rounded-full border border-white/20 text-slate-100 hover:text-sunset-gold hover:border-sunset-gold/60 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    aria-label="Toggle light and dark theme"
                    title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                  >
                    <i className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-clear-line'} text-base`} />
                  </button>
                  <button onClick={toggleMobileMenu} className="text-slate-400">
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 pb-2">
                    {link.dropdown || link.mega ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(link.name)}
                          className={`w-full flex justify-between items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                            openMobileDropdown === link.name ? 'bg-white/5 text-sunset-gold' : 'text-slate-100 hover:bg-white/5'
                          }`}
                        >
                          <span>{link.name}</span>
                          <i className={`ri-arrow-${openMobileDropdown === link.name ? 'up' : 'down'}-s-line text-sm`}></i>
                        </button>
                        <div
                          className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
                            openMobileDropdown === link.name ? 'max-h-[1000px] mt-2 mb-4' : 'max-h-0'
                          }`}
                        >
                          {link.mega
                            ? link.sections?.map((section) => (
                                <div key={section.title} className="py-2">
                                  <h4 className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 mt-1">
                                    {section.title}
                                  </h4>
                                  <div className="grid grid-cols-1 gap-1">
                                    {section.links.map((subLink) => (
                                      <Link
                                        key={subLink.name}
                                        href={subLink.href}
                                        className="block px-4 py-2 text-sm text-slate-400 hover:text-sunset-gold transition-colors"
                                      >
                                        {subLink.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            : link.dropdown?.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  className="block px-4 py-2.5 text-sm text-slate-400 hover:text-sunset-gold transition-colors"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                          pathname === link.href ? 'bg-sunset-gold/10 text-sunset-gold' : 'text-slate-100 hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 space-y-4">
                <button 
                  onClick={() => {
                    toggleMobileMenu();
                    window.dispatchEvent(new CustomEvent('openExpeditionModal'));
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sunset-gold to-sunset-orange text-black font-bold shadow-xl active:scale-95 transition-all"
                >
                  Plan Your Trip
                </button>
                <div className="flex justify-center space-x-6 text-slate-400">
                  <i className="ri-facebook-fill hover:text-sunset-gold transition-colors"></i>
                  <i className="ri-instagram-line hover:text-sunset-gold transition-colors"></i>
                  <i className="ri-twitter-x-fill hover:text-sunset-gold transition-colors"></i>
                  <i className="ri-whatsapp-line hover:text-sunset-gold transition-colors"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
      `}</style>
    </header>
  );
};

export default Header;
