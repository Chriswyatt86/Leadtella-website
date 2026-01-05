import { Bot, Brain, BarChart3, LineChart, Database, Plug } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Forms",
      description:
        "Step forms, stacked forms, and quizzes powered by AI. Designed to increase completion rates and capture quality leads.",
    },
    {
      icon: BarChart3,
      title: "Lead Intelligence",
      description:
        "Automatically enrich and analyse leads. Understand intent, context, and fit with AI summaries before the first call.",
    },
    {
      icon: Database,
      title: "Built-In CRM & Deal Flow",
      description:
        "See leads move through your pipeline. Track conversations, status, and outcomes. No more disconnected tools.",
    },
    {
      icon: LineChart,
      title: "Real-Time Analytics",
      description:
        "Track form performance, conversion rates, and lead quality in real-time. Make data-driven decisions to optimize your lead generation.",
    },
    {
      icon: Bot,
      title: "Automatic Enrichment",
      description: "Pre-fill data, verify information, and enrich leads with company details all before they submit.",
    },
    {
      icon: Plug,
      title: "Seamless Integrations",
      description:
        "Connect with your favorite CRM, email marketing, and sales tools. Sync leads automatically and keep your workflow smooth.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One Platform. Smarter Forms. Better Leads.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to capture better leads, qualify them automatically, and understand who they are before
            the first call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-secondary/50 rounded-2xl p-8 border border-border hover:border-[#23CD9A]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#23CD9A] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
