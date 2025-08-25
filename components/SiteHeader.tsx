// components/SiteHeader.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_PRIMARY = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkında" },
  { href: "/discography", label: "Diskografi" },
  { href: "/news", label: "Haberler" },
  { href: "/art", label: "Resim Çalışmaları" },
  { href: "/listen", label: "Dinle" },
  { href: "/contact", label: "İletişim" },
]

// Basit yardımcı: aktif link mi?
function isActive(path: string, href: string) {
  if (href === "/") return path === "/"
  return path === href || path.startsWith(href + "/")
}

export default function SiteHeader() {
  const path = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo / Site adı */}
        <Link href="/" className="font-semibold tracking-wide text-white">
          Cahit Oben
        </Link>

        {/* Menü */}
        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_PRIMARY.map((item) => {
            const active = isActive(path, item.href)
            return (
              <Link
                key={item.href}
                href={item.href as any}
                className={
                  active
                    ? "text-brand-400 nav-link"
                    : "text-zinc-300 hover:text-white nav-link"
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
