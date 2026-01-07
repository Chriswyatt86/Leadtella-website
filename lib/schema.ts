import { SITE_URL } from "./constants"

// Organization Schema for the company
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeadTella",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "AI-powered lead generation platform that helps businesses convert website visitors into qualified leads through intelligent quizzes and forms.",
    sameAs: ["https://twitter.com/leadtella", "https://linkedin.com/company/leadtella"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@leadtella.com",
      availableLanguage: ["English"],
    },
  }
}

// WebSite Schema for the main site
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeadTella",
    url: SITE_URL,
    description:
      "AI-powered lead generation platform that helps businesses convert website visitors into qualified leads through intelligent quizzes and forms.",
    publisher: {
      "@type": "Organization",
      name: "LeadTella",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}

// WebPage Schema for individual pages
export function generateWebPageSchema(pageUrl: string, pageName: string, pageDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    name: pageName,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
  }
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Software Application Schema for product pages
export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeadTella",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "AI-powered lead generation platform that helps businesses convert website visitors into qualified leads through intelligent quizzes and forms.",
  }
}

// Product Schema for pricing/offerings
export function generateProductSchema(product: {
  name: string
  description: string
  price: string
  currency: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: product.url,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      url: product.url,
    },
  }
}

// Blog Schema
export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE_URL}/blog`,
    name: "LeadTella Blog",
    description: "Tips, strategies, and insights on lead generation, conversion optimization, and business growth.",
    publisher: {
      "@type": "Organization",
      name: "LeadTella",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}

// BlogPosting/Article Schema
export function generateBlogPostSchema(post: {
  title: string
  description: string
  url: string
  publishedDate: string
  modifiedDate?: string
  authorName: string
  imageUrl?: string
  category?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "LeadTella",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: post.imageUrl
      ? {
          "@type": "ImageObject",
          url: post.imageUrl,
        }
      : undefined,
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  }
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// DefinedTerm Schema for glossary terms
export function generateDefinedTermSchema(term: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.name,
    description: term.description,
    url: term.url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "LeadTella Glossary",
      url: `${SITE_URL}/glossary`,
    },
  }
}

// Collection Page Schema for glossary listing
export function generateCollectionPageSchema(url: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url,
    name,
    description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
  }
}

// Aliases for backward compatibility
export const generateSoftwareSchema = generateSoftwareApplicationSchema
export const generateArticleSchema = generateBlogPostSchema
