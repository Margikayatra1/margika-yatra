import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customized Pilgrimage Tour Packages | Margika Yatra',
  description: 'Plan a personalized spiritual trip with Margika Yatra. Custom itineraries for family, senior citizens & groups with flexible budget, dates & VIP darshan.',
}

export default function PersonalizedTripLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
