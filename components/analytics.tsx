"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      // Track page views on route changes
      window.gtag("config", "G-GERZ7GPQ56", {
        page_path: pathname + (searchParams.toString() ? "?" + searchParams.toString() : ""),
        page_title: document.title,
        page_location: window.location.href,
      })

      // Track custom events based on page type
      if (pathname.includes("/blog/")) {
        window.gtag("event", "page_view", {
          event_category: "blog",
          event_label: pathname,
          custom_parameter_1: "blog_content",
        })
      } else if (pathname === "/pricing") {
        window.gtag("event", "page_view", {
          event_category: "conversion",
          event_label: "pricing_page",
          custom_parameter_1: "pricing_funnel",
        })
      } else if (pathname === "/") {
        window.gtag("event", "page_view", {
          event_category: "landing",
          event_label: "homepage",
          custom_parameter_1: "homepage_visit",
        })
      }
    }
  }, [pathname, searchParams])

  return null
}

// Helper functions for tracking specific events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, parameters)
  }
}

export const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      event_category: "conversion",
      event_label: conversionType,
      value: value || 1,
    })
  }
}

export const trackQuizStart = (quizType: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "quiz_start", {
      event_category: "engagement",
      event_label: quizType,
      custom_parameter_2: quizType,
    })
  }
}

export const trackSignup = (source: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "sign_up", {
      event_category: "conversion",
      event_label: source,
      custom_parameter_1: source,
    })
  }
}
