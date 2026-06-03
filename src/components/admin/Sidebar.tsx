'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { siteConfig } from '../../../config/site'

const NAV = [
  { href:'/admin',           label:'Dashboard', icon:'📊' },
  { href:'/admin/leads',     label:'Leads',     icon:'📨' },
  { href:'/admin/settings',  label:'Settings',  icon:'⚙️' },
  { href:'/admin/analytics', label:'Analytics', icon:'📈' },
]

export default function AdminSidebar() {
  const path = usePathname()
  return (
    <aside className="w-64 flex-shrink-0 bg-dark-100 border-r border-gold/10 min-h-screen flex flex-col">
      <div className="h-16 flex items-center gap-3 px-6 border-b border-gold/10">
        <div className="w-8 h-8 rounded-xl bg-gold-gradient flex items-center justify-center text-black font-black text-xs">L</div>
        <div>
          <p className="font-black text-white text-sm leading-none">Admin Panel</p>
          <p className="text-gold text-[10px] uppercase tracking-widest">{siteConfig.coach.name.split(' ')[1]}</p>
        </div>
      </div>

      <nav className="flex-1 py-4 px-3">
        {NAV.map(item => {
          const active = path === item.href || (item.href !== '/admin' && path.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href}
              className={cn('flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 text-sm font-semibold transition-all uppercase tracking-wider',
                active ? 'bg-gold/20 text-gold border border-gold/30' : 'text-gray-500 hover:bg-white/5 hover:text-white')}>
              <span>{item.icon}</span>{item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gold/10">
        <Link href="/" target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-white/5 hover:text-white transition-all mb-1 uppercase tracking-wider">
          <span>🌐</span> View Site
        </Link>
        <button onClick={() => signOut({ callbackUrl:'/admin/login' })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-red-500/10 hover:text-red-400 transition-all uppercase tracking-wider">
          <span>🚪</span> Logout
        </button>
      </div>
    </aside>
  )
}
