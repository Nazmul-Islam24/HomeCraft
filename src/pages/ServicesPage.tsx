import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { ServicesSection } from '../components/ServicesSection';
import { QuoteBanner } from '../components/QuoteBanner';
import { ShieldCheck, Award, Clock } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export function ServicesPage({ onNavigate, onOpenQuoteModal }: ServicesPageProps) {
  return (
    <>
      <SEO
        title="Remodeling & Renovation Services"
        description="Explore Virginia HomeCraft's comprehensive residential services in Arlington, VA: kitchen remodeling, bathroom renovations, interior & exterior painting, and hardwood flooring."
        canonicalPath="/services"
        keywords={[
          'Home Remodeling Services Arlington VA',
          'Kitchen Remodeling Contractor Arlington',
          'Bathroom Renovation Arlington VA',
          'House Painting Northern Virginia',
          'Flooring Installation Arlington',
        ]}
      />

      <main className="py-12 bg-[#F7F4EE]">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-4">
            <ol className="flex items-center gap-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#D96B32] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800" aria-current="page">
                Services
              </li>
            </ol>
          </nav>

          {/* Desktop Hero Header (lg:block hidden) */}
          <div className="hidden lg:block bg-[#142B3A] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Arlington, Virginia Remodeling Services
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Turnkey Residential Remodeling & Renovation
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Whether remodeling a single room or redesigning your entire home, we provide the architectural coordination, Arlington County permit filing, and master-level craftsmanship your property deserves.
              </p>

              <div className="pt-4 flex flex-wrap gap-6 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D96B32]" />
                  <span>VA Class A Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D96B32]" />
                  <span>5-Year Written Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D96B32]" />
                  <span>Guaranteed Timelines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Hero Header (lg:hidden) */}
          <div className="lg:hidden space-y-4">
            {/* Full-width background image card with badge and H1 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-end p-6 sm:p-8 border border-neutral-200/50 shadow-md">
              <img
                src="/images/custom-kitchen-island-cabinets-renovation.webp"
                alt="Custom Kitchen Island and Turnkey Remodeling Services in Arlington VA - Virginia HomeCraft"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Gradient overlay so the image is clearly visible while text stays sharp */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B3A] via-[#142B3A]/65 to-black/25" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#D96B32]/90 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                  Arlington, Virginia Remodeling Services
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Turnkey Residential Remodeling & Renovation
                </h1>
              </div>
            </div>

            {/* Descriptive paragraph & credentials moved below the image card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-xs space-y-4">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Whether remodeling a single room or redesigning your entire home, we provide the architectural coordination, Arlington County permit filing, and master-level craftsmanship your property deserves.
              </p>

              <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-4 text-xs font-semibold text-[#142B3A]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D96B32]" />
                  <span>VA Class A Contractor</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D96B32]" />
                  <span>5-Year Written Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D96B32]" />
                  <span>Guaranteed Timelines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Services List */}
        <ServicesSection
          onNavigate={onNavigate}
          onOpenQuoteModal={onOpenQuoteModal}
        />

        {/* CTA Banner */}
        <QuoteBanner onOpenQuoteModal={() => onOpenQuoteModal()} />
      </main>
    </>
  );
}
