// app/listen/page.tsx
import ListenTabs from "@/components/ListenTabs"

export const metadata = {
  title: "Dinle — Cahit Oben",
  description: "Spotify, Apple Music ve YouTube üzerinden Cahit Oben’i dinleyin."
}

export default function ListenPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Cahit Oben’i Dinle</h1>
      <p className="text-zinc-600 mb-6">Aşağıdan platform seçerek çalmaya başlayın.</p>
      <ListenTabs />
    </div>
  )
}
