import type { Metadata } from 'next'

import { getPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/personalized-trip', {
    title: 'Customized Pilgrimage Tour Packages | Margika Yatra',
    description: 'Plan a personalized spiritual trip with Margika Yatra. Custom itineraries for family, senior citizens & groups with flexible budget, dates & VIP darshan.',
  })
}

export default function PersonalizedTripLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
