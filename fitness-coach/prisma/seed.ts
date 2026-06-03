// @ts-nocheck
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Admin user
  const hashedPw = await bcrypt.hash('admin123', 12)
  await prisma.adminUser.upsert({
    where:  { username: 'admin' },
    update: { password: hashedPw },
    create: { username: 'admin', password: hashedPw },
  })
  console.log('✓ Admin user: admin / admin123')

  // Default settings
  const defaults = [
    { key:'admin_email',     value: process.env.ADMIN_EMAIL ?? 'coach@lounissi.dz' },
    { key:'coach_name',      value: 'Lounissi Abdelbasset' },
    { key:'coach_title',     value: 'Professional Fitness Coach' },
    { key:'experience_years',value: '10+' },
    { key:'whatsapp',        value: '+213 55 000 0000' },
    { key:'instagram',       value: '@lounissi_fitness' },
  ]
  for (const s of defaults) {
    await prisma.siteSetting.upsert({ where:{key:s.key}, update:{}, create:s })
  }
  console.log('✓ Default settings created')

  // Demo leads
  const demoLeads = [
    { fullName:'Karim Benali',  email:'karim@example.com', whatsapp:'+213551234567', message:'I want to lose 20kg. Can you help me?', status:'NEW' as const },
    { fullName:'Sarah Meziani', email:'sarah@example.com', whatsapp:'+213659876543', message:'Looking for online coaching program.', status:'CONTACTED' as const, instagramLink:'@sarah_fit' },
    { fullName:'Amine Hadj',    email:'amine@example.com', whatsapp:'+213771234321', message:'Want to build muscle for summer.', status:'CONVERTED' as const },
  ]
  for (const l of demoLeads) {
    await prisma.lead.upsert({ where:{id:l.email}, update:{}, create:{...l, id:l.email} }).catch(() =>
      prisma.lead.create({ data: l })
    )
  }
  console.log('✓ Demo leads created')
  console.log('\nSeed complete! 🚀')
}

main().catch(console.error).finally(() => prisma.$disconnect())
