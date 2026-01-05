import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthorProfile } from "@/components/blog/author-profile"
import { authors, blogPosts } from "@/data/blog-data"
import { notFound } from "next/navigation"

interface AuthorPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.id === params.id)

  if (!author) {
    return {
      title: "Author Not Found - Leadtella Blog",
      description: "The author you're looking for could not be found.",
    }
  }

  const authorPosts = blogPosts.filter((post) => post.author?.id === author.id)

  return {
    title: `${author.name} - Lead Generation Expert | Leadtella Blog Author`,
    description: `Read articles by ${author.name}, ${author.role} at Leadtella. ${authorPosts.length} expert articles on lead generation, quiz marketing, and conversion optimization.`,
    keywords: `${author.name}, lead generation expert, quiz marketing, ${author.role}`,
    openGraph: {
      title: `${author.name} - Lead Generation Expert`,
      description: `Expert articles by ${author.name} on lead generation and quiz marketing strategies.`,
      type: "profile",
      url: `https://www.leadtella.com/blog/author/${author.id}`,
    },
  }
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.id === params.id)

  if (!author) {
    notFound()
  }

  // Get posts by this author
  const authorPosts = blogPosts.filter((post) => post.author?.id === author.id)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AuthorProfile author={author} posts={authorPosts} />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    id: author.id,
  }))
}
