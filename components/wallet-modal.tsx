"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Wallet } from "lucide-react"

const wallets = [
  { name: "SubWallet", icon: "S" },
  { name: "Polkadot.js", icon: "P" },
  { name: "Talisman", icon: "T" },
]

interface WalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletModal({ open, onOpenChange }: WalletModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel neon-border border-0 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-card-foreground">
            <Wallet className="h-5 w-5 text-neon-cyan" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select a wallet to connect to Nak3dCrypto
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-4 rounded-lg border border-neon-cyan/15 bg-secondary/40 px-4 py-3 text-left text-foreground transition-all hover:border-neon-cyan/40 hover:bg-neon-cyan/5 glow-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-cyan/10 font-mono text-lg font-bold text-neon-cyan">
                {wallet.icon}
              </span>
              <span className="font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
