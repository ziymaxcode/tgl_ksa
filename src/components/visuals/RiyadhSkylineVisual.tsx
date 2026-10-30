import React from "react";

export const RiyadhSkylineVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 text-white shadow-xl border border-slate-800 ${className}`}>
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
            Riyadh · Jeddah · Dammam · Al Jubail
          </span>
        </div>
        <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30">
          ZATCA & WASL Ready
        </span>
      </div>

      {/* Interactive Mockup Panels */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-xs">
          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
            Saudi Commercial Coverage
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
            100% Remote Delivery
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
            Zero setup delays across all 13 provinces with rapid Sun–Thu support.
          </p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-xs">
          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
            Compliance Engine
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 tracking-tight flex items-center gap-2">
            Phase 2 FATOORA
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
            UBL 2.1 XML clearance, cryptographic signing & live QR generation.
          </p>
        </div>
      </div>

      {/* Stylized Riyadh Skyline Architectural SVG */}
      <div className="relative z-10 w-full pt-2 sm:pt-4">
        <svg
          viewBox="0 0 800 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-blue-400/80 opacity-90 drop-shadow-md"
        >
          {/* Subtle grid lines in background */}
          <line x1="0" y1="210" x2="800" y2="210" stroke="#334155" strokeWidth="2" />
          <line x1="0" y1="160" x2="800" y2="160" stroke="#1e293b" strokeDasharray="4 4" />
          <line x1="0" y1="110" x2="800" y2="110" stroke="#1e293b" strokeDasharray="4 4" />

          {/* Background Low-Rise Buildings */}
          <rect x="30" y="140" width="45" height="70" rx="3" fill="#1e293b" />
          <rect x="90" y="125" width="55" height="85" rx="3" fill="#1e293b" />
          <rect x="650" y="135" width="50" height="75" rx="3" fill="#1e293b" />
          <rect x="715" y="145" width="60" height="65" rx="3" fill="#1e293b" />

          {/* Kingdom Centre Iconic Silhouette (Left-Center) */}
          <path
            d="M 280 210 L 295 40 Q 320 20 345 40 L 360 210 Z"
            fill="url(#kingdomGrad)"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
          {/* Parabolic Sky Bridge Cutout */}
          <path
            d="M 305 65 Q 327.5 90 350 65 L 345 42 Q 327.5 25 310 42 Z"
            fill="#0f172a"
            stroke="#93c5fd"
            strokeWidth="1.2"
          />
          {/* Observation Skybridge Light */}
          <rect x="312" y="38" width="31" height="5" rx="2" fill="#60a5fa" />

          {/* Al Faisaliyah Tower Silhouette (Right-Center) */}
          <path
            d="M 460 210 L 490 60 L 520 210 Z"
            fill="url(#faisaliyahGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          {/* Golden Geodesic Globe on Faisaliyah */}
          <circle cx="490" cy="85" r="14" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <line x1="490" y1="60" x2="490" y2="25" stroke="#f59e0b" strokeWidth="2.5" />

          {/* KAFD Modern Financial District High-Rises */}
          <polygon points="180,210 190,80 230,95 240,210" fill="url(#blueGrad)" stroke="#3b82f6" strokeWidth="1" />
          <polygon points="380,210 395,70 435,90 445,210" fill="url(#blueGrad)" stroke="#3b82f6" strokeWidth="1" />
          <polygon points="545,210 560,95 595,80 610,210" fill="url(#blueGrad)" stroke="#38bdf8" strokeWidth="1" />

          {/* Road / Fleet Transit Glow Line */}
          <path d="M 0 210 C 250 205, 550 205, 800 210" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="210" cy="208" r="4" fill="#60a5fa" />
          <circle cx="420" cy="207" r="4" fill="#38bdf8" />
          <circle cx="580" cy="208" r="4" fill="#fbbf24" />

          {/* Gradients */}
          <defs>
            <linearGradient id="kingdomGrad" x1="327" y1="20" x2="327" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e3a8a" />
              <stop offset="0.7" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="faisaliyahGrad" x1="490" y1="30" x2="490" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284c7" />
              <stop offset="0.8" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] sm:text-[11px] text-slate-400 pt-2 border-t border-slate-800 text-center sm:text-start">
          <span>Riyadh Commercial Skyline & Technology Hub</span>
          <span className="text-slate-500 font-mono">Vision 2030 SME Solutions</span>
        </div>
      </div>
    </div>
  );
};
