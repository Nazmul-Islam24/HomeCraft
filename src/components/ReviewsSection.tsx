import { useState } from 'react';
import { siteConfig, ReviewItem } from '../config/siteConfig';
import { Star, CheckCircle, ExternalLink, Pause, Play } from 'lucide-react';

interface ReviewsSectionProps {
  onNavigate?: (path: string) => void;
  limit?: number;
}

export function ReviewsSection({}: ReviewsSectionProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews to create a seamless infinite marquee loop
  const duplicatedReviews = [...siteConfig.reviews, ...siteConfig.reviews];

  return (
    <section className="py-16 sm:py-20 bg-white text-[#142B3A] border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-1.5">
              Verified Client Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#142B3A] tracking-tight">
              What Arlington Homeowners Say
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Hover with mouse or tap with finger to pause any review. Feedback from Lyon Village, Cherrydale, Del Ray & McLean.
            </p>
          </div>

          {/* Rating Summary Pill & Pause Indicator */}
          <div className="flex items-center gap-3">
            <div className="bg-[#F7F4EE] border border-neutral-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#142B3A] text-white flex items-center justify-center font-heading font-bold text-xs">
                4.9★
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-neutral-600 font-medium">
                  Verified Google Reviews
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors text-xs flex items-center gap-1 cursor-pointer"
              title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
              aria-label={isPaused ? 'Resume review scrolling' : 'Pause review scrolling'}
            >
              {isPaused ? <Play className="w-4 h-4 text-[#D96B32]" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Subtle Fade edges on left and right for desktop */}
        <div className="hidden sm:block absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className={`animate-marquee pause-on-hover flex gap-4 sm:gap-5 ${
            isPaused ? 'is-paused' : ''
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedReviews.map((rev: ReviewItem, idx: number) => (
            <article
              key={`${rev.id}-${idx}`}
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-72 sm:w-80 shrink-0 bg-[#F7F4EE] rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-xs hover:border-[#D96B32] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between select-none"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed mb-4 line-clamp-4 italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-3 border-t border-neutral-200/80">
                <div className="font-heading font-bold text-xs sm:text-sm text-[#142B3A] truncate">
                  {rev.author}
                </div>
                <div className="text-[11px] text-neutral-500 truncate mt-0.5">
                  {rev.location} · <span className="text-[#D96B32] font-medium">{rev.service}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* External Review Link */}
      <div className="mt-8 text-center px-4">
        <a
          href={siteConfig.socialLinks.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold rounded-lg transition-colors shadow-xs"
        >
          <span>Read Verified Google Reviews</span>
          <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
        </a>
      </div>
    </section>
  );
}
