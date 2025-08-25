import Link from "next/link"
import { ALBUMS } from "@/lib/music"
import { NEWS } from "@/lib/news"

export const metadata = {
  title: "Cahit Oben — Resmi Site",
  description: "Diskografi, haberler ve resim çalışmaları.",
}

export default function HomePage() {
  const featuredAlbums = ALBUMS.slice(0, 3)
  const featuredNews = NEWS.slice(0, 3)

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Cahit Oben
        </h1>
        <p className="text-zinc-300 mt-3 max-w-2xl">
          Arşivden çıkan kayıtlar, resim çalışmaları ve güncel haberler.
        </p>
      </section>

      {/* Diskografi kısa seçki */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Diskografi</h2>
          <Link href="/discography" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredAlbums.map(a => (
            <article key={a.id} className="card">
              <div className="text-sm text-zinc-400">{a.year ?? ""}</div>
              <h3 className="font-semibold">{a.title}</h3>
              <Link
                href={`/discography/${a.id}`}
                className="nav-link text-brand-400 mt-2 inline-block"
              >
                Dinle / İncele →
              </Link>
            </article>
          ))}
        </div>

        <article className="mt-4 text-sm text-zinc-400">
          <p>Seçkiler ve detaylar için diskografi sayfasına göz at.</p>
          <Link href="/discography" className="inline-block mt-3 nav-link text-brand-400">
            Göz at →
          </Link>
        </article>
      </section>

      {/* Resim çalışmaları kısa seçki */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Resim Çalışmaları</h2>
          <Link href="/art" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <article className="text-sm text-zinc-400">
          <p>Seriler, açıklamalar ve Instagram’dan seçkiler.</p>
          <Link href="/art" className="inline-block mt-3 nav-link text-brand-400">
            Keşfet →
          </Link>
        </article>
      </section>

      {/* Haberler */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Haberler</h2>
          <Link href="/news" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredNews.map(n => (
            <article key={n.slug} className="card">
              <div className="text-sm text-zinc-400">{n.date}</div>
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-zinc-300 mt-1">{n.excerpt}</p>
              <Link
                href={`/news/${n.slug}`}
                className="nav-link text-brand-400 mt-2 inline-block"
              >
                Oku →
              </Link>
            </article>
          ))}
        </div>

        <article className="mt-4 text-sm text-zinc-400">
          <p>Duyurular ve basında.</p>
          <Link href="/news" className="inline-block mt-2 nav-link text-brand-400">
            Tümü →
          </Link>
        </article>
      </section>
    </main>
  )
}
