import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieScanner } from "@/components/cookie-scanner"

export const metadata = {
  title: "Cookie Scanner - Leadtella | Analyze Website Cookies & Privacy Compliance",
  description:
    "Scan your website for cookies and tracking technologies. Ensure GDPR compliance and understand what data is being collected from your visitors.",
  keywords: "cookie scanner, GDPR compliance, website privacy audit, cookie analysis, privacy compliance tool",
  openGraph: {
    title: "Leadtella Cookie Scanner - Website Privacy Analysis",
    description: "Scan your website for cookies and ensure GDPR compliance with our free privacy audit tool.",
    type: "website",
    url: "https://www.leadtella.com/cookie-scanner",
  },
}

export default function CookieScannerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CookieScanner />
      <Footer />
    </div>
  )
}
