import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Code, Smartphone, Shield } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Animated Hero Sections',
    desc: 'Immersive 3D and motion-driven hero areas that hook attention instantly.'
  },
  {
    icon: Code,
    title: 'Web App Development',
    desc: 'Modern, responsive React applications with clean architecture and DX.'
  },
  {
    icon: Smartphone,
    title: 'Responsive UI',
    desc: 'Pixel-perfect layouts that adapt beautifully across devices and screens.'
  },
  {
    icon: Shield,
    title: 'Best Practices',
    desc: 'Accessible, secure, and performant by default — built to scale.'
  }
]

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-50 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-600"
        >
          From concept to launch, we deliver polished and animated web experiences.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-sky-500/0 to-fuchsia-500/0 opacity-0 transition group-hover:opacity-10" />
              <s.icon className="mb-4 h-8 w-8 text-violet-600" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
