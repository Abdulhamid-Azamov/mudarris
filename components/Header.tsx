"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import BurgerMenuIcon from "@/images/icons/burger-menu.svg"
import LogoImage from "@/images/logosite.png"
import LangSelect from "@/components/LangSelect"
import { useEnrollModal } from "@/contexts/EnrollModalContext"
import { useLang } from "@/contexts/LangContext"
import { useT } from "@/hook/useT"

const NAV_LINKS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/#courses", label: "Kurslar" },
  { href: "/contact", label: "Bog'lanish" },
  { href: "/savollar", label: "FAQ" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { open: openEnrollModal } = useEnrollModal()

  // Til holati endi butun sayt bo'ylab umumiy (Context orqali)
  const { lang, setLang } = useLang()
  const t = useT()

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

  // Menyu ochiq holatda ekranni Escape bilan yopish
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-white/10 bg-navy/95 shadow-(--shadow-soft) backdrop-blur-md" : "border-transparent bg-navy"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:py-4">
        <Link href={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex shrink-0 items-center gap-3">
          <Image
            src={LogoImage}
            alt="Logo"
            width={200}
            height={140}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[15px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative block px-4 py-2 font-medium text-white/85 transition-colors duration-200 hover:text-white">
                  {t(link.label)}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSelect lang={lang} onChange={setLang} />
          <button
            onClick={() => openEnrollModal()}
            className="cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-(--shadow-card)"
          >
            {t("Kursga yozilish")}
          </button>
        </div>

        {/* BURGER BUTTON */}
        <button
          aria-label={menuOpen ? t("Menyuni yopish") : t("Menyuni ochish")}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors duration-200 hover:bg-white/20 lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Image src={BurgerMenuIcon} alt="" width={16} height={16} />
        </button>
      </div>

      {/* =========================================================
          MOBILE DRAWER — yon tomondan chiqadigan menyu
      ========================================================== */}

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-[82%] max-w-80 flex-col bg-navy-deep shadow-[-20px_0_50px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Image src={LogoImage} alt="Logo" width={150} height={105} className="h-8 w-auto" />

          <button
            aria-label={t("Menyuni yopish")}
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-5 py-5">
          <ul className="flex flex-col gap-1 text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-white/90 transition-colors duration-200 hover:bg-white/10"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: lang + CTA */}
        <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {t("Til")}
            </span>
            <LangSelect lang={lang} onChange={setLang} />
          </div>

          <button
            onClick={() => {
              setMenuOpen(false)
              openEnrollModal()
            }}
            className="w-full cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-navy transition-colors duration-200 hover:bg-accent"
          >
            {t("Kursga yozilish")}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header