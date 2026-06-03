'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../../config/site'

const LINKS = [
  { href:'#about',        label:'About'    },
  { href:'#services',     label:'Services' },
  { href:'#results',      label:'Results'  },
  { href:'#testimonials', label:'Clients'  },
  { href:'#gallery',      label:'Gallery'  },
  { href:'#contact',      label:'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu,     setMenu]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setMenu(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center text-black font-black text-sm">L</div>
            <div className="text-left">
              <p className="font-black text-white text-sm leading-none">{siteConfig.coach.name.split(' ')[1]}</p>
              <p className="text-gold text-[10px] uppercase tracking-widest">Fitness Coach</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider font-semibold">
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo('#contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-gold-gradient text-black font-black text-xs px-5 py-2.5 rounded-xl hover:shadow-gold transition-all uppercase tracking-wider">
              Start Now →
            </button>
            <button className="lg:hidden w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/5" onClick={() => setMenu(!menu)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menu ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            className="lg:hidden bg-dark-100 border-b border-gold/10">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {LINKS.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="py-3 px-4 text-left text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-wider font-semibold">
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo('#contact')}
                className="mt-2 bg-gold-gradient text-black font-black text-sm py-3 px-4 rounded-xl uppercase tracking-wider">
                Start My Transformation →
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
