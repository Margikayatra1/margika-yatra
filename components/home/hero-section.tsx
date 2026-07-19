// Pure SERVER component — zero JS for the hero
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32">
      <div className="absolute inset-0 z-0">
        <Image unoptimized={true}
          src="/HomeMain.png"
          alt="Spiritual Journey"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-orange-50/40 to-orange-100/60" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center" style={{ marginTop: '60px' }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
          Best Spiritual Travel
          <br />
          Agency in India
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow-sm">
          Embark on a transformative spiritual journey that connects your soul with India&apos;s most sacred destinations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#packages" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold">
              Explore Packages <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link prefetch={true} href="/personalized-trip" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg shadow-xl font-semibold">
              Plan Custom Trip
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
