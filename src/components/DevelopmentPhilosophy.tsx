import { Compass, Cpu, Code2, RefreshCw } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const DevelopmentPhilosophy = () => {
  const { philosophy } = PROFILE_DATA;

  const icons = [Compass, Cpu, Code2, RefreshCw];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>06 / SYSTEM DESIGN LIFECYCLE & DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            How I Build
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
            A systematic four-phase lifecycle ensuring physical and software systems are architected with first-principles clarity, rigorous integration, and continuous telemetry feedback.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((step, idx) => {
            const Icon = icons[idx] || Compass;

            return (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Number Backdrop (Geist Mono) */}
                <div className="absolute -top-3 -right-2 text-7xl font-black font-mono text-white/[0.03] select-none pointer-events-none group-hover:text-indigo-500/[0.08] transition-colors">
                  {step.number}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-[0.05em] text-indigo-400 uppercase">
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-[-0.02em] group-hover:text-indigo-200 transition-colors font-sans">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-300/80 mt-1 tracking-[0.02em]">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed font-sans font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] text-[10px] font-mono tracking-[0.03em] uppercase text-slate-500">
                  Step {step.number} of 04 · Structured Iteration
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
