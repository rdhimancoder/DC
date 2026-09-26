import React, { useState } from 'react';
import { 
  Zap, 
  Palette, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Database,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized assets, zero-latency caching, and edge delivery guarantee sub-second load times worldwide.',
      metric: '0.2s Avg Response',
      capabilities: ['Edge CDN routing', 'Asset compression & WebP/AVIF', 'Zero layout shifts', 'Instant client hydration'],
      color: 'from-amber-400 to-yellow-200'
    },
    {
      icon: Palette,
      title: 'Stunning UI/UX',
      description: 'Bespoke cyber-minimalist aesthetics, fluid motion, and high-end glassmorphic visual hierarchy.',
      metric: 'Award-Winning Design',
      capabilities: ['Liquid glass styling', 'Micro-interactions under 150ms', 'Tailored design tokens', 'WCAG AA high contrast'],
      color: 'from-purple-400 to-pink-300'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Impeccable fluid responsiveness across smartphones, tablets, and ultra-wide desktop monitors.',
      metric: '100% Responsive',
      capabilities: ['Fluid 12-column grid', 'Touch gestures & drawer menus', 'Thumb-friendly navigation', 'Adaptive media loading'],
      color: 'from-emerald-400 to-teal-200'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimized',
      description: 'Advanced technical architecture, structured schema, and flawless Core Web Vitals for top rankings.',
      metric: 'Rank #1 on Google',
      capabilities: ['JSON-LD structured schema', 'Automated sitemaps & robots', 'Semantic HTML5 structure', 'OpenGraph & Twitter cards'],
      color: 'from-sky-400 to-blue-200'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Reliable',
      description: 'Bank-grade encryption, automated daily backups, and robust vulnerability mitigation protocols.',
      metric: '99.9% Uptime SLA',
      capabilities: ['End-to-end SSL encryption', 'Role-based access control (RBAC)', 'Automated Cloud snapshots', 'SQL injection & CSRF guard'],
      color: 'from-rose-400 to-red-200'
    },
    {
      icon: Database,
      title: 'ERP & Management Systems',
      description: 'Custom enterprise resource planning software to automate inventory, billing, student records, and workflows.',
      metric: 'Custom Workflow Automation',
      capabilities: ['Multi-branch inventory ledger', 'Automated GST invoices & POS', 'Student attendance & certificates', 'WhatsApp alert integrations'],
      color: 'from-cyan-400 to-indigo-300'
    },
  ];

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 w-full" id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
          Engineering Excellence
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
          Designed for High Performance
        </h2>
        <p className="text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
          Every line of code is optimized for extreme velocity, unbreakable security, and unmatched user conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isSelected = activeCard === index;

          return (
            <div
              key={service.title}
              onClick={() => setActiveCard(isSelected ? null : index)}
              className={`p-6 sm:p-8 rounded-2xl bg-[#161616]/60 border transition-all duration-300 backdrop-blur-[40px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer group hover:-translate-y-1 ${
                isSelected 
                  ? 'border-sky-400/50 bg-[#201f1f]/90 ring-1 ring-sky-400/30' 
                  : 'border-white/10 hover:border-white/25 hover:bg-[#201f1f]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#222222] flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-xs font-mono-code text-[#8f9194] px-2.5 py-1 rounded bg-[#0d0d0d] border border-white/5">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#e5e2e1] group-hover:text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#c5c6ca] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Expanded architectural capabilities */}
                {isSelected ? (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in duration-200">
                    <p className="text-xs font-mono-code text-sky-300 font-semibold uppercase tracking-wider mb-2">
                      Included Specifications:
                    </p>
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-[#c5c6ca]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-[#8f9194] group-hover:text-[#c5c6ca] flex items-center gap-1 transition-colors">
                    <span>Click to view technical specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono-code text-white font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                  {service.metric}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service.title);
                  }}
                  className="text-xs font-mono-code text-sky-400 hover:text-white transition-colors cursor-pointer"
                >
                  Inquire &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
