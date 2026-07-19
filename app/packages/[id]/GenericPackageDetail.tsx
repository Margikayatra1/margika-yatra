"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock, CreditCard, IndianRupee, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { openPaymentLink } from "@/lib/payment-links"

export function GenericPackageDetail({ pkg }: { pkg: any }) {
  const handleWhatsapp = () => {
    const message = `Namaste! I want to know more about ${pkg.name} package (${pkg.price}, ${pkg.duration}). Please share details and availability.`
    window.open(`https://wa.me/917208771688?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900">
      <Header />

      <main>
        <section className="relative pt-28">
          <div className="container mx-auto px-4">
            <Link prefetch={true} href="/#packages">
              <Button variant="ghost" className="mb-5 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Packages
              </Button>
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="relative min-h-[320px] overflow-hidden rounded-lg shadow-2xl md:min-h-[520px]">
                  <Image unoptimized={true} quality={60} src={pkg.image} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <Badge className="mb-3 bg-orange-500 text-white">{pkg.location}</Badge>
                    <h1 className="max-w-3xl text-3xl font-bold text-white drop-shadow md:text-5xl">{pkg.name}</h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="border-orange-200 bg-white/95 shadow-2xl">
                  <CardContent className="p-6">
                    <p className="mb-5 text-gray-700">{pkg.description}</p>

                    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded-lg bg-orange-50 p-4">
                        <MapPin className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Location</p>
                        <p className="font-bold text-gray-900">{pkg.location}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-4">
                        <Clock className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Duration</p>
                        <p className="font-bold text-gray-900">{pkg.duration}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-4">
                        <IndianRupee className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Starting From</p>
                        <p className="font-bold text-gray-900">{pkg.price}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="mb-3 text-xl font-bold text-orange-700">Highlights</h2>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights?.map((highlight: string) => (
                          <Badge key={highlight} variant="outline" className="border-orange-300 text-orange-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
                        onClick={() => openPaymentLink(pkg.name, pkg.price)}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-orange-500 text-orange-700 hover:bg-orange-50"
                        onClick={handleWhatsapp}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Enquire on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
            <Card className="border-orange-200 bg-white/90 shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-orange-700">Package Details</h2>
                <p className="leading-7 text-gray-700">{pkg.overview}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white/90 shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-orange-700">Included</h2>
                <div className="grid gap-3">
                  {pkg.inclusions?.map((item: string) => (
                    <div key={item} className="flex items-center gap-3 text-gray-800">
                      <CheckCircle2 className="h-5 w-5 flex-none text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
