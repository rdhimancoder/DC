import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const phrases = [
    'Scale Effortlessly',
    'Load Instantly',
    'Drive Sales',
    'Rank on Google'
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentCharIndex > 0) {
      timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentPhraseIndex]);

  const displayedText = phrases[currentPhraseIndex].substring(0, currentCharIndex);

  const stats = [
    { value: '70+', label: 'Projects Delivered', detail: 'Completed Pan-India' },
    { value: '99%', label: 'Client Satisfaction', detail: 'Long-term Retainers' },
    { value: '15+', label: 'Cities Served', detail: 'Delhi, Haryana, Punjab & more' },
    { value: '4+', label: 'Years Experience', detail: 'Production ERP & Web' },
  ];

  return (
    <section className="relative min-h-[920px] flex flex-col justify-center items-center px-4 md:px-8 pt-28 pb-16 max-w-[1440px] mx-auto text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tr from-white/10 via-sky-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Top Banner Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616]/80 border border-white/10 backdrop-blur-[20px] mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <span className="text-xs md:text-sm font-semibold text-[#e5e2e1] font-mono-code tracking-wide">
          🚀 Custom Web Development &amp; ERP Solutions for Indian Businesses
        </span>
      </div>

      {/* Main Headline with typewriter effect */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight max-w-5xl mb-6 text-[#e5e2e1] leading-[1.15] text-balance">
        We Build Websites That Load Instantly, Drive Sales, and <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-white via-[#dce3f0] to-[#7bd0ff] bg-clip-text text-transparent underline decoration-sky-400/40 decoration-wavy decoration-2">
          {displayedText}
        </span>
        <span className="inline-block w-[3px] h-[0.9em] bg-white ml-1.5 align-middle animate-pulse" />
      </h1>

      {/* Value Proposition */}
      <p className="text-base sm:text-lg md:text-xl text-[#c5c6ca] max-w-3xl mb-10 leading-relaxed font-normal">
        We engineer elite digital infrastructure, lightning-fast web applications, and tailor-made enterprise resource planning (ERP) software designed to dominate search rankings and maximize profitability.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16 z-10">
        <button
          onClick={onStartProject}
          className="px-8 h-14 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] text-base font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <a
          href="#work"
          className="px-8 h-14 rounded-xl bg-[#201f1f]/80 backdrop-blur-[20px] border border-white/10 hover:border-white/25 text-[#e5e2e1] hover:text-white text-base font-semibold flex items-center justify-center hover:bg-[#2a2a2a] transition-all cursor-pointer"
        >
          View Our Work
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto z-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 md:p-6 rounded-2xl bg-[#161616]/70 backdrop-blur-[40px] border border-white/10 hover:border-white/20 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] group transition-all"
          >
            <span className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight font-mono-code tabular-nums group-hover:scale-105 transition-transform">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#8f9194] text-center font-medium">
              {stat.label}
            </span>
            <span className="text-[11px] text-[#c5c6ca]/60 mt-1 hidden sm:block">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
