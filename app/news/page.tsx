"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Calendar, User, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Translation data
const translations = {
  en: {
    newsTitle: "News",
    newsSubtitle: "Latest updates from Fearless Gaming",
    readMore: "Read more",
    matchResults: "Match Results",
    teamUpdates: "Team Updates",
  },
  ro: {
    newsTitle: "Știri",
    newsSubtitle: "Ultimele noutăți de la Fearless Gaming",
    readMore: "Citește mai mult",
    matchResults: "Rezultate Meciuri",
    teamUpdates: "Actualizări Echipă",
  },
}

export default function NewsPage() {
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

  const newsItems = [
    {
      id: 1,
      title:
        language === "en"
          ? "Fearless Defeats Fnatic in ESL Pro League Thriller"
          : "Fearless învinge Fnatic într-un meci palpitant în ESL Pro League",
      date: language === "en" ? "May 5, 2025" : "5 Mai, 2025",
      category: language === "en" ? t.matchResults : t.matchResults,
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "Fearless Gaming secured a dramatic victory against Fnatic in the ESL Pro League with a 16-14 scoreline on Inferno."
          : "Fearless Gaming a obținut o victorie dramatică împotriva Fnatic în ESL Pro League cu un scor de 16-14 pe Inferno.",
      author: "Admin",
      icon: Trophy,
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Fearless Welcomes New Player 'Phoenix' to the Roster"
          : "Fearless îl întâmpină pe noul jucător 'Phoenix' în echipă",
      date: language === "en" ? "April 28, 2025" : "28 Aprilie, 2025",
      category: language === "en" ? t.teamUpdates : t.teamUpdates,
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "Fearless Gaming is proud to announce the addition of Vlad 'Phoenix' Dumitrescu to our CS2 roster."
          : "Fearless Gaming este mândru să anunțe adăugarea lui Vlad 'Phoenix' Dumitrescu în echipa noastră de CS2.",
      author: "Admin",
      icon: User,
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Phantom Leaves Fearless After Two Successful Years"
          : "Phantom părăsește Fearless după doi ani de succes",
      date: language === "en" ? "April 15, 2025" : "15 Aprilie, 2025",
      category: language === "en" ? t.teamUpdates : t.teamUpdates,
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "After two years of dedication and success, Cristian 'Phantom' Stancu is departing from Fearless Gaming."
          : "După doi ani de dedicare și succes, Cristian 'Phantom' Stancu părăsește Fearless Gaming.",
      author: "Admin",
      icon: User,
    },
  ]

  const navigateToNews = (id: number) => {
    router.push(`/news/${id}`)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.newsTitle}</h1>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.newsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {newsItems.map((news) => (
            <div
              key={news.id}
              onClick={() => navigateToNews(news.id)}
              className="cursor-pointer transition-all duration-300"
            >
              <Card className="bg-zinc-800 border-zinc-700 hover:border-red-600 overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-red-600 px-2 py-0.5 rounded-md">{news.category}</span>
                    <div className="flex items-center text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                  <p className="text-zinc-400">{news.excerpt}</p>
                  <div className="flex items-center mt-4 text-sm text-zinc-500">
                    <news.icon className="h-4 w-4 mr-1" />
                    <span>{t.readMore}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
