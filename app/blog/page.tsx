import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock, MapPin, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredPost = {
  title: "Char Dham Yatra Guide: Route, Best Time, Packing and Darshan Tips",
  excerpt:
    "A practical guide for first-time yatris planning Yamunotri, Gangotri, Kedarnath and Badrinath with confidence.",
  image: "/4dham.png",
  category: "Char Dham",
  date: "May 28, 2026",
  readTime: "7 min read",
  location: "Uttarakhand",
}

const posts = [
  {
    title: "How to Prepare Elderly Parents for Kedarnath Yatra",
    excerpt:
      "Fitness, palki options, medicine checklist and route planning for a safer mountain journey.",
    image: "/ke.jpg",
    category: "Travel Tips",
    date: "May 20, 2026",
    readTime: "5 min read",
  },
  {
    title: "Varanasi Ganga Aarti: Where to Sit and What to Expect",
    excerpt:
      "A simple guide to timings, ghats, river cruise views and temple visits around Kashi.",
    image: "/vr.jpg",
    category: "Varanasi",
    date: "May 12, 2026",
    readTime: "4 min read",
  },
  {
    title: "Ujjain and Omkareshwar: Two Jyotirlingas in One Trip",
    excerpt:
      "Plan a short spiritual circuit with Mahakaleshwar Bhasma Aarti, Omkareshwar and local transfers.",
    image: "/uj.jpg",
    category: "Jyotirlinga",
    date: "April 30, 2026",
    readTime: "6 min read",
  },
  {
    title: "What to Pack for a Monsoon Pilgrimage in India",
    excerpt:
      "Rainwear, footwear, documents and small comfort items that make group yatras easier.",
    image: "/up.jpg",
    category: "Checklist",
    date: "April 18, 2026",
    readTime: "3 min read",
  },
]

const categories = ["Char Dham", "Jyotirlinga", "Varanasi", "Senior Friendly", "Packing Guides"]

export const metadata = {
  title: "Blog | Margika Yatra",
  description: "Pilgrimage guides, travel tips and spiritual yatra planning by Margika Yatra.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-50 text-gray-900">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/rambg.jpg"
            alt="Spiritual yatra background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-orange-50/85 to-amber-50" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-orange-100 text-orange-700 hover:bg-orange-100">
              Margika Yatra Blog
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Guides for peaceful, well-planned spiritual journeys
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-700">
              Read practical yatra tips, destination guides, packing checklists and darshan planning notes from our travel team.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <Link href="/packages/char-dham" className="group block">
          <Card className="overflow-hidden border-orange-200 bg-white shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5">
                  <Badge className="bg-orange-600 text-white hover:bg-orange-600">
                    Featured Guide
                  </Badge>
                </div>
              </div>
              <CardContent className="flex flex-col justify-center p-7 md:p-10">
                <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-orange-600" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    {featuredPost.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    {featuredPost.location}
                  </span>
                </div>
                <Badge className="mb-4 w-fit bg-orange-50 text-orange-700 hover:bg-orange-50">
                  {featuredPost.category}
                </Badge>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 text-gray-700 leading-7">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-orange-700">
                  Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </div>
          </Card>
        </Link>
      </section>

      <section className="container mx-auto grid gap-8 px-4 pb-20 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Latest Articles
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Yatra planning notes</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title}>
                <Card className="h-full overflow-hidden border-orange-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-wrap gap-3 text-xs font-medium text-gray-600">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-orange-600" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-orange-600" />
                        {post.readTime}
                      </span>
                    </div>
                    <Badge className="mb-3 bg-orange-50 text-orange-700 hover:bg-orange-50">
                      {post.category}
                    </Badge>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-6 text-gray-700">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Plan your next yatra</h3>
              <p className="mb-5 text-sm leading-6 text-gray-700">
                Tell us your destination, travel month and group size. Our team will help with routes, stay, darshan and transport.
              </p>
              <Link href="/book-trip">
                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                  Request Free Quote
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="border-orange-200 bg-orange-50 px-3 py-1.5 text-orange-700"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>

      <Footer />
    </main>
  )
}
