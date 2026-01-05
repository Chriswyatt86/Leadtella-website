import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"
import { PricingFAQ } from "@/components/pricing-faq"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/constants"
import { SchemaMarkup } from "@/components/schema-markup"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema"

export const metadata = {
  title: "Pricing Plans - Leadtella | Affordable AI Quiz Builder Starting at $9/month",
  description:
    "Choose the perfect plan for your business. Free plan available, Starter at $9/month, Pro lifetime deal at $97. 14-day money-back guarantee on all plans.",
  keywords:
    "leadtella pricing, quiz builder pricing, lead generation software cost, AI quiz builder plans, lifetime deal",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: "Leadtella Pricing - Affordable AI Quiz Builder Plans",
    description:
      "Choose the perfect plan for your business. Free plan available, Starter at $9/month, Pro lifetime deal at $97.",
    type: "website",
    url: "https://www.leadtella.com/pricing",
  },
}

export default function PricingPage() {
  const schemas = [
    generateWebPageSchema({
      title: "Pricing Plans - Leadtella",
      description:
        "Choose the perfect plan for your business. Free plan available, Starter at $9/month, Pro lifetime deal at $97.",
      url: `${SITE_URL}/pricing`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Pricing", url: `${SITE_URL}/pricing` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Leadtella",
      description: "AI-powered lead generation platform",
      offers: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "9",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2025-12-31",
        },
        {
          "@type": "Offer",
          name: "Pro Plan (Lifetime)",
          price: "97",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup schema={schemas} />
      <Header />
      <PricingSection />
      <PricingFAQ />
      <Footer />
    </div>
  )
}
