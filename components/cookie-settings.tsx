"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Cookie, Save, RotateCcw } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })
  const [lastSaved, setLastSaved] = useState<string | null>(null)

  useEffect(() => {
    // Load existing preferences
    const consent = localStorage.getItem("leadtella-cookie-consent")
    if (consent) {
      try {
        const data = JSON.parse(consent)
        setPreferences(data.preferences)
        setLastSaved(data.timestamp)
      } catch (error) {
        console.error("Error loading cookie preferences:", error)
      }
    }
  }, [])

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    if (type === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [type]: value }))
  }

  const savePreferences = () => {
    const consentData = {
      preferences,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }
    localStorage.setItem("leadtella-cookie-consent", JSON.stringify(consentData))
    setLastSaved(consentData.timestamp)

    // Reload page to apply new cookie settings
    window.location.reload()
  }

  const resetToDefaults = () => {
    const defaults = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(defaults)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Cookie className="h-8 w-8 text-primary-600" />
          Cookie Settings
        </h1>
        <p className="text-gray-600">
          Manage your cookie preferences for Leadtella. Changes will take effect immediately after saving.
        </p>
        {lastSaved && (
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date(lastSaved).toLocaleString()}</p>
        )}
      </div>

      <div className="space-y-6">
        {/* Necessary Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  Necessary Cookies
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Required</span>
                </CardTitle>
                <CardDescription>
                  Essential for the website to function properly. These cannot be disabled.
                </CardDescription>
              </div>
              <Switch checked={true} disabled />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              These cookies are necessary for basic website functionality, security, and to remember your login status.
              They include session cookies, security tokens, and accessibility preferences.
            </p>
          </CardContent>
        </Card>

        {/* Analytics Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Analytics Cookies</CardTitle>
                <CardDescription>Help us understand how visitors interact with our website.</CardDescription>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => updatePreference("analytics", checked)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              These cookies collect information about how you use our website, such as which pages you visit most often
              and if you get error messages. This data helps us improve our website performance and user experience.
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <strong>Services:</strong> Google Analytics, Hotjar, Internal Analytics
            </div>
          </CardContent>
        </Card>

        {/* Marketing Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Marketing Cookies</CardTitle>
                <CardDescription>
                  Used to deliver relevant advertisements and measure campaign effectiveness.
                </CardDescription>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => updatePreference("marketing", checked)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              These cookies track your browsing habits to show you relevant advertisements on other websites. They also
              help us measure the effectiveness of our advertising campaigns and understand which marketing channels
              work best.
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <strong>Services:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag
            </div>
          </CardContent>
        </Card>

        {/* Functional Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Functional Cookies</CardTitle>
                <CardDescription>Enable enhanced functionality and personalization features.</CardDescription>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) => updatePreference("functional", checked)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              These cookies enable enhanced functionality such as remembering your preferences, language settings, and
              providing personalized content. They improve your user experience but are not essential for basic website
              operation.
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <strong>Services:</strong> User Preferences, Chat Widgets, Personalization Engine
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button onClick={savePreferences} className="bg-primary-600 hover:bg-primary-700 text-white">
          <Save className="h-4 w-4 mr-2" />
          Save Preferences
        </Button>
        <Button onClick={resetToDefaults} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Defaults
        </Button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Need More Information?</h3>
        <p className="text-sm text-gray-600">
          For detailed information about how we collect, use, and protect your data, please read our{" "}
          <a href="/privacy" className="text-primary-600 hover:underline font-medium">
            Privacy Policy
          </a>
          . If you have questions about our cookie practices, contact us at{" "}
          <a href="mailto:privacy@leadtella.com" className="text-primary-600 hover:underline">
            privacy@leadtella.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
