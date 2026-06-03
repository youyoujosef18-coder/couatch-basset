export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(_req: NextRequest) {
  try {
    const today = new Date().toISOString().split('T')[0]
    await prisma.pageView.upsert({
      where:  { date: today },
      update: { count: { increment: 1 } },
      create: { date: today, count: 1 },
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false })
  }
}
