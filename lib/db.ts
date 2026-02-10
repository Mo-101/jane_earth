import { neon } from "@neondatabase/serverless"

let sqlInstance: ReturnType<typeof neon> | null = null

export function getDb() {
  if (sqlInstance) {
    return sqlInstance
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  sqlInstance = neon(process.env.DATABASE_URL)
  return sqlInstance
}

export function isDbConfigured(): boolean {
  return !!process.env.DATABASE_URL
}
