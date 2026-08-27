"use client"
import { createContext, useContext, useEffect, useState } from "react"

export type Lang = "uz" | "uz-cyrl"

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: "uz", setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("uz")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved) setLang(saved)
  }, [])

  const update = (l: Lang) => {
    setLang(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: update }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)