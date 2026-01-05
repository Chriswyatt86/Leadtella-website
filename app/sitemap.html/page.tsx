import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts, categories } from "@/data/blog-data"
import Link from "next/link"

export default function SitemapPage() {
  const baseUrl = "https://leadtella.com"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sitemap</h1>
          <p className="text-xl text-muted-foreground">Complete overview of all pages on Leadtella</p>
        </div>

        <div className="grid gap-8">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">Main Pages</h2>
            <div className="grid gap-2">
              <Link href="/" className="text-primary hover:text-primary/80 hover:underline">
                Homepage
              </Link>
              <Link href="/pricing" className="text-primary hover:text-primary/80 hover:underline">
                Pricing
              </Link>
              <Link href="/affiliates" className="text-primary hover:text-primary/80 hover:underline">
                Affiliate Program
              </Link>
              <Link href="/experts" className="text-primary hover:text-primary/80 hover:underline">
                Expert Showcase
              </Link>
              <Link href="/help" className="text-primary hover:text-primary/80 hover:underline">
                Help Center
              </Link>
            </div>
          </section>

          {/* Blog Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">Blog</h2>
            <div className="grid gap-2 mb-6">
              <Link href="/blog" className="text-primary hover:text-primary/80 hover:underline font-medium">
                Blog Home
              </Link>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-3">Blog Posts</h3>
            <div className="grid gap-2 mb-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary/80 hover:underline"
                >
                  {post.title}
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-medium text-foreground mb-3">Blog Categories</h3>
            <div className="grid gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="text-primary hover:text-primary/80 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">Legal & Privacy</h2>
            <div className="grid gap-2">
              <Link href="/privacy" className="text-primary hover:text-primary/80 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary hover:text-primary/80 hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookie-settings" className="text-primary hover:text-primary/80 hover:underline">
                Cookie Settings
              </Link>
              <Link href="/cookie-scanner" className="text-primary hover:text-primary/80 hover:underline">
                Cookie Scanner
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-medium text-foreground mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Visit our help center or contact support.
          </p>
          <Link
            href="/help"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Visit Help Center
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
