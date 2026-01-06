"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [iframeError, setIframeError] = useState(false)

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
            <div className="relative bg-background rounded-2xl p-4 sm:p-6 shadow-2xl border border-border overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="ml-4 flex-1 h-6 bg-secondary/50 rounded-md px-3 flex items-center text-xs text-muted-foreground">
                  app.leadtella.com/demo
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-background min-h-[500px]">
                {!iframeError ? (
                  <iframe
                    src="https://app.leadtella.com/embed/form/98?primaryColor=%23059669&secondaryColor=%236b7280&backgroundColor=%23ffffff&textColor=%231f2937&buttonColor=%23059669&buttonTextColor=%23ffffff&showBranding=true"
                    width="100%"
                    height="500"
                    style={{ border: "none", display: "block" }}
                    title="LeadTella Demo Form"
                    onLoad={() => {
                      console.log("[v0] Iframe loaded successfully")
                    }}
                    onError={(e) => {
                      console.log("[v0] Iframe failed to load", e)
                      setIframeError(true)
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[500px] bg-secondary/20 rounded-xl">
                    <p className="text-muted-foreground mb-4">Unable to load embedded form</p>
                    <a
                      href="https://app.leadtella.com/embed/form/98?primaryColor=%23059669&secondaryColor=%236b7280&backgroundColor=%23ffffff&textColor=%231f2937&buttonColor=%23059669&buttonTextColor=%23ffffff&showBranding=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Open Form in New Tab</Button>
                    </a>
                  </div>
                )}
              </div>

              {/* Optional: "Try it live" indicator */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Interactive demo - Try it now!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
