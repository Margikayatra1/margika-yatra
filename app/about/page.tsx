"use client"

import { motion } from "framer-motion"
import { Award, Compass, Heart, Shield, Users, CheckCircle, ArrowLeft, Phone, Compass as TempleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleEffects } from "@/components/particle-effects"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Spiritual Expertise",
      desc: "Our team understands the deep significance of every temple, ritual, and sacred destination, allowing for genuine spiritual immersion.",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: "Personalized Service",
      desc: "We customize pilgrimage experiences to match your preferences and requirements, whether you travel solo, with family, or in a group.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Hassle-Free Planning",
      desc: "We handle transportation, accommodation, darshan assistance, and local coordination so you can focus entirely on devotion.",
    },
    {
      icon: <Compass className="h-8 w-8 text-orange-600" />,
      title: "Pan-India Coverage",
      desc: "We organize yatras to India's most sacred destinations, helping devotees from Mumbai, Thane, and across the nation travel with confidence.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Trusted by Pilgrims",
      desc: "Our commitment to quality, transparent pricing, and customer satisfaction has built lasting trust with pilgrims.",
    },
  ]

  const offerings = [
    "Char Dham & Do Dham Yatra",
    "Kedarnath and Badrinath Pilgrimages",
    "12 Jyotirlinga Yatra Packages",
    "Maharashtra Jyotirlinga Tours",
    "Varanasi Tour Packages",
    "Varanasi – Ayodhya – Prayagraj Spiritual Circuits",
    "Ujjain & Omkareshwar Yatra",
    "Jagannath Puri Pilgrimage",
    "Rameshwaram Tour Packages",
    "Customized Spiritual Tours",
    "Group Pilgrimages",
    "Senior Citizen Pilgrimage Tours",
    "Festival-Based Spiritual Tours and Religious Events",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900 overflow-x-hidden">
      <ParticleEffects />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image unoptimized={true}
            src="/rambg.jpg"
            alt="About Margika Yatra"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
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
              About Margika Yatra
            </h1>
            <p className="text-lg md:text-xl text-orange-700 font-semibold max-w-3xl mx-auto uppercase tracking-wide">
              Your Trusted Partner for Spiritual Journeys Across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Block - Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center lg:text-left"
              >
                <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-200 pb-3 text-center lg:text-left">Our Story</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At <strong>Margika Yatra</strong>, we believe that a pilgrimage is much more than a journey, it is a path to self-discovery, devotion, and inner transformation. Founded with the vision of making sacred travel meaningful, comfortable, and accessible, we specialize in carefully curated spiritual tour packages that connect travelers with India's most revered temples, holy rivers, Jyotirlingas, and pilgrimage destinations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Based in Thane, Mumbai, Margika Yatra serves pilgrims and spiritual seekers from across India, offering guided yatras, customized pilgrimage tours, family spiritual vacations, senior citizen-friendly packages, and group tours designed to create unforgettable divine experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 text-center lg:text-left"
              >
                <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-200 pb-3 text-center lg:text-left">Our Mission & Vision</h2>
                <div className="bg-white/80 border border-orange-200/60 rounded-xl p-6 shadow-md space-y-4 text-center lg:text-left">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800 text-center lg:text-left">Our Mission</h3>
                    <p className="text-gray-700">
                      Our mission is to help devotees experience the spiritual richness of India through well-planned, hassle-free, and spiritually enriching journeys. We strive to create travel experiences that bring people closer to their faith while ensuring comfort, safety, and personalized service throughout their yatra.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800 text-center lg:text-left">Our Vision</h3>
                    <p className="text-gray-700">
                      To become India's most trusted spiritual travel company by creating transformative pilgrimage experiences that inspire faith, foster cultural connections, and leave lasting memories for every traveler.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Block - What We Offer */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-b from-[#FEE6C7] to-[#FEDEBD] border border-orange-200 rounded-2xl p-8 shadow-lg text-center lg:text-left"
              >
                <h2 className="text-2xl font-bold text-orange-700 mb-6 flex items-center justify-center lg:justify-start">
                  <TempleIcon className="mr-2 h-6 w-6 text-orange-700" />
                  What We Offer
                </h2>
                <ul className="space-y-3 flex flex-col items-center lg:items-start text-left">
                  {offerings.map((offering, idx) => (
                    <li key={idx} className="flex items-start text-gray-900 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50/70 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Why Choose Margika Yatra?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
              We design itineraries that ensure complete comfort and safety, letting you focus entirely on your devotion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 border border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-md h-full flex flex-col">
                  <CardContent className="p-6 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="p-3 bg-orange-50 rounded-lg w-fit lg:self-start">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Block */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 border border-orange-200 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-orange-600">More Than a Tour – A Sacred Experience</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Margika Yatra, we understand that every yatra carries deep emotional and spiritual significance. Whether you are seeking blessings at the holy Jyotirlingas, attending the mesmerizing Ganga Aarti in Varanasi, visiting the sacred Char Dham, or embarking on a customized pilgrimage, we are dedicated to making your journey seamless, comfortable, and spiritually fulfilling.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
              "We don't just plan trips—we help create moments of devotion, reflection, and connection that stay with you long after the journey ends."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-t from-orange-100 to-transparent relative z-10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Join the Margika Yatra Family</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Embark on a sacred journey with us and discover the spiritual heritage of India through thoughtfully designed pilgrimage experiences. Let Margika Yatra be your trusted companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link prefetch={true} href="/book-trip">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 shadow-lg">
                Book Your Yatra
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold px-8"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open("https://wa.me/918433684155?text=Hello! I would like to enquire about your pilgrimage tours.", "_blank")
                }
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Join Margika Family
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
