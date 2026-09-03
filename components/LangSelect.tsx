"use client"

import { useEffect, useRef, useState } from "react"
import type { Lang } from "@/contexts/LangContext"

export type { Lang }

type LangSelectProps = {
  lang: Lang
  onChange: (lang: Lang) => void
  full?: boolean
}

const OPTIONS: { value: Lang; badge: string; label: string }[] = [
  { value: "uz", badge: "UZ", label: "Lotin" },
  { value: "uz-cyrl", badge: "РУ", label: "Kirill" },
]

const LangSelect = ({ lang, onChange, full = false }: LangSelectProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = OPTIONS.find((o) => o.value === lang) ?? OPTIONS[0]

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${full ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-2 rounded-full bg-white/10 py-2 pl-2 pr-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20 ${full ? "w-full justify-between" : ""}`}
      >
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-navy">
            {current.badge}
          </span>
          <span>{current.label}</span>
        </span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 8"
          fill="none"
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl bg-white py-1 shadow-(--shadow-card)"
        >
          {OPTIONS.map((option) => {
            const isActive = option.value === lang
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-semibold transition-colors duration-150 ${
                    isActive ? "bg-navy/5 text-navy" : "text-navy/60 hover:bg-navy/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        isActive ? "bg-accent text-navy" : "bg-navy/10 text-navy/50"
                      }`}
                    >
                      {option.badge}
                    </span>
                    {option.label}
                  </span>
                  {isActive && (
                    <svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default LangSelect