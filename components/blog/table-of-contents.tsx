"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (!content) return

    // Extract headings from content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const items: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1]?.length || 1
      const text = match[2]?.trim() || ""

      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")

        items.push({ id, text, level })
      }
    }

    setTocItems(items)
  }, [content])

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target?.id) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      headings.forEach((heading) => {
        if (heading) {
          observer.observe(heading)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [tocItems])

  if (tocItems.length === 0) return null

  const scrollToHeading = (id: string) => {
    if (typeof window === "undefined") return

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <List className="h-5 w-5" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                activeId === item.id
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
