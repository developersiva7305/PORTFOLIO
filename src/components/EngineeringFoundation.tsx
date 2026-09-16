import { useState } from 'react';
import { Cpu, Gauge, Activity, Network, MonitorCheck, CloudLightning, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const EngineeringFoundation = () => {
  const [selectedId, setSelectedId] = useState<string>('industrial-automation');

  const iconMap: Record<string, any> = {
    Cpu,
    Gauge,
    Activity,
    Network,
    MonitorCheck,
    CloudLightning,
  };

  return (
    <section id="foundation" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 / CORE DISCIPLINARY HERITAGE & HARDWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
              My Engineering Foundation
            </h2>
            <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
              Hardware-grounded control systems, deterministic PLC logic, instrumentation calibration, and industrial networking.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/[0.08] text-xs font-mono tracking-[0.03em] text-slate-300 uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>IEC 61131-3 & INDUSTRIAL STANDARDS</span>
          </div>
        </div>

        {/* 6 Engineering Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.engineeringFoundation.map((item) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isSelected = selectedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#141930] to-[#0D1020] border-indigo-500/50 shadow-[0_10px_30px_rgba(99,102,241,0.15)] scale-[1.01]'
                    : 'bg-[#0D101C]/80 border-white/[0.07] hover:border-white/20 hover:bg-[#111526]'
                }`}
              >
                {/* Active corner glow */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/15 rounded-bl-full blur-lg pointer-events-none" />
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-indigo-400 group-hover:scale-105 group-hover:text-indigo-300 transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.05em] text-slate-400 px-2 py-1 rounded bg-black/40 border border-white/5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-[-0.02em] group-hover:text-indigo-200 transition-colors font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Skill Chips (Geist Mono 500) */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-[0.05em] text-slate-400 mb-2">
                    Core Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-mono font-medium tracking-[0.03em] uppercase px-2.5 py-1 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-indigo-950/60 border-indigo-500/30 text-indigo-200'
                            : 'bg-slate-900/60 border-white/[0.06] text-slate-300 group-hover:border-white/15'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
