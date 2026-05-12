import { useInView } from '../hooks/useInView'

const EmailIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const contacts = [
  {
    icon: <EmailIcon />,
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/12',
    label: 'Email',
    value: 'abiraj30@gmail.com',
    note: 'Usually replies within 24 hours',
    buttonText: 'Send Email',
    href: 'mailto:abiraj30@gmail.com',
  },
  {
    icon: <PhoneIcon />,
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/12',
    label: 'Phone',
    value: '0776 921 300',
    note: 'Available Mon – Sat, 8am – 8pm',
    buttonText: 'Call Now',
    href: 'tel:+94776921300',
  },
  {
    icon: <WhatsAppIcon />,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-400/10',
    label: 'WhatsApp',
    value: '0776 921 300',
    note: 'Fastest response method',
    buttonText: 'Chat on WhatsApp',
    href: 'https://wa.me/94776921300',
  },
]

function ContactCard({ contact, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="group relative bg-[#1e3a5f]/40 backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-5 border border-white/5 hover:border-[#f59e0b]/25 hover:shadow-[0_16px_50px_rgba(245,158,11,0.12)] transition-all duration-400 overflow-hidden"
      style={{ opacity: 0, animation: inView ? `fadeInUp 0.75s ease-out ${delay}s forwards` : 'none' }}
    >
      {/* Gradient top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent group-hover:via-[#f59e0b]/65 transition-all duration-300" />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl ${contact.iconBg} ${contact.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        {contact.icon}
      </div>

      {/* Label + value + note */}
      <div className="flex flex-col gap-1">
        <span className="font-body text-white/38 text-xs uppercase tracking-[0.2em] font-medium">
          {contact.label}
        </span>
        <span className="font-body text-white font-semibold text-lg leading-tight">
          {contact.value}
        </span>
        <span className="font-body text-white/32 text-xs mt-0.5">{contact.note}</span>
      </div>

      {/* Button */}
      <a
        href={contact.href}
        target={contact.href.startsWith('http') ? '_blank' : undefined}
        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="mt-auto w-full bg-[#f59e0b] text-[#0a1628] font-body font-bold text-sm py-3.5 rounded-xl text-center hover:bg-amber-400 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all duration-300"
      >
        {contact.buttonText}
      </a>

      {/* Corner glow */}
      <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[#f59e0b]/[0.05] blur-2xl group-hover:bg-[#f59e0b]/[0.1] transition-all duration-500 pointer-events-none" />
    </div>
  )
}

export default function Contact() {
  const [headRef, headInView] = useInView()

  return (
    <section id="contact" className="relative py-28 bg-[#0a1628] px-6 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-[#f59e0b]/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{ opacity: 0, animation: headInView ? 'fadeInUp 0.8s ease-out forwards' : 'none' }}
        >
          <span className="inline-block font-body text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Reach Out
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <p className="mt-4 font-body text-white/45 text-base max-w-sm mx-auto">
            Ready to start your learning journey? Choose your preferred contact method.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} contact={c} delay={i * 0.14} />
          ))}
        </div>
      </div>
    </section>
  )
}
