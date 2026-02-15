import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Image as ImageIcon, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "AI Image Editor - Nak3dCrypto",
  description: "Upload an image, describe your edit, and let AI transform it."
}

export default function AIEditPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Image Editor
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Upload an image, describe your edit, and let AI transform it. Powered by advanced AI models.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column: Upload and prompt */}
          <div className="space-y-8">
            {/* Upload card */}
            <Card className="border-neon-cyan/20 bg-gradient-to-br from-brand-dark/50 to-neon-cyan/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-cyan">
                  <Upload className="h-5 w-5" />
                  Upload Image
                </CardTitle>
                <CardDescription>
                  Drag and drop your image here, or click to browse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={cn(
                    "flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neon-cyan/30",
                    "bg-background/50 p-12 transition-colors hover:border-neon-cyan/50 hover:bg-background/80",
                    "cursor-pointer"
                  )}
                >
                  <div className="mb-4 rounded-full bg-neon-cyan/10 p-4">
                    <ImageIcon className="h-10 w-10 text-neon-cyan" />
                  </div>
                  <p className="mb-2 text-sm font-medium text-foreground">
                    Drag & drop or click to upload
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, WEBP up to 10MB
                  </p>
                  <Button variant="outline" size="sm" className="mt-6 border-neon-cyan/30 text-neon-cyan">
                    Browse files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Prompt card */}
            <Card className="border-neon-purple/20 bg-gradient-to-br from-brand-dark/50 to-neon-purple/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-purple">
                  <Sparkles className="h-5 w-5" />
                  Edit Prompt
                </CardTitle>
                <CardDescription>
                  Describe the changes you want to apply to the image
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="prompt" className="text-sm font-medium text-foreground">
                    Prompt
                  </label>
                  <Input
                    id="prompt"
                    placeholder="e.g., Change the background to a sunset, add a hat, make it look like a painting..."
                    className="border-neon-purple/30 focus:border-neon-purple"
                  />
                  <p className="text-xs text-muted-foreground">
                    Be as specific as possible for best results.
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="strength" className="text-sm font-medium text-foreground">
                    Edit Strength
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">Subtle</span>
                    <input
                      type="range"
                      id="strength"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="h-2 w-full appearance-none rounded-lg bg-background accent-neon-purple"
                    />
                    <span className="text-xs text-muted-foreground">Strong</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:brightness-110">
                  Generate AI Edit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Preview */}
          <div className="space-y-8">
            <Card className="border-neon-lavender/20">
              <CardHeader>
                <CardTitle className="text-neon-lavender">Original Image</CardTitle>
                <CardDescription>
                  Your uploaded image will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex aspect-square items-center justify-center rounded-lg bg-background/50 border border-dashed border-muted">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-2 text-sm text-muted-foreground">No image uploaded yet</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neon-highlight/20">
              <CardHeader>
                <CardTitle className="text-neon-highlight">AI Edited Result</CardTitle>
                <CardDescription>
                  The transformed image will appear here after generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-brand-dark/30 to-neon-highlight/5 border border-dashed border-neon-highlight/30">
                  <div className="text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-neon-highlight/50" />
                    <p className="mt-2 text-sm text-muted-foreground">AI edit will appear here</p>
                    <p className="text-xs text-muted-foreground/70">Generation may take a few seconds</p>
                  </div>
                </div>
              </CardContent>
              <div className="border-t border-neon-highlight/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className="font-mono text-sm text-neon-highlight">Ready</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Info section */}
        <div className="mt-16 rounded-lg border border-neon-cyan/10 bg-gradient-to-r from-brand-dark/40 to-transparent p-6">
          <h3 className="mb-3 text-lg font-semibold text-neon-cyan">How it works</h3>
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-neon-cyan/10 p-2">
                <Upload className="h-4 w-4 text-neon-cyan" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Upload</h4>
                <p className="text-sm text-muted-foreground">Upload any image you want to edit.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-neon-purple/10 p-2">
                <Sparkles className="h-4 w-4 text-neon-purple" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Describe</h4>
                <p className="text-sm text-muted-foreground">Tell AI what changes to make with a text prompt.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-neon-highlight/10 p-2">
                <ImageIcon className="h-4 w-4 text-neon-highlight" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Generate</h4>
                <p className="text-sm text-muted-foreground">Get your transformed image in seconds.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer similar to home page */}
      <footer className="mt-8 border-t border-neon-cyan/10 px-4 py-16 lg:px-8" style={{ background: 'linear-gradient(180deg, #15142c 0%, #0e0d20 100%)' }}>
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs text-muted-foreground/60">
            AI Image Editor &mdash; Powered by advanced AI models. All processing is done securely.
          </p>
        </div>
      </footer>
    </main>
  )
}