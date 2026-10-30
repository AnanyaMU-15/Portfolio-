import React from 'react';

/**
 * Footer Component:
 * Clean, modern footer featuring the centered line:
 * 'Designed & Engineered by Ananya MU • Class of 2029'
 * with cyber-emerald details, back-to-top button, and telemetry.
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-emerald-500/15 py-10 px-4 sm:px-6 bg-[#080c12]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono
            text-emerald-400 bg-emerald-950/50 border border-emerald-500/30
            hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]
            hover:-translate-y-0.5 transition-all duration-200"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Required Centered Line */}
        <div className="text-sm sm:text-base font-medium text-slate-200 tracking-wide font-sans">
          Designed &amp; Engineered by <span className="text-emerald-400 font-semibold">Ananya MU</span> &bull; <span className="text-lime-300 font-mono text-xs sm:text-sm">Class of 2029</span>
        </div>

        {/* Secondary Telemetry Details */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-500">
          <span>B.Tech in Artificial Intelligence &amp; Machine Learning</span>
          <span>&bull;</span>
          <span>K.S. Institute of Technology, Bengaluru</span>
          <span>&bull;</span>
          <span className="text-emerald-500/70">React &amp; Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

