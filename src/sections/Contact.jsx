import { useState } from 'react'
import { motion } from 'framer-motion'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { contact } from '../data/content'
import { db, isFirebaseConfigured } from '../firebase'

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [feedback, setFeedback] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setFeedback('Please fill out all fields before sending.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus('error')
      setFeedback('Enter a valid email address.')
      return
    }

    if (!isFirebaseConfigured) {
      window.location.href = `mailto:${contact.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      )}`
      return
    }

    try {
      setStatus('sending')
      setFeedback('Sending your message...')
      await addDoc(collection(db, 'messages'), {
        ...form,
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setFeedback('Thanks! Your message has been delivered.')
      setForm(initialForm)
    } catch (error) {
      console.error('Failed to submit message', error)
      setStatus('error')
      setFeedback('Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section
      id='contact'
      className='mx-auto max-w-4xl scroll-mt-24 px-5 py-24 lg:px-6'
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className='rounded-3xl border border-borderSoft bg-gradient-to-br from-surface/80 via-background to-background/80 p-10 shadow-2xl shadow-black/30 backdrop-blur'
      >
        <p className='text-xs font-semibold uppercase tracking-[0.35em] text-accent'>
          Contact
        </p>
        <h2 className='mt-3 text-3xl font-display font-semibold text-textPrimary md:text-4xl'>
          Let’s build the next AI milestone
        </h2>
        <p className='mt-4 max-w-2xl text-sm leading-relaxed text-textSecondary'>
          {contact.message}
        </p>
        <form onSubmit={handleSubmit} className='mt-8 grid gap-4'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <label className='flex flex-col gap-2 text-sm text-textSecondary'>
              Name
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={onChange}
                className='rounded-2xl border border-borderSoft bg-background/50 px-4 py-3 text-sm text-textPrimary transition focus:border-accent focus:outline-none'
                required
              />
            </label>
            <label className='flex flex-col gap-2 text-sm text-textSecondary'>
              Email
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={onChange}
                className='rounded-2xl border border-borderSoft bg-background/50 px-4 py-3 text-sm text-textPrimary transition focus:border-accent focus:outline-none'
                required
              />
            </label>
          </div>
          <label className='flex flex-col gap-2 text-sm text-textSecondary'>
            Message
            <textarea
              name='message'
              rows={5}
              value={form.message}
              onChange={onChange}
              className='rounded-2xl border border-borderSoft bg-background/50 px-4 py-3 text-sm text-textPrimary transition focus:border-accent focus:outline-none'
              required
            />
          </label>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <button
              type='submit'
              disabled={status === 'sending'}
              className='inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:-translate-y-[2px] hover:bg-accentMuted disabled:cursor-not-allowed disabled:opacity-60'
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <a
              href={`mailto:${contact.email}`}
              className='text-sm font-medium text-accent transition hover:text-accentMuted'
            >
              Prefer email? {contact.email}
            </a>
          </div>
          {feedback && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status === 'error'
                  ? 'border-red-500/50 bg-red-500/10 text-red-200'
                  : 'border-accent/50 bg-accent/10 text-accent'
              }`}
            >
              {feedback}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  )
}

export default Contact

