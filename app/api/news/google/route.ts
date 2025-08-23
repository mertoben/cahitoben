export const revalidate = 3600
export async function GET(){
  const url = 'https://news.google.com/rss/search?q=cahit%20oben&hl=tr&gl=TR&ceid=TR:tr'
  const xml = await fetch(url, { cache: 'force-cache', next: { revalidate: 3600 } }).then(r => r.text())
  const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).slice(0,20).map(m => {
    const b = m[1]
    const title = (b.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || b.match(/<title>(.*?)<\/title>/) || [,''])[1]
    const link = (b.match(/<link>(.*?)<\/link>/) || [,''])[1]
    const pubDate = (b.match(/<pubDate>(.*?)<\/pubDate>/) || [,''])[1]
    return { title, link, pubDate }
  })
  return new Response(JSON.stringify({ items }), { headers: { 'content-type':'application/json; charset=utf-8' } })
}
