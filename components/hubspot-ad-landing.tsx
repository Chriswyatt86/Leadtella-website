"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Star, Play, Sparkles } from "lucide-react"
import Image from "next/image"

export function HubSpotAdLandingPage() {
  const handleStartFree = () => {
    // Track conversion safely
    try {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-XXXXXXXXX/XXXXXXXXX",
          event_category: "Ad Landing",
          event_label: "HubSpot Free Account",
        })
      }
    } catch (error) {
      console.log("Tracking error:", error)
    }

    if (typeof window !== "undefined") {
      window.open(
        "https://app.leadtella.com/register?utm_source=google_ads&utm_medium=cpc&utm_campaign=hubspot_users&utm_content=hero_cta&utm_term=hubspot_forms",
        "_blank",
      )
    }
  }

  const handleBookDemo = () => {
    // Track demo booking safely
    try {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "generate_lead", {
          event_category: "Ad Landing",
          event_label: "HubSpot Demo Request",
        })
      }
    } catch (error) {
      console.log("Tracking error:", error)
    }

    if (typeof window !== "undefined") {
      window.open(
        "https://zcal.co/i/vat0sifj?utm_source=google_ads&utm_medium=cpc&utm_campaign=hubspot_users&utm_content=demo_cta",
        "_blank",
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header CTA */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-medium">🔥 Limited Time: Free Account + HubSpot Setup</span>
          <Button size="sm" className="bg-white text-red-600 hover:bg-gray-100 font-bold" onClick={handleStartFree}>
            Claim Now
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Urgency Banner */}
            <div className="text-center mb-6">
              <Badge className="bg-red-100 text-red-800 border-red-200 px-6 py-2 text-sm font-bold">
                ⚡ HUBSPOT USERS ONLY: Limited Time Offer
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Your HubSpot Forms Are{" "}
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Losing You $10,000s
                  </span>{" "}
                  in Revenue Every Month
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>HubSpot User?</strong> Stop watching 90% of your website visitors leave without converting.
                  Replace boring forms with AI quizzes that convert{" "}
                  <strong className="text-red-600">347% better</strong> and automatically sync qualified leads to your
                  HubSpot CRM.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9/5 from 2,847+ HubSpot users</span>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>347% higher conversion rates</strong> than HubSpot forms
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Auto-sync to HubSpot</strong> with lead scoring & insights
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Setup in 5 minutes</strong> - No coding required
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4 mb-6">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
                    onClick={handleStartFree}
                  >
                    <Sparkles className="mr-3 w-6 h-6" />
                    START FREE ACCOUNT - CONNECT HUBSPOT NOW
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-gray-400 hover:border-gray-600 px-8 py-4 text-lg font-semibold"
                    onClick={handleBookDemo}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch 2-Min Demo (See Real Results)
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-6 text-sm text-green-700 font-medium">
                    <span>✅ No Credit Card</span>
                    <span>✅ Free Account</span>
                    <span>✅ Setup in 5 minutes</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-200">
                  <Image
                    src="/ai-quiz-generator-modal.png"
                    alt="AI Quiz Generator - Create HubSpot lead generation quizzes in 60 seconds"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  347% Better
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  5-Min Setup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The <span className="text-red-600">Brutal Truth</span> About Your HubSpot Forms
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-red-600 mb-2">2-5%</div>
                  <CardTitle className="text-red-700">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your HubSpot forms convert poorly because they're boring and generic</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                  <CardTitle className="text-red-700">Visitors Leave</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Without converting because forms don't provide value or engagement</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                  <CardTitle className="text-red-700">Unqualified Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your sales team wastes time on leads with no buying intent</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800">
                <strong className="text-red-600">Reality Check:</strong> If you're getting 1,000 website visitors per
                month and only converting 2-3%, you're losing 970+ potential customers. At an average customer value of
                $2,000, that's <strong className="text-red-600">$1.94 MILLION in lost revenue annually.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Solution: AI Quizzes That{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Actually Convert
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Replace your boring HubSpot forms with engaging AI-powered quizzes that provide value, qualify leads
                automatically, and sync everything to your CRM.
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-700 text-xl">❌ Your Current HubSpot Forms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                    <span className="text-gray-700">2-5% conversion rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Generic, boring questions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                    <span className="text-gray-700">No lead qualification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Basic contact info only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                    <span className="text-gray-700">No personalization</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-green-700 text-xl">✅ Leadtella AI Quizzes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">15-25% conversion rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Engaging, interactive experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Automatic lead scoring (1-100)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Detailed needs assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Personalized recommendations</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold shadow-xl"
                onClick={handleStartFree}
              >
                <Zap className="mr-3 w-6 h-6" />
                TRANSFORM MY HUBSPOT FORMS NOW
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Real Results from HubSpot Users Like You</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-400 mb-4">347%</div>
                <h3 className="text-xl font-bold mb-2">Conversion Increase</h3>
                <p className="text-gray-300">Marketing agency went from 2.1% to 9.4% in 30 days</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <div className="text-5xl font-bold text-blue-400 mb-4">$127K</div>
                <h3 className="text-xl font-bold mb-2">New Revenue</h3>
                <p className="text-gray-300">Generated in first quarter using AI quizzes</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <div className="text-5xl font-bold text-purple-400 mb-4">85%</div>
                <h3 className="text-xl font-bold mb-2">Better Lead Quality</h3>
                <p className="text-gray-300">Reduction in unqualified leads with AI scoring</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "We replaced our HubSpot forms with Leadtella quizzes and tripled our conversion rate overnight. The
                leads are so much more qualified - our sales team is closing 60% more deals!"
              </blockquote>
              <cite className="text-blue-200 font-medium">— Sarah Chen, Marketing Director at TechFlow Solutions</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Lose Another $10,000 This Month to Boring Forms
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 10,000+ HubSpot users who've transformed their lead generation. Start your free account now and see
              results in 24 hours - or get your money back.
            </p>

            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 mb-8"
              onClick={handleStartFree}
            >
              <Sparkles className="mr-3 w-7 h-7" />
              START FREE ACCOUNT - CONNECT HUBSPOT NOW
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">✅ Free Account</div>
                <p className="text-sm opacity-90">No credit card required</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">⚡ 5-Minute Setup</div>
                <p className="text-sm opacity-90">Connect HubSpot instantly</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">🎯 Guaranteed Results</div>
                <p className="text-sm opacity-90">Or your money back</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">📞 Expert Support</div>
                <p className="text-sm opacity-90">Free setup assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
