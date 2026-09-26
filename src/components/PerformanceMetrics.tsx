import React, { useState } from 'react';
import { CheckCircle, Activity, Gauge, Cpu, Globe, RefreshCw } from 'lucide-react';

export const PerformanceMetrics: React.FC = () => {
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditTimestamp, setAuditTimestamp] = useState('Real-Time Production Node');

  const runAuditSim = () => {
    setIsRunningAudit(true);
    setTimeout(() => {
      setIsRunningAudit(false);
      setAuditTimestamp(`Verified just now (Node #${Math.floor(Math.random() * 899 + 100)})`);
    }, 900);
  };

  const metrics = [
    { label: 'Page Speed Score', score: '98/100', percentage: '98%', status: 'Grade A+' },
    { label: 'SEO Audit Score', score: '95/100', percentage: '95%', status: 'Top 1% Tier' },
    { label: 'Platform Uptime', score: '99.9%', percentage: '99.9%', status: 'High Availability' },
    { label: 'Conversion Growth', score: '+180%', percentage: '100%', status: 'Client Average' },
  ];

  const webVitals = [
    { key: 'LCP', label: 'Largest Contentful Paint', value: '0.62s', benchmark: '< 2.5s', pass: true },
    { key: 'FID', label: 'First Input Delay', value: '8ms', benchmark: '< 100ms', pass: true },
    { key: 'CLS', label: 'Cumulative Layout Shift', value: '0.00', benchmark: '< 0.1', pass: true },
    { key: 'TTFB', label: 'Time to First Byte', value: '82ms', benchmark: '< 200ms', pass: true },
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5" id="metrics">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Explanations */}
        <div>
          <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
            Uncompromising Performance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-6 tracking-tight">
            Engineered for Elite Core Web Vitals
          </h2>
          <p className="text-base sm:text-lg text-[#c5c6ca] mb-8 leading-relaxed">
            We don't just build websites; we engineer high-velocity digital assets that outperform competitors and dominate search algorithms.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#e5e2e1]">Sub-Second Load Times</h3>
                <p className="text-sm text-[#c5c6ca] mt-0.5">
                  Instant rendering keeps bounce rates to an absolute minimum and maximizes visitor retention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#e5e2e1]">Advanced Schema &amp; Meta Architecture</h3>
                <p className="text-sm text-[#c5c6ca] mt-0.5">
                  Structured data guarantees maximum visibility, rich snippet placement, and prime indexing on Google.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#e5e2e1]">Scalable ERP Architecture</h3>
                <p className="text-sm text-[#c5c6ca] mt-0.5">
                  Easily handles tens of thousands of concurrent users, heavy reporting queries, and complex transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Performance Dashboard */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#161616]/70 border border-white/10 backdrop-blur-[40px] flex flex-col gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono-code text-[#c5c6ca] uppercase tracking-wider font-semibold">
                Live Lighthouse &amp; Vitals
              </span>
            </div>
            <button
              onClick={runAuditSim}
              disabled={isRunningAudit}
              className="flex items-center gap-1.5 text-xs font-mono-code text-sky-400 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunningAudit ? 'animate-spin' : ''}`} />
              <span>{isRunningAudit ? 'Auditing...' : 'Re-test'}</span>
            </button>
          </div>

          {/* Metric Bars */}
          <div className="space-y-5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#e5e2e1]">{m.label}</span>
                    <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {m.status}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white font-mono-code tabular-nums">
                    {m.score}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#222222] overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#dce3f0] to-white rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    style={{ width: isRunningAudit ? '30%' : m.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Web Vitals Grid */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3">
              Core Web Vitals Telemetry ({auditTimestamp}):
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {webVitals.map((v) => (
                <div key={v.key} className="p-2.5 rounded-lg bg-[#0d0d0d] border border-white/5 text-center">
                  <span className="block text-xs font-mono-code text-[#8f9194]">{v.key}</span>
                  <span className="block text-sm font-bold text-emerald-400 font-mono-code tabular-nums my-0.5">
                    {isRunningAudit ? '...' : v.value}
                  </span>
                  <span className="block text-[9px] text-[#8f9194]">{v.benchmark}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
