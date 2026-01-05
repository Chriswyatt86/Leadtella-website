"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "./blog-card"
import { BlogSidebar } from "./blog-sidebar"
import { ArrowLeft, TagIcon } from "lucide-react"
import type { Tag, BlogPost } from "@/types/blog"
import Link from "next/link"

interface TagPageProps {
  tag: Tag
  posts: BlogPost[]
}

export function TagPage({ tag, posts }: TagPageProps) {
  // Sort posts by publish date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Tag Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <TagIcon className="h-8 w-8 text-purple-600" />
              <Badge variant="outline">{tag.name}</Badge>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">#{tag.name}</h1>
            <p className="text-xl text-gray-600 mb-6">Articles tagged with "{tag.name}"</p>

            <div className="text-sm text-gray-500">
              {posts.length} article{posts.length !== 1 ? "s" : ""} with this tag
            </div>
          </div>

          {/* Tag Articles */}
          {posts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <TagIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">We haven't published any articles with this tag yet. Check back soon!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
