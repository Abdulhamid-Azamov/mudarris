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
<<<<<<< HEAD
    // localStorage faqat clientda mavjud, shuning uchun bu qiymatni
    // useState ichida to'g'ridan-to'g'ri o'qib bo'lmaydi (SSR/CSR
    // hydration mos kelmasligiga olib keladi). Shu sabab effect ichida
    // bir martalik sinxronizatsiya qilinmoqda.
    const saved = localStorage.getItem("lang") as Lang | null
    // eslint-disable-next-line react-hooks/set-state-in-effect
=======
    const saved = localStorage.getItem("lang") as Lang | null
>>>>>>> 52fa01cbdd02b7a5ba6c748711dd6ba7f0b280f7
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