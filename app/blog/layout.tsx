import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Blog - Pilgrimage Tips & Guides | Margika Yatra',
  description: 'Explore Margika Yatra\'s blog for pilgrimage travel tips, best time to visit sacred sites, itinerary guides & spiritual travel inspiration across India.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
