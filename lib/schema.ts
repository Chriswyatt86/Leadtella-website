import { SITE_URL } from "./constants"

export interface SchemaProps {
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Leadtella",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
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

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leadtella",
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

export function generateWebPageSchema(props: SchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.title,
    description: props.description,
    url: props.url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
      name: "Leadtella",
    },
    ...(props.image && { image: props.image }),
  }
}

export function generateArticleSchema(props: SchemaProps & { category?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      "@type": "Person",
      name: props.author?.name || "Leadtella Team",
      url: props.author?.url || SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Leadtella",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    image: props.image || `${SITE_URL}/og-image.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url,
    },
    inLanguage: "en-US",
    ...(props.category && { articleSection: props.category }),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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

export function generateSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Leadtella",
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
    description:
      "AI-powered lead generation platform that helps businesses convert website visitors into qualified leads through intelligent quizzes and forms.",
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
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
