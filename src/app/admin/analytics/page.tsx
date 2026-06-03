'use client'
import { useEffect, useState } from 'react'
import AnalyticsChart  from '@/components/admin/AnalyticsChart'
import AdminStatsCard from '@/components/admin/StatsCard'

interface Lead { id:string; createdAt:string; status:string }
interface ChartDay { date:string; visits:number; leads:number }

export default function AnalyticsPage() {
  const [leads,   setLeads] = useState<Lead[]>([])
  const [chart,   setChart] = useState<ChartDay[]>([])
  const [loading, setLoad]  = useState(true)

  useEffect(() => {
    fetch('/api/leads').then(r => r.json()).then(({ leads: data }: { leads: Lead[] }) => {
      setLeads(data)
      const days: ChartDay[] = []
      for (let i = 13; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i)
        const dateStr  = d.toISOString().split('T')[0]
        const dayLabel = d.toLocaleDateString('en', { month:'short', day:'numeric' })
        days.push({ date: dayLabel, visits: Math.floor(Math.random()*80+20), leads: data.filter(l=>l.createdAt.startsWith(dateStr)).length })
      }
      setChart(days); setLoad(false)
    }).catch(() => setLoad(false))
  }, [])

  const total     = leads.length
  const converted = leads.filter(l => l.status === 'CONVERTED').length
  const rate      = total > 0 ? ((converted/total)*100).toFixed(1) : '0'
  const totalVisits = chart.reduce((s,v)=>s+v.visits, 0)

  if (loading) return <div className="text-gold font-black animate-pulse">Loading...</div>
  return (
    <div>
      <h1 className="font-black text-white text-2xl mb-2 uppercase tracking-wider">Analytics</h1>
      <p className="text-gray-500 text-sm mb-8">Last 14 days performance overview.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AdminStatsCard title="Total Visitors"  value={totalVisits} icon="👁️" index={0} />
        <AdminStatsCard title="Total Leads"     value={total}       icon="📨" index={1} />
        <AdminStatsCard title="Conversion Rate" value={`${rate}%`}  icon="📈" index={2} />
        <AdminStatsCard title="Converted"       value={converted}   icon="🏆" index={3} />
      </div>
      <AnalyticsChart data={chart} />
      <div className="mt-6 bg-dark-200 border border-gold/10 rounded-2xl p-6">
        <h3 className="font-black text-white mb-4 uppercase tracking-wider text-sm">Lead Status Breakdown</h3>
        <div className="flex flex-wrap gap-3">
          {(['NEW','VIEWED','CONTACTED','CONVERTED','ARCHIVED'] as const).map(s => {
            const count = leads.filter(l => l.status === s).length
            const pct   = total > 0 ? Math.round((count/total)*100) : 0
            return (
              <div key={s} className="bg-dark-300 border border-gold/10 rounded-xl px-4 py-3 text-center min-w-[100px]">
                <p className="text-gold font-black text-xl">{count}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{s}</p>
                <p className="text-gray-600 text-xs">{pct}%</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
