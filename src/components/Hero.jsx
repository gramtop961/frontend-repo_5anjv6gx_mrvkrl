import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-800 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-900/40 to-slate-900/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          Futuristic • Smooth • Animated UI
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Digital Experiences that Feel Alive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-2xl text-base text-indigo-100 sm:text-lg"
        >
          We craft interactive, animated websites with a sleek, modern aesthetic. Scroll down to explore about us, services, and get in touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#services" className="rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:brightness-110">
            Explore Services
          </a>
          <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
