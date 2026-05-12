const footerLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#060d1a] overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/70 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f59e0b] flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.45)]">
                <span className="font-display font-bold text-[#0a1628] text-sm leading-none">JA</span>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">J. Abiraj</span>
            </div>
            <p className="font-body text-white/30 text-xs max-w-[180px] text-center md:text-left leading-relaxed">
              Professional Tutor &middot; BSc(Hons) Computer Science
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-body text-white/35 text-sm hover:text-[#f59e0b] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 font-body text-white/35 text-xs hover:text-[#f59e0b] transition-colors duration-200"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center group-hover:border-[#f59e0b]/45 group-hover:bg-[#f59e0b]/8 transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Bottom rule + copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] text-center">
          <p className="font-body text-white/22 text-xs">
            © 2025 J. Abiraj — BSc(Hons) Computer Science | Professional Tutor
          </p>
        </div>
      </div>
    </footer>
  )
}
