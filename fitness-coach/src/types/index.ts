// Local type definitions (mirror Prisma schema)
export interface Lead {
  id:            string
  fullName:      string
  email:         string
  whatsapp:      string
  message:       string
  instagramLink: string | null
  status:        LeadStatus
  createdAt:     Date
  updatedAt:     Date
}
export type LeadStatus = 'NEW' | 'VIEWED' | 'CONTACTED' | 'CONVERTED' | 'ARCHIVED'
export interface AdminUser { id:string; username:string; password:string; createdAt:Date }
export interface SiteSetting { id:string; key:string; value:string; updatedAt:Date }
export interface PageView { id:string; date:string; count:number }
export interface ContactFormData {
  fullName:string; email:string; whatsapp:string; message:string; instagramLink?:string
}
