"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Star,
  Play,
  Download,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export function HubSpotLandingPage() {
  const handleStartFree = () => {
    window.open(
      "https://app.leadtella.com/register?utm_source=website&utm_medium=hubspot_landing&utm_campaign=hubspot_integration&utm_content=hero_cta",
      "_blank",
    )
  }

  const handleBookDemo = () => {
    window.open("https://zcal.co/i/vat0sifj", "_blank")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Social Proof Badge */}
            <div className="text-center mb-8">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium">
                🚀 Trusted by 10,000+ HubSpot Users
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Stop Losing{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    90% of Your Website Visitors
                  </span>{" "}
                  to Boring Forms
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  HubSpot users: Transform your lead generation with AI-powered quizzes that convert
                  <strong className="text-orange-600"> 3x better than traditional forms</strong> and automatically sync
                  qualified leads to your CRM and email sequences.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>300%+ higher conversion rates</strong> vs HubSpot forms
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Automatic HubSpot sync</strong> - leads flow directly to your CRM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>AI-qualified leads</strong> with detailed insights and scoring
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={handleStartFree}
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Start Free Trial - Connect HubSpot
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm"
                    onClick={handleBookDemo}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch HubSpot Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <p className="text-sm text-gray-500">
                  ✅ No credit card required • ✅ 14-day free trial • ✅ Setup in 5 minutes
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
                  <Image
                    src="/ai-quiz-generator-modal.png"
                    alt="AI Quiz Generator Interface - Create engaging quizzes in seconds"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  300%+ Conversion Rate
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
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Your HubSpot Forms Are <span className="text-red-600">Killing Your Conversion Rates</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-red-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-red-600 rotate-180" />
                  </div>
                  <CardTitle className="text-red-700">2-5% Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Traditional HubSpot forms convert poorly because they're boring and don't engage visitors
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Unqualified Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You get basic contact info but no insights into their needs, budget, or buying intent
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Wasted Sales Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your sales team wastes hours calling unqualified leads who aren't ready to buy
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <p className="text-xl text-gray-700 font-medium">
                <strong className="text-red-600">The brutal truth:</strong> 90% of your website visitors leave without
                converting because your forms are boring, generic, and don't provide value in exchange for their
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Introducing: AI Quizzes That{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Actually Convert
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Replace your boring HubSpot forms with engaging AI-powered quizzes that provide value, qualify leads
                automatically, and sync everything to your CRM.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works (In 3 Simple Steps):</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Creates Your Quiz in 60 Seconds</h4>
                      <p className="text-gray-600">
                        Just describe your goal (like "qualify leads for my marketing agency") and our AI generates
                        engaging questions, logic, and outcomes automatically.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Visitors Take Your Interactive Quiz</h4>
                      <p className="text-gray-600">
                        Instead of filling out boring forms, visitors engage with your personalized quiz and receive
                        valuable insights or recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualified Leads Auto-Sync to HubSpot</h4>
                      <p className="text-gray-600">
                        Leads are automatically scored, qualified, and synced to your HubSpot CRM with detailed insights
                        about their needs and buying intent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">🎯 What You Get With Every Lead:</h4>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Contact information (name, email, phone)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Lead qualification score (1-100)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Detailed needs assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Budget and timeline insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Pain points and challenges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Personalized recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results from HubSpot Users</h2>
              <p className="text-xl text-gray-300">See how businesses like yours transformed their lead generation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-400 mb-2">347%</div>
                  <CardTitle className="text-white">Conversion Rate Increase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Marketing agency went from 2.1% to 9.4% conversion rate in 30 days</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                  <CardTitle className="text-white">More Qualified Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">SaaS company reduced unqualified leads by 85% using AI scoring</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$127K</div>
                  <CardTitle className="text-white">Additional Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Consulting firm generated $127K in new revenue in first quarter</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "We replaced our HubSpot forms with Leadtella quizzes and saw immediate results. Our conversion rate
                tripled, and the leads we get now are so much more qualified. Our sales team loves it!"
              </blockquote>
              <cite className="text-blue-200">— Sarah Chen, Marketing Director at TechFlow Solutions</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Replace HubSpot Forms
              </h2>
              <p className="text-xl text-gray-600">Built specifically for HubSpot users who want better results</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle>AI Quiz Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Describe your goal and AI creates engaging quizzes with smart logic and personalized outcomes in
                    seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>HubSpot Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamlessly sync qualified leads to your HubSpot CRM with detailed insights and automatic lead
                    scoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Track conversion rates, lead quality scores, and ROI with detailed analytics and reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Lead Qualification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Automatically score and qualify leads based on their quiz responses and behavior patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Personalization Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deliver personalized recommendations and outcomes based on each visitor's unique responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Download className="w-12 h-12 text-indigo-500 mb-4" />
                  <CardTitle>Easy Embedding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Embed quizzes anywhere on your website with a simple code snippet. No technical skills required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to 3x Your HubSpot Conversion Rates?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of HubSpot users who've transformed their lead generation with AI quizzes. Start your free
              trial today and see results in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleStartFree}
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Start Free Trial - Connect HubSpot Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
                onClick={handleBookDemo}
              >
                <Play className="mr-2 w-5 h-5" />
                Book HubSpot Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">✅ 14-Day Free Trial</div>
                <p className="opacity-90">No credit card required</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">⚡ 5-Minute Setup</div>
                <p className="opacity-90">Connect HubSpot instantly</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">🎯 Guaranteed Results</div>
                <p className="opacity-90">Or your money back</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
