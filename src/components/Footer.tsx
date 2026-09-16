import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] text-slate-400 text-xs py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center font-bold text-white text-xs font-mono">
                  SN
                </div>
              </div>
              <span className="font-bold text-base text-white tracking-tight font-sans">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              {PROFILE_DATA.role}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-indigo-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Chennai, India</span>
              </span>
              <a href={`tel:${PROFILE_DATA.socials.phoneRaw}`} className="text-slate-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{PROFILE_DATA.socials.phone}</span>
              </a>
            </div>
          </div>

          {/* Nav Quick Links (Geist Sans 500) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <div className="text-white font-mono font-bold uppercase tracking-[0.05em] text-[11px]">Overview</div>
              <ul className="space-y-1.5 text-slate-400 font-sans font-medium">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Siva</a></li>
                <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills & Tooling</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-mono font-bold uppercase tracking-[0.05em] text-[11px]">Systems</div>
              <ul className="space-y-1.5 text-slate-400 font-sans font-medium">
                <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a></li>
                <li><a href="#philosophy" className="hover:text-indigo-400 transition-colors">How I Build</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Get in Touch</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-mono font-bold uppercase tracking-[0.05em] text-[11px]">Credentials</div>
              <ul className="space-y-1.5 text-slate-400 font-sans font-medium">
                <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Experience & Internships</a></li>
                <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Education (9.23 CGPA)</a></li>
                <li><a href="#achievements" className="hover:text-indigo-400 transition-colors">IIT PALS Honors</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PROFILE_DATA.socials.phoneRaw}`}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-colors"
                title="Phone"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#11162A] hover:bg-[#182038] text-slate-300 hover:text-white border border-white/10 text-xs font-mono tracking-[0.02em] uppercase transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Siva N. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400 uppercase tracking-[0.03em]">
            <span>ENGINEERING + AUTOMATION + SOFTWARE + AI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
