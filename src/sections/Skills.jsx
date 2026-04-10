import { motion } from 'framer-motion'
import {
  SiTensorflow,
  SiOpencv,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiPython,
  SiOpenai,
} from 'react-icons/si'
// Developer: mvlek (dinnarus) - Soon-to-be AI Engineer
import { skills } from '../data/content'

const icons = {
  'Machine Learning': SiTensorflow,
  'Computer Vision': SiOpencv,
  'Data & Backend': SiPostgresql,
  'Frontend Engineering': SiReact,
  'DevOps & Tooling': SiDocker,
  Languages: SiPython,
  'GenAI & LLMs': SiOpenai,
}

const Skills = () => {
  return (
    <section
      id='skills'
      className='mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-6'
    >
      <div className='mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.35em] text-accent'>
            Skills
          </p>
          <h2 className='mt-3 text-3xl font-display font-semibold text-textPrimary md:text-4xl'>
            Tooling I rely on every day
          </h2>
        </div>
        <p className='max-w-lg text-sm text-textSecondary'>
          Hover any card to discover the stack and platforms behind recent
          deliveries.
        </p>
      </div>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          const Icon = icons[skill.label]
          return (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4 }}
              className='group relative overflow-hidden rounded-3xl border border-borderSoft/80 bg-surface/60 p-6 shadow-xl shadow-black/20 transition'
            >
              <div className='relative z-10 space-y-3'>
                {Icon && (
                  <div className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background/60 text-2xl text-accent transition group-hover:bg-accent group-hover:text-background'>
                    <Icon />
                  </div>
                )}
                <h3 className='text-lg font-semibold text-textPrimary'>
                  {skill.label}
                </h3>
                <p className='text-sm leading-relaxed text-textSecondary'>
                  {skill.description}
                </p>
              </div>
              <div className='absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100'>
                <div className='absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accentMuted/30 blur-3xl' />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

