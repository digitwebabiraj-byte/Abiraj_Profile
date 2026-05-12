export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0a1628] overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Morphing blobs */}
        <div
          className="absolute -top-40 -right-40 w-[620px] h-[620px] bg-[#f59e0b]/[0.07] blur-[110px] animate-blob"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-[#1e3a5f]/70 blur-[90px] animate-blob"
          style={{ animationDelay: '4s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#f59e0b]/[0.04] blur-[130px]" />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Floating geometric accents */}
        <div className="absolute top-[14%] left-[7%]  w-12 h-12 border border-[#f59e0b]/20 rounded-xl rotate-12 animate-float"  style={{ animationDelay: '1s' }} />
        <div className="absolute top-[22%] right-[9%] w-8  h-8  border border-[#f59e0b]/15 rounded-full   animate-floatX" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[28%] left-[11%] w-5 h-5 bg-[#f59e0b]/10 rounded-sm rotate-45 animate-float"   style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[22%] right-[7%]  w-10 h-10 border border-[#f59e0b]/10 rotate-[25deg] animate-floatX" style={{ animationDelay: '1.8s' }} />
        <div className="absolute top-[55%] left-[4%]   w-3  h-3  rounded-full bg-[#f59e0b]/20 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 pt-24 pb-20">

        {/* Avatar with pulsing rings */}
        <div
          className="relative w-[152px] h-[152px]"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.1s forwards' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b]/55" style={{ animation: 'ringExpand 2.5s ease-out infinite' }} />
          <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b]/35" style={{ animation: 'ringExpand 2.5s ease-out 0.83s infinite' }} />
          <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b]/18" style={{ animation: 'ringExpand 2.5s ease-out 1.66s infinite' }} />
          <div className="absolute inset-0 rounded-full border-[3px] border-[#f59e0b] flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] to-[#0c1e36] animate-pulse-glow">
            <span className="font-display text-5xl font-bold text-[#f59e0b] select-none">JA</span>
          </div>
        </div>

        {/* Name */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.28s forwards' }}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">J. </span>
            <span className="text-gold-gradient">Abiraj</span>
          </h1>
        </div>

        {/* Degree badge */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.44s forwards' }}>
          <span className="inline-flex items-center gap-2.5 glass px-5 py-2.5 rounded-full text-[#f59e0b] text-sm font-medium font-body tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
            BSc(Hons) in Computer Science (Reading)
          </span>
        </div>

        {/* Professional Tutor */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.58s forwards' }}>
          <p className="font-display text-2xl md:text-3xl font-semibold text-white/85 italic">
            Professional <span className="text-[#f59e0b] not-italic font-bold">Tutor</span>
          </p>
        </div>

        {/* Tagline */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.72s forwards' }}>
          <p className="font-body text-white/55 text-lg md:text-xl max-w-md leading-relaxed">
            Empowering students in Chemistry &amp; ICT with clarity and confidence
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-1"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.86s forwards' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-[#f59e0b] text-[#0a1628] font-body font-bold text-base px-8 py-4 rounded-full shadow-[0_0_24px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] hover:bg-amber-400 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Me Now
          </a>
          <a
            href="#subjects"
            className="inline-flex items-center justify-center gap-2.5 glass text-[#f59e0b] font-body font-bold text-base px-8 py-4 rounded-full hover:bg-[#f59e0b]/20 hover:scale-105 transition-all duration-300"
          >
            View Subjects
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Subject chips */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mt-1"
          style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 1s forwards' }}
        >
          {['A/L Chemistry', 'A/L ICT', 'O/L ICT', 'Tamil & English Medium'].map(tag => (
            <span
              key={tag}
              className="font-body text-xs text-white/35 border border-white/10 px-3.5 py-1 rounded-full hover:border-[#f59e0b]/30 hover:text-white/55 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: 'fadeIn 1s ease-out 1.4s forwards' }}
      >
        <span className="font-body text-white/25 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#f59e0b]/60 to-transparent animate-scroll-down" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  )
}
