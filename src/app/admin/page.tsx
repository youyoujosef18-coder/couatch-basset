'use client'
import { useEffect, useState } from 'react'
import AdminStatsCard  from '@/components/admin/StatsCard'
import { formatDate }  from '@/lib/utils'

interface Lead { id:string; fullName:string; email:string; whatsapp:string; status:string; createdAt:string }
interface Stats { total:number; today:number; new:number; converted:number }

export default function AdminDashboard() {
  const [leads, setLeads]   = useState<Lead[]>([])
  const [stats, setStats]   = useState<Stats>({ total:0, today:0, new:0, converted:0 })
  const [loading,setLoading]= useState(true)

  useEffect(() => {
    fetch('/api/leads')
      .then(r => r.json())
      .then(({ leads: data }: { leads: Lead[] }) => {
        setLeads(data)
        const today = new Date().toISOString().split('T')[0]
        setStats({
          total:     data.length,
          today:     data.filter(l => l.createdAt.startsWith(today)).length,
          new:       data.filter(l => l.status === 'NEW').length,
          converted: data.filter(l => l.status === 'CONVERTED').length,
        })
        setLoading(false)
      }).catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="font-black text-white text-2xl mb-2 uppercase tracking-wider">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">Welcome back, Coach 💪</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <AdminStatsCard title="Total Leads"  value={stats.total}     icon="📨" index={0} change="All time" />
        <AdminStatsCard title="Today"        value={stats.today}     icon="📅" index={1} change="New today" />
        <AdminStatsCard title="New"          value={stats.new}       icon="🔔" index={2} change="Unread" />
        <AdminStatsCard title="Converted"    value={stats.converted} icon="🏆" index={3} change="Signed up" />
      </div>

      {/* Recent leads */}
      <div className="bg-dark-200 border border-gold/10 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10">
          <h2 className="font-black text-white uppercase tracking-wider text-sm">Recent Leads</h2>
          <a href="/admin/leads" className="text-gold text-xs font-bold hover:underline uppercase tracking-widest">View All →</a>
        </div>
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-gray-500">No leads yet. Share your landing page!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-400">
                  {['Name','Email','WhatsApp','Status','Date'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.slice(0,8).map(l => (
                  <tr key={l.id} className="border-b border-dark-400 hover:bg-gold/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-white">{l.fullName}</td>
                    <td className="px-4 py-3 text-gray-400">{l.email}</td>
                    <td className="px-4 py-3 text-gray-400">{l.whatsapp}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-black uppercase ${l.status==='NEW'?'bg-gold/20 text-gold':l.status==='CONVERTED'?'bg-green-500/20 text-green-400':'bg-white/10 text-gray-400'}`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{formatDate(l.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
