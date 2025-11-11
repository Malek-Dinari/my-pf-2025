import { motion } from 'framer-motion'
import { hero, socials } from '../data/content'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.6, delay },
})

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-48"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 pb-28 lg:flex-row lg:items-center lg:px-6">
        <motion.div className="flex-1 space-y-7" {...fadeIn()}>
          <div className="inline-flex items-center gap-2 rounded-full border border-borderSoft/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-textSecondary">
            {hero.greeting}
          </div>
          <motion.h1
            className="text-4xl font-display font-semibold text-textPrimary sm:text-5xl lg:text-6xl"
            {...fadeIn(0.1)}
          >
            {hero.name}
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-textSecondary sm:text-xl"
            {...fadeIn(0.2)}
          >
            {hero.summary}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" {...fadeIn(0.3)}>
            <a
              href={`mailto:${hero.contactEmail}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:-translate-y-[2px] hover:bg-accentMuted"
            >
              Let’s collaborate
            </a>
            <a
              href={hero.cvLink}
              className="rounded-full border border-borderSoft px-6 py-3 text-sm font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 text-sm text-textSecondary"
            {...fadeIn(0.4)}
          >
            <span className="rounded-full bg-surface px-3 py-1 text-xs uppercase tracking-[0.25em] text-textPrimary/80">
              {hero.location}
            </span>
            <div className="flex gap-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-borderSoft transition hover:border-accent hover:shadow-glow"
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="h-4 w-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-borderSoft/60 bg-surface/40 shadow-2xl shadow-black/30 backdrop-blur">
            <img
              src={hero.heroImage}
              alt="Malek Dinari presenting work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-6 py-5">
              <img
                src={hero.portrait}
                alt="Malek Dinari portrait"
                className="h-14 w-14 rounded-full border border-surface object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-medium text-textPrimary">
                  {hero.role}
                </p>
                <p className="text-xs text-textSecondary">
                  Focused on high-impact ML & CV delivery
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

