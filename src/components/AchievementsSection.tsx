import { Trophy, Award, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const AchievementsSection = () => {
  const { achievements, certifications } = PROFILE_DATA;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0A0D18] border-t border-b border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>05 / HONORS & PROFESSIONAL ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            Achievements & Recognition
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
            Verified academic excellence distinctions, national-level engineering competition milestones at IIT PALS, and specialized certifications from your CV.
          </p>
        </div>

        {/* Top Achievements Grid (3 Verified Milestones) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#12162B] to-[#0A0D18] border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold tracking-[0.04em] uppercase px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-mono uppercase tracking-[0.05em] text-amber-400 font-semibold">
                  {item.organization} · {item.year}
                </div>
                <h3 className="text-lg font-bold text-white tracking-[-0.02em] mt-1 group-hover:text-amber-200 transition-colors font-sans">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="tracking-[0.03em] uppercase">{item.type}</span>
                <span className="text-emerald-400 flex items-center gap-1 tracking-[0.03em]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED CV</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>Technical Certifications & Qualifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0E1222] border border-white/[0.08] hover:border-indigo-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-indigo-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-black/40 uppercase tracking-[0.03em]">
                      VERIFIED
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white tracking-[-0.01em] leading-snug font-sans">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-indigo-300 font-mono tracking-[0.02em] mt-1">
                    {cert.issuer}
                  </div>
                  {cert.levels && (
                    <div className="text-[10px] font-mono text-amber-300/90 mt-1.5 p-1.5 rounded-lg bg-amber-950/30 border border-amber-500/20 leading-snug">
                      Levels: {cert.levels}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/[0.04]">
                  {cert.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/30 text-slate-400 uppercase tracking-[0.02em]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
