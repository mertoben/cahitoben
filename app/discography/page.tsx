import Link from "next/link"
import { ALBUMS } from "@/lib/music"

export const metadata = {
  title: "Diskografi — Cahit Oben",
  description: "Öne çıkan single, EP ve derlemeler.",
}

export default function DiscographyPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">Diskografi</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {ALBUMS.map(a => (
          <article key={a.id} className="card">
            <div className="text-sm text-zinc-400">{a.year ?? ""}</div>
            <h2 className="font-semibold">{a.title}</h2>
            <Link
              href={`/discography/${a.id}`}
              className="inline-block nav-link text-brand-400 mt-2"
            >
              Detay →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
