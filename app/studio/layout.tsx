import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanity Studio | Margika Yatra',
  description: 'Manage content and SEO for Margika Yatra',
  robots: { index: false, follow: false },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
