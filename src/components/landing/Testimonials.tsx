'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../../config/site'

function Stars() {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [dir,    setDir]    = useState(1)

  const go = (n: number) => {
    setDir(n > active ? 1 : -1)
    setActive(n)
  }
  const prev = () => go((active - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length)
  const next = () => go((active + 1) % siteConfig.testimonials.length)

  const t = siteConfig.testimonials[active]

  return (
    <section id="testimonials" className="py-24 bg-dark relative overflow-hidden">
      {/* 3D perspective background */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective:'1000px' }}>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gold/5 transform rotate-6" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gold/5 transform -rotate-3" />
      </div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-16">
          <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
            Client Stories
          </span>
          <h2 className="font-black text-white text-4xl lg:text-5xl">
            Real <span className="text-transparent bg-clip-text bg-gold-gradient">Transformations</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main card with 3D perspective */}
          <div className="relative" style={{ perspective:'1200px' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={active}
                custom={dir}
                initial={{ opacity:0, x: dir * 100, rotateY: dir * 15 }}
                animate={{ opacity:1, x:0, rotateY:0 }}
                exit={{    opacity:0, x: dir * -100, rotateY: dir * -15 }}
                transition={{ duration:0.5, ease:'easeInOut' }}
                className="bg-dark-200 border border-gold/20 rounded-3xl p-10 shadow-gold"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-dark-300 border border-gold/30 flex items-center justify-center text-2xl font-black text-gold">
                      {t.avatar}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <Stars />
                    <p className="text-gray-300 text-lg leading-relaxed mt-4 mb-6">"{t.text}"</p>
                    <div>
                      <p className="font-black text-white text-lg">{t.name}</p>
                      <p className="text-gold text-sm mt-0.5">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prev}
              className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/50 transition-all">
              ←
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {siteConfig.testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>

            <button onClick={next}
              className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/50 transition-all">
              →
            </button>
          </div>

          {/* Mini previews */}
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3">
            {siteConfig.testimonials.map((t, i) => (
              <button key={i} onClick={() => go(i)}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${i === active ? 'border-gold/50 bg-gold/10' : 'border-white/5 hover:border-gold/20'}`}>
                <div className="w-8 h-8 rounded-lg bg-dark-300 border border-gold/20 flex items-center justify-center text-xs font-black text-gold">{t.avatar}</div>
                <span className="text-[10px] text-gray-500 truncate w-full text-center">{t.name.split('.')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
