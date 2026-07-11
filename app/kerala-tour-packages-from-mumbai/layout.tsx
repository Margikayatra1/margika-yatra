import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kerala Tour Packages from Mumbai | Margika Yatra',
  description: 'Book Kerala tour packages from Mumbai covering Munnar, Thekkady, Alleppey houseboat stay & Kochi. 3N/4D trip at ₹10,999 for families, couples & groups.',
}

export default function KeralaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
