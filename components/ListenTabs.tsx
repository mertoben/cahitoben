// components/ListenTabs.tsx
"use client"

import { useState } from "react"

type Tab = "spotify" | "apple" | "youtube"

export default function ListenTabs() {
  const [active, setActive] = useState<Tab>("spotify")

  const btn = "px-4 py-2 rounded transition-colors text-sm md:text-base"
  const on = "bg-pink-500 text-white"
  const off = "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"

  return (
    <div>
      <div className="flex gap-2 md:gap-4 mb-6">
        <button onClick={() => setActive("spotify")} className={`${btn} ${active === "spotify" ? on : off}`}>Spotify</button>
        <button onClick={() => setActive("apple")}   className={`${btn} ${active === "apple"   ? on : off}`}>Apple Music</button>
        <button onClick={() => setActive("youtube")} className={`${btn} ${active === "youtube" ? on : off}`}>YouTube</button>
      </div>

      {active === "spotify" && (
        <div className="rounded-lg overflow-hidden border">
          <iframe
            src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH?utm_source=generator"
            width="100%" height="400" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}

      {active === "apple" && (
        <div className="rounded-lg overflow-hidden border">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0" height="450" style={{ width: "100%", background: "transparent" }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"
          />
        </div>
      )}

      {active === "youtube" && (
        <div className="rounded-lg overflow-hidden border">
          {/* Kendi playlist ID’n varsa değiştir */}
          <iframe
            width="100%" height="400"
            src="https://www.youtube.com/embed/videoseries?list=PLD9pGqXY6dN3U1WwElh3VhXbpujV2I_G8"
            title="YouTube playlist" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}
