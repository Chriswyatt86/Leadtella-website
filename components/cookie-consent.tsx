"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, Check } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("leadtella-cookie-consent")
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
    setShowBanner(false)
  }

  const handleAcceptSelected = () => {
    saveConsent(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
    setShowBanner(false)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData = {
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }
    localStorage.setItem("leadtella-cookie-consent", JSON.stringify(consentData))

    // Here you would typically initialize your analytics/marketing scripts
    // based on the user's preferences
    if (prefs.analytics) {
      // Initialize Google Analytics, etc.
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log("Marketing cookies enabled")
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional cookies enabled")
    }
  }

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    if (type === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [type]: value }))
  }

  const openCustomizeDialog = () => {
    setShowPreferences(true)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <Card className="max-w-6xl mx-auto border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">We use cookies to enhance your experience</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies and similar technologies to provide the best experience on our website. Some are
                    necessary for basic functionality, while others help us understand how you use our site and improve
                    our services.{" "}
                    <a href="/privacy" className="text-primary-600 hover:underline font-medium">
                      Learn more in our Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openCustomizeDialog}
                  className="border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
                <Button onClick={handleAcceptAll} className="bg-primary-600 hover:bg-primary-700 text-white" size="sm">
                  Accept All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cookie Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary-600" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Choose which cookies you'd like to accept. You can change these settings at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border rounded-lg bg-gray-50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Label className="font-semibold text-gray-900">Necessary Cookies</Label>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                    Always Active
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Essential for the website to function properly. These cannot be disabled as they are necessary for
                  basic website functionality and security.
                </p>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <Label className="font-semibold text-gray-900 block mb-2">Analytics Cookies</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Help us understand how visitors interact with our website by collecting and reporting information
                  anonymously. This helps us improve our service.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Used for:</strong> Google Analytics, page views, user behavior analysis
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => updatePreference("analytics", checked)}
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <Label className="font-semibold text-gray-900 block mb-2">Marketing Cookies</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Used to track visitors across websites to display relevant advertisements and measure the
                  effectiveness of our marketing campaigns.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Used for:</strong> Targeted ads, conversion tracking, remarketing
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => updatePreference("marketing", checked)}
                className="mt-1"
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <Label className="font-semibold text-gray-900 block mb-2">Functional Cookies</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Enable enhanced functionality and personalization, such as remembering your preferences and settings
                  for a better user experience.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Used for:</strong> User preferences, language settings, chat widgets
                </p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) => updatePreference("functional", checked)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowPreferences(false)} className="flex-1 sm:flex-none">
              Cancel
            </Button>
            <Button onClick={handleAcceptSelected} className="flex-1 bg-primary-600 hover:bg-primary-700">
              <Check className="h-4 w-4 mr-2" />
              Save Preferences
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            For more information about how we use cookies, please read our{" "}
            <a href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
            . You can change these settings anytime by visiting our{" "}
            <a href="/cookie-settings" className="text-primary-600 hover:underline">
              Cookie Settings
            </a>{" "}
            page.
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
