'use client'
import { motion } from 'framer-motion'
import { siteConfig } from '../../../config/site'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-16">
          <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
            What I Offer
          </span>
          <h2 className="font-black text-white text-4xl lg:text-5xl">
            Premium <span className="text-transparent bg-clip-text bg-gold-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Every program is 100% personalized to your body type, goals, and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y:-8, transition: { duration:0.2 } }}
              className="group relative bg-dark-200 border border-white/5 rounded-3xl p-8 cursor-default hover:border-gold/30 hover:shadow-gold transition-all duration-300"
            >
              {/* Gold glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-dark-300 border border-gold/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:border-gold/50 transition-colors group-hover:shadow-gold-sm">
                  {s.icon}
                </div>

                <h3 className="font-black text-white text-xl mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {s.desc}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gold/0 group-hover:text-gold/80 transition-all uppercase tracking-widest">
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner gold accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-3xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gold/20 rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
