import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection guidelines for Virginia HomeCraft LLC."
        canonicalPath="/privacy"
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
                Privacy Policy
              </li>
            </ol>
          </nav>

          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-6 text-sm text-neutral-700 leading-relaxed">
            <h1 className="text-3xl font-heading font-extrabold text-[#142B3A]">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-400">
              Last Updated: {siteConfig.legal.privacyLastUpdated} · Template Document
            </p>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                1. Information We Collect
              </h2>
              <p>
                {siteConfig.business.legalName} collects personal information that you provide directly to us through our website contact forms, phone calls, and in-person consultations. This includes your name, phone number, email address, physical property location, and project preferences.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information collected solely to prepare project estimates, coordinate on-site consultations, communicate project milestones, and fulfill contracting services. We do not sell, rent, or share your contact information with external marketers or third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                3. Data Security
              </h2>
              <p>
                We implement industry-standard administrative and technical security measures to safeguard your personal details. However, no internet transmission is 100% secure, and we encourage you to exercise caution when transmitting sensitive data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-heading font-bold text-[#142B3A]">
                4. Contacting Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the removal of your contact information, please contact us at {siteConfig.contact.email} or by mail at {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.stateAbbr} {siteConfig.contact.zip}.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
