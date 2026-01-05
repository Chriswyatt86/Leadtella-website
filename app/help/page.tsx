import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCenter } from "@/components/help-center"

export const metadata = {
  title: "Help Center - Leadtella | Quiz Builder Support & Documentation",
  description:
    "Get help with Leadtella's AI quiz builder. Find tutorials, troubleshooting guides, and answers to frequently asked questions about lead generation quizzes.",
  keywords: "leadtella help, quiz builder support, lead generation help, tutorial, documentation, FAQ",
  openGraph: {
    title: "Leadtella Help Center - Quiz Builder Support",
    description: "Get help with Leadtella's AI quiz builder. Tutorials, guides, and FAQ for lead generation success.",
    type: "website",
    url: "https://www.leadtella.com/help",
  },
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HelpCenter />
      <Footer />
    </div>
  )
}
