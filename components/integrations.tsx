"use client"
import { Check } from "lucide-react"

const integrations = [
  { name: "HubSpot", status: "available" },
  { name: "WordPress", status: "available" },
  { name: "Contact Form 7", status: "available" },
  { name: "Gravity Forms", status: "coming-soon" },
  { name: "Webhooks", status: "available" },
  { name: "Zapier", status: "coming-soon" },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Works With Your Existing Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LeadTella fits into your workflow, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`bg-secondary/50 rounded-xl p-4 text-center border border-border ${
                integration.status === "coming-soon" ? "opacity-60" : ""
              }`}
            >
              <div className="w-12 h-12 bg-background rounded-lg mx-auto mb-3 flex items-center justify-center border border-border">
                <span className="text-xs font-bold text-muted-foreground">
                  {integration.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">{integration.name}</p>
              {integration.status === "coming-soon" && (
                <span className="text-xs text-muted-foreground">Coming Soon</span>
              )}
            </div>
          ))}
        </div>

        {/* HubSpot Callout */}
        <div className="bg-foreground text-background rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Using HubSpot?</h3>
          <p className="text-background/80 mb-4 max-w-xl mx-auto">
            Replace the forms. Keep the CRM. LeadTella syncs seamlessly with your HubSpot account.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium">
            <Check className="w-4 h-4" />
            Native HubSpot Integration
          </div>
        </div>
      </div>
    </section>
  )
}
