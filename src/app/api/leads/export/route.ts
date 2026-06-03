export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import * as XLSX from 'xlsx'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const format = searchParams.get('format') ?? 'csv'

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } })
  const rows  = leads.map((l: any) => ({
    Name: l.fullName, Email: l.email, WhatsApp: l.whatsapp,
    Message: l.message, Instagram: l.instagramLink ?? '', Status: l.status,
    Date: l.createdAt.toISOString().split('T')[0],
  }))

  if (format === 'xlsx') {
    const ws = XLSX.utils.json_to_sheet(rows)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Leads')
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
    return new NextResponse(buf, {
      headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'Content-Disposition': 'attachment; filename="leads.xlsx"' },
    })
  }

  const csv = [Object.keys(rows[0] ?? {}).join(','), ...rows.map((r: Record<string,unknown>) => Object.values(r).map(v => `"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n')
  return new NextResponse(csv, {
    headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="leads.csv"' },
  })
}
