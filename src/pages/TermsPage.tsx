import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of service and website usage agreement for Virginia HomeCraft LLC."
        canonicalPath="/terms"
      />

      <main className="py-12 bg-[#F7F4EE] text-[#142B3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500">
            <ol className="flex items-center gap-1.5">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-[#D96B32]">
                  Home
                </button>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800" aria-current="page">
                Terms of Service
              </li>
            </ol>
          </nav>

          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-6 text-sm text-neutral-700 leading-relaxed">
            <h1 className="text-3xl font-heading font-extrabold text-[#142B3A]">
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-400">
              Last Updated: {siteConfig.legal.termsLastUpdated} · Template Document
            </p>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the site.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                2. Estimates & Proposals
              </h2>
              <p>
                Informational figures and pricing ranges presented on this website are estimates intended solely for general planning purposes. Formal binding proposals require an on-site physical inspection and signed construction agreement specifying scope, materials, allowances, and payment milestones.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                3. Intellectual Property
              </h2>
              <p>
                All photographs, project summaries, text copy, logos, and design trademarks appearing on this website are the property of {siteConfig.business.legalName} or licensed for our use.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                4. Virginia State Licensing & Governing Law
              </h2>
              <p>
                All construction contracts and contracting services are governed under the laws of the Commonwealth of Virginia and the Department of Professional and Occupational Regulation (DPOR).
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
