import type { Metadata } from 'next'

import { getPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/privacy', {
    title: 'Privacy Policy | Margika Yatra',
    description: 'Read Margika Yatra\'s privacy policy to understand how we collect, use and protect your personal information when you book a pilgrimage tour with us.',
  })
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
