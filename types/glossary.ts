export interface GlossaryTerm {
  _id: string
  term: string
  slug: {
    current: string
  }
  definition: string
  relatedTerms?: string[]
  category?: string
  publishedAt: string
}
