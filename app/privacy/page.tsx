import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Leadtella | Data Protection & Privacy Rights",
  description:
    "Learn how Leadtella protects your privacy and personal data. Our comprehensive privacy policy covers data collection, usage, and your rights under GDPR.",
  keywords: "privacy policy, data protection, GDPR, personal data, leadtella privacy",
  openGraph: {
    title: "Leadtella Privacy Policy - Data Protection & Privacy Rights",
    description: "Learn how Leadtella protects your privacy and personal data. GDPR compliant privacy policy.",
    type: "website",
    url: "https://www.leadtella.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Leadtella ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our AI-powered lead capture quiz builder service.
            </p>
            <p className="text-muted-foreground">
              By using Leadtella, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
            <p className="text-muted-foreground mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Payment and billing information</li>
              <li>Company information and business details</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Quiz and Lead Data</h3>
            <p className="text-muted-foreground mb-4">
              When you create quizzes and capture leads through our platform, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Quiz content, questions, and responses</li>
              <li>Lead information submitted through your quizzes</li>
              <li>Analytics and performance data</li>
              <li>User interaction and engagement metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Technical Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>Usage patterns and feature utilization</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Provide and maintain our quiz building and lead capture services</li>
              <li>Process payments and manage your account</li>
              <li>Generate AI-powered quiz content and recommendations</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send service updates, security alerts, and administrative messages</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Third-Party Integrations</h3>
            <p className="text-muted-foreground mb-4">
              When you connect third-party services (like HubSpot, Mailchimp, etc.), we share relevant lead data
              according to your integration settings.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We work with trusted service providers for hosting, payment processing, analytics, and customer support.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Legal Requirements</h3>
            <p className="text-muted-foreground mb-4">
              We may disclose information when required by law or to protect our rights and safety.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and authentication measures</li>
              <li>Secure payment processing through certified providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Export your data and quiz content</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
              <li>Lodge complaints with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide
              personalized content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your information may be processed in countries other than your own. We ensure appropriate safeguards are
              in place for international transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not intended for children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or
              through our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong> privacy@leadtella.com
                <br />
                <strong>Address:</strong> [Your Business Address]
                <br />
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
