import { useState } from 'react';
import { FolderGit2, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';
import type { ProjectItem } from '../data/profile';
import { ProjectModal } from './ProjectModal';
import { CompanyIntelMockup, DocReaderMockup, AiAnalystMockup, AgentOrchestratorMockup, IotAcMockup, WaterControlMockup } from './ProjectMockups';

interface ProjectsSectionProps {
  selectedProjectId?: string | null;
}

export const ProjectsSection = ({ selectedProjectId: _selectedProjectId }: ProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    'All',
    'AI / GenAI',
    'AI Agents',
    'Automation',
    'PLC',
    'IoT',
    'Software'
  ];

  const filteredProjects = PROFILE_DATA.projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Automation') {
      return project.category === 'Automation' || project.category === 'PLC' || project.category === 'IoT';
    }
    return project.category === activeFilter || project.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase());
  });

  const renderCardPreview = (type: string) => {
    switch (type) {
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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 / SELECTED PROJECTS & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
              Featured Engineering & AI Systems
            </h2>
            <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
              Production architectures combining LLM intelligence, autonomous agents, RAG knowledge retrieval, and industrial PLC hardware control.
            </p>
          </div>

          <div className="text-xs font-mono tracking-[0.03em] text-slate-400 bg-[#0E1222] px-4 py-2 rounded-xl border border-white/[0.08] shrink-0">
            SHOWING <span className="text-indigo-400 font-bold">{filteredProjects.length}</span> OF {PROFILE_DATA.projects.length} SYSTEMS
          </div>
        </div>

        {/* Filter Tabs (Geist Mono 500) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterOptions.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-[0.04em] uppercase transition-all whitespace-nowrap border shrink-0 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                  : 'bg-[#0E1220] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const projectNum = `0${index + 1}`.slice(-2);
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Header & Preview */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Top Bar: Project Number + Category + Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-indigo-400 tracking-[0.04em] px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">
                        {projectNum}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.05em] px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 font-semibold">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-sky-500/40 transition-colors"
                        title="Live Demo"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.03em] group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400 mt-1 tracking-[0.02em]">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3 font-normal font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Embedded Interactive Mockup Snippet */}
                  <div className="pt-2">
                    {renderCardPreview(project.mockupType)}
                  </div>

                  {/* Technology Tags (Geist Mono 500, uppercase) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 6).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium tracking-[0.04em] uppercase px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-500">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions (Geist Sans 600 + Letter Spacing 0.02em) */}
                <div className="px-6 sm:px-7 py-4 bg-[#080B14] border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold tracking-[0.02em] text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono tracking-[0.03em] uppercase text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
