import React, { useState } from 'react';
import RadarBadge from './RadarBadge';

/**
 * Hero Component:
 * Opening intro screen for student developer portfolio.
 * Features:
 * - Theme: 'Cyber-Emerald / Dark Mode' (#0d1117 carbon, #10b981 neon emerald, bright lime)
 * - Animated blinking radar pill
 * - Main headline & student bio
 * - Glowing primary button 'View My Projects' (lifts on hover) & outline button 'Download Resume / CV'
 * - Interactive cyber code card / HUD metrics
 * - Fully responsive across mobile, tablet, and desktop
 */
const Hero = () => {
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard?.writeText('npx ananya-mu@latest');
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2200);
  };

  const techBadges = [
    { name: 'React', color: 'border-emerald-500/30 text-emerald-300' },
    { name: 'Tailwind CSS', color: 'border-teal-500/30 text-teal-300' },
    { name: 'Python', color: 'border-lime-500/30 text-lime-300' },
    { name: 'AI & ML', color: 'border-emerald-400/40 text-emerald-200' },
    { name: 'TypeScript', color: 'border-emerald-500/30 text-emerald-300' },
    { name: 'Next.js', color: 'border-lime-400/30 text-lime-200' },
  ];

  return (
    <section 
      id="hero"
      aria-label="Introduction Hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Decorative Cyber Coordinates / Watermarks */}
      <div className="absolute top-28 left-6 hidden lg:flex flex-col gap-1 font-mono text-[11px] text-emerald-500/30 select-none">
        <span>SYS.PORTFOLIO // v2.4</span>
        <span>LAT: 12.9716° N</span>
        <span>LNG: 77.5946° E (BLR)</span>
      </div>

      <div className="absolute top-28 right-6 hidden lg:flex flex-col items-end gap-1 font-mono text-[11px] text-emerald-500/30 select-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM STATUS: ONLINE
        </span>
        <span>ENCRYPTION: AES-256</span>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Intro Copy & Actions */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          
          {/* Status Badge: Animated blinking radar pill */}
          <div className="mb-6 transform hover:scale-[1.02] transition-transform">
            <RadarBadge />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.15] mb-6 font-sans">
            Hey, I am{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                Ananya MU
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full opacity-60" />
            </span>{' '}
            —{' '}
            <span className="text-slate-100">
              Building the Future of{' '}
            </span>
            <span className="relative inline-block text-emerald-400 text-glow-emerald">
              Tech.
              {/* High-tech accent bracket */}
              <span className="text-lime-400/80 font-mono text-xl sm:text-2xl ml-1 font-normal">
                &lt;/&gt;
              </span>
            </span>
          </h1>

          {/* Student Bio */}
          <div className="relative pl-4 border-l-2 border-emerald-500/40 mb-8 py-0.5">
            <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed font-normal">
              <strong className="text-emerald-300 font-semibold">B E in AIML 2nd year</strong> at{' '}
              <span className="text-white font-medium">K S Institute OF Technology</span>, passionate about{' '}
              <span className="text-emerald-300 underline decoration-emerald-500/40 decoration-1 underline-offset-4">web development</span>,{' '}
              <span className="text-lime-300 underline decoration-lime-500/40 decoration-1 underline-offset-4">AI</span>, and{' '}
              building real-world projects.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            {/* Primary Button: 'View My Projects' (Glowing emerald, lifts slightly on hover) */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base
                bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-carbon-950
                shadow-[0_0_25px_-2px_rgba(16,185,129,0.5),0_0_10px_0px_rgba(16,185,129,0.3)]
                hover:shadow-[0_0_35px_0px_rgba(16,185,129,0.8),0_0_15px_rgba(163,230,53,0.4)]
                hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]
                transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-carbon-900"
            >
              <span>View My Projects</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200 stroke-[2.5]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Secondary Button: 'Download Resume / CV' (Crisp outline with hover glow) */}
            <a
              href="#resume"
              download
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base
                text-emerald-300 bg-carbon-850/70 border border-emerald-500/40 backdrop-blur-md
                hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-white
                hover:shadow-[0_0_22px_rgba(16,185,129,0.25)]
                hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]
                transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <svg 
                className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 group-hover:translate-y-0.5 transition-all duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume / CV</span>
            </a>
          </div>

          {/* Quick Tech Stack Pills */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Current Toolkit & Exploration:
            </span>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg bg-carbon-850/80 border ${badge.color} backdrop-blur-sm hover:border-emerald-400/60 transition-colors select-none`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Futuristic Cyber Terminal / Interactive Profile Card */}
        <div className="w-full lg:w-auto flex-1 max-w-lg lg:max-w-md">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#131b26] to-[#0d1117] border border-emerald-500/30 p-5 sm:p-6 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.15)] backdrop-blur-xl group hover:border-emerald-400/60 transition-all duration-300">
            
            {/* Top Bar of Cyber Card */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_6px_#10b981]" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  terminal: ananya@ksit-aiml
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 text-lime-300 border border-emerald-500/30">
                LIVE
              </span>
            </div>

            {/* Cyber Terminal Content */}
            <div className="space-y-3 font-mono text-xs sm:text-[13px] leading-relaxed">
              
              <div>
                <p className="text-slate-400 flex items-center gap-1.5">
                  <span className="text-emerald-400">&gt;</span> ananya.initProfile()
                </p>
                <div className="pl-3.5 mt-1 text-slate-300 space-y-1">
                  <p>
                    <span className="text-emerald-400/80">engineer:</span>{' '}
                    <span className="text-white font-medium">&quot;Ananya MU&quot;</span>
                  </p>
                  <p>
                    <span className="text-emerald-400/80">major:</span>{' '}
                    <span className="text-lime-300">&quot;Artificial Intelligence &amp; Machine Learning&quot;</span>
                  </p>
                  <p>
                    <span className="text-emerald-400/80">academicYear:</span>{' '}
                    <span className="text-emerald-200">&quot;2nd Year (Sophomore)&quot;</span>
                  </p>
                  <p>
                    <span className="text-emerald-400/80">institute:</span>{' '}
                    <span className="text-white">&quot;K S Institute of Technology&quot;</span>
                  </p>
                  <p>
                    <span className="text-emerald-400/80">passion:</span>{' '}
                    <span className="text-teal-300">&quot;Full-Stack Web, AI Agents &amp; Neural Nets&quot;</span>
                  </p>
                  <p>
                    <span className="text-emerald-400/80">status:</span>{' '}
                    <span className="text-lime-400 font-semibold">&quot;🟢 Ready for Internships &amp; Hackathons&quot;</span>
                  </p>
                </div>
              </div>

              {/* High-Tech Metrics Badges */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-emerald-500/15">
                <div className="p-2.5 rounded-xl bg-carbon-900/90 border border-emerald-500/20">
                  <div className="text-[10px] text-slate-400">INSTITUTION</div>
                  <div className="text-xs font-semibold text-emerald-300 mt-0.5 truncate">KSIT, Bengaluru</div>
                </div>
                <div className="p-2.5 rounded-xl bg-carbon-900/90 border border-emerald-500/20">
                  <div className="text-[10px] text-slate-400">CORE FOCUS</div>
                  <div className="text-xs font-semibold text-lime-300 mt-0.5 truncate">AIML + Web Dev</div>
                </div>
              </div>

              {/* Quick CLI Command interaction */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-400 transition-colors group/copy"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span>npx ananya-mu@latest</span>
                  </span>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200">
                    {copiedTerminal ? '✓ Copied' : 'Copy CLI'}
                  </span>
                </button>
              </div>

            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-emerald-400 rounded-tl" />
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-lime-400 rounded-tr" />
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-lime-400 rounded-bl" />
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-emerald-400 rounded-br" />

          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <a 
        href="#about"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400/80 hover:text-emerald-300 transition-colors select-none group focus:outline-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/80 group-hover:text-emerald-300">
          Scroll to Explore
        </span>
        <svg 
          className="w-4 h-4 text-emerald-400 animate-bounce" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;

