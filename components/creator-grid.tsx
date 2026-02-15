"use client"

import { useEffect, useRef, useState } from "react"
import { creators } from "@/lib/data"
import { CreatorCard } from "./creator-card"
import Link from "next/link"

export function CreatorGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="creators" className="px-4 py-16 lg:px-8" ref={gridRef}>
      <div className="mx-auto max-w-7xl">
        {/* White container card */}
        <div className="glass-panel neon-border rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Header row */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">740K</span> Models Online
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Discover trending creators on the platform
              </p>
            </div>
            <Link
              href="#creators"
              className="btn-neon-fill inline-flex self-start rounded-full px-5 py-2 text-sm font-semibold text-white sm:self-auto"
            >
              See More
            </Link>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {creators.slice(0, 4).map((creator, i) => (
              <div
                key={creator.id}
                className={visible ? "animate-fade-in-up" : "opacity-0"}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CreatorCard creator={creator} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
