import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions - Leadtella | Service Agreement & User Terms",
  description:
    "Read Leadtella's terms of service, including pricing policies, refund guarantees, and user agreements for our AI quiz builder platform.",
  keywords: "terms of service, user agreement, leadtella terms, service conditions, pricing policy",
  openGraph: {
    title: "Leadtella Terms and Conditions - Service Agreement",
    description: "Read our terms of service, pricing policies, and user agreements for the AI quiz builder platform.",
    type: "website",
    url: "https://www.leadtella.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Leadtella ("Service," "Platform," "we," "us," or "our"), you accept and agree to be
              bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Leadtella is an AI-powered lead capture quiz builder that helps businesses create interactive quizzes to
              generate qualified leads, recommend products, and book sales calls. Our platform includes quiz building
              tools, lead management, analytics, and third-party integrations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration and Security</h2>
            <p className="text-muted-foreground mb-4">
              You must provide accurate and complete information when creating an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Pricing and Payment Terms</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Plan Types</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>
                <strong>Free Plan:</strong> Limited to 3 quizzes with basic features
              </li>
              <li>
                <strong>Starter Plan:</strong> $9/month with AI features and unlimited quizzes
              </li>
              <li>
                <strong>Pro Plan:</strong> Lifetime ($97) or Annual ($99) with advanced features
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Pricing Lock Guarantee</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-muted-foreground">
                <strong>Important:</strong> If you have an active paid account, your pricing is locked in forever, even
                if we increase prices for new customers. This pricing lock applies to your current plan level and
                features.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Lifetime Plan Guarantee</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-muted-foreground">
                <strong>Lifetime Plan Disclaimer:</strong> "Lifetime" access is guaranteed for a minimum of one (1) year
                from purchase date. In the unlikely event that Leadtella discontinues operations, lifetime users will
                receive a minimum of 30 days notice and assistance with data export.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.4 Future Upgrades and Add-ons</h3>
            <p className="text-muted-foreground mb-4">
              We may introduce premium features, add-ons, or upgraded tiers in the future. These will be offered as
              optional purchases and will not affect your existing plan benefits or pricing lock.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.5 Payment Processing</h3>
            <p className="text-muted-foreground mb-4">
              Payments are processed securely through third-party payment processors. Subscription fees are billed in
              advance and are non-refundable except as required by law or as specified in our refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Policy</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>
                <strong>14-Day Money-Back Guarantee:</strong> New customers can request a full refund within 14 days of
                their first purchase
              </li>
              <li>
                <strong>Lifetime Plans:</strong> 30-day money-back guarantee from purchase date
              </li>
              <li>
                <strong>Monthly Subscriptions:</strong> No refunds for partial months, but you can cancel anytime
              </li>
              <li>
                <strong>Annual Plans:</strong> Prorated refunds available within first 30 days
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Acceptable Use Policy</h2>
            <p className="text-muted-foreground mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Create content that is illegal, harmful, or violates others' rights</li>
              <li>Spam, harass, or engage in fraudulent activities</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Create quizzes for adult content, gambling, or illegal activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-4">
              You retain ownership of the content you create using our Service. We retain ownership of the Leadtella
              platform, software, and related intellectual property. You grant us a license to host, store, and process
              your content to provide the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Data and Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Your use of the Service is also governed by our Privacy Policy. We are committed to protecting your data
              and providing tools for data export and deletion upon request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Service Availability and Modifications</h2>
            <p className="text-muted-foreground mb-4">
              We strive to maintain high service availability but cannot guarantee 100% uptime. We reserve the right to
              modify, suspend, or discontinue features with reasonable notice to users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Disclaimers and Limitations of Liability</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Service Disclaimers</h3>
              <p className="text-muted-foreground mb-2">
                <strong>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong> We disclaim all
                warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Accuracy or reliability of AI-generated content</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security of data transmission</li>
                <li>Specific lead generation or conversion results</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">10.2 AI Content Disclaimer</h3>
            <p className="text-muted-foreground mb-4">
              Our AI-powered features are tools to assist in quiz creation. You are responsible for reviewing and
              approving all AI-generated content before publication. We do not guarantee the accuracy, appropriateness,
              or effectiveness of AI-generated suggestions.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">10.3 Results Disclaimer</h3>
            <p className="text-muted-foreground mb-4">
              While our platform is designed to help improve lead generation, we make no guarantees about specific
              results, conversion rates, or business outcomes. Success depends on many factors including your industry,
              target audience, and marketing strategy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">10.4 Limitation of Liability</h3>
            <p className="text-muted-foreground mb-4">
              <strong>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID FOR THE SERVICE
                IN THE 12 MONTHS PRECEDING THE CLAIM.
              </strong>{" "}
              We shall not be liable for indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of
              the Service, violation of these terms, or infringement of any rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate this agreement at any time. Upon termination, your access to paid features will
              cease, but you may export your data. We reserve the right to terminate accounts that violate these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law and Disputes</h2>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding
              arbitration or in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update these terms periodically. Significant changes will be communicated via email or platform
              notification. Continued use of the Service constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong> legal@leadtella.com
                <br />
                <strong>Support:</strong> support@leadtella.com
                <br />
                <strong>Address:</strong> [Your Business Address]
                <br />
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
          </section>

          <div className="bg-secondary p-6 rounded-lg mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This document was last updated on {new Date().toLocaleDateString()}. Please review
              these terms regularly as they may be updated to reflect changes in our service or legal requirements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
