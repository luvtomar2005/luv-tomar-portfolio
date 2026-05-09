import { motion } from 'framer-motion'

const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center px-5 pt-[4.5rem] pb-28 sm:px-8 sm:pb-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 font-sans text-[13px] font-medium tracking-wide text-accent"
        >
          Available for internship · Backend engineering
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.04 }}
          className="font-display text-[clamp(2.5rem,7vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-heading"
        >
          Luv Tomar
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          className="mt-5 font-display text-xl font-medium text-body sm:text-2xl"
        >
          Backend engineer
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
          className="mt-8 max-w-xl space-y-4 font-sans text-[17px] leading-relaxed text-body sm:text-[18px]"
        >
          <p>Turning complex backend problems into efficient, reliable systems.</p>
          <p className="text-[15px] leading-relaxed text-muted sm:text-base">
            Node.js, Socket.io, REST APIs, AWS, and MongoDB — focused on scalable backends and real-time architecture.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 font-sans text-[14px] font-medium text-page transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-2.5 font-sans text-[14px] font-medium text-heading transition-colors duration-200 hover:border-accent/40 hover:text-accent"
          >
            Resume (PDF)
          </a>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="mt-10 max-w-lg font-sans text-[14px] text-muted"
        >
          250+ DSA problems — patterns over memorization. Building production-minded APIs and WebSocket layers.
        </motion.p>

        <motion.dl
          {...fadeUp}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
          className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:gap-6"
        >
          <div>
            <dt className="font-sans text-[12px] font-medium uppercase tracking-wider text-muted">Deployment</dt>
            <dd className="mt-1.5 font-sans text-[14px] text-heading">1 production app on AWS EC2</dd>
          </div>
          <div>
            <dt className="font-sans text-[12px] font-medium uppercase tracking-wider text-muted">Real-time</dt>
            <dd className="mt-1.5 font-sans text-[14px] text-heading">Socket.io architecture</dd>
          </div>
          <div>
            <dt className="font-sans text-[12px] font-medium uppercase tracking-wider text-muted">Security</dt>
            <dd className="mt-1.5 font-sans text-[14px] text-heading">JWT auth systems</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}

export default Hero
