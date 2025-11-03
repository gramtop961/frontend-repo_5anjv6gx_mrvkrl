import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="scroll-smooth">
      {/* Simple sticky navigation using Bootstrap utility spacing + Tailwind colors */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-bold text-white">
            NeonGrid
          </a>
          <ul className="mb-0 flex list-none items-center gap-3 sm:gap-6">
            <li><a href="#home" className="text-white/80 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
            <li><a href="#services" className="text-white/80 hover:text-white">Services</a></li>
            <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-600">
        <p className="mb-0">© {new Date().getFullYear()} NeonGrid Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
