import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: "dlwx9hns",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Disable CDN to get fresh published data instead of cached results
})

export const client = sanityClient

export interface SanityAuthor {
  _id: string
  name: string
  slug: { current: string }
  role?: string
  bio?: string
  avatar?: { asset: { url: string } }
  twitter?: string
  linkedin?: string
  website?: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  coverImage?: { asset: { url: string } }
  publishedAt: string
  author: SanityAuthor
  categories?: string[]
  readTime?: string
  content: any[]
  featured?: boolean
}

export async function getAllPosts(): Promise<SanityPost[]> {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      role,
      bio,
      avatar,
      twitter,
      linkedin,
      website
    },
    categories,
    readTime,
    featured
  }`

  return sanityClient.fetch(query)
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      role,
      bio,
      avatar,
      twitter,
      linkedin,
      website
    },
    categories,
    readTime,
    content,
    featured
  }`

  return sanityClient.fetch(query, { slug })
}
