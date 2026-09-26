import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Terminal } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div 
        className={`max-w-[1440px] mx-auto h-16 rounded-2xl border transition-all duration-300 flex items-center justify-between px-4 md:px-6 ${
          isScrolled 
            ? 'bg-[#050505]/85 backdrop-blur-[40px] border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
            : 'bg-[#050505]/60 backdrop-blur-[30px] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.32)]'
        }`}
      >
        {/* Brand Zone */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#151c25] font-bold text-base shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#e5e2e1] group-hover:text-white transition-colors">
            Dhiman Codes
          </span>
        </a>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#c5c6ca] hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 h-10 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] text-sm font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            title="Direct WhatsApp Consultation"
            className="w-9 h-9 rounded-full bg-[#222222] hover:bg-[#353534] flex items-center justify-center border border-white/10 hover:border-white/25 transition-all text-[#e5e2e1] hover:text-white"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-xl bg-[#222222] flex items-center justify-center border border-white/10 text-[#e5e2e1] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#0d0d0d]/95 backdrop-blur-[40px] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#c5c6ca] hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full h-11 rounded-xl bg-white text-[#191c1f] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
