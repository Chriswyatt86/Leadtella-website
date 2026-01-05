import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants"

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
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
    description: "AI-powered lead generation platform for B2B businesses",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
      name: SITE_NAME,
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
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan available with paid upgrades",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
    description: SITE_DESCRIPTION,
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  price: string
  currency: string
  features: string[]
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
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing`,
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  }
}

export function generateBlogPostSchema(post: {
  title: string
  description: string
  url: string
  publishedAt: string
  author: {
    name: string
    url?: string
  }
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
        url: `${SITE_URL}/favicon.png`,
      },
    },
    image: post.image || `${SITE_URL}/favicon.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  }
}

export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    description: "Latest insights on lead generation, quiz marketing, and conversion optimization",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
  }
}

export const generateSoftwareSchema = generateSoftwareApplicationSchema
export const generateArticleSchema = generateBlogPostSchema
