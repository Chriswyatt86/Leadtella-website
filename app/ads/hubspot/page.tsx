import { HubSpotAdLandingPage as HubSpotAdLandingComponent } from "@/components/hubspot-ad-landing"

export const metadata = {
  title: "HubSpot Users: Get 3x More Qualified Leads with AI Quizzes | Leadtella",
  description:
    "Stop losing 90% of your website visitors to boring HubSpot forms. AI quizzes convert 3x better and auto-sync qualified leads to your CRM. Free 14-day trial.",
  keywords:
    "HubSpot forms alternative, AI quiz builder, lead generation, qualified leads, HubSpot integration, conversion optimization",
  robots: "noindex, nofollow", // Don't index ad landing pages
}

export default function HubSpotAdLanding() {
  return <HubSpotAdLandingComponent />
}
