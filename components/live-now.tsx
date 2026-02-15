"use client"

import { useEffect, useState } from "react"

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="neon-border flex h-14 w-14 items-center justify-center rounded-lg bg-[#15142c]/80 font-mono text-xl font-bold text-neon-cyan sm:h-16 sm:w-16 sm:text-2xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] uppercase tracking-wider text-neon-lavender/70">{label}</span>
    </div>
  )
}

export function LiveNow() {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 })

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
        <div className="neon-border flex flex-col overflow-hidden rounded-2xl lg:flex-row" style={{ boxShadow: '0 0 30px rgba(74, 194, 234, 0.1), 0 0 60px rgba(120, 61, 208, 0.08)' }}>
          {/* Left: Image */}
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:w-1/2">
            <img
              src="/images/vertical-banner.png"
              alt="Live stream preview"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: Blue panel */}
          <div className="glass-panel flex flex-1 flex-col justify-center gap-6 p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, rgba(37, 43, 83, 0.9), rgba(21, 20, 44, 0.95))' }}>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-neon-cyan animate-pulse-glow">
                Live Now
              </p>
              <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
                Join My Stream. <span className="text-neon-highlight">VIP Access</span> Available.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Get exclusive behind-the-scenes access and interact live. Limited VIP spots available for this session.
              </p>
            </div>

            <button className="btn-neon w-fit rounded-full px-6 py-2.5 text-sm font-semibold text-neon-cyan transition-all">
              Join for Free
            </button>

            {/* Countdown */}
            <div className="flex gap-3">
              <CountdownBox value={time.hours} label="Hours" />
              <CountdownBox value={time.minutes} label="Min" />
              <CountdownBox value={time.seconds} label="Sec" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
