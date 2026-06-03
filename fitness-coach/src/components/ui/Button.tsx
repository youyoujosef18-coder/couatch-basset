'use client'
import { cn } from '@/lib/utils'
import { forwardRef, ButtonHTMLAttributes } from 'react'

type Variant = 'gold' | 'outline' | 'ghost' | 'danger'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

const variants: Record<Variant, string> = {
  gold:    'bg-gold-gradient text-black font-black hover:shadow-gold-lg hover:scale-[1.02] active:scale-100',
  outline: 'border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold',
  ghost:   'text-gold hover:bg-gold/10',
  danger:  'bg-red-600 text-white hover:bg-red-500',
}
const sizes: Record<Size, string> = {
  sm:  'h-9 px-4 text-sm gap-1.5 rounded-xl',
  md:  'h-11 px-6 text-sm gap-2 rounded-2xl',
  lg:  'h-13 px-8 text-base gap-2.5 rounded-2xl',
  xl:  'h-16 px-10 text-lg gap-3 rounded-2xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: Size; loading?: boolean; fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'gold', size = 'md', loading, fullWidth, className, children, disabled, ...props
}, ref) => (
  <button ref={ref} disabled={disabled || loading}
    className={cn('inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed select-none uppercase tracking-wider',
      variants[variant], sizes[size], fullWidth && 'w-full', className)}>
    {loading && <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" /></svg>}
    {children}
  </button>
))
Button.displayName = 'Button'
export default Button
