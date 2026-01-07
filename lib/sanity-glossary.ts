import { client } from "./sanity"
import type { GlossaryTerm } from "@/types/glossary"

export async function getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  const query = `*[_type == "glossary" && !(_id in path("drafts.**"))] | order(term asc) {
    _id,
    term,
    slug,
    definition,
    relatedTerms,
    category,
    publishedAt
  }`

  return await client.fetch(query)
}

export async function getGlossaryTermBySlug(slug: string): Promise<GlossaryTerm | null> {
  const query = `*[_type == "glossary" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id,
    term,
    slug,
    definition,
    relatedTerms,
    category,
    publishedAt
  }`

  return await client.fetch(query, { slug })
}

export async function getGlossaryTermsByCategory(category: string): Promise<GlossaryTerm[]> {
  const query = `*[_type == "glossary" && !(_id in path("drafts.**")) && category == $category] | order(term asc) {
    _id,
    term,
    slug,
    definition,
    category,
    publishedAt
  }`

  return await client.fetch(query, { category })
}
