import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/blog/category-page"
import { categories, blogPosts } from "@/data/blog-data"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((c) => c && c.slug === params.slug)

  if (!category) {
    return {
      title: "Category Not Found - Leadtella Blog",
      description: "The blog category you're looking for could not be found.",
    }
  }

  const categoryPosts = blogPosts.filter((post) => post && post.category && post.category.id === category.id)

  // Create shorter, SEO-optimized titles under 70 characters
  const titleMap: { [key: string]: string } = {
    "lead-generation": "Lead Generation Tips - Leadtella Blog",
    "quiz-marketing": "Quiz Marketing Guide - Leadtella Blog",
    "conversion-optimization": "Conversion Tips - Leadtella Blog",
    "ai-marketing": "AI Marketing Guide - Leadtella Blog",
    "case-studies": "Success Stories - Leadtella Blog",
    "industry-insights": "Industry Insights - Leadtella Blog",
  }

  const shortTitle = titleMap[category.slug] || `${category.name} - Leadtella Blog`

  return {
    title: shortTitle,
    description: `Discover expert ${category.name.toLowerCase()} strategies and tips. ${categoryPosts.length} articles covering the latest trends and best practices in ${category.name.toLowerCase()}.`,
    keywords: `${category.name.toLowerCase()}, lead generation, quiz marketing, ${category.slug}`,
    openGraph: {
      title: shortTitle,
      description: `Expert ${category.name.toLowerCase()} strategies and tips for growing your business.`,
      type: "website",
      url: `https://www.leadtella.com/blog/category/${category.slug}`,
    },
  }
}

export default function BlogCategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c && c.slug === params.slug)

  if (!category) {
    notFound()
  }

  // Get posts in this category with null checks
  const categoryPosts = blogPosts.filter((post) => post && post.category && post.category.id === category.id)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryPage category={category} posts={categoryPosts} />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return categories
    .filter((category) => category && category.slug)
    .map((category) => ({
      slug: category.slug,
    }))
}
