import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const linkClass =
  'relative rounded-md px-2.5 py-2 font-sans text-[13px] font-medium tracking-wide text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-heading'

const Navbar = () => {
  const activeSection = useActiveSection()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-page/80 backdrop-blur-md backdrop-saturate-150">
      <nav className="mx-auto flex h-[3.75rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-display text-[15px] font-semibold tracking-tight text-heading"
          aria-label="Scroll to home section"
        >
          LT
        </button>

        <div className="hidden items-center gap-1 md:flex md:gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`${linkClass} ${isActive ? 'text-heading' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-1 right-1 h-[2px] rounded-full bg-accent transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden
                />
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-heading transition-colors hover:bg-white/[0.04] md:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-border bg-page/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-lg px-3 py-3 text-left font-sans text-[14px] font-medium transition-colors ${
                      isActive ? 'bg-white/[0.06] text-heading' : 'text-muted hover:bg-white/[0.04] hover:text-heading'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
