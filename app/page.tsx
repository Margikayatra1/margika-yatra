"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ChevronRight,
  Ship,
  Mountain,
  Clock,
  IndianRupee,
  Users,
  Award,
  Heart,
  Camera,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedLightningEffects } from "@/components/enhanced-lightning-effects"
import { ParticleEffects } from "@/components/particle-effects"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const stats = [
    { icon: Users, number: 1000, suffix: "+", label: "Happy Pilgrims" },
    { icon: Award, number: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
    { icon: Ship, number: 50, suffix: "+", label: "Sacred Destinations" },
    { icon: Heart, number: 5, suffix: "+", label: "Years Experience" },
  ];


  const packages = [
    {
      name: "Char Dham & Do Dham Yatra",
      price: "₹34,999",
      duration: "10N/11D",
      image: "/4dham.png",
      description: "Sacred journey to the four holy shrines",
      location: "Uttarakhand",
    },
    {
      name: "Varanasi",
      price: "₹7,999",
      duration: "2N/3D",
      image: "/vr1.png",
      description: "Experience the spiritual capital of India",
      location: "Uttar Pradesh",
    },
    {
      name: "Ujjain & Omkareshwar",
      price: "₹10,999",
      duration: "2N/3D",
      image: "mp.jpg",
      description: "Visit the sacred Jyotirlingas",
      location: "Madhya Pradesh",
    },
    {
      name: "3 Jyotirling of Maharashtra",
      price: "₹12,999",
      duration: "3N/4D",
      image: "mh.jpg",
      description: "Explore Maharashtra's divine temples",
      location: "Maharashtra",
    },
    {
      name: "Varanasi-Ayodhya-Prayagraj",
      price: "₹15,999",
      duration: "3N/4D",
      image: "up.jpg",
      description: "Tri-city spiritual circuit",
      location: "Uttar Pradesh",
    },
    {
      name: "Rameshwaram",
      price: "₹14,999",
      duration: "3N/4D",
      image: "rameshwaram.jpg",
      description: "Southern pilgrimage destination",
      location: "Tamil Nadu",
    },
    {
      name: "Arunachal Pradesh - Ziro Valley",
      price: "₹54,999",
      duration: "6N/7D",
      image: "z.jpg",
      description: "Mystical valleys and ancient wisdom",
      location: "Arunachal Pradesh",
    },
    {
      name: "Meghalaya",
      price: "₹19,999",
      duration: "5N/6D",
      image: "mg.png",
      description: "Land of clouds and natural beauty",
      location: "Meghalaya",
    },
  ]

  const handleBookNow = (packageName: string, price: string) => {
    const message = `🙏 Namaste! I'm interested in booking the ${packageName} package (${price}). Please provide more details and availability. Thank you! 🕉️`
    const whatsappUrl = `https://wa.me/918433684155?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const tripImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  const teamMembers = [
    {
      name: "Badal Yadav",
      role: "Co-Founder",
      description: "Visionary leader with 10+ years in spiritual tourism",
      image: "/badal.JPG", // ✅ Actual image path
    },
    {
      name: "Yogesh Jain",
      role: "Co-Founder",
      description: "Expert in pilgrimage planning and logistics",
      image: "/yogesh.JPG"
    },
    {
      name: "Ratan",
      role: "Chief Marketing Officer",
      description: "Marketing strategist and brand development expert",
      image: "/ratan.JPG"
    },
    {
      name: "Ganesh Dekhne",
      role: "Operational Head",
      description: "Operations specialist ensuring seamless journeys",
      image: "/ganesh.JPG"
    },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900 overflow-x-hidden relative">
      <EnhancedLightningEffects />
      <ParticleEffects />
      <Header />

      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-orange-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Logo Section */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-8">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/rambg.jpg"
            alt="Spiritual Journey"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-orange-50/60 to-orange-100/80" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: textY }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                  "0 0 40px rgba(249, 115, 22, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Discover Your
              <br />
              Spiritual Journey
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Embark on transformative vessel-based pilgrimages that connect your soul with India's most sacred
              destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                  onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Packages
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/personalized-trip">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg shadow-xl backdrop-blur-sm font-semibold"
                  >
                    Plan Custom Trip
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-orange-400"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Mountain className="h-16 w-16 opacity-60 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-orange-400"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Ship className="h-20 w-20 opacity-60 drop-shadow-lg" />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 relative bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              About Margika Yatra
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
              We believe travel is not just about exploring new places; it's about discovering the depths of your soul.
              Our spiritual journeys are designed to inspire inner transformation, reconnect you with your higher self,
              and immerse you in the sacred energies of India's most mystical places.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6">Our Leadership Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 place-items-center">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-orange-300 shadow-lg relative mb-4 group">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.05 }}
                          />
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mt-4">{member.name}</h4>
                        <p className="text-orange-600 font-semibold text-sm mb-1">{member.role}</p>
                        <p className="text-gray-600 text-sm leading-snug max-w-xs mx-auto">{member.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
                    >
                      <Card className="bg-white/80 backdrop-blur-sm border-orange-200 text-center shadow-xl">
                        <CardContent className="p-6">
                          <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">
                            {inView && (
                              <CountUp
                                end={stat.number}
                                duration={2}
                                suffix={stat.suffix}
                                decimals={stat.decimals || 0}
                              />
                            )}
                          </h4>
                          <p className="text-gray-600 font-medium">{stat.label}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Trips Photo Slider */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Previous Trips Gallery
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Beautiful moments from our spiritual journeys with fellow travelers
            </p>
          </motion.div>

          {/* Photo Upload Slider */}
          <div className="relative">
            <motion.div
              className="flex gap-6 pb-6"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {Array.from({ length: 8 }, (_, index) => {
                const image = tripImages[index % tripImages.length];

                return (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden shadow-xl h-64">
                      <div className="relative h-full">
                        {image ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={image}
                              alt={`Trip ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-3 left-3">

                            </div>
                          </div>
                        ) : (
                          <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center border-2 border-dashed border-orange-300 group-hover:border-orange-400 transition-all duration-300">
                            <div className="text-center p-6">
                              <Upload className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                              <h3 className="text-lg font-bold text-orange-600 mb-2">
                                Upload Trip Photo
                              </h3>
                              <p className="text-sm text-gray-600 mb-3">
                                Share memories from our spiritual journeys
                              </p>
                              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-orange-600 transition-colors">
                                Click to Upload
                              </div>
                            </div>
                            <div className="absolute top-3 right-3">
                              <Camera className="h-5 w-5 text-orange-400" />
                            </div>
                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-orange-500/90 text-white text-xs">
                                Slot {index + 1}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Upload Instructions */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Join us for these special spiritual journeys and create memories that last a lifetime
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden group hover:border-orange-300 transition-all duration-500 shadow-2xl">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/dd.jpg"
                  alt="Dev Deepawali"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Removed dimming overlay */}
                <Badge className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg font-semibold">
                  Featured Event
                </Badge>
              </div>

              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">Dev Deepawali</h3>
                    <div className="flex items-center text-gray-700 mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                      <span className="font-medium">3rd–6th November</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                      <span className="font-medium">Varanasi (River Cruise Experience)</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 shadow-xl font-semibold"
                      onClick={() => handleBookNow("Dev Deepawali", "Special Event")}
                    >
                      Book Now
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 365 Days Packages */}
      <section id="packages" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              365 Days Packages
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated spiritual journeys available throughout the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
                }}
                className="group"
              >
                <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden h-full hover:border-orange-300 transition-all duration-500 shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-orange-500 text-white shadow-lg font-semibold">
                      {pkg.duration}
                    </Badge>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center text-orange-200 text-sm font-medium">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{pkg.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-2xl font-bold text-orange-600">
                        <IndianRupee className="h-5 w-5" />
                        <span>{pkg.price.replace("₹", "")}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-500 hover:text-white font-medium"
                      >
                        View Details
                      </Button>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg font-semibold"
                          onClick={() => handleBookNow(pkg.name, pkg.price)}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Ready to embark on your spiritual journey? Contact us today to plan your perfect pilgrimage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-orange-200 h-full shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                        <p className="text-gray-600">
                          Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-orange-500 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                        <a
                          href="tel:+918433684155"
                          className="text-orange-600 hover:underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +91 8433684155
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-orange-500 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <a
                          href="mailto:margikayatra@gmail.com"
                          className="text-orange-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          margikayatra@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Instagram className="h-6 w-6 text-orange-500 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                        <a
                          href="https://instagram.com/margika_yatra"
                          className="text-orange-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @margika_yatra
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>

              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <Link href="/book-trip" className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(249, 115, 22, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 hover:from-orange-600 hover:to-orange-700 transition-all duration-500 h-full shadow-2xl">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Book Your Spiritual Journey</h3>
                      <p className="text-orange-100 mb-4 font-medium">
                        Choose from our curated packages and book instantly
                      </p>
                      <ChevronRight className="h-6 w-6 text-white mx-auto" />
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>

              <Link href="/personalized-trip" className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(249, 115, 22, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-orange-200 hover:border-orange-300 transition-all duration-500 h-full shadow-2xl">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">Plan Personalized Trip</h3>
                      <p className="text-gray-600 mb-4 font-medium">
                        Create a custom spiritual journey tailored for you
                      </p>
                      <ChevronRight className="h-6 w-6 text-orange-500 mx-auto" />
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Enhanced WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.a
          href="https://wa.me/918433684155"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 10px 30px rgba(34, 197, 94, 0.3)",
              "0 20px 40px rgba(34, 197, 94, 0.5)",
              "0 10px 30px rgba(34, 197, 94, 0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <img src="/WhatsApp.svg" alt="WhatsApp" className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </div>
  )
}
