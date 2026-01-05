import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants"

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description: SITE_DESCRIPTION,
    sameAs: ["https://twitter.com/leadtella", "https://linkedin.com/company/leadtella"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@leadtella.com",
      availableLanguage: ["English"],
    },
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateWebPageSchema(page: {
  title: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

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

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
  }
}

// Alias for compatibility
export const generateSoftwareSchema = generateSoftwareApplicationSchema

export function generateBlogPostSchema(post: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image || `${SITE_URL}/og-image.png`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.url || SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  }
}

// Alias for compatibility
export const generateArticleSchema = generateBlogPostSchema

export function generateProductSchema(product: {
  name: string
  description: string
  price: string
  currency: string
  availability?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: product.availability || "https://schema.org/InStock",
      url: SITE_URL,
    },
  }
}

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
