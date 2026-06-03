// Types generated from Prisma schema — import from generated client once prisma generate has run
export type { Lead, AdminUser, SiteSetting, LeadStatus } from "@prisma/client"

export interface ContactFormData {
  fullName:      string
  email:         string
  whatsapp:      string
  message:       string
  instagramLink?: string
}

export interface SettingsMap {
  [key: string]: string
}
