import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useState } from 'react'

const Projects = () => {
  const [showArchitecture, setShowArchitecture] = useState(false)

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-[120px] sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#00D4FF]">Projects</p>
          <h2 className="mt-4 font-['Space_Grotesk'] text-[30px] font-bold text-[#F0F0F5] sm:text-[36px]">
            Things I&apos;ve Built and How I Built Them
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }}
        >
          <motion.article
            whileHover={{}}
            className="rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#111118]/90 p-8 shadow-[0_0_0_rgba(0,0,0,0)] backdrop-blur-[6px] transition duration-300 hover:border-[rgba(0,212,255,0.2)] hover:shadow-[0_0_24px_rgba(0,212,255,0.18)] sm:p-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-['Space_Grotesk'] text-[28px] font-bold text-[#F0F0F5]">DevBridge</h3>
              <span className="rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.08)] px-3 py-1 font-['Inter'] text-[12px] text-[#00D4FF]">
                Featured Project
              </span>
            </div>
            <p className="mt-4 max-w-[60ch] font-['Inter'] text-[16px] leading-relaxed text-[#6B7280]">
              Developer Networking Platform with Real-Time Communication
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['JWT Auth', 'HTTP-only cookies + middleware pipeline'],
                ['Real-Time Chat', 'Socket.io · deterministic room routing'],
                ['REST API', 'domain-separated routers · connection lifecycle'],
              ].map(([label, sub]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-[rgba(0,212,255,0.12)] bg-[rgba(0,212,255,0.04)] px-4 py-3"
                >
                  <p className="font-['Inter'] text-[13px] text-[#F0F0F5]">{label}</p>
                  <p className="mt-1 font-['Inter'] text-[11px] text-[#4B5563]">{sub}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-['Inter'] text-[14px] italic text-[#6B7280]">
              Deployed on AWS EC2 with environment-scoped config and CORS origin whitelisting
            </p>
            <p className="mt-3 border-l border-[rgba(0,212,255,0.2)] pl-3 font-['Inter'] text-[12px] text-[#4B5563]">
              Flow: Client → API → Database + WebSocket layer
            </p>

            <div className="mt-7 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,15,0.45)] p-5">
              <p className="font-['Inter'] text-[12px] uppercase tracking-[0.2em] text-[#00D4FF]">System Highlights</p>
              <ul className="mt-3 space-y-2 font-['Inter'] text-[14px] text-[#6B7280]">
                <li>Real-time communication using WebSockets (Socket.io)</li>
                <li>Stateless authentication with JWT (HTTP-only cookies)</li>
                <li>Backend-driven connection lifecycle management</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'Socket.io', 'React', 'JWT'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.06)] px-3 py-1 font-['Inter'] text-[12px] text-[#F0F0F5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowArchitecture((prev) => !prev)}
                  className="rounded-[8px] border border-[rgba(255,255,255,0.15)] px-5 py-2.5 font-['Inter'] text-[14px] text-[#F0F0F5] transition-colors duration-200 hover:border-[rgba(0,212,255,0.4)] hover:text-[#00D4FF]"
                >
                  {showArchitecture ? 'Hide Architecture' : 'View Architecture'}
                </button>
                <a
                  href="https://github.com/luvtomar2005/NODE-JS-2026"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(255,255,255,0.15)] px-5 py-2.5 font-['Inter'] text-[14px] text-[#F0F0F5] transition-colors duration-200 hover:border-[rgba(0,212,255,0.4)] hover:text-[#00D4FF]"
                >
                  <FiGithub />
                  GitHub Repo
                </a>
              </div>
            </div>

            {showArchitecture && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="mt-6 rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,15,0.55)] p-5"
              >
                <p className="font-['Inter'] text-[13px] leading-relaxed text-[#6B7280]">
                  <span className="text-[#F0F0F5]">Request flow:</span> auth middleware, schema validation, then
                  domain-based controllers backed by MongoDB models.
                </p>
                <p className="mt-3 font-['Inter'] text-[13px] leading-relaxed text-[#6B7280]">
                  <span className="text-[#F0F0F5]">Real-time system:</span> Socket.io handles deterministic room routing and
                  synchronized message events.
                </p>
                <p className="mt-3 font-['Inter'] text-[13px] leading-relaxed text-[#6B7280]">
                  <span className="text-[#F0F0F5]">Backend responsibilities:</span> JWT session security, connection
                  lifecycle management, CORS whitelisting, and EC2 deployment config.
                </p>
              </motion.div>
            )}
          </motion.article>

          <motion.article
            whileHover={{}}
            className="rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#111118]/90 p-8 backdrop-blur-[6px] transition-colors duration-300 hover:border-[rgba(0,212,255,0.2)] sm:p-10"
          >
            <p className="font-['Inter'] text-[15px] text-[#6B7280]">
              Portfolio built with focus on clarity, performance, and backend-focused presentation.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
