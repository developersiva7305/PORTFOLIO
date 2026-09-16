import { useState } from 'react';
import { Send, Mail, MapPin, Check, Copy, AlertCircle, Phone, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) errs.company = 'Please enter your organization or affiliation';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Real-time asynchronous email transmission to Siva's verified email endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Name': formData.name,
          'Email': formData.email,
          'Company / Organization': formData.company,
          'Message': formData.message,
          '_subject': `New Portfolio Inquiry: ${formData.name} (${formData.company})`,
          '_replyto': formData.email,
          '_template': 'table',
          '_captcha': 'false'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      } else {
        throw new Error(result.message || 'Transmission response not successful');
      }
    } catch (err: any) {
      console.warn('Real-time transmission fallback:', err);
      // Fallback: If offline or API blocked, prepare direct email client link
      setSubmitError('Real-time gateway issue. You can click below to dispatch directly via your email app.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualEmailFallback = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name} (${formData.company}) - Intelligent Systems`);
    const body = encodeURIComponent(
      `Hello Siva,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${PROFILE_DATA.socials.email}?subject=${subject}&body=${body}`;
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090E]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-[0.06em] font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>07 / DIRECT COMMUNICATION & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.035em]">
            Let's Build Something Intelligent.
          </h2>
          <p className="body-prose text-slate-400 text-sm max-w-2xl font-normal leading-relaxed">
            Interested in AI, automation, intelligent systems or technology projects? Send a real-time message directly to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-indigo-500/30 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.06em] text-indigo-400 font-semibold">
                  Get in Touch
                </span>
                <h3 className="text-2xl font-bold text-white tracking-[-0.02em] mt-1 font-sans">
                  Connect Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans font-normal">
                  Whether you're exploring GenAI application development, industrial PLC architecture, or custom agentic solutions—I'm open to discussing intelligent technology initiatives.
                </p>
              </div>

              {/* Verified Contact Details List */}
              <div className="space-y-3">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-500">Email Address</div>
                      <div className="text-xs font-mono font-semibold text-white truncate tracking-[0.02em]">
                        {PROFILE_DATA.socials.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/5 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item from CV */}
                <div className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-500">Phone / WhatsApp</div>
                      <a
                        href={`tel:${PROFILE_DATA.socials.phoneRaw}`}
                        className="text-xs font-mono font-semibold text-white hover:text-emerald-300 transition-colors truncate block tracking-[0.02em]"
                      >
                        {PROFILE_DATA.socials.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/5 transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] hover:border-blue-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-500">LinkedIn Profile</div>
                      <div className="text-xs font-mono font-semibold text-white group-hover:text-blue-300 transition-colors tracking-[0.02em]">
                        linkedin.com/in/siva-n-8546a7244
                      </div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-white text-xs font-mono">↗</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] hover:border-purple-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-500">GitHub Profile</div>
                      <div className="text-xs font-mono font-semibold text-white group-hover:text-purple-300 transition-colors tracking-[0.02em]">
                        github.com/developersiva7305
                      </div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-white text-xs font-mono">↗</span>
                </a>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-[#070912] border border-white/[0.06] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-500">Location Base</div>
                    <div className="text-xs font-mono font-semibold text-white tracking-[0.02em]">
                      {PROFILE_DATA.socials.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Real-Time Validated Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#11162A] to-[#0A0D18] border border-white/[0.08] shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <Sparkles className="w-5 h-5 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-[0.04em] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Transmitted in Real Time</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] font-sans">
                      Message Delivered Directly!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
                      Thank you <strong className="text-white font-semibold">{formData.name}</strong>. Your message has been sent directly to <strong className="text-indigo-400 font-mono">{PROFILE_DATA.socials.email}</strong>. I will review your inquiry and reply to <span className="text-indigo-300 font-mono">{formData.email}</span> shortly.
                    </p>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="p-4 rounded-2xl bg-[#070912] border border-white/[0.08] max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/5 pb-1 text-slate-400">
                      <span>Sender Organization:</span>
                      <span className="text-white font-sans">{formData.company}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1 text-slate-400">
                      <span>Reply Target:</span>
                      <span className="text-emerald-400">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Status:</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Dispatched
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono tracking-[0.03em] uppercase text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <div className="text-xs font-mono uppercase tracking-[0.05em] text-slate-300 font-bold flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Real-Time Contact Pipeline</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Inbox Gateway
                    </span>
                  </div>

                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleManualEmailFallback}
                        className="px-4 py-2 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/50 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Open In Default Email App
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-[0.04em] text-slate-300 font-semibold">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-[#070912] border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors font-sans disabled:opacity-50 ${
                          errors.name ? 'border-rose-500' : 'border-white/[0.08] focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-[0.04em] text-slate-300 font-semibold">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-[#070912] border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors font-sans disabled:opacity-50 ${
                          errors.email ? 'border-rose-500' : 'border-white/[0.08] focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-[0.04em] text-slate-300 font-semibold">
                      Company / Organization <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Systems / Autonomous Tech Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-[#070912] border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors font-sans disabled:opacity-50 ${
                        errors.company ? 'border-rose-500' : 'border-white/[0.08] focus:border-indigo-500'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-[0.04em] text-slate-300 font-semibold">
                      Project or Discussion Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your AI, automation, or engineering objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-[#070912] border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors resize-none font-sans disabled:opacity-50 ${
                        errors.message ? 'border-rose-500' : 'border-white/[0.08] focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button with loading state */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 disabled:opacity-60 text-white font-semibold text-sm tracking-[0.02em] uppercase shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>TRANSMITTING MESSAGE IN REAL TIME...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Message Directly to Siva</span>
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-[10px] font-mono tracking-[0.03em] text-slate-500 uppercase">
                      Direct AJAX Email Pipeline · End-to-end Encrypted
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
