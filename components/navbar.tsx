"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Wallet } from "lucide-react"
import { WalletModal } from "./wallet-modal"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [walletOpen, setWalletOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-neon-cyan/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight lg:text-2xl">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Nak3d</span>
              <span className="text-foreground">Crypto</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {["Models", "Offers", "Trending", "Exclusive"].map((item) => (
              <Link
                key={item}
                href="/#creators"
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-neon-cyan/10 hover:text-neon-cyan"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setWalletOpen(true)}
              className="btn-neon flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neon-cyan transition-all"
            >
              <Wallet className="h-4 w-4" />
              Join Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="flex flex-col gap-2 border-t border-neon-cyan/10 px-4 pb-6 pt-4 md:hidden">
            {["Models", "Offers", "Trending", "Exclusive"].map((item) => (
              <Link
                key={item}
                href="/#creators"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-neon-cyan/10 hover:text-neon-cyan"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false)
                setWalletOpen(true)
              }}
              className="btn-neon mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neon-cyan transition-all"
            >
              <Wallet className="h-4 w-4" />
              Join Now
            </button>
          </div>
        )}
      </nav>

      <WalletModal open={walletOpen} onOpenChange={setWalletOpen} />
    </>
  )
}
