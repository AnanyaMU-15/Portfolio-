import React, { useState, useRef, useEffect } from 'react';

/**
 * ProjectCard Component:
 * - Dark glass panel: bg-[#0e131d]/85 backdrop-blur-xl border border-emerald-500/20
 * - High-performance 3D perspective tilt physics (requestAnimationFrame calculated)
 * - Smooth -6px lift on hover
 * - Edge emerald neon glow
 * - Dynamic cursor-tracked specular light sheen + diagonal holographic shine reveal on hover
 */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const rafId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle tilt angle (-10deg to +10deg)
    const rotateX = -((y - centerY) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      // 3D perspective tilt with smooth -6px hover lift
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.018, 1.018, 1.018)`;

      // Dynamic cursor-tracked specular glow
      if (shineRef.current) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        shineRef.current.style.background = `radial-gradient(circle 260px at ${percentX}% ${percentY}%, rgba(52, 211, 153, 0.22), rgba(16, 185, 129, 0.08) 45%, transparent 70%)`;
      }
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (cardRef.current) {
      // Smoothly reset back to flat position
      cardRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'box-shadow 0.3s ease-out, border-color 0.3s ease-out'
          : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease-out, border-color 0.4s ease-out',
        willChange: 'transform, box-shadow',
      }}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7
        bg-[#0e131d]/90 backdrop-blur-xl border border-emerald-500/20
        ${
          isHovered
            ? 'border-emerald-400/60 shadow-[0_16px_45px_-8px_rgba(16,185,129,0.38),0_0_25px_0px_rgba(16,185,129,0.22)]'
            : 'shadow-[0_8px_32px_0_rgba(0,0,0,0.55)]'
        }
        overflow-hidden select-none transition-all`}
    >
      {/* 1. Dynamic Cursor-Follow Specular Sheen */}
      <div
        ref={shineRef}
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 2. Diagonal Glass Reflection Beam on Hover */}
      <div
        className={`pointer-events-none absolute -inset-full top-0 block bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out z-10 ${
          isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
        }`}
      />

      {/* Top Cyber Metadata Header */}
      <div className="relative z-20 flex items-center justify-between gap-2 mb-4 pb-3 border-b border-emerald-500/15">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-emerald-400">
            // 0{index + 1}_PRJ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Status Pill */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-lime-300 bg-lime-950/60 border border-lime-500/40 shadow-[0_0_8px_rgba(163,230,53,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          {project.badge || 'Ready'}
        </span>
      </div>

      {/* Card Body */}
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* 2-Sentence Description */}
        <p className="mt-3 text-sm sm:text-[15px] text-slate-300/90 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-5 pt-4 border-t border-emerald-500/15 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#080c12]/90 text-emerald-300 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="relative z-20 mt-6 pt-4 border-t border-emerald-500/15 grid grid-cols-2 gap-3">
        {/* Live Demo Button */}
        <a
          href={project.liveDemoUrl || '#'}
          onClick={(e) => {
            if (!project.liveDemoUrl || project.liveDemoUrl === '#') {
              e.preventDefault();
              alert(`Launching Live Demo preview for: ${project.title}`);
            }
          }}
          className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold
            text-carbon-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400
            shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]
            hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <span>Live Demo</span>
          <svg
            className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform stroke-[2.5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

        {/* GitHub Code Button */}
        <a
          href={project.githubUrl || '#'}
          onClick={(e) => {
            if (!project.githubUrl || project.githubUrl === '#') {
              e.preventDefault();
              alert(`Opening GitHub Repository for: ${project.title}`);
            }
          }}
          className="group/code inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold
            text-emerald-300 bg-[#080c12]/85 border border-emerald-500/40
            hover:bg-emerald-500/15 hover:border-emerald-400 hover:text-white
            hover:shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-200"
        >
          <svg className="w-4 h-4 text-emerald-400 group-hover/code:text-lime-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>

      {/* Cyber Corner Decors */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute transform rotate-45 bg-emerald-500/30 w-3 h-3 -top-1.5 -right-1.5 group-hover:bg-lime-400/50 transition-colors" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute transform rotate-45 bg-emerald-500/20 w-2.5 h-2.5 -bottom-1 -left-1" />
      </div>
    </div>
  );
};

/**
 * FeaturedProjects Component:
 * - Positioned directly below Hero intro section
 * - Responsive 3-column grid
 * - Interactive filter pill row ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * - 3 Student project cards with exact requirements
 */
const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterPills = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 'project-1',
      title: 'Campus Event Finder',
      category: 'Web Apps',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      description:
        'Solves campus disconnection by aggregating all college club hackathons, tech talks, and cultural fests into an interactive real-time map. Students can RSVP in one click and receive automated WhatsApp notifications before events start.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Google Maps API'],
      liveDemoUrl: '#',
      githubUrl: '#',
      badge: 'v2.1 Live',
    },
    {
      id: 'project-2',
      title: 'Smart Attendance Tracker',
      category: 'AI / ML',
      categories: ['All', 'AI / ML'],
      description:
        'Eliminates manual roll-call inefficiency in college lecture halls using high-speed facial recognition and automated anti-spoofing verification. Instantly syncs attendance logs with KSIT departmental dashboards with 99.2% identification accuracy.',
      tech: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      liveDemoUrl: '#',
      githubUrl: '#',
      badge: '99.2% Acc',
    },
    {
      id: 'project-3',
      title: 'Student Notes Marketplace',
      category: 'Web Apps',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      description:
        'Provides an academic peer-to-peer exchange where engineering students can share, verify, and peer-review semester lecture notes and question banks. Features instant PDF previews and a community rating algorithm to highlight the highest-quality study material.',
      tech: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
      liveDemoUrl: '#',
      githubUrl: '#',
      badge: 'Active Hub',
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      aria-label="Featured Projects Showcase"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-500/15"
    >
      {/* Section Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
              // 02. SHOWCASE
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Selected Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Real-world applications, neural network models, and student platforms built with modern web technologies.
          </p>
        </div>

        {/* Filter Pill Row: 'All', 'Web Apps', 'AI / ML', 'Mini-Projects' */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e131d]/90 border border-emerald-500/25 backdrop-blur-md">
          {filterPills.map((pill) => {
            const isActive = activeFilter === pill;
            return (
              <button
                key={pill}
                type="button"
                onClick={() => setActiveFilter(pill)}
                className={`relative px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 select-none ${
                  isActive
                    ? 'text-carbon-950 font-bold bg-gradient-to-r from-emerald-400 to-lime-300 shadow-[0_0_20px_rgba(16,185,129,0.55)] scale-[1.02]'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/50'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean, Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Exploring more code repositories &amp; experiments?{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-lime-300 underline underline-offset-4 decoration-emerald-500/40 hover:decoration-lime-400 transition-colors"
          >
            Visit GitHub Profile &rarr;
          </a>
        </p>
      </div>
    </section>
  );
};

export default FeaturedProjects;

