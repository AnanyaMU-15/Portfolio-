import React from 'react';

/**
 * TechStackSkills Component:
 * Clean, modern, interactive skills showcase grouped into 3 categories:
 * 1. Languages
 * 2. Frameworks & Tools
 * 3. Core CS Concepts
 *
 * Features:
 * - Cyber-emerald aesthetic (#0d1117 carbon, #10b981 emerald, lime accents)
 * - Official/clean SVG icons for each technology
 * - Hover scaling (scale-105), emerald border glow, and smooth tooltip showing comfort level
 */

// Helper to color-code comfort levels
const getComfortBadge = (level) => {
  switch (level) {
    case 'Proficient':
      return {
        text: 'Proficient',
        dot: 'bg-emerald-400 shadow-[0_0_6px_#10b981]',
        textColor: 'text-emerald-300',
        borderColor: 'border-emerald-500/40',
        bg: 'bg-emerald-950/90',
      };
    case 'Familiar':
      return {
        text: 'Familiar',
        dot: 'bg-lime-400 shadow-[0_0_6px_#a3e635]',
        textColor: 'text-lime-300',
        borderColor: 'border-lime-500/40',
        bg: 'bg-lime-950/90',
      };
    case 'Currently Learning':
      return {
        text: 'Currently Learning',
        dot: 'bg-teal-300 shadow-[0_0_6px_#5eead4] animate-pulse',
        textColor: 'text-teal-200',
        borderColor: 'border-teal-500/40',
        bg: 'bg-teal-950/90',
      };
    default:
      return {
        text: level,
        dot: 'bg-slate-400',
        textColor: 'text-slate-200',
        borderColor: 'border-slate-500/40',
        bg: 'bg-slate-900/90',
      };
  }
};

