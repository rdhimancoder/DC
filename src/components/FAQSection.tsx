import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the typical project timeline?',
      a: 'Projects typically take 2 to 4 weeks depending on scope, features, and custom requirements. High-speed landing pages can be delivered within 7 days, while custom enterprise ERP systems usually require 3 to 4 weeks for full development, data migration, and staff training.'
    },
    {
      q: 'What geographic regions do you cover?',
      a: 'We provide engineering services Pan-India across all major states and tier-1/tier-2 cities (including Delhi NCR, Haryana, Punjab, Maharashtra, Karnataka), as well as remote client support for international businesses across the US, UK, and UAE.'
    },
    {
      q: 'What is your core technology stack?',
      a: 'We engineer using battle-tested, high-performance technologies: React, Next.js, TypeScript, Tailwind CSS on the frontend; and Node.js, Express, PostgreSQL, MySQL, and Firebase on the backend. We deploy on high-velocity edge CDNs (Vercel, AWS, Google Cloud) with automated database backups.'
    },
    {
      q: 'What are your payment terms?',
      a: 'Our milestone structure is transparent and fair: 40% upfront deposit to initiate discovery and architecture, 30% at the mid-project milestone after design approval and alpha prototype, and 30% upon final acceptance, QA testing, and production deployment.'
    },
    {
      q: 'Can you migrate data from our existing Excel sheets or legacy systems?',
      a: 'Absolutely. We specialize in automated data extraction, normalization, and migration from legacy spreadsheets, old desktop software, and third-party accounting tools directly into your new modern ERP system with zero data loss.'
    },
    {
      q: 'What kind of support is included post-launch?',
      a: 'Every project comes with 30 days of comprehensive post-launch warranty support, including bug fixes, speed checks, staff training videos, and documentation. We also offer affordable monthly engineering maintenance retainers for continuous feature evolution.'
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 md:px-8 w-full" id="faq">
      <div className="text-center mb-16">
        <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.q}
              className="rounded-xl bg-[#161616]/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-[20px] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <h3 className="font-semibold text-base sm:text-lg text-[#e5e2e1] pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#c5c6ca] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
