import { motion } from 'framer-motion'

const viewport = { once: true, margin: '-80px' }
const ease = [0.25, 0.1, 0.25, 1]

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
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease }}
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Skills</p>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight tracking-tight text-heading">
            Technical stack
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-[16px] leading-relaxed text-body">
            Depth in backend APIs and realtime systems; pragmatic UI for product delivery.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 space-y-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease }}
        >
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Backend (core)</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST API design', 'JWT auth'].map((skill) => (
                <SkillChip key={skill} emphasis>
                  {skill}
                </SkillChip>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Frontend</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS'].map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Infrastructure &amp; tools</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'npm'].map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>

          <p className="font-sans text-[14px] text-muted">250+ DSA problems solved — reinforcing patterns used in interviews and production debugging.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
