import type { Metadata } from 'next'

import { getPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/ujjain-omkareshwar-tour-package', {
    title: 'Ujjain Omkareshwar Bhasma Aarti Tour | Margika Yatra',
    description: 'Book Ujjain-Omkareshwar yatra from Mumbai/Thane with Mahakal Bhasma Aarti VIP pass & darshan at 2 Jyotirlingas. 3N/4D from ₹10,500, senior-friendly.',
  })
}

export default function UjjainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
