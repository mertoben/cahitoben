import Link from 'next/link'

export default function SiteFooter(){
  return (
    <footer className="mt-20 border-t border-zinc-800/70 bg-black/60">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold text-white">Cahit Oben</div>
          <p className="text-zinc-400 mt-2">Resmi web sitesi.</p>
          <div className="mt-4 space-x-4">
            <a href="https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank" rel="noreferrer" className="text-zinc-300 nav-link">Spotify</a>
            <a href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank" rel="noreferrer" className="text-zinc-300 nav-link">Apple</a>
            <a href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank" rel="noreferrer" className="text-zinc-300 nav-link">YouTube</a>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white">Site</div>
          <ul className="space-y-2 mt-2">
            <li><Link href="/sitemap" className="nav-link text-zinc-300">Site Haritası</Link></li>
            <li><Link href="/privacy" className="nav-link text-zinc-300">Gizlilik</Link></li>
            <li><Link href="/terms" className="nav-link text-zinc-300">Kullanım Şartları</Link></li>
            <li><Link href="/copyright" className="nav-link text-zinc-300">Telif Hakları</Link></li>
          </ul>
        </div>
        <div><div className="font-semibold text-white">Bülten</div><p className="text-zinc-400 mt-2">Yakında e-posta bülteni.</p></div>
        <div><div className="font-semibold text-white">İletişim</div><p className="text-zinc-400 mt-2">info@cahitoben.com</p></div>
      </div>
      <div className="border-t border-zinc-800/70 text-xs text-zinc-500 py-4">
        <div className="container">&copy; {new Date().getFullYear()} Cahit Oben</div>
      </div>
    </footer>
  )
}
