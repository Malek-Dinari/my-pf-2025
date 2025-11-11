import { motion } from 'framer-motion'

const TimelineSection = ({ id, eyebrow, title, items }) => {
  return (
    <section
      id={id}
      className='mx-auto max-w-5xl scroll-mt-24 px-5 py-24 lg:px-6'
    >
      <div className='mb-10'>
        <p className='text-xs font-semibold uppercase tracking-[0.35em] text-accent'>
          {eyebrow}
        </p>
        <h2 className='mt-3 text-3xl font-display font-semibold text-textPrimary md:text-4xl'>
          {title}
        </h2>
      </div>

      <div className='space-y-6'>
        {items.map((item, index) => (
          <motion.article
            key={item.institution ?? item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className='group relative overflow-hidden rounded-3xl border border-borderSoft/70 bg-surface/70 p-7 shadow-xl shadow-black/20 backdrop-blur'
          >
            <div className='flex flex-wrap items-start justify-between gap-3'>
              <div>
                <h3 className='text-lg font-semibold text-textPrimary'>
                  {item.institution ?? item.title}
                </h3>
                <p className='text-sm font-medium text-accent'>
                  {item.focus ?? item.organization}
                </p>
              </div>
              {item.period && (
                <span className='rounded-full border border-borderSoft px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-textSecondary'>
                  {item.period}
                </span>
              )}
            </div>
            <p className='mt-4 text-sm leading-relaxed text-textSecondary'>
              {item.details ?? item.description}
            </p>
            <div className='absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accentMuted/20 opacity-0 transition duration-500 group-hover:opacity-100' />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection

