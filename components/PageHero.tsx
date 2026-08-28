import type { ReactNode } from "react"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-14 text-white sm:py-16 md:py-20">
      <BrandLetterMark
        variant="cluster"
        className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 text-accent/10 sm:h-72 sm:w-72"
      />

      <Reveal className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-(--shadow-soft) sm:p-8 md:p-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-[26px] font-bold sm:text-3xl md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{description}</p>
        {children}
      </Reveal>
    </section>
  )
}

export default PageHero