import Image from "next/image"
import HeroImage from "@/images/hero-img.webp"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"

const STATS = [
  { value: "2500+", label: "bitirgan o'quvchi" },
  { value: "4 yil", label: "faoliyat tajribasi" },
  { value: "3-10 yil", label: "ustozlar tajribasi" },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 text-white sm:py-20 lg:py-24">
      <BrandLetterMark
        variant="single"
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-accent/10 sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem]"
      />
      <BrandLetterMark
        variant="cluster"
        className="pointer-events-none absolute -bottom-24 -left-16 hidden h-72 w-72 text-white/[0.04] sm:block"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <Reveal className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
            Arab tili ta&apos;lim markazi
          </span>

          <h1 className="mt-5 text-[32px] font-extrabold leading-tight text-white sm:text-[40px] md:text-[46px] lg:text-[50px]">
            O&apos;quv markazlarimiz faqat Toshkent shahrida joylashgan
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Arab tilini tajribali ustozlardan o&apos;rganish uchun kurslarga yozilish tugmasini bosing.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="min-w-50 cursor-pointer rounded-full bg-white px-7 py-4 text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[var(--shadow-card)] sm:text-lg">
              Kurslarga yozilish
            </button>
            <button className="min-w-50 cursor-pointer rounded-full border border-white/30 bg-transparent px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 sm:text-lg">
              Biz bilan bog&apos;lanish
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-bold text-white sm:text-2xl">{stat.value}</dd>
                <dd className="mt-1 text-xs text-white/65 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative w-full max-w-105 overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-3 shadow-xl sm:p-4">
          <Image
            src={HeroImage}
            alt="Mudarris akademiyasi o'quvchisi"
            height={520}
            width={520}
            className="h-full w-full rounded-[18px] object-cover"
            priority
          />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
