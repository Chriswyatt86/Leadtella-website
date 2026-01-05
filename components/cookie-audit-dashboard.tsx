"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Clock, Users, Shield, BarChart3 } from "lucide-react"

interface AuditMetrics {
  complianceScore: number
  totalCookies: number
  categorizedCookies: number
  consentRate: number
  lastScan: string
  issues: Array<{
    type: "warning" | "error" | "info"
    message: string
    count?: number
  }>
  trends: {
    cookieCount: { current: number; previous: number }
    complianceScore: { current: number; previous: number }
    consentRate: { current: number; previous: number }
  }
}

export function CookieAuditDashboard() {
  const [metrics, setMetrics] = useState<AuditMetrics>({
    complianceScore: 85,
    totalCookies: 12,
    categorizedCookies: 10,
    consentRate: 78,
    lastScan: new Date().toISOString(),
    issues: [
      { type: "warning", message: "Uncategorized cookies detected", count: 2 },
      { type: "info", message: "Third-party cookies found", count: 5 },
      { type: "error", message: "Insecure cookies detected", count: 1 },
    ],
    trends: {
      cookieCount: { current: 12, previous: 10 },
      complianceScore: { current: 85, previous: 82 },
      consentRate: { current: 78, previous: 75 },
    },
  })

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp className="h-4 w-4 text-primary-600" />
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <div className="h-4 w-4" />
  }

  const getTrendColor = (current: number, previous: number) => {
    if (current > previous) return "text-primary-600"
    if (current < previous) return "text-red-600"
    return "text-gray-600"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cookie Compliance Dashboard</h2>
          <p className="text-gray-600">Monitor your website's cookie compliance in real-time</p>
        </div>
        <div className="text-sm text-gray-500">Last updated: {new Date(metrics.lastScan).toLocaleString()}</div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">{metrics.complianceScore}%</div>
              {getTrendIcon(metrics.trends.complianceScore.current, metrics.trends.complianceScore.previous)}
            </div>
            <Progress value={metrics.complianceScore} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              <span
                className={getTrendColor(
                  metrics.trends.complianceScore.current,
                  metrics.trends.complianceScore.previous,
                )}
              >
                {metrics.trends.complianceScore.current > metrics.trends.complianceScore.previous ? "+" : ""}
                {metrics.trends.complianceScore.current - metrics.trends.complianceScore.previous}% from last scan
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cookies</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">{metrics.totalCookies}</div>
              {getTrendIcon(metrics.trends.cookieCount.current, metrics.trends.cookieCount.previous)}
            </div>
            <p className="text-xs text-muted-foreground">{metrics.categorizedCookies} categorized</p>
            <p className="text-xs text-muted-foreground mt-1">
              <span className={getTrendColor(metrics.trends.cookieCount.current, metrics.trends.cookieCount.previous)}>
                {metrics.trends.cookieCount.current > metrics.trends.cookieCount.previous ? "+" : ""}
                {metrics.trends.cookieCount.current - metrics.trends.cookieCount.previous} from last scan
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consent Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">{metrics.consentRate}%</div>
              {getTrendIcon(metrics.trends.consentRate.current, metrics.trends.consentRate.previous)}
            </div>
            <Progress value={metrics.consentRate} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              <span className={getTrendColor(metrics.trends.consentRate.current, metrics.trends.consentRate.previous)}>
                {metrics.trends.consentRate.current > metrics.trends.consentRate.previous ? "+" : ""}
                {metrics.trends.consentRate.current - metrics.trends.consentRate.previous}% from last period
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.issues.length}</div>
            <div className="flex flex-col space-y-1 mt-2">
              {metrics.issues
                .filter((issue) => issue && issue.type)
                .slice(0, 2)
                .map((issue, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Badge
                      variant={
                        issue.type === "error" ? "destructive" : issue.type === "warning" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {issue.type}
                    </Badge>
                    {issue.count && <span className="text-xs text-muted-foreground">{issue.count}</span>}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Issues Detail */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Issues</CardTitle>
          <CardDescription>Issues that need attention to improve your cookie compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {metrics.issues
              .filter((issue) => issue && issue.type && issue.message)
              .map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {issue.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
                    {issue.type === "warning" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                    {issue.type === "info" && <CheckCircle2 className="h-5 w-5 text-blue-500" />}
                    <div>
                      <p className="font-medium">{issue.message}</p>
                      {issue.count && <p className="text-sm text-muted-foreground">{issue.count} items affected</p>}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to maintain cookie compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2 bg-transparent">
              <BarChart3 className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Run Full Scan</div>
                <div className="text-sm text-muted-foreground">Detect all cookies on your site</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2 bg-transparent">
              <Shield className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Update Categories</div>
                <div className="text-sm text-muted-foreground">Categorize unknown cookies</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2 bg-transparent">
              <Clock className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Schedule Audit</div>
                <div className="text-sm text-muted-foreground">Set up automated scanning</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
