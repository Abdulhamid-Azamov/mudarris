import Image from "next/image"
import HeroImage from "@/images/hero-img.webp"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"


const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 text-white sm:py-20 lg:py-24">

      <BrandLetterMark variant="single" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-accent/10 sm:h-96 sm:w-96 lg:h-120 lg:w-120" />

      <BrandLetterMark  variant="cluster"  className="pointer-events-none absolute -bottom-24 -left-16 hidden h-72 w-72 text-white/4 sm:block"   />

      <div className="  relative mx-auto flex max-w-7xl flex-col items-center gap-10  overflow-hidden rounded-4xl  border border-white/80  bg-linear-to-br from-white/65 via-white/40 to-white/25  p-6  shadow-[0_20px_60px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]  backdrop-blur-2xl  backdrop-saturate-150  before:pointer-events-none  before:absolute  before:inset-0  before:bg-linear-to-br  before:from-white/50  before:via-transparent  before:to-white/10  sm:p-8  md:flex-row  md:items-center  md:justify-between  md:p-12  ">

        {/* LEFT */}
        <Reveal className="relative z-10 flex-1">

          <span className=" inline-flex items-center gap-2 rounded-full border border-white/80 bg-linear-to-r from-white/70 via-white/50 to-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em]  text-accent  shadow-[0_6px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]  backdrop-blur-xl  backdrop-saturate-150  sm:text-sm  ">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_currentColor]" />

            Arab tili ta&apos;lim markazi
          </span>

          <h1 className="  mt-5 text-[30px]  font-bold  leading-[1.1]  tracking-tight  text-navy/90  sm:text-4xl  sm:leading-[1.15]  lg:text-5xl xl:text-[52px] ">
            O&apos;quv markazlarimiz faqat Toshkent shahrida joylashgan
          </h1>

          <p className="  mt-6  max-w-2xl  text-base  leading-relaxed  text-navy/70  sm:text-lg  ">
            Arab tilini tajribali ustozlardan o&apos;rganish uchun
            kurslarga yozilish tugmasini bosing.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <button className="  min-w-50  cursor-pointer  rounded-full  bg-navy  px-8  py-4  text-base  font-semibold  text-white  shadow-[0_8px_24px_rgba(15,23,42,0.18)]  transition-all  duration-200  hover:-translate-y-1  hover:bg-accent  hover:shadow-[0_12px_30px_rgba(15,23,42,0.22)]  sm:text-lg ">
              Kurslarga yozilish
            </button>

          </div>
        </Reveal>

        {/* IMAGE */}
        <Reveal delay={150} className="  relative z-10 w-full max-w-105  overflow-hidden  rounded-[28px]  border border-white/70  bg-white/30  p-2  shadow-[0_12px_40px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]  backdrop-blur-xl  " >
          <div className="  relative overflow-hidden  rounded-[22px]  border border-white/40  ">
            <Image src={HeroImage} alt="Mudarris akademiyasi o'quvchisi" height={520}  width={520}  className="   h-full   w-full  object-cover  transition-transform  duration-700  hover:scale-[1.03] " priority  />

            {/* image reflection */}
            <div className="  pointer-events-none  absolute inset-0  bg-linear-to-br  from-white/20  via-transparent  to-navy/10 " />
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Hero