import React from 'react';
import { siteConfig, ServiceItem } from '../config/siteConfig';
import {
  UtensilsCrossed,
  Bath,
  Paintbrush,
  Layers,
  Home,
  Hammer,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
  limit?: number;
}

export function ServicesSection({ onNavigate, onOpenQuoteModal, limit }: ServicesSectionProps) {
  const servicesToDisplay = limit
    ? siteConfig.services.slice(0, limit)
    : siteConfig.services;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#D96B32]" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-[#D96B32]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-[#D96B32]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#D96B32]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#D96B32]" />;
      case 'Hammer':
      default:
        return <Hammer className="w-5 h-5 text-[#D96B32]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F4EE] text-[#142B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal reveal-up">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-2">
            Our Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#142B3A] tracking-tight">
            Comprehensive Home Remodeling & Renovation Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            From precision architectural updates to complete structural overhauls, we deliver master-level craftsmanship tailored to Arlington and Northern Virginia homes.
          </p>
        </div>

        {/* Services Grid: 1 on mobile, 2 on tablet, 2 on desktop for large prominent presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
          {servicesToDisplay.map((service: ServiceItem, idx: number) => (
            <article
              key={service.id}
              className={`bg-white rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group reveal ${
                idx % 2 === 0 ? 'reveal-left' : 'reveal-right delay-75'
              }`}
            >
              {/* Service Image with Local Arlington VA SEO Metadata */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={`${service.title} - Turnkey Home Remodeling and Renovation Contractor in Arlington, VA`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs p-2 rounded-lg shadow-xs flex items-center gap-2">
                  {renderIcon(service.iconName)}
                  <span className="text-xs font-semibold text-[#142B3A]">
                    {service.estimatedTimeline || 'Turnkey Delivery'}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#142B3A] mb-2 group-hover:text-[#D96B32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-neutral-600">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D96B32] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-semibold text-[#142B3A] hover:text-[#D96B32] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#D96B32] hover:bg-[#BF5A24] rounded-md transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services Callout if limited */}
        {limit && siteConfig.services.length > limit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#142B3A] hover:bg-[#1D3D52] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore All {siteConfig.services.length} Renovation Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
