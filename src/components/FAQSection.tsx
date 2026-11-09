import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onOpenQuoteModal?: () => void;
  limit?: number;
}

export function FAQSection({ onOpenQuoteModal, limit }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsToDisplay = limit
    ? siteConfig.faqs.slice(0, limit)
    : siteConfig.faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F4EE] text-[#142B3A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#142B3A] tracking-tight">
            Frequently Asked Remodeling Questions
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Answers to common questions regarding Arlington permits, estimates, dust containment, and project timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsToDisplay.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border border-neutral-200 overflow-hidden transition-colors reveal ${
                  index % 2 === 0 ? 'reveal-left' : 'reveal-right delay-75'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#142B3A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#142B3A] text-white rotate-180' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-neutral-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-heading font-bold text-base text-[#142B3A]">
              Have a specific question about your home?
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Call us directly or send our team an inquiry. We are happy to help!
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="px-4 py-2 text-xs font-semibold text-[#142B3A] bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
            >
              Call {siteConfig.contact.phone}
            </a>
            {onOpenQuoteModal && (
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#D96B32] hover:bg-[#BF5A24] rounded-md transition-colors cursor-pointer"
              >
                Ask via Quote Request
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
