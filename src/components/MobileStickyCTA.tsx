import { siteConfig } from '../config/siteConfig';
import { Phone, CalendarCheck } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenQuoteModal?: () => void;
  onNavigate?: (path: string) => void;
}

export function MobileStickyCTA({ onOpenQuoteModal, onNavigate }: MobileStickyCTAProps) {
  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-[#142B3A]/98 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl safe-area-pb"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Call Now Button with tel: */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white rounded-md text-sm font-semibold transition-all whitespace-nowrap shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#D96B32] shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Free Quote Button */}
        <button
          onClick={handleQuoteClick}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#D96B32] hover:bg-[#BF5A24] active:scale-[0.98] text-white rounded-md text-sm font-semibold transition-all whitespace-nowrap shadow-xs cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 shrink-0" />
          <span>Free Quote</span>
        </button>
      </div>
    </aside>
  );
}
