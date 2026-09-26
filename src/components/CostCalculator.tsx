import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';

interface CostCalculatorProps {
  onApplyEstimate: (details: {
    projectType: string;
    modules: string[];
    urgency: string;
    estimatedCost: string;
    estimatedWeeks: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'landing' | 'webapp' | 'erp' | 'lms'>('erp');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'inventory',
    'invoicing',
    'rbac'
  ]);
  const [urgency, setUrgency] = useState<'standard' | 'rush'>('standard');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const basePrices = {
    landing: 15000,
    webapp: 45000,
    erp: 65000,
    lms: 55000,
  };

  const projectLabels = {
    landing: 'High-Velocity Landing Page',
    webapp: 'Full-Stack Custom Web Application',
    erp: 'Tailored Enterprise ERP Portal',
    lms: 'Educational Institute / LMS System',
  };

  const availableModules = [
    { id: 'inventory', name: 'Real-time Inventory & Stock Ledgers', price: 12000, time: 4 },
    { id: 'invoicing', name: 'GST Billing & Thermal Receipt Engine', price: 10000, time: 3 },
    { id: 'rbac', name: 'Role-Based Access Control (Multi-Tier)', price: 8000, time: 3 },
    { id: 'whatsapp', name: 'WhatsApp & SMS Automated Dispatch', price: 9000, time: 3 },
    { id: 'payments', name: 'Integrated UPI / Razorpay Gateway', price: 7000, time: 2 },
    { id: 'admissions', name: 'Student Records & Digital Certificates', price: 11000, time: 4 },
    { id: 'analytics', name: 'Executive Revenue & Profit Dashboards', price: 8500, time: 3 },
    { id: 'sync', name: 'Offline-First Local Data Cache', price: 14000, time: 5 },
  ];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Calculations
  const baseCost = basePrices[projectType];
  const modulesCost = selectedModules.reduce((acc, currId) => {
    const mod = availableModules.find((m) => m.id === currId);
    return acc + (mod ? mod.price : 0);
  }, 0);

  const subtotal = baseCost + modulesCost;
  const multiplier = urgency === 'rush' ? 1.25 : 1.0;
  const totalINR = Math.round(subtotal * multiplier);
  const totalUSD = Math.round(totalINR / 85);

  const estimatedDays = urgency === 'rush' ? '10 - 14 Days' : '3 - 4 Weeks';

  const formatCost = (inrVal: number, usdVal: number) => {
    if (currency === 'USD') {
      return `$${usdVal.toLocaleString()}`;
    }
    return `₹${inrVal.toLocaleString('en-IN')}`;
  };

  const handleBook = () => {
    const moduleNames = selectedModules.map((id) => {
      const m = availableModules.find((x) => x.id === id);
      return m ? m.name : id;
    });

    onApplyEstimate({
      projectType: projectLabels[projectType],
      modules: moduleNames,
      urgency: urgency === 'rush' ? 'Rush (10-14 Days)' : 'Standard (3-4 Weeks)',
      estimatedCost: formatCost(totalINR, totalUSD),
      estimatedWeeks: estimatedDays,
    });
  };

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5" id="calculator">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
            Instant Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
            Interactive Project Cost Estimator
          </h2>
          <p className="text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
            Configure your technical requirements to generate a transparent ballpark investment and engineering timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Form (Col 7) */}
          <div className="lg:col-span-7 space-y-8 bg-[#161616]/60 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-[30px]">
            {/* Step 1: Project Archetype */}
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 font-semibold">
                1. Select Digital Infrastructure Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(basePrices) as Array<keyof typeof basePrices>).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      projectType === type
                        ? 'bg-[#201f1f] border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                        : 'bg-[#111111] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <span className="text-sm font-semibold text-white">
                      {projectLabels[type]}
                    </span>
                    <span className="text-xs font-mono-code text-[#8f9194] mt-2">
                      Starts from ₹{basePrices[type].toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Modules */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] font-semibold">
                  2. Select Specialized Capabilities &amp; Modules
                </label>
                <span className="text-xs font-mono-code text-sky-400">
                  {selectedModules.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableModules.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'bg-[#222222] border-sky-400/40 text-white'
                          : 'bg-[#0e0e0e] border-white/5 text-[#8f9194] hover:text-[#c5c6ca] hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-sky-500 border-sky-400 text-black'
                              : 'border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{mod.name}</span>
                      </div>
                      <span className="font-mono-code text-[11px] text-[#8f9194] shrink-0 ml-2">
                        +₹{mod.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 font-semibold">
                3. Delivery Timeline Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'standard'
                      ? 'bg-[#201f1f] border-white/30 text-white'
                      : 'bg-[#111111] border-white/5 text-[#8f9194]'
                  }`}
                >
                  <span className="block text-xs font-semibold">Standard Engineering</span>
                  <span className="text-[11px] text-[#8f9194]">3 to 4 Weeks Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('rush')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'rush'
                      ? 'bg-[#201f1f] border-amber-400/50 text-white'
                      : 'bg-[#111111] border-white/5 text-[#8f9194]'
                  }`}
                >
                  <span className="block text-xs font-semibold text-amber-300">Fast-Track Rush (+25%)</span>
                  <span className="text-[11px] text-[#8f9194]">10 to 14 Days Delivery</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quotation Summary Card (Col 5) */}
          <div className="lg:col-span-5 sticky top-28 bg-[#161616]/90 p-6 sm:p-8 rounded-2xl border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.08)] backdrop-blur-[40px]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] font-semibold">
                Ballpark Estimate
              </span>
              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-[#222222] p-1 rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2 py-0.5 text-xs font-mono-code rounded ${
                    currency === 'INR' ? 'bg-white text-black font-bold' : 'text-[#8f9194]'
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-0.5 text-xs font-mono-code rounded ${
                    currency === 'USD' ? 'bg-white text-black font-bold' : 'text-[#8f9194]'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs text-[#8f9194] block mb-1">Estimated Investment:</span>
              <span className="text-4xl sm:text-5xl font-bold text-white font-mono-code tracking-tight block">
                {formatCost(totalINR, totalUSD)}
              </span>
              <span className="text-xs text-[#8f9194] mt-1.5 block">
                * Includes production deployment, testing &amp; 30-day warranty.
              </span>
            </div>

            {/* Scope Recap */}
            <div className="space-y-3 py-4 border-y border-white/10 text-xs text-[#c5c6ca] mb-6">
              <div className="flex justify-between">
                <span>Architecture Base:</span>
                <span className="font-medium text-white">{projectLabels[projectType]}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Add-ons:</span>
                <span className="font-medium text-white">{selectedModules.length} Modules</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Duration:</span>
                <span className="font-medium text-sky-400 flex items-center gap-1 font-mono-code">
                  <Clock className="w-3 h-3" />
                  {estimatedDays}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Milestone Billing:</span>
                <span className="font-mono-code text-white">40% / 30% / 30%</span>
              </div>
            </div>

            <button
              onClick={handleBook}
              className="w-full h-13 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Lock This Scope &amp; Book Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
