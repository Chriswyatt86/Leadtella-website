import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leadtella - AI Lead Capture Quiz Builder",
  description:
    "Transform website visitors into qualified leads with AI-powered quizzes. Boost sales and grow your business with intelligent lead capture.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  other: {
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Security Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Google Analytics - Global Site Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GERZ7GPQ56"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GERZ7GPQ56', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          {children}
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  )
}
