import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"
import { PricingFAQ } from "@/components/pricing-faq"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Pricing Plans - Leadtella | Affordable AI Quiz Builder Starting at $9/month",
  description:
    "Choose the perfect plan for your business. Free plan available, Starter at $9/month, Pro lifetime deal at $97. 14-day money-back guarantee on all plans.",
  keywords:
    "leadtella pricing, quiz builder pricing, lead generation software cost, AI quiz builder plans, lifetime deal",
  openGraph: {
    title: "Leadtella Pricing - Affordable AI Quiz Builder Plans",
    description:
      "Choose the perfect plan for your business. Free plan available, Starter at $9/month, Pro lifetime deal at $97.",
    type: "website",
    url: "https://www.leadtella.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingSection />
      <PricingFAQ />
      <Footer />
    </div>
  )
}
