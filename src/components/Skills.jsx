import { motion, useReducedMotion } from 'framer-motion'

function SkillChip({ children, emphasis = false }) {
  return (
    <span
      className={`rounded-md px-2.5 py-1 font-sans text-[13px] font-medium transition-colors duration-200 ${
        emphasis
          ? 'bg-accent/10 text-heading ring-1 ring-accent/20 hover:bg-accent/[0.14]'
          : 'bg-white/[0.04] text-body ring-1 ring-transparent hover:bg-white/[0.07] hover:text-heading'
      }`}
    >
      {children}
    </span>
  )
}

const Skills = () => {
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
    <section id="skills" className="scroll-mt-20 border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div {...reveal}>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Skills</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-heading">
            Stack aligned with production backend work
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-[15px] leading-relaxed text-body">
            Depth in APIs, caching, auth, and realtime — with TypeScript/React for full-stack delivery.
          </p>
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.04 }} className="mt-10 space-y-8">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Backend &amp; systems</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Node.js',
                'Express.js',
                'Redis',
                'MongoDB',
                'Socket.IO',
                'REST API design',
                'JWT auth',
                'Rate limiting',
                'Pagination',
              ].map((skill) => (
                <SkillChip key={skill} emphasis>
                  {skill}
                </SkillChip>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Frontend &amp; languages</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Vite', 'Tailwind CSS'].map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Infrastructure</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'Docker (basics)'].map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>

          <p className="font-sans text-[13px] text-muted">
            250+ DSA problems — graph, tree, and sliding-window patterns applied to debugging and system tradeoffs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
