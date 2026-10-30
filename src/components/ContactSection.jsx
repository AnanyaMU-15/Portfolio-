import React, { useState, useRef } from 'react';

/**
 * MagneticButton:
 * Icon button with a playful magnetic cursor attraction effect on hover.
 */
const MagneticButton = ({ href, label, icon, value, onClick }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    // Magnetic pull distance
    setPosition({ x: dx * 0.28, y: dy * 0.28 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: position.x === 0 ? 'transform 0.4s ease-out' : 'transform 0.1s ease-out',
      }}
      className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl
        bg-[#0e131d]/90 border border-emerald-500/25 backdrop-blur-xl
        hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]
        hover:bg-emerald-950/40 active:scale-95 transition-all duration-200"
    >
      {/* Icon with glowing ring */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-carbon-900 border border-emerald-500/30 text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400 transition-colors">
        {icon}
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-emerald-300 transition-colors">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-lime-300 transition-colors truncate max-w-[190px] sm:max-w-xs">
          {value}
        </span>
      </div>

      {/* Subtle arrow indicator */}
      <svg
        className="w-4 h-4 ml-auto text-emerald-500/40 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending with emerald spinner
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      // Reset feedback back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('ananyamu41@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-label="Get In Touch Section"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-500/15"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
            // 05. CONTACT
          </span>
          <span className="h-[1px] w-6 bg-emerald-500/40" />
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
            Inbox Open
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let’s{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">
            Collaborate &amp; Build
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">
          Open for summer internships, open-source projects, or tech chats. Drop me a message!
        </p>
      </div>

      {/* Main Container: 2-Column Responsive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Direct Links & Profile Telemetry (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-[#0e131d]/90 backdrop-blur-xl border border-emerald-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635] animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Direct Channels
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Reach Out Directly
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Prefer direct messaging or want to review my code repos? Connect with me through any of these networks.
            </p>

            {/* Magnetic Icon Buttons */}
            <div className="space-y-3.5">
              {/* Email Direct */}
              <MagneticButton
                href="mailto:ananyamu41@gmail.com"
                label="Direct Email"
                value="ananyamu41@gmail.com"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />

              {/* GitHub */}
              <MagneticButton
                href="https://github.com"
                label="Code Repositories"
                value="github.com/ananya-mu"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />

              {/* LinkedIn */}
              <MagneticButton
                href="https://linkedin.com"
                label="Professional Network"
                value="linkedin.com/in/ananya-mu"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Quick Copy Email Snippet */}
          <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              ananyamu41@gmail.com
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 transition-colors"
            >
              {copiedEmail ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0e131d]/90 backdrop-blur-xl border border-emerald-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Input: Your Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                YOUR NAME <span className="text-emerald-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Alex Chen"
                className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/25
                  text-white placeholder-slate-500 text-sm font-sans
                  focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50
                  hover:border-emerald-500/40 transition-all duration-200"
              />
            </div>

            {/* Input: Your Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                YOUR EMAIL <span className="text-emerald-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g., alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/25
                  text-white placeholder-slate-500 text-sm font-sans
                  focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50
                  hover:border-emerald-500/40 transition-all duration-200"
              />
            </div>

            {/* Input: Your Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                YOUR MESSAGE <span className="text-emerald-400">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Ananya, let's connect regarding a summer software internship or hackathon project..."
                className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/25
                  text-white placeholder-slate-500 text-sm font-sans resize-none
                  focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50
                  hover:border-emerald-500/40 transition-all duration-200"
              />
            </div>

            {/* Submit Button with Animated Loading Spinner & Sent Feedback */}
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 select-none ${
                  status === 'sent'
                    ? 'bg-emerald-500 text-carbon-950 shadow-[0_0_25px_rgba(16,185,129,0.7)] scale-[1.01]'
                    : status === 'sending'
                    ? 'bg-emerald-600/70 text-carbon-950 cursor-wait'
                    : 'bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-carbon-950 shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_30px_rgba(16,185,129,0.75)] hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {status === 'sending' && (
                  <>
                    {/* Emerald Loading Spinner */}
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-carbon-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Transmitting Message...</span>
                  </>
                )}

                {status === 'sent' && (
                  <span>Message Sent! 🚀</span>
                )}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Micro security & privacy guarantee */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span>ENCRYPTED VIA TLS</span>
              <span className="text-emerald-400/70">RESPONSE WITHIN 24H</span>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

