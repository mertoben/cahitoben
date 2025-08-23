import type { Metadata } from 'next'
import { NEWS } from '@/lib/news'

export function generateStaticParams(){ return NEWS.map(n => ({ slug: n.slug })) }

export function generateMetadata({ params }:{ params:{ slug:string } }): Metadata {
  const n = NEWS.find(x => x.slug === params.slug)
  return { title: n ? n.title : 'Haber' }
}

export default function NewsDetail({ params }:{ params:{ slug:string } }){
  const n = NEWS.find(x => x.slug === params.slug)
  if(!n) return <div>Haber bulunamadı.</div>

  const ld = { "@context":"https://schema.org", "@type":"NewsArticle", "headline": n.title, "datePublished": n.date, "author": { "@type":"Organization", "name":"Cahit Oben Resmi" } }

  return (
    <section className="prose prose-invert max-w-none">
      <h1>{n.title}</h1>
      <p><i>{n.date}</i></p>
      <p>{n.body ?? n.excerpt}</p>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}} />
    </section>
  )
}
