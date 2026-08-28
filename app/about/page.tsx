"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import Reveal from "@/components/Reveal"
import { useT } from "@/hook/useT"

type Branch = {
  id: number
  name: string
  address: string
  phone: string
  description: string
}

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
    value: "3–10 yil",
    label: "ustozlar tajribasi",
  },
]

const BRANCHES: Branch[] = [
  {
    id: 1,
    name: "Beruniy",
    address: "Toshkent sh.",
    phone: "+998 78 113 73 53",
    description:
      "Akademiyaning bosh filiali. Ayollar, bolalar va kattalar uchun barcha asosiy yo'nalishlar mavjud.",
  },
  {
    id: 2,
    name: "Qiyot",
    address: "Toshkent sh., Yunusobod tumani",
    phone: "+998 78 113 73 53",
    description:
      "Zamonaviy o'quv metodikasi asosida arab tili fonetikasi va grammatikasi chuqur o'rgatiladi.",
  },
  {
    id: 3,
    name: "Algoritm",
    address: "Toshkent sh.",
    phone: "+998 78 113 73 53",
    description:
      "Qulay joylashuvi va kichik guruhlarda dars olib borilishi bilan ajralib turadi.",
  },
  {
    id: 4,
    name: "Sergeli",
    address: "Toshkent sh., Sergeli tumani",
    phone: "+998 78 113 73 53",
    description:
      "Kattalar va bolalar uchun alohida guruhlar hamda individual yondashuvga alohida e'tibor beriladi.",
  },
  {
    id: 5,
    name: "Ibn Sino",
    address: "Toshkent sh., Ibn Sino",
    phone: "+998 78 113 73 53",
    description:
      "Akademiyaning barcha tajribasi va ta'lim standartlari asosida zamonaviy darslar olib boriladi.",
  },
  {
    id: 6,
    name: "Qo'yliq",
    address: "Toshkent sh., Qo'yliq",
    phone: "+998 78 113 73 53",
    description:
      "Qulay muhit va tajribali ustozlar bilan arab tilini bosqichma-bosqich o'rganish imkoniyati.",
  },
  {
    id: 7,
    name: "Katta Qa'ni",
    address: "Toshkent sh., Katta Qa'ni",
    phone: "+998 78 113 73 53",
    description:
      "Akademiyaning zamonaviy ta'lim standartlari asosida faoliyat yurituvchi filiallardan biri.",
  },
]

