import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import BlogDetailClient from "./BlogDetailClient"
import SanityBlogClient from "./SanityBlogClient"
import { JsonLd } from "@/components/JsonLd"
import { urlForImage } from "@/sanity/lib/image"

export const revalidate = 60

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // 1. Check Sanity first
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    title,
    h1,
    "slug": slug.current,
    excerpt,
    coverImage { ..., alt },
    date,
    readTime,
    category,
    location,
    content,
    faqs,
    seo,
    _updatedAt
  }`
  let sanityBlog: any = null
  try {
    sanityBlog = await client.fetch(query, { slug }, { next: { revalidate: 60 } })
  } catch (error) {
    console.error(`[Blog] Sanity fetch failed for ${slug}; using hardcoded fallback when available.`, error)
  }

  // 2. If Sanity has the blog, render the Sanity client
  if (sanityBlog) {
    const imageUrl = sanityBlog.coverImage ? urlForImage(sanityBlog.coverImage)?.width(1200).url() : undefined
    const schemas: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: sanityBlog.h1 || sanityBlog.title,
        description: sanityBlog.seo?.metaDescription || sanityBlog.excerpt,
        datePublished: sanityBlog.date,
        dateModified: sanityBlog._updatedAt || sanityBlog.date,
        image: imageUrl ? [imageUrl] : undefined,
        mainEntityOfPage: `https://www.margikayatra.com/blog/${slug}`,
        author: { '@type': 'Organization', name: 'Margika Yatra' },
        publisher: { '@type': 'Organization', name: 'Margika Yatra' },
      },
    ]

    if (sanityBlog.faqs?.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: sanityBlog.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      })
    }

    return (
      <>
        <JsonLd data={schemas} />
        <SanityBlogClient blog={sanityBlog} />
      </>
    )
  }

  // 3. Otherwise, fallback to the hardcoded database
  // The BlogDetailClient handles checking if the hardcoded blog exists.
  return <BlogDetailClient slug={slug} />
}
