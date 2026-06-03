import "dotenv/config"
import { PrismaPg }    from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma  = new PrismaClient({ adapter })

async function main() {
  const USERNAME = "admin"
  const PASSWORD = "admin123"

  console.log("\n🔑 Resetting admin credentials...\n")
  await prisma.$connect()
  console.log("✓ Database connected")

  const hash     = await bcrypt.hash(PASSWORD, 12)
  const existing = await prisma.adminUser.findUnique({ where: { username: USERNAME } })

  if (existing) {
    await prisma.adminUser.update({ where: { username: USERNAME }, data: { password: hash } })
    console.log("✓ Password updated")
  } else {
    await prisma.adminUser.create({ data: { username: USERNAME, password: hash } })
    console.log("✓ Admin user created")
  }

  console.log("\n✅ Done!")
  console.log("─────────────────────────────")
  console.log("  URL      : http://localhost:3000/admin")
  console.log("  Username : admin")
  console.log("  Password : admin123")
  console.log("─────────────────────────────\n")
}

main()
  .catch(e => {
    console.error("\n❌ Failed:", e.message)
    console.error("\nCheck your DATABASE_URL in .env and that tables exist (run: npx prisma migrate dev)\n")
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
