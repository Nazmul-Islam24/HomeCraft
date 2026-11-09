import { siteConfig } from '../config/siteConfig';

export function TrustStats() {
  // Combine stats (without the small subtext) and all website services dynamically
  const tickerItems = [
    // 1. Trust Stats (Numbers in Burnt Orange, label in White)
    ...siteConfig.trustStats.map((stat, idx) => ({
      type: 'stat' as const,
      id: `stat-${idx}`,
      value: stat.value,
      label: stat.label,
    })),
    // 2. All Service Names from siteConfig
    ...siteConfig.services.map((service) => ({
      type: 'service' as const,
      id: `svc-${service.id}`,
      value: '✦',
      label: service.title,
    })),
  ];

  // Duplicate items for a seamless, continuous infinite loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <section
      aria-label="Key Highlights and Services Ribbon"
      className="bg-[#0D1C26] text-white py-2.5 sm:py-3.5 border-b border-white/10 overflow-hidden relative select-none"
    >
      {/* Subtle edge fades for smooth visual framing */}
      <div className="absolute left-0 inset-y-0 w-10 sm:w-16 bg-gradient-to-r from-[#0D1C26] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-10 sm:w-16 bg-gradient-to-l from-[#0D1C26] to-transparent z-10 pointer-events-none" />

      {/* Ticker Track: Continuous loop from left to right that never pauses */}
      <div className="animate-ticker-continuous flex items-center">
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-8 shrink-0 border-r border-white/15 whitespace-nowrap"
          >
            {item.type === 'stat' ? (
              <>
                <span className="text-base sm:text-lg lg:text-xl font-heading font-extrabold text-[#D96B32] font-mono tabular-nums tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {item.label}
                </span>
              </>
            ) : (
              <>
                <span className="text-xs text-[#D96B32] shrink-0">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">
                  {item.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
