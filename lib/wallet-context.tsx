"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"
import { BrowserProvider, type JsonRpcSigner } from "ethers"

interface WalletContextValue {
  address: string | null
  signer: JsonRpcSigner | null
  isConnecting: boolean
  connect: () => Promise<void>
  disconnect: () => void
  truncatedAddress: string | null
}

const WalletContext = createContext<WalletContextValue>({
  address: null,
  signer: null,
  isConnecting: false,
  connect: async () => {},
  disconnect: () => {},
  truncatedAddress: null,
})

export function useWallet() {
  return useContext(WalletContext)
}

function truncate(addr: string): string {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask to continue.")
      return
    }

    setIsConnecting(true)
    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length > 0) {
        const provider = new BrowserProvider(window.ethereum)
        const newSigner = await provider.getSigner()
        setAddress(accounts[0])
        setSigner(newSigner)
      }
    } catch (err) {
      console.error("Wallet connection failed:", err)
    } finally {
      setIsConnecting(false)
    }
  }, [])

  const disconnect = useCallback(() => {
    setAddress(null)
    setSigner(null)
  }, [])

  // Listen for account changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect()
      } else {
        setAddress(accounts[0])
        const provider = new BrowserProvider(window.ethereum)
        provider.getSigner().then(setSigner)
      }
    }

    window.ethereum.on("accountsChanged", handleAccountsChanged)
    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
    }
  }, [disconnect])

  const truncatedAddress = address ? truncate(address) : null

  return (
    <WalletContext.Provider
      value={{ address, signer, isConnecting, connect, disconnect, truncatedAddress }}
    >
      {children}
    </WalletContext.Provider>
  )
}
