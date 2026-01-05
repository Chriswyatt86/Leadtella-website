"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogCard } from "./blog-card"
import { BlogSidebar } from "./blog-sidebar"
import { ArrowLeft, Twitter, Linkedin, Globe } from "lucide-react"
import type { Author, BlogPost } from "@/types/blog"
import Link from "next/link"

interface AuthorProfileProps {
  author: Author
  posts: BlogPost[]
}

export function AuthorProfile({ author, posts }: AuthorProfileProps) {
  // Sort posts by publish date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  // Calculate author stats
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0)
  const totalLikes = posts.reduce((sum, post) => sum + (post.likes || 0), 0)
  const avgReadTime =
    posts.length > 0 ? Math.round(posts.reduce((sum, post) => sum + (post.readTime || 0), 0) / posts.length) : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Author Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={author.avatar || "/placeholder.svg"}
                    alt={author.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{author.name}</h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    {author.role} {author.company && `at ${author.company}`}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{author.bio}</p>

                  {/* Expertise Tags */}
                  {author.expertise && author.expertise.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-foreground mb-2">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {author.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  {author.social && (
                    <div className="flex gap-3">
                      {author.social.twitter && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={author.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </a>
                        </Button>
                      )}
                      {author.social.linkedin && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={author.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      )}
                      {author.social.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={author.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Globe className="h-4 w-4" />
                            Website
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Author Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{posts.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalViews.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Likes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalLikes.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Read Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{avgReadTime} min</div>
              </CardContent>
            </Card>
          </div>

          {/* Author's Articles */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Articles by {author.name} ({posts.length})
            </h2>

            {posts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No articles published yet.</p>
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
        </div>

        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
