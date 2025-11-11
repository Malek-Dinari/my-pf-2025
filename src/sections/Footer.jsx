import { socials, hero } from '../data/content'

const Footer = () => (
  <footer className='border-t border-borderSoft/60 bg-background/80'>
    <div className='mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-textSecondary lg:px-6'>
      <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-accent'>
            Stay connected
          </p>
          <p className='mt-2 text-sm text-textSecondary'>
            Open to collaborations around AI, computer vision, and product-led
            ML initiatives.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-borderSoft transition hover:border-accent hover:shadow-glow'
            >
              <img
                src={social.icon}
                alt={`${social.name} icon`}
                className='h-4 w-4 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-start justify-between gap-4 border-t border-borderSoft/60 pt-6 text-xs text-textSecondary sm:flex-row sm:items-center'>
        <span>© {new Date().getFullYear()} {hero.name}. All rights reserved.</span>
        <span className='text-xs uppercase tracking-[0.3em]'>
          Crafted with Vite · Tailwind · Firebase
        </span>
      </div>
    </div>
  </footer>
)

export default Footer

