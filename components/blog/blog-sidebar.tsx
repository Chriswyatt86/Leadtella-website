"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, User, Tag } from "lucide-react"
import { blogPosts, categories, authors, tags } from "@/data/blog-data"
import Link from "next/link"

export function BlogSidebar() {
  const [email, setEmail] = useState("")

  // Get popular posts (sorted by views)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest insights on lead generation and quiz marketing delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="font-medium text-sm text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span>{post.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => {
              const postCount = blogPosts.filter((post) => post.category.id === category.id).length
              return (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {postCount}
                  </Badge>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Authors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Authors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/blog/author/${author.id}`}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <img src={author.avatar || "/placeholder.svg"} alt={author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{author.name}</p>
                  <p className="text-xs text-gray-500">{author.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
                <Badge variant="outline" className="hover:bg-primary-50 hover:border-primary-200 transition-colors">
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
