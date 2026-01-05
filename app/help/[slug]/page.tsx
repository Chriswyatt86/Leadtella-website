import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpArticle } from "@/components/help-article"

interface HelpArticlePageProps {
  params: {
    slug: string
  }
}

const helpArticles = {
  "getting-started": {
    title: "Getting Started with Leadtella",
    description: "Learn how to create your first AI-powered lead generation quiz in minutes.",
  },
  "creating-your-first-quiz": {
    title: "Creating Your First Quiz",
    description: "Step-by-step guide to building your first lead capture quiz with AI assistance.",
  },
  "customizing-quiz-design": {
    title: "Customizing Quiz Design",
    description: "Personalize your quiz appearance to match your brand and improve conversions.",
  },
  "integrating-with-crm": {
    title: "CRM Integration Guide",
    description: "Connect Leadtella with your CRM system to automatically sync leads and data.",
  },
  "analyzing-quiz-results": {
    title: "Analyzing Quiz Results",
    description: "Understand your quiz analytics and optimize for better lead generation performance.",
  },
  "troubleshooting-common-issues": {
    title: "Troubleshooting Common Issues",
    description: "Solutions to frequently encountered problems and technical issues.",
  },
}

export async function generateMetadata({ params }: HelpArticlePageProps) {
  const article = helpArticles[params.slug as keyof typeof helpArticles]

  if (!article) {
    return {
      title: "Help Article Not Found - Leadtella Support",
      description: "The help article you're looking for could not be found.",
    }
  }

  return {
    title: `${article.title} | Leadtella Help Center`,
    description: article.description,
    keywords: `leadtella help, ${params.slug.replace("-", " ")}, quiz builder tutorial, lead generation guide`,
    openGraph: {
      title: `${article.title} - Leadtella Help`,
      description: article.description,
      type: "article",
      url: `https://www.leadtella.com/help/${params.slug}`,
    },
  }
}

export default function HelpArticlePage({ params }: HelpArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HelpArticle slug={params.slug} />
      <Footer />
    </div>
  )
}
