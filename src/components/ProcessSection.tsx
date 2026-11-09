import { siteConfig } from '../config/siteConfig';

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#142B3A] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16 reveal reveal-up">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-2">
            The Remodeling Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#142B3A] tracking-tight">
            How We Bring Your Vision to Life
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            A structured, transparent roadmap from initial idea to spotless handover. No guesswork, no communication gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {siteConfig.process.map((p, idx) => (
            <div
              key={idx}
              className={`relative bg-[#F7F4EE] rounded-xl p-6 border border-neutral-200 flex flex-col justify-between reveal ${
                idx < 2 ? 'reveal-left' : 'reveal-right'
              } ${idx % 2 === 1 ? 'delay-150' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#D96B32] tabular-nums">
                    {p.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-[#142B3A] mb-2">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-neutral-500">
                {p.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
