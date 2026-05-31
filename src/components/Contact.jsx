import { motion, useReducedMotion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  {
    label: 'Email',
    href: 'mailto:luvtomar2005@gmail.com',
    icon: FiMail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luvtomar/',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/luvtomar2005',
    icon: FiGithub,
  },
]

const Contact = () => {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <motion.div {...reveal} className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
        <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.35rem)] font-semibold leading-tight tracking-tight text-heading">
          Open for backend &amp; full-stack internships
        </h2>
        <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-body">
          If your team ships APIs, caches hot paths, or runs realtime infra — I want to contribute.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2.5">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-elevated/60 px-5 py-2.5 font-sans text-[14px] font-medium text-heading transition-[border-color,background-color] duration-200 hover:border-accent/35 hover:bg-elevated"
              >
                <Icon size={17} aria-hidden />
                {link.label}
              </a>
            )
          })}
        </div>

        <p className="mt-8 font-sans text-[13px] text-muted">luvtomar2005@gmail.com · Reply within 24h · Remote-friendly</p>
      </motion.div>
    </section>
  )
}

export default Contact
