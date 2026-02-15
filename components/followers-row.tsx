import { Lock } from "lucide-react"
import { creators } from "@/lib/data"

export function FollowersRow() {
  const thumbnails = creators.slice(0, 8)

  return (
    <section className="px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel neon-border rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <span className="text-neon-cyan">300+</span> Followers This Hour
            </h2>
            <button className="btn-neon-fill inline-flex self-start rounded-full px-5 py-2 text-sm font-semibold text-white sm:self-auto">
              Unlock All
            </button>
          </div>

          {/* Circular thumbnails */}
          <div className="mb-6 flex flex-wrap justify-center gap-4 sm:justify-start">
            {thumbnails.map((c, i) => {
              const isBlurred = i % 2 === 0

              return (
                <div key={c.id} className="relative">
                  <div
                    className={`h-16 w-16 overflow-hidden rounded-full border-2 sm:h-20 sm:w-20 ${
                      isBlurred ? "grayscale border-neon-purple/30" : "border-neon-cyan/50"
                    }`}
                  >
                    <img
                      src={c.previewImage}
                      alt={c.name}
                      className={`h-full w-full object-cover ${isBlurred ? "blur-sm" : ""}`}
                    />
                  </div>
                  {isBlurred && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#15142c]/40">
                      <Lock className="h-4 w-4 text-neon-purple drop-shadow-md" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            The best shots are waiting, but only for those who dare. Subscribe now to unlock everything.
          </p>
        </div>
      </div>
    </section>
  )
}
