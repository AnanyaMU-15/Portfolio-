import React from 'react';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import EducationJourney from './components/EducationJourney';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 selection:bg-emerald-500 selection:text-black font-sans">
      
      {/* Subtle animated matrix-dot grid canvas */}
      <MatrixGridCanvas />

      {/* Interactive Mouse Feature (Easter Egg): Trailing light spark & glowing ring */}
      <CursorFollower />

      {/* Cyber scanlines overlay for high-tech aesthetic */}
      <div className="fixed inset-0 pointer-events-none z-1 cyber-scanlines opacity-25" />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 1. Intro Hero Section */}
        <Hero />

        {/* 2. Featured Projects Showcase (Directly below Intro) */}
        <FeaturedProjects />

        {/* 3. Tech Stack & Skills Section (Directly below Projects) */}
        <TechStackSkills />

        {/* 4. Education & Campus Journey Section (Directly below Skills) */}
        <EducationJourney />

        {/* 5. About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-emerald-500/15">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">// 05. PROFILE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Ananya</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0e131d]/85 border border-emerald-500/20 backdrop-blur-md">
              <div className="text-emerald-400 font-mono text-xs mb-2">01. ACADEMICS</div>
              <h3 className="text-lg font-semibold text-white">B.Tech in AIML</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                2nd year student at K.S. Institute of Technology, exploring deep learning architectures, mathematics for ML, and software engineering.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0e131d]/85 border border-emerald-500/20 backdrop-blur-md">
              <div className="text-lime-400 font-mono text-xs mb-2">02. DEVELOPMENT</div>
              <h3 className="text-lg font-semibold text-white">Full-Stack Craft</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Building responsive web applications with React, modern Tailwind CSS, Node.js, and integrating smart AI capabilities.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0e131d]/85 border border-emerald-500/20 backdrop-blur-md">
              <div className="text-teal-400 font-mono text-xs mb-2">03. ASPIRATION</div>
              <h3 className="text-lg font-semibold text-white">Internships &amp; Hackathons</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Actively seeking summer internships, collaborative developer teams, and participating in hackathons across Bengaluru.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Contact Section ('Let’s Collaborate & Build') */}
        <ContactSection />
      </main>

      {/* Cyber Footer */}
      <Footer />

    </div>
  );
}

export default App;
