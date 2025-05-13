"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Translation data
const translations = {
  en: {
    matchesTitle: "Matches",
    matchesSubtitle: "Follow all our team's matches",
    upcomingMatches: "Upcoming Matches",
    pastMatches: "Past Matches",
    playerScores: "Player Scores:",
    map: "Map:",
    vs: "VS",
    years: "years",
  },
  ro: {
    matchesTitle: "Meciuri",
    matchesSubtitle: "Urmărește toate meciurile echipei noastre",
    upcomingMatches: "Meciuri Viitoare",
    pastMatches: "Meciuri Trecute",
    playerScores: "Scorurile Jucătorilor:",
    map: "Hartă:",
    vs: "VS",
    years: "ani",
  },
}

export default function MatchesPage() {
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

  const upcomingMatches = [
    {
      id: 1,
      opponent: "Fnatic",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "May 10, 2025" : "10 Mai, 2025",
      time: "18:00",
      tournament: "ESL Pro League",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      opponent: "Natus Vincere",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "May 15, 2025" : "15 Mai, 2025",
      time: "20:00",
      tournament: "BLAST Premier",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      opponent: "G2 Esports",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "May 22, 2025" : "22 Mai, 2025",
      time: "19:00",
      tournament: "IEM Cologne",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastMatches = [
    {
      id: 4,
      opponent: "Team Liquid",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "May 1, 2025" : "1 Mai, 2025",
      result: "16-14",
      won: true,
      tournament: "ESL Pro League",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
      map: "Inferno",
      playerScores: [
        { player: "WolfKing", kills: 24, deaths: 18 },
        { player: "ShadowBite", kills: 21, deaths: 15 },
        { player: "Blaze", kills: 19, deaths: 17 },
        { player: "Phantom", kills: 16, deaths: 19 },
        { player: "Viper", kills: 22, deaths: 16 },
      ],
    },
    {
      id: 5,
      opponent: "FaZe Clan",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "April 28, 2025" : "28 Aprilie, 2025",
      result: "13-16",
      won: false,
      tournament: "BLAST Premier",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
      map: "Mirage",
      playerScores: [
        { player: "WolfKing", kills: 19, deaths: 21 },
        { player: "ShadowBite", kills: 17, deaths: 20 },
        { player: "Blaze", kills: 15, deaths: 18 },
        { player: "Phantom", kills: 14, deaths: 22 },
        { player: "Viper", kills: 18, deaths: 19 },
      ],
    },
    {
      id: 6,
      opponent: "Vitality",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "April 25, 2025" : "25 Aprilie, 2025",
      result: "16-10",
      won: true,
      tournament: "IEM Cologne",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
      map: "Nuke",
      playerScores: [
        { player: "WolfKing", kills: 22, deaths: 15 },
        { player: "ShadowBite", kills: 25, deaths: 12 },
        { player: "Blaze", kills: 18, deaths: 14 },
        { player: "Phantom", kills: 16, deaths: 13 },
        { player: "Viper", kills: 20, deaths: 16 },
      ],
    },
    {
      id: 7,
      opponent: "Cloud9",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "April 20, 2025" : "20 Aprilie, 2025",
      result: "16-12",
      won: true,
      tournament: "ESL Pro League",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
      map: "Ancient",
      playerScores: [
        { player: "WolfKing", kills: 20, deaths: 16 },
        { player: "ShadowBite", kills: 23, deaths: 14 },
        { player: "Blaze", kills: 17, deaths: 15 },
        { player: "Phantom", kills: 15, deaths: 17 },
        { player: "Viper", kills: 19, deaths: 14 },
      ],
    },
    {
      id: 8,
      opponent: "Astralis",
      opponentLogo: "/placeholder.svg?height=80&width=80",
      date: language === "en" ? "April 15, 2025" : "15 Aprilie, 2025",
      result: "14-16",
      won: false,
      tournament: "BLAST Premier",
      tournamentLogo: "/placeholder.svg?height=40&width=40",
      map: "Vertigo",
      playerScores: [
        { player: "WolfKing", kills: 18, deaths: 19 },
        { player: "ShadowBite", kills: 16, deaths: 20 },
        { player: "Blaze", kills: 19, deaths: 18 },
        { player: "Phantom", kills: 15, deaths: 21 },
        { player: "Viper", kills: 17, deaths: 17 },
      ],
    },
  ]

  const navigateToMatch = (id: number) => {
    router.push(`/matches/${id}`)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.matchesTitle}</h1>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.matchesSubtitle}</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">{t.upcomingMatches}</TabsTrigger>
            <TabsTrigger value="past">{t.pastMatches}</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <div key={match.id} onClick={() => navigateToMatch(match.id)} className="cursor-pointer">
                  <Card className="match-card bg-zinc-800 border-zinc-700 hover:border-red-600 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 mr-2">
                            <Image
                              src={match.tournamentLogo || "/placeholder.svg"}
                              alt={match.tournament}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-zinc-400">{match.tournament}</span>
                        </div>
                        <div className="text-sm font-medium text-zinc-300">
                          {match.date} • {match.time}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center">
                          <div className="relative h-16 w-16 mb-2">
                            <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" />
                          </div>
                          <span className="text-sm font-bold">FEARLESS</span>
                        </div>
                        <div className="text-lg font-bold text-zinc-400">{t.vs}</div>
                        <div className="flex flex-col items-center">
                          <div className="relative h-16 w-16 mb-2">
                            <Image
                              src={match.opponentLogo || "/placeholder.svg"}
                              alt={match.opponent}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm font-bold">{match.opponent}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="grid grid-cols-1 gap-6">
              {pastMatches.map((match) => (
                <div key={match.id} onClick={() => navigateToMatch(match.id)} className="cursor-pointer">
                  <Card className="match-card bg-zinc-800 border-zinc-700 hover:border-red-600 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 mr-2">
                            <Image
                              src={match.tournamentLogo || "/placeholder.svg"}
                              alt={match.tournament}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-zinc-400">{match.tournament}</span>
                        </div>
                        <div className="text-sm font-medium text-zinc-300">
                          {match.date} • {match.map}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col items-center">
                          <div className="relative h-16 w-16 mb-2">
                            <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" />
                          </div>
                          <span className="text-sm font-bold">FEARLESS</span>
                        </div>
                        <div className={`text-lg font-bold ${match.won ? "text-green-500" : "text-red-500"}`}>
                          {match.result}
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="relative h-16 w-16 mb-2">
                            <Image
                              src={match.opponentLogo || "/placeholder.svg"}
                              alt={match.opponent}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm font-bold">{match.opponent}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">{t.playerScores}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {match.playerScores.map((score, index) => (
                            <div key={index} className="bg-zinc-700 p-2 rounded text-center">
                              <p className="text-xs font-medium">{score.player}</p>
                              <p className="text-sm">
                                {score.kills}-{score.deaths}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
