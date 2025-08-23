export const metadata = { title: 'Dinle' }

export default function ListenPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Cahit Oben’i Dinle</h1>

      {/* Spotify Embed */}
      <iframe
        src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH?utm_source=generator"
        width="100%"
        height="400"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {/* Apple Music Embed */}
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="450"
        style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"
      ></iframe>
    </div>
  )
}

