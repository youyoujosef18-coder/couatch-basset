'use client'
import { useEffect } from 'react'
import Hero         from '@/components/landing/Hero'
import About        from '@/components/landing/About'
import Services     from '@/components/landing/Services'
import Results      from '@/components/landing/Results'
import Testimonials from '@/components/landing/Testimonials'
import Gallery      from '@/components/landing/Gallery'
import ContactForm  from '@/components/landing/ContactForm'
import Footer       from '@/components/landing/Footer'

export default function HomePage() {
  // Track page view
  useEffect(() => {
    fetch('/api/analytics/track', { method:'POST' }).catch(() => {})
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  )
}
