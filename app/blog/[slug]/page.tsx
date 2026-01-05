import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { getPostBySlug, getAllPosts } from "@/lib/sanity"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const sanityPost = await getPostBySlug(params.slug)

  if (!sanityPost) {
    return {
      title: "Post Not Found - Leadtella Blog",
      description: "The blog post you're looking for could not be found.",
    }
  }

  const shortTitle = sanityPost.title.length > 60 ? sanityPost.title.substring(0, 60) : sanityPost.title

  return {
    title: shortTitle,
    description: sanityPost.excerpt,
    keywords: sanityPost.categories?.join(", ") || "lead generation, quiz marketing",
    openGraph: {
      title: shortTitle,
      description: sanityPost.excerpt,
      type: "article",
      publishedTime: sanityPost.publishedAt,
      authors: [sanityPost.author.name],
      url: `https://www.leadtella.com/blog/${sanityPost.slug.current}`,
    },
    twitter: {
      card: "summary_large_image",
      title: shortTitle,
      description: sanityPost.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const sanityPost = await getPostBySlug(params.slug)

  if (!sanityPost) {
    notFound()
  }

  const post = {
    id: sanityPost._id,
    title: sanityPost.title,
    slug: sanityPost.slug.current,
    excerpt: sanityPost.excerpt || "",
    coverImage: sanityPost.coverImage?.asset.url || "/blog-concept.png",
    publishedAt: sanityPost.publishedAt,
    author: {
      id: sanityPost.author._id,
      name: sanityPost.author.name,
      slug: sanityPost.author.slug.current,
      role: sanityPost.author.role,
      bio: sanityPost.author.bio,
      avatar: sanityPost.author.avatar?.asset.url,
      twitter: sanityPost.author.twitter,
      linkedin: sanityPost.author.linkedin,
      website: sanityPost.author.website,
    },
    readTime: sanityPost.readTime || "5 min read",
    tags:
      sanityPost.categories?.map((cat) => ({ id: cat, name: cat, slug: cat.toLowerCase().replace(/\s+/g, "-") })) || [],
    featured: sanityPost.featured || false,
    content: sanityPost.content,
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlogPostContent post={post} />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}
