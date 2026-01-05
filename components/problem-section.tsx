import { XCircle } from "lucide-react"

const problems = [
  "Static forms collect data but don't qualify intent",
  "Sales teams waste time on unqualified leads",
  "CRMs fill up with names but no real context",
  "HubSpot forms are rigid and hard to optimise",
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Your Forms Are Costing You Good Leads
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-left bg-background p-4 rounded-xl border border-border"
              >
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
