"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface BlogHeroProps {
  onSearch?: (query: string) => void
}

export function BlogHero({ onSearch }: BlogHeroProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <section className="bg-gradient-to-br from-purple-50 to-green-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadtella Blog</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest strategies, insights, and best practices for lead generation, quiz marketing, and
          conversion optimization.
        </p>

        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-20 py-3 text-lg border-2 border-gray-200 focus:border-primary-500"
            />
            <Button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
