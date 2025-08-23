import Hero from '@/components/Hero'
import Link from 'next/link'
import { ALBUMS } from '@/lib/music'
import { NEWS } from '@/lib/news'

export default async function HomePage(){
  return (
    <>
      <Hero />
      <section className="mt-12">
        <h2 className="section-title">Öne Çıkanlar</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <article className="card"><h3 className="font-semibold">Diskografi</h3><p className="text-zinc-400 mt-1">Arşiv kayıtları ve seçkiler.</p><Link href="/discography" className="inline-block mt-3 nav-link text-pink-400">Göz at →</Link></article>
          <article className="card"><h3 className="font-semibold">Resim Çalışmaları</h3><p className="text-zinc-400 mt-1">Instagram’dan seçkiler ve açıklamalar.</p><Link href="/art" className="inline-block mt-3 nav-link text-pink-400">Keşfet →</Link></article>
          <article className="card"><h3 className="font-semibold">Haberler</h3><p className="text-zinc-400 mt-1">Resmi duyurular ve basında.</p><Link href="/news" className="inline-block mt-3 nav-link text-pink-400">Tümü →</Link></article>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">Son Çıkanlar</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {ALBUMS.slice(0,3).map(a => (
            <div key={a.id} className="card">
              <div className="text-sm text-zinc-400">{a.year ?? ''}</div>
              <h3 className="font-semibold">{a.title}</h3>
              <Link href={`/discography/${a.id}`} className="nav-link text-pink-400 mt-2 inline-block">Dinle / İncele →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">Haberler</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {NEWS.map(n => (
            <div key={n.slug} className="card">
              <div className="text-sm text-zinc-400">{n.date}</div>
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-zinc-300 mt-1">{n.excerpt}</p>
              <Link href={`/news/${n.slug}`} className="nav-link text-pink-400 mt-2 inline-block">Oku →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
