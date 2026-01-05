import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Heart, Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import Link from "next/link"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  // Safety checks for post data
  if (!post || !post.id || !post.slug || !post.title) {
    return null
  }

  // Fallback for category color if not defined
  const categoryColor = post.category?.color || "bg-muted text-muted-foreground"
  const categoryName = post.category?.name || "Uncategorized"
  const authorName = post.author?.name || "Unknown Author"
  const authorRole = post.author?.role || "Writer"
  const authorAvatar = post.author?.avatar || "/placeholder.svg?height=100&width=100"

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${featured ? "md:col-span-2" : ""}`}>
      <div className={`${featured ? "md:flex" : ""}`}>
        <div className={`${featured ? "md:w-1/2" : ""}`}>
          <img
            src={post.featuredImage || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            className={`w-full object-cover ${featured ? "h-64 md:h-full" : "h-48"}`}
          />
        </div>

        <div className={`${featured ? "md:w-1/2" : ""}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={categoryColor}>{categoryName}</Badge>
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown date"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime || 0} min read</span>
                </div>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h3
                className={`font-bold text-foreground hover:text-primary transition-colors ${featured ? "text-2xl" : "text-xl"}`}
              >
                {post.title}
              </h3>
            </Link>
          </CardHeader>

          <CardContent>
            <p className={`text-muted-foreground mb-4 ${featured ? "text-lg" : ""}`}>
              {post.excerpt || "No excerpt available"}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={authorAvatar || "/placeholder.svg"} alt={authorName} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">{authorName}</p>
                  <p className="text-xs text-muted-foreground">{authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{(post.views || 0).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes || 0}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              {post.tags?.slice(0, 3).map((tag) => {
                if (!tag || !tag.id || !tag.name) return null
                return (
                  <Badge key={tag.id} variant="secondary" className="text-xs">
                    {tag.name}
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
