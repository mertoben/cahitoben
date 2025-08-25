"use client"

import { useState } from "react"

type Tab = "spotify" | "apple" | "youtube"

export default function ListenTabs() {
  const [active, setActive] = useState<Tab>("spotify")

  const btn = "px-4 py-2 rounded transition-colors text-sm md:text-base"
  const on = "bg-brand-500 text-white hover:bg-brand-600"
  const off = "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"

  return (
    <div>
      <div className="flex gap-2">
        <button className={`${btn} ${active === "spotify" ? on : off}`} onClick={() => setActive("spotify")}>
          Spotify
        </button>
        <button className={`${btn} ${active === "apple" ? on : off}`} onClick={() => setActive("apple")}>
          Apple Music
        </button>
        <button className={`${btn} ${active === "youtube" ? on : off}`} onClick={() => setActive("youtube")}>
          YouTube
        </button>
      </div>

      <div className="mt-4">
        {active === "spotify" && (
          <iframe
            className="w-full h-[352px] rounded"
            src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        )}
        {active === "apple" && (
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            className="w-full h-[352px] rounded"
            frameBorder="0"
            height="450"
            style={{ width: "100%", overflow: "hidden", background: "transparent" }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"
          />
        )}
        {active === "youtube" && (
          <iframe
            className="w-full aspect-video rounded"
            src="https://www.youtube.com/embed?listType=user_uploads&list=UCWiOnChcc4l8peYF7e0XXfw"
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}
