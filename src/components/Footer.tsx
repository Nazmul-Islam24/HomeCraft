import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal?: () => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#0D1C26] text-white border-t border-white/10 pt-16 pb-24 lg:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
                setTimeout(() => {
                  const heroEl = document.getElementById('hero');
                  if (heroEl) {
                    heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 50);
              }}
              className="inline-block bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-xs border border-white/20 hover:border-white/40 transition-all cursor-pointer"
              aria-label={`${siteConfig.business.name} Home - Scroll to Hero`}
            >
              <img
                src="/images/logo.webp"
                alt={siteConfig.business.name}
                className="h-10.5 sm:h-13 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
              />
            </a>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              {siteConfig.business.tagline}. Specializing in turnkey residential kitchen remodeling, bathroom sanctuaries, interior painting, and hardwood flooring in Arlington and Northern Virginia.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1">
              <div><strong className="text-white/80">License:</strong> {siteConfig.business.license}</div>
              <div><strong className="text-white/80">Insurance:</strong> {siteConfig.business.insuredStatus}</div>
            </div>

            {/* Social Icons including YouTube & X */}
            <div className="flex items-center gap-2.5 pt-3 flex-wrap">
              {siteConfig.socialLinks.youtube && (
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4 text-red-400 group-hover:text-white" />
                </a>
              )}

              {siteConfig.socialLinks.x && (
                <a
                  href={siteConfig.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors font-bold text-xs"
                  aria-label="X (formerly Twitter)"
                >
                  {/* Clean SVG for X */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}

              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}

              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {siteConfig.socialLinks.googleBusinessProfile && (
                <a
                  href={siteConfig.socialLinks.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D96B32] flex items-center justify-center text-white/80 hover:text-white transition-colors text-xs font-bold"
                  aria-label="Google Business Profile"
                >
                  G
                </a>
              )}
            </div>
          </div>

          {/* Col 3: Remodeling Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              {siteConfig.services.map((svc) => (
                <li key={svc.slug}>
                  <a
                    href={`/services/${svc.slug}`}
                    onClick={(e) => handleLink(e, `/services/${svc.slug}`)}
                    className="hover:text-white transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => handleLink(e, '/projects')} className="hover:text-white transition-colors">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-white transition-colors">
                  About Our Team
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-white transition-colors">
                  Contact & Estimates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-[#D96B32] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D96B32] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 hover:text-[#D96B32] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D96B32] shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#D96B32] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.stateAbbr} {siteConfig.contact.zip}
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-white/60 space-y-1">
                <div className="flex items-center gap-1 font-semibold text-white/80 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#D96B32]" />
                  <span>Business Hours:</span>
                </div>
                {siteConfig.contact.hours.map((h, idx) => (
                  <div key={idx}>
                    <span className="text-white/50">{h.days}:</span> {h.time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} {siteConfig.business.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              onClick={(e) => handleLink(e, '/privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => handleLink(e, '/terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
