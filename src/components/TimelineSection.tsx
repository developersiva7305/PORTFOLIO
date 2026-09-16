import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const TimelineSection = () => {
  const { experience, education } = PROFILE_DATA;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 / INDUSTRIAL EXPERIENCE & ACADEMIC MERIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            Experience & Education
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
            Hands-on industrial engineering internships, port infrastructure training, and top-tier academic performance in Electronics & Communication Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span>Industrial Engineering Experience</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 before:via-slate-800 before:to-transparent">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-10 group"
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-2.5 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-[#07090E] border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-[0_0_10px_rgba(99,102,241,0.6)]" />

                  <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-[-0.02em] group-hover:text-indigo-200 transition-colors font-sans">
                          {exp.company}
                        </h3>
                        <div className="text-xs font-mono font-medium text-indigo-400 mt-0.5 tracking-[0.02em]">
                          {exp.role}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-1.5 text-slate-300 tracking-[0.02em]">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5 tracking-[0.02em]">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <div className="space-y-2 font-sans font-normal">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/80 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies (Geist Mono 500) */}
                    <div className="pt-2 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono font-medium tracking-[0.03em] uppercase px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Academic Honors (5 cols) */}
          <div id="education" className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Academic Foundation</span>
            </div>

            {/* Education Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141930] to-[#0A0D18] border border-indigo-500/30 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.06em] text-indigo-400 font-semibold">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-[-0.02em] mt-1 font-sans">
                    {education.institution}
                  </h3>
                  <div className="text-sm text-slate-300 font-normal mt-1 font-sans">
                    {education.degree}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              {/* CGPA Banner */}
              <div className="p-4 rounded-2xl bg-[#080B14] border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-400">
                    Cumulative Grade Point Average
                  </div>
                  <div className="text-2xl font-black text-white mt-0.5 flex items-baseline gap-1.5 font-mono">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                      {education.cgpa}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Verified Score</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-[0.04em]">
                  Top Tier
                </div>
              </div>

              {/* Academic Topper Badges with exact years */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Semester Merit Distinctions:</span>
                </div>
                <div className="space-y-2">
                  {education.honors.map((honor, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs font-mono text-amber-200 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-amber-300 tracking-[0.02em]">{honor.title}</span>
                        <div className="text-[10px] text-slate-400 mt-0.5 font-sans">{honor.detail}</div>
                      </div>
                      <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                        {honor.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline duration */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono tracking-[0.03em] text-slate-400">
                <span>DURATION: {education.period}</span>
                <span>CHENNAI, INDIA</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
