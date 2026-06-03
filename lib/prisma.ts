import "dotenv/config"
import { PrismaPg }    from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const connectionString = process.env.DATABASE_URL!

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Run 'prisma postgres link' first.")
}

const adapter = new PrismaPg({ connectionString })

// Singleton — reuses one client across hot-reloads in Next.js dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma    = globalForPrisma.prisma ?? new PrismaClient({ adapter })
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
