import { Building2, Users, Briefcase } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "B2B & SaaS Teams",
    description: "Qualify inbound leads automatically and focus your sales team on high-intent prospects.",
  },
  {
    icon: Users,
    title: "Agencies & Consultants",
    description: "Capture better client leads and understand their needs before the first call.",
  },
  {
    icon: Briefcase,
    title: "Service-Based Businesses",
    description: "Convert website visitors into qualified opportunities with intelligent forms.",
  },
]

export function WhoItsFor() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built For</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon
            return (
              <div key={index} className="bg-background rounded-2xl p-8 border border-border text-center">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
