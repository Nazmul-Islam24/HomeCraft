import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <>
      <SEO
        title="Contact Us & Request an Estimate"
        description="Contact Virginia HomeCraft in Arlington, VA. Request a complimentary in-home consultation and itemized quote for your home remodeling project."
        canonicalPath="/contact"
        keywords={[
          'Contact Virginia HomeCraft',
          'Arlington Remodeling Contractor Phone',
          'Free Home Remodeling Estimate Arlington VA',
          'Home Renovation Quote Northern Virginia',
        ]}
      />

      <main className="py-12 bg-[#F7F4EE] text-[#142B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500">
            <ol className="flex items-center gap-1.5">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-[#D96B32]">
                  Home
                </button>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800" aria-current="page">
                Contact & Estimates
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B32]">
              Let’s Connect
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#142B3A] tracking-tight mt-1">
              Start Your Arlington Renovation
            </h1>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              We look forward to learning about your vision. Call us directly or submit your project details below for a complimentary in-home consultation.
            </p>
          </div>

          {/* Form and Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

            {/* Right Column: Contact Cards & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-6">
                <h2 className="text-xl font-heading font-bold text-[#142B3A]">
                  Office & Communication
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Direct Line
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-base font-bold text-[#142B3A] hover:text-[#D96B32] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-xs text-neutral-500 block">
                        Response guaranteed within 2 business hours
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-medium text-[#142B3A] hover:text-[#D96B32] transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-400 block">
                        Mailing & Consultation Office
                      </span>
                      <p className="text-neutral-700">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.city}, {siteConfig.contact.stateAbbr} {siteConfig.contact.zip}
                      </p>
                      <a
                        href={siteConfig.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#D96B32] hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                    <Clock className="w-5 h-5 text-[#D96B32] shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-600 space-y-1">
                      <span className="font-semibold text-neutral-800 block">
                        Business & Field Hours:
                      </span>
                      {siteConfig.contact.hours.map((h, i) => (
                        <div key={i}>
                          <span className="font-medium text-neutral-700">{h.days}:</span> {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <div className="text-xs text-neutral-500 font-semibold uppercase mb-1">
                    Credentials
                  </div>
                  <div className="text-xs text-neutral-700 font-medium">
                    {siteConfig.business.license}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {siteConfig.business.insuredStatus}
                  </div>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs">
                <iframe
                  title="Virginia HomeCraft Arlington Location"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale-20 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
