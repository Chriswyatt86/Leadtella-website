import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Integrations } from "@/components/integrations"
import { WhoItsFor } from "@/components/who-its-for"
import { Differentiation } from "@/components/differentiation"
import { Results } from "@/components/results"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/constants"
import { SchemaMarkup } from "@/components/schema-markup"
import { generateWebPageSchema, generateSoftwareSchema, generateBreadcrumbSchema } from "@/lib/schema"

export const revalidate = 60

export const metadata = {
  title: "LeadTella - Stop Losing Leads to Your Forms",
  description:
    "Replace outdated forms with AI-powered lead flows. Capture better leads, qualify them automatically, and understand who they are before the first conversation.",
  keywords: "lead generation, AI forms, lead intelligence, CRM, HubSpot integration, lead qualification, form builder",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LeadTella - Stop Losing Leads to Your Forms",
    description:
      "Replace outdated forms with AI-powered lead flows that increase conversion and pre-qualify prospects.",
    type: "website",
    url: "https://www.leadtella.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadTella - Stop Losing Leads to Your Forms",
    description:
      "Replace outdated forms with AI-powered lead flows that increase conversion and pre-qualify prospects.",
  },
}

export default function Home() {
  const schemas = [
    generateWebPageSchema({
      title: "LeadTella - Stop Losing Leads to Your Forms",
      description:
        "Replace outdated forms with AI-powered lead flows. Capture better leads, qualify them automatically, and understand who they are before the first conversation.",
      url: SITE_URL,
    }),
    generateSoftwareSchema(),
    generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }]),
  ]

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={schemas} />
      <Header />
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Integrations />
      <WhoItsFor />
      <Differentiation />
      <Results />
      <CTA />
      <Footer />
    </div>
  )
}
