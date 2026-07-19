// SERVER COMPONENT — no "use client" directive
// Interactive islands are isolated in their own client components
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PhotoGallery } from "@/components/home/photo-gallery"
import nextDynamic from 'next/dynamic'
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Dynamically import non-critical UI — deferred after main content paints
const ParticleEffects = nextDynamic(() => import('@/components/particle-effects').then(m => ({ default: m.ParticleEffects })), { ssr: false })
const GoogleReviews = nextDynamic(() => import('@/components/ui/google-reviews').then(mod => ({ default: mod.GoogleReviews })))
const FAQ = nextDynamic(() => import('@/components/faq').then(mod => ({ default: mod.FAQ })))
const StatCards = nextDynamic(() => import('@/components/home/stat-cards').then(mod => ({ default: mod.StatCards })))
const EventsCarousel = nextDynamic(() => import('@/components/home/events-carousel').then(mod => ({ default: mod.EventsCarousel })))
const PackagesGrid = nextDynamic(() => import('@/components/home/packages-grid').then(mod => ({ default: mod.PackagesGrid })))
const TeaserSection = nextDynamic(() => import('@/app/youtube'))
const ContactWhatsapp = nextDynamic(() => import('@/components/home/contact-whatsapp').then(mod => ({ default: mod.ContactWhatsapp })))

const upcomingEvents = [
  {
    name: "Dev Deepawali",
    date: "23rd–25th November",
    location: "Varanasi (River Cruise Experience)",
    image: "/DD1.PNG",
    description: "Experience the magical festival of lights in Varanasi.",
  },
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900 overflow-x-hidden relative">
      <ParticleEffects />
      <Header />

      {/* Hero — needs scroll hooks, isMobile state */}
      <HeroSection />

      {/* About Us Section */}
      <section id="about" className="py-12 relative bg-gradient-to-b from-orange-50 to-white mt-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              About Margika Yatra
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
              We believe travel is not just about exploring new places; it&apos;s about discovering the depths of your soul.
              Our spiritual journeys are designed to inspire inner transformation, reconnect you with your higher self,
              and immerse you in the sacred energies of India&apos;s most mystical places.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <TeaserSection />
            {/* Stat cards — needs CountUp + intersection observer */}
            <StatCards />
          </div>
        </div>
      </section>

      {/* Previous Trips Photo Slider — pure CSS animation, server-rendered */}
      <section className="py-12 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Previous Trips Gallery
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Beautiful moments from our spiritual journeys with fellow travelers
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Upcoming Events — needs Embla carousel */}
      <section id="upcoming-events" className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Join us for these special spiritual journeys and create memories that last a lifetime
            </p>
          </div>
          <EventsCarousel events={upcomingEvents} />
        </div>
      </section>

      {/* Package Section — needs whileInView animations */}
      <section id="packages" className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Our Spiritual Packages
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Explore our curated spiritual tour packages designed to elevate your journey
            </p>
          </div>
          <PackagesGrid />
        </div>
      </section>

      <GoogleReviews />
      <FAQ />

      {/* Contact Section — server-rendered static layout with client WhatsApp button */}
      <section id="contact" className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Have questions or ready to book your journey? Reach out to us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone / WhatsApp */}
            <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Call &amp; WhatsApp</h3>
                  <p className="text-gray-700 mb-4">+91 72087 71688</p>
                </div>
                <ContactWhatsapp />
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Email Address</h3>
                  <p className="text-gray-700 mb-4">margikayatra@gmail.com</p>
                </div>
                <a href="mailto:margikayatra@gmail.com" className="w-full mt-auto">
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full">
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Office */}
            <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Our Office</h3>
                  <p className="text-gray-700 mb-4">
                    Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                  </p>
                </div>
                <a href="https://www.google.com/maps/search/Margika+Yatra" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full">
                    View on Map
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
