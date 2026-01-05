"use client"

import { BlogHero } from "@/components/blog/blog-hero"

export function BlogPageClient({ posts }) {
  return (
    <>
      <BlogHero posts={posts} />
    </>
  )
}
