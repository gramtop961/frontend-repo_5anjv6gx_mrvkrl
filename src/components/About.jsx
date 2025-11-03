import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-600"
        >
          We combine aesthetics, performance, and motion to build interfaces that tell a story. Our approach blends 3D elements, micro-interactions, and accessible design.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Design First',
              desc: 'Clean layouts, beautiful typography, and purposeful color palettes.'
            },
            {
              title: 'Motion Aware',
              desc: 'Subtle transitions that guide the eye and delight users.'
            },
            {
              title: 'Performance',
              desc: 'Optimized experiences that feel fast on every device.'
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
