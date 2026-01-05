"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What's the difference between the Free and Pro plans?",
    answer:
      "The Free plan allows you to build unlimited quizzes with basic features. The Pro plan unlocks AI-powered quiz generation, advanced analytics, and more integrations to help you capture better leads.",
  },
  {
    question: "Why is the Lifetime deal so affordable right now?",
    answer:
      "We're offering a special launch price for our first 50 Lifetime users. This includes all Business plan features at 50% off. Once we reach 50 users, the price will double to reflect the full value.",
  },
  {
    question: "What happens after the 14-day free trial?",
    answer:
      "You can continue using the Free plan indefinitely with unlimited quizzes, or upgrade to Pro or Business to unlock AI features and advanced integrations. No credit card required for the trial.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes! You can upgrade your plan at any time. For downgrades, changes take effect at the end of your current billing cycle. Lifetime users have permanent access to all features.",
  },
  {
    question: "What integrations are included?",
    answer:
      "Free includes basic email capture. Pro includes 5 integrations (HubSpot, Mailchimp, etc.). Business includes unlimited integrations plus API access for custom connections.",
  },
  {
    question: "Is there a setup fee or hidden costs?",
    answer:
      "No setup fees or hidden costs. What you see is what you pay. All plans include hosting, security, and core support.",
  },
  {
    question: "What if I need more than what's offered?",
    answer:
      "We offer custom enterprise solutions for larger organizations. Contact our sales team to discuss your specific needs and get a tailored quote.",
  },
  {
    question: "How does the AI quiz generation work?",
    answer:
      "Our AI analyzes your business goals and target audience to suggest quiz questions, logic flows, and lead qualification criteria. You can customize everything or let the AI handle the heavy lifting.",
  },
]

export function PricingFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to know about our pricing and features.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="text-left text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-[#6266EA] hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
