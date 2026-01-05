"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Crown, Gift, Star } from "lucide-react"
import { useState } from "react"

// Plans with your actual Stripe price IDs
const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and getting started",
    features: [
      "1 active quiz",
      "Integration with HubSpot",
      "Up to 100 responses per month",
      "Basic reporting",
      "Email support",
    ],
    limitations: ["No commercial use", "No advanced integrations", "No custom branding", "No priority support"],
    cta: "Get Started Free",
    popular: false,
    isLifetime: false,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: "$9",
    annualPrice: "$7",
    monthlyTotal: "9",
    annualTotal: "84",
    period: "per month",
    description: "Perfect for small businesses and growing teams",
    features: [
      "Everything in Free",
      "Advanced AI quiz generation",
      "Advanced form builder",
      "Full lead capture",
      "Advanced analytics",
      "Email support",
      "Standard integrations",
      "Custom branding",
      "Commercial use",
    ],
    limitations: [],
    cta: "Start Pro Plan",
    popular: true,
    isLifetime: false,
    monthlyStripeId: "price_1RZfUQGfNUEZYaq802gmq76x",
    annualStripeId: "price_1RZfUmGfNUEZYaq8eXSCMvGX",
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: "$29",
    annualPrice: "$24",
    monthlyTotal: "29",
    annualTotal: "288",
    period: "per month",
    description: "Everything you need for commercial lead generation at scale",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced analytics & reporting",
      "Unlimited integrations",
      "White-label solution",
      "Priority support",
      "API access",
      "Team collaboration",
      "A/B testing",
      "Custom onboarding",
    ],
    limitations: [],
    cta: "Start Business Plan",
    popular: false,
    isLifetime: false,
    monthlyStripeId: "price_1RawlSGfNUEZYaq8G3Vq2OjQ",
    annualStripeId: "price_1Rb4OoGfNUEZYaq8vLuE4c3Q",
  },
  {
    id: "lifetime",
    name: "Lifetime Deal",
    price: "$97",
    originalPrice: "$194",
    period: "one-time payment",
    description: "Get Business plan features forever with our exclusive lifetime deal",
    features: [
      "Everything in Business Plan",
      "Lifetime access - no recurring fees",
      "All future updates included",
      "Priority support forever",
      "Commercial license included",
      "White-label rights",
      "API access",
      "Unlimited team members",
      "Advanced analytics & reporting",
    ],
    limitations: [],
    cta: "🔥 Claim Lifetime Deal",
    popular: false,
    isLifetime: true,
    limitedOffer: true,
    stripeProductId: "price_1RZfTwGfNUEZYaq8FHcerTW8",
  },
]

function getIcon(planId: string) {
  switch (planId) {
    case "free":
      return <Gift className="h-6 w-6 text-[#6266EA]" />
    case "pro":
      return <Zap className="h-6 w-6 text-[#6266EA]" />
    case "business":
      return <Crown className="h-6 w-6 text-[#6266EA]" />
    case "lifetime":
      return <Star className="h-6 w-6 text-yellow-600" />
    default:
      return <Gift className="h-6 w-6 text-[#6266EA]" />
  }
}

