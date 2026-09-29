import type { Metadata } from 'next'
import { groq } from 'next-sanity'

import { buildMetadata } from '@/lib/seo'
import { client } from '@/sanity/lib/client'

const fallbackMeta: Record<string, { title: string; description: string }> = {
  'top-25-pilgrimage-places-in-india': {
    title: 'Top 25 Best Pilgrimage Places in India | Travel Guide',
    description: 'Explore the best pilgrimage places in India, from Char Dham to Rameshwaram. Get practical tips, tour package ideas, and planning advice for every traveler.',
  },
  'first-time-pilgrim-guide': {
    title: 'Pilgrimage Travel Tips for First-Time Pilgrims',
    description: 'Planning your first sacred journey can feel overwhelming. Get practical tips on packing, routes, safety, and how a spiritual travel agency can help.',
  },
  'best-religious-places-to-visit-in-india': {
    title: 'Best Religious Places to Visit in India | Full Guide',
    description: 'Discover the best religious places to visit in India, from Kedarnath to Kerala. Practical tips, tour package insights, and planning advice for every pilgrim.',
  },
}

const blogSeoQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  title,
  h1,
  excerpt,
  coverImage { ..., alt },
  seo {
    focusKeyword,
    secondaryKeywords,
    metaTitle,
    metaDescription,
    canonicalUrl,
    noIndex,
    noFollow,
    ogImage { ..., alt }
  }
}`

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  let blog: any = null
  try {
    blog = await client.fetch(blogSeoQuery, { slug: params.slug }, { next: { revalidate: 60 } })
  } catch (error) {
    console.error(`[SEO] Sanity blog SEO fetch failed for ${params.slug}`, error)
  }

  if (blog) {
    return buildMetadata({
      seo: blog.seo,
      path: `/blog/${params.slug}`,
      fallbackTitle: blog.title || blog.h1 || 'Spiritual Insights & Guides | Margika Yatra',
      fallbackDescription: blog.excerpt || 'Spiritual travel guides, pilgrimage planning tips and yatra insights from Margika Yatra.',
      fallbackImage: blog.coverImage,
      openGraphType: 'article',
    })
  }

  const fallback = fallbackMeta[params.slug] || {
    title: 'Spiritual Insights & Guides | Margika Yatra',
    description: 'Spiritual travel guides, pilgrimage planning tips and yatra insights from Margika Yatra.',
  }

  return buildMetadata({
    path: `/blog/${params.slug}`,
    fallbackTitle: fallback.title,
    fallbackDescription: fallback.description,
    openGraphType: 'article',
  })
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
