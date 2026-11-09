import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { Home, Phone, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you requested could not be found. Explore Virginia HomeCraft's home remodeling services in Arlington, VA."
        canonicalPath="/404"
      />

      <main className="py-24 bg-[#F7F4EE] text-[#142B3A] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-6xl sm:text-7xl font-heading font-extrabold text-[#D96B32] font-mono mb-4">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#142B3A] mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto px-6 py-3 bg-[#142B3A] hover:bg-[#1D3D52] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D96B32]" />
              <span>Call Us: {siteConfig.contact.phone}</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 text-left text-xs space-y-2">
            <span className="font-semibold text-neutral-800 block text-sm">
              Popular Destinations:
            </span>
            <div className="grid grid-cols-2 gap-2 text-neutral-600">
              <button
                onClick={() => onNavigate('/services/kitchen-remodeling')}
                className="hover:text-[#D96B32] flex items-center gap-1 text-left"
              >
                <ArrowRight className="w-3 h-3 text-[#D96B32]" />
                <span>Kitchen Remodeling</span>
              </button>
              <button
                onClick={() => onNavigate('/services/bathroom-remodeling')}
                className="hover:text-[#D96B32] flex items-center gap-1 text-left"
              >
                <ArrowRight className="w-3 h-3 text-[#D96B32]" />
                <span>Bathroom Remodeling</span>
              </button>
              <button
                onClick={() => onNavigate('/projects')}
                className="hover:text-[#D96B32] flex items-center gap-1 text-left"
              >
                <ArrowRight className="w-3 h-3 text-[#D96B32]" />
                <span>Recent Projects</span>
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="hover:text-[#D96B32] flex items-center gap-1 text-left"
              >
                <ArrowRight className="w-3 h-3 text-[#D96B32]" />
                <span>Request Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
