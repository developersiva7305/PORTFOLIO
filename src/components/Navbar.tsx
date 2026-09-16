import { useState, useEffect } from 'react';
import { Menu, X, Command, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';
import { AppearanceControl } from './AppearanceControl';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar = ({ onOpenCommandPalette }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[1px] shadow-[0_0_20px_rgba(99,102,241,0.35)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all">
              <div className="w-full h-full bg-[#090B13] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-300 via-white to-sky-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  SN
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                {PROFILE_DATA.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 hidden sm:block">
                AI + Industrial Automation
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Geist Sans 500) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0D101C]/80 border border-white/[0.06] backdrop-blur-md shadow-inner">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-[-0.01em] transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-indigo-600/30 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 rounded-full bg-indigo-400"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Desktop Social Shortcuts */}
            <div className="hidden sm:flex items-center gap-1 mr-0.5">
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-white/[0.05] rounded-xl border border-transparent hover:border-blue-500/30 transition-all cursor-pointer"
                title="Siva's LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-purple-400 hover:bg-white/[0.05] rounded-xl border border-transparent hover:border-purple-500/30 transition-all cursor-pointer"
                title="Siva's GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Appearance Theme Selector Option */}
            <AppearanceControl />

            {/* Command palette quick button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-[#101424] hover:bg-[#151B30] border border-white/[0.08] hover:border-indigo-500/40 rounded-xl transition-all shadow-sm group cursor-pointer"
              title="Search & Quick Navigation"
            >
              <Command className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[11px] text-slate-400">Ctrl+K</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.02em] text-white rounded-xl overflow-hidden group shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 transition-all duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Let's Talk
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-[#0F1322] border border-white/[0.08] rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/80 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-2">
            <div className="p-3 mb-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono text-indigo-200">{PROFILE_DATA.availability}</span>
            </div>

            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:text-white hover:bg-indigo-600/20 border border-transparent hover:border-indigo-500/30 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-xs font-mono">→</span>
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-sm text-indigo-300 bg-[#121626] border border-indigo-500/30 rounded-xl"
            >
              <Command className="w-4 h-4 text-indigo-400" />
              <span>Open Quick Search (Ctrl+K)</span>
            </button>
          </div>

          {/* Social Links at Mobile Menu Bottom */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                aria-label="Email Siva"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Chennai, India</span>
          </div>
        </div>
      )}
    </>
  );
};
