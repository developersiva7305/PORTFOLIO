import { Sparkles, Cpu, Code2, CheckCircle2, Award, Zap, Languages, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';

export const About = () => {
  const { about, languages, summary } = PROFILE_DATA;

  const pillarCards = [
    {
      icon: Cpu,
      title: '01. Engineering',
      desc: 'ECE fundamentals, sensor physics, analog circuits, and instrumentation telemetry (9.23 CGPA).',
      accent: 'text-blue-400 border-blue-500/20 bg-blue-950/20'
    },
    {
      icon: Zap,
      title: '02. Automation',
      desc: 'PLCs (Siemens, Delta, ABB, AB, Omron, Mitsubishi), Ladder Logic, FBD, SCADA, VFDs, and PID control.',
      accent: 'text-indigo-400 border-indigo-500/20 bg-indigo-950/20'
    },
    {
      icon: Code2,
      title: '03. Software',
      desc: 'Python backends, FastAPI REST pipelines, modern React/TypeScript frontends, SQL, and schemas.',
      accent: 'text-sky-400 border-sky-500/20 bg-sky-950/20'
    },
    {
      icon: Sparkles,
      title: '04. Generative AI',
      desc: 'LLM prompt engineering, RAG pipelines, autonomous agent workflows, and AI analytics.',
      accent: 'text-purple-400 border-purple-500/20 bg-purple-950/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090B14]/80 border-t border-b border-white/[0.06]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / PROFILE & TECHNICAL PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            {about.heading}
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
            {about.subheading}
          </p>
        </div>

        {/* Two-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Executive Vision (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Portrait Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#12162A] via-[#0E1220] to-[#0A0D18] border border-indigo-500/25 shadow-2xl space-y-4 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-black/60 border border-white/10 shadow-inner">
                <img
                  src={PROFILE_DATA.avatar}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B14] via-transparent to-transparent pointer-events-none" />

                {/* Floating status tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white tracking-tight font-sans">Siva N</div>
                    <div className="text-[10px] font-mono text-indigo-300 tracking-[0.02em]">ECE Grad · 9.23 CGPA (Topper)</div>
                  </div>
                  <a
                    href={PROFILE_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-blue-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono tracking-[0.02em]"
                    title="Connect on LinkedIn"
                    aria-label="Connect on LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>

              {/* Verified Credentials Pills (Geist Mono 500) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-left">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.04em]">Institution</div>
                  <div className="text-xs font-semibold text-slate-200 truncate mt-0.5 font-sans">Jerusalem College of Eng.</div>
                </div>
                <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-left">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.04em]">Honors</div>
                  <div className="text-xs font-semibold text-amber-300 truncate mt-0.5 font-sans">3x Semester Topper</div>
                </div>
              </div>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono font-medium tracking-[0.03em] flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN PROFILE</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-mono font-medium tracking-[0.03em] flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GITHUB</span>
                </a>
              </div>
            </div>

            {/* Languages Card from CV */}
            <div className="p-5 rounded-2xl bg-[#0D1120] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-300 font-bold flex items-center gap-2">
                  <Languages className="w-4 h-4 text-indigo-400" />
                  <span>Languages & Communication</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.03em]">CV Verified</span>
              </div>
              <div className="space-y-2">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.04] flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-white font-sans">{lang.language}</span>
                      {lang.note && (
                        <span className="text-[10px] text-slate-400 ml-2 font-mono hidden sm:inline">({lang.note})</span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-500/20">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Narrative, Statement & Quad-Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Prominent Lead Statement Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#12162A] to-[#0A0D18] border border-indigo-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shrink-0 mt-1">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-[-0.02em] font-sans">
                    "{about.statement}"
                  </h3>
                  <p className="text-xs font-mono text-indigo-300/80 mt-2 tracking-[0.02em]">
                    — Siva N · ECE Graduate & Intelligent Systems Builder · Chennai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Summary Card */}
            <div className="p-5 rounded-2xl bg-[#0D1120] border border-white/[0.08] text-sm text-slate-300 leading-relaxed space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.05em] text-indigo-400 font-semibold flex items-center gap-1.5">
                <span>Executive Summary</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {summary}
              </p>
            </div>

            {/* Structured narrative paragraphs (Geist Sans 400 + Line height 1.65) */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-sans font-normal">
              {about.description.map((paragraph, idx) => (
                <p key={idx} className="border-l-2 border-slate-800 pl-4 hover:border-indigo-500/50 transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Matrix (Geist Mono for Values) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#0E1222] border border-white/[0.08] hover:border-indigo-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200 mt-1 font-sans">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Quad-Stack Advantage Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1324] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-[0.04em] text-white font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  {about.coreAdvantage.title}
                </h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 uppercase tracking-[0.03em]">
                  Differentiator
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                {about.coreAdvantage.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {about.coreAdvantage.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.04] text-xs text-slate-300 font-sans"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Pillars Breakdown Cards */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 px-1">
                Domain Architecture Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pillarCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border ${card.accent} transition-all hover:scale-[1.01] flex items-start gap-2.5`}
                    >
                      <div className="p-2 rounded-lg bg-black/40 border border-white/10 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-[0.04em] font-mono">
                          {card.title}
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
