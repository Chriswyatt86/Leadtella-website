import type { Metadata } from "next"
import Link from "next/link"
import { getAllGlossaryTerms } from "@/lib/sanity-glossary"
import { SITE_URL } from "@/lib/constants"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Lead Generation Glossary | LeadTella",
  description:
    "Comprehensive glossary of lead generation, marketing automation, and form optimization terms to help you understand the industry.",
  alternates: {
    canonical: `${SITE_URL}/glossary`,
  },
  openGraph: {
    title: "Lead Generation Glossary | LeadTella",
    description: "Comprehensive glossary of lead generation terms",
    url: `${SITE_URL}/glossary`,
    type: "website",
  },
}

export default async function GlossaryPage() {
  const terms = await getAllGlossaryTerms()

  // Group terms by first letter
  const groupedTerms = terms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(term)
      return acc
    },
    {} as Record<string, typeof terms>,
  )

  const letters = Object.keys(groupedTerms).sort()

  const webPageSchema = generateWebPageSchema({
    name: "Lead Generation Glossary",
    description: "Comprehensive glossary of lead generation, marketing automation, and form optimization terms",
    url: `${SITE_URL}/glossary`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Glossary", url: `${SITE_URL}/glossary` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Lead Generation Glossary</h1>
            <p className="text-lg text-muted-foreground mb-8">
              A comprehensive guide to lead generation, marketing automation, and form optimization terminology.
            </p>

            {/* Letter navigation */}
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                >
                  {letter}
                </a>
              ))}
            </div>

            {/* Terms grouped by letter */}
            <div className="space-y-12">
              {letters.map((letter) => (
                <div key={letter} id={letter} className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">{letter}</h2>
                  <div className="grid gap-6">
                    {groupedTerms[letter].map((term) => (
                      <Link
                        key={term._id}
                        href={`/glossary/${term.slug.current}`}
                        className="block p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all"
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-2">{term.term}</h3>
                        <p className="text-muted-foreground line-clamp-2">{term.definition}</p>
                        {term.category && (
                          <span className="inline-block mt-2 text-sm text-primary">{term.category}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {terms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No glossary terms available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
