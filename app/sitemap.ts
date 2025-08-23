import { MetadataRoute } from 'next'
import { ALBUMS } from '@/lib/music'
import { NEWS } from '@/lib/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const pages = ['','/about','/discography','/news','/art','/listen','/contact','/privacy','/terms','/copyright','/sitemap']
  const items: MetadataRoute.Sitemap = pages.map(p => ({ url: `${base}${p}`, changeFrequency: 'weekly', priority: p===''?1:0.7 }))
  for(const a of ALBUMS){ items.push({ url: `${base}/discography/${a.id}`, changeFrequency:'monthly', priority:0.6 }) }
  for(const n of NEWS){ items.push({ url: `${base}/news/${n.slug}`, changeFrequency:'monthly', priority:0.5 }) }
  return items
}
