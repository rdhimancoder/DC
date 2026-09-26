import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      priceINR: '₹10,000',
      priceUSD: '$120',
      description: 'Ideal for small businesses and portfolio websites looking for rapid online presence.',
      features: [
        'Responsive High-Speed Landing Page',
        'Basic SEO & Meta Tag Setup',
        'Contact Form & WhatsApp Integration',
        '7-Day Turnaround Delivery',
        '14 Days Post-Launch Maintenance'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional',
      priceINR: '₹55,000',
      priceUSD: '$650',
      description: 'Custom web application or mid-scale ERP designed for ambitious growing brands.',
      features: [
        'Multi-Page Custom Web Application',
        'Advanced ERP / Management Portal',
        'Comprehensive Schema & Google Ranking Setup',
        'Production Database & Authentication Setup',
        'Automated GST Invoicing or Student Records',
        '30 Days Dedicated Engineering Support'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      priceINR: '₹100,000+',
      priceUSD: '$1,200+',
      description: 'Full-scale enterprise digital infrastructure and dedicated ongoing engineering support.',
      features: [
        'Custom Full-Stack Microservices Architecture',
        'Advanced Multi-Branch Workflow Automation',
        'Dedicated Senior Engineering Team',
        '24/7 Priority SLA & Zero-Downtime Guarantee',
        'Custom API Integrations & High-Volume Queues',
        'Quarterly Security & Speed Audits'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5" id="pricing">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] font-semibold">
              Investment Tiers
            </span>
            {/* Currency toggle */}
            <div className="inline-flex items-center bg-[#161616] p-0.5 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-0.5 text-[11px] font-mono-code rounded ${
                  currency === 'INR' ? 'bg-white text-black font-bold' : 'text-[#8f9194]'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 text-[11px] font-mono-code rounded ${
                  currency === 'USD' ? 'bg-white text-black font-bold' : 'text-[#8f9194]'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
            Transparent, Value-Driven Pricing
          </h2>
          <p className="text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
            Choose the ideal tier to elevate your digital infrastructure. No surprise bills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = currency === 'INR' ? tier.priceINR : tier.priceUSD;

            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-[#161616]/90 border-2 border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.12)] lg:-translate-y-2 z-10'
                    : 'bg-[#161616]/40 border border-white/10 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[#191c1f] font-mono-code text-[11px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    Most Popular
                  </div>
                )}

                <div>
                  <span className={`text-xs font-mono-code uppercase tracking-wider mb-2 block font-semibold ${
                    tier.popular ? 'text-sky-400' : 'text-[#8f9194]'
                  }`}>
                    {tier.name}
                  </span>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
                      {price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#c5c6ca] mb-8 leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 font-normal text-xs sm:text-sm text-[#c5c6ca]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectTier(tier.name, price)}
                  className={`w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:opacity-90 active:scale-95'
                      : 'bg-[#222222] hover:bg-[#2e2e2e] text-white border border-white/10'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
