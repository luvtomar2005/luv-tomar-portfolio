import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useState } from 'react'

const ease = [0.25, 0.1, 0.25, 1]

function TechTag({ children }) {
  return (
    <span className="rounded-md bg-white/[0.05] px-2.5 py-1 font-sans text-[12px] font-medium text-body">
      {children}
    </span>
  )
}

const ProjectCard = ({ project }) => {
  const [showArchitecture, setShowArchitecture] = useState(false)

  return (
    <article
      className={`group rounded-xl p-5 transition-[background-color,box-shadow] duration-300 sm:p-8 ${
        project.featured
          ? 'bg-elevated ring-1 ring-accent/15 hover:bg-elevated hover:ring-accent/25'
          : 'bg-elevated/70 hover:bg-elevated/90'
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-xl font-semibold tracking-tight text-heading sm:text-2xl">{project.title}</h3>
        {project.featured && (
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Featured</span>
        )}
      </div>

      <p className="mt-2 font-sans text-[14px] font-medium text-accent/90">{project.tagline}</p>
      <p className="mt-3 max-w-3xl font-sans text-[15px] leading-relaxed text-body sm:text-[16px]">{project.description}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-3 sm:gap-4">
        {project.architecture.map(({ title, detail }) => (
          <div key={title} className="border-l-2 border-accent/25 pl-3">
            <p className="font-sans text-[13px] font-medium text-heading">{title}</p>
            <p className="mt-1 font-sans text-[12px] leading-relaxed text-muted">{detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 font-mono text-[12px] text-muted">{project.systemFlow}</p>

      <div className="mt-6">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Engineering highlights</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 font-sans text-[13px] leading-snug text-body">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border pt-5 sm:gap-3">
        <button
          type="button"
          onClick={() => setShowArchitecture((prev) => !prev)}
          className="rounded-lg border border-border px-4 py-2 font-sans text-[13px] font-medium text-heading transition-colors duration-200 hover:border-accent/35 hover:text-accent"
        >
          {showArchitecture ? 'Hide architecture' : 'Architecture notes'}
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 font-sans text-[13px] font-medium text-page transition-[filter] duration-200 hover:brightness-110"
        >
          <FiGithub size={16} aria-hidden />
          GitHub
        </a>

        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 font-sans text-[13px] font-medium text-heading transition-colors duration-200 hover:border-accent/35 hover:text-accent"
          >
            <FiExternalLink size={15} aria-hidden />
            Live demo
          </a>
        ) : null}
      </div>

      {showArchitecture && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease }}
          className="mt-5 space-y-3 rounded-lg bg-page/70 p-4 font-sans text-[13px] leading-relaxed text-body sm:p-5"
        >
          {project.architectureNotes.map(({ label, text }) => (
            <p key={label}>
              <span className="font-medium text-heading">{label}:</span> {text}
            </p>
          ))}
        </motion.div>
      )}
    </article>
  )
}

export default ProjectCard
