import { motion, useReducedMotion } from 'framer-motion'

const About = () => {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      }

  return (
    <section id="about" className="scroll-mt-20 border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div {...reveal} className="lg:col-span-7">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">About</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-[clamp(1.6rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-heading">
            Architecture-first backend engineer
          </h2>
          <div className="mt-6 max-w-prose space-y-4 font-sans text-[15px] leading-[1.7] text-body sm:text-[16px]">
            <p>
              CS student at GLA University. I design backend systems — API contracts, cache strategy, auth boundaries,
              and data flow — before writing handlers.
            </p>
            <p>
              Shipped Redis-backed services, real-time chat, and EC2-deployed APIs. Looking for internships where I can
              own backend problems on production teams.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-sans text-[14px] text-heading">
            {[
              'REST & service design',
              'Redis caching & analytics',
              'Real-time (Socket.IO)',
              'JWT & protected routes',
              'Scalable API structure',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent/80" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          {...reveal}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: prefersReducedMotion ? 0 : 0.04 }}
          className="lg:col-span-5"
        >
          <dl className="rounded-xl bg-elevated/80 p-5 sm:p-6">
            {[
              ['Latest build', 'URL Shortener (Redis + analytics)'],
              ['Stack depth', 'Node · Redis · MongoDB · TS'],
              ['Open to', 'Backend / full-stack internships'],
              ['Location', 'Mathura, India · Remote OK'],
            ].map(([label, value], i, arr) => (
              <div
                key={label}
                className={`flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${
                  i < arr.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <dt className="shrink-0 font-sans text-[12px] text-muted">{label}</dt>
                <dd className="font-sans text-[14px] font-medium text-heading sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  )
}

export default About
