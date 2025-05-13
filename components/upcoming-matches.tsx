"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Translation data
const translations = {
  en: {
    vs: "VS",
  },
  ro: {
    vs: "VS",
  },
}

export default function UpcomingMatches({ language = "en" }: { language?: "en" | "ro" }) {
  const router = useRouter()
  const [t, setT] = useState(translations.en)

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

  const navigateToMatch = (id: number) => {
    router.push(`/matches/${id}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
      {upcomingMatches.map((match) => (
        <div key={match.id} onClick={() => navigateToMatch(match.id)}>
          <Card className="match-card bg-zinc-800 border-zinc-700 hover:border-red-600 overflow-hidden cursor-pointer">
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
  )
}
