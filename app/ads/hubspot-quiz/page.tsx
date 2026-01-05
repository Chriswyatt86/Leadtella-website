import { HubSpotQuizLandingPage as HubSpotQuizLandingComponent } from "@/components/hubspot-quiz-landing"

export const metadata = {
  title: "HubSpot Users: Get 3x More Qualified Leads with AI Quizzes | Leadtella",
  description:
    "Stop losing 90% of your website visitors to boring HubSpot forms. AI quizzes convert 3x better and auto-sync qualified leads to your CRM. Take our quiz to see how.",
  keywords:
    "HubSpot forms alternative, AI quiz builder, lead generation, qualified leads, HubSpot integration, conversion optimization",
  robots: "noindex, nofollow", // Don't index ad landing pages
}

export default function HubSpotQuizLanding() {
  return <HubSpotQuizLandingComponent />
}
