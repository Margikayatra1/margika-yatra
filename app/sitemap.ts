import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'

import { SITE_URL } from '@/lib/seo'
import { client } from '@/sanity/lib/client'

export const revalidate = 3600

const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/book-trip',
  '/personalized-trip',
  '/previous-trips',
  '/privacy',
  '/blog',
  '/kerala-tour-packages-from-mumbai',
  '/ujjain-omkareshwar-tour-package',
]

// Keep the same package URLs that the current production sitemap exposes.
// Kerala and Ujjain use their dedicated SEO landing pages instead of the /packages/* duplicates.
const indexedPackageSlugs = [
  'dev-deepawali',
  'char-dham',
  'varanasi',
  'maharashtra',
  'rameshwaram',
  'jagannath-puri',
  'dwarka-somnath',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const safeFetch = async <T,>(query: string): Promise<T[]> => {
    try {
      return await client.fetch<T[]>(query, {}, { next: { revalidate: 3600 } })
    } catch (error) {
      console.error('[Sitemap] Sanity fetch failed; using known static routes.', error)
      return []
    }
  }

  const [blogs, managedSeoPages, cmsPackages] = await Promise.all([
    safeFetch<any>(groq`*[_type == "blog" && defined(slug.current)]{ "slug": slug.current, _updatedAt, "noIndex": seo.noIndex }`),
    safeFetch<any>(groq`*[_type == "pageSeo" && defined(path)]{ path, _updatedAt, "noIndex": seo.noIndex }`),
    safeFetch<any>(groq`*[_type == "tourPackage" && defined(slug.current)]{ "slug": slug.current, _updatedAt, "noIndex": seo.noIndex }`),
  ])

  const pageSeoMap = new Map((managedSeoPages || []).map((item) => [item.path, item]))
  const packageCmsMap = new Map((cmsPackages || []).map((item) => [item.slug, item]))
  const entries: MetadataRoute.Sitemap = []

  for (const path of staticPaths) {
    const managed = pageSeoMap.get(path) as any
    if (managed?.noIndex) continue

    entries.push({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified: managed?._updatedAt ? new Date(managed._updatedAt) : undefined,
      changeFrequency: path === '/blog' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : path === '/book-trip' || path === '/personalized-trip' ? 0.9 : 0.7,
    })
  }

  for (const slug of indexedPackageSlugs) {
    const cms = packageCmsMap.get(slug) as any
    if (cms?.noIndex) continue

    entries.push({
      url: `${SITE_URL}/packages/${slug}`,
      lastModified: cms?._updatedAt ? new Date(cms._updatedAt) : undefined,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  for (const blog of blogs || []) {
    if (!blog?.slug || blog.noIndex) continue
    entries.push({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog._updatedAt ? new Date(blog._updatedAt) : undefined,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  const unique = new Map(entries.map((entry) => [entry.url, entry]))
  return Array.from(unique.values())
}
