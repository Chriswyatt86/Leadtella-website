"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background pt-16 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              Stop Losing Leads to Your Forms
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              LeadTella replaces outdated forms with AI-powered lead flows that increase conversion, pre-qualify
              prospects, and give you real insight before the first conversation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://app.leadtella.com/register?utm_source=website&utm_medium=hero&utm_campaign=signup">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base font-semibold rounded-lg shadow-lg shadow-primary/25"
                >
                  Build Smarter Forms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base font-medium rounded-lg border-border hover:bg-secondary bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {/* Company logos section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center -space-x-2">
                  {/* Avatar faces using placeholder images */}
                  <img
                    src="/images/testimonial-1.png"
                    alt="Business user"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src="/images/testimonial-2.png"
                    alt="Business user"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <img
                    src="/professional-asian-woman-headshot.png"
                    alt="Business user"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border-2 border-background text-xs font-bold text-primary">
                    +50
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by leading <span className="font-semibold text-foreground">B2B businesses</span>
                </p>
              </div>
              {/* Stats line */}
              <p className="text-xs text-muted-foreground">Used by businesses to get better leads for their business</p>
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-secondary rounded-2xl p-6 shadow-2xl border border-border">
              {/* Form Preview */}
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-secondary rounded-lg w-3/4" />
                  <div className="h-10 bg-secondary rounded-lg" />
                  <div className="h-10 bg-secondary rounded-lg" />
                  <div className="flex gap-2">
                    <div className="h-10 bg-primary rounded-lg flex-1" />
                  </div>
                </div>
              </div>

              {/* Lead Intelligence Panel */}
              <div className="bg-background rounded-xl p-4 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Lead Intelligence
                  </span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                    Qualified
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Intent Score</span>
                    <span className="font-semibold text-primary">87/100</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Company</span>
                    <span className="font-semibold text-foreground">TechCorp Inc.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-semibold text-foreground">$50k-100k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
