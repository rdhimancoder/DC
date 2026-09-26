import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  onOpenProject: (projectId: string) => void;
  onBookCall: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenProject, onBookCall }) => {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 w-full" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono-code uppercase tracking-wider text-[#8f9194] mb-3 block font-semibold">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
          Hear what founders and directors have to say about our custom web and ERP solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => {
          const associatedProjectId = 
            t.id === 'test-1' ? 'sakshit-electronics' :
            t.id === 'test-2' ? 'bright-eyes-welfare' : 'rural-urban-skill';

          return (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#161616]/50 border border-white/10 hover:border-white/20 backdrop-blur-[40px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-white mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                  <span className="text-xs font-mono-code text-[#8f9194] ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#c5c6ca] leading-relaxed mb-6 font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Associated Project */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center font-bold text-white text-sm border border-white/10 shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    </h4>
                    <span className="text-xs text-[#8f9194] block leading-tight">
                      {t.role}
                    </span>
                    <span className="text-[11px] text-[#8f9194]/70 block mt-0.5">
                      {t.city}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenProject(associatedProjectId)}
                  className="mt-4 w-full py-2 px-3 rounded-lg bg-[#201f1f] hover:bg-[#2a2a2a] text-xs font-mono-code text-[#c5c6ca] hover:text-white transition-colors flex items-center justify-between group-hover:border-white/20 border border-white/5 cursor-pointer"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
