export const metadata = { title: 'Dinle' }
export default function ListenPage(){
  return (
    <section>
      <h1 className="section-title">Dinle</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <a className="card no-underline" href="https://open.spotify.com/intl-tr/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank" rel="noreferrer"><h3 className="font-semibold">Spotify</h3><p className="text-zinc-400 mt-1">Tüm yayınlar</p></a>
        <a className="card no-underline" href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank" rel="noreferrer"><h3 className="font-semibold">Apple Music</h3><p className="text-zinc-400 mt-1">Resmî sanatçı sayfası</p></a>
        <a className="card no-underline" href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank" rel="noreferrer"><h3 className="font-semibold">YouTube</h3><p className="text-zinc-400 mt-1">Videolar & derlemeler</p></a>
      </div>
    </section>
  )
}
