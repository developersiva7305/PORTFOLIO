import { useState } from 'react';
import { ArrowRight, Mail, Sparkles, Send, Check, Terminal, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';
import { HeroVisual } from './HeroVisual';
import { AnimatedBackground } from './AnimatedBackground';

export const Hero = () => {
  const [headlineMode, setHeadlineMode] = useState<'main' | 'alt'>('main');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Animated Telemetry Video Background */}
      <AnimatedBackground />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge: Availability & Location */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-mono font-medium tracking-[0.03em] text-indigo-200">
                  {PROFILE_DATA.availability}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono tracking-[0.03em] text-slate-400">
                <span>📍 Chennai, India</span>
              </div>

              <a
                href={`tel:${PROFILE_DATA.socials.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono tracking-[0.03em] text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{PROFILE_DATA.socials.phone}</span>
              </a>
            </div>

            {/* Role Header Badge (Geist Mono 500) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border-l-2 border-indigo-500 text-slate-300 font-mono text-[11px] sm:text-xs tracking-[0.04em] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>GENAI DEVELOPER · AI ENGINEER · AUTOMATION ENGINEER</span>
            </div>

            {/* Main Hero Headline (Geist Sans 800 + Responsive Clamp + Tight Line Height 0.98 - 1.02) */}
            <div className="space-y-2">
              <h1 className="hero-title-clamp text-white">
                {headlineMode === 'main' ? (
                  <>
                    Building Intelligent Systems <br className="hidden sm:inline" />
                    Across{' '}
                    <span className="gradient-text-accent">AI & Automation</span>
                  </>
                ) : (
                  <>
                    Building Intelligent Systems <br className="hidden sm:inline" />
                    That Connect{' '}
                    <span className="gradient-text-accent">AI, Software</span> &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                      Automation
                    </span>
                  </>
                )}
              </h1>

              {/* Headline switch subtle toggle */}
              <button
                onClick={() => setHeadlineMode(headlineMode === 'main' ? 'alt' : 'main')}
                className="text-[11px] font-mono tracking-[0.03em] text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-1 pt-1 cursor-pointer"
                title="Toggle alternative headline"
              >
                <Terminal className="w-3 h-3 text-indigo-400" />
                <span>Variant: [ {headlineMode === 'main' ? 'Core Headline' : 'Extended Stack'} ]</span>
              </button>
            </div>

            {/* Supporting Text (Geist Sans 400 + Line Height 1.65 + Max Width 700px) */}
            <p className="body-prose text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PROFILE_DATA.heroSubtext}
            </p>

            {/* Four-Pillar Capsule Line (Geist Mono) */}
            <div className="w-full pt-1">
              <div className="p-3 rounded-2xl bg-[#0D1120]/70 border border-white/[0.08] backdrop-blur-md flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-mono text-[11px] tracking-[0.04em] uppercase">THE COMBINATION:</span>
                {['Engineering', 'Automation', 'Software', 'AI'].map((pillar, idx) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-slate-200 font-medium font-mono text-xs tracking-[0.02em]"
                  >
                    <span className="text-indigo-400 font-bold">{`0${idx + 1}`}</span>
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs and Actions (Geist Sans 600 + Letter Spacing 0.02em) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full">
              {/* Primary CTA: View Work */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-semibold text-sm tracking-[0.02em] shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Let's Connect */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#111628] hover:bg-[#182038] text-slate-200 hover:text-white font-semibold text-sm tracking-[0.02em] border border-white/10 hover:border-indigo-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>LET'S CONNECT</span>
              </button>

              {/* GitHub Link Button */}
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-[#101424] hover:bg-[#161C32] text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all shadow-sm tracking-[0.02em] font-semibold text-xs"
                title="Explore GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span className="hidden sm:inline">GITHUB</span>
              </a>

              {/* LinkedIn Link Button */}
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-[#101424] hover:bg-[#161C32] text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all shadow-sm tracking-[0.02em] font-semibold text-xs"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">LINKEDIN</span>
              </a>

              {/* Quick Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-3.5 rounded-xl bg-[#101424] hover:bg-[#161C32] text-slate-400 hover:text-indigo-300 border border-white/10 hover:border-indigo-500/40 transition-all text-xs font-mono tracking-[0.03em] cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-indigo-400" />}
                <span className="hidden xl:inline">{copiedEmail ? 'COPIED!' : 'siva.prof46@gmail.com'}</span>
              </button>

              {/* Quick Copy Phone */}
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-3.5 rounded-xl bg-[#101424] hover:bg-[#161C32] text-slate-400 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-all text-xs font-mono tracking-[0.03em] cursor-pointer"
                title="Click to copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4 text-emerald-400" />}
                <span className="hidden 2xl:inline">{copiedPhone ? 'COPIED!' : '+91 7305852492'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
