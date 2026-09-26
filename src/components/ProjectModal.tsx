import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Activity, Sparkles, Building, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#131313] border border-white/20 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.8)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono-code text-[#c5c6ca] uppercase tracking-wider">
              {project.category} · {project.liveStatus}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-[#c5c6ca] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Main Title & Client */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-sm text-[#8f9194]">
              <span className="text-sky-400 font-medium">{project.description}</span>
              <span>·</span>
              <span>Led by {project.clientRole}</span>
            </div>
          </div>

          {/* Project Screenshot / Hero Image */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#080808] relative group max-h-[400px]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#1c1b1b] border border-white/5">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <span className="block text-lg sm:text-2xl font-bold text-white font-mono-code tabular-nums">
                  {metric.value}
                </span>
                <span className="block text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Project Overview &amp; Architecture</span>
            </h3>
            <p className="text-sm text-[#c5c6ca] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Core Engineered Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#161616] border border-white/5 text-xs text-[#e5e2e1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-2 font-medium">
              Production Technologies Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded bg-[#201f1f] border border-white/10 text-xs font-mono-code text-[#c5c6ca]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#161616] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-[#8f9194] hover:text-white transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e0e2e6] to-white text-[#191c1f] text-sm font-semibold hover:opacity-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2"
          >
            <span>Request Similar ERP / Web Build</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
