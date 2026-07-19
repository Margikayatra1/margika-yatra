"use client"
import { useEffect, useRef, useState } from "react"
import { Clock, IndianRupee, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { tripPackages } from "@/lib/trip-packages"

// Native IntersectionObserver replaces framer-motion — saves ~50KB of JS
function PackageCard({ pkg, index }: { pkg: (typeof tripPackages)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.05, rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.4s ease ${index * 0.04}s, transform 0.4s ease ${index * 0.04}s`,
      }}
    >
      <Card className="bg-white border-orange-200 overflow-hidden group hover:border-orange-300 transition-all duration-300 shadow-lg h-full flex flex-col">
        <div className="relative h-52">
        <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 32vw"
            className="object-cover"
            loading="lazy"
            quality={55}
          />
          <Badge className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg font-semibold">{pkg.location}</Badge>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">{pkg.name}</h3>
            <p className="text-gray-700 text-base mb-4 line-clamp-2">{pkg.description}</p>
            <div className="flex items-center text-gray-700 mb-2">
              <Clock className="h-5 w-5 mr-2 text-orange-500" /><span className="font-medium">{pkg.duration}</span>
            </div>
            <div className="flex items-center text-gray-700 mb-6 gap-2">
              <IndianRupee className="h-5 w-5 text-orange-500" />
              <span className="line-through text-gray-400 text-base">{pkg.originalPrice.replace("₹", "")}</span>
              <span className="font-bold text-xl text-orange-600">{pkg.price.replace("₹", "")}</span>
            </div>
          </div>
          <Link href={pkg.id === "ujjain" ? "/ujjain-omkareshwar-tour-package" : pkg.id === "kerala" ? "/kerala-tour-packages-from-mumbai" : `/packages/${pkg.id}`}>
            <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl border-0 font-semibold">
              Book Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export function PackagesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tripPackages.map((pkg, index) => (
        <PackageCard key={pkg.id} pkg={pkg} index={index} />
      ))}
    </div>
  )
}
