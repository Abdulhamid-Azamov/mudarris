"use client"
import { useLang } from "@/contexts/LangContext"
import { toCyrillic } from "@/lib/translit"

export function useT() {
  const { lang } = useLang()
  return (text: string) => (lang === "uz-cyrl" ? toCyrillic(text) : text)
}