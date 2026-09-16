import { useState, useEffect, useRef } from 'react';
import { Cpu, Activity, Zap, Database, Sparkles, Server, Gauge, Award, Check, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PROFILE_DATA } from '../data/profile';

export const HeroVisual = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'architecture'>('profile');
  const [activeNode, setActiveNode] = useState<number>(2);
  const [pulseCount, setPulseCount] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 6);
      setPulseCount(c => c + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Subtle interactive particle & node canvas for architecture mode
  useEffect(() => {
    if (activeTab !== 'architecture') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for data streams
    const particleCount = 24;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1,
      color: Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(56, 189, 248, '
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const architectureNodes = [
    {
      id: 0,
      label: 'Field Sensors & Transmitters',
      type: 'Industrial Field',
      tech: '4-20mA · RTD · Modbus',
      icon: Gauge,
      color: 'from-blue-500/20 to-sky-500/10 border-blue-500/30 text-blue-400',
      activeColor: 'border-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]',
      telemetry: 'Scan Rate: 10ms | Signal: Stable'
    },
    {
      id: 1,
      label: 'PLC Logic & Control Bus',
      type: 'Deterministic Core',
      tech: 'Siemens TIA · Delta ISP · PID',
      icon: Cpu,
      color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400',
      activeColor: 'border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]',
      telemetry: 'IEC 61131-3 Ladder Logic: Active'
    },
    {
      id: 2,
      label: 'SCADA & Edge IoT Gateway',
      type: 'Telemetry Stream',
      tech: 'WinCC · AWS IoT · MQTT',
      icon: Activity,
      color: 'from-sky-500/20 to-cyan-500/10 border-sky-500/30 text-sky-400',
      activeColor: 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]',
      telemetry: 'AWS Stream: Ingesting Real-Time'
    },
    {
      id: 3,
      label: 'Vector Store & RAG Index',
      type: 'Semantic Memory',
      tech: 'Embeddings · Dense Vectors',
      icon: Database,
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
      activeColor: 'border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]',
      telemetry: 'Cosine Index: 1,536-dim Synced'
    },
    {
      id: 4,
      label: 'LLM Reasoning & Agent Loop',
      type: 'Cognitive Engine',
      tech: 'Autonomous DAG · Tool Calling',
      icon: Sparkles,
      color: 'from-violet-500/20 to-indigo-500/10 border-violet-500/30 text-violet-300',
      activeColor: 'border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]',
      telemetry: 'Agent Status: Dynamic Inference'
    },
    {
      id: 5,
      label: 'Intelligent Decision & Action',
      type: 'System Output',
      tech: 'FastAPI · React · Closed Loop',
      icon: Zap,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      activeColor: 'border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]',
      telemetry: 'Action Dispatched · Optimal Setpoint'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-amber-500/20 border border-white/[0.12] shadow-2xl group">
      
      {/* Subtle outer glow ambient illumination */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-sky-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 -z-10" />

      {/* Main Glass Card container */}
      <div className="relative z-10 p-4 sm:p-6 rounded-[22px] bg-[#0A0D18]/95 backdrop-blur-2xl border border-white/[0.06] overflow-hidden">
        
        {/* Dual Mode Switcher Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0F1325] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium tracking-[-0.01em] transition-all cursor-pointer font-sans ${
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Executive Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium tracking-[-0.01em] transition-all cursor-pointer font-sans ${
                activeTab === 'architecture'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-sky-300" />
              <span>System Architecture</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded-lg border border-emerald-500/30 uppercase tracking-[0.03em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">ONLINE</span>
          </div>
        </div>

        {/* TAB 1: EXECUTIVE PROFILE SPOTLIGHT */}
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Portrait Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141A32] via-[#0E1224] to-[#080A14] border border-white/[0.1] shadow-2xl group/img">
              
              {/* Background gradient lighting effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Photo */}
              <div className="relative aspect-[4/4.4] sm:aspect-[4/4.2] w-full flex items-center justify-center overflow-hidden">
                <img
                  src={PROFILE_DATA.avatar}
                  alt="Siva N - GenAI & Industrial Automation Engineer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover/img:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-2xl pointer-events-none" />

                {/* Floating Badge 1 (Top Left): Location */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 flex items-center gap-1.5 shadow-lg tracking-[0.02em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Chennai, India</span>
                </div>

                {/* Floating Badge 2 (Top Right): GenAI Status */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 text-[11px] font-mono text-indigo-200 flex items-center gap-1.5 shadow-lg tracking-[0.02em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold uppercase">GenAI + Automation</span>
                </div>

                {/* Floating Badge 3 (Bottom Left): Engineering Discipline */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2 shadow-xl">
                  <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono uppercase tracking-[0.04em] text-slate-400 leading-none">Specialization</div>
                    <div className="font-semibold text-xs text-slate-100 mt-0.5 font-sans">PLC Logic & AI Systems</div>
                  </div>
                </div>

                {/* Floating Badge 4 (Bottom Right): Verified CGPA */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-indigo-500/20 backdrop-blur-md border border-amber-400/40 text-xs text-amber-200 flex items-center gap-2 shadow-xl">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono uppercase tracking-[0.04em] text-amber-300/80 leading-none">Verified CGPA</div>
                    <div className="font-bold text-xs text-white font-mono mt-0.5">9.23 / 10 · Topper</div>
                  </div>
                </div>
              </div>

              {/* Bottom Persona Banner */}
              <div className="p-4 bg-gradient-to-r from-[#101426] via-[#0E1220] to-[#12162A] border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2 font-sans">
                    <span>{PROFILE_DATA.name}</span>
                    <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-[0.03em]">
                      ECE Graduate
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Jerusalem College of Engineering
                  </div>
                </div>

                {/* Quick LinkedIn & Phone buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={PROFILE_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-400 hover:text-white transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono tracking-[0.02em] uppercase"
                    title="Open Siva's LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>

                  <a
                    href={PROFILE_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-400 hover:text-white transition-all shadow-sm"
                    title="Open Siva's GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#0D1120] border border-white/[0.06]">
                <div className="text-xs font-bold text-white font-mono">9.23</div>
                <div className="text-[10px] text-slate-400 font-sans">CGPA (ECE)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1120] border border-white/[0.06]">
                <div className="text-xs font-bold text-indigo-300 font-mono">6+ PLCs</div>
                <div className="text-[10px] text-slate-400 font-sans">Siemens/Delta</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1120] border border-white/[0.06]">
                <div className="text-xs font-bold text-emerald-400 font-mono">GENAI</div>
                <div className="text-[10px] text-slate-400 font-sans">Agents & RAG</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM ARCHITECTURE TELEMETRY */}
        {activeTab === 'architecture' && (
          <div className="relative animate-in fade-in duration-300">
            {/* Background canvas for particles & grid */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

            {/* Top telemetry bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.05em] text-slate-300">
                  PHYSICAL AUTOMATION ↔ GENAI BRIDGE
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-500/30">
                <span className="text-slate-400">CYCLE:</span>
                <span>#{pulseCount + 1042}</span>
              </div>
            </div>

            {/* Dynamic Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative">
              {architectureNodes.map((node) => {
                const Icon = node.icon;
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden bg-gradient-to-br ${
                      node.color
                    } ${
                      isActive
                        ? `${node.activeColor} bg-opacity-40 scale-[1.02]`
                        : 'hover:border-white/20 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Active scanline animation */}
                    {isActive && (
                      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-pulse" />
                    )}

                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.05em] text-slate-400 px-1.5 py-0.5 rounded bg-black/30 border border-white/5">
                        {node.type}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-white tracking-tight font-sans">
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                      {node.tech}
                    </div>

                    {/* Sub status */}
                    <div className={`mt-2 pt-1 border-t border-white/[0.06] text-[9px] font-mono flex items-center gap-1.5 ${
                      isActive ? 'text-indigo-300' : 'text-slate-500'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-indigo-400 animate-ping' : 'bg-slate-600'}`} />
                      <span className="truncate">{node.telemetry}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Interconnection Stream Banner */}
            <div className="mt-3.5 p-2.5 rounded-xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-purple-950/60 border border-indigo-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <Server className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <div className="text-[11px] text-slate-300 font-sans">
                  <span className="text-white font-medium">Pipeline: </span>
                  <span className="text-indigo-300">Deterministic Sensors → RAG Context → Agent Action</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0 hidden sm:block uppercase tracking-[0.04em]">
                0ms LOSS
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
