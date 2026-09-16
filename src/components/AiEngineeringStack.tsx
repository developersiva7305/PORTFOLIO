import { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, Code, Layers, ChevronRight, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const AiEngineeringStack = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const steps = PROFILE_DATA.aiStackFlow;

  // Auto-simulation step runner
  useEffect(() => {
    let timer: number;
    if (isSimulating) {
      timer = window.setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length) {
            setIsSimulating(false);
            return 1;
          }
          return prev + 1;
        });
      }, 1400);
    }
    return () => clearInterval(timer);
  }, [isSimulating, steps.length]);

  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="ai-stack" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>06 / INTERACTIVE KNOWLEDGE MAP & EXECUTION TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
              AI Engineering Stack
            </h2>
            <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
              End-to-end execution flow of production Generative AI applications—from user ingress and prompt contextualization to autonomous agent loops and database persistence.
            </p>
          </div>

          {/* Simulation Controls (Geist Mono 500) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveStep(1);
                setIsSimulating(true);
              }}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-mono font-medium tracking-[0.03em] uppercase transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)] disabled:opacity-50 cursor-pointer"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'SIMULATING FLOW...' : 'SIMULATE LIVE FLOW'}</span>
            </button>

            <button
              onClick={() => {
                setIsSimulating(false);
                setActiveStep(1);
              }}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Reset to Step 1"
              aria-label="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Flow Column (9 Interactive Nodes) */}
          <div className="lg:col-span-6 space-y-2 relative">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-4 flex items-center justify-between px-1">
              <span>9-Stage Execution Pipeline</span>
              <span className="text-indigo-400">Select node to inspect</span>
            </div>

            {steps.map((node) => {
              const isActive = activeStep === node.step;
              const isPassed = activeStep > node.step;

              return (
                <div key={node.step} className="relative">
                  <div
                    onClick={() => {
                      setIsSimulating(false);
                      setActiveStep(node.step);
                    }}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-950/90 via-[#151B32] to-[#0E1222] border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.25)] scale-[1.02]'
                        : isPassed
                        ? 'bg-[#0B0E1B] border-indigo-500/20 text-slate-300'
                        : 'bg-[#090C16] border-white/[0.05] text-slate-400 hover:border-white/15 hover:bg-[#0E1222]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.8)]'
                            : isPassed
                            ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/30'
                            : 'bg-slate-900 text-slate-500 border border-white/5'
                        }`}
                      >
                        {isPassed ? <CheckCircle className="w-4 h-4" /> : `0${node.step}`}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-white tracking-[-0.01em] truncate font-sans">
                            {node.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-black/40 text-indigo-300 border border-white/5 hidden sm:inline uppercase">
                            {node.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate font-sans">
                          {node.subtitle}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-indigo-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Inspection Panel (Detail View) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111628] to-[#0A0D18] border border-indigo-500/30 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 font-mono font-bold text-sm flex items-center justify-center">
                    0{currentStepData.step}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.06em] text-indigo-400 font-semibold">
                      Stage {currentStepData.step} / {steps.length} · {currentStepData.category}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-[-0.02em] font-sans">
                      {currentStepData.title}
                    </h3>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-500/30">
                  ACTIVE INSPECT
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
                {currentStepData.description}
              </p>

              {/* Technical Architecture Specs */}
              <div className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.05em] text-indigo-400 flex items-center gap-2 font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Technical Execution Details</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {currentStepData.technicalDetails}
                </p>
              </div>

              {/* Payload / Code Box (Geist Mono 400) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 uppercase tracking-[0.04em]">
                    <Code className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Sample Payload & Schema:</span>
                  </div>
                  <span className="text-[10px] text-slate-500">JSON / PROTO</span>
                </div>

                <pre className="p-4 rounded-2xl bg-[#05070D] border border-white/[0.08] text-[11px] font-mono text-indigo-200 overflow-x-auto leading-relaxed shadow-inner">
                  <code>{currentStepData.samplePayload}</code>
                </pre>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
