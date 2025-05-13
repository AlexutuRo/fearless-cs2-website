"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CalendarDays, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import UpcomingMatches from "@/components/upcoming-matches"

// Translation data
const translations = {
  en: {
    heroSubtitle: "Professional Counter-Strike 2 team from Romania",
    matchesButton: "Matches",
    playersButton: "Players",
    meetTeamTitle: "Meet Our Team",
    meetTeamSubtitle: "The professional players behind Fearless Gaming",
    upcomingMatchesTitle: "Upcoming Matches",
    upcomingMatchesSubtitle: "Watch our team in action",
    viewAllMatches: "View all matches",
  },
  ro: {
    heroSubtitle: "Echipă profesională de Counter-Strike 2 din România",
    matchesButton: "Meciuri",
    playersButton: "Jucători",
    meetTeamTitle: "Echipa Noastră",
    meetTeamSubtitle: "Jucătorii profesioniști din spatele Fearless Gaming",
    upcomingMatchesTitle: "Meciuri Viitoare",
    upcomingMatchesSubtitle: "Urmărește echipa noastră în acțiune",
    viewAllMatches: "Vezi toate meciurile",
  },
}

export default function Home() {
  const router = useRouter()
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

  const navigateToPlayer = (id: number) => {
    router.push(`/players/${id}`)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black py-20 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 md:h-60 md:w-60 mb-6">
              <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" priority />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              FEARLESS <span className="text-red-500">GAMING</span>
            </h1>
            <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/matches">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {t.matchesButton}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
                <Link href="/players">
                  <Users className="mr-2 h-5 w-5" />
                  {t.playersButton}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                {t.meetTeamTitle}
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.meetTeamSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl mt-8">
              {[
                { name: "WolfKing", role: "In-Game Leader", photo: "/placeholder.svg?height=200&width=200" },
                { name: "ShadowBite", role: "AWPer", photo: "/placeholder.svg?height=200&width=200" },
                { name: "Blaze", role: "Rifler", photo: "/placeholder.svg?height=200&width=200" },
                { name: "Phantom", role: "Support", photo: "/placeholder.svg?height=200&width=200" },
                { name: "Viper", role: "Entry Fragger", photo: "/placeholder.svg?height=200&width=200" },
              ].map((player, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => navigateToPlayer(index + 1)}>
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                      <Image src={player.photo || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold">{player.name}</h3>
                    <p className="text-sm text-zinc-400">{player.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="py-12 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                {t.upcomingMatchesTitle}
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.upcomingMatchesSubtitle}</p>
            </div>
            <UpcomingMatches language={language} />
            <Button asChild variant="outline" className="mt-8 border-red-600 text-red-600 hover:bg-red-600/10">
              <Link href="/matches">{t.viewAllMatches}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
