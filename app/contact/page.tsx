"use client"

import { useState } from "react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setError("")
    setSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "")
    const phone = String(formData.get("phone") || "")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          source: "contact-section",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Ariza yuborishda xatolik yuz berdi."
        )
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Contact submit error:", error)

      setError(
        error instanceof Error
          ? error.message
          : "Ariza yuborishda xatolik yuz berdi."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative overflow-hidden bg-[#f3f5f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#183463]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#32d1a8]/6 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-295 overflow-hidden rounded-[32px] bg-[#183463] shadow-[0_30px_80px_rgba(24,52,99,0.18)] sm:rounded-[40px]">
        {/* Main background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#21477f] via-[#183463] to-[#102b55]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#32d1a8]/5 blur-3xl" />

        {/* Content */}
        <div className="relative grid min-h-150 gap-10 md:grid-cols-[1fr_0.9fr] md:gap-4 lg:min-h-155 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20 xl:px-16">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(50,209,168,0.8)]" />

              Kurslarga qabul ochiq
            </div>

            {/* Heading */}
            <h1 className="max-w-140 text-4xl font-black uppercase leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.7rem] xl:text-[4.1rem]">
              Kurslarimizga

              <span className="mt-2 block text-accent sm:mt-3 lg:mt-4">
                hoziroq yoziling
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-120 text-base leading-relaxed text-white/70 sm:text-lg">
              Arab tilini tajribali ustozlardan o&apos;rganing.
              Kurslarimiz haqida batafsil ma&apos;lumot olish
              uchun ma&apos;lumotlaringizni qoldiring.
            </p>

            {/* Contact phone */}
            <div className="mt-9 flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.182a1.125 1.125 0 0 1-1.21.337 12.035 12.035 0 0 1-7.425-7.425 1.125 1.125 0 0 1 .337-1.21l1.182-.97c.327-.268.467-.7.417-1.173L6.576 2.852A1.125 1.125 0 0 0 5.486 2H4.125A2.25 2.25 0 0 0 1.875 4.25v2.5Z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs font-medium text-white/45">
                  Biz bilan bog&apos;laning
                </p>

                <a
                  href="tel:+998781137353"
                  className="mt-0.5 block text-lg font-bold tracking-wide text-white transition-colors hover:text-accent sm:text-xl"
                >
                  78 113 73 53
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex items-center justify-center px-5 pb-10 sm:px-8 sm:pb-12 md:px-6 md:py-10 lg:px-10 lg:py-12 xl:px-14">
            <div className="w-full max-w-115 rounded-[28px] border border-white/60 bg-white p-5 shadow-[0_24px_60px_rgba(7,27,55,0.20)] sm:rounded-4xl sm:p-7 lg:p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Header */}
                <div>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]">
                    Bog&apos;lanish uchun

                    <span className="block text-accent sm:text-[2.1rem] lg:text-[2.2rem]">
                      ma&apos;lumot qoldiring
                    </span>
                  </h2>

                  <p className="mt-3 max-w-90 text-sm leading-relaxed text-slate-500">
                    Ism va telefon raqamingizni kiriting.
                  </p>
                </div>

                {/* Inputs */}
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Ism-familiya

                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ismingizni kiriting"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#183463] focus:bg-white focus:ring-4 focus:ring-[#183463]/8"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Telefon raqam

                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-200 focus-within:border-[#183463] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#183463]/8 hover:border-slate-300">
                      <span className="border-r border-slate-200 px-4 text-sm font-semibold text-slate-500">
                        +998
                      </span>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="numeric"
                        placeholder="90 123 45 67"
                        className="w-full border-0 bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                {/* Success */}
                {submitted && (
                  <div className="rounded-2xl bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-deep">
                    Arizangiz qabul qilindi! Tez orada
                    siz bilan bog&apos;lanamiz.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent/80 px-4 py-4 text-base font-bold text-white shadow-[0_12px_25px_rgba(50,209,168,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_16px_30px_rgba(50,209,168,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Yuborilmoqda..."
                    : submitted
                      ? "Yuborildi"
                      : "Ro'yxatdan o'tish"}

                  {!isSubmitting && !submitted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m13 6 6 6-6 6"
                      />
                    </svg>
                  )}
                </button>

                {/* Alternative contact */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                  <span>
                    Yoki qo&apos;ng&apos;iroq qiling:
                  </span>

                  <a
                    href="tel:+998781137353"
                    className="font-bold text-navy transition-colors hover:text-accent"
                  >
                    78 113 73 53
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact