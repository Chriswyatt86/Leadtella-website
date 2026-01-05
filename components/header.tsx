"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="LeadTella" className="h-10 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#integrations"
              className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium transition-colors"
            >
              Integrations
            </a>
            <a
              href="/pricing"
              className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="/blog"
              className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium transition-colors"
            >
              Blog
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.leadtella.com">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Log in
              </Button>
            </a>
            <a href="https://app.leadtella.com/register">
              <Button size="sm" className="bg-[#23CD9A] text-foreground hover:bg-[#1db886] rounded-lg font-semibold">
                Sign up
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/#features" className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium">
                Features
              </a>
              <a href="/#how-it-works" className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium">
                How It Works
              </a>
              <a href="/#integrations" className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium">
                Integrations
              </a>
              <a href="/pricing" className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium">
                Pricing
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-[#23CD9A] text-sm font-medium">
                Blog
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a href="https://app.leadtella.com">
                  <Button variant="ghost" className="w-full justify-center">
                    Log in
                  </Button>
                </a>
                <a href="https://app.leadtella.com/register">
                  <Button className="w-full bg-[#23CD9A] text-foreground hover:bg-[#1db886] font-semibold">
                    Sign up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
