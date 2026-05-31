import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import resumePdf from '../utils/Luv_Tomar_resume.pdf'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/luvtomar2005', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luvtomar/', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:luvtomar2005@gmail.com', icon: FiMail },
]

const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <p className="font-display text-[14px] font-medium text-heading">Luv Tomar</p>
          <p className="mt-1 font-sans text-[12px] text-muted">Backend-focused full stack engineer · 2026</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 font-sans text-[13px] text-muted transition-colors hover:text-heading"
            >
              <Icon size={14} aria-hidden />
              {label}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[13px] text-muted transition-colors hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
