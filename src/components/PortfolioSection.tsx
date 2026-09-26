import React, { useState } from 'react';
import { Search, ExternalLink, ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'ERP & E-Commerce', 'Education ERP', 'Skill Development', 'Mission Portal', 'Academy LMS'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 w-full" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] tracking-tight">
            Proven Enterprise Impact
          </h2>
        </div>
        <p className="text-base text-[#c5c6ca] max-w-md">
          Explore our custom web applications and specialized ERP portals built for leading Indian organizations and visionary founders.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-[#191c1f] font-semibold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'bg-[#161616] text-[#c5c6ca] hover:text-white hover:bg-[#222222] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8f9194] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack or client..."
            className="w-full bg-[#161616] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#e5e2e1] placeholder-[#8f9194] focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="rounded-2xl bg-[#161616]/50 border border-white/10 hover:border-white/25 backdrop-blur-[40px] overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative bg-[#0a0a0a]">
                <img
                  alt={project.title}
                  src={project.image}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-[10px] border border-white/10 text-[11px] font-mono-code font-semibold text-white">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#050505]/80 backdrop-blur-[10px] border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#e5e2e1] group-hover:text-white transition-colors mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-sky-400 font-medium mb-4">
                  {project.description}
                </p>
                <p className="text-xs text-[#c5c6ca] line-clamp-2 leading-relaxed mb-4">
                  {project.fullOverview}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#222222] text-[10px] font-mono-code text-[#c5c6ca] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-mono-code text-[#8f9194] group-hover:text-white transition-colors flex items-center gap-1">
                Details &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-[#161616]/30 rounded-2xl border border-white/5">
          <p className="text-sm text-[#8f9194] mb-3">No projects matching your search filter.</p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-mono-code text-sky-400 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
};
