export interface Author {
  id: string
  name: string
  bio: string
  avatar: string
  role: string
  company: string
  expertise: string[]
  social: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Category {
  id: string
  name: string
  description: string
  slug: string
  color: string
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  publishedAt: string
  updatedAt: string
  readTime: number
  views: number
  likes: number
  author: Author
  category: Category
  tags: Tag[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}
