import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-[120px] sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-3"
        >
          <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#00D4FF]">About</p>
          <h2 className="mt-4 max-w-[22ch] font-['Space_Grotesk'] text-[30px] font-bold text-[#F0F0F5] sm:text-[36px]">
            Building systems that scale, not just code that works
          </h2>
          <div className="mt-8 space-y-4 font-['Inter'] text-[16px] leading-[1.9] text-[#6B7280]">
            <p>I am Luv Tomar, a Computer Science student at GLA University.</p>
            <p>I am a backend-focused full stack developer working primarily across the MERN stack.</p>
            <p>My approach is architecture-first.</p>
            <p>I spend time thinking through data flow, API contracts, and system reliability before writing implementation details.</p>
            <p>
              I am actively looking for internship opportunities where I can solve real backend problems and contribute to
              production-grade systems.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#111118]/90 p-5 backdrop-blur-[6px]"
          >
            <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#00D4FF]">Focus Areas</p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {['Backend System Design', 'Real-time Applications', 'API Architecture'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1.5 font-['Inter'] text-[13px] text-[#F0F0F5]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-2"
        >
          <div className="rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#111118]/90 p-6 shadow-[0_0_20px_rgba(0,212,255,0.08)] backdrop-blur-[6px]">
            <div className="grid gap-4">
              {[
                ['Currently building', 'DevBridge'],
                ['Open to', 'Remote Internships'],
                ['Focus area', 'Backend Engineering'],
                ['Location', 'Mathura, India'],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 items-start gap-3 border-b border-[rgba(255,255,255,0.06)] pb-3 last:border-b-0 last:pb-0">
                  <p className="font-['Inter'] text-[14px] text-[#4B5563]">{label}</p>
                  <p className="font-['Inter'] text-[14px] text-[#F0F0F5]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
