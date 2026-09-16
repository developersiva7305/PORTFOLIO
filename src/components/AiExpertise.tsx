import { useState } from 'react';
import { Sparkles, Brain, Search, BarChart3, Code2, ArrowUpRight, CheckCircle2, Bot, Layers, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const AiExpertise = () => {
  const [activeTab, setActiveTab] = useState<string>('genai-llm');

  const categoryIcons: Record<string, any> = {
    'genai-llm': Brain,
    'rag-retrieval': Search,
    'ai-agents': Bot,
    'ai-analytics': BarChart3,
    'ai-app-dev': Code2,
  };

  return (
    <section id="ai-expertise" className="py-24 relative overflow-hidden bg-[#0A0D18] border-t border-b border-white/[0.06]">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Prominent Badge */}
        <div className="flex flex-col items-start mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-sky-500/20 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>02 / AI TECHNICAL DIRECTION & ENGINEERING KNOWLEDGE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
                AI & Generative AI Systems
              </h2>
              <p className="body-prose text-slate-400 text-sm max-w-2xl mt-2 font-normal leading-relaxed">
                Developing intelligent architectures across Large Language Models, autonomous agentic loops, enterprise RAG, and AI analytics pipelines.
              </p>
            </div>

            {/* Non-employment transparency tag (Geist Mono) */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono tracking-[0.03em] text-slate-300 flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span className="uppercase">KNOWLEDGE · ARCHITECTURE · EXPERIMENTS</span>
            </div>
          </div>
        </div>

        {/* 5-Category Navigation Tabs for Mobile & Desktop (Geist Mono 500) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {PROFILE_DATA.aiExpertise.map((domain) => {
            const Icon = categoryIcons[domain.id] || Brain;
            const isActive = activeTab === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs tracking-[0.04em] uppercase whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                    : 'bg-[#0E1220] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{domain.category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Active Category */}
        {(() => {
          const current = PROFILE_DATA.aiExpertise.find(e => e.id === activeTab) || PROFILE_DATA.aiExpertise[0];
          const Icon = categoryIcons[current.id] || Brain;

          return (
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12162A] via-[#0E1220] to-[#0A0D18] border border-indigo-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left info column */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-[0.06em] text-indigo-400 font-semibold">
                        {current.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] mt-0.5">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {current.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-[0.03em]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>STATUS: {current.status.toUpperCase()}</span>
                  </div>

                  {/* Tools Stack (Geist Mono 500) */}
                  <div className="pt-2">
                    <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-2">
                      Tools & Ecosystem:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono font-medium tracking-[0.04em] uppercase text-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right capabilities list */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Technical Capabilities & Workflows</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {current.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#090C16]/80 border border-white/[0.06] hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white font-sans">
                            {cap}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.04em] text-slate-400 group-hover:text-indigo-400 transition-colors">
                          0{i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 5-Card Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFILE_DATA.aiExpertise.map((item) => {
            const Icon = categoryIcons[item.id] || Brain;
            const isSelected = activeTab === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#151A30] border-indigo-400 shadow-[0_8px_25px_rgba(99,102,241,0.2)]'
                    : 'bg-[#0E1220]/70 border-white/[0.06] hover:border-white/15 hover:bg-[#121628]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.04em] text-slate-400 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-[-0.02em] mb-1.5 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono tracking-[0.03em] text-indigo-400">
                  <span>{item.capabilities.length} CAPABILITIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
