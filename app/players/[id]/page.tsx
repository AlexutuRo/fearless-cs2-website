"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flag, Calendar, Twitter, Instagram, Twitch } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Translation data
const translations = {
  en: {
    backToPlayers: "Back to players",
    biography: "Biography",
    recentMatches: "Recent Matches",
    age: "Age",
    map: "Map",
    vs: "vs",
    memberSince: "Member since",
  },
  ro: {
    backToPlayers: "Înapoi la jucători",
    biography: "Biografie",
    recentMatches: "Meciuri Recente",
    age: "Vârstă",
    map: "Hartă",
    vs: "vs",
    memberSince: "Membru din",
  },
}

export default function PlayerPage({ params }: { params: { id: string } }) {
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

  // In a real application, you would fetch this data from an API
  const player = {
    id: Number.parseInt(params.id),
    nickname: "WolfKing",
    name: "Alexandru Popescu",
    role: language === "en" ? "In-Game Leader" : "Lider în Joc",
    photo: "/placeholder.svg?height=500&width=500",
    country: language === "en" ? "Romania" : "România",
    age: 24,
    joinDate: language === "en" ? "January 2022" : "Ianuarie 2022",
    socialMedia: {
      twitter: "https://twitter.com/wolfking",
      instagram: "https://instagram.com/wolfking",
      twitch: "https://twitch.tv/wolfking",
      discord: "WolfKing#1234",
    },
    bio:
      language === "en"
        ? "Alexandru is one of the most experienced CS2 players in Romania. With a career spanning over 7 years in esports, he became the leader of Fearless Gaming in 2022.  With a career spanning over 7 years in esports, he became the leader of Fearless Gaming in 2022. Known for his innovative strategies and ability to stay calm under pressure, WolfKing has led the team to numerous victories in national and international competitions."
        : "Alexandru este unul dintre cei mai experimentați jucători de CS2 din România. Cu o carieră de peste 7 ani în esports, el a devenit liderul echipei Fearless Gaming în 2022. Cunoscut pentru strategiile sale inovatoare și capacitatea de a rămâne calm în momentele de presiune, WolfKing a condus echipa la numeroase victorii în competițiile naționale și internaționale.",
    recentMatches: [
      {
        opponent: "Team Liquid",
        date: language === "en" ? "May 1, 2025" : "1 Mai, 2025",
        result: "16-14",
        won: true,
        map: "Inferno",
      },
      {
        opponent: "FaZe Clan",
        date: language === "en" ? "April 28, 2025" : "28 Aprilie, 2025",
        result: "13-16",
        won: false,
        map: "Mirage",
      },
      {
        opponent: "Vitality",
        date: language === "en" ? "April 25, 2025" : "25 Aprilie, 2025",
        result: "16-10",
        won: true,
        map: "Nuke",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <Link href="/players" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToPlayers}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="relative h-80 w-full">
                <Image src={player.photo || "/placeholder.svg"} alt={player.nickname} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold">{player.nickname}</h1>
                    <p className="text-zinc-400">{player.name}</p>
                    <div className="flex space-x-3 mt-2">
                      {player.socialMedia?.twitter && (
                        <a
                          href={player.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white"
                        >
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      )}
                      {player.socialMedia?.instagram && (
                        <a
                          href={player.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white"
                        >
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      )}
                      {player.socialMedia?.twitch && (
                        <a
                          href={player.socialMedia.twitch}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white"
                        >
                          <Twitch className="h-4 w-4" />
                          <span className="sr-only">Twitch</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium">{player.role}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Flag className="h-5 w-5 mr-2 text-zinc-400" />
                    <span>{player.country}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-zinc-400" />
                    <span>
                      {t.age}: {player.age}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{t.biography}</h2>
                  <p className="text-zinc-300 leading-relaxed">{player.bio}</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{t.recentMatches}</h3>
                  <div className="space-y-4">
                    {player.recentMatches.map((match, index) => (
                      <div key={index} className="border border-zinc-700 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-medium">
                              {t.vs} {match.opponent}
                            </span>
                            <span className="text-sm text-zinc-400 ml-2">• {match.date}</span>
                          </div>
                          <div className={`font-bold ${match.won ? "text-green-500" : "text-red-500"}`}>
                            {match.result}
                          </div>
                        </div>
                        <div className="text-sm text-zinc-400">
                          {t.map}: {match.map}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
