import Link from 'next/link'
import { NEWS } from '@/lib/news'

async function fetchGoogleNews(){
  const url = 'https://news.google.com/rss/search?q=cahit%20oben&hl=tr&gl=TR&ceid=TR:tr'
  const xml = await fetch(url, { next: { revalidate: 3600 } }).then(r => r.text())
  const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).slice(0,10).map(m => {
    const b = m[1]
    const title = (b.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || b.match(/<title>(.*?)<\/title>/) || [,''])[1]
    const link = (b.match(/<link>(.*?)<\/link>/) || [,''])[1]
    const pubDate = (b.match(/<pubDate>(.*?)<\/pubDate>/) || [,''])[1]
    return { title, link, pubDate }
  })
  return items
}

export const metadata = { title: 'Haberler' }

export default async function NewsPage(){
  const google = await fetchGoogleNews()
  return (
    <section className="space-y-10">
      <div>
        <h1 className="section-title">Resmî Duyurular</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {NEWS.map(n => (
            <article key={n.slug} className="card">
              <div className="text-sm text-zinc-400">{n.date}</div>
              <h2 className="font-semibold">{n.title}</h2>
              <p className="text-zinc-300 mt-1">{n.excerpt}</p>
              <Link href={`/news/${n.slug}`} className="inline-block mt-2 nav-link text-pink-400">Oku →</Link>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Basında (Google Haberler)</h2>
        <ul className="mt-6 space-y-3">
          {google.map((g, i) => (
            <li key={i} className="card">
              <a href={g.link} target="_blank" rel="noreferrer" className="no-underline">
                <div className="text-sm text-zinc-400">{g.pubDate}</div>
                <div className="font-medium">{g.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
