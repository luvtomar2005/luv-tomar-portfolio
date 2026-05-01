import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 px-5 py-[120px] sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-['Space_Grotesk'] text-[30px] font-bold text-[#F0F0F5] sm:text-[36px]">Technical Skills</h2>
        </motion.div>

        <motion.div
          className="mt-10 space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }}
        >
          <div className="rounded-[12px] border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.04)] p-6 shadow-[0_0_20px_rgba(0,212,255,0.08)] backdrop-blur-[6px]">
            <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#00D4FF]">Backend (Core Strength)</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST API Design', 'JWT Auth'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1 }}
                  className="rounded-full border border-[rgba(0,212,255,0.24)] bg-[rgba(10,10,15,0.5)] px-3.5 py-1.5 font-['Space_Grotesk'] text-[16px] text-[#F0F0F5] transition-colors duration-200 hover:border-[rgba(0,212,255,0.45)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#4B5563]">Frontend (Working Knowledge)</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1 }}
                  className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1.5 font-['Inter'] text-[14px] text-[#6B7280] transition-colors duration-200 hover:border-[rgba(255,255,255,0.2)] hover:text-[#F0F0F5]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-['Inter'] text-[11px] uppercase tracking-[0.24em] text-[#4B5563]">Infrastructure &amp; Tools</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'npm'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1 }}
                  className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1.5 font-['Inter'] text-[14px] text-[#6B7280] transition-colors duration-200 hover:border-[rgba(255,255,255,0.2)] hover:text-[#F0F0F5]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="pt-2">
            <p className="font-['Inter'] text-[12px] text-[#4B5563]">250+ DSA problems solved</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
