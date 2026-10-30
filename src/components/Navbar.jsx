import React, { useState, useEffect } from 'react';

/**
 * Navbar Component:
 * Floating frosted-glass top navigation bar with cyber-emerald styling.
 * Stays fixed on scroll, features responsive mobile drawer,
 * custom logo, and clean navigation links.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Campus Life', href: '#campus-life', id: 'campus-life' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl sm:rounded-full border ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/30 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8),0_0_15px_rgba(16,185,129,0.15)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/65 backdrop-blur-lg border-emerald-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] py-3 px-4 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Ananya MU Home"
          >
            {/* Cyber Terminal Icon */}
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-950/70 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
              <span className="font-mono text-emerald-400 font-bold text-xs sm:text-sm">
                &lt;<span className="text-lime-400">A</span>/&gt;
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {/* Name & Tag */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold tracking-tight text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                  Ananya MU
                </span>
                <span className="text-[10px] font-mono text-emerald-400/90 font-semibold px-1.5 py-0.2 rounded bg-emerald-950/60 border border-emerald-500/30 hidden sm:inline-block">
                  AIML
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider hidden sm:block">
                KSIT // B.E. 2nd Year
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-lg group ${
                  activeSection === link.id
                    ? 'text-emerald-300'
                    : 'text-slate-300 hover:text-emerald-300'
                }`}
              >
                {/* Micro index prefix */}
                <span className="text-[10px] font-mono text-emerald-500/50 mr-1 group-hover:text-emerald-400 transition-colors">
                  0{idx + 1}.
                </span>
                <span>{link.name}</span>
                
                {/* Hover Glow Underline */}
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 transition-all duration-300 ${
                    activeSection === link.id
                      ? 'opacity-100 scale-x-100 shadow-[0_0_8px_#10b981]'
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop Action & Status Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 
                bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-500 hover:text-carbon-950 
                hover:border-emerald-400 hover:shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>Connect</span>
              <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // Close 'X' icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Cyber Frosted Card */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-emerald-500/20 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-emerald-950/40 hover:text-emerald-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-emerald-400/70">
                    // 0{idx + 1}
                  </span>
                  <span>{link.name}</span>
                </div>
                <svg className="w-4 h-4 text-emerald-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            <div className="mt-2 pt-2 border-t border-emerald-500/10 flex items-center justify-between px-3">
              <span className="text-[11px] font-mono text-slate-400">
                STATUS: <span className="text-lime-400">READY</span>
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 text-carbon-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

