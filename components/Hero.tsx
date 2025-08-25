export default function Hero(){
  return (
    <section className="container py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cahit Oben</h1>
      <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
        Türk pop tarihinin özgün isimlerinden. Arşiv kayıtları yeniden keşifte; resim çalışmaları erişimde.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a href="/discography" className="bg-gold hover:bg-gold-dark text-black rounded-full px-5 py-2 no-underline">Diskografi</a>
        <a href="/art" className="border border-zinc-700 hover:border-zinc-500 rounded-full px-5 py-2 no-underline">Resim Çalışmaları</a>
      </div>
    </section>
  )
}
