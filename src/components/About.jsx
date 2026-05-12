import { useInView } from '../hooks/useInView'

const stats = [
  {
    value: 'BSc(Hons)',
    label: 'Computer Science',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    value: '5+',
    label: 'Years Experience',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '100+',
    label: 'Students Taught',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    value: '2',
    label: 'Core Subjects',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
]

const highlights = [
  'A/L Chemistry — Tamil Medium',
  'A/L & O/L ICT — English & Tamil',
  'Patient, student-centred approach',
  'Exam-focused structured lessons',
]

export default function About() {
  const [headRef, headInView]   = useInView()
  const [bioRef,  bioInView]    = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <section id="about" className="relative py-28 bg-[#080f1e] px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#f59e0b]/[0.04] blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[#1e3a5f]/50 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Background
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            About <span className="text-gold-gradient">Me</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — bio */}
          <div
            ref={bioRef}
            className="flex flex-col gap-7"
            style={{ opacity: 0, animation: bioInView ? 'fadeInUp 0.8s ease-out 0.1s forwards' : 'none' }}
          >
            <span className="font-display text-[110px] leading-[0.75] text-[#f59e0b]/12 font-black select-none" aria-hidden>
              "
            </span>
            <div className="flex flex-col gap-5 -mt-5">
              <p className="font-body text-white/78 text-lg leading-relaxed">
                J. Abiraj is a dedicated tutor currently reading for a{' '}
                <span className="text-[#f59e0b] font-semibold">BSc(Hons) in Computer Science</span>.
                He specializes in{' '}
                <span className="text-white font-medium">A/L Chemistry</span> and{' '}
                <span className="text-white font-medium">A/L &amp; O/L ICT</span>, teaching in both
                Tamil and English mediums.
              </p>
              <p className="font-body text-white/50 text-base leading-relaxed">
                Committed to helping every student achieve their full academic potential through
                patient guidance, structured lessons, and an exam-focused approach that builds
                both confidence and competence.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-2.5">
              {highlights.map(h => (
                <div key={h} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                  <span className="font-body text-white/60 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 text-[#f59e0b] font-body font-semibold text-sm hover:gap-4 transition-all duration-300 group mt-1"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right — stat cards */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon }, i) => (
              <div
                key={label}
                className="group relative bg-[#1e3a5f]/40 backdrop-blur-sm border border-[#f59e0b]/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#f59e0b]/40 hover:bg-[#1e3a5f]/65 hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 overflow-hidden"
                style={{
                  opacity: 0,
                  animation: statsInView ? `fadeInUp 0.7s ease-out ${0.08 + i * 0.12}s forwards` : 'none',
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b]/20 transition-colors duration-300">
                  {icon}
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[#f59e0b]">{value}</div>
                  <div className="font-body text-white/50 text-xs mt-0.5 leading-snug">{label}</div>
                </div>
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/18 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
