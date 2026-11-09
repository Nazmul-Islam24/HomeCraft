import { siteConfig } from '../config/siteConfig';
import { Phone, CalendarCheck, ShieldCheck } from 'lucide-react';

interface QuoteBannerProps {
  onOpenQuoteModal: () => void;
}

export function QuoteBanner({ onOpenQuoteModal }: QuoteBannerProps) {
  return (
    <section className="bg-[#142B3A] text-white py-16 sm:py-20 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">
          <ShieldCheck className="w-4 h-4 text-[#D96B32]" />
          <span>Arlington’s Trusted Local Contractor</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Bring Enduring Craftsmanship to Your Home?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Book your complimentary in-home design and estimate consultation today. Receive an itemized fixed-price proposal with no surprises.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#D96B32] hover:bg-[#BF5A24] active:scale-[0.99] rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Request In-Home Estimate</span>
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 active:scale-[0.99] rounded-lg border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-[#D96B32]" />
            <span>Call {siteConfig.contact.phone}</span>
          </a>
        </div>

        <p className="text-xs text-white/50 mt-6">
          {siteConfig.contact.quoteResponseTime} · {siteConfig.business.license}
        </p>
      </div>
    </section>
  );
}
