import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma }         from '@/lib/prisma'
import { sendLeadEmail }  from '@/lib/email'

const schema = z.object({
  fullName:      z.string().min(2, 'Name required'),
  email:         z.string().email('Invalid email'),
  whatsapp:      z.string().min(8, 'WhatsApp required'),
  message:       z.string().min(10, 'Message too short'),
  instagramLink: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const lead = await prisma.lead.create({ data })

    // Track analytics
    const today = new Date().toISOString().split('T')[0]
    await prisma.pageView.upsert({
      where:  { date: `lead-${today}` },
      update: { count: { increment: 1 } },
      create: { date: `lead-${today}`, count: 1 },
    }).catch(() => {})

    await sendLeadEmail(lead)

    return NextResponse.json({ success: true, id: lead.id })
  } catch (e) {
    if (e instanceof z.ZodError)
      return NextResponse.json({ error: e.errors[0].message }, { status: 422 })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
