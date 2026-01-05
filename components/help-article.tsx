"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Star, ThumbsUp, ThumbsDown, Share2, Bookmark, ChevronRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface HelpArticleData {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  readTime: number
  popularity: number
  lastUpdated: string
  content: string
  helpful: number
  notHelpful: number
}

// This would typically come from your CMS or API
const getArticleBySlug = (slug: string): HelpArticleData | null => {
  const articles: HelpArticleData[] = [
    {
      id: "getting-started-guide",
      title: "Getting Started with Leadtella",
      description: "A complete guide to setting up your first quiz and capturing leads",
      category: "getting-started",
      tags: ["beginner", "setup", "first-steps"],
      readTime: 5,
      popularity: 95,
      lastUpdated: "2024-01-15",
      helpful: 127,
      notHelpful: 8,
      content: `# Getting Started with Leadtella

Welcome to Leadtella! This comprehensive guide will help you create your first AI-powered lead capture quiz in just a few minutes.

## What You'll Learn
- How to set up your account
- Creating your first quiz
- Customizing your quiz design
- Embedding on your website
- Analyzing your results

## Step 1: Create Your Account

Getting started with Leadtella is simple:

1. **Sign up** for your free Leadtella account at [leadtella.com](https://leadtella.com)
2. **Verify your email address** by clicking the link we send you
3. **Complete your profile setup** with your business information

### Account Setup Tips
- Use your business email for better deliverability
- Add your company logo for professional branding
- Set your timezone for accurate analytics

## Step 2: Create Your First Quiz

Once your account is set up, you can create your first quiz:

1. **Click "Create New Quiz"** from your dashboard
2. **Choose a template** or start from scratch
3. **Use our AI assistant** to generate questions automatically

### Quiz Creation Options

#### Templates
We offer pre-built templates for common industries:
- **Lead Qualification Quiz**: Perfect for B2B businesses
- **Product Recommendation Quiz**: Great for e-commerce
- **Assessment Quiz**: Ideal for service providers
- **Personality Quiz**: Engaging for lifestyle brands

#### AI-Powered Generation
Our AI can create questions based on:
- Your business type and goals
- Target audience characteristics
- Lead qualification criteria
- Industry best practices

## Step 3: Customize Your Quiz

Make your quiz match your brand:

### Design Customization
- **Colors**: Match your brand colors
- **Fonts**: Choose from professional font options
- **Logo**: Add your company logo
- **Background**: Use solid colors or gradients

### Question Types
- **Multiple Choice**: Single or multiple selections
- **Text Input**: For names, emails, and custom responses
- **Rating Scales**: For preferences and satisfaction
- **Image Selection**: Visual product or style choices

### Lead Capture Fields
Configure what information to collect:
- **Required Fields**: Email (always required)
- **Optional Fields**: Name, phone, company, etc.
- **Custom Fields**: Industry-specific information

## Step 4: Set Up Results and Recommendations

Create personalized results for your quiz takers:

### Result Pages
- **Personalized Messages**: Based on quiz responses
- **Product Recommendations**: Suggest relevant products/services
- **Next Steps**: Clear calls-to-action
- **Contact Information**: Make it easy to get in touch

### Lead Scoring
Automatically score leads based on:
- Budget indicators
- Timeline urgency
- Fit with your ideal customer profile
- Engagement level

## Step 5: Embed on Your Website

Get your quiz live on your website:

### Embed Options
1. **JavaScript Embed** (Recommended)
   - Most flexible and customizable
   - Responsive design
   - Advanced tracking

2. **iFrame Embed**
   - Simple copy-paste solution
   - Works on any platform
   - Basic functionality

3. **WordPress Plugin**
   - Easy integration for WordPress sites
   - Shortcode support
   - Automatic updates

### Embedding Code Example

\`\`\`html
<div id="leadtella-quiz-123"></div>
<script src="https://app.leadtella.com/embed.js"></script>
<script>
  Leadtella.embed('leadtella-quiz-123', {
    quizId: 'your-quiz-id',
    theme: 'light',
    width: '100%',
    height: 'auto'
  });
</script>
\`\`\`

## Step 6: Analyze Your Results

Monitor your quiz performance:

### Key Metrics
- **Completion Rate**: Percentage who finish the quiz
- **Lead Quality Score**: Average lead qualification score
- **Conversion Rate**: Quiz to customer conversion
- **Popular Answers**: Most common responses

### Optimization Tips
- Test different question orders
- A/B test result pages
- Monitor drop-off points
- Adjust based on feedback

## Next Steps

Now that you have your first quiz running:

1. **Set up integrations** with your CRM (HubSpot, Salesforce, etc.)
2. **Create additional quizzes** for different audiences
3. **Implement lead nurturing** workflows
4. **Monitor and optimize** performance regularly

## Common Questions

### How long should my quiz be?
- **5-7 questions** is optimal for most audiences
- **Shorter quizzes** have higher completion rates
- **Longer quizzes** can provide more qualification data

### What's the best way to promote my quiz?
- **Website homepage**: Above the fold placement
- **Blog posts**: Relevant content integration
- **Social media**: Share engaging results
- **Email campaigns**: To existing subscribers

### How do I improve completion rates?
- **Clear value proposition**: Explain what they'll get
- **Progress indicators**: Show how much is left
- **Engaging questions**: Make it fun and relevant
- **Mobile optimization**: Ensure mobile-friendly design

## Getting Help

If you need assistance:
- **Help Center**: Browse our knowledge base
- **Live Chat**: Available during business hours
- **Email Support**: support@leadtella.com
- **Video Tutorials**: Step-by-step guides

## Conclusion

Congratulations! You now have everything you need to create effective lead capture quizzes with Leadtella. Remember to:

- Start simple and iterate
- Focus on your audience's needs
- Test and optimize regularly
- Use data to improve performance

Ready to create your first quiz? [Get started now!](https://app.leadtella.com)`,
    },
  ]

  return articles.find((article) => article.id === slug) || null
}

