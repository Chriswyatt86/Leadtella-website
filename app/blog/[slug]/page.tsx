import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { getPostBySlug, getAllPosts } from "@/lib/sanity"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/constants"
import { SchemaMarkup } from "@/components/schema-markup"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema"

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
    alternates: {
      canonical: `${SITE_URL}/blog/${sanityPost.slug.current}`,
    },
    openGraph: {
      title: shortTitle,
      description: sanityPost.excerpt,
      type: "article",
      publishedTime: sanityPost.publishedAt,
      authors: sanityPost.author?.name ? [sanityPost.author.name] : [],
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
    slug: sanityPost.slug?.current || params.slug,
    excerpt: sanityPost.excerpt || "",
    coverImage: sanityPost.coverImage?.asset?.url || "/blog-concept.png",
    publishedAt: sanityPost.publishedAt,
    author: {
      id: sanityPost.author?._id || "unknown",
      name: sanityPost.author?.name || "Anonymous",
      slug: sanityPost.author?.slug?.current || "anonymous",
      role: sanityPost.author?.role || "Contributor",
      bio: sanityPost.author?.bio || "",
      avatar: sanityPost.author?.avatar?.asset?.url,
      twitter: sanityPost.author?.twitter,
      linkedin: sanityPost.author?.linkedin,
      website: sanityPost.author?.website,
    },
    readTime: sanityPost.readTime || "5 min read",
    tags:
      sanityPost.categories?.map((cat) => ({ id: cat, name: cat, slug: cat.toLowerCase().replace(/\s+/g, "-") })) || [],
    featured: sanityPost.featured || false,
    content: sanityPost.content || [],
  }

  const schemas = [
    generateArticleSchema({
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.coverImage,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        name: post.author.name,
        url: post.author.website || `${SITE_URL}/blog/author/${post.author.slug}`,
      },
      category: post.tags[0]?.name,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
    ]),
  ]

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup schema={schemas} />
      <Header />
      <BlogPostContent post={post} />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts
    .filter((post) => post?.slug?.current)
    .map((post) => ({
      slug: post.slug.current,
    }))
}
