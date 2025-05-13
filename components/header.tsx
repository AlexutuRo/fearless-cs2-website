"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Translation data
const translations = {
  en: {
    home: "Home",
    matches: "Matches",
    players: "Players",
    news: "News",
    about: "About",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToRomanian: "Switch to Română",
  },
  ro: {
    home: "Acasă",
    matches: "Meciuri",
    players: "Jucători",
    news: "Știri",
    about: "Despre",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    switchToEnglish: "Switch to English",
  },
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "ro">("en")
  const [t, setT] = useState(translations.en)

  // Update translations when language changes
  useEffect(() => {
    setT(language === "en" ? translations.en : translations.ro)

    // Dispatch a custom event to notify other components about the language change
    const event = new CustomEvent("languageChange", { detail: { language } })
    window.dispatchEvent(event)
  }, [language])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Team Logo" width={40} height={40} />
          <span className="text-xl font-bold">FEARLESS</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-200 hover:text-white">
              {t.home}
            </Link>
            <Link href="/matches" className="text-sm font-medium text-zinc-200 hover:text-white">
              {t.matches}
            </Link>
            <Link href="/players" className="text-sm font-medium text-zinc-200 hover:text-white">
              {t.players}
            </Link>
            <Link href="/news" className="text-sm font-medium text-zinc-200 hover:text-white">
              {t.news}
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-200 hover:text-white">
              {t.about}
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-200 hover:text-white">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-zinc-700" : ""}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ro")} className={language === "ro" ? "bg-zinc-700" : ""}>
                Română
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">{t.openMenu}</span>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Image src="/images/logo.png" alt="Team Logo" width={40} height={40} />
                <span className="text-xl font-bold">FEARLESS</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">{t.closeMenu}</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4 px-4">
              <Link
                href="/"
                className="text-lg font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/matches"
                className="text-lg font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.matches}
              </Link>
              <Link
                href="/players"
                className="text-lg font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.players}
              </Link>
              <Link
                href="/news"
                className="text-lg font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.news}
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-zinc-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </Link>
              <div className="mt-4 flex items-center">
                <Button variant="outline" onClick={() => setLanguage(language === "en" ? "ro" : "en")}>
                  {language === "en" ? t.switchToRomanian : t.switchToEnglish}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
