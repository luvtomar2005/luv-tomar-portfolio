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

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-[120px] sm:px-8">
      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="font-['Space_Grotesk'] text-[36px] font-bold text-[#F0F0F5] sm:text-[48px]">Let&apos;s Work Together</h2>
        <p className="mt-4 max-w-[480px] font-['Inter'] text-[16px] text-[#6B7280]">
          I&apos;m actively looking for backend and full-stack internship opportunities. If you&apos;re shipping
          production systems, I&apos;d love to contribute.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent px-5 py-2.5 font-['Inter'] text-[14px] text-[#F0F0F5] transition-colors duration-200 hover:border-[#00D4FF] hover:text-[#00D4FF]"
              >
                <Icon />
                {link.label}
              </a>
            )
          })}
        </div>

        <p className="mt-6 font-['Inter'] text-[12px] text-[#4B5563]">Response within 24 hours · Open to remote</p>
      </motion.div>
    </section>
  )
}

export default Contact
