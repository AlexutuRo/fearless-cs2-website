"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react"

// Translation data
const translations = {
  en: {
    description: "Professional Counter-Strike 2 team from Romania, dedicated to excellence and performance in esports.",
    quickLinks: "Quick Links",
    home: "Home",
    matches: "Matches",
    players: "Players",
    news: "News",
    about: "About",
    followUs: "Follow Us",
    contactUs: "Contact us:",
    allRightsReserved: "© 2025 Fearless Gaming. All rights reserved.",
  },
  ro: {
    description: "Echipă profesională de Counter-Strike 2 din România, dedicată excelenței și performanței în esports.",
    quickLinks: "Link-uri Rapide",
    home: "Acasă",
    matches: "Meciuri",
    players: "Jucători",
    news: "Știri",
    about: "Despre",
    followUs: "Urmărește-ne",
    contactUs: "Contactează-ne:",
    allRightsReserved: "© 2025 Fearless Gaming. Toate drepturile rezervate.",
  },
}

export default function Footer() {
  const [language, setLanguage] = useState<"en" | "ro">("en")
  const [t, setT] = useState(translations.en)

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Update translations when language changes
  useEffect(() => {
    setT(language === "en" ? translations.en : translations.ro)
  }, [language])

  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FEARLESS GAMING</h3>
            <p className="text-sm text-zinc-400">{t.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/matches" className="hover:text-white">
                  {t.matches}
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:text-white">
                  {t.players}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  {t.news}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  {t.about}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.followUs}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <p className="text-sm text-zinc-400">
              {t.contactUs}{" "}
              <a href="mailto:contact@fearlessgaming.com" className="hover:text-white">
                contact@fearlessgaming.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p>{t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}
