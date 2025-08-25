// components/ListenTabs.tsx
"use client"

import { useState } from "react"

type Tab = "spotify" | "apple" | "youtube"

export default function ListenTabs() {
  const [active, setActive] = useState<Tab>("spotify")
  const btn = "px-4 py-2 rounded transition-colors text-sm md:text-base font-medium"
  const on = "bg-brand-500 text-black"   // aktif (sarı arka plan, siyah yazı)
  const off = "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActive("spotify")}
          className={`${btn} ${active === "spotify" ? on : off}`}
        >
          Spotify
        </button>
        <button
          onClick={() => setActive("apple")}
          className={`${btn} ${active === "apple" ? on : off}`}
        >
          Apple Music
        </button>
        <button
          onClick={() => setActive("youtube")}
          className={`${btn} ${active === "youtube" ? on : off}`}
        >
          YouTube
        </button>
      </div>

      {active === "spotify" && (
        <iframe
          src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      {active === "apple" && (
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameBorder="0"
          height="450"
          style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"
        />
      )}
      {active === "youtube" && (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed?listType=search&list=Cahit+Oben"
          title="YouTube player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}
