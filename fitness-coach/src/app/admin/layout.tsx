'use client'
import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import AdminSidebar from '@/components/admin/Sidebar'

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router   = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login')
      router.replace('/admin/login')
  }, [status, pathname, router])

  if (pathname === '/admin/login') return <>{children}</>
  if (status === 'loading') return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-gold font-black text-xl animate-pulse">Loading...</div>
    </div>
  )
  if (!session) return null

  return (
    <div className="flex min-h-screen bg-dark">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminGuard>{children}</AdminGuard>
    </SessionProvider>
  )
}
