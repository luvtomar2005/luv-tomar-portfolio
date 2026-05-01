import { useEffect, useState } from 'react'

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact']

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}

export default useActiveSection
