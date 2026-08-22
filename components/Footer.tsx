import Image from "next/image"
import Link from "next/link"
import LogoImage from "@/images/logo.jpg"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"

/* =========================
   ICONS
========================= */

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 10h11M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="9.5"
      r="2.4"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
)

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="3.5"
      y="3.5"
      width="17"
      height="17"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <circle
      cx="17"
      cy="7"
      r="1"
      fill="currentColor"
    />
  </svg>
)

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M21 4L3 11.5L9.5 13.5M21 4L15.5 20L9.5 13.5M21 4L9.5 13.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M10.5 9.5L15 12L10.5 14.5V9.5Z"
      fill="currentColor"
    />
  </svg>
)

/* =========================
   DATA
========================= */

const QUICK_LINKS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/#courses", label: "Kurslar" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/contact", label: "Bog'lanish" },
]

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    label: "Telegram",
    href: "#",
    icon: TelegramIcon,
  },
  {
    label: "YouTube",
    href: "#",
    icon: YoutubeIcon,
  },
]

/* =========================
   FOOTER
========================= */

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-accent/6 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-25 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <BrandLetterMark
        variant="cluster"
        className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 text-white/2.5 sm:h-72 sm:w-72"
      />

      {/* =========================
          MAIN FOOTER
      ========================== */}

      <Reveal className="relative mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_0.8fr_1fr_1fr] lg:gap-12">
          {/* =========================
              BRAND
          ========================== */}

          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-accent/40">
                <Image
                  src={LogoImage}
                  alt="Mudarris Akademiyasi"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>

              <span className="font-display text-base font-black uppercase leading-[0.95] tracking-tight">
                Mudarris
                <br />
                Akademiyasi
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Arab tilini tajribali ustozlardan o&apos;rganing.
              Zamonaviy metodika, qulay muhit va natijaga
              yo&apos;naltirilgan ta&apos;lim.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-xs font-bold text-white/80 transition-all duration-300 hover:border-accent/30 hover:bg-accent hover:text-navy"
            >
              <span>Bog&apos;lanish</span>

              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* =========================
              LINKS
          ========================== */}

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Sahifalar
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-accent"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-200 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Aloqa
            </h3>

            <div className="mt-5 space-y-4">
              {/* Phone */}
              <a
                href="tel:+998781137353"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/6 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-navy">
                  <PhoneIcon className="h-4.5 w-4.5" />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/30">
                    Telefon
                  </span>

                  <span className="mt-0.5 block text-sm font-semibold text-white/75 transition-colors group-hover:text-accent">
                    +998 78 113 73 53
                  </span>
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/6 text-accent">
                  <LocationIcon className="h-4.5 w-4.5" />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/30">
                    Manzil
                  </span>

                  <span className="mt-0.5 block text-sm font-medium text-white/60">
                    Toshkent shahri
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* =========================
              SOCIALS
          ========================== */}

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/90">
              Ijtimoiy tarmoqlar
            </h3>

            <p className="mt-5 max-w-55 text-sm leading-5 text-white/45">
              Yangiliklar va foydali ma&apos;lumotlarni kuzatib boring.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent hover:text-navy"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================== */}

        <div className="mt-9 border-t border-white/[0.07] pt-5">
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[11px] text-white/30 sm:text-xs">
              © {year} Mudarris Akademiyasi. Barcha huquqlar himoyalangan.
            </p>

            <p className="text-[11px] text-white/20 sm:text-xs">
              Ta&apos;lim bilan kelajak sari.
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer