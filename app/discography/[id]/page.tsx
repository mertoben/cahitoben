import type { Metadata } from 'next'
import Link from 'next/link'
import { ALBUMS } from '@/lib/music'

export function generateStaticParams(){ return ALBUMS.map(a => ({ id: a.id })) }

export function generateMetadata({ params }:{ params:{ id:string } }): Metadata {
  const a = ALBUMS.find(x => x.id === params.id)
  return { title: a ? `${a.title} — ${a.year ?? ''}` : 'Albüm', description: a ? `Yayın: ${a.year ?? ''}` : '' }
}

export default function AlbumDetail({ params }:{ params:{ id:string } }){
  const a = ALBUMS.find(x => x.id === params.id)
  if(!a) return <div>Albüm bulunamadı.</div>

  const albumLd = {
    "@context":"https://schema.org",
    "@type":"MusicAlbum",
    "name": a.title,
    "datePublished": a.year ? String(a.year) : undefined,
    "byArtist": { "@type":"MusicGroup", "name":"Cahit Oben" },
    "track": a.tracks.map(t => ({ "@type":"MusicRecording", "name": t.title, "duration": t.duration }))
  }

  return (
    <section className="prose prose-invert max-w-none">
      <h1>{a.title}</h1>
      <p>Yıl: {a.year ?? '-'}</p>
      <h3>Parçalar</h3>
      <ol>{a.tracks.map(t => (<li key={t.id}>{t.title}</li>))}</ol>
      {a.external && (<p>
        {a.external.spotify && <a href={a.external.spotify} className="nav-link" target="_blank">Spotify</a>}{" "}
        {a.external.apple && <a href={a.external.apple} className="nav-link" target="_blank">Apple</a>}{" "}
        {a.external.youtube && <a href={a.external.youtube} className="nav-link" target="_blank">YouTube</a>}
      </p>)}
      <script type="application/ld+json" suppressHydrationWarning
        dangerouslySetInnerHTML={{__html: JSON.stringify(albumLd)}} />
    </section>
  )
}
