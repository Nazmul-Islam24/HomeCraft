import { siteConfig } from '../config/siteConfig';
import { Phone, CalendarCheck, ShieldCheck, Award, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigate: (path: string) => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="hero" className="relative w-full text-white overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center border-b border-white/10 scroll-mt-24">
      {/* Background Image Layer across all devices */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover object-center"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Dark Rich Scrim Overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C26] via-[#142B3A]/70 to-[#142B3A]/40" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Editorial Subtitle / Badge without leading dot */}
        <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4 bg-black/30 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/15">
          <span>{siteConfig.hero.badge}</span>
        </div>

        {/* Headline with Modern Color Gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.12] tracking-tight max-w-4xl text-balance drop-shadow-md">
          <span className="text-white">Transform Your Home With </span>
          <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-[#D96B32] bg-clip-text text-transparent inline-block">
            Quality Remodeling and Renovation
          </span>
        </h1>

        {/* Subtitle - Hidden on mobile screens, shown on tablet and desktop */}
        <p className="hidden sm:block mt-5 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl text-balance drop-shadow-xs">
          From custom kitchen transformations and spa-inspired bathrooms to precision interior painting and wide-plank hardwood flooring. Built on local Arlington craftsmanship, transparent pricing, and clean, on-time delivery.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#D96B32] hover:bg-[#BF5A24] active:scale-[0.99] rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>{siteConfig.hero.ctaPrimary}</span>
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-white/15 hover:bg-white/20 active:scale-[0.99] rounded-lg border border-white/25 backdrop-blur-xs transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-[#D96B32]" />
            <span>{siteConfig.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-left bg-black/20 backdrop-blur-xs p-4 sm:p-6 rounded-2xl border border-white/10">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Licensed</div>
              <p className="text-[11px] text-white/70">VA Class A Contractor</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Award className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">5-Year Warranty</div>
              <p className="text-[11px] text-white/70">Full Craftsmanship</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Dust-Free</div>
              <p className="text-[11px] text-white/70">HEPA Air Filtration</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">4.9★ Rating</div>
              <p className="text-[11px] text-white/70">Verified Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
