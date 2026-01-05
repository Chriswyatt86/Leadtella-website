import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPageClient } from "@/components/blog/blog-page-client"
import { getAllPosts } from "@/lib/sanity"
import { SITE_URL } from "@/lib/constants"
import { SchemaMarkup } from "@/components/schema-markup"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema"

export const revalidate = 60

export const metadata = {
  title: "Lead Generation Blog - Leadtella | Expert Tips & Strategies for 2024",
  description:
    "Discover proven lead generation strategies, quiz marketing tips, and conversion optimization techniques. Expert insights to grow your business with AI-powered lead capture.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default async function BlogPage() {
  const sanityPosts = await getAllPosts()

  const posts = sanityPosts
    .filter((post) => post.author && post.author._id)
    .map((post) => ({
      id: post._id,
      title: post.title,
      slug: post.slug.current,
      excerpt: post.excerpt || "",
      coverImage: post.coverImage?.asset.url || "/blog-concept.png",
      publishedAt: post.publishedAt,
      author: {
        id: post.author._id,
        name: post.author.name,
        slug: post.author.slug.current,
        role: post.author.role,
        bio: post.author.bio,
        avatar: post.author.avatar?.asset.url,
        twitter: post.author.twitter,
        linkedin: post.author.linkedin,
        website: post.author.website,
      },
      readTime: post.readTime || "5 min read",
      tags: post.categories?.map((cat) => ({ id: cat, name: cat, slug: cat.toLowerCase().replace(/\s+/g, "-") })) || [],
      featured: post.featured || false,
    }))

  const schemas = [
    generateWebPageSchema({
      title: "Lead Generation Blog - Leadtella",
      description:
        "Discover proven lead generation strategies, quiz marketing tips, and conversion optimization techniques.",
      url: `${SITE_URL}/blog`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Leadtella Blog",
      description: "Expert insights on lead generation, quiz marketing, and conversion optimization",
      url: `${SITE_URL}/blog`,
      blogPost: posts.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author.name,
        },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup schema={schemas} />
      <Header />
      <BlogPageClient posts={posts} />
      <Footer />
    </div>
  )
}
