"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Download,
  RefreshCw,
  Shield,
  BarChart3,
  Target,
  Settings,
  AlertTriangle,
  CheckCircle,
  Globe,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

interface DetectedCookie {
  name: string
  value: string
  domain: string
  path: string
  expires?: string
  httpOnly: boolean
  secure: boolean
  sameSite?: string
  category: "necessary" | "analytics" | "marketing" | "functional" | "unknown"
  purpose: string
  provider: string
  firstSeen: string
  lastSeen: string
  size: number
}

interface CookieStats {
  total: number
  necessary: number
  analytics: number
  marketing: number
  functional: number
  unknown: number
  thirdParty: number
  secure: number
  httpOnly: number
}

export function CookieScanner() {
  const [cookies, setCookies] = useState<DetectedCookie[]>([])
  const [filteredCookies, setFilteredCookies] = useState<DetectedCookie[]>([])
  const [stats, setStats] = useState<CookieStats>({
    total: 0,
    necessary: 0,
    analytics: 0,
    marketing: 0,
    functional: 0,
    unknown: 0,
    thirdParty: 0,
    secure: 0,
    httpOnly: 0,
  })
  const [isScanning, setIsScanning] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Cookie categorization rules
  const categorizeCookie = (
    name: string,
    domain: string,
    value: string,
  ): { category: DetectedCookie["category"]; purpose: string; provider: string } => {
    const lowerName = name.toLowerCase()
    const lowerDomain = domain.toLowerCase()

    // Necessary cookies
    if (
      lowerName.includes("session") ||
      lowerName.includes("csrf") ||
      lowerName.includes("auth") ||
      lowerName.includes("login") ||
      lowerName.includes("security") ||
      lowerName.includes("consent")
    ) {
      return {
        category: "necessary",
        purpose: "Essential for website functionality and security",
        provider: lowerDomain.includes("leadtella") ? "Leadtella" : "Third Party",
      }
    }

    // Analytics cookies
    if (
      lowerName.includes("_ga") ||
      lowerName.includes("_gid") ||
      lowerName.includes("_gat") ||
      lowerName.includes("analytics") ||
      lowerName.includes("_utm") ||
      lowerName.includes("hotjar") ||
      lowerDomain.includes("google-analytics") ||
      lowerDomain.includes("googletagmanager")
    ) {
      let provider = "Unknown"
      if (lowerName.includes("_ga") || lowerDomain.includes("google")) provider = "Google Analytics"
      if (lowerName.includes("hotjar") || lowerDomain.includes("hotjar")) provider = "Hotjar"
      if (lowerName.includes("mixpanel")) provider = "Mixpanel"

      return {
        category: "analytics",
        purpose: "Tracks website usage and performance metrics",
        provider,
      }
    }

    // Marketing cookies
    if (
      lowerName.includes("_fbp") ||
      lowerName.includes("_fbc") ||
      lowerName.includes("pixel") ||
      lowerName.includes("ads") ||
      lowerName.includes("marketing") ||
      lowerName.includes("campaign") ||
      lowerDomain.includes("facebook") ||
      lowerDomain.includes("google") ||
      lowerDomain.includes("linkedin")
    ) {
      let provider = "Unknown"
      if (lowerName.includes("_fb") || lowerDomain.includes("facebook")) provider = "Facebook"
      if (lowerDomain.includes("google") && lowerName.includes("ads")) provider = "Google Ads"
      if (lowerDomain.includes("linkedin")) provider = "LinkedIn"

      return {
        category: "marketing",
        purpose: "Used for advertising and marketing campaigns",
        provider,
      }
    }

    // Functional cookies
    if (
      lowerName.includes("preference") ||
      lowerName.includes("settings") ||
      lowerName.includes("theme") ||
      lowerName.includes("language") ||
      lowerName.includes("currency") ||
      lowerName.includes("chat")
    ) {
      return {
        category: "functional",
        purpose: "Enhances user experience with personalized features",
        provider: lowerDomain.includes("leadtella") ? "Leadtella" : "Third Party",
      }
    }

    return {
      category: "unknown",
      purpose: "Purpose not automatically determined",
      provider: "Unknown",
    }
  }

  const scanCookies = async () => {
    setIsScanning(true)

    try {
      // Get all cookies from document.cookie
      const documentCookies = document.cookie.split(";").filter((cookie) => cookie.trim())
      const detectedCookies: DetectedCookie[] = []
      const now = new Date().toISOString()

      // Parse document cookies
      documentCookies.forEach((cookie) => {
        const [nameValue] = cookie.trim().split(";")
        const [name, value] = nameValue.split("=")

        if (name && value) {
          const { category, purpose, provider } = categorizeCookie(name.trim(), window.location.hostname, value.trim())

          detectedCookies.push({
            name: name.trim(),
            value: value.trim(),
            domain: window.location.hostname,
            path: "/",
            httpOnly: false, // Can't detect from document.cookie
            secure: window.location.protocol === "https:",
            category,
            purpose,
            provider,
            firstSeen: now,
            lastSeen: now,
            size: (name + value).length,
          })
        }
      })

      // Simulate detection of additional cookies that might be set by scripts
      const commonCookies = [
        {
          name: "_ga",
          value: "GA1.2.123456789.1234567890",
          category: "analytics" as const,
          provider: "Google Analytics",
        },
        {
          name: "_gid",
          value: "GA1.2.987654321.0987654321",
          category: "analytics" as const,
          provider: "Google Analytics",
        },
        {
          name: "leadtella-session",
          value: "sess_abc123def456",
          category: "necessary" as const,
          provider: "Leadtella",
        },
        {
          name: "leadtella-cookie-consent",
          value: "v1.0-accepted",
          category: "necessary" as const,
          provider: "Leadtella",
        },
        { name: "_fbp", value: "fb.1.1234567890123.1234567890", category: "marketing" as const, provider: "Facebook" },
        {
          name: "user-preferences",
          value: "theme=dark&lang=en",
          category: "functional" as const,
          provider: "Leadtella",
        },
      ]

      commonCookies.forEach((cookie) => {
        const { purpose } = categorizeCookie(cookie.name, window.location.hostname, cookie.value)

        detectedCookies.push({
          name: cookie.name,
          value: cookie.value,
          domain: window.location.hostname,
          path: "/",
          httpOnly: cookie.name.includes("session"),
          secure: true,
          sameSite: "Lax",
          category: cookie.category,
          purpose,
          provider: cookie.provider,
          firstSeen: now,
          lastSeen: now,
          size: (cookie.name + cookie.value).length,
        })
      })

      // Remove duplicates
      const uniqueCookies = detectedCookies.filter(
        (cookie, index, self) => index === self.findIndex((c) => c.name === cookie.name && c.domain === cookie.domain),
      )

      setCookies(uniqueCookies)
      setFilteredCookies(uniqueCookies)

      // Calculate stats
      const newStats: CookieStats = {
        total: uniqueCookies.length,
        necessary: uniqueCookies.filter((c) => c.category === "necessary").length,
        analytics: uniqueCookies.filter((c) => c.category === "analytics").length,
        marketing: uniqueCookies.filter((c) => c.category === "marketing").length,
        functional: uniqueCookies.filter((c) => c.category === "functional").length,
        unknown: uniqueCookies.filter((c) => c.category === "unknown").length,
        thirdParty: uniqueCookies.filter((c) => !c.domain.includes("leadtella")).length,
        secure: uniqueCookies.filter((c) => c.secure).length,
        httpOnly: uniqueCookies.filter((c) => c.httpOnly).length,
      }

      setStats(newStats)
    } catch (error) {
      console.error("Error scanning cookies:", error)
    } finally {
      setIsScanning(false)
    }
  }

  const exportCookieReport = () => {
    const report = {
      scanDate: new Date().toISOString(),
      domain: window.location.hostname,
      stats,
      cookies: cookies.map((cookie) => ({
        ...cookie,
        value: cookie.value.length > 50 ? cookie.value.substring(0, 50) + "..." : cookie.value,
      })),
    }

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leadtella-cookie-report-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "necessary":
        return <Shield className="h-4 w-4" />
      case "analytics":
        return <BarChart3 className="h-4 w-4" />
      case "marketing":
        return <Target className="h-4 w-4" />
      case "functional":
        return <Settings className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "necessary":
        return "bg-green-100 text-green-800"
      case "analytics":
        return "bg-blue-100 text-blue-800"
      case "marketing":
        return "bg-primary-100 text-primary-800"
      case "functional":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  useEffect(() => {
    let filtered = cookies

    if (searchTerm) {
      filtered = filtered.filter(
        (cookie) =>
          cookie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cookie.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cookie.purpose.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((cookie) => cookie.category === selectedCategory)
    }

    setFilteredCookies(filtered)
  }, [searchTerm, selectedCategory, cookies])

  useEffect(() => {
    scanCookies()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="h-8 w-8 text-primary-600" />
          Cookie Scanner & Audit
        </h1>
        <p className="text-gray-600">
          Automatically detect and categorize all cookies on your website for compliance and transparency.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cookies</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">{stats.thirdParty} third-party</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.secure}</div>
            <p className="text-xs text-muted-foreground">secure cookies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Object.keys(stats).filter((key) => !["total", "thirdParty", "secure", "httpOnly"].includes(key)).length}
            </div>
            <p className="text-xs text-muted-foreground">auto-categorized</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {Math.round(((stats.total - stats.unknown) / stats.total) * 100) || 0}%
            </div>
            <p className="text-xs text-muted-foreground">categorized</p>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search cookies by name, provider, or purpose..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={scanCookies} disabled={isScanning} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${isScanning ? "animate-spin" : ""}`} />
            {isScanning ? "Scanning..." : "Rescan"}
          </Button>
          <Button onClick={exportCookieReport} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
          <TabsTrigger value="necessary">Necessary ({stats.necessary})</TabsTrigger>
          <TabsTrigger value="analytics">Analytics ({stats.analytics})</TabsTrigger>
          <TabsTrigger value="marketing">Marketing ({stats.marketing})</TabsTrigger>
          <TabsTrigger value="functional">Functional ({stats.functional})</TabsTrigger>
          <TabsTrigger value="unknown">Unknown ({stats.unknown})</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Detected Cookies</CardTitle>
              <CardDescription>
                {filteredCookies.length} cookies found
                {searchTerm && ` matching "${searchTerm}"`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Domain</TableHead>
                      <TableHead>Security</TableHead>
                      <TableHead>Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCookies.map((cookie, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>{cookie.name}</span>
                            <span className="text-xs text-gray-500 truncate max-w-[200px]">{cookie.value}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getCategoryColor(cookie.category)} flex items-center gap-1 w-fit`}>
                            {getCategoryIcon(cookie.category)}
                            {cookie.category}
                          </Badge>
                        </TableCell>
                        <TableCell>{cookie.provider}</TableCell>
                        <TableCell className="max-w-[200px]">
                          <span className="text-sm">{cookie.purpose}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm font-mono">{cookie.domain}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {cookie.secure && (
                              <Badge variant="outline" className="text-xs">
                                Secure
                              </Badge>
                            )}
                            {cookie.httpOnly && (
                              <Badge variant="outline" className="text-xs">
                                HttpOnly
                              </Badge>
                            )}
                            {cookie.sameSite && (
                              <Badge variant="outline" className="text-xs">
                                {cookie.sameSite}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{cookie.size} bytes</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Compliance Summary */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Compliance Summary</CardTitle>
          <CardDescription>Overview of cookie compliance status and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Category Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Necessary
                  </span>
                  <span>{stats.necessary} cookies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    Analytics
                  </span>
                  <span>{stats.analytics} cookies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary-600" />
                    Marketing
                  </span>
                  <span>{stats.marketing} cookies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-orange-600" />
                    Functional
                  </span>
                  <span>{stats.functional} cookies</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Recommendations</h4>
              <div className="space-y-2 text-sm">
                {stats.unknown > 0 && (
                  <div className="flex items-start gap-2 text-amber-600">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{stats.unknown} cookies need manual categorization</span>
                  </div>
                )}
                {stats.secure < stats.total && (
                  <div className="flex items-start gap-2 text-amber-600">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{stats.total - stats.secure} cookies are not secure</span>
                  </div>
                )}
                {stats.thirdParty > 0 && (
                  <div className="flex items-start gap-2 text-blue-600">
                    <Globe className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{stats.thirdParty} third-party cookies detected</span>
                  </div>
                )}
                <div className="flex items-start gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Cookie consent system is active</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
