import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { hero, socials } from '../data/content'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-borderSoft/50 backdrop-blur-xl ${
        isScrolled ? 'bg-background/85' : 'bg-background/40'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-6">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-left font-display text-lg font-semibold tracking-wide text-textPrimary transition hover:text-accent"
        >
          Malek Dinari
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-3 text-sm font-medium text-textSecondary">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="rounded-full px-4 py-2 transition hover:bg-surface hover:text-textPrimary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-borderSoft transition hover:border-accent hover:shadow-glow"
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="h-4 w-4 object-contain"
                />
              </a>
            ))}
            <a
              href={hero.cvLink}
              download="Malek_Dinari_CV_April2026.pdf"
              className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
            >
              C.V.
            </a>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <HiOutlineX className="h-7 w-7 text-textPrimary" />
          ) : (
            <HiOutlineMenu className="h-7 w-7 text-textPrimary" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="absolute inset-x-4 top-[72px] rounded-2xl border border-borderSoft bg-background/95 p-4 shadow-2xl md:hidden"
            >
              <ul className="space-y-2 text-sm font-medium text-textSecondary">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-surface hover:text-textPrimary"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-borderSoft transition hover:border-accent hover:shadow-glow"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="h-4 w-4 object-contain"
                    />
                  </a>
                ))}
                <a
                  href={hero.cvLink}
                  download="Malek_Dinari_CV_April2026.pdf"
                  className="flex-1 rounded-xl border border-accent px-4 py-2 text-center text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar

