'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ITEMS = [
  { before:'Before — 95 kg', after:'After — 74 kg',  label:'-21 kg in 4 months',  icon:'🔥' },
  { before:'Before — 70 kg', after:'After — 82 kg',  label:'+12 kg muscle in 6 months', icon:'💪' },
  { before:'Before — 88 kg', after:'After — 68 kg',  label:'-20 kg in 3 months',  icon:'⚡' },
  { before:'Before — 65 kg', after:'After — 78 kg',  label:'+13 kg in 5 months',  icon:'🏆' },
  { before:'Before — 102 kg',after:'After — 80 kg',  label:'-22 kg in 5 months',  icon:'🎯' },
  { before:'Before — 58 kg', after:'After — 72 kg',  label:'+14 kg in 7 months',  icon:'💎' },
]

function GalleryCard({ item }: { item: typeof ITEMS[0] }) {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={()  => setHover(false)}
      className="relative overflow-hidden rounded-3xl bg-dark-200 border border-white/5 hover:border-gold/30 cursor-pointer group"
      style={{ aspectRatio:'3/4' }}
    >
      {/* Before (default) */}
      <div className={`absolute inset-0 flex items-center justify-center flex-col gap-3 transition-all duration-500 ${hover ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
        <div className="text-5xl filter grayscale">{item.icon}</div>
        <div className="text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Before</p>
          <p className="text-white font-bold text-sm">{item.before}</p>
        </div>
        <div className="absolute top-3 left-3 bg-dark-300/90 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-gray-400">BEFORE</div>
      </div>

      {/* After (hover) */}
      <div className={`absolute inset-0 flex items-center justify-center flex-col gap-3 transition-all duration-500 ${hover ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        style={{ background:'linear-gradient(135deg, #0d0d0d 0%, #1a1a00 100%)' }}>
        <div className="text-5xl">{item.icon}</div>
        <div className="text-center">
          <p className="text-gold text-xs uppercase tracking-widest mb-1">After</p>
          <p className="text-white font-bold text-sm">{item.after}</p>
        </div>
        <div className="absolute top-3 left-3 bg-gold/20 border border-gold/30 rounded-lg px-2.5 py-1 text-xs text-gold font-bold">AFTER</div>
        <div className="absolute inset-x-0 bottom-0 h-16 flex items-center justify-center">
          <span className="text-gold text-xs font-black uppercase tracking-wider bg-gold/10 px-3 py-1.5 rounded-full border border-gold/30">{item.label}</span>
        </div>
      </div>

      {/* Hover instruction */}
      <div className={`absolute bottom-4 inset-x-0 flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-70'}`}>
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Hover to reveal</span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-16">
          <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
            Transformation Gallery
          </span>
          <h2 className="font-black text-white text-4xl lg:text-5xl">
            Before & <span className="text-transparent bg-clip-text bg-gold-gradient">After</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">Hover over each card to see the transformation</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {ITEMS.map((item, i) => <GalleryCard key={i} item={item} />)}
        </div>

        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="text-center text-gray-600 text-xs mt-8 uppercase tracking-widest">
          * Results may vary. All transformations achieved with consistent training and nutrition coaching.
        </motion.p>
      </div>
    </section>
  )
}
