"use client"

import { useEffect, useRef, useState } from "react"
import type { ElementType, ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

/**
 * Wraps content in a subtle fade-up animation that plays once, the first
 * time the element scrolls into view. Respects prefers-reduced-motion and
 * is meant to be used sparingly (section by section), not on every element.
 */
const Reveal = ({ children, as: Component = "div", className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
    // Intentionally runs once on mount: `visible` is only read here to skip
    // creating an observer when reduced-motion already made it true upfront.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  )
}

export default Reveal