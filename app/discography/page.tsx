import Link from 'next/link'
import { ALBUMS } from '@/lib/music'

export const metadata = {
  title: 'Diskografi',
  description: 'Cahit Oben’in öne çıkan kayıtları: single, LP ve derlemeler.'
}

export default function DiscographyPage(){
  return (
    <section>
      <h1 className="section-title">Diskografi</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {ALBUMS.map(a => (
          <article key={a.id} className="card">
            <div className="text-sm text-zinc-400">{a.year ?? ''}</div>
            <h2 className="font-semibold">{a.title}</h2>
            <Link href={`/discography/${a.id}`} className="inline-block nav-link text-pink-400 mt-2">Detay →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
