'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Input, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import type { ContactFormData } from '@/types'

const schema = z.object({
  fullName:      z.string().min(2, 'Votre nom est requis'),
  email:         z.string().email('Email invalide'),
  whatsapp:      z.string().min(8, 'Numéro WhatsApp requis'),
  message:       z.string().min(10, 'Message trop court (min. 10 caractères)'),
  instagramLink: z.string().optional(),
})

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ContactFormData) => {
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) { setState('error'); return }
      setState('done')
      reset()
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-12">
          <span className="inline-block text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
            Start Today
          </span>
          <h2 className="font-black text-white text-4xl lg:text-5xl">
            Start Your <span className="text-transparent bg-clip-text bg-gold-gradient">Fitness Journey</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">Fill out the form and I'll get back to you within 24 hours with your personalized plan.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {state === 'done' ? (
            <motion.div key="done" initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
              className="text-center py-16 bg-dark-200 rounded-3xl border border-gold/20">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✅</div>
              <h3 className="font-black text-white text-2xl mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-2">I'll contact you within 24 hours on WhatsApp.</p>
              <p className="text-gold text-sm font-semibold">Welcome to the transformation journey! 💪</p>
              <button onClick={() => setState('idle')} className="mt-8 text-xs text-gray-500 underline hover:text-gray-300">Send another message</button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="bg-dark-200 border border-gold/10 rounded-3xl p-8 shadow-gold">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Full Name *" placeholder="Lounissi Abdelbasset" id="fullName"
                      error={errors.fullName?.message} {...register('fullName')} />
                    <Input label="Email Address *" type="email" placeholder="you@email.com" id="email"
                      error={errors.email?.message} {...register('email')} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="WhatsApp Number *" placeholder="+213 55 000 0000" id="whatsapp"
                      error={errors.whatsapp?.message} {...register('whatsapp')} />
                    <Input label="Instagram (optional)" placeholder="@your_handle" id="instagramLink"
                      error={errors.instagramLink?.message} {...register('instagramLink')} />
                  </div>
                  <Textarea label="Your Message *" placeholder="Tell me about your goals, current fitness level, and any challenges you're facing..." id="message"
                    rows={5} error={errors.message?.message} {...register('message')} />

                  {state === 'error' && (
                    <p className="text-red-400 text-sm text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                      Something went wrong. Please try again or contact via WhatsApp.
                    </p>
                  )}

                  <Button fullWidth size="lg" loading={state === 'loading'} type="submit">
                    🚀 Start My Transformation
                  </Button>

                  <p className="text-center text-gray-600 text-xs">
                    By submitting, you agree to be contacted via WhatsApp/Email. No spam, ever.
                  </p>
                </form>
              </div>

              {/* Direct WhatsApp */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm mb-4">Or reach me directly:</p>
                <a href={`https://wa.me/21355000000?text=Hello Coach, I want to start my transformation!`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600/20 border border-green-500/30 text-green-400 font-bold px-6 py-3 rounded-2xl hover:bg-green-600/30 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
