import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/sanity"
import { getAllGlossaryTerms } from "@/lib/sanity-glossary"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.leadtella.com"

  const posts = await getAllPosts()
  const glossaryTerms = await getAllGlossaryTerms()

  // Base pages with optimized priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/affiliates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/experts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hubspot-integration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookie-scanner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const validPosts = posts.filter((post) => post.slug?.current && typeof post.slug.current === "string")

  const blogPostPages: MetadataRoute.Sitemap = validPosts.map((post) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(post.slug.current)}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const uniqueCategories = Array.from(
    new Set(validPosts.flatMap((post) => post.categories || []).filter((cat) => cat && typeof cat === "string")),
  )

  const categoryPages: MetadataRoute.Sitemap = uniqueCategories.map((category) => {
    const slug = category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
    return {
      url: `${baseUrl}/blog/category/${encodeURIComponent(slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }
  })

  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms
    .filter((term) => term.slug?.current && typeof term.slug.current === "string")
    .map((term) => ({
      url: `${baseUrl}/glossary/${encodeURIComponent(term.slug.current)}`,
      lastModified: term.publishedAt ? new Date(term.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticPages, ...blogPostPages, ...categoryPages, ...glossaryPages]
}
