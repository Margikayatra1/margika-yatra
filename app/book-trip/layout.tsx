import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Trip - Spiritual Tour Packages | Margika Yatra',
  description: 'Book your spiritual yatra with Margika Yatra in a few simple steps. Choose from Char Dham, Kerala, Dwarka-Somnath & more with instant enquiry confirmation.',
}

export default function BookTripLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
