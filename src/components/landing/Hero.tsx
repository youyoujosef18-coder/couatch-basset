'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { siteConfig } from '../../../config/site'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), { ssr: false })

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef   = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoOpen && videoRef.current) videoRef.current.play().catch(() => {})
  }, [videoOpen])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* 3D Canvas background */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
              <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-6 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
                {siteConfig.coach.experience} Years of Excellence
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.1 }}
              className="font-black text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
              Transform<br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">Your Body.</span><br />
              Transform<br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">Your Life.</span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.25 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              {siteConfig.coach.tagline}
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
              className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" onClick={() => scrollTo('contact')}>
                Start Your Transformation
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
                Book Free Consultation
              </Button>
            </motion.div>

            {/* Stats mini */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
              className="grid grid-cols-2 gap-4 max-w-sm">
              {siteConfig.stats.slice(0,2).map((s, i) => (
                <div key={i} className="bg-dark-200/80 backdrop-blur border border-gold/10 rounded-xl p-4">
                  <div className="text-gold font-black text-2xl">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Video placeholder */}
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8, delay:0.3 }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />

              <div className="relative bg-dark-200 rounded-3xl overflow-hidden border border-gold/20 shadow-gold aspect-[4/3]">
                {videoOpen ? (
                  <video ref={videoRef} className="w-full h-full object-cover" controls playsInline>
                    <source src={siteConfig.coach.heroVideo} type="video/mp4" />
                    Your browser does not support video.
                  </video>
                ) : (
                  <>
                    {/* Placeholder visual */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30">
                            <span className="text-4xl">🏋️</span>
                          </div>
                          <p className="text-gray-500 text-sm">Coach Introduction Video</p>
                          <p className="text-gray-600 text-xs mt-1">Upload from admin panel</p>
                        </div>
                      </div>
                    </div>
                    {/* Play button */}
                    <button onClick={() => setVideoOpen(true)}
                      className="absolute inset-0 flex items-center justify-center group">
                      <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-gold-lg group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </button>

                    {/* Corner badge */}
                    <div className="absolute top-4 right-4 bg-dark-300/90 backdrop-blur border border-gold/20 rounded-full px-3 py-1.5 text-xs text-gold font-bold">
                      ▶ Watch Intro
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
