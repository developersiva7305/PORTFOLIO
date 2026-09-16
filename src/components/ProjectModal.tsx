import { X, ExternalLink, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../data/profile';
import { CompanyIntelMockup, DocReaderMockup, AiAnalystMockup, AgentOrchestratorMockup, IotAcMockup, WaterControlMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const renderMockup = () => {
    switch (project.mockupType) {
      case 'company-intel':
        return <CompanyIntelMockup />;
      case 'doc-reader':
        return <DocReaderMockup />;
      case 'ai-analyst':
        return <AiAnalystMockup />;
      case 'ai-orchestrator':
        return <AgentOrchestratorMockup />;
      case 'iot-ac':
        return <IotAcMockup />;
      case 'water-plc':
        return <WaterControlMockup />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#0A0D18] border border-indigo-500/30 rounded-3xl shadow-2xl overflow-y-auto text-slate-200 relative my-auto font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-[#0C1020]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-[0.05em] px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-semibold">
              {project.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close modal (Esc)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] font-sans">
              {project.title}
            </h2>
            <p className="text-indigo-400 font-mono text-xs sm:text-sm mt-1 tracking-[0.02em]">
              {project.tagline}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mt-3 font-sans font-normal">
              {project.description}
            </p>
          </div>

          {/* Interactive UI Mockup Showcase */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 flex items-center justify-between">
              <span>Interactive System Mockup & Architecture Preview</span>
              <span className="text-indigo-400 text-[10px]">Real-time Simulation</span>
            </div>
            {renderMockup()}
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-[#0E1222] border border-white/[0.06] space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.05em] text-rose-400 font-semibold">
                01. The Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E1222] border border-indigo-500/20 space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.05em] text-emerald-400 font-semibold">
                02. Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Flow & Key Features */}
          <div className="p-6 rounded-3xl bg-[#0F1326] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold uppercase tracking-[0.04em] text-white font-mono">
                System Topology & Pipeline
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {project.architecture.description}
            </p>
            
            {/* Step badges (Geist Mono 500) */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {project.architecture.flow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs font-mono text-indigo-300 font-medium tracking-[0.02em]">
                    {step}
                  </span>
                  {idx < project.architecture.flow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400">
              Key Engineering Features:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0C101E] border border-white/[0.04] flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role / Specific Contribution from CV */}
          <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-1.5 font-sans">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-indigo-400 font-semibold">
              Verified Technical Contribution:
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Technology Tags Stack (Geist Mono 500) */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400">
              Integrated Technology Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono font-medium tracking-[0.03em] uppercase text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons (Geist Sans 600 + Letter Spacing 0.02em) */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121626] hover:bg-[#182034] text-white font-semibold text-xs tracking-[0.02em] uppercase border border-white/10 hover:border-purple-500/40 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>GITHUB REPOSITORY</span>
              </a>

              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-semibold text-xs tracking-[0.02em] uppercase shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all"
              >
                <span>LIVE DEMO PREVIEW</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 uppercase tracking-[0.03em]">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED PRODUCTION CODEBASE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
