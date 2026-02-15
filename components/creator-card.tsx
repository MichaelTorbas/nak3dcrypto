import Link from "next/link"
import type { Creator } from "@/lib/data"

interface CreatorCardProps {
  creator: Creator
  index: number
}

export function CreatorCard({ creator, index }: CreatorCardProps) {
  const subtitles = [
    "50k Followers",
    "Top 10% Model",
    "Subscribe for Free",
    "Private DMs Open",
    "Exclusive Content",
    "VIP Access",
    "New This Week",
    "Trending Now",
  ]

  return (
    <Link href={`/creator/${creator.id}`}>
      <article className="group relative aspect-[3/4] overflow-hidden rounded-xl neon-border glow-hover transition-all duration-300">
        {/* Full card background image */}
        <img
          src={creator.previewImage}
          alt={`${creator.name} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15142c] via-[#15142c]/40 to-transparent" />

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-neon-cyan/50">
              <img
                src={creator.avatar}
                alt={`${creator.name} avatar`}
                className="h-full w-full object-cover bg-[#15142c]"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neon-cyan-light">@{creator.id}</h3>
              <p className="text-xs text-neon-lavender/70">{subtitles[index % subtitles.length]}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
