import { ArrowRight } from "lucide-react"

const contrasts = [
  { from: "Not just data capture", to: "Lead intelligence" },
  { from: "Not static", to: "Adaptive and AI-driven" },
  { from: "Not isolated", to: "Fully connected to your CRM" },
]

export function Differentiation() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Not Another Form Builder</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {contrasts.map((contrast, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <span className="text-muted-foreground line-through">{contrast.from}</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mx-4" />
              <span className="font-semibold text-foreground">{contrast.to}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
