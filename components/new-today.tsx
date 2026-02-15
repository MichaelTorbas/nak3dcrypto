import { creators } from "@/lib/data"
import Link from "next/link"

export function NewToday() {
  const newCreators = creators.slice(4)

  return (
    <section className="px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-card p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
            New Today, Free to Follow
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {newCreators.map((creator) => (
              <Link key={creator.id} href={`/creator/${creator.id}`}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={creator.previewImage}
                    alt={creator.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                    <div>
                      <h3 className="text-sm font-bold text-white">@{creator.id}</h3>
                      <p className="text-xs text-white/60">{creator.subscribers.toLocaleString()} followers</p>
                    </div>
                    <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                      Follow
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
