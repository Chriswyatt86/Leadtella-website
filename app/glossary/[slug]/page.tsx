import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllGlossaryTerms, getGlossaryTermBySlug } from "@/lib/sanity-glossary"
import { SITE_URL } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"

export const revalidate = 60

export async function generateStaticParams() {
  const terms = await getAllGlossaryTerms()
  return terms
    .filter((term) => term.slug?.current)
    .map((term) => ({
      slug: term.slug.current,
    }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const term = await getGlossaryTermBySlug(params.slug)

  if (!term) {
    return {
      title: "Term Not Found | LeadTella",
    }
  }

  return {
    title: `${term.term} - Glossary | LeadTella`,
    description: term.definition.substring(0, 160),
    alternates: {
      canonical: `${SITE_URL}/glossary/${term.slug.current}`,
    },
    openGraph: {
      title: `${term.term} - Glossary | LeadTella`,
      description: term.definition.substring(0, 160),
      url: `${SITE_URL}/glossary/${term.slug.current}`,
      type: "article",
    },
  }
}

export default async function GlossaryTermPage({
  params,
}: {
  params: { slug: string }
}) {
  const term = await getGlossaryTermBySlug(params.slug)

  if (!term) {
    notFound()
  }

  // DefinedTerm schema for the glossary term
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: `${SITE_URL}/glossary`,
    url: `${SITE_URL}/glossary/${term.slug.current}`,
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Glossary", url: `${SITE_URL}/glossary` },
    { name: term.term, url: `${SITE_URL}/glossary/${term.slug.current}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/glossary" className="hover:text-primary">
                Glossary
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{term.term}</span>
            </nav>

            {/* Term */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              {term.category && <div className="text-sm text-primary mb-2 font-medium">{term.category}</div>}
              <h1 className="text-4xl font-bold text-foreground mb-6">{term.term}</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{term.definition}</p>
              </div>
            </div>

            {/* Related terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="bg-secondary rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Related Terms</h2>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((relatedTerm) => (
                    <span
                      key={relatedTerm}
                      className="px-3 py-1 bg-background border border-border rounded-md text-sm text-foreground"
                    >
                      {relatedTerm}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to glossary */}
            <div className="mt-8">
              <Link href="/glossary" className="inline-flex items-center text-primary hover:underline">
                ← Back to Glossary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
