import React, { useState } from 'react';
import { Compass, Layers, Code, Rocket, Check, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      index: '01',
      phase: 'DISCOVERY',
      title: 'Strategic Blueprint',
      icon: Compass,
      timeline: 'Days 1 - 3',
      description: 'Deep-dive consultation to define core business objectives, user personas, and technical architecture.',
      deliverables: [
        'Requirements & ERP scope document',
        'Database entity relationship diagram (ERD)',
        'User journey & wireframe maps',
        'Milestone delivery schedule'
      ]
    },
    {
      index: '02',
      phase: 'DESIGN',
      title: 'Visual Architecture',
      icon: Layers,
      timeline: 'Days 4 - 8',
      description: 'Wireframing high-converting UI/UX layouts with premium typography, glassmorphic styling, and brand harmony.',
      deliverables: [
        'High-fidelity interactive prototype',
        'Cyber-minimalist liquid glass design system',
        'Mobile & tablet responsive viewports',
        'Typography & color token specification'
      ]
    },
    {
      index: '03',
      phase: 'DEVELOP',
      title: 'Robust Engineering',
      icon: Code,
      timeline: 'Days 9 - 18',
      description: 'Writing clean, modular code with modern frameworks, secure databases, and seamless ERP integrations.',
      deliverables: [
        'Production React/Next.js frontend',
        'Scalable Node/Express or SQL backend',
        'Automated database migrations & seeds',
        'API & payment gateway integrations'
      ]
    },
    {
      index: '04',
      phase: 'LAUNCH',
      title: 'Deployment & Growth',
      icon: Rocket,
      timeline: 'Days 19 - 21',
      description: 'Rigorous QA testing, speed optimization, search engine submission, and ongoing maintenance.',
      deliverables: [
        'Lighthouse 95+ performance tuning',
        'Google Search Console & Schema index',
        'Full staff handover & training video',
        '30-day dedicated post-launch support'
      ]
    },
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative" id="process">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
            Our 4-Step Engineering Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
            From concept to deployment, we maintain rigorous engineering standards and transparent timelines.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.index}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-[20px] relative flex flex-col justify-between cursor-pointer group ${
                  isCurrent
                    ? 'bg-[#1c1b1b] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.08)] ring-1 ring-white/20'
                    : 'bg-[#161616]/40 border-white/10 hover:border-white/20 hover:bg-[#161616]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-code text-white font-bold tracking-wider">
                      {step.index} / {step.phase}
                    </span>
                    <span className="text-[11px] font-mono-code text-[#8f9194] flex items-center gap-1 bg-[#0d0d0d] px-2 py-0.5 rounded border border-white/5">
                      <Clock className="w-3 h-3 text-sky-400" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#e5e2e1] group-hover:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#c5c6ca] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-mono-code text-[#8f9194] mb-2 font-medium">Deliverables:</p>
                  <ul className="space-y-1.5">
                    {step.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-[#c5c6ca]">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
