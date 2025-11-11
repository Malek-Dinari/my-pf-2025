import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { projects } from '../data/content'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      id='projects'
      className='mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-6'
    >
      <div className='mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.35em] text-accent'>
            Projects
          </p>
          <h2 className='mt-3 text-3xl font-display font-semibold text-textPrimary md:text-4xl'>
            Selected work with measurable impact
          </h2>
        </div>
        <p className='max-w-lg text-sm text-textSecondary'>
          Click any project card to explore the full story, metrics, and
          repository links.
        </p>
      </div>
      <div className='grid gap-6 lg:grid-cols-3'>
        {projects.map((project) => (
          <motion.button
            key={project.id}
            type='button'
            onClick={() => setActiveProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className='group relative h-full overflow-hidden rounded-3xl border border-borderSoft/70 bg-surface/70 text-left shadow-xl shadow-black/20 transition hover:-translate-y-1.5 hover:border-accent/80'
          >
            <div className='aspect-[4/3] overflow-hidden'>
              <img
                src={project.image}
                alt={project.name}
                className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                loading='lazy'
              />
            </div>
            <div className='flex items-center justify-between gap-3 px-6 pt-6 text-xs uppercase tracking-[0.25em] text-textSecondary'>
              <span>{project.organization}</span>
              <span>{project.period}</span>
            </div>
            <div className='px-6 pb-6 pt-4'>
              <h3 className='text-lg font-semibold text-textPrimary'>
                {project.name}
              </h3>
              <p className='mt-2 text-sm text-textSecondary'>
                {project.summary}
              </p>
              <div className='mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent'>
                <span>Extended description</span>
                <HiOutlineExternalLink className='h-4 w-4' />
              </div>
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-transparent via-40% to-transparent opacity-0 transition duration-500 group-hover:opacity-100' />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35 }}
              className='relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-borderSoft bg-background p-6 shadow-2xl shadow-black/30'
            >
              <button
                onClick={() => setActiveProject(null)}
                className='absolute right-4 top-4 rounded-full border border-borderSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary transition hover:border-accent hover:text-accent'
              >
                Close
              </button>

              <div className='overflow-hidden rounded-2xl'>
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='mt-6 flex flex-wrap items-start justify-between gap-3 text-xs uppercase tracking-[0.3em] text-textSecondary'>
                <span>{activeProject.organization}</span>
                <span>{activeProject.period}</span>
              </div>
              <h3 className='mt-4 text-2xl font-semibold text-textPrimary'>
                {activeProject.name}
              </h3>
              <p className='mt-2 text-sm text-textSecondary'>
                {activeProject.summary}
              </p>
              <ul className='mt-5 space-y-3 text-sm leading-relaxed text-textSecondary'>
                {activeProject.description.map((line) => (
                  <li key={line} className='flex items-start gap-3'>
                    <span className='mt-1 inline-block h-2 w-2 rounded-full bg-accent' />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-6 flex justify-end'>
                <a
                  href={activeProject.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background'
                >
                  View repository
                  <HiOutlineExternalLink className='h-4 w-4' />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

