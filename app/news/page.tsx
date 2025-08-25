import Link from "next/link"
import { NEWS } from "@/lib/news"

export const metadata = {
  title: "Haberler — Cahit Oben",
  description: "Duyurular ve basında çıkan haberler.",
}

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">Haberler</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {NEWS.map(n => (
          <article key={n.slug} className="card">
            <div className="text-sm text-zinc-400">{n.date}</div>
            <h2 className="font-semibold">{n.title}</h2>
            <p className="text-zinc-300 mt-1">{n.excerpt}</p>
            <Link href={`/news/${n.slug}`} className="inline-block mt-2 nav-link text-brand-400">
              Oku →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
