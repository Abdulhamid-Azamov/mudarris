import Link from "next/link"
import PageHero from "@/components/PageHero"
import Reveal from "@/components/Reveal"

type Branch = {
  id: number
  name: string
  address: string
  phone: string
  description: string
}

const FACTS = [
  { value: "2021", label: "asos solingan yil" },
  { value: "2500+", label: "bitirgan o'quvchi" },
  { value: "3–10 yil", label: "ustozlar tajribasi" },
]

const BRANCHES: Branch[] = [
  {
    id: 1,
    name: "1-filial — Chilonzor",
    address: "Toshkent sh., Chilonzor tumani",
    phone: "+998 78 113 73 53",
    description:
      "Akademiyaning bosh filiali. Ayollar, bolalar va kattalar uchun barcha asosiy yo'nalishlar mavjud.",
  },
  {
    id: 2,
    name: "2-filial — Yunusobod",
    address: "Toshkent sh., Yunusobod tumani",
    phone: "+998 78 113 73 53",
    description:
      "Zamonaviy o'quv metodikasi asosida arab tili fonetikasi va grammatikasi chuqur o'rgatiladi.",
  },
  {
    id: 3,
    name: "3-filial — Mirzo Ulug'bek",
    address: "Toshkent sh., Mirzo Ulug'bek tumani",
    phone: "+998 78 113 73 53",
    description:
      "Qulay joylashuvi va kichik guruhlarda dars olib borilishi bilan ajralib turadi.",
  },
  {
    id: 4,
    name: "4-filial — Yashnobod",
    address: "Toshkent sh., Yashnobod tumani",
    phone: "+998 78 113 73 53",
    description:
      "Kattalar va bolalar uchun alohida guruhlar hamda individual yondashuvga alohida e'tibor beriladi.",
  },
  {
    id: 5,
    name: "5-filial — Sergeli",
    address: "Toshkent sh., Sergeli tumani",
    phone: "+998 78 113 73 53",
    description:
      "Eng so'nggi ochilgan filial. Akademiyaning barcha tajribasi va ta'lim standartlari asosida ishlaydi.",
  },
]

const About = () => {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <PageHero
        eyebrow="Akademiya"
        title="Biz haqimizda"
        description="Mudarris Akademiyasi — arab tilini noldan puxta o'rgatuvchi, tajribali ustozlar va zamonaviy metodikaga asoslangan ta'lim markazi."
      />

      {/* =========================
          AKADEMIYA HAQIDA
      ========================== */}
      <section className="container mx-auto px-5 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-slate-50 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy/60 sm:text-sm">
                Biz haqimizda
              </span>
            </div>

            <p className="mx-auto max-w-4xl text-base leading-relaxed text-navy/75 sm:text-lg md:text-xl">
              Mudarris Akademiyasi 2021-yilda asos solingan bo&apos;lib,
              4 yildan buyon o&apos;z faoliyatini olib bormoqda. Shu vaqtgacha
              2500 dan ortiq insonlar Mudarris Akademiyasida arab tilini
              o&apos;rgandi. Akademiyamizda 3 yildan 10 yilgacha tajribaga ega
              ustozlar mavjud bo&apos;lib, ayollar, bolalar va kattalar uchun
              alohida yo&apos;nalishlar bo&apos;yicha kurslar tashkil etilgan.
            </p>
          </Reveal>

          {/* =========================
              STAT CARDS
          ========================== */}
          <Reveal
            delay={100}
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
          >
            {FACTS.map((fact, index) => (
              <div
                key={fact.label}
                className="group relative overflow-hidden rounded-2xl border border-navy/6 bg-slate-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-lg sm:p-7"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-navy/30">
                  0{index + 1}
                </span>

                <p className="relative mt-2 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
                  {fact.value}
                </p>

                <p className="relative mt-2 text-xs font-semibold uppercase tracking-wider text-navy/50 sm:text-sm">
                  {fact.label}
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =========================
          FILIALLAR
      ========================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-navy py-20 sm:py-24 lg:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-30 -top-30 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-30 h-112.5 w-112.5 rounded-full bg-accent/10 blur-[140px]" />

        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container relative z-10 mx-auto px-5">
          {/* =========================
              SECTION HEADER
          ========================== */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">
                Filiallarimiz
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sizga yaqin filialni
              <span className="block text-accent">tanlang</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base lg:text-lg">
              Toshkentning turli hududlarida joylashgan filiallarimizda
              arab tilini qulay va zamonaviy muhitda o&apos;rganing.
            </p>
          </Reveal>

          {/* =========================
              BRANCH CARDS
          ========================== */}
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {BRANCHES.map((branch, i) => {
              const branchName = branch.name
                .replace(`${branch.id}-filial — `, "")
                .replace(`${branch.id}-filial - `, "")

              return (
                <Reveal
                  key={branch.id}
                  delay={i * 90}
                  className={
                    i < 3
                      ? "lg:col-span-2"
                      : "lg:col-span-3 lg:mx-auto lg:w-full lg:max-w-97.5"
                  }
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-7">
                    {/* Card hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top section */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-sm font-black tracking-[0.2em] text-navy/25">
                          {String(branch.id).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-navy/10" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">
                          Filial
                        </span>
                      </div>

                      {/* Open status */}
                      <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>

                        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                          Ochiq
                        </span>
                      </div>
                    </div>

                    {/* Branch title */}
                    <div className="relative mt-6">
                      <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-navy transition-colors duration-300 group-hover:text-accent sm:text-[1.7rem]">
                        {branchName}
                      </h3>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/30">
                        Mudarris Akademiyasi
                      </p>
                    </div>

                    {/* Description */}
                    <p className="relative mt-5 min-h-18 text-sm leading-6 text-navy/60">
                      {branch.description}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-linear-to-r from-navy/10 via-navy/5 to-transparent" />

                    {/* Contact information */}
                    <div className="relative mt-auto space-y-3">
                      {/* Address */}
                      <div className="group/info flex items-start gap-3 rounded-xl bg-slate-50 p-3 transition-colors duration-300 hover:bg-accent/5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-all duration-300 group-hover/info:bg-accent group-hover/info:text-navy">
                          <LocationIcon className="h-4.5 w-4.5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-navy/35">
                            Manzil
                          </p>

                          <p className="mt-0.5 text-sm font-medium leading-5 text-navy/75">
                            {branch.address}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                        className="group/phone flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition-all duration-300 hover:bg-accent/10"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-all duration-300 group-hover/phone:bg-accent group-hover/phone:text-navy">
                          <PhoneIcon className="h-4.5 w-4.5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-navy/35">
                            Telefon
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
                </Reveal>
              )
            })}
          </div>

          {/* =========================
              CTA
          ========================== */}
          <Reveal
            delay={BRANCHES.length * 90}
            className="mt-14 flex justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold text-navy shadow-[0_10px_30px_rgba(229,226,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)] active:scale-95 sm:px-9 sm:py-4 sm:text-base"
            >
              <span>Kurslarga yozilish</span>

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

/* =========================
   LOCATION ICON
========================= */

const LocationIcon = ({ className = "" }: { className?: string }) => (
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


const PhoneIcon = ({ className = "" }: { className?: string }) => (
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