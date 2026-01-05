"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Linkedin, Globe, BookOpen, Users, Award } from "lucide-react"
import { authors, blogPosts } from "@/data/blog-data"
import Link from "next/link"

export function ExpertsShowcase() {
  // Calculate stats for each author
  const authorsWithStats = authors.map((author) => {
    const authorPosts = blogPosts.filter((post) => post.author?.id === author.id)
    const totalViews = authorPosts.reduce((sum, post) => sum + (post.views || 0), 0)
    const totalLikes = authorPosts.reduce((sum, post) => sum + (post.likes || 0), 0)
    const avgReadTime =
      authorPosts.length > 0
        ? Math.round(authorPosts.reduce((sum, post) => sum + (post.readTime || 0), 0) / authorPosts.length)
        : 0

    return {
      ...author,
      stats: {
        articles: authorPosts.length,
        totalViews,
        totalLikes,
        avgReadTime,
      },
    }
  })

  // Calculate team stats
  const teamStats = {
    totalExperts: authors.length,
    totalArticles: blogPosts.length,
    totalViews: blogPosts.reduce((sum, post) => sum + (post.views || 0), 0),
    totalExpertise: [...new Set(authors.flatMap((author) => author.expertise))].length,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Experts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Our team of industry experts brings decades of combined experience in lead generation, marketing technology,
          and conversion optimization to help you succeed.
        </p>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{teamStats.totalExperts}</div>
            <div className="text-sm text-gray-600">Experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{teamStats.totalArticles}</div>
            <div className="text-sm text-gray-600">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{teamStats.totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{teamStats.totalExpertise}</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </div>
        </div>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {authorsWithStats.map((author) => (
          <Card key={author.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={author.avatar || "/placeholder.svg"}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{author.name}</CardTitle>
                  <p className="text-lg text-gray-600 mb-3">
                    {author.role} {author.company && `at ${author.company}`}
                  </p>

                  {/* Author Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary-600">{author.stats.articles}</div>
                      <div className="text-xs text-gray-500">Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary-600">
                        {author.stats.totalViews.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary-600">{author.stats.avgReadTime}m</div>
                      <div className="text-xs text-gray-500">Avg Read</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  {author.social && (
                    <div className="flex gap-2 mb-4">
                      {author.social.twitter && (
                        <a
                          href={author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {author.social.linkedin && (
                        <a
                          href={author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {author.social.website && (
                        <a
                          href={author.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">{author.bio}</p>

              {/* Expertise Tags */}
              {author.expertise && author.expertise.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* View Profile Button */}
              <Link href={`/blog/author/${author.id}`}>
                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  View Profile & Articles
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Our Experts Section */}
      <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Experts Matter</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team doesn't just write about marketing theory—they've built, scaled, and optimized lead generation
            systems for hundreds of companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Experience</h3>
            <p className="text-gray-600">
              Decades of combined experience working with Fortune 500 companies and high-growth startups.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-World Results</h3>
            <p className="text-gray-600">
              Our experts have generated millions in revenue and helped thousands of businesses scale their lead
              generation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Published authors, conference speakers, and recognized thought leaders in marketing and technology.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn from the Best</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get insights, strategies, and actionable advice from our team of experts through our blog and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
              Read Our Blog
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          <Link href="/help">
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              Browse Help Center
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Also add a default export to ensure compatibility
const ExpertsShowcaseComponent = ExpertsShowcase
export default ExpertsShowcaseComponent
