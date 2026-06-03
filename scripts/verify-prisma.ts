import "dotenv/config"
import { PrismaPg }    from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma  = new PrismaClient({ adapter })

async function main() {
  const [leadCount, adminCount, settingCount] = await Promise.all([
    prisma.lead.count(),
    prisma.adminUser.count(),
    prisma.siteSetting.count(),
  ])
  console.log("\n✅ Connected to Prisma Postgres\n")
  console.log(`   leads:        ${leadCount}`)
  console.log(`   admin users:  ${adminCount}`)
  console.log(`   settings:     ${settingCount}`)
  console.log()
}

main()
  .catch(e => { console.error("❌ Failed:", e.message); process.exit(1) })
  .finally(() => prisma.$disconnect())
