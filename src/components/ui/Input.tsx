'use client'
import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; error?: string
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, id, className, ...props }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="block text-xs font-semibold text-gold/80 mb-1.5 uppercase tracking-widest">{label}</label>}
    <input ref={ref} id={id}
      className={cn('w-full bg-dark-200 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all',
        error && 'border-red-500/50', className)} {...props} />
    {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
  </div>
))
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; error?: string
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, id, className, ...props }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="block text-xs font-semibold text-gold/80 mb-1.5 uppercase tracking-widest">{label}</label>}
    <textarea ref={ref} id={id}
      className={cn('w-full bg-dark-200 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none',
        error && 'border-red-500/50', className)} {...props} />
    {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
  </div>
))
Textarea.displayName = 'Textarea'
