import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Margika Yatra | Book Your Pilgrimage Tour Today',
  description: 'Contact Margika Yatra in Thane, Mumbai for spiritual tour bookings. Call, WhatsApp or email us to plan your Char Dham, Kerala or Jyotirlinga yatra package.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
