import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import BlogDetailClient from "./BlogDetailClient"
import SanityBlogClient from "./SanityBlogClient"
import { notFound } from "next/navigation"

export const revalidate = 60

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // 1. Check Sanity first
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    readTime,
    category,
    location,
    content,
    faqs
  }`
  const sanityBlog = await client.fetch(query, { slug })

  // 2. If Sanity has the blog, render the Sanity client
  if (sanityBlog) {
    return <SanityBlogClient blog={sanityBlog} />
  }

  // 3. Otherwise, fallback to the hardcoded database
  // The BlogDetailClient handles checking if the hardcoded blog exists.
  return <BlogDetailClient slug={slug} />
}
