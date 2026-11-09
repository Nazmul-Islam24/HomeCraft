import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Layers, Paintbrush, Hammer, CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D96B32]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#D96B32]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-[#D96B32]" />;
      case 'Hammer':
      default:
        return <Hammer className="w-6 h-6 text-[#D96B32]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#142B3A] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-5 space-y-6 reveal reveal-left">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
              The Virginia HomeCraft Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Remodeling Without the Stress, Delays, or Surprises
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              We engineered our remodeling process around homeowner peace of mind. From strict dust-containment to on-site daily management, every detail is handled with precision.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D96B32] shrink-0" />
                <span>100% Licensed & Insured Virginia Class A Contractor</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D96B32] shrink-0" />
                <span>Written 5-Year Craftsmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D96B32] shrink-0" />
                <span>Daily Jobsite Vacuuming & HEPA Air Scrubbing</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Distinct Differentiator Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors flex flex-col justify-between reveal reveal-up ${
                  idx === 1 ? 'delay-75' : idx === 2 ? 'delay-150' : idx === 3 ? 'delay-200' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
