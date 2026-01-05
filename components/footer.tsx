import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <a href="/" className="inline-block mb-4">
              <img src="/logo-white.png" alt="LeadTella" className="h-8" />
            </a>
            <p className="text-background/70 mb-6 max-w-sm text-sm leading-relaxed">
              Replace outdated forms with AI-powered lead flows. Capture better leads, qualify them automatically, and
              understand who they are before the first call.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/channel/UC5sJh3QZLp5MN83MXcq2sew/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-background/60 hover:text-background transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/leadtellaapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-background/60 hover:text-background transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577860281081"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-background/60 hover:text-background transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/leadtella"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-background/60 hover:text-background transition-colors" />
              </a>
              <a href="https://x.com/Leadtella" target="_blank" rel="noopener noreferrer" aria-label="X">
                <Twitter className="h-5 w-5 text-background/60 hover:text-background transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#features" className="text-background/70 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#integrations" className="text-background/70 hover:text-background transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-background/70 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/help" className="text-background/70 hover:text-background transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/blog/category/case-studies"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/experts" className="text-background/70 hover:text-background transition-colors">
                  Our Experts
                </a>
              </li>
              <li>
                <a href="/affiliates" className="text-background/70 hover:text-background transition-colors">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-background/70 hover:text-background transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-background/70 hover:text-background transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <p className="text-background/60 text-sm">© 2026 LeadTella. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
