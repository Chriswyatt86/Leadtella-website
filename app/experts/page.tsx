import { ExpertsShowcase } from "@/components/experts-showcase"

export const metadata = {
  title: "Meet Our Experts - Leadtella | Lead Generation & Marketing Specialists",
  description:
    "Meet our team of lead generation experts and marketing specialists. Decades of combined experience in quiz marketing, conversion optimization, and AI-powered lead capture.",
  keywords: "lead generation experts, marketing specialists, quiz marketing experts, conversion optimization team",
  openGraph: {
    title: "Leadtella Experts - Lead Generation & Marketing Specialists",
    description: "Meet our team of experts with decades of experience in lead generation and marketing automation.",
    type: "website",
    url: "https://www.leadtella.com/experts",
  },
}

export default function ExpertsPage() {
  return <ExpertsShowcase />
}
