"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TableOfContents } from "./table-of-contents"
import { BlogSidebar } from "./blog-sidebar"
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  Twitter,
  Linkedin,
  Facebook,
  LinkIcon,
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import type { BlogPost } from "@/types/blog"
import Link from "next/link"

interface BlogPostContentProps {
  post: BlogPost
}

function portableTextToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) {
    return ""
  }

  return blocks
    .map((block) => {
      if (block._type === "block") {
        const children = block.children
          ?.map((child: any) => {
            if (child._type === "span") {
              return child.text || ""
            }
            return ""
          })
          .join("")

        const style = block.style || "normal"

        switch (style) {
          case "h1":
            return `<h1>${children}</h1>`
          case "h2":
            const id2 = children
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
            return `<h2 id="${id2}">${children}</h2>`
          case "h3":
            const id3 = children
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
            return `<h3 id="${id3}">${children}</h3>`
          case "h4":
            return `<h4>${children}</h4>`
          case "h5":
            return `<h5>${children}</h5>`
          case "normal":
          default:
            return `<p>${children}</p>`
        }
      } else if (block._type === "image") {
        const imageUrl = block.asset?.url || ""
        const alt = block.alt || ""
        return `<img src="${imageUrl}" alt="${alt}" class="my-8 rounded-lg" />`
      }

      return ""
    })
    .join("\n")
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post?.likes || 0)
  const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set())

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  const toggleFaqItem = (index: number) => {
    const newOpenItems = new Set(openFaqItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenFaqItems(newOpenItems)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Check out this article: ${post?.title || ""}`

  const handleShare = (platform: string) => {
    let url = ""

    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "copy":
        if (navigator?.clipboard) {
          navigator.clipboard.writeText(shareUrl)
        }
        return
    }

    if (url && typeof window !== "undefined") {
      window.open(url, "_blank", "width=600,height=400")
    }
  }

  const contentString = typeof post.content === "string" ? post.content : portableTextToHtml(post.content)

  // Enhanced content formatting with proper tables
  const formatContent = (content: string) => {
    if (!content) return ""

    // Remove the first H1 if it matches the post title to avoid duplicate H1s
    let processedContent = content
    const titleRegex = new RegExp(`^<h1>${post?.title?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h1>\\s*\n?`, "i")
    processedContent = processedContent.replace(titleRegex, "")

    return processedContent
      .replace(/<p>\s*<\/p>/g, "") // Remove empty paragraphs
      .replace(/<p>/g, '<p class="mb-6 text-lg leading-relaxed text-gray-700">')
      .replace(/<h2/g, '<h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-purple-200 pb-4"')
      .replace(/<h3/g, '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10"')
      .replace(/<h4/g, '<h4 class="text-xl font-bold text-gray-900 mb-4 mt-8"')
      .replace(/<h5/g, '<h5 class="text-lg font-bold text-gray-900 mb-3 mt-6"')
  }

  const formattedContent = formatContent(contentString)

  // Extract FAQ items for accordion functionality
  const extractFaqItems = (content: string) => {
    const faqPattern =
      /^(How .+\?|Is .+\?|What .+\?|Why .+\?|When .+\?|Where .+\?)$([\s\S]*?)(?=^(?:How .+\?|Is .+\?|What .+\?|Why .+\?|When .+\?|Where .+\?)|$)/gm
    const faqs: { question: string; answer: string }[] = []
    let match

    while ((match = faqPattern.exec(content)) !== null) {
      faqs.push({
        question: match[1],
        answer: match[2].trim(),
      })
    }

    return faqs
  }

  const faqItems = extractFaqItems(formattedContent || "")

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <article className="bg-white">
            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <Badge
                  className={`${post.category?.color || "bg-purple-100 text-purple-800"} text-sm font-medium px-4 py-2`}
                >
                  {post.category?.name || "Uncategorized"}
                </Badge>
              </div>

              {/* Main H1 - Only one per page */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {post.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">{post.excerpt}</p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500 mb-8 pb-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author?.avatar || "/placeholder.svg"}
                    alt={post.author?.name || "Author"}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-purple-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{post.author?.name || "Unknown Author"}</p>
                    <p className="text-gray-600">{post.author?.role || "Writer"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <Calendar className="h-4 w-4 text-purple-500" />
                  <span className="font-medium">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown date"}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">{post.readTime || 0} min read</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <Eye className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{(post.views || 0).toLocaleString()} views</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-6 mb-10">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLike}
                  className={`transition-all duration-200 ${
                    liked
                      ? "text-red-600 border-red-200 bg-red-50 hover:bg-red-100"
                      : "hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 mr-2 ${liked ? "fill-current" : ""}`} />
                  {likes} Likes
                </Button>

                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-medium">Share:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("twitter")}
                    className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("linkedin")}
                    className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("facebook")}
                    className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare("copy")} className="hover:bg-gray-50">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12">
                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}

            {/* Article Content - Beautiful Typography with Better Spacing */}
            <div className="blog-content max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: formattedContent,
                }}
              />
            </div>

            {/* FAQ Accordion Section */}
            {faqItems.length > 0 && (
              <div className="mt-16 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-200 pb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <button
                        className="faq-question"
                        onClick={() => toggleFaqItem(index)}
                        aria-expanded={openFaqItems.has(index)}
                      >
                        <span className="text-lg font-semibold">{faq.question}</span>
                        {openFaqItems.has(index) ? (
                          <ChevronUp className="h-5 w-5 text-purple-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-purple-600" />
                        )}
                      </button>
                      {openFaqItems.has(index) && (
                        <div className="faq-answer">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced CTA Section */}
            <div className="my-16 p-10 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl border-2 border-purple-100 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create High-Converting Quizzes?</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of marketers using Leadtella to generate more qualified leads with AI-powered quiz
                  builder.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="https://app.leadtella.com/register?utm_source=website&utm_medium=blog&utm_campaign=jotform_review&utm_content=cta">
                    🚀 Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Topics</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
                      <Badge
                        variant="outline"
                        className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-all duration-200 px-4 py-2 text-sm font-medium"
                      >
                        #{tag.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Author Bio */}
            {post.author && (
              <Card className="mt-12 border-2 border-purple-100 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-6">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-200"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                      <p className="text-lg text-gray-600 mb-2">
                        {post.author.role} {post.author.company && `at ${post.author.company}`}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{post.author.bio}</p>
                  {post.author.expertise && post.author.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.author.expertise.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm px-3 py-1 bg-purple-100 text-purple-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {post.author.social && (
                    <div className="flex gap-4">
                      {post.author.social.twitter && (
                        <a
                          href={post.author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                        >
                          <Twitter className="h-6 w-6" />
                        </a>
                      )}
                      {post.author.social.linkedin && (
                        <a
                          href={post.author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      )}
                      {post.author.social.website && (
                        <a
                          href={post.author.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors transform hover:scale-110"
                        >
                          <LinkIcon className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </article>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-8">
            <TableOfContents content={post.content || ""} />
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
