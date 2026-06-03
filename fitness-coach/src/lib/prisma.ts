/* eslint-disable @typescript-eslint/no-explicit-any */
let _prisma: any = null

async function getPrisma() {
  if (_prisma) return _prisma
  try {
    const { PrismaClient } = await import('@prisma/client')
    _prisma = new PrismaClient({ log: ['error'] })
    return _prisma
  } catch {
    return null
  }
}

// Synchronous mock for type-safety in non-runtime contexts
export const prisma = new Proxy({} as any, {
  get(_target, prop) {
    return new Proxy({}, {
      get(_, method) {
        return async (...args: any[]) => {
          const client = await getPrisma()
          if (!client) throw new Error('Database unavailable')
          return client[prop][method](...args)
        }
      }
    })
  }
})
