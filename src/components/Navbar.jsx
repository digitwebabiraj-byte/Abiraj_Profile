import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#f59e0b] flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_28px_rgba(245,158,11,0.7)] transition-shadow duration-300">
            <span className="font-display font-bold text-[#0a1628] text-sm leading-none">JA</span>
          </div>
          <span className="font-display font-semibold text-white text-lg hidden sm:block tracking-tight">
            J. Abiraj
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative font-body text-white/60 text-sm font-medium hover:text-white transition-colors duration-200 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#f59e0b] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#f59e0b] text-[#0a1628] font-body font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_0_18px_rgba(245,158,11,0.45)] hover:bg-amber-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.65)] hover:scale-105 transition-all duration-300"
          >
            Book a Session
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark px-6 pb-6 flex flex-col gap-4 border-t border-white/5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-white/70 text-base font-medium hover:text-[#f59e0b] transition-colors duration-200 py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="self-start bg-[#f59e0b] text-[#0a1628] font-body font-bold text-sm px-6 py-2.5 rounded-full mt-1"
          >
            Book a Session
          </a>
        </div>
      )}
    </header>
  )
}
