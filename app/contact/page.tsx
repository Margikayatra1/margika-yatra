"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleEffects } from "@/components/particle-effects"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const handleGeneralWhatsapp = () => {
    const phoneNumber = '+917208771688'
    const message = encodeURIComponent("Hello, I'm interested in a spiritual trip with Margika Yatra.")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    if (typeof window !== 'undefined') {
      window.open(whatsappURL, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900 overflow-x-hidden">
      <ParticleEffects />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image unoptimized={true}
            src="/rambg.jpg"
            alt="Contact Margika Yatra"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-orange-50/20 to-orange-100/40" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link prefetch={true} href="/" className="inline-flex items-center text-orange-600 hover:text-orange-500 mb-6 transition-colors font-medium">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-orange-700 font-semibold max-w-3xl mx-auto uppercase tracking-wide">
              We are here to guide your sacred journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.15)" }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col items-center h-full">
                  <div className="p-4 bg-orange-50 rounded-full mb-6">
                    <Phone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Call & WhatsApp</h3>
                  <p className="text-gray-600 mb-6 font-medium text-lg">+91 72087 71688</p>
                  <div className="space-y-3 w-full mt-auto">
                    {/* <a href="tel:+917208771688" className="block w-full">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5">
                        Call Direct
                      </Button>
                    </a> */}
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-50 font-bold py-2.5"
                      onClick={handleGeneralWhatsapp}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Message on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.15)" }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col items-center h-full">
                  <div className="p-4 bg-orange-50 rounded-full mb-6">
                    <Mail className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-600 mb-6 font-medium text-lg">margikayatra@gmail.com</p>
                  <div className="w-full mt-auto">
                    <a href="mailto:margikayatra@gmail.com" className="block w-full">
                      <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-2.5">
                        Send Email
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.15)" }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col items-center h-full">
                  <div className="p-4 bg-orange-50 rounded-full mb-6">
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                  </p>
                  <div className="w-full mt-auto">
                    <a href="https://maps.app.goo.gl/Ns7jpeGbK9LLYKG76" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-2.5">
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-white/90 border border-orange-200 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-950 mb-2 text-center">Locate Us</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Visit our office in Thane, Mumbai for a direct consultation.
                </p>

                <div className="rounded-xl overflow-hidden border border-orange-100 h-[450px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.425263640245!2d72.98188147600867!3d19.26388838697664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb4a72190c11%3A0xc632cafdeb26659c!2sMargika%20Yatra!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Margika Yatra Location Map"
                  ></iframe>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
