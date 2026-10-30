import React from 'react';

/**
 * RadarBadge:
 * Animated blinking radar status pill: '🟢 Student Developer // Open for Internships'
 * Designed with a cyber-emerald dark aesthetic, layered glowing ping animation,
 * and high-tech typography.
 */
const RadarBadge = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full 
      bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md 
      shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] 
      hover:border-emerald-400/50 transition-all duration-300 group cursor-default select-none">
      
      {/* Blinking Radar Beacon */}
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        {/* Outer expanding radar wave */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        {/* Secondary soft pulse */}
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-500/20 animate-pulse" />
        {/* Solid active beacon dot */}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-emerald-400 to-lime-300 shadow-[0_0_8px_#10b981]" />
      </span>

      {/* Pill Text */}
      <div className="flex items-center text-xs sm:text-sm font-medium tracking-wide">
        <span className="text-emerald-400 font-semibold mr-1.5">
          Student Developer
        </span>
        <span className="text-emerald-600/80 mr-1.5 font-mono text-xs">
          //
        </span>
        <span className="text-emerald-200/90 group-hover:text-emerald-100 transition-colors">
          Open for Internships
        </span>
      </div>

      {/* Subtle cyber status tag */}
      <span className="hidden md:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-lime-400/90 bg-lime-950/50 rounded border border-lime-500/30">
        Active
      </span>
    </div>
  );
};

export default RadarBadge;

