import React from "react";
import { Navigation, ShieldAlert, Video, Gauge, Radio, Truck } from "lucide-react";

export const FleetTelematicsVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl overflow-hidden ${className}`}>
      {/* Top Header Strip */}
      <div className="bg-slate-950 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono text-slate-300 truncate">
            TGL Telematics · WASL-Ready Gateway
          </span>
        </div>
        <div className="shrink-0">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
            4G Live Stream
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
        {/* Metric Cards Row - Responsive: 1 col on xs, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex sm:flex-col justify-between items-center sm:items-start">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-0.5 sm:mb-1">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                <span>Active Vehicles</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white font-mono">48 / 50</div>
            </div>
            <div className="text-[10px] text-emerald-400 mt-0.5 sm:mt-1">96% On-Duty KSA</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex sm:flex-col justify-between items-center sm:items-start">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-0.5 sm:mb-1">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                <span>Avg Fleet Speed</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white font-mono">82 km/h</div>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 sm:mt-1">Within TGA Limits</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex sm:flex-col justify-between items-center sm:items-start">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-0.5 sm:mb-1">
                <Radio className="w-3.5 h-3.5 text-emerald-400" />
                <span>WASL Status</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">Connected</div>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 sm:mt-1">Live Sync 15s</div>
          </div>
        </div>

        {/* Live Route Graphic Simulator */}
        <div className="relative rounded-2xl bg-slate-950 p-3.5 sm:p-4 border border-slate-800 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-1 mb-3">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-slate-200 truncate">Vehicle #KSA-4912 (Actros)</span>
            </div>
            <span className="font-mono text-blue-400 text-[11px]">Riyadh → Dammam Express</span>
          </div>

          {/* Route Map Vector Display */}
          <div className="relative h-24 sm:h-28 w-full bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 flex items-center justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            {/* Riyadh Point */}
            <div className="relative z-10 flex flex-col items-center shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 mt-1">Riyadh Hub</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono">08:15 AM Dep</span>
            </div>

            {/* Path connector line */}
            <div className="relative flex-1 mx-3 sm:mx-4">
              <div className="h-1 bg-slate-800 rounded-full w-full" />
              <div className="absolute top-0 start-0 h-1 bg-blue-500 rounded-full w-2/3" />
              <div className="absolute -top-3 left-2/3 -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-emerald-400 mt-0.5 whitespace-nowrap">
                  85 km/h
                </span>
              </div>
            </div>

            {/* Dammam Point */}
            <div className="relative z-10 flex flex-col items-center shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-600/30 border border-amber-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 mt-1">Dammam Port</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono">ETA 12:45 PM</span>
            </div>
          </div>
        </div>

        {/* AI Dashcam Event Feed */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
              <Video className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-white truncate">Edge AI Driver Safety Monitor</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">ADAS Collision & DMS Fatigue Alerts</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400 font-mono font-semibold shrink-0">
            <ShieldAlert className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Protected
          </span>
        </div>
      </div>
    </div>
  );
};