const SkillPill = ({ skill }) => {
  const comfort = getComfortBadge(skill.level);

  return (
    <div className="group relative inline-flex items-center">
      {/* Interactive Skill Badge */}
      <div
        className="relative inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl
          bg-[#0e131d]/85 backdrop-blur-md border border-emerald-500/20
          hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]
          hover:scale-105 active:scale-95 transition-all duration-200 ease-out cursor-default select-none"
      >
        {/* Tech Icon */}
        <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
          {skill.icon}
        </span>

        {/* Skill Name */}
        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>

      {/* Hover Tooltip (Comfort Level) */}
      <div
        role="tooltip"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
          opacity-0 group-hover:opacity-100 group-hover:-translate-y-1
          transition-all duration-200 ease-out z-30 whitespace-nowrap"
      >
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold
            ${comfort.bg} border ${comfort.borderColor} ${comfort.textColor}
            shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${comfort.dot}`} />
          <span>{comfort.text}</span>
        </div>

        {/* Tooltip Downward Caret */}
        <div className="w-2 h-2 bg-[#0e131d] border-r border-b border-emerald-500/30 transform rotate-45 mx-auto -mt-1" />
      </div>
    </div>
  );
};

const TechStackSkills = () => {
  // 1. Languages
  const languages = [
    {
      name: 'Python',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.91 2C6.73 2 7.07 4.25 7.07 4.25l.01 2.33h4.92v.7H5.06S2 6.92 2 12.11c0 5.18 2.68 5 2.68 5h1.6v-2.25s-.09-2.68 2.63-2.68h4.52v-3.7s.4-4.48-1.52-4.48zm-2.4 1.48a.79.79 0 110 1.58.79.79 0 010-1.58z"
            fill="#38bdf8"
          />
          <path
            d="M12.09 22c5.18 0 4.84-2.25 4.84-2.25l-.01-2.33H12v-.7h6.94S22 17.08 22 11.89c0-5.18-2.68-5-2.68-5h-1.6v2.25s.09 2.68-2.63 2.68h-4.52v3.7s-.4 4.48 1.52 4.48zm2.4-1.48a.79.79 0 110-1.58.79.79 0 010 1.58z"
            fill="#facc15"
          />
        </svg>
      ),
    },
    {
      name: 'C++',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.5 10.5h-1.5v-1.5h-1v1.5h-1.5v1h1.5v1.5h1v-1.5h1.5v-1zm-6 0h-1.5v-1.5h-1v1.5h-1.5v1h1.5v1.5h1v-1.5h1.5v-1z"
            fill="#38bdf8"
          />
          <path
            d="M11.3 5.3a8.5 8.5 0 00-6 2.5 8.5 8.5 0 000 12 8.5 8.5 0 0012 0l-2.1-2.1a5.5 5.5 0 01-7.8 0 5.5 5.5 0 010-7.8 5.5 5.5 0 017.8 0l2.1-2.1a8.5 8.5 0 00-6-2.5z"
            fill="#0284c7"
          />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4 rounded-sm" viewBox="0 0 24 24" fill="#f7df1e">
          <rect width="24" height="24" fill="#f7df1e" rx="3" />
          <path
            d="M6 17.5c.5.8 1.4 1.3 2.4 1.3 1.3 0 2.1-.7 2.1-2.3v-6.3H8.3v6.3c0 .7-.3 1-1 1-.5 0-.9-.3-1.1-.7l-.2.7zm7.4-.3c.7.4 1.5.7 2.3.7 1.3 0 2-.6 2-1.5 0-1-.8-1.4-1.9-1.9-1.4-.6-2.3-1.4-2.3-2.6 0-1.5 1.2-2.5 2.9-2.5.8 0 1.6.2 2.2.6l-.6 1.7c-.5-.3-1.1-.5-1.7-.5-1 0-1.5.5-1.5 1.1 0 .8.6 1.1 1.7 1.6 1.5.7 2.5 1.4 2.5 2.8 0 1.6-1.3 2.7-3.3 2.7-.9 0-1.8-.2-2.6-.7l.3-1.5z"
            fill="#111827"
          />
        </svg>
      ),
    },
    {
      name: 'Java',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.5 18.5c2.5.3 5.3-.2 7.3-1.4-.8.7-2.3 1.3-3.6 1.4-1.6.2-3.1 0-3.7 0zm-1.8-2c3.5.4 7.2-.1 9.8-1.7-1.1.9-3.2 1.6-5 1.7-2 .1-4-.1-4.8 0zm6.5-7.5c1 .9.7 1.8.4 2.7-.5 1.5-1.7 2.4-2.6 3.6 1.3-.2 2.5-.9 3.2-1.9.8-1.2.7-2.6-.2-3.6-.3-.3-.6-.6-.8-.8zm-3.9 6.2c-2.4-.2-4.4-1.3-4.3-2.6.1-1.3 2.3-2.1 4.7-2 1.8.1 3.5.9 3.8 2 .3 1.3-1.7 2.4-4.2 2.6zm6.3-8.8c.4 1.2-.2 2.5-1 3.4-1 1-2.2 1.8-3.4 2.7 1.4-.4 2.8-1.2 3.6-2.3.9-1.3.9-2.6.2-3.8l.6 0z"
            fill="#f97316"
          />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      level: 'Currently Learning',
      icon: (
        <svg className="w-4 h-4 rounded-sm" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#3178c6" rx="3" />
          <path
            d="M12.5 12h-4v7h-2v-7h-4v-2h10v2zm5 2.5c0-.6-.5-1-1.2-1.3-.9-.4-2.5-.8-2.5-2.2 0-1.4 1.1-2.5 2.8-2.5 1 0 1.8.3 2.5.8l-.8 1.6c-.6-.4-1.1-.6-1.7-.6-.6 0-1 .3-1 .8 0 .6.5.9 1.4 1.3 1.4.6 2.3 1.3 2.3 2.4 0 1.6-1.2 2.6-3 2.6-1.1 0-2.2-.4-3-1l.8-1.6c.7.5 1.5.8 2.2.8.7 0 1.2-.3 1.2-.7z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      name: 'SQL',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

  // 2. Frameworks & Tools
  const frameworksTools = [
    {
      name: 'React',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4 text-[#61dafb]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61dafb" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61dafb" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61dafb" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61dafb" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#68a063">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
          <path d="M12 6.8l4.5 2.6v5.2L12 17.2l-4.5-2.6V9.4L12 6.8z" />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
            fill="#e2e8f0"
          />
        </svg>
      ),
    },
    {
      name: 'PyTorch / OpenCV',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l1.8 3.6L18 8.4l-3.6 3.6L15.3 17 12 14.8 8.7 17l.9-5-3.6-3.6 4.2-1.8L12 3z" fill="#ee4c2c" />
        </svg>
      ),
    },
    {
      name: 'FastAPI',
      level: 'Currently Learning',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M13 7l-4 6h4l-2 5 6-7h-4l2-4z" fill="#009688" />
        </svg>
      ),
    },
    {
      name: 'Vite',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M20.2 4.4L12.5 21.8 4 4.6l9.2 2.8 7-3z" fill="#bd34fe" />
          <path d="M14.6 3.4l-5.8 2.2L12 21.8l2.6-18.4z" fill="#ffea83" />
        </svg>
      ),
    },
    {
      name: 'Linux / Bash',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  // 3. Core CS Concepts
  const coreConcepts = [
    {
      name: 'Data Structures & Algorithms',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="19" r="2" />
          <path d="M12 7l-5 3.5M12 7l5 3.5M6 14v3M18 14v3" />
        </svg>
      ),
    },
    {
      name: 'OOP (Object-Oriented Programming)',
      level: 'Proficient',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
          <path d="M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      name: 'DBMS (Database Management)',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      ),
    },
    {
      name: 'Operating Systems (OS)',
      level: 'Familiar',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
    },
    {
      name: 'Computer Networks (CN)',
      level: 'Currently Learning',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2">
          <rect x="2" y="2" width="6" height="6" rx="1" />
          <rect x="16" y="2" width="6" height="6" rx="1" />
          <rect x="9" y="16" width="6" height="6" rx="1" />
          <path d="M5 8v3a2 2 0 002 2h10a2 2 0 002-2V8M12 13v3" />
        </svg>
      ),
    },
    {
      name: 'Machine Learning Foundations',
      level: 'Currently Learning',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" />
        </svg>
      ),
    },
  ];

  const categories = [
    {
      id: 'languages',
      title: 'Languages',
      badge: '// 01_CODE',
      skills: languages,
    },
    {
      id: 'frameworks-tools',
      title: 'Frameworks & Tools',
      badge: '// 02_STACK',
      skills: frameworksTools,
    },
    {
      id: 'core-cs',
      title: 'Core CS Concepts',
      badge: '// 03_THEORY',
      skills: coreConcepts,
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Tech Stack and Skills Section"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-500/15"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
              // 03. TOOLKIT
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">
              Skills
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Hover over any skill badge to inspect my comfort level and hands-on familiarity.
          </p>
        </div>

        {/* Legend / Status indicators */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 p-2.5 rounded-xl bg-[#0e131d]/80 border border-emerald-500/20 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span className="text-emerald-300">Proficient</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            <span className="text-lime-300">Familiar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_6px_#5eead4] animate-pulse" />
            <span className="text-teal-200">Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col justify-between rounded-2xl p-6 sm:p-7
              bg-[#0e131d]/85 backdrop-blur-xl border border-emerald-500/20
              shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:border-emerald-500/40
              transition-colors duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-emerald-500/15">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{cat.title}</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {cat.badge}
                </span>
              </div>

              {/* Badges Layout */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Micro bottom status */}
            <div className="mt-6 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{cat.skills.length} competencies</span>
              <span className="text-emerald-500/50">AIML_V2</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSkills;

