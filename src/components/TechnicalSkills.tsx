import { useState } from 'react';
import { Search, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const TechnicalSkills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...PROFILE_DATA.skills.map(s => s.category)];

  const q = searchQuery.toLowerCase().trim();

  const filteredSkills = PROFILE_DATA.skills.map(category => {
    if (selectedCategory !== 'All' && category.category !== selectedCategory) {
      return null;
    }

    const filteredSubcategories = category.subcategories.map(sub => {
      const matchedItems = sub.items.filter(item =>
        !q || item.toLowerCase().includes(q) || sub.name.toLowerCase().includes(q) || category.category.toLowerCase().includes(q)
      );

      if (matchedItems.length === 0) return null;

      return {
        ...sub,
        items: matchedItems
      };
    }).filter(Boolean);

    if (filteredSubcategories.length === 0) return null;

    return {
      ...category,
      subcategories: filteredSubcategories
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0D18] border-t border-b border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 / TECHNICAL SKILLS MATRIX & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
              Technical Skills & Tooling
            </h2>
            <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
              Strictly verified engineering competencies across Generative AI stacks, industrial PLC control platforms, field communication buses, and modern web backends.
            </p>
          </div>

          {/* Search Filter (Geist Mono input) */}
          <div className="w-full lg:w-72 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#111628] border border-white/[0.08] focus-within:border-indigo-500/50 shadow-inner">
            <Search className="w-4 h-4 text-indigo-400 shrink-0" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none font-mono tracking-[0.02em]"
            />
          </div>
        </div>

        {/* Category Filter Chips (Geist Mono 500) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-[0.04em] uppercase transition-all whitespace-nowrap border shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600/40 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'bg-[#0E1220] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((category: any, idx: number) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <h3 className="text-xl font-bold text-white tracking-[-0.02em] flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  {category.category}
                </h3>
                <span className="text-[11px] font-mono tracking-[0.04em] text-slate-400 uppercase">
                  {category.subcategories.reduce((acc: number, sub: any) => acc + sub.items.length, 0)} ITEMS
                </span>
              </div>

              <div className="space-y-6">
                {category.subcategories.map((sub: any, sIdx: number) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-400 font-semibold flex items-center gap-1.5">
                      <span className="text-indigo-400">#</span>
                      <span>{sub.name}</span>
                    </div>

                    {/* Skill Pills (Geist Mono 500, uppercase) */}
                    <div className="flex flex-wrap gap-2">
                      {sub.items.map((skill: string, kIdx: number) => (
                        <div
                          key={kIdx}
                          className="px-3.5 py-1.5 rounded-xl bg-[#070912] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-950/20 text-xs font-mono font-medium tracking-[0.03em] uppercase text-slate-200 hover:text-white transition-all flex items-center gap-1.5 group cursor-default shadow-sm"
                        >
                          <CheckCircle2 className="w-3 h-3 text-indigo-400/60 group-hover:text-indigo-400 transition-colors shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competence Certification Footer Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#0D1120] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Engineering Discipline: Pure verified categorical taxonomy with zero fabricated numerical ratings.</span>
          </div>
          <div className="font-mono text-[11px] text-indigo-400 tracking-[0.03em] uppercase">
            ECE FOUNDATION + GENAI ARCHITECTURE
          </div>
        </div>

      </div>
    </section>
  );
};
