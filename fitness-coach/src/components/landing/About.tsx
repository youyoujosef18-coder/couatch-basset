'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { siteConfig } from '../../../config/site'

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gold/10 rounded-3xl blur-xl" />
              <div className="relative bg-dark-200 rounded-3xl overflow-hidden aspect-[3/4] border border-gold/20">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-200">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💪</div>
                    <p className="text-gray-500 text-sm">Coach Photo</p>
                    <p className="text-gray-600 text-xs mt-1">Add via config/site.ts</p>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-4 bg-dark-200 border border-gold/30 rounded-2xl px-5 py-3 shadow-gold-sm">
                <p className="text-gold font-black text-2xl">{siteConfig.coach.experience}</p>
                <p className="text-gray-400 text-xs">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.2 }}>
            <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
              About the Coach
            </span>
            <h2 className="font-black text-white text-4xl lg:text-5xl mb-6 leading-tight">
              Meet Coach<br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">{siteConfig.coach.name}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{siteConfig.coach.bio}</p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Certifié par les meilleures institutions internationales, {siteConfig.coach.name.split(' ')[0]} combine science du sport, nutrition personnalisée et coaching mental pour vous aider à atteindre vos objectifs de manière durable et efficace.
            </p>

            {/* Specialties */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {siteConfig.services.slice(0,4).map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center text-base">{s.icon}</span>
                  {s.title}
                </div>
              ))}
            </div>

            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-gradient text-black font-black px-8 py-4 rounded-2xl hover:shadow-gold-lg hover:scale-[1.02] transition-all uppercase tracking-wider">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactez via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
