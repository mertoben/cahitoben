export const metadata = { title: 'Dinle' }

"use client"

import { useState } from "react"

export default function ListenPage() {
  const [active, setActive] = useState<"spotify" | "apple" | "youtube">("spotify")

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Cahit Oben’i Dinle</h1>

      {/* Sekmeler */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActive("spotify")}
          className={`px-4 py-2 rounded ${active === "spotify" ? "bg-pink-500 text-white" : "bg-zinc-200"}`}
        >
          Spotify
        </button>
        <button
          onClick={() => setActive("apple")}
          className={`px-4 py-2 rounded ${active === "apple" ? "bg-pink-500 text-white" : "bg-zinc-200"}`}
        >
          Apple Music
        </button>
        <button
          onClick={() => setActive("youtube")}
          className={`px-4 py-2 rounded ${active === "youtube" ? "bg-pink-500 text-white" : "bg-zinc-200"}`}
        >
          YouTube
        </button>
      </div>

      {/* Embed içerikler */}
      {active === "spotify" && (
        <iframe
          src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH"
          width="100%"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      )}

      {active === "apple" && (
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{ width: "100%", maxWidth: "660px", background: "transparent" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"
        ></iframe>
      )}

      {active === "youtube" && (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/videoseries?list=PLD9pGqXY6dN3U1WwElh3VhXbpujV2I_G8" 
          title="YouTube playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
