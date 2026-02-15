import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function CreatorNotFound() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-brand-blue">404</h1>
        <p className="mb-2 text-xl font-semibold text-card-foreground">Creator Not Found</p>
        <p className="mb-8 text-muted-foreground">
          This creator profile does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
