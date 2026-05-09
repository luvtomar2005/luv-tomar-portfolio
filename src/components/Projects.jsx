import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useState } from 'react'

const viewport = { once: true, margin: '-80px' }
const ease = [0.25, 0.1, 0.25, 1]

function TechTag({ children }) {
  return (
    <span className="rounded-md bg-white/[0.05] px-2.5 py-1 font-sans text-[12px] font-medium tracking-wide text-body">
      {children}
    </span>
  )
}

const Projects = () => {
  const [showArchitecture, setShowArchitecture] = useState(false)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease }}
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Projects</p>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight tracking-tight text-heading">
            What I&apos;ve built and how it works
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-[17px] leading-relaxed text-body">
            Backend-first work with clear boundaries: auth, realtime, and deployment.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 space-y-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease }}
        >
          <article className="rounded-xl bg-elevated/80 p-6 transition-[background-color] duration-300 hover:bg-elevated sm:p-10">
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-heading sm:text-[1.65rem]">DevBridge</h3>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Featured</span>
            </div>
            <p className="mt-4 max-w-2xl font-sans text-[17px] leading-relaxed text-body">
              Developer networking platform with real-time communication.
            </p>

            <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {[
                { title: 'JWT auth', desc: 'HTTP-only cookies · middleware pipeline' },
                { title: 'Realtime chat', desc: 'Socket.io · deterministic room routing' },
                { title: 'REST API', desc: 'Domain routers · connection lifecycle' },
              ].map(({ title, desc }) => (
                <li key={title}>
                  <p className="font-sans text-[14px] font-medium text-heading">{title}</p>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-muted">{desc}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-accent/30 pl-4 font-sans text-[14px] leading-relaxed text-body">
              Deployed on AWS EC2 — environment-scoped config and CORS origin allowlists.
            </p>
            <p className="mt-3 pl-4 font-sans text-[13px] text-muted">
              Flow: client → API → database + WebSocket layer
            </p>

            <div className="mt-10">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Highlights</p>
              <ul className="mt-4 space-y-3 font-sans text-[15px] leading-relaxed text-body">
                <li>Real-time messaging via Socket.io</li>
                <li>Stateless JWT auth with HTTP-only cookies</li>
                <li>Backend-driven WebSocket lifecycle</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'MongoDB', 'Socket.io', 'React', 'JWT'].map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-8">
              <button
                type="button"
                onClick={() => setShowArchitecture((prev) => !prev)}
                className="rounded-lg border border-border bg-transparent px-5 py-2 font-sans text-[14px] font-medium text-heading transition-colors duration-200 hover:border-accent/35 hover:text-accent"
              >
                {showArchitecture ? 'Hide architecture' : 'Architecture notes'}
              </button>
              <a
                href="https://github.com/luvtomar2005/NODE-JS-2026"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2 font-sans text-[14px] font-medium text-page transition-[filter] duration-200 hover:brightness-110"
              >
                <FiGithub size={17} aria-hidden />
                GitHub
              </a>
            </div>

            {showArchitecture && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease }}
                className="mt-8 space-y-4 rounded-lg bg-page/60 p-5 font-sans text-[14px] leading-relaxed text-body sm:p-6"
              >
                  <p>
                    <span className="font-medium text-heading">Request flow:</span> auth middleware and validation, then
                    domain controllers backed by MongoDB models.
                  </p>
                  <p>
                    <span className="font-medium text-heading">Realtime:</span> deterministic room routing and synchronized message
                    events over Socket.io.
                  </p>
                  <p>
                    <span className="font-medium text-heading">Ops:</span> JWT session security, connection lifecycle, CORS
                    restrictions, EC2-oriented configuration.
                  </p>
              </motion.div>
            )}
          </article>

          <article className="rounded-xl bg-elevated/50 p-6 sm:p-8">
            <p className="max-w-prose font-sans text-[16px] leading-relaxed text-body">
              Portfolio built with focus on clarity, performance, and backend-first storytelling.
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
