import nodemailer from 'nodemailer'
import { prisma } from './prisma'

async function getAdminEmail(): Promise<string> {
  try {
    const s = await prisma.siteSetting.findUnique({ where: { key: 'admin_email' } })
    return s?.value ?? process.env.ADMIN_EMAIL ?? 'coach@lounissi.dz'
  } catch {
    return process.env.ADMIN_EMAIL ?? 'coach@lounissi.dz'
  }
}

function getTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
    port:   parseInt(process.env.SMTP_PORT ?? '587'),
    secure: parseInt(process.env.SMTP_PORT ?? '587') === 465,
    auth:   { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  })
}

export async function sendLeadEmail(lead: {
  fullName: string; email: string; whatsapp: string; message: string; instagramLink?: string | null
}) {
  const to = await getAdminEmail()
  const html = `
<!DOCTYPE html><html><head><style>
body{font-family:Arial,sans-serif;background:#0d0d0d;color:#f5f5f5;margin:0;padding:0}
.wrapper{max-width:600px;margin:0 auto;padding:32px 16px}
.card{background:#111;border:1px solid rgba(212,168,80,0.3);border-radius:16px;overflow:hidden}
.header{background:linear-gradient(135deg,#D4A850,#A07828);padding:32px;text-align:center}
.header h1{color:#000;font-size:22px;font-weight:900;margin:0}
.body{padding:28px}
.row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #1a1a1a;font-size:14px}
.label{color:#888}.value{color:#f5f5f5;font-weight:600}
.msg{background:#1a1a1a;border-radius:10px;padding:16px;margin-top:16px;font-size:14px;line-height:1.6;color:#ccc}
.footer{text-align:center;padding:20px;color:#555;font-size:12px}
</style></head><body>
<div class="wrapper">
  <div class="card">
    <div class="header"><h1>🏋️ New Lead — Lounissi Fitness</h1></div>
    <div class="body">
      <div class="row"><span class="label">Name</span><span class="value">${lead.fullName}</span></div>
      <div class="row"><span class="label">Email</span><span class="value">${lead.email}</span></div>
      <div class="row"><span class="label">WhatsApp</span><span class="value">${lead.whatsapp}</span></div>
      ${lead.instagramLink ? `<div class="row"><span class="label">Instagram</span><span class="value">${lead.instagramLink}</span></div>` : ''}
      <p style="margin:20px 0 8px;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px">Message</p>
      <div class="msg">${lead.message}</div>
    </div>
  </div>
  <div class="footer">Lounissi Abdelbasset Fitness Coach · ${new Date().toLocaleDateString('fr-DZ')}</div>
</div></body></html>`
  try {
    await getTransporter().sendMail({ from: process.env.SMTP_FROM, to, subject: `🔥 New Lead: ${lead.fullName}`, html })
    return { success: true }
  } catch (e) {
    console.error('Email error:', e)
    return { success: false }
  }
}
