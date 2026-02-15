"use client"

import { useEffect, useState } from "react"

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="neon-border flex h-12 w-12 items-center justify-center rounded-lg bg-[#15142c]/80 font-mono text-lg font-bold text-neon-cyan">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] uppercase tracking-wider text-neon-lavender/70">{label}</span>
    </div>
  )
}

export function FlashSale() {
  const [time, setTime] = useState({ hours: 2, minutes: 59, seconds: 45 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev
        seconds -= 1
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        if (hours < 0) {
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl neon-border" style={{ boxShadow: '0 0 30px rgba(120, 61, 208, 0.15), 0 0 60px rgba(74, 194, 234, 0.08)' }}>
          {/* Background image */}
          <img
            src="/images/bottom-banner.png"
            alt=""
            className="h-full w-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-blue/95" />

          <div className="relative flex min-h-[280px] items-center justify-end p-6 sm:p-10 lg:p-14">
            <div className="flex max-w-md flex-col gap-5 rounded-2xl bg-brand-blue/90 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/70">
                  Flash Limited-Time Offer
                </p>
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  50% Off for the Next 3 Hours.
                </h2>
              </div>

              <button className="w-fit rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-brand-blue">
                Access for Half Price
              </button>

              <div className="flex gap-3">
                <CountdownBox value={time.hours} label="Hrs" />
                <CountdownBox value={time.minutes} label="Min" />
                <CountdownBox value={time.seconds} label="Sec" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
