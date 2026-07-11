"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, ArrowRight, Sparkles, Phone, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    slug: "first-time-pilgrim-guide",
    title: "Travel Tips for First-Time Pilgrims in India",
    excerpt: "Planning your first pilgrimage? These essential travel tips will help you enjoy a smooth and spiritually fulfilling journey. Here's what you need to know before you go.",
    coverImage: "/HomeMain.png",
    date: "July 3, 2026",
    readTime: "8 min read",
    category: "Pilgrimage Guide",
    location: "India"
  },
  {
    slug: "top-25-pilgrimage-places-in-india",
    title: "Top 25 Best Pilgrimage Places in India | Travel Guide",
    excerpt: "Explore the best pilgrimage places in India, from Char Dham to Rameshwaram. Get practical tips, tour package ideas, and planning advice for every traveler.",
    coverImage: "/dev1.png",
    date: "June 28, 2026",
    readTime: "7 min read",
    category: "Travel Guide",
    location: "India"
  },
  {
    slug: "best-religious-places-to-visit-in-india",
    title: "Best Religious Places to Visit in India | Full Guide",
    excerpt: "Discover the best religious places to visit in India, from Kedarnath to Kerala. Practical tips, tour package insights, and planning advice for every pilgrim.",
    coverImage: "/rambg.jpg",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Travel Guide",
    location: "India"
  }
]

export default function BlogListingPage() {
  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  return (
    <main className="min-h-screen bg-[#fffcf8] text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#181009] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/HomeMain.png"
            alt="Spiritual pilgrimage in India"
            fill
            className="object-cover opacity-60 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1005]/40 via-[#0a0600]/55 to-[#0a0600]/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500/10 border border-orange-400/30 text-orange-400 px-3 py-1 hover:bg-orange-500/20 text-sm tracking-wider uppercase font-semibold">
              Margika Yatra Blog
            </Badge>
            <h1 className="mb-6 font-serif text-4xl md:text-6xl font-light leading-tight text-white tracking-wide">
              Spiritual <span className="text-orange-300 italic font-normal">Insights & Guides</span>
            </h1>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Explore useful guides, festival dates, physical preparation tips, and cultural insights to help you prepare for a safe and spiritually fulfilling pilgrimage.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogs.map((blog) => (
            <Card key={blog.slug} className="group border border-orange-100/60 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-xl shadow-md">
              <div>
                {/* Cover Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-2.5 py-0.5 text-xs rounded-md shadow-md uppercase tracking-wider">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Body */}
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-orange-500" />
                      {blog.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-orange-500" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </CardContent>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-orange-50/60 mt-auto flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-orange-500" />
                  {blog.location}
                </span>
                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group-hover:underline">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Thane Office / CTA Section */}
      <section className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 border-t border-orange-100/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl border border-orange-100 shadow-lg">
            <div>
              <Sparkles className="h-8 w-8 text-orange-500 mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Want to Plan a Custom Yatra?
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Our specialists at Margika Yatra arrange complete customized tours from Thane & Mumbai. Let us handle hotels, meals, transport, and vip darshans so you can focus on devotion.
              </p>
              <div className="flex gap-4">
                <a 
                  href="tel:+917208771688"
                  className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-5 rounded-lg shadow-md transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Expert
                </a>
                <a 
                  href={wa("I want to discuss customized trip planning")}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-lg shadow-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-orange-100 pt-8 md:pt-0 md:pl-10 space-y-4">
              <h3 className="font-serif font-bold text-gray-900 text-lg">Visit Our Thane Office</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are a local agency built on trust. Feel free to visit our Brahmand office to plan your spiritual journey face-to-face.
              </p>
              <div className="text-sm text-gray-700 space-y-1 bg-orange-50/40 p-4 rounded-lg border border-orange-100/50">
                <p className="font-bold text-orange-950">Margika Yatra Office</p>
                <p>Brahmand, Thane West,</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
