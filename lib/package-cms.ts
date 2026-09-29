import { cache } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

export type PackageCmsRecord = {
  _id?: string
  name?: string
  slug?: { current?: string }
  heroImage?: any
  shortDescription?: string
  content?: any[]
  headingOverrides?: Array<{ key?: string; line1?: string; line2?: string; accentLine?: string }>
  textOverrides?: Array<{ key?: string; text?: string }>
  seo?: any
  faqs?: Array<{ q?: string; a?: string }>
}

const packageCmsQuery = groq`*[_type == "tourPackage" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  heroImage { ..., alt },
  shortDescription,
  content,
  headingOverrides[] { key, line1, line2, accentLine },
  textOverrides[] { key, text },
  seo {
    focusKeyword,
    secondaryKeywords,
    metaTitle,
    metaDescription,
    canonicalUrl,
    noIndex,
    noFollow,
    ogImage { ..., alt }
  },
  faqs[] { q, a }
}`

export const getPackageCms = cache(async (slug: string): Promise<PackageCmsRecord | null> => {
  if (!slug) return null
  try {
    return await client.fetch(packageCmsQuery, { slug }, { next: { revalidate: 60 } })
  } catch (error) {
    console.error(`[CMS] Sanity package fetch failed for ${slug}`, error)
    return null
  }
})

export async function getAllPackageCmsSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch<string[]>(groq`*[_type == "tourPackage" && defined(slug.current)].slug.current`, {}, { next: { revalidate: 60 } })
    return Array.from(new Set((slugs || []).filter(Boolean)))
  } catch (error) {
    console.error('[CMS] Sanity package slug fetch failed', error)
    return []
  }
}
