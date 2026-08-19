"use client"

import { useEffect, useRef, useState } from "react"
import { useEnrollModal } from "@/contexts/EnrollModalContext"

const EnrollModal = () => {
  const { isOpen, courseName, close } = useEnrollModal()
  const [submitted, setSubmitted] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const nameInputRef = useRef<HTMLInputElement | null>(null)

  // Reset the success state whenever the modal transitions from closed to
  // open — the standard React pattern for adjusting state during render.
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen)
    if (isOpen && submitted) setSubmitted(false)
  }

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => nameInputRef.current?.focus(), 150)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, close])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
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
          aria-label="Yopish"
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-navy sm:right-5 sm:top-5"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="pr-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
                Kursga yozilish
              </span>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]">
                {courseName ?? "Bepul konsultatsiya"}
                <span className="mt-1 block text-accent-deep sm:text-[1.4rem]">olish uchun yozing</span>
              </h2>
              <p className="mt-3 max-w-90 text-sm leading-relaxed text-slate-500">
                Ism va telefon raqamingizni qoldiring, ustozlarimiz siz bilan tez orada bog&apos;lanadi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="enroll-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Ism-familiya
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="enroll-name"
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#183463] focus:bg-white focus:ring-4 focus:ring-[#183463]/8"
                />
              </div>

              <div>
                <label htmlFor="enroll-phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Telefon raqam
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-200 focus-within:border-[#183463] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#183463]/8 hover:border-slate-300">
                  <span className="border-r border-slate-200 px-4 text-sm font-semibold text-slate-500">
                    +998
                  </span>
                  <input
                    id="enroll-phone"
                    type="tel"
                    required
                    placeholder="90 123 45 67"
                    className="w-full border-0 bg-transparent px-4 py-3.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent/80 px-4 py-4 text-base font-bold text-white shadow-[0_12px_25px_rgba(50,209,168,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_16px_30px_rgba(50,209,168,0.35)] active:translate-y-0"
              >
                Yuborish
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
                </svg>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <span>Yoki qo&apos;ng&apos;iroq qiling:</span>
                <a href="tel:+998781137353" className="font-bold text-navy transition-colors hover:text-accent-deep">
                  78 113 73 53
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center px-2 py-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent-deep">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="mt-5 text-xl font-extrabold text-navy sm:text-2xl">Arizangiz qabul qilindi!</h2>
            <p className="mt-3 max-w-80 text-sm leading-relaxed text-slate-500">
              Tez orada ustozlarimiz siz bilan ko&apos;rsatilgan raqam orqali bog&apos;lanishadi.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 w-full cursor-pointer rounded-2xl bg-navy px-4 py-3.5 text-base font-bold text-white transition-colors duration-200 hover:bg-navy-deep"
            >
              Yopish
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EnrollModal
