'use client'
import { motion } from 'framer-motion'

interface Props { title:string; value:string|number; change?:string; icon:string; index?:number }
export default function AdminStatsCard({ title, value, change, icon, index=0 }: Props) {
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: index*0.1 }}
      className="bg-dark-200 border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">{title}</p>
          <p className="text-3xl font-black text-transparent bg-clip-text bg-gold-gradient">{value}</p>
          {change && <p className="text-xs text-gray-500 mt-1">{change}</p>}
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </motion.div>
  )
}
