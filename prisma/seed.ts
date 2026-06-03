import "dotenv/config"
import { PrismaPg }    from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma  = new PrismaClient({ adapter })

async function main() {
  console.log("\n🌱  Seeding Prisma Postgres...\n")

  // ── Admin user ──────────────────────────────────────────────────
  const hash    = await bcrypt.hash("admin123", 12)
  const existing = await prisma.adminUser.findUnique({ where: { username: "admin" } })
  if (existing) {
    await prisma.adminUser.update({ where: { username: "admin" }, data: { password: hash } })
    console.log("✓ admin user updated  →  admin / admin123")
  } else {
    await prisma.adminUser.create({ data: { username: "admin", password: hash } })
    console.log("✓ admin user created  →  admin / admin123")
  }

  // ── Default site settings ───────────────────────────────────────
  const defaults = [
    { key: "admin_email",      value: process.env.ADMIN_EMAIL ?? "coach@lounissi.dz" },
    { key: "coach_name",       value: "Lounissi Abdelbasset" },
    { key: "coach_title",      value: "Professional Fitness Coach" },
    { key: "experience_years", value: "10+" },
    { key: "whatsapp",         value: "+213 55 000 0000" },
    { key: "instagram",        value: "@lounissi_fitness" },
  ]
  for (const s of defaults) {
    await prisma.siteSetting.upsert({ where: { key: s.key }, update: {}, create: s })
  }
  console.log("✓ site settings ready")

  // ── Demo leads (only when table is empty) ───────────────────────
  const count = await prisma.lead.count()
  if (count === 0) {
    await prisma.lead.createMany({
      data: [
        { fullName: "Karim Benali",  email: "karim@example.com", whatsapp: "+213551234567", message: "I want to lose 20kg with a custom plan.", status: "NEW" },
        { fullName: "Sarah Meziani", email: "sarah@example.com", whatsapp: "+213659876543", message: "Looking for online coaching in Oran.",    status: "CONTACTED", instagramLink: "@sarah_fit" },
        { fullName: "Amine Hadj",    email: "amine@example.com", whatsapp: "+213771234321", message: "Goal: build lean muscle for summer.",     status: "CONVERTED" },
      ],
    })
    console.log("✓ 3 demo leads inserted")
  } else {
    console.log(`✓ leads table has ${count} row(s) — skipped`)
  }

  console.log("\n✅ Seed complete!\n")
  console.log("   http://localhost:3000/admin  →  admin / admin123\n")
}

main()
  .catch(e => { console.error("\n❌ Seed failed:\n", e.message ?? e); process.exit(1) })
  .finally(() => prisma.$disconnect())
