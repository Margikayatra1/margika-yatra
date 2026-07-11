import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ujjain Omkareshwar Bhasma Aarti Tour | Margika Yatra',
  description: 'Book Ujjain-Omkareshwar yatra from Mumbai/Thane with Mahakal Bhasma Aarti VIP pass & darshan at 2 Jyotirlingas. 3N/4D from ₹10,500, senior-friendly.',
}

export default function UjjainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
