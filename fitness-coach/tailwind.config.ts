import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './config/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT:'#D4A850', light:'#F0C870', dark:'#A07828', 50:'#FDF8EC', 100:'#FAF0D0', 900:'#3D2A08' },
        dark:  { DEFAULT:'#050505', 100:'#0D0D0D', 200:'#111111', 300:'#1A1A1A', 400:'#222222', 500:'#2C2C2C' },
      },
      fontFamily: { sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'fade-up':      'fadeUp 0.6s ease-out',
        'counter':      'counter 2s ease-out forwards',
        'shimmer':      'shimmer 3s ease-in-out infinite',
        'spin-slow':    'spin 12s linear infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-16px)' } },
        glowPulse:  { '0%,100%': { opacity:'0.6', filter:'blur(20px)' }, '50%': { opacity:'1', filter:'blur(30px)' } },
        fadeUp:     { '0%': { opacity:'0', transform:'translateY(20px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        shimmer:    { '0%,100%': { opacity:'0.5' }, '50%': { opacity:'1' } },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A850 0%, #F0C870 50%, #A07828 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0D0D0D 100%)',
      },
      boxShadow: {
        'gold':       '0 0 30px rgba(212,168,80,0.3)',
        'gold-sm':    '0 0 15px rgba(212,168,80,0.2)',
        'gold-lg':    '0 0 60px rgba(212,168,80,0.4)',
        'inner-gold': 'inset 0 1px 0 rgba(212,168,80,0.1)',
      },
    },
  },
  plugins: [],
}
export default config
