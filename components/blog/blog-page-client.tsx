"use client"

import { useState } from "react"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage?: string
  publishedAt: string
  author: {
    id: string
    name: string
    slug: string
    role?: string
    bio?: string
    avatar?: string
    twitter?: string
    linkedin?: string
    website?: string
  }
  readTime: string
  tags: { id: string; name: string; slug: string }[]
  featured: boolean
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag: any) => tag.name.toLowerCase().includes(query.toLowerCase())),
      )
      setFilteredPosts(filtered)
    }
  }

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  const featuredPost = sortedPosts.find((p) => p.featured) || sortedPosts[0]
  const regularPosts = sortedPosts.filter((p) => p.id !== featuredPost?.id)

  return (
    <>
      <BlogHero onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {searchQuery && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Search Results for "{searchQuery}"</h2>
                <p className="text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </p>
              </div>
            )}

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse our categories.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {!searchQuery && featuredPost && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                    <BlogCard post={featuredPost} featured />
                  </div>
                )}

                <div>
                  {!searchQuery && <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(searchQuery ? sortedPosts : regularPosts).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  )
}
