import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-[#080808] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black font-bold text-xs shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              D
            </div>
            <span className="font-bold tracking-tight text-white text-lg">
              Dhiman Codes
            </span>
          </div>
          <p className="text-sm text-[#8f9194] leading-relaxed max-w-xs">
            Elite digital infrastructure and custom ERP engineering for ambitious brands and enterprises across India and globally.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold">
            Navigation
          </span>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#services">
            Services &amp; Architecture
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#work">
            Featured Work
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#process">
            Engineering Process
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#metrics">
            Core Web Vitals
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#pricing">
            Pricing Tiers
          </a>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold">
            Resources
          </span>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#calculator">
            Cost Estimator
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#faq">
            Frequently Asked Questions
          </a>
          <a className="text-sm text-[#8f9194] hover:text-white transition-colors" href="#work">
            Client Case Studies
          </a>
          <span className="text-sm text-[#8f9194]">
            Pan-India Delivery &amp; Support
          </span>
        </div>

        {/* Column 4: Connect */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold">
            Connect
          </span>
          <a href="mailto:hello@dhimancodes.com" className="text-sm text-[#c5c6ca] hover:text-white transition-colors">
            hello@dhimancodes.com
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            +91 98765 43210 (WhatsApp)
          </a>
          <span className="text-sm text-[#8f9194]">
            Haryana · Delhi NCR · Remote Global
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8f9194] gap-4">
        <p>© 2025 Dhiman Codes. All rights reserved. High-Performance Digital Infrastructure.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-white transition-colors" href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter / X
          </a>
          <a className="hover:text-white transition-colors" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white transition-colors" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
