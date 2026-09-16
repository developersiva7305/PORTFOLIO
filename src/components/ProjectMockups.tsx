import { useState } from 'react';
import { Search, FileText, BarChart3, Bot, Activity, Cpu, Sparkles, RefreshCw } from 'lucide-react';

// 1. AI Company Intelligence Mockup
export const CompanyIntelMockup = () => {
  const [query, setQuery] = useState('Siemens AG Automation');
  const [isSearching, setIsSearching] = useState(false);

  const triggerSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-indigo-500/30 overflow-hidden text-xs font-mono text-slate-300">
      {/* Search Header */}
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 bg-[#060810] px-3 py-1.5 rounded-lg border border-white/10">
          <Search className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white focus:outline-none text-[11px]"
            placeholder="Search company or market domain..."
          />
        </div>
        <button
          onClick={triggerSearch}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[10px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {isSearching ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
          <span>Synthesize</span>
        </button>
      </div>

      {/* Body: Research Dossier */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-xs">Siemens Industrial Automation</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              Verified Dossier
            </span>
          </div>
          <span className="text-[10px] text-slate-500">6 Sources Indexed</span>
        </div>

        {/* Executive Summary */}
        <div className="p-3 rounded-xl bg-[#0D1120] border border-white/[0.05] space-y-1.5">
          <div className="text-[10px] uppercase font-bold text-indigo-400 flex items-center gap-1">
            <Bot className="w-3 h-3" />
            <span>AI Synthesized Intelligence Summary</span>
          </div>
          <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
            Market leader in digital industries and discrete manufacturing. Strong transition toward AI-augmented PLC controllers (SIMATIC S7-1500) and edge cloud integration (MindSphere / AWS).
          </p>
        </div>

        {/* Competitor Matrix Grid */}
        <div className="grid grid-cols-3 gap-2 text-center pt-1">
          <div className="p-2 rounded-lg bg-[#070912] border border-white/5">
            <div className="text-[10px] text-slate-400">Rockwell / AB</div>
            <div className="text-white font-bold text-[11px] mt-0.5">High Overlap</div>
          </div>
          <div className="p-2 rounded-lg bg-[#070912] border border-white/5">
            <div className="text-[10px] text-slate-400">Schneider</div>
            <div className="text-white font-bold text-[11px] mt-0.5">Medium Overlap</div>
          </div>
          <div className="p-2 rounded-lg bg-[#070912] border border-white/5">
            <div className="text-[10px] text-slate-400">Delta Elec.</div>
            <div className="text-white font-bold text-[11px] mt-0.5">Value Tier</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. AI Document Reader Mockup
export const DocReaderMockup = () => {
  const [activeQuestion, setActiveQuestion] = useState('What is the maximum operating pressure?');

  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-purple-500/30 overflow-hidden text-xs font-mono text-slate-300">
      {/* Top Header */}
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-purple-400" />
          <span className="text-white font-bold text-[11px] truncate">Industrial_Transmitter_Spec_v4.pdf</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
          RAG Vector Synced
        </span>
      </div>

      {/* Two Pane Chat / Document Split */}
      <div className="p-4 space-y-3">
        {/* User Query */}
        <div className="flex items-start gap-2 text-[11px]">
          <span className="text-slate-500 font-bold">Q:</span>
          <span className="text-slate-200">{activeQuestion}</span>
        </div>

        {/* RAG Context Retrieval Card */}
        <div className="p-3 rounded-xl bg-[#0C101F] border border-purple-500/20 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-purple-400">
            <span className="flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3" />
              Retrieved Answer (Confidence: 98.4%)
            </span>
            <span className="text-slate-400">Chunk #14 · Page 8</span>
          </div>
          <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
            "The pressure transmitter is rated for a continuous maximum operating pressure of <span className="text-white font-semibold underline decoration-purple-400">40.0 bar (580 psi)</span> with proof pressure tolerance up to 60.0 bar."
          </p>
          <div className="flex items-center gap-2 pt-1 text-[9px] text-slate-400">
            <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-white/5">Source: Section 4.2 Mechanical Specs</span>
            <span className="text-purple-300">Citation Link ↗</span>
          </div>
        </div>

        {/* Question presets */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['What is the calibration interval?', 'Supported 4-20mA protocols?'].map((q, i) => (
            <button
              key={i}
              onClick={() => setActiveQuestion(q)}
              className="text-[9px] px-2 py-1 rounded bg-[#0E1220] hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. AI Analyst Mockup
export const AiAnalystMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-sky-500/30 overflow-hidden text-xs font-mono text-slate-300">
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-sky-400" />
          <span className="text-white font-bold text-[11px]">Plant Energy & Telemetry Insights</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono">● LIVE AGGREGATION</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#0B0F1C] border border-white/5">
            <div className="text-[10px] text-slate-400">Avg Efficiency</div>
            <div className="text-base font-bold text-white mt-0.5">94.8%</div>
            <div className="text-[9px] text-emerald-400 mt-0.5">+3.2% vs Baseline</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#0B0F1C] border border-white/5">
            <div className="text-[10px] text-slate-400">Peak Thermal Load</div>
            <div className="text-base font-bold text-white mt-0.5">68.2°C</div>
            <div className="text-[9px] text-sky-400 mt-0.5">Within Safe Margin</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#0B0F1C] border border-white/5">
            <div className="text-[10px] text-slate-400">Anomaly Index</div>
            <div className="text-base font-bold text-white mt-0.5">0.02</div>
            <div className="text-[9px] text-emerald-400 mt-0.5">Zero Faults</div>
          </div>
        </div>

        {/* Visual Bar Graph simulation */}
        <div className="p-3 rounded-xl bg-[#070912] border border-white/5 space-y-2">
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Production Cycle Energy Consumption (kWh)</span>
            <span className="text-sky-400">Deterministic SQL Output</span>
          </div>
          <div className="flex items-end gap-1.5 h-16 pt-2">
            {[45, 60, 52, 78, 92, 85, 70, 65, 88, 74].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-800 rounded-t overflow-hidden h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-sky-600 to-indigo-400 rounded-t transition-all duration-500"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="p-2.5 rounded-lg bg-[#0E1324] border border-sky-500/20 text-[11px] text-slate-300 font-sans">
          <span className="text-sky-300 font-semibold font-mono text-[10px] mr-1">AI INSIGHT:</span>
          Cycle 5 showed optimal VFD modulation, reducing overall reactive power draw by 14%.
        </div>
      </div>
    </div>
  );
};

// 4. AI Agent Orchestrator Mockup
export const AgentOrchestratorMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-violet-500/30 overflow-hidden text-xs font-mono text-slate-300">
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-violet-400" />
          <span className="text-white font-bold text-[11px]">Multi-Step Agent Execution DAG</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-500/30">
          State: Completed
        </span>
      </div>

      <div className="p-4 space-y-2.5">
        {/* Step 1 */}
        <div className="p-2.5 rounded-xl bg-[#0B0E1C] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold">✓</span>
            <div>
              <div className="text-white font-bold text-[11px]">01. Task Decomposition & Planning</div>
              <div className="text-[10px] text-slate-400">Generated 3-branch execution graph</div>
            </div>
          </div>
          <span className="text-[9px] text-slate-500">120ms</span>
        </div>

        {/* Step 2 */}
        <div className="p-2.5 rounded-xl bg-[#0B0E1C] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold">✓</span>
            <div>
              <div className="text-white font-bold text-[11px]">02. Tool Calling: Web Search & Vector RAG</div>
              <div className="text-[10px] text-slate-400">Retrieved 12 candidate telemetry schemas</div>
            </div>
          </div>
          <span className="text-[9px] text-slate-500">410ms</span>
        </div>

        {/* Step 3 */}
        <div className="p-2.5 rounded-xl bg-[#12172E] border border-violet-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-violet-950 text-violet-300 border border-violet-500/40 flex items-center justify-center text-[10px] font-bold">★</span>
            <div>
              <div className="text-white font-bold text-[11px]">03. Reflection & Structured Synthesis</div>
              <div className="text-[10px] text-violet-300">Schema validated · Final payload delivered</div>
            </div>
          </div>
          <span className="text-[9px] text-emerald-400 font-bold">SUCCESS</span>
        </div>
      </div>
    </div>
  );
};

// 5. IoT Air Conditioner Control System Mockup
export const IotAcMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-blue-500/30 overflow-hidden text-xs font-mono text-slate-300">
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="text-white font-bold text-[11px]">Siemens PLC + AWS IoT Telemetry (VIT)</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
          AWS Cloud Synced
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/5 text-center">
            <div className="text-[10px] text-slate-400">Room Temp</div>
            <div className="text-lg font-bold text-sky-400 mt-0.5">22.4°C</div>
            <div className="text-[9px] text-slate-500">Setpoint: 22.0°C</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/5 text-center">
            <div className="text-[10px] text-slate-400">Compressor</div>
            <div className="text-lg font-bold text-emerald-400 mt-0.5">RUNNING</div>
            <div className="text-[9px] text-slate-500">Duty: 76%</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/5 text-center">
            <div className="text-[10px] text-slate-400">PLC Mode</div>
            <div className="text-lg font-bold text-white mt-0.5">AUTO</div>
            <div className="text-[9px] text-slate-500">TIA Portal v17</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/5 text-center">
            <div className="text-[10px] text-slate-400">AWS Latency</div>
            <div className="text-lg font-bold text-indigo-400 mt-0.5">18ms</div>
            <div className="text-[9px] text-slate-500">MQTT Protocol</div>
          </div>
        </div>

        {/* PLC Ladder Logic snippet representation */}
        <div className="p-3 rounded-xl bg-[#060810] border border-white/5 space-y-1">
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Ladder Logic Network: Rung 04 (Compressor Control)</span>
            <span className="text-emerald-400 font-bold">NO CONTACT [I0.1] ─── (Q0.0) [COIL]</span>
          </div>
          <div className="text-[10px] text-slate-500">
            Conditions: (Temp_Sensor &gt; Setpoint + 0.5) AND Safety_Interlock_OK == TRUE
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Multi-PLC Water Control System Mockup
export const WaterControlMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-[#090C16] border border-cyan-500/30 overflow-hidden text-xs font-mono text-slate-300">
      <div className="p-3 bg-[#0E1222] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-white font-bold text-[11px]">3-PLC Water Balancing System (BITS Pilani)</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
          Inter-PLC Synced
        </span>
      </div>

      <div className="p-4 space-y-3">
        {/* 3 PLC Status Nodes */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-[#081220] border border-cyan-500/40">
            <div className="text-[9px] font-bold text-cyan-400">Siemens Master PLC</div>
            <div className="text-sm font-extrabold text-white mt-1">TIA Portal</div>
            <div className="text-[9px] text-emerald-400 mt-0.5">Master Routine: OK</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/10">
            <div className="text-[9px] font-bold text-slate-300">Delta Slave PLC 1</div>
            <div className="text-sm font-extrabold text-white mt-1">ISP Soft</div>
            <div className="text-[9px] text-cyan-400 mt-0.5">Tank A: 78% Fill</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#090D1A] border border-white/10">
            <div className="text-[9px] font-bold text-slate-300">Delta Slave PLC 2</div>
            <div className="text-sm font-extrabold text-white mt-1">ISP Soft</div>
            <div className="text-[9px] text-cyan-400 mt-0.5">Tank B: 64% Fill</div>
          </div>
        </div>

        {/* Tank Level Progress Bars */}
        <div className="p-3 rounded-xl bg-[#070A14] border border-white/5 space-y-2">
          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
              <span>Primary Overhead Reservoir</span>
              <span className="text-cyan-300 font-bold">820 / 1000 L (82%)</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: '82%' }} />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] pt-1 text-slate-400">
            <span>Inlet Solenoid: <strong className="text-emerald-400">OPEN</strong></span>
            <span>Discharge Pump 1: <strong className="text-emerald-400">ACTIVE</strong></span>
            <span>High Cutoff Safety: <strong className="text-white">STANDBY</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
