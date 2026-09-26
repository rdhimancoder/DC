import React from 'react';
import { Zap, GraduationCap, Building2, ExternalLink } from 'lucide-react';

interface SocialProofProps {
  onSelectProject: (projectId: string) => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onSelectProject }) => {
  const clients = [
    {
      id: 'sakshit-electronics',
      name: 'Sakshit Electronics & Library',
      subtitle: 'Haryana · Retail ERP & POS',
      icon: Zap,
    },
    {
      id: 'bright-eyes-welfare',
      name: 'Bright Eyes Welfare Education Society',
      subtitle: 'Delhi NCR · Educational Foundation',
      icon: GraduationCap,
    },
    {
      id: 'rural-urban-skill',
      name: 'Rural Urban Skill Development Institute',
      subtitle: 'National · 28 Skill Center Branches',
      icon: Building2,
    },
  ];

  return (
    <section className="py-10 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-6">
        <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] font-medium">
          TRUSTED BY VISIONARY INSTITUTIONS &amp; ENTERPRISES
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {clients.map((client) => {
          const Icon = client.icon;
          return (
            <button
              key={client.id}
              onClick={() => onSelectProject(client.id)}
              className="p-4 md:p-5 rounded-xl bg-[#161616]/50 border border-white/5 hover:border-white/20 backdrop-blur-[20px] flex items-center justify-center gap-3 text-center group cursor-pointer transition-all hover:bg-[#201f1f]/80 hover:scale-[1.01]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#222222] flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                <Icon className="w-5 h-5 text-sky-400" />
              </div>
              <div className="text-left">
                <span className="font-semibold text-sm sm:text-base text-[#e5e2e1] group-hover:text-white transition-colors block">
                  {client.name}
                </span>
                <span className="text-xs text-[#8f9194] block">
                  {client.subtitle}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/80 transition-colors ml-auto hidden sm:block" />
            </button>
          );
        })}
      </div>
    </section>
  );
};
