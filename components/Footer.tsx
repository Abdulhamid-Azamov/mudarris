import Image from "next/image"
import Link from "next/link"
import LogoImage from "@/images/logo.jpg"
import Reveal from "@/components/Reveal"
import BrandLetterMark from "@/components/decor/BrandLetterMark"

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
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
  <svg viewBox="0 0 24 24" fill="none" className={className}>
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
  <svg viewBox="0 0 24 24" fill="none" className={className}>
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
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
)

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 4L3 11.5L9.5 13.5M21 4L15.5 20L9.5 13.5M21 4L9.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
  </svg>
)

const QUICK_LINKS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/#courses", label: "Kurslar" },
  { href: "/about", label: "Biz haqimizda" },
]

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Telegram", href: "#", icon: TelegramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <BrandLetterMark variant="cluster" className="pointer-events-none absolute -bottom-20 -right-14 h-56 w-56 text-white/[0.035] sm:h-72 sm:w-72" />

      <Reveal className="relative mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image src={LogoImage} alt="Mudarris Akademiyasi" fill sizes="40px" className="object-cover" />
              </span>

              <span className="font-display text-base font-bold uppercase leading-tight">
                Mudarris
                <br />
                Akademiyasi
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Arab tilini tajribali ustozlardan o&apos;rganish uchun
              qulay akademiya.
            </p>

            <Link href="/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-accent transition-transform duration-200 hover:translate-x-1"  >
              Batafsil ma&apos;lumot
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Sahifalar */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Sahifalar
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/55">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-accent"  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Aloqa
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+998781137353" className="group flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-accent"  >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.07] text-accent transition-colors group-hover:bg-accent/10">
                  <PhoneIcon className="h-4 w-4" />
                </span>

                <span>+998 78 113 73 53</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Ijtimoiy tarmoqlar
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-accent"  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.07] text-white/70 transition-all duration-200 group-hover:bg-accent/10 group-hover:text-accent">
                      <social.icon className="h-4 w-4" />
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-5 sm:flex-row">
          <p className="text-xs text-white/35">
            © {year}. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-xs text-white/30">
            Mudarris Akademiyasi
          </p>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer