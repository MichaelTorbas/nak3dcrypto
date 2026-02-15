import { Heart } from "lucide-react"

export function PrivateCommunity() {
  const images = [
    { src: "/images/photo-6.png", likes: 1247 },
    { src: "/images/photo-8.png", likes: 892 },
  ]

  return (
    <section className="px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel neon-border rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Featured images */}
            <div className="flex gap-4 lg:w-1/2">
              {images.map((img, i) => (
                <div key={i} className="relative flex-1 overflow-hidden rounded-xl neon-border">
                  <img
                    src={img.src}
                    alt="Community member content"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  {/* Like badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#15142c]/70 px-3 py-1 text-xs font-semibold text-neon-cyan backdrop-blur-sm border border-neon-cyan/20">
                    <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                    {img.likes.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-5 lg:w-1/2 lg:pl-6">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                Private Community Access <span className="text-neon-highlight">Almost Full</span> &mdash; Grab Your Spot.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Join an exclusive group of supporters with direct access to private galleries,
                behind-the-scenes content, and live events.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-neon-fill rounded-full px-6 py-2.5 text-sm font-semibold text-white">
                  Join &mdash; 14 Spots Left
                </button>
                <span className="text-sm font-semibold text-muted-foreground">
                  5,000+ Members Inside
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
