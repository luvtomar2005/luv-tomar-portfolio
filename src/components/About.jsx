import { motion } from 'framer-motion'

const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
}

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-12 lg:gap-20">
        <motion.div {...sectionReveal} className="lg:col-span-7">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">About</p>
          <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight tracking-tight text-heading">
            Building systems that scale, not just code that works
          </h2>
          <div className="mt-10 max-w-prose space-y-5 font-sans text-[17px] leading-[1.75] text-body sm:text-[18px]">
            <p>I am Luv Tomar, a Computer Science student at GLA University.</p>
            <p>I am a backend-focused full stack developer working primarily across the MERN stack.</p>
            <p>
              My approach is architecture-first: data flow, API contracts, and reliability before implementation detail.
            </p>
            <p>
              I am actively looking for internship opportunities where I can solve real backend problems and contribute to
              production-grade systems.
            </p>
          </div>

          <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.06 }} className="mt-12">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Focus areas</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[15px] text-heading">
              {['Backend system design', 'Real-time applications', 'API architecture'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent/80" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.aside {...sectionReveal} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.04 }} className="lg:col-span-5">
          <dl className="space-y-0 rounded-xl bg-elevated/80 p-6 sm:p-8">
            {[
              ['Currently building', 'DevBridge'],
              ['Open to', 'Remote internships'],
              ['Focus area', 'Backend engineering'],
              ['Location', 'Mathura, India'],
            ].map(([label, value], i, arr) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                  i < arr.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <dt className="shrink-0 font-sans text-[13px] text-muted">{label}</dt>
                <dd className="font-sans text-[15px] font-medium text-heading sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  )
}

export default About
