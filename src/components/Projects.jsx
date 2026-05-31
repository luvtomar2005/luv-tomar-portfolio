import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
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
    <section id="projects" className="scroll-mt-20 border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div {...reveal}>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Projects</p>
          <h2 className="mt-3 max-w-[26ch] font-display text-[clamp(1.6rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-heading">
            Systems built for scale, reliability, and clear API boundaries
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-[15px] leading-relaxed text-body">
            Production-oriented backends — caching, analytics, auth, and realtime — with architecture notes you can
            scan in under a minute.
          </p>
        </motion.div>

        <div className="mt-10 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-40px' },
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 },
                  })}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
