import { siteConfig } from '../config/siteConfig';
import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ProcessSection } from '../components/ProcessSection';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { QuoteBanner } from '../components/QuoteBanner';
import { QuoteForm } from '../components/QuoteForm';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export function HomePage({ onNavigate, onOpenQuoteModal }: HomePageProps) {
  return (
    <>
      <SEO
        title="Home Remodeling & Renovation"
        canonicalPath="/"
        keywords={siteConfig.seo.keywords}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => onOpenQuoteModal()}
          onNavigate={onNavigate}
        />

        {/* 2. Trust / Statistics */}
        <TrustStats />

        {/* 3. Services Grid */}
        <ServicesSection
          onNavigate={onNavigate}
          onOpenQuoteModal={onOpenQuoteModal}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Featured Projects Gallery */}
        <FeaturedProjects
          onNavigate={onNavigate}
          onOpenQuoteModal={onOpenQuoteModal}
          limit={6}
          showFilters={true}
        />

        {/* 6. Renovation Process */}
        <ProcessSection />

        {/* 7. Service Areas */}
        <ServiceAreasSection
          onNavigate={onNavigate}
          onOpenQuoteModal={() => onOpenQuoteModal()}
        />

        {/* 8. Homeowner Reviews - Animated Continuous Loop */}
        <ReviewsSection
          onNavigate={onNavigate}
        />

        {/* 9. Complete Frequently Asked Questions */}
        <FAQSection
          onOpenQuoteModal={() => onOpenQuoteModal()}
        />

        {/* 10. Quote Callout Banner */}
        <QuoteBanner onOpenQuoteModal={() => onOpenQuoteModal()} />

        {/* 11. Contact & In-Home Estimate Section */}
        <section id="estimate-form" className="py-16 sm:py-24 bg-[#F7F4EE] text-[#142B3A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contact & Hours Details (5 cols) */}
              <div className="lg:col-span-5 space-y-6 reveal reveal-left">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-2">
                    Start Your Remodel
                  </div>
                  <h2 className="text-3xl font-heading font-extrabold text-[#142B3A] tracking-tight">
                    Schedule Your Free In-Home Estimate
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    Tell us about your home remodeling or renovation project. Our team will review your plans and reach out within 2 business hours to schedule an in-home visit.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Direct Phone
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-base font-bold text-[#142B3A] hover:text-[#D96B32] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Email Inquiry
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm font-semibold text-[#142B3A] hover:text-[#D96B32] transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Office Location
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-700">
                        {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.stateAbbr} {siteConfig.contact.zip}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-neutral-100">
                    <Clock className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-600 space-y-0.5">
                      <span className="font-semibold text-neutral-800 block mb-1">
                        Operating Hours:
                      </span>
                      {siteConfig.contact.hours.map((h, idx) => (
                        <div key={idx}>
                          <span className="font-medium text-neutral-700">{h.days}:</span> {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#142B3A] text-white rounded-xl text-xs space-y-1">
                  <div className="font-bold text-amber-300">
                    {siteConfig.business.license}
                  </div>
                  <div className="text-white/80">
                    {siteConfig.business.insuredStatus}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Estimate Form (7 cols) */}
              <div className="lg:col-span-7 reveal reveal-right delay-150">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
