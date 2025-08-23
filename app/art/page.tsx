import { ARTWORKS } from '@/lib/art'

export const metadata = { title: 'Resim Çalışmaları', description: 'Instagram gönderilerinden seçki.' }

function InstagramEmbed({ url }:{ url:string }){
  const src = url.endsWith('/') ? `${url}embed` : `${url}/embed`
  return (<iframe src={src} className="w-full rounded-xl border border-zinc-800" height={520} loading="lazy"></iframe>)
}

export default function ArtPage(){
  return (
    <section>
      <h1 className="section-title">Resim Çalışmaları</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {ARTWORKS.map(w => (
          <article key={w.id} className="card">
            <h2 className="font-semibold">{w.title}</h2>
            {w.instagram && <div className="mt-3"><InstagramEmbed url={w.instagram} /></div>}
            {w.series && <div className="text-xs text-zinc-500 mt-1">{w.series}</div>}
            {w.description && <p className="text-sm mt-2">{w.description}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
