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
  { value: "3-10 yil", label: "ustozlar tajribasi" },
]

const BRANCHES: Branch[] = [
  {
    id: 1,
    name: "1-filial — Chilonzor",
    address: "Toshkent sh., Chilonzor tumani",
    phone: "+998 78 113 73 53",
    description:
      "Akademiyaning bosh filiali. Barcha yo'nalishlar (ayollar, bolalar, kattalar) bo'yicha kurslar mavjud.",
  },
  {
    id: 2,
    name: "2-filial — Yunusobod",
    address: "Toshkent sh., Yunusobod tumani",
    phone: "+998 78 113 73 53",
    description: "Zamonaviy o'quv metodikasi asosida arab tili fonetikasi va grammatikasi o'qitiladi.",
  },
  {
    id: 3,
    name: "3-filial — Mirzo Ulug'bek",
    address: "Toshkent sh., Mirzo Ulug'bek tumani",
    phone: "+998 78 113 73 53",
    description: "Qulay joylashuvi va kichik guruhlarda dars olib borilishi bilan ajralib turadi.",
  },
  {
    id: 4,
    name: "4-filial — Yashnobod",
    address: "Toshkent sh., Yashnobod tumani",
    phone: "+998 78 113 73 53",
    description: "Kattalar va bolalar uchun alohida guruhlar, individual yondashuvga alohida e'tibor.",
  },
  {
    id: 5,
    name: "5-filial — Sergeli",
    address: "Toshkent sh., Sergeli tumani",
    phone: "+998 78 113 73 53",
    description: "Eng so'nggi ochilgan filial, akademiyaning barcha tajribasi va standartlari asosida ishlaydi.",
  },
]

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="Akademiya"
        title="Biz haqimizda"
        description="Mudarris Akademiyasi — arab tilini noldan puxta o'rgatuvchi, tajribali ustozlar va zamonaviy metodikaga asoslangan ta'lim markazi."
      />

      {/* Akademiya haqida */}
      <section className="container mx-auto px-5 py-12 sm:py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <Reveal>
            <p className="text-base leading-relaxed text-navy/80 sm:text-lg md:text-xl">
              Mudarris Akademiyasi 2021-yilda asos solingan bo&apos;lib, 4 yildan buyon o&apos;z faoliyatini olib
              bormoqda. Shu vaqtgacha 2500 dan ortiq insonlar Mudarris akademiyasida arab tilini o&apos;rgandi.
              Akademiyamizda 3 yildan 10 yilgacha tajribaga ega ustozlar mavjud bo&apos;lib, ayollar, bolalar va
              kattalar uchun alohida yo&apos;nalishlar bo&apos;yicha kurslar tashkil etilgan.
            </p>
          </Reveal>

          {/* Stat kartalari */}
          <Reveal delay={100} className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-navy/5 bg-slate-50/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
              >
                <p className="font-display text-3xl font-extrabold text-navy sm:text-4xl">{fact.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-navy/60 sm:text-sm">
                  {fact.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Filiallar */}
      <section className="relative overflow-hidden bg-navy pt-16 pb-28 sm:pt-24 sm:pb-36 border-b border-white/10">
        {/* Orqa fon bezaklari (Glow effect) */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
              Filiallarimiz
            </span>
            <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl md:text-5xl">
              5 ta filialimiz bilan tanishing
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Barcha filiallarimizda bir xil yuqori sifat va standart asosida ta&apos;lim beriladi.
            </p>
          </Reveal>

          {/* Grid Karta dizayni */}
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((branch, i) => (
              <Reveal key={branch.id} delay={i * 80} className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl sm:p-8">
                  {/* Kartaning yuqori qismi */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">
                        Filial #{branch.id}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                      {branch.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                      {branch.description}
                    </p>
                  </div>

                  {/* Kartaning pastki qismi / Kontaktlar */}
                  <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5">
                    <div className="flex items-start gap-3 text-sm text-navy/80 sm:text-base">
                      <div className="rounded-lg bg-accent/10 p-2 text-accent shrink-0">
                        <LocationIcon className="h-5 w-5" />
                      </div>
                      <span className="mt-0.5">{branch.address}</span>
                    </div>

                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-3 text-sm font-medium text-navy/80 transition-colors hover:text-accent sm:text-base"
                    >
                      <div className="rounded-lg bg-accent/10 p-2 text-accent shrink-0">
                        <PhoneIcon className="h-5 w-5" />
                      </div>
                      <span className="mt-0.5">{branch.phone}</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Yozilish tugmasi */}
          <Reveal delay={BRANCHES.length * 80} className="mt-14 flex justify-center">
            <Link  href="/contact"  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-10 py-4 font-display text-base font-bold text-navy shadow-lg transition-all duration-300 hover:bg-white hover:shadow-accent/20 active:scale-95 sm:text-lg"  >
              <span>Kurslarga yozilish</span>
            </Link>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-black/20 pointer-events-none" />
      </section>
    </>
  )
}

const LocationIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
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