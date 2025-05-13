"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

// Translation data
const translations = {
  en: {
    backToNews: "Back to news",
  },
  ro: {
    backToNews: "Înapoi la știri",
  },
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
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
  const newsItems = [
    {
      id: 1,
      title:
        language === "en"
          ? "Fearless Defeats Fnatic in ESL Pro League Thriller"
          : "Fearless învinge Fnatic într-un meci palpitant în ESL Pro League",
      date: language === "en" ? "May 5, 2025" : "5 Mai, 2025",
      category: language === "en" ? "Match Results" : "Rezultate Meciuri",
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "Fearless Gaming secured a dramatic victory against Fnatic in the ESL Pro League with a 16-14 scoreline on Inferno."
          : "Fearless Gaming a obținut o victorie dramatică împotriva Fnatic în ESL Pro League cu un scor de 16-14 pe Inferno.",
      content:
        language === "en"
          ? `
        <p>In an electrifying match that kept fans on the edge of their seats, Fearless Gaming emerged victorious against Fnatic with a 16-14 scoreline on Inferno in the ESL Pro League.</p>
        
        <p>The match was a showcase of tactical prowess and individual brilliance, with WolfKing leading the charge with 24 kills. ShadowBite's crucial AWP plays in the final rounds secured the win for Fearless.</p>
        
        <p>"We knew it would be a tough match, but we prepared well and executed our strategy perfectly," said team coach Marius Ionescu. "This win puts us in a great position to qualify for the playoffs."</p>
        
        <p>The victory moves Fearless up to 3rd place in Group B, with two more matches remaining in the group stage.</p>
      `
          : `
        <p>Într-un meci electrizant care a ținut fanii cu sufletul la gură, Fearless Gaming a ieșit victorios împotriva Fnatic cu un scor de 16-14 pe Inferno în ESL Pro League.</p>
        
        <p>Meciul a fost o demonstrație de pricepere tactică și strălucire individuală, cu WolfKing conducând atacul cu 24 de eliminări. Jocurile cruciale cu AWP ale lui ShadowBite în rundele finale au asigurat victoria pentru Fearless.</p>
        
        <p>"Știam că va fi un meci dificil, dar ne-am pregătit bine și ne-am executat perfect strategia," a declarat antrenorul echipei, Marius Ionescu. "Această victorie ne pune într-o poziție excelentă pentru a ne califica în playoff."</p>
        
        <p>Victoria mută Fearless pe locul 3 în Grupa B, cu încă două meciuri rămase în faza grupelor.</p>
      `,
      author: "Admin",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Fearless Welcomes New Player 'Phoenix' to the Roster"
          : "Fearless îl întâmpină pe noul jucător 'Phoenix' în echipă",
      date: language === "en" ? "April 28, 2025" : "28 Aprilie, 2025",
      category: language === "en" ? "Team Updates" : "Actualizări Echipă",
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "Fearless Gaming is proud to announce the addition of Vlad 'Phoenix' Dumitrescu to our CS2 roster."
          : "Fearless Gaming este mândru să anunțe adăugarea lui Vlad 'Phoenix' Dumitrescu în echipa noastră de CS2.",
      content:
        language === "en"
          ? `
        <p>Fearless Gaming is thrilled to announce the newest addition to our CS2 roster, Vlad "Phoenix" Dumitrescu. At just 19 years old, Phoenix has already made a name for himself in the Romanian CS2 scene with his exceptional rifling skills and game sense.</p>
        
        <p>Phoenix joins us from NextGen Esports, where he averaged an impressive 1.24 rating over the past six months. His addition to the team will strengthen our firepower and bring fresh tactical ideas.</p>
        
        <p>"I'm incredibly excited to join Fearless Gaming and compete at the highest level," said Phoenix. "This is a dream come true for me, and I can't wait to represent the team in upcoming tournaments."</p>
        
        <p>Phoenix will make his debut with Fearless in the upcoming BLAST Premier tournament next week.</p>
      `
          : `
        <p>Fearless Gaming este încântat să anunțe cea mai nouă adăugare la echipa noastră de CS2, Vlad "Phoenix" Dumitrescu. La doar 19 ani, Phoenix și-a făcut deja un nume în scena CS2 din România cu abilitățile sale excepționale de rifle și simțul jocului.</p>
        
        <p>Phoenix ni se alătură de la NextGen Esports, unde a avut un rating impresionant de 1.24 în ultimele șase luni. Adăugarea sa în echipă va întări puterea noastră de foc și va aduce idei tactice proaspete.</p>
        
        <p>"Sunt incredibil de entuziasmat să mă alătur Fearless Gaming și să concurez la cel mai înalt nivel," a spus Phoenix. "Este un vis devenit realitate pentru mine și abia aștept să reprezint echipa în turneele viitoare."</p>
        
        <p>Phoenix va debuta cu Fearless în turneul BLAST Premier de săptămâna viitoare.</p>
      `,
      author: "Admin",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Phantom Leaves Fearless After Two Successful Years"
          : "Phantom părăsește Fearless după doi ani de succes",
      date: language === "en" ? "April 15, 2025" : "15 Aprilie, 2025",
      category: language === "en" ? "Team Updates" : "Actualizări Echipă",
      image: "/placeholder.svg?height=400&width=800",
      excerpt:
        language === "en"
          ? "After two years of dedication and success, Cristian 'Phantom' Stancu is departing from Fearless Gaming."
          : "După doi ani de dedicare și succes, Cristian 'Phantom' Stancu părăsește Fearless Gaming.",
      content:
        language === "en"
          ? `
        <p>Today, we announce with mixed emotions that Cristian "Phantom" Stancu will be leaving Fearless Gaming after two successful years with the organization.</p>
        
        <p>During his time with Fearless, Phantom has been instrumental in our rise through the ranks of professional CS2. His support play and clutch performances helped secure numerous tournament victories, including our National Championship win earlier this year.</p>
        
        <p>"It's been an incredible journey with Fearless, and I'm grateful for every moment," said Phantom. "The decision to move on was difficult, but I feel it's the right time for a new challenge in my career."</p>
        
        <p>The entire Fearless organization thanks Phantom for his contributions and wishes him the best in his future endeavors. An announcement regarding his replacement will be made in the coming weeks.</p>
      `
          : `
        <p>Astăzi, anunțăm cu emoții amestecate că Cristian "Phantom" Stancu va părăsi Fearless Gaming după doi ani de succes cu organizația.</p>
        
        <p>În timpul petrecut la Fearless, Phantom a fost esențial în ascensiunea noastră prin rândurile CS2-ului profesionist. Jocul său de suport și performanțele în momente critice au ajutat la asigurarea numeroaselor victorii în turnee, inclusiv câștigarea Campionatului Național de la începutul acestui an.</p>
        
        <p>"A fost o călătorie incredibilă cu Fearless și sunt recunoscător pentru fiecare moment," a spus Phantom. "Decizia de a merge mai departe a fost dificilă, dar simt că este momentul potrivit pentru o nouă provocare în cariera mea."</p>
        
        <p>Întreaga organizație Fearless îi mulțumește lui Phantom pentru contribuțiile sale și îi urează tot ce este mai bun în viitoarele sale eforturi. Un anunț privind înlocuitorul său va fi făcut în săptămânile următoare.</p>
      `,
      author: "Admin",
    },
  ]

  const newsId = Number.parseInt(params.id)
  const news = newsItems.find((item) => item.id === newsId) || newsItems[0]

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <Link href="/news" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToNews}
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm bg-red-600 px-2 py-0.5 rounded-md">{news.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{news.title}</h1>
            <div className="flex items-center text-zinc-400 mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{news.date}</span>
              <User className="h-4 w-4 mr-1" />
              <span>{news.author}</span>
            </div>
          </div>

          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          </div>

          <div
            className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-white"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </div>
    </main>
  )
}
