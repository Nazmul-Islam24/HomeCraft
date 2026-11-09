import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { QuoteBanner } from '../components/QuoteBanner';
import { ShieldCheck, HeartHandshake, CheckCircle2, Award, Clock } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export function AboutPage({ onNavigate, onOpenQuoteModal }: AboutPageProps) {
  return (
    <>
      <SEO
        title="About Our Arlington Remodeling Company"
        description="Learn about Virginia HomeCraft's history, master craftsmanship standards, 5-year warranty, and local commitment to Arlington and Northern Virginia homeowners."
        canonicalPath="/about"
        keywords={[
          'About Virginia HomeCraft',
          'Arlington Remodeling Contractor',
          'Licensed Home Remodeler Arlington VA',
          'Arlington County Local Builder',
        ]}
      />

      <main className="py-12 bg-[#F7F4EE] text-[#142B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
                About Us
              </li>
            </ol>
          </nav>

          {/* Desktop Hero Section (lg:block hidden) */}
          <section className="hidden lg:block bg-[#142B3A] text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Rooted in Arlington Since 2011
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Crafting Enduring Spaces with Local Integrity
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                We believe your home renovation should be an exciting transformation—not a source of construction anxiety. We pair old-school craftsmanship with transparent modern project management.
              </p>
            </div>
          </section>

          {/* Mobile & Tablet Hero Section (lg:hidden) */}
          <section className="lg:hidden space-y-4">
            {/* Full-width background image card with badge and H1 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-end p-6 sm:p-8 border border-neutral-200/50 shadow-md">
              <img
                src="/images/custom-carpentry-built-in-mantel-remodel.webp"
                alt="Virginia HomeCraft Custom Carpentry and Architectural Remodeling in Arlington VA"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Gradient overlay so the image is clearly visible while text stays sharp */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B3A] via-[#142B3A]/65 to-black/25" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#D96B32]/90 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                  Rooted in Arlington Since 2011
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Crafting Enduring Spaces with Local Integrity
                </h1>
              </div>
            </div>

            {/* Descriptive paragraph & local badges moved below the image card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-xs space-y-4">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                We believe your home renovation should be an exciting transformation—not a source of construction anxiety. We pair old-school craftsmanship with transparent modern project management.
              </p>

              <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-4 text-xs font-semibold text-[#142B3A]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D96B32]" />
                  <span>Arlington County Licensed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D96B32]" />
                  <span>15+ Years Renovation Experience</span>
                </div>
              </div>
            </div>
          </section>

          {/* Story & Philosophy */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 reveal reveal-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32]">
                Our Origin & Story
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#142B3A]">
                {siteConfig.about.storyHeading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                {siteConfig.about.storyText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Mission Statement Callout */}
              <div className="p-6 bg-white rounded-xl border border-neutral-200 border-l-4 border-l-[#D96B32] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96B32] block mb-1">
                  Our Mission
                </span>
                <p className="text-sm font-medium text-[#142B3A] italic">
                  "{siteConfig.about.mission}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 reveal reveal-right delay-150">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                <img
                  src="/images/whole-home-remodeling-renovation-arlington-va.webp"
                  alt="Turnkey Home Renovation and Craftsmanship by Virginia HomeCraft in Arlington VA"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-2">
                <div className="font-semibold text-neutral-900 text-sm">
                  Arlington County Licensing & Compliance
                </div>
                <p>
                  Fully registered with the Virginia Department of Professional and Occupational Regulation (DPOR) under Class A Contractor License #2705-184920.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values Grid */}
          <section className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96B32]">
                Our Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#142B3A] mt-1">
                The Four Pillars of Every Virginia HomeCraft Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.about.coreValues.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D96B32] shrink-0" />
                    <h3 className="font-heading font-bold text-lg text-[#142B3A]">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed pl-7">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Guarantees */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F4EE] border border-neutral-200 p-6 rounded-xl space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#D96B32]" />
              <h3 className="font-heading font-bold text-base text-[#142B3A]">
                Class A Licensed & Bonded
              </h3>
              <p className="text-xs text-neutral-600">
                Operating with $2M general liability and worker’s comp coverage protecting your home and family.
              </p>
            </div>

            <div className="bg-[#F7F4EE] border border-neutral-200 p-6 rounded-xl space-y-2">
              <Award className="w-8 h-8 text-[#D96B32]" />
              <h3 className="font-heading font-bold text-base text-[#142B3A]">
                Written 5-Year Warranty
              </h3>
              <p className="text-xs text-neutral-600">
                We stand behind our plumbing rough-ins, electrical work, tile waterproofing, and structural integrity.
              </p>
            </div>

            <div className="bg-[#F7F4EE] border border-neutral-200 p-6 rounded-xl space-y-2">
              <HeartHandshake className="w-8 h-8 text-[#D96B32]" />
              <h3 className="font-heading font-bold text-base text-[#142B3A]">
                Community Commitment
              </h3>
              <p className="text-xs text-neutral-600">
                We support Arlington youth sports, local non-profits, and historical preservation efforts.
              </p>
            </div>
          </section>

          {/* CTA */}
          <QuoteBanner onOpenQuoteModal={onOpenQuoteModal} />
        </div>
      </main>
    </>
  );
}
