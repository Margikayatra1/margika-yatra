import type { Metadata } from 'next'

import { JsonLd } from '@/components/JsonLd'
import { getPackageCms } from '@/lib/package-cms'
import { buildMetadata, getPageSeo } from '@/lib/seo'
import { PackageCmsProvider } from './PackageCmsContext'

const packageMeta: Record<string, { title: string; description: string }> = {
  'char-dham': {
    title: 'Char Dham Yatra Package from Mumbai | Margika Yatra',
    description: 'Book Char Dham & Do Dham Yatra package from Mumbai covering Yamunotri, Gangotri, Kedarnath & Badrinath. 10N/11D at ₹26,999 with VIP darshan & all meals.',
  },
  'dev-deepawali': {
    title: 'Dev Deepawali Varanasi Tour Package | Margika Yatra',
    description: "Book Dev Deepawali in Varanasi tour package from Mumbai. Witness Kashi's festival of lights with river cruise, Ganga Aarti & temple darshan. 2N/3D trip.",
  },
  'dwarka-somnath': {
    title: 'Dwarka Somnath Tour Package from Mumbai | Margika Yatra',
    description: 'Book Dwarka-Somnath Yatra from Mumbai covering Dwarkadhish Temple, Nageshwar Jyotirlinga & Somnath Temple. 3N/4D package at ₹8,999 with darshan & stay.',
  },
  'jagannath-puri': {
    title: 'Jagannath Puri Tour Package from Mumbai | Margika Yatra',
    description: 'Book Jagannath Puri yatra from Mumbai with Jagannath Temple darshan, Konark Sun Temple & Chilika Lake. 2N/3D package at ₹12,999, ideal for all age groups.',
  },
  maharashtra: {
    title: '3 Jyotirlinga Maharashtra Tour Package | Margika Yatra',
    description: 'Book Maharashtra Jyotirlinga yatra from Mumbai/Thane covering Bhimashankar, Trimbakeshwar & Grishneshwar. 3N/2D package at ₹11,999 with darshan & stay.',
  },
  rameshwaram: {
    title: 'Rameshwaram Tour Package from Mumbai | Margika Yatra',
    description: 'Book Rameshwaram pilgrimage tour from Mumbai to Ramanathaswamy Temple & Dhanushkodi. 3N/4D package at ₹9,499 with darshan, stay, meals & transport.',
  },
  varanasi: {
    title: 'Varanasi Ayodhya Prayagraj Tour Package | Margika Yatra',
    description: 'Book Varanasi-Ayodhya-Prayagraj tour from Mumbai covering Kashi Vishwanath, Ram Mandir & Triveni Sangam. 2N/3D package at ₹13,499 with darshan & stay.',
  },
  'tri-city': {
    title: 'Varanasi Ayodhya Prayagraj Tour Package | Margika Yatra',
    description: 'Book Varanasi-Ayodhya-Prayagraj tour from Mumbai covering Kashi Vishwanath, Ram Mandir & Triveni Sangam. 2N/3D package at ₹13,499 with darshan & stay.',
  },
  kerala: {
    title: 'Kerala Tour Packages from Mumbai | Margika Yatra',
    description: 'Book Kerala tour packages from Mumbai covering Munnar, Thekkady, Alleppey houseboat stay & Kochi. 3N/4D trip at ₹10,999 for families, couples & groups.',
  },
  ujjain: {
    title: 'Ujjain Omkareshwar Bhasma Aarti Tour | Margika Yatra',
    description: 'Book Ujjain-Omkareshwar yatra from Mumbai/Thane with Mahakal Bhasma Aarti VIP pass & darshan at 2 Jyotirlingas. 3N/4D from ₹10,500, senior-friendly.',
  },
}

const preferredCanonicalByPackage: Record<string, string> = {
  kerala: 'https://www.margikayatra.com/kerala-tour-packages-from-mumbai',
  ujjain: 'https://www.margikayatra.com/ujjain-omkareshwar-tour-package',
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const path = `/packages/${params.id}`
  const fallback = packageMeta[params.id] || {
    title: 'Spiritual Tour Package | Margika Yatra',
    description: 'Book spiritual pilgrimage tour packages from Mumbai with Margika Yatra. Curated itineraries, darshan support and trip coordination.',
  }

  const [cms, pageSeo] = await Promise.all([getPackageCms(params.id), getPageSeo(path)])

  const selectedSeo = cms?.seo || pageSeo?.seo
  const seo = selectedSeo
    ? {
        ...selectedSeo,
        canonicalUrl: selectedSeo.canonicalUrl || preferredCanonicalByPackage[params.id],
      }
    : preferredCanonicalByPackage[params.id]
      ? { canonicalUrl: preferredCanonicalByPackage[params.id] }
      : undefined

  return buildMetadata({
    seo,
    path,
    fallbackTitle: fallback.title,
    fallbackDescription: fallback.description,
    fallbackImage: cms?.heroImage,
  })
}

export default async function PackageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const cms = await getPackageCms(params.id)
  const visibleFaqs = (cms?.faqs || []).filter((item) => item?.q && item?.a)

  const faqSchema = visibleFaqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: visibleFaqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null

  return (
    <PackageCmsProvider value={cms}>
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {children}
    </PackageCmsProvider>
  )
}
