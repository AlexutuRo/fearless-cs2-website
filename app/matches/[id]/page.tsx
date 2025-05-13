"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Translation data
const translations = {
  en: {
    backToMatches: "Back to matches",
    upcoming: "Upcoming",
    live: "LIVE",
    completed: "Completed",
    matchDescription: "Match Description",
    maps: "Maps",
    lineups: "Line-up",
    matchHistory: "Match History",
    playerScores: "Player Scores",
    previousMatches: "Previous Matches",
    vs: "VS",
  },
  ro: {
    backToMatches: "Înapoi la meciuri",
    upcoming: "În curând",
    live: "LIVE",
    completed: "Finalizat",
    matchDescription: "Descriere Meci",
    maps: "Hărți",
    lineups: "Line-up",
    matchHistory: "Istoric Meciuri",
    playerScores: "Scorurile Jucătorilor",
    previousMatches: "Meciuri Anterioare",
    vs: "VS",
  },
}

export default function MatchPage({ params }: { params: { id: string } }) {
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
  const match = {
    id: Number.parseInt(params.id),
    opponent: "Fnatic",
    opponentLogo: "/placeholder.svg?height=120&width=120",
    date: language === "en" ? "May 10, 2025" : "10 Mai, 2025",
    time: "18:00",
    tournament: "ESL Pro League",
    tournamentLogo: "/placeholder.svg?height=60&width=60",
    venue: "Online",
    status: "upcoming", // upcoming, live, completed
    maps: ["Inferno", "Mirage", "Nuke"],
    description:
      language === "en"
        ? "An important match in the ESL Pro League, where our team will face Fnatic in a confrontation that could decide qualification for the playoffs."
        : "Un meci important în cadrul ESL Pro League, unde echipa noastră va întâlni Fnatic într-o confruntare ce poate decide calificarea în playoff.",
    players: [
      {
        nickname: "WolfKing",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "In-Game Leader" : "Lider în Joc",
      },
      {
        nickname: "ShadowBite",
        photo: "/placeholder.svg?height=100&width=100",
        role: "AWPer",
      },
      {
        nickname: "Blaze",
        photo: "/placeholder.svg?height=100&width=100",
        role: "Rifler",
      },
      {
        nickname: "Phantom",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "Support" : "Suport",
      },
      {
        nickname: "Viper",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "Entry Fragger" : "Entry Fragger",
      },
    ],
    opponentPlayers: [
      {
        nickname: "Player1",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "In-Game Leader" : "Lider în Joc",
      },
      {
        nickname: "Player2",
        photo: "/placeholder.svg?height=100&width=100",
        role: "AWPer",
      },
      {
        nickname: "Player3",
        photo: "/placeholder.svg?height=100&width=100",
        role: "Rifler",
      },
      {
        nickname: "Player4",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "Support" : "Suport",
      },
      {
        nickname: "Player5",
        photo: "/placeholder.svg?height=100&width=100",
        role: language === "en" ? "Entry Fragger" : "Entry Fragger",
      },
    ],
    previousMatches: [
      {
        date: language === "en" ? "March 15, 2025" : "15 Martie, 2025",
        result: "16-14",
        won: true,
        tournament: "IEM Katowice",
      },
      {
        date: language === "en" ? "December 10, 2024" : "10 Decembrie, 2024",
        result: "13-16",
        won: false,
        tournament: "BLAST Premier",
      },
      {
        date: language === "en" ? "September 5, 2024" : "5 Septembrie, 2024",
        result: "16-10",
        won: true,
        tournament: "ESL Pro League",
      },
    ],
    playerScores: [],
  }

  match.playerScores =
    match.status === "completed"
      ? [
          { player: "WolfKing", kills: 24, deaths: 18 },
          { player: "ShadowBite", kills: 21, deaths: 15 },
          { player: "Blaze", kills: 19, deaths: 17 },
          { player: "Phantom", kills: 16, deaths: 19 },
          { player: "Viper", kills: 22, deaths: 16 },
        ]
      : []

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <Link href="/matches" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToMatches}
        </Link>

        <Card className="bg-zinc-800 border-zinc-700 overflow-hidden mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-3">
                  <Image
                    src={match.tournamentLogo || "/placeholder.svg"}
                    alt={match.tournament}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{match.tournament}</h2>
                  <div className="flex items-center text-sm text-zinc-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {match.date} • {match.time}
                    </span>
                    <MapPin className="h-4 w-4 ml-3 mr-1" />
                    <span>{match.venue}</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                {match.status === "upcoming" && (
                  <span className="bg-yellow-600 px-3 py-1 rounded-md text-sm font-medium">{t.upcoming}</span>
                )}
                {match.status === "live" && (
                  <span className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium animate-pulse">{t.live}</span>
                )}
                {match.status === "completed" && (
                  <span className="bg-green-600 px-3 py-1 rounded-md text-sm font-medium">{t.completed}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-8 mb-6">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="relative h-28 w-28 mb-3">
                  <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold">FEARLESS</h3>
              </div>

              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="text-3xl font-bold text-zinc-400 mb-2">{t.vs}</div>
                <div className="md:hidden">
                  {match.status === "upcoming" && (
                    <span className="bg-yellow-600 px-3 py-1 rounded-md text-sm font-medium">{t.upcoming}</span>
                  )}
                  {match.status === "live" && (
                    <span className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium animate-pulse">{t.live}</span>
                  )}
                  {match.status === "completed" && (
                    <span className="bg-green-600 px-3 py-1 rounded-md text-sm font-medium">{t.completed}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative h-28 w-28 mb-3">
                  <Image
                    src={match.opponentLogo || "/placeholder.svg"}
                    alt={match.opponent}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">{match.opponent}</h3>
              </div>
            </div>

            {match.status === "completed" && match.playerScores && match.playerScores.length > 0 && (
              <div className="mt-6 mb-6">
                <h3 className="text-lg font-bold mb-2">{t.playerScores}</h3>
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
            )}

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">{t.matchDescription}</h3>
              <p className="text-zinc-300">{match.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">{t.maps}</h3>
              <div className="flex flex-wrap gap-2">
                {match.maps.map((map, index) => (
                  <span key={index} className="bg-zinc-700 px-3 py-1 rounded-md text-sm">
                    {map}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="lineups" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lineups">{t.lineups}</TabsTrigger>
            <TabsTrigger value="history">{t.matchHistory}</TabsTrigger>
          </TabsList>
          <TabsContent value="lineups">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <div className="relative h-6 w-6 mr-2">
                        <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" />
                      </div>
                      FEARLESS
                    </h3>
                    <div className="space-y-4">
                      {match.players.map((player, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-700">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={player.photo || "/placeholder.svg"}
                              alt={player.nickname}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{player.nickname}</h4>
                            <p className="text-xs text-zinc-400">{player.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <div className="relative h-6 w-6 mr-2">
                        <Image
                          src={match.opponentLogo || "/placeholder.svg"}
                          alt={match.opponent}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {match.opponent}
                    </h3>
                    <div className="space-y-4">
                      {match.opponentPlayers.map((player, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-700">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={player.photo || "/placeholder.svg"}
                              alt={player.nickname}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{player.nickname}</h4>
                            <p className="text-xs text-zinc-400">{player.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t.previousMatches}</h3>
                <div className="space-y-4">
                  {match.previousMatches.map((prevMatch, index) => (
                    <div key={index} className="border border-zinc-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Trophy className="h-5 w-5 mr-2 text-zinc-400" />
                          <span>{prevMatch.tournament}</span>
                        </div>
                        <span className="text-sm text-zinc-400">{prevMatch.date}</span>
                      </div>
                      <div className="flex items-center justify-center mt-4 space-x-4">
                        <div className="flex flex-col items-center">
                          <div className="relative h-10 w-10 mb-1">
                            <Image src="/images/logo.png" alt="Team Logo" fill className="object-contain" />
                          </div>
                          <span className="text-sm font-bold">FEARLESS</span>
                        </div>
                        <div className={`text-lg font-bold ${prevMatch.won ? "text-green-500" : "text-red-500"}`}>
                          {prevMatch.result}
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="relative h-10 w-10 mb-1">
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
