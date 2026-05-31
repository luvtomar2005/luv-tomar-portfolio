import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import resumePdf from '../utils/Luv_Tomar_resume.pdf'

const ease = [0.25, 0.1, 0.25, 1]

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease, delay },
        }

  return (
    <section id="home" className="relative scroll-mt-20 px-5 pt-[4.25rem] pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto w-full max-w-4xl">
        <motion.p {...fade()} className="mb-4 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          Backend-focused full stack · Open to internships
        </motion.p>

        <motion.h1
          {...fade(0.03)}
          className="font-display text-[clamp(2.25rem,6.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-heading"
        >
          Luv Tomar
        </motion.h1>

        <motion.p {...fade(0.06)} className="mt-3 font-display text-lg font-medium text-body sm:text-xl">
          I build APIs, caching layers, and real-time systems for production load.
        </motion.p>

        <motion.div {...fade(0.09)} className="mt-5 max-w-2xl space-y-3 font-sans text-[15px] leading-relaxed text-body sm:text-[16px]">
          <p>
            Backend engineer with full stack delivery — Redis-backed services, REST architecture, JWT auth, Socket.IO
            realtime, and AWS deployments. Architecture before implementation.
          </p>
          <p className="text-[14px] text-muted">Node.js · Express · Redis · MongoDB · TypeScript · Socket.IO · AWS EC2</p>
        </motion.div>

        <motion.div {...fade(0.12)} className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-sans text-[14px] font-medium text-page transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            View system projects
            <FiArrowRight size={16} aria-hidden />
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            download="Luv_Tomar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-sans text-[14px] font-medium text-heading transition-colors duration-200 hover:border-accent/40 hover:text-accent"
          >
            <FiFileText size={16} aria-hidden />
            Resume
          </a>
          <a
            href="https://github.com/luvtomar2005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border/70 px-5 py-2.5 font-sans text-[14px] font-medium text-muted transition-colors duration-200 hover:border-border hover:text-heading"
          >
            GitHub
          </a>
        </motion.div>

        <motion.dl
          {...fade(0.14)}
          className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4"
        >
          {[
            ['Caching', 'Redis-backed redirect & lookup paths'],
            ['Analytics', 'Async click tracking pipelines'],
            ['Realtime', 'Socket.IO chat architecture'],
            ['Production', 'JWT auth · AWS EC2 deploys'],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="font-sans text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</dt>
              <dd className="mt-1 font-sans text-[13px] leading-snug text-heading">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export default Hero
