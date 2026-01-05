"use client"
import { PenTool, Share2, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: PenTool,
    title: "Create",
    description: "Build forms fast using AI or templates. No coding required.",
    number: "01",
  },
  {
    icon: Share2,
    title: "Embed or Connect",
    description: "Embed anywhere or connect via webhooks and integrations.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Convert & Qualify",
    description: "Leads land in LeadTella CRM or sync to HubSpot automatically.",
    number: "03",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with LeadTella in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <span className="text-5xl font-bold text-border">{step.number}</span>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
