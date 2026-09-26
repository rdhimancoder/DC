import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Send, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialDetails?: {
    projectType?: string;
    modules?: string[];
    urgency?: string;
    estimatedCost?: string;
    tier?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Tailored Enterprise ERP Portal',
    budget: '₹50,000 - ₹1,00,000',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialDetails.tier || initialDetails.projectType || prev.projectType,
        notes: initialDetails.estimatedCost
          ? `Estimated Cost: ${initialDetails.estimatedCost}\nTimeline: ${initialDetails.urgency || ''}\nSelected Modules: ${initialDetails.modules?.join(', ') || ''}`
          : prev.notes,
      }));
    }
  }, [initialDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 text-center relative overflow-hidden" id="get-started">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-base sm:text-lg text-[#c5c6ca] max-w-2xl mx-auto mb-10 leading-relaxed">
          Let’s engineer a high-converting web presence or custom ERP system that propels your brand ahead of the competition.
        </p>

        {/* Quick Action Channels */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="px-6 sm:px-8 h-14 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] text-base font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="mailto:hello@dhimancodes.com"
            className="px-6 sm:px-8 h-14 rounded-xl bg-[#161616]/80 backdrop-blur-[20px] border border-white/10 text-[#e5e2e1] hover:text-white text-base font-semibold flex items-center justify-center gap-2 hover:bg-[#222222] transition-all cursor-pointer"
          >
            <Mail className="w-5 h-5 text-sky-400" />
            <span>Send an Email</span>
          </a>
        </div>

        {/* Lead Capture Box */}
        <div className="text-left bg-[#161616]/80 p-6 sm:p-10 rounded-2xl border border-white/15 backdrop-blur-[40px] shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Proposal Request Received</h3>
              <p className="text-sm text-[#c5c6ca] max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our lead architect will review your project details and reach out within 4 business hours via WhatsApp or Email.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-[#222222] text-xs font-mono-code text-[#c5c6ca] hover:text-white border border-white/10 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono-code uppercase tracking-wider text-sky-400 font-semibold">
                  Direct Engineering Consultation Request
                </span>
                <span className="text-[11px] text-[#8f9194]">
                  Response within 4 Hours
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dixit Sharma"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Sakshit Electronics"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Tailored Enterprise ERP Portal">Tailored Enterprise ERP Portal</option>
                    <option value="Full-Stack Custom Web Application">Full-Stack Custom Web Application</option>
                    <option value="High-Speed Landing Page">High-Speed Landing Page</option>
                    <option value="Educational Institute / LMS System">Educational Institute / LMS System</option>
                    <option value="Starter Tier (₹10,000)">Starter Tier (₹10,000)</option>
                    <option value="Professional Tier (₹55,000)">Professional Tier (₹55,000)</option>
                    <option value="Enterprise Tier (₹100,000+)">Enterprise Tier (₹100,000+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="₹10,000 - ₹30,000">₹10,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
                    <option value="₹60,000 - ₹1,20,000">₹60,000 - ₹1,20,000</option>
                    <option value="₹1,20,000+">₹1,20,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#8f9194] mb-1.5 font-medium">
                  Project Requirements &amp; Goals
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe your current bottleneck, target user base, features needed..."
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-13 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] text-base font-semibold flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Proposal Request...</span>
                ) : (
                  <>
                    <span>Submit &amp; Schedule Architecture Call</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
