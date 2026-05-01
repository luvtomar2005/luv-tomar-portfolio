import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-20 items-center px-5 pt-20 sm:px-8">
      <div className="mx-auto w-full max-w-[750px]">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="mb-5 inline-flex rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.08)] px-4 py-1.5 font-['Inter'] text-[12px] text-[#00D4FF]"
        >
          Available for Internship · Backend Engineering
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="relative w-fit bg-gradient-to-r from-[#F0F0F5] via-[#F0F0F5] to-[#00D4FF] bg-clip-text font-['Space_Grotesk'] text-[56px] font-extrabold leading-[0.95] text-transparent sm:text-[104px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 scale-[1.2]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)',
            }}
          />
          Luv Tomar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55, ease: 'easeOut' }}
          className="mt-4 font-['Space_Grotesk'] text-[18px] font-medium tracking-wide text-[#00D4FF] sm:text-[26px]"
        >
          Backend Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 max-w-[32ch] font-['Inter'] text-[16px] leading-relaxed text-[#6B7280] sm:text-[20px]"
        >
          Turning complex backend problems into efficient systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 font-['Inter'] text-[14px] text-[#4B5563]"
        >
          Focused on scalable backend systems and real-time architecture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 font-['Inter'] text-[13px] text-[#4B5563]"
        >
          Node.js <span className="text-[#00D4FF]">·</span> Socket.io <span className="text-[#00D4FF]">·</span> REST APIs{' '}
          <span className="text-[#00D4FF]">·</span> AWS <span className="text-[#00D4FF]">·</span> MongoDB
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center rounded-[8px] bg-[#00D4FF] px-7 py-3 font-['Inter'] text-[14px] font-medium text-[#0A0A0F] shadow-[0_0_20px_rgba(0,212,255,0.15)] transition duration-200 hover:brightness-110 hover:shadow-[0_0_26px_rgba(0,212,255,0.22)]"
          >
            View Backend Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-[8px] border border-[rgba(255,255,255,0.15)] bg-transparent px-7 py-3 font-['Inter'] text-[14px] font-medium text-[#F0F0F5] transition duration-200 hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_0_24px_rgba(0,212,255,0.2)]"
          >
            Download Resume (PDF)
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
          className="mt-6 inline-flex w-fit rounded-full border border-[rgba(255,255,255,0.08)] bg-[#111118] px-3 py-1.5 font-['Inter'] text-[13px] text-[#4B5563]"
        >
          250+ DSA problems solved with focus on core patterns
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
          className="mt-4 max-w-[60ch] font-['Inter'] text-[13px] text-[#4B5563]"
        >
          Focused on building scalable backend systems, real-time applications, and efficient APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-full border-t border-[rgba(255,255,255,0.06)]"
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-[rgba(255,255,255,0.06)] px-5 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
            <div className="px-0 py-2 sm:px-5">
              <p className="font-['Inter'] text-[12px] text-[#4B5563]">(AWS EC2)</p>
              <p className="font-['Inter'] text-[12px] text-[#F0F0F5]">1 Production Deployment</p>
            </div>
            <div className="px-0 py-2 sm:px-5">
              <p className="font-['Inter'] text-[12px] text-[#4B5563]">(Socket.io)</p>
              <p className="font-['Inter'] text-[12px] text-[#F0F0F5]">Real-Time Architecture</p>
            </div>
            <div className="px-0 py-2 sm:px-5">
              <p className="font-['Inter'] text-[12px] text-[#4B5563]">(Secure by Design)</p>
              <p className="font-['Inter'] text-[12px] text-[#F0F0F5]">JWT Auth Systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
