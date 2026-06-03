'use client'
import { useEffect, useState } from 'react'
import { Input, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const FIELDS = [
  { key:'coach_name',      label:'Coach Name',        type:'text',     placeholder:'Lounissi Abdelbasset' },
  { key:'coach_title',     label:'Coach Title',       type:'text',     placeholder:'Professional Fitness Coach' },
  { key:'hero_text',       label:'Hero Headline',     type:'text',     placeholder:'Transform Your Body. Transform Your Life.' },
  { key:'experience_years',label:'Years Experience',  type:'text',     placeholder:'10+' },
  { key:'whatsapp',        label:'WhatsApp Number',   type:'text',     placeholder:'+213 55 000 0000' },
  { key:'admin_email',     label:'Lead Receiving Email',type:'email',  placeholder:'coach@lounissi.dz' },
  { key:'instagram',       label:'Instagram Handle',  type:'text',     placeholder:'@lounissi_fitness' },
  { key:'facebook',        label:'Facebook URL',      type:'url',      placeholder:'https://facebook.com/...' },
  { key:'bio',             label:'About / Bio',       type:'textarea', placeholder:'Professional fitness coach...' },
]

export default function SettingsPage() {
  const [values,  setValues]  = useState<Record<string,string>>({})
  const [loading, setLoading] = useState(true)
  const [saving,  setSaving]  = useState(false)
  const [saved,   setSaved]   = useState(false)
  const [video,   setVideo]   = useState<File|null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetch('/api/settings')
      .then(r => r.json())
      .then(({ settings }) => { setValues(settings); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const save = async () => {
    setSaving(true)
    await fetch('/api/settings', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(values) })
    setSaving(false); setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const uploadVideo = async () => {
    if (!video) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', video)
    await fetch('/api/upload', { method:'POST', body: fd })
    setUploading(false)
    setVideo(null)
    alert('Video uploaded! It will appear after page refresh.')
  }

  if (loading) return <div className="text-gold font-black animate-pulse p-8">Loading settings...</div>

  return (
    <div className="max-w-2xl">
      <h1 className="font-black text-white text-2xl mb-2 uppercase tracking-wider">Settings</h1>
      <p className="text-gray-500 text-sm mb-8">Edit all site content without touching code.</p>

      <div className="space-y-5 mb-8">
        {FIELDS.map(f => (
          f.type === 'textarea' ? (
            <Textarea key={f.key} label={f.label} placeholder={f.placeholder} rows={4}
              value={values[f.key] ?? ''} onChange={e => setValues(p => ({ ...p, [f.key]: e.target.value }))} />
          ) : (
            <Input key={f.key} label={f.label} type={f.type} placeholder={f.placeholder}
              value={values[f.key] ?? ''} onChange={e => setValues(p => ({ ...p, [f.key]: e.target.value }))} />
          )
        ))}
      </div>

      <Button onClick={save} loading={saving} size="lg" className="w-full sm:w-auto">
        {saved ? '✓ Saved!' : 'Save Settings'}
      </Button>

      {/* Video upload */}
      <div className="mt-12 bg-dark-200 border border-gold/10 rounded-2xl p-6">
        <h2 className="font-black text-white text-lg mb-2 uppercase tracking-wider">Hero Video</h2>
        <p className="text-gray-500 text-sm mb-4">Upload the coach introduction video. Max 100MB, MP4 recommended.</p>
        <div className="flex flex-wrap gap-3 items-center">
          <label className="cursor-pointer">
            <input type="file" accept="video/*" className="hidden"
              onChange={e => setVideo(e.target.files?.[0] ?? null)} />
            <span className="inline-flex items-center gap-2 bg-dark-300 border border-gold/20 text-gray-300 font-bold text-xs px-4 py-2.5 rounded-xl hover:border-gold/50 transition-all uppercase tracking-wider cursor-pointer">
              📁 {video ? video.name : 'Choose Video'}
            </span>
          </label>
          {video && (
            <Button size="sm" onClick={uploadVideo} loading={uploading}>
              Upload Video
            </Button>
          )}
        </div>
        {video && <p className="text-gray-500 text-xs mt-2">Selected: {(video.size / 1024 / 1024).toFixed(1)} MB</p>}
      </div>
    </div>
  )
}
