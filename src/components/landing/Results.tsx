'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '../../../config/site'

function parseNum(str: string): number {
  return parseInt(str.replace(/\D/g, '')) || 0
}

function CounterStat({ stat, inView }: { stat: { value: string; label: string }; inView: boolean }) {
  const [count, setCount] = useState(0)
  const target = parseNum(stat.value)
  const suffix = stat.value.replace(/[\d]/g, '')

  useEffect(() => {
    if (!inView || target === 0) return
    const duration = 2200
    const steps    = 60
    const step     = duration / steps
    let   current  = 0
    const timer    = setInterval(() => {
      current += target / steps
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div className="text-center">
      <div className="font-black text-white" style={{ fontSize:'clamp(2.5rem,5vw,4rem)', lineHeight:1 }}>
        <span className="text-transparent bg-clip-text bg-gold-gradient">
          {count}{suffix}
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-3 uppercase tracking-widest font-semibold">{stat.label}</p>
    </div>
  )
}

export default function Results() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="results" ref={ref} className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-16">
          <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
            Proven Results
          </span>
          <h2 className="font-black text-white text-4xl lg:text-5xl">
            Numbers That <span className="text-transparent bg-clip-text bg-gold-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ delay: i * 0.15 }}
              className="bg-dark-200 border border-gold/10 rounded-3xl p-8 text-center hover:border-gold/30 hover:shadow-gold transition-all duration-300">
              <CounterStat stat={s} inView={inView} />
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {['Weight Loss', 'Muscle Gain', 'Body Transformation', 'Online Coaching', 'Nutrition Plans', 'Strength Training',
              'Weight Loss', 'Muscle Gain', 'Body Transformation', 'Online Coaching', 'Nutrition Plans', 'Strength Training'].map((t, i) => (
              <span key={i} className={`text-2xl font-black uppercase tracking-[0.2em] flex-shrink-0 ${i % 2 === 0 ? 'text-transparent bg-clip-text bg-gold-gradient' : 'text-white/10'}`}>
                {t} ✦
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
