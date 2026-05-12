import { useInView } from '../hooks/useInView'

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ChemistryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v8.5L5.5 17A4 4 0 009.354 23h5.292a4 4 0 003.854-5.5L15 11.5V3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M8 7h8" />
    <circle cx="10" cy="17" r="1" fill="currentColor" />
    <circle cx="14" cy="19" r="0.8" fill="currentColor" />
  </svg>
)

const ICTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l2 2-2 2M13 12h2" />
  </svg>
)

const subjects = [
  {
    num: '01',
    icon: <ChemistryIcon />,
    title: 'A/L Chemistry',
    badge: 'Tamil Medium',
    desc: 'Structured A/L Chemistry tuition — from atoms to organic reactions — built around exam success and conceptual clarity.',
    features: [
      'Full syllabus: Organic, Inorganic & Physical',
      'Past paper analysis & model answers',
      'Practical theory & experiment-based learning',
      'Simplified for deep, lasting understanding',
    ],
  },
  {
    num: '02',
    icon: <ICTIcon />,
    title: 'A/L & O/L ICT',
    badge: 'English & Tamil Medium',
    desc: 'Comprehensive ICT tuition covering both O/L and A/L syllabi — theory, programming, and exam-focused practicals.',
    features: [
      'O/L & A/L ICT full syllabus coverage',
      'Programming: Python, HTML/CSS, databases',
      'Past paper training with marking schemes',
      'Instruction in English or Tamil medium',
    ],
  },
]

function SubjectCard({ subject, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="group relative bg-[#1e3a5f]/50 backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6 overflow-hidden border border-[#f59e0b]/10 hover:border-[#f59e0b]/35 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(245,158,11,0.18)] cursor-default"
      style={{ opacity: 0, animation: inView ? `fadeInUp 0.75s ease-out ${delay}s forwards` : 'none' }}
    >
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-80" />

      {/* Large number watermark */}
      <span className="absolute top-5 right-6 font-display text-8xl font-black text-[#f59e0b]/[0.05] select-none leading-none pointer-events-none">
        {subject.num}
      </span>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center group-hover:bg-[#f59e0b]/20 group-hover:scale-110 group-hover:border-[#f59e0b]/40 transition-all duration-300 relative z-10">
        {subject.icon}
      </div>

      {/* Title + badge */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-2xl font-bold text-white">{subject.title}</h3>
        <span className="self-start bg-[#f59e0b]/12 border border-[#f59e0b]/35 text-[#f59e0b] text-xs font-semibold font-body px-3.5 py-1 rounded-full uppercase tracking-wider">
          {subject.badge}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-white/55 text-sm leading-relaxed">{subject.desc}</p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2.5">
        {subject.features.map(f => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon />
            <span className="font-body text-white/70 text-sm leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#f59e0b]/[0.05] blur-3xl group-hover:bg-[#f59e0b]/[0.12] transition-all duration-500 pointer-events-none" />
    </div>
  )
}

export default function Subjects() {
  const [headRef, headInView] = useInView()

  return (
    <section id="subjects" className="relative py-28 bg-[#0a1628] px-6 overflow-hidden">
      {/* Section top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#f59e0b]/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            What I Teach
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Subjects I <span className="text-gold-gradient">Teach</span>
          </h2>
          <p className="mt-4 font-body text-white/45 text-base max-w-sm mx-auto">
            Comprehensive tuition across two core subjects, tailored for exam success
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {subjects.map((s, i) => (
            <SubjectCard key={s.num} subject={s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
