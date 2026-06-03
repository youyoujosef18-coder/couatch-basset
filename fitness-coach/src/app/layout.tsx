import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '../../config/site'

export const metadata: Metadata = {
  title:       siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords:    siteConfig.seo.keywords,
  openGraph: { title: siteConfig.seo.title, description: siteConfig.seo.description, type:'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily:"'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  )
}
