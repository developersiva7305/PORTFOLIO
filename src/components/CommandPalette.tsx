import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, ArrowRight, FolderGit2, Cpu, Sparkles, GraduationCap, Briefcase, Mail, X, Check, Phone, Palette } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';
import { THEME_OPTIONS as THEMES, type ThemeMode } from '../types/theme';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const CommandPalette = ({ isOpen, onClose, onSelectProject }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    handleClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const applyTheme = (theme: ThemeMode) => {
    localStorage.setItem('siva_portfolio_theme', theme);
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('light');
    }
    handleClose();
  };

  const q = query.toLowerCase().trim();

  const sections = [
    { name: 'About Siva N', id: 'about', icon: Sparkles, category: 'Navigation', hint: 'Engineering Meets Intelligence' },
    { name: 'Selected Projects', id: 'projects', icon: FolderGit2, category: 'Navigation', hint: 'AI & Industrial Systems' },
    { name: 'Technical Skills Matrix', id: 'skills', icon: Cpu, category: 'Navigation', hint: 'AI, Automation, Languages' },
    { name: 'Experience & Internships', id: 'experience', icon: Briefcase, category: 'Timeline', hint: 'JTech Instruments, Chennai Port' },
    { name: 'Education & CGPA (9.23)', id: 'education', icon: GraduationCap, category: 'Credentials', hint: 'Jerusalem College of Engineering' },
    { name: 'Achievements & Recognition', id: 'achievements', icon: GraduationCap, category: 'Credentials', hint: 'IIT PALS, Semester Toppers' },
    { name: 'How I Build (Philosophy)', id: 'philosophy', icon: Sparkles, category: 'Architecture', hint: 'System Design Lifecycle' },
    { name: 'Contact & Connect', id: 'contact', icon: Mail, category: 'Contact', hint: '+91 7305852492 / Email' },
  ].filter(item => !q || item.name.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q));

  const filteredProjects = PROFILE_DATA.projects.filter(
    p => !q || p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)) || p.categoryLabel.toLowerCase().includes(q)
  );

  const filteredThemes = THEMES.filter(
    t => !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || 'theme appearance mode'.includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0D101B] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#121624]/60">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sections, projects, appearance themes, or commands..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-400 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Close (Esc)"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content list */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40 font-sans">
          {/* Quick Actions */}
          <div className="py-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.05em] text-slate-400 px-3 pb-1.5">
              Quick Actions
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 px-1">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-indigo-950/40 text-slate-300 hover:text-indigo-300 border border-transparent hover:border-indigo-800/40 transition-all text-left cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                <span className="truncate font-mono">{copiedEmail ? 'COPIED!' : 'Copy Email'}</span>
              </button>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-emerald-950/40 text-slate-300 hover:text-emerald-300 border border-transparent hover:border-emerald-800/40 transition-all text-left cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                <span className="truncate font-mono">{copiedPhone ? 'COPIED!' : 'Copy Phone'}</span>
              </button>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-blue-950/40 text-slate-300 hover:text-blue-300 border border-transparent hover:border-blue-800/40 transition-all font-mono"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-purple-950/40 text-slate-300 hover:text-purple-300 border border-transparent hover:border-purple-800/40 transition-all font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
            </div>
          </div>

          {/* Appearance / Theme Options in Command Palette */}
          {filteredThemes.length > 0 && (
            <div className="py-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.05em] text-slate-400 px-3 pb-1.5 flex justify-between">
                <span>Appearance & Themes</span>
                <span className="text-[10px] text-indigo-400 font-mono">Select Theme</span>
              </div>
              <div className="space-y-1">
                {filteredThemes.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left rounded-xl hover:bg-indigo-600/10 hover:border-indigo-500/30 border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                        <Palette className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-indigo-300 truncate font-sans">
                          Appearance: {theme.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate font-sans">
                          {theme.desc}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 group-hover:text-indigo-300 uppercase">
                      {theme.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="py-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.05em] text-slate-400 px-3 pb-1.5 flex justify-between">
                <span>Projects ({filteredProjects.length})</span>
                <span className="text-[10px] text-indigo-400 font-mono">Inspect</span>
              </div>
              <div className="space-y-1">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      if (onSelectProject) onSelectProject(proj.id);
                      navigateTo('projects');
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-left rounded-xl hover:bg-indigo-600/10 hover:border-indigo-500/30 border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                        <FolderGit2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-indigo-300 truncate font-sans">
                          {proj.title}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate font-sans">
                          {proj.categoryLabel}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Sections */}
          {sections.length > 0 && (
            <div className="py-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.05em] text-slate-400 px-3 pb-1.5">
                Navigation Sections
              </div>
              <div className="space-y-1">
                {sections.map(sec => {
                  const Icon = sec.icon;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => navigateTo(sec.id)}
                      className="w-full flex items-center justify-between px-3 py-2 text-left rounded-xl hover:bg-slate-800/60 hover:border-slate-700/60 border border-transparent transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 border border-white/5 group-hover:text-white transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate font-sans">
                            {sec.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate font-sans">
                            {sec.hint}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.03em] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 shrink-0 ml-2">
                        {sec.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-[#090C16] text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>ESC to close</span>
          </div>
          <span className="text-indigo-400">GEIST SANS + MONO</span>
        </div>
      </div>
    </div>
  );
};
