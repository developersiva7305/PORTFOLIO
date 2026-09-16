import { useState } from 'react';
import { Cpu, Activity, Gauge, MonitorCheck, CloudLightning, Sparkles, Zap } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const IndustrialShowcase = () => {
  const [selectedNode, setSelectedNode] = useState<number>(2);

  const flowNodes = PROFILE_DATA.industrialFlow;

  const icons = [Gauge, Cpu, Zap, Activity, MonitorCheck, CloudLightning, Sparkles];

  return (
    <section id="industrial-showcase" className="py-24 relative overflow-hidden bg-[#090C16] border-t border-b border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>07 / INDUSTRIAL FIELD TELEMETRY & HARDWARE INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            Industrial Automation Showcase
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-3xl font-normal leading-relaxed">
            Tracing physical instrumentation telemetry through deterministic PLC scan loops, supervisory SCADA interfaces, and upward into cloud-native AI optimization.
          </p>
        </div>

        {/* Vision Statement Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#101528] to-purple-950/40 border border-blue-500/30 mb-14 relative overflow-hidden shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0 mt-1">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.06em] text-blue-300 font-semibold">
                Strategic Engineering Thesis
              </div>
              <blockquote className="text-lg sm:text-xl font-bold text-white leading-relaxed font-sans tracking-[-0.02em]">
                "My long-term technical direction is at the intersection of intelligent software and real-world systems."
              </blockquote>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Bridging hard real-time determinism (IEC 61131-3, PLCs, industrial bus networks) with high-level cognitive AI reasoning.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Stage Horizontal / Grid Pipeline Visualizer */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 flex items-center justify-between px-1">
            <span>Deterministic Field-to-Intelligence Flow</span>
            <span className="text-blue-400">Select node to inspect protocols</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
            {flowNodes.map((item, idx) => {
              const Icon = icons[idx] || Cpu;
              const isSelected = selectedNode === item.step;

              return (
                <div
                  key={item.step}
                  onClick={() => setSelectedNode(item.step)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#16203D] to-[#0D1224] border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.03]'
                      : 'bg-[#0B0E1B] border-white/[0.06] hover:border-white/20 hover:bg-[#0F1426]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-xl border ${
                        isSelected ? 'bg-blue-600/30 border-blue-400 text-blue-300' : 'bg-slate-900 border-white/10 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        0{item.step}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-[0.05em] text-blue-400">
                      {item.category}
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5 leading-snug font-sans">
                      {item.node}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/[0.05] text-[9px] font-mono text-slate-400 truncate">
                    {item.protocols}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Expanded View */}
        {(() => {
          const active = flowNodes.find((n) => n.step === selectedNode) || flowNodes[0];
          return (
            <div className="mt-6 p-6 rounded-2xl bg-[#0C1020] border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.06em] text-blue-400">
                  Stage 0{active.step}: {active.category} · {active.node}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                  {active.description}
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-blue-200 shrink-0">
                Protocols: {active.protocols}
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
