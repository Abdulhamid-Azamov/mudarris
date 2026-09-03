"use client"

import { useState } from "react"
import Reveal from "@/components/Reveal"

export type FaqItem = {
  question: string
  answer: string
}

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i

        return (
          <Reveal key={item.question} delay={i * 60}>
            <div
              className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-200 sm:rounded-3xl ${
                isOpen ? "border-accent-deep/40 shadow-(--shadow-card)" : "border-navy/10 hover:border-navy/20"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span className="flex items-start gap-4">
                  <span
                    className={`mt-0.5 shrink-0 font-display text-sm font-black ${
                      isOpen ? "text-accent-deep" : "text-navy/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold leading-snug text-navy sm:text-lg">
                    {item.question}
                  </span>
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-9 sm:w-9 ${
                    isOpen ? "rotate-45 bg-accent text-navy" : "bg-navy-soft text-navy"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="px-5 pb-6 pl-[3.1rem] text-sm leading-relaxed text-slate-500 sm:px-7 sm:pb-7 sm:pl-16 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export default FaqAccordion
