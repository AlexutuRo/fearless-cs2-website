"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Instagram, Twitch, Linkedin } from "lucide-react"

// Translation data
const translations = {
  en: {
    playersTitle: "Players",
    playersSubtitle: "Meet our professional team",
    staffTitle: "Team & Staff",
    staffSubtitle: "The team behind the players",
    years: "years",
  },
  ro: {
    playersTitle: "Jucători",
    playersSubtitle: "Cunoaște echipa noastră de profesioniști",
    staffTitle: "Echipă & Staff",
    staffSubtitle: "Echipa din spatele jucătorilor",
    years: "ani",
  },
}

export default function PlayersPage() {
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

  const players = [
    {
      id: 1,
      nickname: "WolfKing",
      name: "Alexandru Popescu",
      role: language === "en" ? "In-Game Leader" : "Lider în Joc",
      photo: "/placeholder.svg?height=300&width=300",
      country: language === "en" ? "Romania" : "România",
      age: 24,
      socialMedia: {
        twitter: "https://twitter.com/wolfking",
        instagram: "https://instagram.com/wolfking",
        twitch: "https://twitch.tv/wolfking",
      },
    },
    {
      id: 2,
      nickname: "ShadowBite",
      name: "Mihai Ionescu",
      role: "AWPer",
      photo: "/placeholder.svg?height=300&width=300",
      country: language === "en" ? "Romania" : "România",
      age: 22,
      socialMedia: {
        twitter: "https://twitter.com/shadowbite",
        instagram: "https://instagram.com/shadowbite",
        twitch: "https://twitch.tv/shadowbite",
      },
    },
    {
      id: 3,
      nickname: "Blaze",
      name: "Andrei Dumitrescu",
      role: "Rifler",
      photo: "/placeholder.svg?height=300&width=300",
      country: language === "en" ? "Romania" : "România",
      age: 23,
      socialMedia: {
        twitter: "https://twitter.com/blaze",
        instagram: "https://instagram.com/blaze",
        twitch: "https://twitch.tv/blaze",
      },
    },
    {
      id: 4,
      nickname: "Phantom",
      name: "Cristian Stancu",
      role: language === "en" ? "Support" : "Suport",
      photo: "/placeholder.svg?height=300&width=300",
      country: language === "en" ? "Romania" : "România",
      age: 25,
      socialMedia: {
        twitter: "https://twitter.com/phantom",
        instagram: "https://instagram.com/phantom",
        twitch: "https://twitch.tv/phantom",
      },
    },
    {
      id: 5,
      nickname: "Viper",
      name: "Radu Munteanu",
      role: language === "en" ? "Entry Fragger" : "Entry Fragger",
      photo: "/placeholder.svg?height=300&width=300",
      country: language === "en" ? "Romania" : "România",
      age: 21,
      socialMedia: {
        twitter: "https://twitter.com/viper",
        instagram: "https://instagram.com/viper",
        twitch: "https://twitch.tv/viper",
      },
    },
  ]

  const staff = [
    {
      id: 1,
      name: "Elena Popescu",
      role: language === "en" ? "Manager" : "Manager",
      photo: "/placeholder.svg?height=300&width=300",
      description:
        language === "en"
          ? "Responsible for team management and competition organization."
          : "Responsabilă cu managementul echipei și organizarea competițiilor.",
      socialMedia: {
        twitter: "https://twitter.com/elena",
        linkedin: "https://linkedin.com/in/elena",
      },
    },
    {
      id: 2,
      name: "Marius Ionescu",
      role: language === "en" ? "Coach" : "Antrenor",
      photo: "/placeholder.svg?height=300&width=300",
      description:
        language === "en"
          ? "Head coach with over 5 years of experience in CS2."
          : "Antrenor principal cu experiență de peste 5 ani în CS2.",
      socialMedia: {
        twitter: "https://twitter.com/marius",
        instagram: "https://instagram.com/marius",
      },
    },
    {
      id: 3,
      name: "Andrei Popa",
      role: language === "en" ? "Analyst" : "Analist",
      photo: "/placeholder.svg?height=300&width=300",
      description:
        language === "en"
          ? "Analyzes opponent tactics and develops strategies for the team."
          : "Analizează tacticile adversarilor și dezvoltă strategii pentru echipă.",
      socialMedia: {
        twitter: "https://twitter.com/andrei",
        linkedin: "https://linkedin.com/in/andrei",
      },
    },
  ]

  const navigateToPlayer = (id: number) => {
    router.push(`/players/${id}`)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.playersTitle}</h1>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.playersSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {players.map((player) => (
            <div key={player.id}>
              <Card
                className="player-card bg-zinc-800 border-zinc-700 hover:border-red-600 overflow-hidden cursor-pointer"
                onClick={() => navigateToPlayer(player.id)}
              >
                <div className="relative h-80 w-full">
                  <Image src={player.photo || "/placeholder.svg"} alt={player.nickname} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-red-600 px-2 py-0.5 rounded-md">{player.role}</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-1">{player.nickname}</h2>
                    <p className="text-sm text-zinc-400">{player.name}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-zinc-400">{player.country}</span>
                    </div>
                    <div>
                      <span className="text-sm text-zinc-400">
                        {player.age} {t.years}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-2 justify-center" onClick={(e) => e.stopPropagation()}>
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
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.staffTitle}</h2>
            <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.staffSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {staff.map((person) => (
              <Card key={person.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image src={person.photo || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-zinc-700 px-2 py-0.5 rounded-md">{person.role}</span>
                    </div>
                    <h2 className="text-xl font-bold mt-1">{person.name}</h2>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-zinc-400">{person.description}</p>
                  <div className="flex space-x-3 mt-2 justify-center">
                    {person.socialMedia?.twitter && (
                      <a
                        href={person.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {person.socialMedia?.instagram && (
                      <a
                        href={person.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    )}
                    {person.socialMedia?.linkedin && (
                      <a
                        href={person.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
