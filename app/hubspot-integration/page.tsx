import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HubSpotLandingPage } from "@/components/hubspot-landing-page"

export const metadata = {
  title: "HubSpot + Leadtella: AI Quiz Integration for Better Qualified Leads",
  description:
    "Transform your HubSpot lead generation with AI-powered quizzes. Automatically sync qualified leads to your CRM and email sequences. Get 3x better conversion rates than traditional forms.",
  keywords:
    "HubSpot integration, AI quiz builder, lead generation, qualified leads, CRM integration, email marketing automation, lead scoring",
  openGraph: {
    title: "HubSpot + Leadtella: AI Quiz Integration for Better Qualified Leads",
    description:
      "Transform your HubSpot lead generation with AI-powered quizzes. Get 3x better conversion rates than traditional forms.",
    type: "website",
    url: "https://www.leadtella.com/hubspot-integration",
  },
}

export default function HubSpotIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HubSpotLandingPage />
      <Footer />
    </div>
  )
}
