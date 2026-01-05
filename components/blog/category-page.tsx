"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "./blog-card"
import { BlogSidebar } from "./blog-sidebar"
import { ArrowLeft, FolderOpen } from "lucide-react"
import type { Category, BlogPost } from "@/types/blog"
import Link from "next/link"

interface CategoryPageProps {
  category: Category
  posts: BlogPost[]
}

export function CategoryPage({ category, posts }: CategoryPageProps) {
  // Add null checks for safety
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/blog" className="text-purple-600 hover:text-purple-700">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Filter out any null posts and sort by publish date (newest first)
  const validPosts = posts.filter((post) => post && post.publishedAt)
  const sortedPosts = [...validPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

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
          {/* Category Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen className="h-8 w-8 text-purple-600" />
              <Badge className={category.color || "bg-gray-100 text-gray-800"} variant="secondary">
                {category.name}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{category.description}</p>

            <div className="text-sm text-gray-500">
              {validPosts.length} article{validPosts.length !== 1 ? "s" : ""} in this category
            </div>
          </div>

          {/* Category Articles */}
          {validPosts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FolderOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h3>
                <p className="text-gray-600">
                  We haven't published any articles in this category yet. Check back soon!
                </p>
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
