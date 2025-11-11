import { motion } from 'framer-motion'
import { about } from '../data/content'

const About = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl scroll-mt-24 px-5 py-24 lg:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-borderSoft bg-surface/60 p-10 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          About
        </p>
        <h2 className="mt-4 text-3xl font-display font-semibold text-textPrimary md:text-4xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-textSecondary md:text-lg">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <div
              key={item}
              className="group rounded-2xl border border-borderSoft/80 bg-background/30 px-5 py-4 transition hover:border-accent hover:bg-background/60"
            >
              <p className="text-sm font-medium text-textSecondary transition group-hover:text-textPrimary">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About

