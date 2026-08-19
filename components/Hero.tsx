"use client"

import Image from "next/image"
import HeroImage from "@/images/hero-img.webp"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"
import { useEnrollModal } from "@/contexts/EnrollModalContext"

const Hero = () => {
  const { open: openEnrollModal } = useEnrollModal()

  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 text-white sm:py-20 lg:py-24">

      {/* Background decoration */}
      <BrandLetterMark variant="single" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-accent/10 sm:h-96 sm:w-96 lg:h-120 lg:w-120" />

      <BrandLetterMark variant="cluster" className="pointer-events-none absolute -bottom-24 -left-16 hidden h-72 w-72 text-white/4 sm:block" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="  relative mx-auto flex max-w-7xl flex-col items-center gap-10  overflow-hidden rounded-4xl border border-white/35  bg-white/12 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-2xl  backdrop-saturate-150 before:pointer-events-none  before:absolute  before:inset-0  before:bg-linear-to-br  before:from-white/18  before:via-transparent  before:to-white/5 sm:p-8  md:flex-row  md:items-center  md:justify-between  md:p-12  " >

        {/* LEFT */}
        <Reveal className="relative z-10 flex-1">

          {/* Badge */}
          <span className="  inline-flex items-center gap-2  rounded-full border border-white/50  bg-white/18 px-5 py-2 text-xs font-semibold uppercase  tracking-[0.15em]  text-accent shadow-[0_6px_24px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-xl  backdrop-saturate-150 sm:text-sm  "  >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_currentColor]" />
            Arab tili ta&apos;lim markazi
          </span>

          {/* Title */}
          <h1 className=" mt-5 max-w-3xl text-[30px] font-bold leading-[1.1] tracking-tight  text-white sm:text-4xl sm:leading-[1.15] lg:text-5xl xl:text-[52px] ">
            O&apos;quv markazlarimiz faqat Toshkent shahrida joylashgan
          </h1>

          <p className=" mt-6 max-w-2xl text-pretty text-base font-medium leading-relaxed text-white/80 sm:text-lg md:max-w-xl " >
            Arab tilini tajribali ustozlardan o&apos;rganish uchun kurslarga
            yozilish tugmasini bosing.
          </p>

          {/* Button */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => openEnrollModal()}
              className="  min-w-50  cursor-pointer rounded-full  bg-navy  px-8 py-4 text-base  font-semibold  text-white shadow-[0_8px_24px_rgba(15,23,42,0.22)] transition-all  duration-200 hover:-translate-y-1  hover:bg-accent  hover:shadow-[0_12px_30px_rgba(15,23,42,0.28)] sm:text-lg  "
            >
              Kurslarga yozilish
            </button>
          </div>
        </Reveal>

        {/* IMAGE */}
        <Reveal delay={150} className="  relative z-10  w-full  max-w-105  overflow-hidden  rounded-[28px] border border-white/40  bg-white/10  p-2 shadow-[0_12px_40px_rgba(15,23,42,0.2),inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl  "  >
          <div className="  relative  overflow-hidden  rounded-[22px]  border border-white/30  "  >
            <Image src={HeroImage} alt="Mudarris akademiyasi o'quvchisi" width={520} height={520} priority className="  h-full  w-full  object-cover transition-transform  duration-700 hover:scale-[1.03]  " />
            <div className="  pointer-events-none  absolute inset-0 bg-linear-to-br  from-white/15  via-transparent  to-navy/15  " />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero