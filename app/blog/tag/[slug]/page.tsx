import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TagPage } from "@/components/blog/tag-page"
import { tags, blogPosts } from "@/data/blog-data"
import { notFound } from "next/navigation"

interface TagPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TagPageProps) {
  const tag = tags.find((t) => t.slug === params.slug)

  if (!tag) {
    return {
      title: "Tag Not Found - Leadtella Blog",
      description: "The blog tag you're looking for could not be found.",
    }
  }

  const tagPosts = blogPosts.filter((post) => post.tags?.some((postTag) => postTag.id === tag.id))

  // Create shorter, SEO-optimized titles under 70 characters
  const titleMap: { [key: string]: string } = {
    "lead-generation": "Lead Generation - Leadtella Blog",
    "quiz-marketing": "Quiz Marketing - Leadtella Blog",
    "conversion-optimization": "Conversion Tips - Leadtella Blog",
    personalization: "Personalization - Leadtella Blog",
    ai: "AI Marketing - Leadtella Blog",
    automation: "Marketing Automation - Leadtella Blog",
    analytics: "Marketing Analytics - Leadtella Blog",
    mobile: "Mobile Marketing - Leadtella Blog",
    b2b: "B2B Marketing - Leadtella Blog",
    saas: "SaaS Marketing - Leadtella Blog",
  }

  const shortTitle = titleMap[tag.slug] || `${tag.name} - Leadtella Blog`

  return {
    title: shortTitle,
    description: `Explore ${tagPosts.length} articles about ${tag.name.toLowerCase()}. Learn the latest strategies and best practices for ${tag.name.toLowerCase()} in lead generation and marketing.`,
    keywords: `${tag.name.toLowerCase()}, ${tag.slug}, lead generation, quiz marketing`,
    openGraph: {
      title: shortTitle,
      description: `Expert tips and strategies for ${tag.name.toLowerCase()} in lead generation and marketing.`,
      type: "website",
      url: `https://www.leadtella.com/blog/tag/${tag.slug}`,
    },
  }
}

export default function BlogTagPage({ params }: TagPageProps) {
  const tag = tags.find((t) => t.slug === params.slug)

  if (!tag) {
    notFound()
  }

  // Get posts with this tag
  const tagPosts = blogPosts.filter((post) => post.tags?.some((postTag) => postTag.id === tag.id))

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TagPage tag={tag} posts={tagPosts} />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return tags.map((tag) => ({
    slug: tag.slug,
  }))
}
