"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#23CD9A]/10 via-background to-[#23CD9A]/5">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Build Forms That Actually Convert</h2>
        <p className="text-lg text-muted-foreground mb-8">Start capturing better leads in minutes.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://app.leadtella.com/register?utm_source=website&utm_medium=cta&utm_campaign=signup">
            <Button
              size="lg"
              className="bg-[#23CD9A] text-foreground hover:bg-[#1db886] h-12 px-8 text-base font-semibold rounded-lg shadow-lg shadow-[#23CD9A]/25"
            >
              Get Started with LeadTella
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="https://zcal.co/i/vat0sifj" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-medium rounded-lg border-border hover:bg-secondary bg-transparent"
            >
              Schedule a Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
