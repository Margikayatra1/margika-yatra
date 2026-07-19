"use client"
import { LazyMotion, m } from "framer-motion"
const loadFeatures = () => import("framer-motion").then(res => res.domAnimation)
import { Clock, IndianRupee, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { tripPackages } from "@/lib/trip-packages"

export function PackagesGrid() {
  return (
    <LazyMotion features={loadFeatures}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tripPackages.map((pkg, index) => (
          <m.div
            key={pkg.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-white/90 border-orange-200 overflow-hidden group hover:border-orange-300 transition-all duration-500 shadow-2xl h-full flex flex-col">
              <div className="relative h-52">
                <Image unoptimized={true}
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  quality={70}
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
                <Link prefetch={true} href={pkg.id === "ujjain" ? "/ujjain-omkareshwar-tour-package" : pkg.id === "kerala" ? "/kerala-tour-packages-from-mumbai" : `/packages/${pkg.id}`}>
                  <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl border-0 font-semibold">
                    Book Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>
    </LazyMotion>
  )
}
