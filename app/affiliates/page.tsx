import { AffiliateProgram } from "@/components/affiliate-program"
import { SITE_URL } from "@/lib/constants"

export const metadata = {
  title: "Affiliate Program - Leadtella | Earn 30% Commission on Quiz Builder Sales",
  description:
    "Join Leadtella's affiliate program and earn 30% recurring commission on every sale. Promote the #1 AI quiz builder and generate passive income.",
  keywords:
    "affiliate program, earn commission, leadtella affiliate, quiz builder affiliate, passive income, 30% commission",
  alternates: {
    canonical: `${SITE_URL}/affiliates`,
  },
  openGraph: {
    title: "Leadtella Affiliate Program - Earn 30% Commission",
    description: "Join our affiliate program and earn 30% recurring commission promoting the #1 AI quiz builder.",
    type: "website",
    url: "https://www.leadtella.com/affiliates",
  },
}

export default function AffiliatesPage() {
  return <AffiliateProgram />
}
