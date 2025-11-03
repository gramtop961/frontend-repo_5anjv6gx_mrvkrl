import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold text-slate-800 sm:text-4xl"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-600"
        >
          Have a project in mind? Let’s build something extraordinary together.
        </motion.p>

        <div className="mx-auto mt-12 max-w-2xl">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="form-control block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none ring-violet-500 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="form-control block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none ring-violet-500 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                className="form-control block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none ring-violet-500 focus:ring-2"
                placeholder="Tell us about your idea"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button type="submit" className="btn rounded-md bg-violet-600 px-6 py-2 font-semibold text-white shadow-md transition hover:brightness-110">
                Send Message
              </button>
              {submitted && (
                <span className="text-sm text-emerald-600">Thanks! We’ll get back to you soon.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
