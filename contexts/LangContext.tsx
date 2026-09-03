"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Lang = "uz" | "uz-cyrl"

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: "uz",
  setLang: () => {},
})

export function LangProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState<Lang>("uz")

  useEffect(() => {
    const saved = localStorage.getItem("lang")

    if (saved === "uz" || saved === "uz-cyrl") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved)
    }
  }, [])

  const updateLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: updateLang,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
