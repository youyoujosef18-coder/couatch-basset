import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const q      = searchParams.get('q')      ?? ''
  const status = searchParams.get('status') ?? ''

  const leads = await prisma.lead.findMany({
    where: {
      AND: [
        q ? { OR: [
          { fullName: { contains: q, mode: 'insensitive' } },
          { email:    { contains: q, mode: 'insensitive' } },
          { whatsapp: { contains: q, mode: 'insensitive' } },
        ]} : {},
        status ? { status: status as any } : {},
      ],
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ leads })
}
