import type { Metadata } from 'next'
import { ARTWORKS } from '@/lib/art'

export function generateStaticParams(){ return ARTWORKS.map(a => ({ id: a.id })) }

export function generateMetadata({ params }:{ params:{ id:string } }): Metadata {
  const a = ARTWORKS.find(x => x.id === params.id)
  return { title: a ? `${a.title} — Resim` : 'Resim', description: a ? `${a.year ?? ''} • ${a.series ?? ''}` : '' }
}

export default function ArtDetail({ params }:{ params:{ id:string } }){
  const a = ARTWORKS.find(x => x.id === params.id)
  if(!a) return <div>Çalışma bulunamadı.</div>

  const ld = { "@context":"https://schema.org", "@type":"VisualArtwork", "name": a.title, "artform":"Painting" }

  return (
    <section className="prose prose-invert max-w-none">
      <h1>{a.title}</h1>
      {a.instagram && <iframe src={`${a.instagram}${a.instagram.endsWith('/')?'':'/'}embed`} className="w-full rounded-xl border border-zinc-800" height={520} loading="lazy"></iframe>}
      {a.description && <p>{a.description}</p>}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}} />
    </section>
  )
}
