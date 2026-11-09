import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal?: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Updated navigation pages (Reviews, Service Areas, FAQ are now on the Home page)
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  // Click logo from ANY page or location -> immediately scroll to Hero section of Home page
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentPath === '/' || currentPath === '') {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      onNavigate('/');
      // Timeout ensures HomePage mounts before scrolling
      setTimeout(() => {
        const heroEl = document.getElementById('hero');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    }
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      onNavigate('/contact');
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#142B3A]/98 backdrop-blur-md text-white shadow-md border-b border-white/10'
            : 'bg-[#142B3A] text-white border-b border-white/10'
        }`}
      >
        {/* Responsive Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Official Virginia HomeCraft Logo on Left (Mobile and Desktop) - Click scrolls directly to Hero */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center focus:outline-none shrink-0 cursor-pointer"
            aria-label={`${siteConfig.business.name} Home - Scroll to Hero`}
          >
            <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-sm border border-white/20 group-hover:border-white/40 transition-all flex items-center justify-center">
              <img
                src="/images/logo.webp"
                alt={siteConfig.business.name}
                className="h-9 sm:h-11 md:h-13 w-auto object-contain max-w-[200px] sm:max-w-[260px] md:max-w-[300px] transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-[#D96B32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D96B32]'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions (Phone + Quote) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#D96B32]" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <button
              onClick={handleQuoteClick}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#D96B32] hover:bg-[#BF5A24] active:scale-[0.98] rounded-md transition-all shadow-sm whitespace-nowrap cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile & Tablet Right Controls: Radiating Phone Call Circle & Hamburger Menubar */}
          <div className="flex lg:hidden items-center gap-3.5 sm:gap-4">
            {/* Direct Phone Call Button with Radiating Sonar Signal Waves */}
            <div className="relative flex items-center justify-center shrink-0">
              {/* Compact Radiating Signal Waves - contained within navbar padding */}
              <span className="radiation-pulse" aria-hidden="true" />
              <span className="radiation-pulse radiation-pulse-2" aria-hidden="true" />

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                aria-label={`Direct Call: ${siteConfig.contact.phone}`}
                className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D96B32] p-0.5 sm:p-1 flex items-center justify-center shadow-lg hover:bg-[#BF5A24] ring-2 ring-[#D96B32]/40 active:scale-95 transition-all shrink-0 cursor-pointer"
                title={`Call ${siteConfig.contact.phone}`}
              >
                {/* White Inner Circle */}
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-xs">
                  {/* Dark Hard Navy Phone Icon */}
                  <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#142B3A] shrink-0 fill-[#142B3A] stroke-[2.2]" />
                </div>
              </a>
            </div>

            {/* Three-layer Hamburger Menubar Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {/* Three-layer menubar icon */}
              <Menu className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer: Slides smoothly from the LEFT side */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Animated Drawer sliding from LEFT to right without scrollbar */}
          <div
            className="fixed inset-y-0 left-0 max-w-xs sm:max-w-sm w-full bg-[#142B3A] text-white p-3.5 sm:p-4.5 shadow-2xl flex flex-col justify-between overflow-y-auto no-scrollbar transform transition-transform duration-300 ease-out translate-x-0"
            style={{ animation: 'slideInLeft 0.25s ease-out' }}
          >
            <div>
              {/* Drawer Top Header: Logo and Close Button */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <a
                  href="/"
                  onClick={handleLogoClick}
                  className="bg-white px-2.5 py-1 rounded-lg shadow-xs flex items-center shrink-0 border border-white/20 cursor-pointer"
                  aria-label={`${siteConfig.business.name} Home - Scroll to Hero`}
                >
                  <img
                    src="/images/logo.webp"
                    alt={siteConfig.business.name}
                    className="h-7.5 sm:h-8.5 w-auto object-contain max-w-[160px]"
                  />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 cursor-pointer ml-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="mt-2.5 flex flex-col gap-0.5 sm:gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? currentPath === '/'
                      : currentPath.startsWith(link.path);
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className={`flex items-center justify-between px-2.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#D96B32] text-white font-semibold shadow-xs'
                          : 'text-white/85 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  );
                })}
              </nav>

              {/* Service Shortcuts: 5 requested services (compact & zero-scrollbar) */}
              <div className="mt-2.5 pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold block">
                  Popular Services
                </span>
                <div className="flex flex-col gap-0.5 text-[11px] sm:text-xs text-white/75">
                  {[
                    { title: 'Kitchen Remodeling', slug: 'kitchen-remodeling' },
                    { title: 'Bathroom Remodeling', slug: 'bathroom-remodeling' },
                    { title: 'Interior & Exterior Painting', slug: 'painting' },
                    { title: 'Flooring Installation & Refinishing', slug: 'flooring' },
                    { title: 'General Home Improvement', slug: 'home-improvement' },
                  ].map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={(e) => handleLinkClick(e, `/services/${s.slug}`)}
                      className="py-1 px-1.5 rounded hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D96B32] shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions: Phone, Free Estimate, License */}
            <div className="mt-2.5 pt-2.5 border-t border-white/10 flex flex-col gap-1.5 sm:gap-2">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 w-full py-1.5 sm:py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D96B32]" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>

              <button
                onClick={handleQuoteClick}
                className="w-full py-2 sm:py-2.5 rounded-lg bg-[#D96B32] hover:bg-[#BF5A24] text-white font-semibold text-xs sm:text-sm transition-colors text-center shadow-md cursor-pointer"
              >
                Request Free Estimate
              </button>

              <div className="text-center text-[10px] text-white/50 pt-0.5">
                {siteConfig.business.license}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
