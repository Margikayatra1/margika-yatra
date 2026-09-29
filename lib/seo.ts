import type { Metadata } from 'next'
import { groq } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

export const SITE_URL = 'https://www.margikayatra.com'

export type SeoFields = {
  focusKeyword?: string
  secondaryKeywords?: string[]
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  noIndex?: boolean
  noFollow?: boolean
  ogImage?: any
}

export type PageSeoDocument = {
  pageName?: string
  path?: string
  targetH1?: string
  recommendedH2s?: string[]
  schemaType?: string
  seo?: SeoFields
  faqs?: Array<{ q?: string; a?: string }>
}

const pageSeoQuery = groq`*[_type == "pageSeo" && path == $path][0] {
  pageName,
  path,
  targetH1,
  recommendedH2s,
  schemaType,
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
  faqs
}`

function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`
}

function imageUrl(source: any) {
  if (!source) return undefined
  try {
    return urlForImage(source)?.width(1200).height(630).fit('crop').url()
  } catch {
    return undefined
  }
}

export function buildMetadata({
  seo,
  path,
  fallbackTitle,
  fallbackDescription,
  fallbackImage,
  openGraphType = 'website',
}: {
  seo?: SeoFields
  path: string
  fallbackTitle: string
  fallbackDescription: string
  fallbackImage?: any
  openGraphType?: 'website' | 'article'
}): Metadata {
  const title = seo?.metaTitle?.trim() || fallbackTitle
  const description = seo?.metaDescription?.trim() || fallbackDescription
  const canonical = seo?.canonicalUrl?.trim() || absoluteUrl(path)
  const ogImage = imageUrl(seo?.ogImage || fallbackImage)
  const keywords = [seo?.focusKeyword, ...(seo?.secondaryKeywords || [])].filter(Boolean) as string[]

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical },
    robots: {
      index: !seo?.noIndex,
      follow: !seo?.noFollow,
      googleBot: {
        index: !seo?.noIndex,
        follow: !seo?.noFollow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: openGraphType,
      url: canonical,
      siteName: 'Margika Yatra',
      title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: seo?.ogImage?.alt || title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export async function getPageSeo(path: string): Promise<PageSeoDocument | null> {
  try {
    return await client.fetch(pageSeoQuery, { path }, { next: { revalidate: 60 } })
  } catch (error) {
    console.error(`[SEO] Sanity page SEO fetch failed for ${path}`, error)
    return null
  }
}

export async function getPageMetadata(
  path: string,
  fallback: { title: string; description: string; image?: any }
): Promise<Metadata> {
  const page = await getPageSeo(path)
  return buildMetadata({
    seo: page?.seo,
    path,
    fallbackTitle: fallback.title,
    fallbackDescription: fallback.description,
    fallbackImage: fallback.image,
  })
}
