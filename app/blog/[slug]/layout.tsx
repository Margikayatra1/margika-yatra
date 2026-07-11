import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  
  if (slug === 'top-25-pilgrimage-places-in-india') {
    return {
      title: 'Top 25 Best Pilgrimage Places in India | Travel Guide',
      description: 'Explore the best pilgrimage places in India, from Char Dham to Rameshwaram. Get practical tips, tour package ideas, and planning advice for every traveler.',
    }
  }
  
  if (slug === 'first-time-pilgrim-guide') {
    return {
      title: 'Pilgrimage Travel Tips for First-Time Pilgrims',
      description: 'Planning your first sacred journey can feel overwhelming. Get practical tips on packing, routes, safety, and how a spiritual travel agency can help.',
    }
  }

  if (slug === 'best-religious-places-to-visit-in-india') {
    return {
      title: 'Best Religious Places to Visit in India | Full Guide',
      description: 'Discover the best religious places to visit in India, from Kedarnath to Kerala. Practical tips, tour package insights, and planning advice for every pilgrim.',
    }
  }

  return {
    title: 'Spiritual Insights & Guides | Margika Yatra',
  }
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
