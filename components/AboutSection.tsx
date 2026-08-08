import Image from "next/image"
import AboutImage from "@/images/about-image.webp"
import Reveal from "@/components/Reveal"

const FACTS = [
  { value: "2021", label: "asos solingan yil" },
  { value: "2500+", label: "bitirgan o'quvchi" },
  { value: "3-10 yil", label: "ustozlar tajribasi" },
]

const AboutSection = () => {
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

      <Reveal delay={100} className="centralize mt-10 rounded-[28px] bg-white p-4 shadow-[var(--shadow-card)] sm:p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 rounded-[20px] bg-navy p-6 sm:p-8 md:flex-row md:items-center md:gap-10 md:p-10">
          <Image
            src={AboutImage}
            alt="Mudarris akademiyasi savdo markazi"
            width={469}
            height={383}
            className="w-full max-w-md rounded-[18px] object-cover md:w-[42%]"
          />
          <div className="flex flex-1 flex-col items-start gap-8">
            <p className="text-base leading-[170%] text-white/85 sm:text-lg">
              Mudarris Akademiyasi 2021-yilda asos solingan bo&apos;lib, 4 yildan
              buyon o&apos;z faoliyatini olib bormoqda. Shu vaqtgacha 2500 dan ortiq
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

            <button className="w-full cursor-pointer rounded-full bg-white px-10 py-4 text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[var(--shadow-card)] sm:w-auto sm:px-20 sm:text-lg">
              Batafsil
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default AboutSection
