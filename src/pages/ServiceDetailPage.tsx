import React from 'react';
import { siteConfig, ServiceItem } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import {
  Check,
  Phone,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  ChevronDown,
  Layers,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export function ServiceDetailPage({
  slug,
  onNavigate,
  onOpenQuoteModal,
}: ServiceDetailPageProps) {
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-neutral-800">Service Not Found</h1>
        <p className="text-neutral-600 mt-2">The requested remodeling service does not exist.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="mt-6 px-4 py-2 bg-[#142B3A] text-white rounded-md text-sm font-semibold"
        >
          View All Services
        </button>
      </div>
    );
  }

  // Related projects
  const relatedProjects = siteConfig.projects.filter(
    (p) => p.category.toLowerCase().includes(service.slug.split('-')[0]) || p.category === 'Remodeling'
  );

  return (
    <>
      <SEO
        title={`${service.title} in Arlington, VA`}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
        keywords={service.targetKeywords}
        ogImage={service.image}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.title,
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: siteConfig.business.name,
            telephone: siteConfig.contact.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.contact.address,
              addressLocality: siteConfig.contact.city,
              addressRegion: siteConfig.contact.stateAbbr,
              postalCode: siteConfig.contact.zip,
            },
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Arlington County, VA',
          },
          description: service.longDescription,
        }}
      />

      <main className="bg-[#F7F4EE] text-[#142B3A] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#D96B32] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>/</li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#D96B32] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* Hero Banner for this Service (Image at top on Mobile/Tablet, Right Column on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#142B3A] text-white rounded-2xl p-6 sm:p-10 lg:p-12 mb-12 shadow-md reveal reveal-up">
            {/* Image at Top on Mobile/Tablet (order-1), Right Column on Desktop (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full reveal reveal-right">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-16/10 sm:aspect-16/9 lg:aspect-4/3 border border-white/10 w-full">
                <img
                  src={service.image}
                  alt={`${service.title} - Professional Turnkey Remodeling and Renovation in Arlington Virginia`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text & CTAs on Mobile/Tablet below Image (order-2), Left Column on Desktop (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 reveal reveal-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Arlington, VA · Precision Residential Craftsmanship
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                {service.title} in Arlington, VA
              </h1>
              <p className="text-base text-white/80 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                {service.priceRange && (
                  <div className="bg-white/10 px-3 py-1.5 rounded-md">
                    <span className="text-white/60">Estimated Range:</span> {service.priceRange}
                  </div>
                )}
                {service.estimatedTimeline && (
                  <div className="bg-white/10 px-3 py-1.5 rounded-md">
                    <span className="text-white/60">Typical Duration:</span> {service.estimatedTimeline}
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="px-6 py-3 bg-[#D96B32] hover:bg-[#BF5A24] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Request {service.title} Estimate
                </button>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold rounded-lg border border-white/20 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D96B32]" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service In-Depth Details & Lead Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left 7 Columns: In-Depth Description, Benefits, Process */}
            <div className="lg:col-span-7 space-y-10">
              {/* Detailed Prose */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#142B3A] mb-3">
                  About Our {service.title} Process
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-heading font-bold text-[#142B3A] mb-4">
                  What Sets Virginia HomeCraft Apart
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FDF2EB] text-[#D96B32] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-neutral-700 leading-normal">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Workflow */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#142B3A] mb-4">
                  Step-by-Step Execution Plan
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-5 border border-neutral-200 flex items-start gap-4"
                    >
                      <div className="font-mono text-xl font-bold text-[#D96B32] shrink-0 w-8">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-[#142B3A] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#142B3A] mb-4">
                    {service.title} Questions & Answers
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-5 border border-neutral-200"
                      >
                        <h4 className="font-heading font-bold text-base text-[#142B3A] mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Sticky Quote Form & Trust Signals */}
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-28 space-y-6">
                <QuoteForm initialService={service.title} />

                {/* Trust Signals Card */}
                <div className="bg-white rounded-xl p-6 border border-neutral-200 space-y-3 text-xs text-neutral-600">
                  <div className="flex items-center gap-2 font-semibold text-[#142B3A]">
                    <ShieldCheck className="w-4 h-4 text-[#D96B32]" />
                    <span>Virginia Class A Contractor #2705-184920</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-[#142B3A]">
                    <Award className="w-4 h-4 text-[#D96B32]" />
                    <span>Written 5-Year Craftsmanship Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-[#142B3A]">
                    <Clock className="w-4 h-4 text-[#D96B32]" />
                    <span>Guaranteed Response within 2 Business Hours</span>
                  </div>
                </div>

                {/* Other Services Internal Linking */}
                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Other Renovation Services
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {siteConfig.services
                      .filter((s) => s.slug !== service.slug)
                      .map((other) => (
                        <li key={other.slug}>
                          <button
                            onClick={() => onNavigate(`/services/${other.slug}`)}
                            className="text-[#142B3A] hover:text-[#D96B32] font-medium flex items-center justify-between w-full text-left py-1"
                          >
                            <span>{other.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
