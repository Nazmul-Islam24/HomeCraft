import { useState } from 'react';
import { siteConfig, ServiceAreaItem } from '../config/siteConfig';
import { MapPin, Check, ArrowRight, ChevronDown } from 'lucide-react';

interface ServiceAreasSectionProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: () => void;
}

export function ServiceAreasSection({ onOpenQuoteModal }: ServiceAreasSectionProps) {
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem>(
    siteConfig.serviceAreas.areas[0]
  );
  // Mobile / Tablet in-place accordion state
  const [mobileExpandedSlug, setMobileExpandedSlug] = useState<string | null>(null);

  const handleAreaClick = (area: ServiceAreaItem) => {
    setSelectedArea(area);
    // Toggle accordion for mobile & tablet
    setMobileExpandedSlug((prev) => (prev === area.slug ? null : area.slug));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#142B3A] lg:bg-[#F7F4EE] text-white lg:text-[#142B3A] transition-colors duration-200 border-t border-white/10 lg:border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 reveal reveal-up">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-2">
            Local Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white lg:text-[#142B3A] tracking-tight">
            Proudly Serving Arlington & Northern Virginia
          </h2>
          <p className="mt-3 text-base text-white/80 lg:text-neutral-600 leading-relaxed">
            We are rooted in Arlington County. Our dedicated project managers and master trade craftsmen operate daily across these local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Area Selector (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3 reveal reveal-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 lg:text-neutral-500 mb-3">
              Select Your Community:
            </p>
            <div className="space-y-3">
              {siteConfig.serviceAreas.areas.map((area) => {
                const isSelectedDesktop = selectedArea.slug === area.slug;
                const isExpandedMobile = mobileExpandedSlug === area.slug;

                return (
                  <div
                    key={area.slug}
                    className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                      // Mobile/Tablet dark card vs Desktop light card
                      isExpandedMobile
                        ? 'border-[#D96B32]/70 bg-[#0D1C26] lg:bg-white lg:border-neutral-200 shadow-md'
                        : 'border-white/10 lg:border-neutral-200 bg-[#0D1C26] lg:bg-white shadow-2xs'
                    }`}
                  >
                    {/* Community Header Button */}
                    <button
                      type="button"
                      onClick={() => handleAreaClick(area)}
                      className={`w-full text-left p-4 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isSelectedDesktop
                          ? 'lg:bg-[#142B3A] lg:text-white text-white'
                          : 'text-white lg:text-neutral-800 hover:bg-white/5 lg:hover:bg-neutral-50'
                      }`}
                      aria-expanded={isExpandedMobile}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <MapPin className="w-4 h-4 shrink-0 text-[#D96B32]" />
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-sm block truncate text-white lg:text-inherit">
                            {area.name}
                          </span>
                          <span
                            className={`text-xs block truncate ${
                              isSelectedDesktop
                                ? 'lg:text-white/70 text-white/70'
                                : 'text-white/70 lg:text-neutral-500'
                            }`}
                          >
                            {area.countyOrRegion}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Primary Badge on the Outside / Top */}
                        {area.isPrimary && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D96B32] text-white shadow-xs">
                            Primary
                          </span>
                        )}

                        {/* Mobile & Tablet Accordion Chevron (hidden on desktop lg) */}
                        <div
                          className={`lg:hidden w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                            isExpandedMobile
                              ? 'bg-[#D96B32] text-white rotate-180'
                              : 'bg-white/10 text-white/80'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Mobile & Tablet in-place Accordion Dropdown Content (hidden on desktop lg) */}
                    {isExpandedMobile && (
                      <div className="lg:hidden p-4 sm:p-5 bg-[#142B3A] border-t border-white/10 text-white space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                          <span className="font-bold text-[#D96B32] uppercase tracking-wider text-[11px]">
                            Community Profile
                          </span>
                          {/* HQ Badge placed Inside */}
                          {area.isPrimary && (
                            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] px-2 py-0.5 rounded font-semibold">
                              HQ Service Zone
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                          {area.description}
                        </p>

                        {/* Neighborhood Highlights */}
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-2">
                            Key Neighborhoods Served:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {area.neighborhoodHighlights.map((nh, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-[11px] text-white bg-white/10 border border-white/15 px-2.5 py-1 rounded-md"
                              >
                                <Check className="w-3 h-3 text-[#D96B32]" />
                                <span>{nh}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Postal ZIP Codes */}
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
                            ZIP Codes Covered:
                          </h4>
                          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-white/90">
                            {area.zipCodes.map((zip) => (
                              <span
                                key={zip}
                                className="bg-white/10 border border-white/15 px-2 py-0.5 rounded"
                              >
                                {zip}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct Estimate CTA */}
                        <div className="pt-2 border-t border-white/10">
                          <button
                            onClick={onOpenQuoteModal}
                            className="w-full py-2.5 px-4 bg-[#D96B32] hover:bg-[#BF5A24] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                          >
                            <span>Request Estimate in {area.name.split(' ')[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Desktop Community Spotlight Card (Only visible on lg: screens and up) */}
          <div className="hidden lg:block lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6 sticky top-28 text-neutral-800 reveal reveal-right delay-150">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96B32]">
                  Community Profile
                </span>
                <h3 className="text-2xl font-heading font-bold text-[#142B3A] mt-1">
                  {selectedArea.name}
                </h3>
                <span className="text-xs text-neutral-500">
                  {selectedArea.countyOrRegion} · Building Department & Code Compliant
                </span>
              </div>

              {/* HQ Badge Inside */}
              {selectedArea.isPrimary && (
                <div className="bg-[#142B3A] text-white text-xs px-3 py-1.5 rounded-md font-semibold shrink-0">
                  HQ Service Zone
                </div>
              )}
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">
              {selectedArea.description}
            </p>

            {/* Neighborhood Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Key Neighborhoods & Subdivisions We Serve:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedArea.neighborhoodHighlights.map((nh, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-[#F7F4EE] border border-neutral-200/80 px-3 py-1 rounded-md"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D96B32]" />
                    <span>{nh}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Zip codes */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Postal ZIP Codes Covered:
              </h4>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-neutral-600">
                {selectedArea.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-600">
                Live in or near {selectedArea.name}? Schedule a free in-home consultation.
              </span>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#D96B32] hover:bg-[#BF5A24] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Request Estimate in {selectedArea.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
