import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieSettings } from "@/components/cookie-settings"

export const metadata = {
  title: "Cookie Settings - Leadtella | Manage Your Cookie Preferences",
  description:
    "Manage your cookie preferences and privacy settings for Leadtella. Control which cookies are stored and how your data is used.",
  keywords: "cookie settings, privacy preferences, cookie management, GDPR compliance",
  openGraph: {
    title: "Leadtella Cookie Settings - Manage Your Privacy",
    description: "Control your cookie preferences and privacy settings for the best experience.",
    type: "website",
    url: "https://www.leadtella.com/cookie-settings",
  },
}

export default function CookieSettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CookieSettings />
      <Footer />
    </div>
  )
}
