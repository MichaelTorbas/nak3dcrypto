import { notFound } from "next/navigation"
import { getCreatorById, creators } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { ProfileHeader } from "@/components/profile-header"
import { ContentGallery } from "@/components/content-gallery"
import { TipCreator } from "@/components/tip-creator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export function generateStaticParams() {
  return creators.map((creator) => ({ id: creator.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const creator = getCreatorById(id)
  if (!creator) return { title: "Creator Not Found" }

  return {
    title: `${creator.name} - Nak3dCrypto`,
    description: creator.bio,
  }
}

export default async function CreatorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const creator = getCreatorById(id)

  if (!creator) {
    notFound()
  }

  return (
    <main className="relative min-h-screen pb-20">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />

      <ProfileHeader creator={creator} />

      <div className="mx-auto mt-10 max-w-5xl px-4 lg:px-8">
        {/* Back link */}
        <Link
          href="/#creators"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Creators
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          {/* Content Gallery */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-card-foreground">
              Exclusive Content
              <span className="ml-2 font-mono text-sm font-normal text-muted-foreground">
                ({creator.content.length} items)
              </span>
            </h2>
            <ContentGallery content={creator.content} creatorName={creator.name} />
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <TipCreator creatorName={creator.name} />
          </div>
        </div>
      </div>
    </main>
  )
}