interface HelpArticleProps {
  slug: string
}

export function HelpArticle({ slug }: HelpArticleProps) {
  const router = useRouter()
  const [article, setArticle] = useState<HelpArticleData | null>(null)
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const articleData = getArticleBySlug(slug)
    setArticle(articleData)
  }, [slug])

  const handleFeedback = (helpful: boolean) => {
    setIsHelpful(helpful)
    // Here you would typically send feedback to your API
    console.log(`Article ${article?.id} marked as ${helpful ? "helpful" : "not helpful"}`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // Show toast notification
    }
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Here you would typically save to user's bookmarks
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => router.push("/help")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <button onClick={() => router.push("/help")} className="hover:text-primary-700 text-primary-600">
          Help Center
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="capitalize">{article.category.replace("-", " ")}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{article.title}</span>
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600">{article.description}</p>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookmark}
              className={isBookmarked ? "bg-primary-50 border-primary-200" : ""}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary-600 text-primary-600" : ""}`} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{article.popularity}% helpful</span>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Badge variant="outline" className="capitalize">
            {article.category.replace("-", " ")}
          </Badge>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }} />
          </div>
        </CardContent>
      </Card>

      {/* Feedback Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Was this article helpful?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Button
                variant={isHelpful === true ? "default" : "outline"}
                onClick={() => handleFeedback(true)}
                className={isHelpful === true ? "bg-green-600 hover:bg-green-700" : ""}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes ({article.helpful})
              </Button>
              <Button
                variant={isHelpful === false ? "default" : "outline"}
                onClick={() => handleFeedback(false)}
                className={isHelpful === false ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No ({article.notHelpful})
              </Button>
            </div>
            <div className="text-sm text-gray-500">
              {article.helpful + article.notHelpful} people found this article
            </div>
          </div>

          {isHelpful !== null && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                {isHelpful ? "Thanks for your feedback!" : "Sorry this wasn't helpful."}
              </p>
              {!isHelpful && (
                <p className="text-sm text-gray-600">
                  Please{" "}
                  <a href="mailto:support@leadtella.com" className="text-primary-600 hover:underline">
                    contact our support team
                  </a>{" "}
                  if you need additional help.
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => router.push("/help")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Help Center
        </Button>
        <Button>
          Contact Support
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
