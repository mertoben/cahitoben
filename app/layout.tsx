import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Cahit Oben — Resmi Web Sitesi', template: '%s — Cahit Oben' },
  description:
    'Cahit Oben’in resmi sitesi: biyografi, diskografi, haberler, resim çalışmaları ve dinleme bağlantıları.',
  openGraph: {
    title: 'Cahit Oben — Resmi Web Sitesi',
    description: 'Biyografi, diskografi, haberler ve resim çalışmaları.',
    url: siteUrl,
    siteName: 'Cahit Oben',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 🔴 1) Dark modu sınıfla kilitle
    <html lang="tr" className="dark" suppressHydrationWarning>
      {/* 🔴 2) Koyu arka plan ve açık metin renkleri */}
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <SiteHeader />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Cahit Oben',
              url: siteUrl,
              sameAs: [
                'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH',
                'https://music.apple.com/tr/artist/cahit-oben/95145871',
                'https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
