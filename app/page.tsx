// app/page.tsx
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
    <main className="container mx-auto px-4 py-12">
      {/* HERO */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">Cahit Oben</h1>
        <p className="text-zinc-300 mt-4 max-w-3xl mx-auto">
          Türk pop tarihinin özgün isimlerinden. Arşiv kayıtları yeniden keşifte; resim çalışmaları erişimde.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/discography" className="btn-gold">Diskografi</Link>
          <Link href="/art" className="btn-outline">{/* btn-outline globals.css'te var */}
            Resim Çalışmaları
          </Link>
        </div>
      </section>

      {/* ÖNE ÇIKANLAR */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Öne Çıkanlar</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Diskografi kutusu */}
          <article className="card">
            <div className="text-sm text-zinc-400">Diskografi</div>
            <p className="mt-1 text-zinc-300">Arşiv kayıtları ve seçkiler.</p>
            <Link href="/discography" className="inline-block mt-3 nav-link text-brand-400">
              Göz at →
            </Link>
          </article>

          {/* Resim Çalışmaları kutusu */}
          <article className="card">
            <div className="text-sm text-zinc-400">Resim Çalışmaları</div>
            <p className="mt-1 text-zinc-300">Instagram’dan seçkiler ve açıklamalar.</p>
            <Link href="/art" className="inline-block mt-3 nav-link text-brand-400">
              Keşfet →
            </Link>
          </article>

          {/* Haberler kutusu */}
          <article className="card">
            <div className="text-sm text-zinc-400">Haberler</div>
            <p className="mt-1 text-zinc-300">Resmi duyurular ve basında.</p>
            <Link href="/news" className="inline-block mt-3 nav-link text-brand-400">
              Tümü →
            </Link>
          </article>
        </div>
      </section>

      {/* DİSKOGRAFİ — kısa seçki */}
      <section className="mb-14">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Diskografi</h2>
          <Link href="/discography" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredAlbums.map((a) => (
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

        <p className="mt-4 text-sm text-zinc-400">
          Seçkiler ve detaylar için diskografi sayfasına göz at.{" "}
          <Link href="/discography" className="inline-block mt-1 nav-link text-brand-400">
            Göz at →
          </Link>
        </p>
      </section>

      {/* RESİM ÇALIŞMALARI — kısa seçki */}
      <section className="mb-14">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Resim Çalışmaları</h2>
          <Link href="/art" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <article className="card">
          <div className="text-sm text-zinc-400">Seçkiler ve açıklamalar</div>
          <p className="text-zinc-300 mt-1">
            Seriler, açıklamalar ve Instagram’dan seçkiler.
          </p>
          <Link href="/art" className="inline-block mt-3 nav-link text-brand-400">
            Keşfet →
          </Link>
        </article>
      </section>

      {/* HABERLER */}
      <section>
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Haberler</h2>
          <Link href="/news" className="nav-link text-brand-400">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredNews.map((n) => (
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

        <p className="mt-4 text-sm text-zinc-400">
          Duyurular ve basında.{" "}
          <Link href="/news" className="inline-block mt-1 nav-link text-brand-400">
            Tümü →
          </Link>
        </p>
      </section>
    </main>
  )
}