async function handleCheckout(plan: any, billingCycle: string) {
  try {
    console.log("Starting checkout for:", plan.name, billingCycle)

    // All plans redirect to registration with UTM tracking
    const baseUrl = "https://app.leadtella.com/register"
    const utmParams = new URLSearchParams({
      utm_source: "website",
      utm_medium: "pricing",
      utm_campaign: "signup",
      utm_content: `${plan.id}_${billingCycle}`,
      plan: plan.id,
      billing: billingCycle,
    })

    // Add price ID for paid plans
    if (plan.isLifetime) {
      utmParams.append("price_id", plan.stripeProductId)
    } else if (plan.id !== "free") {
      const priceId = billingCycle === "monthly" ? plan.monthlyStripeId : plan.annualStripeId
      if (priceId) {
        utmParams.append("price_id", priceId)
      }
    }

    const redirectUrl = `${baseUrl}?${utmParams.toString()}`
    window.location.href = redirectUrl
  } catch (error) {
    console.error("Redirect failed:", error)
    alert("Redirect failed. Please try again.")
  }
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)

  const handlePlanClick = async (plan: any) => {
    setLoadingPlan(plan.id)
    await handleCheckout(plan, billingCycle)
    setLoadingPlan(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to transform your lead generation. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5" />
              <span className="font-semibold">🔥 LIFETIME DEAL - Limited Time Only!</span>
            </div>
            <p className="text-sm">
              Get Business plan features forever at 50% off! <strong>42 spots remaining</strong> - Price doubles after
              50 users!
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "bg-[#6266EA] text-white" : "text-gray-600 hover:text-[#6266EA]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annual" ? "bg-[#6266EA] text-white" : "text-gray-600 hover:text-[#6266EA]"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {plans.map((plan) => {
            const currentPrice = plan.isLifetime
              ? plan.price
              : billingCycle === "monthly"
                ? plan.monthlyPrice
                : plan.annualPrice

            const currentTotal = billingCycle === "monthly" ? plan.monthlyTotal : plan.annualTotal
            const isLoading = loadingPlan === plan.id

            return (
              <Card
                key={plan.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.isLifetime
                    ? "border-yellow-500 shadow-2xl scale-105 bg-gradient-to-br from-yellow-50 to-yellow-100"
                    : plan.popular
                      ? "border-[#6266EA] shadow-lg scale-105"
                      : "border-gray-200 hover:border-[#A5A8F7]"
                }`}
              >
                {/* Fixed Badge Positioning */}
                {plan.isLifetime && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg text-sm font-semibold whitespace-nowrap">
                      🏆 LIFETIME DEAL
                    </Badge>
                  </div>
                )}
                {plan.popular && !plan.isLifetime && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="px-3 py-1.5 bg-[#6266EA] text-white shadow-lg text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                {plan.limitedOffer && (
                  <div className="absolute -top-3 -right-2 z-10">
                    <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-semibold shadow-lg">
                      Limited Offer
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <div
                    className={`w-12 h-12 ${plan.isLifetime ? "bg-yellow-100" : "bg-[#F0F0FE]"} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    {getIcon(plan.id)}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>

                  <div className="mt-6">
                    {plan.name === "Free" ? (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">$0</span>
                        <span className="text-gray-600 ml-2">forever</span>
                      </div>
                    ) : plan.isLifetime ? (
                      <div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-4xl font-bold text-yellow-600">{plan.price}</span>
                          {plan.originalPrice && (
                            <span className="text-xl text-gray-400 line-through">{plan.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-1">one-time payment</p>
                        <p className="text-sm font-medium mt-2 text-yellow-600">🏆 LIFETIME ACCESS - 50% OFF!</p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-4xl font-bold text-gray-900">{currentPrice}</span>
                          <div className="text-left">
                            <div className="text-gray-600 text-sm">per month</div>
                            {billingCycle === "annual" && (
                              <div className="text-green-600 text-xs font-medium">billed annually</div>
                            )}
                          </div>
                        </div>
                        {billingCycle === "annual" && currentTotal && (
                          <p className="text-sm text-gray-500 mt-2">${currentTotal} billed annually</p>
                        )}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    onClick={() => handlePlanClick(plan)}
                    disabled={isLoading}
                    className={`w-full mb-6 ${
                      plan.isLifetime
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg"
                        : plan.popular
                          ? "bg-[#6266EA] hover:bg-[#4F52E0] text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    size="lg"
                  >
                    {isLoading ? "Processing..." : plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-900">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={`limitation-${limitationIndex}`} className="flex items-center">
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include our core features: responsive quizzes, lead capture, and basic analytics.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom solution?{" "}
            <a href="#" className="text-[#6266EA] hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
