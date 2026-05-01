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
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,15,0.85)] backdrop-blur-[12px]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-['Space_Grotesk'] text-[20px] font-semibold tracking-wide text-[#00D4FF]"
          aria-label="Scroll to home section"
        >
          LT
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`font-['Inter'] text-[14px] font-normal transition-colors duration-200 ${
                  isActive ? 'text-[#00D4FF]' : 'text-[#6B7280] hover:text-[#F0F0F5]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center text-[#F0F0F5] md:hidden"
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
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,15,0.92)] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`py-3 text-left font-['Inter'] text-[14px] transition-colors duration-200 ${
                      isActive ? 'text-[#00D4FF]' : 'text-[#6B7280] hover:text-[#F0F0F5]'
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
