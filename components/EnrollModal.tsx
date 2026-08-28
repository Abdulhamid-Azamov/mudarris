"use client"

import { useEffect, useRef, useState } from "react"
import { useEnrollModal } from "@/contexts/EnrollModalContext"
import { useT } from "@/hook/useT"

const EnrollModal = () => {
  const { isOpen, courseName, close } = useEnrollModal()

  const [submitted, setSubmitted] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const dialogRef = useRef<HTMLDivElement | null>(null)
  const nameInputRef = useRef<HTMLInputElement | null>(null)
  const t = useT()

  // Reset state when modal opens
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen)

    if (isOpen) {
      setSubmitted(false)
      setError("")
      setIsSubmitting(false)
    }
  }

  // Focus name input
  useEffect(() => {
    if (!isOpen) return

    const timer = setTimeout(() => {
      nameInputRef.current?.focus()
    }, 150)

    return () => clearTimeout(timer)
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  // Close with Escape
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, close])

  if (!isOpen) return null

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

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
          courseName,
          source: "enroll-modal",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || t("Ariza yuborishda xatolik yuz berdi.")
        )
      }

      setSubmitted(true)
    } catch (error) {
      console.error("Enroll submit error:", error)

      setError(
        error instanceof Error
          ? error.message
          : t("Ariza yuborishda xatolik yuz berdi.")
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto p-4 py-8 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0b1830]/60 backdrop-blur-sm animate-[fade-in_0.25s_ease-out]"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-105 animate-[fade-in_0.3s_cubic-bezier(0.16,1,0.3,1)] rounded-[28px] border border-white/60 bg-white p-5 shadow-[0_30px_80px_rgba(7,27,55,0.35)] sm:rounded-4xl sm:p-7 lg:p-8"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label={t("Yopish")}
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-navy sm:right-5 sm:top-5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4.5 w-4.5"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="pr-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
                {t("Kursga yozilish")}
              </span>

              <h2
                id="enroll-modal-title"
                className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]"
              >
                {courseName ? t(courseName) : t("Bepul konsultatsiya")}

                <span className="mt-1 block text-accent-deep sm:text-[1.4rem]">
                  {t("olish uchun yozing")}
                </span>
              </h2>

              <p className="mt-3 max-w-90 text-sm leading-relaxed text-slate-500">
                {t("Ism va telefon raqamingizni qoldiring, ustozlarimiz siz bilan tez orada bog'lanadi.")}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="enroll-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("Ism-familiya")}
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  ref={nameInputRef}
                  id="enroll-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={t("Ismingizni kiriting")}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/8"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="enroll-phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("Telefon raqam")}
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-200 focus-within:border-navy focus-within:bg-white focus-within:ring-4 focus-within:ring-navy/8 hover:border-slate-300">
                  <span className="border-r border-slate-200 px-4 text-sm font-semibold text-slate-500">
                    +998
                  </span>

                  <input
                    id="enroll-phone"
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

              {/* Error */}
              {error && (
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent/80 px-4 py-4 text-base font-bold text-white shadow-[0_12px_25px_rgba(50,209,168,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_16px_30px_rgba(50,209,168,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? t("Yuborilmoqda...")
                  : t("Yuborish")}

                {!isSubmitting && (
                  <svg
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
                  {t("Yoki qo'ng'iroq qiling:")}
                </span>

                <a
                  href="tel:+998781137353"
                  className="font-bold text-navy transition-colors hover:text-accent-deep"
                >
                  78 113 73 53
                </a>
              </div>
            </form>
          </>
        ) : (
          /* Success */
          <div className="flex flex-col items-center px-2 py-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent-deep">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <h2 className="mt-5 text-xl font-extrabold text-navy sm:text-2xl">
              {t("Arizangiz qabul qilindi!")}
            </h2>

            <p className="mt-3 max-w-80 text-sm leading-relaxed text-slate-500">
              {t("Tez orada xodimlarimiz siz bilan ko'rsatilgan raqam orqali bog'lanishadi.")}
            </p>

            <button
              type="button"
              onClick={close}
              className="mt-7 w-full cursor-pointer rounded-2xl bg-navy px-4 py-3.5 text-base font-bold text-white transition-colors duration-200 hover:bg-navy-deep"
            >
              {t("Yopish")}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EnrollModal