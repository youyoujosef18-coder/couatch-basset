'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Input }  from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { siteConfig } from '../../../../config/site'

export default function LoginPage() {
  const router = useRouter()
  const [form,  setForm]  = useState({ username:'', password:'' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    const res = await signIn('credentials', { ...form, redirect:false })
    if (res?.ok) router.push('/admin')
    else { setError('Invalid credentials. Try admin / admin123'); setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4"
      style={{ background:'radial-gradient(ellipse at 50% 0%, rgba(212,168,80,0.05) 0%, #050505 70%)' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">L</div>
          <h1 className="font-black text-white text-2xl">{siteConfig.coach.name}</h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">Admin Panel</p>
        </div>

        <div className="bg-dark-200 border border-gold/10 rounded-3xl p-8 shadow-gold-sm">
          <h2 className="font-black text-white text-xl mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Username" value={form.username} onChange={e => setForm(p => ({ ...p, username:e.target.value }))}
              placeholder="admin" autoComplete="username" required />
            <Input label="Password" type="password" value={form.password}
              onChange={e => setForm(p => ({ ...p, password:e.target.value }))}
              placeholder="••••••••" autoComplete="current-password" required />
            {error && <p className="text-red-400 text-xs text-center bg-red-500/10 py-2.5 rounded-xl border border-red-500/20">{error}</p>}
            <Button fullWidth size="lg" loading={loading} type="submit" className="mt-2">
              Sign In →
            </Button>
          </form>
          <p className="text-center text-gray-600 text-xs mt-4">Default: admin / admin123</p>
        </div>
      </div>
    </div>
  )
}