const AUTO_SLIDE_INTERVAL = 3000

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const t = useT()

  /* =========================================================
     RESPONSIVE CARD COUNT

     Mobile  -> 1
     Tablet  -> 2
     Desktop -> 3
  ========================================================== */

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()

    window.addEventListener("resize", updateItemsPerView)

    return () => {
      window.removeEventListener("resize", updateItemsPerView)
    }
  }, [])

  /* =========================================================
     MAXIMUM SLIDE
  ========================================================== */

  const maxSlide = Math.max(
    0,
    BRANCHES.length - itemsPerView
  )

  /* =========================================================
     NEXT
  ========================================================== */

  const goToNext = () => {
    setCurrentSlide((current) => {
      if (current >= maxSlide) {
        return 0
      }

      return current + 1
    })
  }

  /* =========================================================
     PREVIOUS
  ========================================================== */

  const goToPrevious = () => {
    setCurrentSlide((current) => {
      if (current <= 0) {
        return maxSlide
      }

      return current - 1
    })
  }

  /* =========================================================
     RESPONSIVE SLIDE SAFETY

     Ekran o'zgarganda index noto'g'ri bo'lib qolmasligi uchun.
  ========================================================== */

  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide)
    }
  }, [currentSlide, maxSlide])

  /* =========================================================
     AUTO SLIDE — HAR 5 SEKUND
  ========================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => {
        if (current >= maxSlide) {
          return 0
        }

        return current + 1
      })
    }, AUTO_SLIDE_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [maxSlide])

  /* =========================================================
     SLIDE POSITION
  ========================================================== */

  const slideWidth = 100 / itemsPerView

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow={t("Akademiya")}
        title={t("Biz haqimizda")}
        description={t(
          "Mudarris Akademiyasi — arab tilini noldan puxta o'rgatuvchi, tajribali ustozlar va zamonaviy metodikaga asoslangan ta'lim markazi."
        )}
      />

      {/* =====================================================
          AKADEMIYA HAQIDA
      ====================================================== */}

      <section className="container mx-auto px-5 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-slate-50 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy/60 sm:text-sm">
                {t("Biz haqimizda")}
              </span>
            </div>

            <p className="mx-auto max-w-4xl text-base leading-relaxed text-navy/75 sm:text-lg md:text-xl">
              {t(
                "Mudarris Akademiyasi 2021-yilda asos solingan bo'lib, 5 yildan buyon o'z faoliyatini olib bormoqda. Shu vaqtgacha 10000 dan ortiq insonlar Akademiyamizda arab tilini o'rgandi. Akademiyamizda 3 yildan 10 yilgacha tajribaga ega ustozlar mavjud bo'lib, ayollar, bolalar va kattalar uchun alohida yo'nalishlar bo'yicha kurslar tashkil etilgan."
              )}
            </p>
          </Reveal>

          {/* =================================================
              FACT CARDS
          ================================================== */}

          <Reveal delay={100} className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" >
            {FACTS.map((fact, index) => (
              <div key={fact.label} className="group relative overflow-hidden rounded-2xl border border-navy/6 bg-slate-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-lg sm:p-7"  >
                {/* Glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-navy/30">
                  0{index + 1}
                </span>

                <p className="relative mt-2 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
                  {fact.value}
                </p>

                <p className="relative mt-2 text-xs font-semibold uppercase tracking-wider text-navy/50 sm:text-sm">
                  {t(fact.label)}
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FILIALLAR
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 bg-navy py-20 sm:py-24 lg:py-28">
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-30 -top-30 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-30 h-112.5 w-112.5 rounded-full bg-accent/10 blur-[140px]" />

        {/* Grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container relative z-10 mx-auto px-5">
          {/* =================================================
              HEADER
          ================================================== */}

          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">
                {t("Filiallarimiz")}
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("Sizga yaqin filialni")}
              <span className="block text-accent">
                {t("tanlang")}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base lg:text-lg">
              {t(
                "Toshkentning turli hududlarida joylashgan filiallarimizda arab tilini qulay va zamonaviy muhitda o'rganing."
              )}
            </p>
          </Reveal>

          {/* =================================================
              SLIDER
          ================================================== */}

          <Reveal
            delay={150}
            className="mx-auto mt-14 max-w-6xl"
          >
            <div className="relative px-1 sm:px-5 lg:px-0">
              {/* =============================================
                  SLIDER VIEWPORT
              ============================================== */}

              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateX(-${currentSlide * slideWidth
                      }%)`,
                  }}
                >
                  {BRANCHES.map((branch) => (
                    <div key={branch.id} className="w-full shrink-0 px-1.5 sm:w-1/2 sm:px-2 lg:w-1/3"   >
                      {/* =====================================
                          CARD
                      ====================================== */}

                      <article className="group relative flex min-h-105 h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-7">
                        {/* Glow */}

                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                        {/* =================================
                            TOP
                        ================================== */}

                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-display text-sm font-black tracking-[0.2em] text-navy/25">
                              {String(branch.id).padStart(2, "0")}
                            </span>

                            <span className="h-px w-8 bg-navy/10" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">
                              {t("Filial")}
                            </span>
                          </div>

                          {/* Open status */}

                          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>

                            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                              {t("Ochiq")}
                            </span>
                          </div>
                        </div>

                        {/* =================================
                            TITLE
                        ================================== */}

                        <div className="relative mt-6">
                          <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-navy transition-colors duration-300 group-hover:text-accent sm:text-[1.7rem]">
                            {t(branch.name)}
                          </h3>

                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/30">
                            {t("Mudarris Akademiyasi")}
                          </p>
                        </div>

                        {/* =================================
                            DESCRIPTION
                        ================================== */}

                        <p className="relative mt-5 min-h-18 text-sm leading-6 text-navy/60">
                          {t(branch.description)}
                        </p>

                        {/* Divider */}

                        <div className="my-6 h-px bg-linear-to-r from-navy/10 via-navy/5 to-transparent" />

                        {/* =================================
                            CONTACT
                        ================================== */}

                        <div className="relative mt-auto space-y-3">
                          {/* Address */}

                          <div className="group/info flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-colors duration-300 hover:bg-accent/5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-all duration-300 group-hover/info:bg-accent group-hover/info:text-navy">
                              <LocationIcon className="h-4.5 w-4.5" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-navy/35">
                                {t("Manzil")}
                              </p>

                              <p className="mt-0.5 text-sm font-medium leading-5 text-navy/75">
                                {t(branch.address)}
                              </p>
                            </div>
                          </div>

                          {/* Phone */}

                          <a href={`tel:${branch.phone.replace(/\s+/g, "")}`} aria-label={t(`${branch.name} telefon raqami`)} className="group/phone flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition-all duration-300 hover:bg-accent/10"  >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-all duration-300 group-hover/phone:bg-accent group-hover/phone:text-navy">
                              <PhoneIcon className="h-4.5 w-4.5" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-navy/35">
                                {t("Telefon")}
                              </p>

                              <p className="mt-0.5 text-sm font-semibold text-navy transition-colors group-hover/phone:text-accent">
                                {branch.phone}
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Bottom accent */}

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  PREVIOUS ARROW
              ================================================== */}

              <button type="button" onClick={goToPrevious} aria-label={t("Oldingi filiallar")} className="  absolute  left-0  top-1/2  z-20  flex  h-9  w-9  -translate-y-1/2  items-center  justify-center  rounded-full  border  border-navy/10  bg-white/95  text-navy  shadow-lg  backdrop-blur-sm  transition-all  duration-300  hover:scale-110  hover:bg-accent  active:scale-95  sm:left-0  sm:h-11  sm:w-11  sm:-translate-x-1/2  lg:h-12  lg:w-12  "  >
                <ChevronIcon direction="left" />
              </button>

              {/* =================================================
                  NEXT ARROW
              ================================================== */}

              <button type="button" onClick={goToNext} aria-label={t("Keyingi filiallar")} className="  absolute  right-0  top-1/2  z-20  flex  h-9  w-9  -translate-y-1/2  items-center  justify-center  rounded-full  border  border-navy/10  bg-white/95  text-navy  shadow-lg  backdrop-blur-sm  transition-all  duration-300  hover:scale-110  hover:bg-accent  active:scale-95  sm:right-0  sm:h-11  sm:w-11  sm:translate-x-1/2  lg:h-12  lg:w-12  "  >
                <ChevronIcon direction="right" />
              </button>
            </div>

            {/* =================================================
                SLIDER DOTS
            ================================================== */}

            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: maxSlide + 1, }).map((_, index) => (
                <button key={index} type="button" onClick={() => setCurrentSlide(index)} aria-label={t(`${index + 1}-slaydga o'tish`)} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/60"}`} />))}
            </div>

            {/* =================================================
                SLIDER HINT
            ================================================== */}

            <p className="mt-4 text-center text-xs text-white/35">
              {t("Har 5 soniyada avtomatik o'tadi")}
            </p>
          </Reveal>

          {/* =================================================
              CTA
          ================================================== */}

          <Reveal
            delay={300}
            className="mt-14 flex justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold text-navy shadow-[0_10px_30px_rgba(229,226,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)] active:scale-95 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
            >
              <span>{t("Kurslarga yozilish")}</span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* Bottom fade */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/20" />
      </section>
    </>
  )
}

/* ================================================================
   CHEVRON ICON
================================================================ */

const ChevronIcon = ({
  direction,
}: {
  direction: "left" | "right"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`h-5 w-5 ${direction === "right" ? "rotate-180" : ""
      }`}
    aria-hidden="true"
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

/* ================================================================
   LOCATION ICON
================================================================ */

const LocationIcon = ({
  className = "",
}: {
  className?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="9.5"
      r="2.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

/* ================================================================
   PHONE ICON
================================================================ */

const PhoneIcon = ({
  className = "",
}: {
  className?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6.5 3h2.7a1 1 0 01.98.804l.7 3.5a1 1 0 01-.27.933L8.9 9.94a12.1 12.1 0 005.16 5.16l1.703-1.71a1 1 0 01.933-.27l3.5.7a1 1 0 01.804.98v2.7a1 1 0 01-1.05 1C10.6 18.1 5.9 13.4 4.5 4.05A1 1 0 015.5 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default About