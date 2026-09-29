import type { Metadata } from 'next'

import { getPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/about', {
    title: 'About Us - Margika Yatra | Spiritual Tour Operator Mumbai',
    description: 'Learn about Margika Yatra, a Mumbai-based spiritual travel agency with 500+ happy yatris, 4.9★ Google rating & curated pilgrimage tours across India.',
  })
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
