"use client"

import { useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import Image from "next/image"
import AboutImage from "@/images/about-image.webp"
import Reveal from "@/components/Reveal"

type Branch = {
  name: string
  address: string
  description: string
  facts: { value: string; label: string }[]
}

// Shablon ma'lumotlar — har bir filial uchun aniq matn/manzil keyinchalik
// almashtiriladi, hozircha 5 tasi ham namuna sifatida bir xil.
const BRANCHES: Branch[] = [
  {
    name: "1-filial — Chilonzor",
    address: "Toshkent sh., Chilonzor tumani",
    description:
      "Mudarris Akademiyasi 2021-yilda asos solingan bo'lib, 4 yildan buyon o'z faoliyatini olib bormoqda. Shu vaqtgacha 2500 dan ortiq insonlar Mudarris akademiyasida arab tilini o'rgandi.",
    facts: [
      { value: "2021", label: "asos solingan yil" },
      { value: "2500+", label: "bitirgan o'quvchi" },
      { value: "3-10 yil", label: "ustozlar tajribasi" },
    ],
  },
  {
    name: "2-filial — Yunusobod",
    address: "Toshkent sh., Yunusobod tumani",
    description:
      "Yunusobod filialida ham xuddi shunday sifatli ta'lim, tajribali ustozlar va zamonaviy o'quv metodikasi asosida arab tili o'qitiladi.",
    facts: [
      { value: "2022", label: "ochilgan yil" },
      { value: "800+", label: "bitirgan o'quvchi" },
      { value: "3-8 yil", label: "ustozlar tajribasi" },
    ],
  },
  {
    name: "3-filial — Mirzo Ulug'bek",
    address: "Toshkent sh., Mirzo Ulug'bek tumani",
    description:
      "Mirzo Ulug'bek filiali qulay joylashuvi va kichik guruhlarda dars olib borilishi bilan ajralib turadi.",
    facts: [
      { value: "2022", label: "ochilgan yil" },
      { value: "650+", label: "bitirgan o'quvchi" },
      { value: "4-9 yil", label: "ustozlar tajribasi" },
    ],
  },
  {
    name: "4-filial — Yashnobod",
    address: "Toshkent sh., Yashnobod tumani",
    description:
      "Yashnobod filialida kattalar va bolalar uchun alohida guruhlar tashkil etilgan, individual yondashuvga alohida e'tibor qaratiladi.",
    facts: [
      { value: "2023", label: "ochilgan yil" },
      { value: "400+", label: "bitirgan o'quvchi" },
      { value: "3-7 yil", label: "ustozlar tajribasi" },
    ],
  },
  {
    name: "5-filial — Sergeli",
    address: "Toshkent sh., Sergeli tumani",
    description:
      "Sergeli filiali eng so'nggi ochilgan bo'lib, akademiyaning barcha tajribasi va standartlari asosida ish yuritadi.",
    facts: [
      { value: "2024", label: "ochilgan yil" },
      { value: "200+", label: "bitirgan o'quvchi" },
      { value: "3-6 yil", label: "ustozlar tajribasi" },
    ],
  },
]

const SWIPE_THRESHOLD = 60 // shu qadar (px) surilsa, slayd almashadi

const AboutSection = () => {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const total = BRANCHES.length

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total)
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
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
          Filiallarimiz
        </span>
        <h2 className="mt-3 font-display text-[28px] font-bold text-navy sm:text-[34px] md:text-[40px]">
          Biz haqimizda
        </h2>
      </Reveal>

      <Reveal delay={100} className="centralize mt-10 rounded-[28px] bg-white p-4 shadow-(--shadow-card) sm:p-6 md:p-10">
        <div   className="touch-pan-y cursor-grab select-none overflow-hidden rounded-[20px] active:cursor-grabbing"  onPointerDown={handlePointerDown}   onPointerMove={handlePointerMove}   onPointerUp={endDrag}   onPointerLeave={endDrag}  onPointerCancel={endDrag}  >
          <div className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`} style={{ transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))` }} >
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="w-full shrink-0 px-0.5">
                <div className="flex flex-col items-center gap-8 rounded-[20px] bg-navy p-6 sm:p-8 md:flex-row md:items-center md:gap-10 md:p-10">
                  <Image src={AboutImage}  alt={branch.name}  width={469} height={383} draggable={false} className="w-full max-w-md rounded-[18px] object-cover md:w-[42%]" />
                  <div className="flex flex-1 flex-col items-start gap-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{branch.name}</h3>
                      <p className="mt-1 text-sm text-accent">{branch.address}</p>
                    </div>

                    <p className="text-base leading-[170%] text-white/85 sm:text-lg">{branch.description}</p>

                    <dl className="grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-6">
                      {branch.facts.map((fact) => (
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {BRANCHES.map((branch, i) => (
            <button key={branch.name} type="button"  onClick={() => goTo(i)} aria-label={`${branch.name} sahifasiga o'tish`} aria-current={i === index} className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${ i === index ? "w-7 bg-navy" : "w-2.5 bg-navy/20 hover:bg-navy/40" }`} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default AboutSection