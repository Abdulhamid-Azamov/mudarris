"use client"

import { useEffect, useRef, useState } from "react"

export type Lang = "uz" | "ru"

const LANG_OPTIONS: { value: Lang; label: string; short: string }[] = [
  { value: "uz", label: "Lotin", short: "UZ" },
  { value: "ru", label: "Kirill", short: "РУ" },
]

type LangSelectProps = {
  lang: Lang
  onChange: (lang: Lang) => void
  full?: boolean
}

const LangSelect = ({ lang, onChange, full }: LangSelectProps) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const current = LANG_OPTIONS.find((o) => o.value === lang) ?? LANG_OPTIONS[0]

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${full ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex cursor-pointer items-center justify-between gap-2.5 rounded-full border border-white/15 bg-white/10 py-2.5 pl-4 pr-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/15 ${full ? "w-full" : "min-w-31"}`}
      >
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-8 items-center justify-center rounded-full bg-accent text-[11px] font-bold tracking-wide text-navy">
            {current.short}
          </span>
          {current.label}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`h-4 w-4 shrink-0 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul
        role="listbox"
        className={`absolute z-20 mt-2 w-full min-w-40 origin-top overflow-hidden rounded-2xl border border-navy/10 bg-white p-1.5 shadow-[0_18px_45px_rgba(16,31,61,0.22)] transition-all duration-150 ${
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        } ${full ? "left-0 right-0" : "right-0"}`}
      >
        {LANG_OPTIONS.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              role="option"
              aria-selected={lang === option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors duration-150 ${
                lang === option.value ? "bg-navy-soft text-navy" : "text-slate-500 hover:bg-navy-soft/60 hover:text-navy"
              }`}
            >
              <span
                className={`flex h-5 w-8 items-center justify-center rounded-full text-[11px] font-bold tracking-wide ${
                  lang === option.value ? "bg-accent text-navy" : "bg-slate-100 text-slate-400"
                }`}
              >
                {option.short}
              </span>
              {option.label}
              {lang === option.value && (
                <svg viewBox="0 0 24 24" fill="none" className="ml-auto h-4 w-4 text-accent-deep">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LangSelect
