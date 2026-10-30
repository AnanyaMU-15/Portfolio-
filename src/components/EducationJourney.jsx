import React from 'react';

/**
 * EducationJourney Component:
 * - Vertical milestone timeline connected by an illuminated emerald line with glowing nodal dots.
 * - 3 Milestones:
 *     2026: B.Tech 2nd Year
 *     2025: B.Tech 1st Year
 *     2024: Completed My PU
 * - Compact 2x2 grid of accomplishment callouts with subtle hover highlights.
 * - Cyber-emerald aesthetic (#0d1117, #10b981, lime accents)
 */
const EducationJourney = () => {
  const milestones = [
    {
      year: '2026',
      badge: 'Current / Sophomore',
      title: 'B.Tech in AIML — 2nd Year',
      institution: 'K.S. Institute of Technology, Bengaluru',
      note: 'Diving deep into Machine Learning neural architectures, Data Structures & Algorithms, and shipping full-stack web applications.',
      active: true,
    },
    {
      year: '2025',
      badge: 'Freshman Year',
      title: 'B.Tech in AIML — 1st Year',
      institution: 'K.S. Institute of Technology, Bengaluru',
      note: 'Mastered engineering fundamentals in Python, C++, and object-oriented programming while joining college technical clubs.',
      active: false,
    },
    {
      year: '2024',
      badge: 'Pre-University',
      title: 'Completed My PU (Pre-University)',
      institution: 'Karnataka State Pre-University Board',
      note: 'Graduated with strong academic distinction in Science & Mathematics, establishing a core foundation for Computer Science & AI.',
      active: false,
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '3rd Place - College Hackathon',
      subtitle: 'Built an automated campus solution during a 24-hr team sprint.',
      tag: 'Competition',
      color: 'border-emerald-500/30 text-emerald-300',
    },
    {
      icon: '⚡',
      title: '50+ LeetCode Problems Solved',
      subtitle: 'Consistent algorithmic practice in Arrays, Trees & Dynamic Logic.',
      tag: 'Problem Solving',
      color: 'border-lime-500/30 text-lime-300',
    },
    {
      icon: '👥',
      title: 'Tech Club Member',
      subtitle: 'Collaborating in KSIT developer initiatives, AI workshops & peer code reviews.',
      tag: 'Community',
      color: 'border-teal-500/30 text-teal-300',
    },
    {
      icon: '📜',
      title: 'AIML Certifications',
      subtitle: 'Completed specialized coursework in Python for Data Science and Machine Learning.',
      tag: 'Credentials',
      color: 'border-emerald-400/30 text-emerald-200',
    },
  ];

  return (
    <section
      id="campus-life"
      aria-label="Education and Campus Journey"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-500/15"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
              // 04. ACADEMICS &amp; ACTIVITIES
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Milestones
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">
              Campus Journey
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            My academic progression at KSIT Bengaluru alongside campus accomplishments and continuous skill-building.
          </p>
        </div>

        {/* Live Academic Status Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e131d]/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 backdrop-blur-md self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span>Status: B.Tech AIML (Sophomore)</span>
        </div>
      </div>

      {/* Main Grid: Timeline (Left) + Achievements (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 relative">
          
          {/* Illuminated Vertical Emerald Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500 to-lime-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

          {/* Timeline Nodes */}
          <div className="space-y-8 sm:space-y-10">
            {milestones.map((m, idx) => (
              <div key={m.year} className="relative flex items-start gap-5 sm:gap-7 group">
                
                {/* Glowing Nodal Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  {m.active ? (
                    <div className="relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#080c12] border-2 border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)]">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-emerald-400 to-lime-300" />
                      <span className="absolute inset-0 rounded-full bg-emerald-400/25 animate-ping" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#080c12] border-2 border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_14px_rgba(16,185,129,0.5)] transition-all">
                      <span className="w-2 h-2 rounded-full bg-emerald-500/60 group-hover:bg-lime-400 transition-colors" />
                    </div>
                  )}
                </div>

                {/* Milestone Card */}
                <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-[#0e131d]/85 backdrop-blur-xl border border-emerald-500/20 shadow-[0_6px_25px_0_rgba(0,0,0,0.5)] group-hover:border-emerald-400/50 group-hover:shadow-[0_10px_35px_-5px_rgba(16,185,129,0.25)] transition-all duration-300">
                  
                  {/* Top Bar with Year Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                      {m.year}
                    </span>
                    <span className="text-[11px] font-mono text-lime-400/90 uppercase tracking-wider">
                      {m.badge}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {m.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-emerald-400/80 font-mono mt-0.5">
                    {m.institution}
                  </div>

                  {/* 1-Line Brief Note */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                    {m.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Compact 2x2 Accomplishment Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Key Highlights</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-lime-950/60 text-lime-400 border border-lime-500/30">
                2x2 GRID
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Active achievements, coding metrics, and student involvement.
            </p>
          </div>

          {/* 2x2 Grid with Subtle Hover Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-2xl bg-[#0e131d]/85 backdrop-blur-xl border border-emerald-500/20
                  hover:border-emerald-400/60 hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.3)]
                  hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-400 border border-emerald-500/20">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[10px] font-mono text-emerald-500/60">
                  <span>VERIFIED</span>
                  <span className="group-hover:text-lime-400 transition-colors">&rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Terminal-Style Campus Note */}
          <div className="mt-5 p-4 rounded-xl bg-[#080c12]/90 border border-emerald-500/20 text-xs font-mono text-slate-400">
            <span className="text-emerald-400">$</span> campus.status()
            <div className="text-emerald-300 mt-1">
              &quot;Enthusiastic about joining hackathon teams, collaborating on open source, and building intelligent web projects.&quot;
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationJourney;

