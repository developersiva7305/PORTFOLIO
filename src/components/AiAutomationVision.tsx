import { useState } from 'react';
import { Sparkles, Layers, Cpu, Database, Brain, Bot, LayoutDashboard } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const AiAutomationVision = () => {
  const [activeTier, setActiveTier] = useState<string>('03');

  const tiers = PROFILE_DATA.visionArchitecture;

  const tierIcons: Record<string, any> = {
    '05': LayoutDashboard,
    '04': Bot,
    '03': Brain,
    '02': Database,
    '01': Cpu,
  };

  return (
    <section id="ai-vision" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold shadow-[0_0_15px_rgba(99,102,241,0.25)]">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>08 / THE QUAD-STACK DIFFERENTIATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            Where AI Meets Automation
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-3xl font-normal leading-relaxed">
            Modern industrial facilities generate vast streams of deterministic telemetry. By layering autonomous AI agents, retrieval-augmented memory, and LLM reasoning over PLC/SCADA loops, we unlock self-optimizing closed-loop operations.
          </p>
        </div>

        {/* 5-Tier Interactive Architecture Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Stacked Tier Stack (Top to Bottom: 05 Application down to 01 Industrial) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-2 flex items-center justify-between px-1">
              <span>5-Tier Autonomous Industrial AI Topology</span>
              <span className="text-indigo-400">Select tier to inspect</span>
            </div>

            {tiers.map((layer) => {
              const Icon = tierIcons[layer.tier] || Layers;
              const isSelected = activeTier === layer.tier;

              return (
                <div
                  key={layer.tier}
                  onClick={() => setActiveTier(layer.tier)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#141A32] via-[#0F1426] to-[#0A0D18] border-indigo-400 shadow-[0_8px_30px_rgba(99,102,241,0.25)] scale-[1.02]'
                      : 'bg-[#0A0D17]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0E1220]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-xl border"
                        style={{
                          backgroundColor: `${layer.accentColor}15`,
                          borderColor: `${layer.accentColor}40`,
                          color: layer.accentColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono tracking-[0.05em] font-bold" style={{ color: layer.accentColor }}>
                          TIER {layer.tier}
                        </div>
                        <h3 className="text-base font-bold text-white tracking-[-0.02em] font-sans">
                          {layer.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-400 uppercase tracking-[0.03em]">
                      {isSelected ? 'SELECTED' : 'INSPECT'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 ml-12 leading-relaxed font-sans font-normal">
                    {layer.role}
                  </p>

                  {/* Components chips (Geist Mono 500) */}
                  <div className="flex flex-wrap gap-1.5 ml-12 mt-3 pt-2 border-t border-white/[0.04]">
                    {layer.components.map((comp, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium tracking-[0.03em] uppercase px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/5"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Tier Deep-Dive Panel */}
          {(() => {
            const current = tiers.find((t) => t.tier === activeTier) || tiers[2];
            const Icon = tierIcons[current.tier] || Brain;

            return (
              <div className="lg:col-span-5 sticky top-28">
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111628] to-[#0A0D18] border border-indigo-500/30 shadow-2xl space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                    <div
                      className="p-3 rounded-2xl border"
                      style={{
                        backgroundColor: `${current.accentColor}20`,
                        borderColor: `${current.accentColor}50`,
                        color: current.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.06em] font-bold" style={{ color: current.accentColor }}>
                        Tier {current.tier} Architecture
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-[-0.02em] font-sans">
                        {current.name}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400">
                      Primary Architectural Role:
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-sans font-normal">
                      {current.role}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400">
                      Integrated Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.components.map((c, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-xl bg-[#070912] border border-white/10 text-xs font-mono font-medium tracking-[0.04em] uppercase text-indigo-200 shadow-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-2 font-sans">
                    <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Cross-disciplinary convergence: Physical sensor inputs feed cognitive agent loops with zero semantic loss.</span>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
