import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  {
    label: 'Email',
    value: 'luvtomar2005@gmail.com',
    href: 'mailto:luvtomar2005@gmail.com',
    icon: FiMail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/luvtomar',
    href: 'https://www.linkedin.com/in/luvtomar/',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/luvtomar2005',
    href: 'https://github.com/luvtomar2005',
    icon: FiGithub,
  },
]

const viewport = { once: true, margin: '-80px' }

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        className="mx-auto flex w-full max-w-2xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
        <h2 className="mt-5 font-display text-[clamp(1.85rem,4.5vw,2.65rem)] font-semibold leading-tight tracking-tight text-heading">
          Let&apos;s work together
        </h2>
        <p className="mt-6 max-w-md font-sans text-[17px] leading-relaxed text-body">
          Actively pursuing backend and full-stack internships. If you ship production systems, I&apos;d like to contribute.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-elevated/60 px-5 py-2.5 font-sans text-[14px] font-medium text-heading transition-[border-color,color,background-color] duration-200 hover:border-accent/35 hover:bg-elevated"
              >
                <Icon size={17} aria-hidden />
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>

        <p className="mt-10 font-sans text-[13px] text-muted">Typically reply within 24 hours · Remote-friendly</p>
      </motion.div>
    </section>
  )
}

export default Contact
