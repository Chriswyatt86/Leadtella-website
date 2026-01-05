"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HubSpotQuizLandingPage() {
  const handleStartQuiz = () => {
    try {
      const quizElement = document.getElementById("leadtella-quiz")
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.log("Scroll error:", error)
    }
  }

  const handleBookDemo = () => {
    try {
      if (typeof window !== "undefined") {
        window.open("https://zcal.co/i/vat0sifj", "_blank")
      }
    } catch (error) {
      console.log("Demo error:", error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header CTA */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-medium">🔥 Take Our Quiz: See How Much Revenue You're Losing</span>
          <Button size="sm" className="bg-white text-red-600 hover:bg-gray-100 font-bold" onClick={handleStartQuiz}>
            Start Quiz
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
                ⚡ HUBSPOT USERS: Take Our 2-Minute Assessment
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Discover How Much{" "}
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Revenue You're Losing
                  </span>{" "}
                  to Boring HubSpot Forms
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>HubSpot User?</strong> Take our 2-minute assessment to discover exactly how much revenue
                  you're losing with boring forms - and see how AI quizzes can{" "}
                  <strong className="text-red-600">increase your conversions by 347%</strong>.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <span className="text-gray-600 font-medium">4.9/5 from 2,847+ HubSpot users</span>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 text-purple-500 flex-shrink-0">🎯</span>
                    <span className="text-lg text-gray-700">
                      <strong>Get your personalized revenue loss report</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 text-green-500 flex-shrink-0">✅</span>
                    <span className="text-lg text-gray-700">
                      <strong>See exactly how AI quizzes work</strong> (live demo)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 text-blue-500 flex-shrink-0">⚡</span>
                    <span className="text-lg text-gray-700">
                      <strong>Get custom HubSpot integration plan</strong>
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4 mb-6">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
                    onClick={handleStartQuiz}
                  >
                    🎯 TAKE THE 2-MINUTE ASSESSMENT →
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-gray-400 hover:border-gray-600 px-8 py-4 text-lg font-semibold bg-transparent"
                    onClick={handleBookDemo}
                  >
                    ▶️ Skip Quiz - Book Demo Instead
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-6 text-sm text-purple-700 font-medium">
                    <span>✅ 2 Minutes Only</span>
                    <span>✅ Personalized Results</span>
                    <span>✅ No Email Required</span>
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
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Live Demo
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  2-Min Quiz
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="leadtella-quiz" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Personalized{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Revenue Assessment
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Answer a few questions to discover your revenue potential with AI quizzes
              </p>
            </div>

            {/* Leadtella Quiz Embed */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-purple-200">
              <iframe
                src="https://app.leadtella.com/embed/98"
                width="100%"
                height="600px"
                frameBorder="0"
                style={{ border: "none", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                allow="fullscreen"
                title="HubSpot Revenue Assessment Quiz"
              />
            </div>

            {/* Quiz Benefits */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized Report</h3>
                <p className="text-gray-600">Get your custom revenue loss calculation</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">HubSpot Integration</h3>
                <p className="text-gray-600">See how to connect with your existing setup</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Action Plan</h3>
                <p className="text-gray-600">Get step-by-step implementation guide</p>
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
                Why HubSpot Users Are <span className="text-red-600">Switching to AI Quizzes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-red-600 mb-2">2-5%</div>
                  <CardTitle className="text-red-700">HubSpot Form Conversion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Boring forms that visitors ignore and abandon</p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-600 mb-2">15-25%</div>
                  <CardTitle className="text-green-700">AI Quiz Conversion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Engaging quizzes that provide value and insights</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600 mb-2">347%</div>
                  <CardTitle className="text-purple-700">Average Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Typical conversion rate increase for our users</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold shadow-xl"
                onClick={handleStartQuiz}
              >
                🎯 SCROLL UP TO TAKE THE ASSESSMENT →
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
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "The quiz showed us exactly how much revenue we were losing. After implementing Leadtella, our HubSpot
                pipeline tripled in quality leads. Best decision we made this year!"
              </blockquote>
              <cite className="text-blue-200 font-medium">— Sarah Chen, Marketing Director at TechFlow Solutions</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Stop Losing Revenue to Boring Forms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take our 2-minute assessment above to discover your exact revenue potential with AI quizzes. Get your
              personalized report and HubSpot integration plan.
            </p>

            <div className="bg-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">👆 Complete the assessment above to get your results!</h3>
              <p className="text-lg opacity-90">
                Your personalized revenue report and HubSpot integration plan are waiting.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">🎯 Personalized</div>
                <p className="text-sm opacity-90">Custom revenue report</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">⚡ 2 Minutes</div>
                <p className="text-sm opacity-90">Quick assessment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">🔗 HubSpot Ready</div>
                <p className="text-sm opacity-90">Integration included</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-bold">📞 Expert Support</div>
                <p className="text-sm opacity-90">Free setup help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
