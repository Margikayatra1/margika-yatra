"use client"

import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Sparkles, Phone, MessageSquare, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"

export default function SanityBlogClient({ blog }: { blog: any }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Extract sections from Sanity Portable Text
  const sections = useMemo(() => {
    return blog.content
      ?.filter((block: any) => block._type === 'block' && block.style === 'h2')
      ?.map((block: any) => {
        const title = block.children?.map((child: any) => child.text).join('') || ''
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        return { id, title }
      }) || []
  }, [blog.content])

  const [activeSection, setActiveSection] = useState(sections[0]?.id || "")

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  // Title Splitting for Subtitle styling
  const titleParts = blog.title.includes('|') 
    ? blog.title.split('|') 
    : blog.title.includes(':')
      ? blog.title.split(':')
      : [blog.title, '']
  const mainTitle = titleParts[0].trim()
  const subtitle = titleParts[1]?.trim() || ''

  const myPortableTextComponents = {
    block: {
      h2: ({ children, value }: any) => {
        const text = value.children?.map((child: any) => child.text).join('') || ''
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        
        let numberPart = ""
        let restOfTitle = children
        
        if (typeof children[0] === 'string' && children[0].match(/^\d+\./)) {
           const match = children[0].match(/^(\d+\.)\s*(.*)/)
           if (match) {
              numberPart = match[1]
              restOfTitle = [match[2], ...children.slice(1)]
           }
        }
  
        return (
          <h2 id={id} className="scroll-mt-28 text-2xl font-serif font-medium text-orange-950 mb-4 mt-12 flex items-center gap-3 border-t border-orange-100/60 pt-6">
            {numberPart && <span className="text-orange-600">{numberPart}</span>}
            {restOfTitle}
          </h2>
        )
      },
      h3: ({ children }: any) => <h3 className="text-xl font-serif font-semibold text-orange-900 mb-3 mt-8">{children}</h3>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-gray-700 bg-orange-50/40 rounded-r-lg shadow-sm">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="grid gap-3 list-none pl-0 mb-6">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-5 mb-6 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100/50 shadow-sm transition-all hover:shadow-md">
          <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
        </li>
      ),
    }
  }

  return (
    <main className="min-h-screen bg-[#fffcf8] text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-[1000] h-1 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#181009] overflow-hidden">
        {/* Background image with high contrast */}
        <div className="absolute inset-0 z-0">
          <Image unoptimized={true}
            src={blog.coverImage ? urlForImage(blog.coverImage)?.url() || '/placeholder.png' : '/placeholder.png'}
            alt={mainTitle}
            fill
            className="object-cover opacity-70 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1005]/30 via-[#0a0600]/45 to-[#0a0600]/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/10 border border-orange-400/30 text-orange-400 px-3 py-1 hover:bg-orange-500/20 text-sm tracking-wider uppercase font-semibold">
              {blog.category || 'Pilgrimage Guide'}
            </Badge>
            <h1 className="mb-6 font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white tracking-wide">
              {mainTitle}
              {subtitle && (
                <>
                  <br />
                  <span className="text-orange-300 font-normal italic">{subtitle}</span>
                </>
              )}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 border-t border-b border-white/10 py-4 max-w-2xl mx-auto">
              <span className="flex items-center gap-2 text-white">
                <CalendarDays className="h-4 w-4 text-orange-400" />
                {blog.date}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-2 text-white">
                <Clock className="h-4 w-4 text-orange-400" />
                {blog.readTime || '5 min read'}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4 text-orange-400" />
                {blog.location || 'India'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-8 md:gap-12 items-start">
          
          {/* Left Column: Sticky Table of Contents (Desktop Only) */}
          <aside className="hidden lg:block sticky top-28 space-y-6 self-start max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-thin">
            <div className="bg-white/80 border border-orange-100/60 rounded-lg p-5 backdrop-blur-sm">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-orange-100">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section: any) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-xs font-medium transition-all duration-200 py-1 border-l-2 pl-3 ${
                      activeSection === section.id
                        ? "border-orange-500 text-orange-600 font-semibold translate-x-1"
                        : "border-transparent text-gray-500 hover:text-gray-900 hover:border-orange-200"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-lg p-5 shadow-lg">
              <Sparkles className="h-6 w-6 text-orange-200 mb-3" />
              <h4 className="font-serif text-lg font-medium leading-snug mb-2">Need a custom itinerary?</h4>
              <p className="text-xs text-orange-50/90 leading-relaxed mb-4">
                Let us plan your spiritual journey from Thane, Mumbai or anywhere in India.
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+917208771688"
                  className="flex items-center justify-center gap-2 bg-white text-orange-700 py-2 rounded font-medium text-xs hover:bg-orange-50 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Expert
                </a>
                <a 
                  href={wa(`I want to enquire about ${mainTitle}`)}
                  className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-2 rounded font-medium text-xs hover:bg-emerald-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </aside>

          {/* Middle Column: The Article Content */}
          <article className="prose prose-orange max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h2:font-medium prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-orange-950 prose-h3:text-lg prose-h3:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-gray-700">
            {blog.content ? (
              <PortableText value={blog.content} components={myPortableTextComponents} />
            ) : (
              <p>No content found.</p>
            )}

            {/* FAQs Accordion */}
            {blog.faqs && blog.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28 border-t border-orange-100/60 pt-8 pb-10 mt-12">
                <h2 className="text-3xl font-serif font-medium text-orange-950 mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-orange-600" /> Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {blog.faqs.map((faq: any, index: number) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index} 
                        className="border border-orange-100 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-lg font-medium text-gray-900 hover:text-orange-700 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <span className={`text-2xl font-light text-orange-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </button>
                        
                        <div 
                          className="transition-all duration-300 ease-in-out overflow-hidden"
                          style={{ 
                            maxHeight: isOpen ? "500px" : "0px",
                            opacity: isOpen ? 1 : 0
                          }}
                        >
                          <p className="p-5 pt-0 text-sm leading-relaxed text-gray-600 border-t border-orange-50/50 bg-[#fffdfb]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Right Column: Floating Sidebar Widgets */}
          <aside className="space-y-6 sticky top-28 self-start lg:block">
            {/* Promo / Booking Card */}
            <Card className="border-orange-100 bg-white shadow-lg overflow-hidden relative">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200 border-none">Limited Slots</Badge>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Book Your Darshan</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Special arrangements for priority darshan and VIP aarti access.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium" asChild>
                  <a href={wa("I would like to book a pilgrimage package")}>
                    Plan Trip Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Thane Office / CTA Section */}
      <section className="bg-orange-950 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Ready to start your journey?</h2>
          <p className="text-orange-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Visit our office in Thane, Mumbai for a personalized consultation, or connect with our experts online to design your perfect spiritual itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-8" asChild>
              <a href={wa("I'm ready to start planning my pilgrimage trip")}>
                Chat with an Expert
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-400 hover:bg-orange-900 hover:text-orange-300 font-medium px-8" asChild>
              <Link prefetch={true} href="/contact">
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
