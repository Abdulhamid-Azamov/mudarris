"use client"

import { useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import Image from "next/image"
import AboutImage from "@/images/about-image.webp"
import Reveal from "@/components/Reveal"


const SLIDES = [
  { alt: "Mudarris akademiyasi — 1-surat" },
  { alt: "Mudarris akademiyasi — 2-surat" },
  { alt: "Mudarris akademiyasi — 3-surat" },
  { alt: "Mudarris akademiyasi — 4-surat" },
  { alt: "Mudarris akademiyasi — 5-surat" },
]

const FACTS = [
  { value: "2021", label: "asos solingan yil" },
  { value: "10000+", label: "bitirgan o'quvchi" },
  { value: "3-10 yil", label: "ustozlar tajribasi" },
]

const SWIPE_THRESHOLD = 60

const AboutSection = () => {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const total = SLIDES.length

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total)
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return
    startXRef.current = event.clientX
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setDragOffset(event.clientX - startXRef.current)
  }

  const endDrag = () => {
    if (!isDragging) return
    if (dragOffset < -SWIPE_THRESHOLD) {
      goTo(index + 1)
    } else if (dragOffset > SWIPE_THRESHOLD) {
      goTo(index - 1)
    }
    setDragOffset(0)
    setIsDragging(false)
  }

  return (
    <section className="containers px-5 py-4 sm:py-8">
      <Reveal className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50 sm:text-sm">
          Akademiya haqida
        </span>
        <h2 className="mt-3 font-display text-[28px] font-bold text-navy sm:text-[34px] md:text-[40px]">
          Biz haqimizda
        </h2>
      </Reveal>

      <Reveal delay={100} className="centralize mt-10 rounded-[28px] bg-white p-4 shadow-(--shadow-card) sm:p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 rounded-[20px] bg-navy p-6 sm:p-8 md:flex-row md:items-center md:gap-10 md:p-10">
          <div className="w-full md:w-[42%]">
            <div className="relative touch-pan-y select-none overflow-hidden rounded-[18px] cursor-grab active:cursor-grabbing" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={endDrag} onPointerLeave={endDrag} onPointerCancel={endDrag} >
              <div className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}  style={{ transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))` }} >
                {SLIDES.map((slide) => (
                  <div key={slide.alt} className="relative h-55 w-full shrink-0 sm:h-65">
                    <Image src={AboutImage} alt={slide.alt} fill draggable={false} sizes="(min-width: 768px) 420px, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
                {SLIDES.map((slide, i) => (
                  <span key={slide.alt} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`} />))}
              </div>
              <button type="button" onClick={() => goTo(index - 1)} aria-label="Oldingi rasm" className="absolute left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy transition-all duration-200 hover:bg-white sm:flex" >
                <ChevronIcon direction="left" />
              </button>
              <button type="button" onClick={() => goTo(index + 1)} aria-label="Keyingi rasm" className="absolute right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy transition-all duration-200 hover:bg-white sm:flex" >
                <ChevronIcon direction="right" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-8">
            <p className="text-base leading-[170%] text-white/85 sm:text-lg">
              Mudarris Akademiyasi 2021-yilda asos solingan bo&apos;lib, 4 yildan
              buyon o&apos;z faoliyatini olib bormoqda. Shu vaqtgacha 10000 dan ortiq
              insonlar Mudarris akademiyasida arab tilini o&apos;rgandi. Mudarris
              akademiyasida 3 yildan 10 yilgacha tajribaga ega ustozlar mavjud.
            </p>

            <dl className="grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-6">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-display text-lg font-bold text-accent sm:text-2xl">{fact.value}</dd>
                  <dd className="mt-1 text-[11px] text-white/65 sm:text-sm">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <button className="w-full cursor-pointer rounded-full bg-white px-10 py-4 text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-(--shadow-card) sm:w-auto sm:px-20 sm:text-lg">
              Batafsil
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`h-4 w-4 ${direction === "left" ? "" : "rotate-180"}`}>
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default AboutSection