'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Props { data: { date: string; visits: number; leads: number }[] }
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-dark-200 border border-gold/20 rounded-xl p-3 text-xs shadow-gold-sm">
      <p className="text-gold font-bold mb-1">{label}</p>
      <p className="text-gray-300">Visits: {payload[0]?.value ?? 0}</p>
      <p className="text-gold">Leads:  {payload[1]?.value ?? 0}</p>
    </div>
  )
}
export default function AnalyticsChart({ data }: Props) {
  return (
    <div className="bg-dark-200 border border-gold/10 rounded-2xl p-6">
      <h3 className="font-black text-white text-lg mb-6 uppercase tracking-wider">Traffic & Leads</h3>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#D4A850" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#D4A850" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="lGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#D4A850" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#D4A850" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
          <XAxis dataKey="date" tick={{ fontSize:11, fill:'#555' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize:11, fill:'#555' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="visits" stroke="#D4A850" strokeWidth={1.5} fill="url(#vGrad)" strokeDasharray="4 4" />
          <Area type="monotone" dataKey="leads"  stroke="#D4A850" strokeWidth={2.5} fill="url(#lGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
