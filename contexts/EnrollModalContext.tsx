"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import type { ReactNode } from "react"

type EnrollModalContextValue = {
  isOpen: boolean
  courseName?: string
  open: (courseName?: string) => void
  close: () => void
}

const EnrollModalContext = createContext<EnrollModalContextValue | null>(null)

export const EnrollModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [courseName, setCourseName] = useState<string | undefined>(undefined)

  const open = useCallback((name?: string) => {
    setCourseName(name)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({ isOpen, courseName, open, close }),
    [isOpen, courseName, open, close],
  )

  return <EnrollModalContext.Provider value={value}>{children}</EnrollModalContext.Provider>
}

export const useEnrollModal = () => {
  const ctx = useContext(EnrollModalContext)
  if (!ctx) {
    throw new Error("useEnrollModal must be used within an EnrollModalProvider")
  }
  return ctx
}
