"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import BurgerMenuIcon from "@/images/icons/burger-menu.svg"
import LogoImage from "@/images/logo.jpg"

type Lang = "uz" | "ru"

const NAV_LINKS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/courses", label: "Kurslar" },
  { href: "/locations", label: "Joylashuvlarimiz" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<Lang>("uz")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-white/10 bg-navy/95 shadow-(--shadow-soft) backdrop-blur-md" : "border-transparent bg-navy"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:py-4">
        <Link href={"/"}onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}className="flex shrink-0 items-center gap-3" >
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15 sm:h-11 sm:w-11">
            <Image src={LogoImage} alt="Mudarris Akademiyasi" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white sm:text-xl">
            MUDARRIS
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[15px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link  href={link.href}  className="group relative block px-4 py-2 font-medium text-white/85 transition-colors duration-200 hover:text-white"  >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle lang={lang} onChange={setLang} />
          <button className="cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-(--shadow-card)">
            Kursga yozilish
          </button>
        </div>

        <button  aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}  aria-expanded={menuOpen}  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors duration-200 hover:bg-white/20 lg:hidden"  onClick={() => setMenuOpen((prev) => !prev)}  >
          <Image src={BurgerMenuIcon} alt="" width={18} height={18} />
        </button>
      </div>

      <div  id="mobile-menu"  className={`overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${menuOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"  }`}  >
        <div className="min-h-0 border-t border-white/10 bg-navy-deep">
          <div className="flex flex-col gap-1 px-5 py-5">
            <ul className="flex flex-col gap-1 text-base">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link  href={link.href}  onClick={() => setMenuOpen(false)}  className="block rounded-lg px-3 py-3 font-medium text-white/90 transition-colors duration-200 hover:bg-white/10"  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <LangToggle lang={lang} onChange={setLang} full />
              <button className="w-full cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-navy transition-colors duration-200 hover:bg-accent">
                Kursga yozilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

type LangToggleProps = {
  lang: Lang
  onChange: (lang: Lang) => void
  full?: boolean
}

const LangToggle = ({ lang, onChange, full }: LangToggleProps) => {
  return (
    <div  role="group"  aria-label="Til tanlash"  className={`relative flex rounded-full border border-white/15 bg-white/10 p-1 ${full ? "w-full" : ""}`}  >
      <span  aria-hidden="true"  className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-300 ease-out ${lang === "ru" ? "translate-x-full" : "translate-x-0"  }`}  />
      <button  type="button"  onClick={() => onChange("uz")}  aria-pressed={lang === "uz"}  className={`relative z-10 flex-1 cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200 ${lang === "uz" ? "text-navy" : "text-white/75 hover:text-white"  }`}  >
        Lotin
      </button>
      <button  type="button"  onClick={() => onChange("ru")}  aria-pressed={lang === "ru"}  className={`relative z-10 flex-1 cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200 ${lang === "ru" ? "text-navy" : "text-white/75 hover:text-white"  }`}  >
        Кирил
      </button>
    </div>
  )
}

export default Header
