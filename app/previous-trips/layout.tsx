import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reviews & Previous Trips | Margika Yatra Pilgrims',
  description: 'See real reviews & photos from 500+ happy yatris who traveled with Margika Yatra. 4.9★ rated spiritual tours to Char Dham, Kerala, Puri & more.',
}

export default function PreviousTripsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
