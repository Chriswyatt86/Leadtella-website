"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Users,
  BarChart3,
  CreditCard,
  ArrowRight,
  Wallet,
  Clock,
  Shield,
  Gift,
  MessageCircle,
} from "lucide-react"

const commissionTiers = [
  {
    referrals: "1-10",
    commission: "30%",
    description: "Perfect for getting started",
    color: "bg-green-100 text-green-800",
  },
  {
    referrals: "11-25",
    commission: "35%",
    description: "Growing your network",
    color: "bg-blue-100 text-blue-800",
  },
  {
    referrals: "26+",
    commission: "40%",
    description: "Top performer rewards",
    color: "bg-purple-100 text-purple-800",
  },
]

const features = [
  {
    icon: DollarSign,
    title: "30% Recurring Commission",
    description: "Earn 30% on every monthly payment from your referrals - forever!",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track clicks, conversions, earnings, and growth with detailed dashboards",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Get paid via PayPal, Wise, Bank Transfer, Bitcoin, or USDT",
  },
  {
    icon: Clock,
    title: "Monthly Payouts",
    description: "Automatic payments every month with $50 minimum threshold",
  },
  {
    icon: Users,
    title: "Lifetime Value",
    description: "Earn from every customer for as long as they stay subscribed",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Advanced tracking ensures you get credit for every legitimate referral",
  },
]

const paymentMethods = [
  { name: "PayPal", description: "Instant transfers worldwide" },
  { name: "Wise (Transferwise)", description: "Low-fee international transfers" },
  { name: "Bank Transfer", description: "Direct to your bank account" },
  { name: "Bitcoin", description: "Cryptocurrency payments" },
  { name: "USDT (Tether)", description: "Stable cryptocurrency option" },
]

const faqs = [
  {
    question: "How much can I earn?",
    answer:
      "You earn 30% commission on every monthly payment from your referrals. With Leadtella plans ranging from $29-$199/month, you can earn $8.70-$59.70 per customer per month, recurring for as long as they stay subscribed.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payments are processed monthly with a minimum payout threshold of $50. Once you reach the threshold, payments are automatically sent to your chosen payment method.",
  },
  {
    question: "How do I track my performance?",
    answer:
      "You get access to a comprehensive affiliate dashboard showing real-time analytics including clicks, conversions, earnings, active referrals, and growth metrics.",
  },
  {
    question: "What marketing materials do you provide?",
    answer:
      "We provide banners, email templates, social media content, and landing page copy. You'll also get your unique referral link and tracking code.",
  },
  {
    question: "Is there a limit to how much I can earn?",
    answer:
      "No limits! The more customers you refer, the more you earn. Top affiliates can earn thousands per month in recurring commissions.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Most affiliate applications are reviewed and approved within 24-48 hours. You can start sharing your link immediately, but commissions are processed after approval.",
  },
]

export function AffiliateProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2 text-lg">
            <Gift className="h-4 w-4 mr-2" />
            30% Recurring Commission
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Earn with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              Leadtella
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our affiliate program and earn <strong>30% recurring commission</strong> on every customer you refer.
            Get paid monthly with full analytics and multiple payment options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <a href="https://app.leadtella.com/register?utm_source=website&utm_medium=affiliate&utm_campaign=signup&utm_content=become_affiliate">
                Become an Affiliate
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600">Recurring Commission</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
              <div className="text-gray-600">Minimum Payout</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24-48h</div>
              <div className="text-gray-600">Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Analytics Dashboard</h2>
            <p className="text-xl text-gray-600">
              Track your performance with real-time analytics and detailed reporting
            </p>
          </div>

          <div className="relative">
            <img
              src="/affiliate-dashboard-preview.png"
              alt="Affiliate Dashboard showing earnings, clicks, conversions, and analytics"
              className="w-full rounded-lg shadow-2xl border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <img
              src="/affiliate-referral-link.png"
              alt="Referral link and commission tracking"
              className="w-full rounded-lg shadow-lg border"
            />
            <img
              src="/affiliate-payment-methods.png"
              alt="Multiple payment method options"
              className="w-full rounded-lg shadow-lg border"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Leadtella Affiliates?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed as an affiliate marketer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commission Structure</h2>
            <p className="text-xl text-gray-600">Earn more as you grow your referral network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commissionTiers.map((tier, index) => (
              <Card key={index} className="text-center border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <Badge className={`mx-auto mb-4 ${tier.color}`}>{tier.referrals} Referrals</Badge>
                  <CardTitle className="text-4xl font-bold text-purple-600 mb-2">{tier.commission}</CardTitle>
                  <CardDescription className="text-lg">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Pro Plan: ${Math.round(29 * (Number.parseInt(tier.commission) / 100))}/month</div>
                    <div>Business Plan: ${Math.round(99 * (Number.parseInt(tier.commission) / 100))}/month</div>
                    <div>Enterprise: ${Math.round(199 * (Number.parseInt(tier.commission) / 100))}/month</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Payment Options</h2>
            <p className="text-xl text-gray-600">Choose how you want to receive your commissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <Wallet className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Minimum payout:</strong> $50 • <strong>Payment frequency:</strong> Monthly
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Start earning in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your Leadtella account and navigate to the affiliate section to apply
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
              <p className="text-gray-600">
                Your application will be reviewed within 24-48 hours and you'll get your unique referral link
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Earning</h3>
              <p className="text-gray-600">
                Share your link and earn 30% recurring commission on every successful referral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of affiliates earning recurring commissions with Leadtella. Sign up today and start building
            your passive income stream.
          </p>

          <div className="flex justify-center mb-8">
            <a
              href="https://app.leadtella.com/register?utm_source=website&utm_medium=affiliate&utm_campaign=signup&utm_content=cta_bottom"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 underline hover:text-purple-700 transition-colors"
            >
              Become an Affiliate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <p className="text-sm opacity-75">
            Questions? Email us at{" "}
            <a href="mailto:affiliates@leadtella.com" className="underline">
              affiliates@leadtella.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
