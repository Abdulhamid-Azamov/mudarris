"use client"

import { useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import Image from "next/image"
import Link from "next/link"

import AboutImage1 from "@/images/mudarris-sergili.jpg"
import AboutImage2 from "@/images/mudarris-beruniy.jpg"
import AboutImage3 from "@/images/mudarris-algoritm.jpg"
import AboutImage4 from "@/images/mudarris-qiyot.jpg"
import AboutImage5 from "@/images/mudarris-qoyliq.jpg"
import AboutImage6 from "@/images/mudarris-ibnsino.jpg"
import AboutImage7 from "@/images/mudarris-kattaqani.jpg"


import Reveal from "@/components/Reveal"
import { useT } from "@/hook/useT"

const SLIDES = [
  {
    image: AboutImage1,
    alt: "Mudarris akademiyasi — 1-surat",
  },
  {
    image: AboutImage2,
    alt: "Mudarris akademiyasi — 2-surat",
  },
  {
    image: AboutImage3,
    alt: "Mudarris akademiyasi — 3-surat",
  },
  {
    image: AboutImage4,
    alt: "Mudarris akademiyasi — 4-surat",
  },
  {
    image: AboutImage5,
    alt: "Mudarris akademiyasi — 5-surat",
  },
  {
    image: AboutImage6,
    alt: "Mudarris akademiyasi — 6-surat",
  },
  {
    image: AboutImage7,
    alt: "Mudarris akademiyasi — 7-surat",
  }
  
]

const FACTS = [
  {
    value: "2021",
    label: "asos solingan yil",
  },
  {
    value: "10000+",
    label: "bitirgan o'quvchi",
  },
  {
    value: "3-10 yil",
    label: "ustozlar tajribasi",
  },
]

const SWIPE_THRESHOLD = 60
const AUTO_SLIDE_INTERVAL = 4000

const AboutSection = () => {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const startXRef = useRef(0)
  const t = useT()

  const total = SLIDES.length

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total)
  }

  /*
   * AUTO SLIDE
   * Har 4 sekundda keyingi rasmga o'tadi.
   */
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [isDragging, total])

  /*
   * TOUCH / SWIPE
   */
  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType !== "touch") return

    startXRef.current = event.clientX
    setIsDragging(true)

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
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
      {/* SECTION TITLE */}
      <Reveal className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50 sm:text-sm">
          {t("Akademiya haqida")}
        </span>

        <h2 className="mt-3 font-display text-[28px] font-bold text-navy sm:text-[34px] md:text-[40px]">
          {t("Biz haqimizda")}
        </h2>
      </Reveal>

      {/* MAIN CARD */}
      <Reveal
        delay={100}
        className="mx-auto mt-10 w-full max-w-275 rounded-[28px] bg-white p-4 shadow-(--shadow-card) sm:p-6 md:p-10"
      >
        <div className="flex flex-col items-center gap-8 rounded-[20px] bg-navy p-6 sm:p-8 md:flex-row md:items-center md:gap-10 md:p-10">
          {/* ========================= */}
          {/* IMAGE SLIDER */}
          {/* ========================= */}

          <div className="w-full md:w-[42%] md:max-w-105">
            <div
              className="relative cursor-grab touch-pan-y select-none overflow-hidden rounded-[18px] active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              {/* SLIDES */}
              <div
                className={`flex ${
                  isDragging
                    ? ""
                    : "transition-transform duration-500 ease-out"
                }`}
                style={{
                  transform: `translateX(calc(-${
                    index * 100
                  }% + ${dragOffset}px))`,
                }}
              >
                {SLIDES.map((slide) => (
                  <div
                    key={slide.alt}
                    className="relative h-55 w-full shrink-0 sm:h-65"
                  >
                    <Image
                      src={slide.image}
                      alt={t(slide.alt)}
                      fill
                      draggable={false}
                      sizes="(min-width: 768px) 420px, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* ========================= */}
              {/* SLIDE INDICATORS */}
              {/* ========================= */}

              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
                {SLIDES.map((slide, i) => (
                  <span
                    key={slide.alt}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* ========================= */}
              {/* PREVIOUS BUTTON */}
              {/* ========================= */}

              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label={t("Oldingi rasm")}
                className="absolute left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy transition-all duration-200 hover:bg-white hover:scale-105 sm:flex"
              >
                <ChevronIcon direction="left" />
              </button>

              {/* ========================= */}
              {/* NEXT BUTTON */}
              {/* ========================= */}

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label={t("Keyingi rasm")}
                className="absolute right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy transition-all duration-200 hover:bg-white hover:scale-105 sm:flex"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>
          </div>

          {/* ========================= */}
          {/* TEXT CONTENT */}
          {/* ========================= */}

          <div className="flex w-full flex-1 flex-col items-start gap-8 md:max-w-135">
            <p className="text-base leading-[170%] text-white/85 sm:text-lg">
              {t("Mudarris Akademiyasi 2021-yilda asos solingan bo'lib, 4 yildan buyon o'z faoliyatini olib bormoqda. Shu vaqtgacha 10000 dan ortiq insonlar Mudarris akademiyasida arab tilini o'rgandi. Mudarris akademiyasida 3 yildan 10 yilgacha tajribaga ega ustozlar mavjud.")}
            </p>

            {/* FACTS */}
            <dl className="grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-6">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{t(fact.label)}</dt>

                  <dd className="font-display text-lg font-bold text-accent sm:text-2xl">
                    {fact.value}
                  </dd>

                  <dd className="mt-1 text-[11px] text-white/65 sm:text-sm">
                    {t(fact.label)}
                  </dd>
                </div>
              ))}
            </dl>

            {/* BUTTON */}
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-(--shadow-card) active:scale-[0.98] sm:w-auto sm:min-w-44 sm:px-8 sm:py-4 sm:text-base"
            >
              {t("Batafsil")}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ========================= */
/* CHEVRON ICON */
/* ========================= */

const ChevronIcon = ({
  direction,
}: {
  direction: "left" | "right"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`h-4 w-4 ${
      direction === "left" ? "" : "rotate-180"
    }`}
  >
    <path
      d="M15 6L9 12L15 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default AboutSection