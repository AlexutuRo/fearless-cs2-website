"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Translation data
const translations = {
  en: {
    aboutTitle: "About Fearless",
    aboutSubtitle: "The story of our CS2 team",
    ourHistory: "Our History",
    historyParagraph1:
      "Fearless was founded in 2022 by a group of passionate Counter-Strike players with the desire to create a competitive team that would represent Romania on the international stage.",
    historyParagraph2:
      "In a short time, the team began to attract attention in local competitions, winning several national tournaments and qualifying for international events.",
    historyParagraph3:
      "Today, Fearless is one of the most promising teams in Eastern Europe, with notable performances in tournaments such as ESL Pro League, BLAST Premier, and IEM.",
    ourValues: "Our Values",
    excellence: "Excellence",
    excellenceDesc: "We constantly strive to improve and achieve the highest standards in everything we do.",
    courage: "Courage",
    courageDesc: "We are fearless in the face of challenges and approach each match with confidence and determination.",
    unity: "Unity",
    unityDesc: "Our success is based on teamwork, mutual respect, and effective communication.",
    partnersSponsors: "Partners & Sponsors",
  },
  ro: {
    aboutTitle: "Despre Fearless",
    aboutSubtitle: "Povestea echipei noastre de CS2",
    ourHistory: "Istoria Noastră",
    historyParagraph1:
      "Fearless a fost fondată în 2022 de către un grup de jucători pasionați de Counter-Strike, cu dorința de a crea o echipă competitivă care să reprezinte România pe scena internațională.",
    historyParagraph2:
      "În scurt timp, echipa a început să atragă atenția în competițiile locale, câștigând mai multe turnee naționale și calificându-se pentru evenimente internaționale.",
    historyParagraph3:
      "Astăzi, Fearless este una dintre cele mai promițătoare echipe din Europa de Est, cu performanțe notabile în turnee precum ESL Pro League, BLAST Premier și IEM.",
    ourValues: "Valorile Noastre",
    excellence: "Excelență",
    excellenceDesc:
      "Ne străduim constant să ne îmbunătățim și să atingem cele mai înalte standarde în tot ceea ce facem.",
    courage: "Curaj",
    courageDesc: "Suntem neînfricați în fața provocărilor și abordăm fiecare meci cu încredere și determinare.",
    unity: "Unitate",
    unityDesc: "Succesul nostru se bazează pe munca în echipă, respect reciproc și comunicare eficientă.",
    partnersSponsors: "Parteneri & Sponsori",
  },
}

export default function AboutPage() {
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
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.aboutTitle}</h1>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">{t.aboutSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.ourHistory}</h2>
            <div className="space-y-4 text-zinc-300">
              <p>{t.historyParagraph1}</p>
              <p>{t.historyParagraph2}</p>
              <p>{t.historyParagraph3}</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Fearless Team" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.ourValues}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{t.excellence}</h3>
                <p className="text-zinc-400">{t.excellenceDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{t.courage}</h3>
                <p className="text-zinc-400">{t.courageDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{t.unity}</h3>
                <p className="text-zinc-400">{t.unityDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.partnersSponsors}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="relative h-20 w-40">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Sponsor ${i}`}
                    alt={`Sponsor ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
