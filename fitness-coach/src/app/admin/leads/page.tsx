'use client'
import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import Button from '@/components/ui/Button'

interface Lead { id:string; fullName:string; email:string; whatsapp:string; message:string; instagramLink:string|null; status:string; createdAt:string }

const STATUSES = ['NEW','VIEWED','CONTACTED','CONVERTED','ARCHIVED']
const STATUS_COLORS: Record<string,string> = {
  NEW:'bg-gold/20 text-gold', VIEWED:'bg-blue-500/20 text-blue-400',
  CONTACTED:'bg-purple-500/20 text-purple-400', CONVERTED:'bg-green-500/20 text-green-400', ARCHIVED:'bg-white/10 text-gray-500'
}

export default function LeadsPage() {
  const [leads,   setLeads]  = useState<Lead[]>([])
  const [q,       setQ]      = useState('')
  const [filter,  setFilter] = useState('')
  const [loading, setLoad]   = useState(true)
  const [selected,setSel]    = useState<Lead|null>(null)

  const load = useCallback(async () => {
    setLoad(true)
    const params = new URLSearchParams()
    if (q)      params.set('q', q)
    if (filter) params.set('status', filter)
    const res = await fetch(`/api/leads?${params}`)
    const { leads } = await res.json()
    setLeads(leads)
    setLoad(false)
  }, [q, filter])

  useEffect(() => { load() }, [load])

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/leads/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ status }) })
    load()
  }

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead?')) return
    await fetch(`/api/leads/${id}`, { method:'DELETE' })
    setSel(null)
    load()
  }

  const exportFn = (format: string) => window.open(`/api/leads/export?format=${format}`)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-white text-2xl uppercase tracking-wider">Leads</h1>
          <p className="text-gray-500 text-sm mt-1">{leads.length} total</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => exportFn('csv')}>⬇ CSV</Button>
          <Button variant="outline" size="sm" onClick={() => exportFn('xlsx')}>⬇ Excel</Button>
        </div>
      </div>

      {/* Search + filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input value={q} onChange={e => setQ(e.target.value)}
          placeholder="Search name, email, WhatsApp..."
          className="flex-1 min-w-60 bg-dark-200 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-gold/50" />
        <select value={filter} onChange={e => setFilter(e.target.value)}
          className="bg-dark-200 border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-gold/50">
          <option value="">All Statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-dark-200 border border-gold/10 rounded-2xl overflow-hidden">
        {loading ? <div className="p-12 text-center text-gray-500">Loading...</div>
        : leads.length === 0 ? <div className="p-12 text-center text-gray-500">No leads found</div>
        : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-400">
                  {['Name','Email','WhatsApp','Status','Date','Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <motion.tr key={lead.id} initial={{ opacity:0 }} animate={{ opacity:1 }}
                    className="border-b border-dark-400 hover:bg-gold/5 transition-colors">
                    <td className="px-4 py-3">
                      <button onClick={() => setSel(lead)} className="font-bold text-white hover:text-gold transition-colors text-left">
                        {lead.fullName}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{lead.email}</td>
                    <td className="px-4 py-3 text-gray-400">{lead.whatsapp}</td>
                    <td className="px-4 py-3">
                      <select value={lead.status}
                        onChange={e => updateStatus(lead.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-full text-xs font-black uppercase border-0 cursor-pointer ${STATUS_COLORS[lead.status]} bg-transparent`}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{formatDate(lead.createdAt)}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => deleteLead(lead.id)} className="text-red-500/50 hover:text-red-400 transition-colors text-xs font-bold uppercase">Delete</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lead detail panel */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSel(null)}>
          <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }}
            onClick={e => e.stopPropagation()}
            className="bg-dark-200 border border-gold/20 rounded-3xl p-8 max-w-lg w-full shadow-gold">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-black text-white text-xl">{selected.fullName}</h2>
                <p className="text-gray-500 text-sm mt-1">{formatDate(selected.createdAt)}</p>
              </div>
              <button onClick={() => setSel(null)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <div className="space-y-3 text-sm">
              {([['Email',selected.email],['WhatsApp',selected.whatsapp],...(selected.instagramLink ? [['Instagram',selected.instagramLink]] : [])] as [string,string][]).map(([k,v]) => (
                <div key={k as string} className="flex gap-3">
                  <span className="text-gray-500 w-24 flex-shrink-0 uppercase tracking-widest text-xs font-bold">{k as string}</span>
                  <span className="text-gray-200">{v as string}</span>
                </div>
              ))}
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Message</p>
                <p className="text-gray-300 bg-dark-300 rounded-xl p-4 leading-relaxed">{selected.message}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={`https://wa.me/${selected.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-green-600/20 border border-green-500/30 text-green-400 font-black text-xs text-center rounded-xl hover:bg-green-600/30 transition-all uppercase tracking-wider">
                WhatsApp
              </a>
              <a href={`mailto:${selected.email}`}
                className="flex-1 py-2.5 bg-gold/10 border border-gold/20 text-gold font-black text-xs text-center rounded-xl hover:bg-gold/20 transition-all uppercase tracking-wider">
                Email
              </a>
              <button onClick={() => deleteLead(selected.id)}
                className="py-2.5 px-4 bg-red-500/10 border border-red-500/20 text-red-400 font-black text-xs rounded-xl hover:bg-red-500/20 transition-all uppercase tracking-wider">
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
