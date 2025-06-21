"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Star, ArrowLeft, Heart, Camera, Award, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedLightningEffects } from "@/components/enhanced-lightning-effects"
import { ParticleEffects } from "@/components/particle-effects"
import Image from "next/image"
import Link from "next/link"

export default function PreviousTripsPage() {
  const previousTrips = [
    {
      id: 1,
      name: "Char Dham Yatra 2024",
      date: "March 15-25, 2024",
      location: "Uttarakhand",
      participants: 45,
      image: "4dham.png",
      description: "A transformative journey to the four sacred shrines in the Himalayas",
      highlights: ["Kedarnath Temple", "Badrinath Darshan", "Gangotri Glacier", "Yamunotri Springs"],
      rating: 4.9,
      testimonial: "Life-changing experience! The spiritual energy was incredible.",
      testimonialBy: "Priya Sharma, Mumbai",
    },
    {
      id: 2,
      name: "Varanasi Dev Deepawali",
      date: "November 3-6, 2023",
      location: "Varanasi, UP",
      participants: 32,
      image: "dd.jpg",
      description: "Witnessed the divine Ganga Aarti during the festival of lights",
      highlights: ["Ganga Aarti", "River Cruise", "Kashi Vishwanath", "Sarnath Visit"],
      rating: 5.0,
      testimonial: "The most beautiful spiritual experience of my life!",
      testimonialBy: "Rajesh Kumar, Delhi",
    },
    {
      id: 3,
      name: "Maharashtra Jyotirling Circuit",
      date: "January 10-14, 2024",
      location: "Maharashtra",
      participants: 28,
      image: "mh.jpg",
      description: "Sacred pilgrimage to three powerful Jyotirlingas",
      highlights: ["Trimbakeshwar", "Bhimashankar", "Grishneshwar", "Shirdi Sai Baba"],
      rating: 4.8,
      testimonial: "Perfectly organized trip with amazing spiritual guidance.",
      testimonialBy: "Anita Patel, Ahmedabad",
    },
    {
      id: 4,
      name: "Ujjain Mahakaleshwar",
      date: "February 20-22, 2024",
      location: "Ujjain, MP",
      participants: 25,
      image: "uj.jpg",
      description: "Divine darshan at the sacred Mahakaleshwar Jyotirlinga",
      highlights: ["Mahakaleshwar Temple", "Bhasma Aarti", "Omkareshwar", "Narmada River"],
      rating: 4.9,
      testimonial: "The Bhasma Aarti was absolutely divine and mesmerizing.",
      testimonialBy: "Suresh Gupta, Pune",
    },
    {
      id: 5,
      name: "Rameshwaram Pilgrimage",
      date: "December 5-8, 2023",
      location: "Tamil Nadu",
      participants: 35,
      image: "rameshwaram.jpg",
      description: "Southern spiritual journey to the sacred island",
      highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Adam's Bridge", "Pamban Bridge"],
      rating: 4.7,
      testimonial: "Beautiful temples and amazing coastal spiritual experience.",
      testimonialBy: "Meera Singh, Jaipur",
    },
    {
      id: 6,
      name: "Meghalaya Sacred Groves",
      date: "October 12-17, 2023",
      location: "Meghalaya",
      participants: 20,
      image: "mg.png",
      description: "Mystical journey through nature's sacred temples",
      highlights: ["Living Root Bridges", "Cherrapunji", "Mawlynnong", "Sacred Waterfalls"],
      rating: 4.8,
      testimonial: "Nature and spirituality combined perfectly in this trip.",
      testimonialBy: "Amit Joshi, Bangalore",
    },
  ]

  const familyTestimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      text: "Margika Yatra has been our spiritual travel partner for 3 years. Every journey has been transformative and well-organized.",
      trips: 5,
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "The team's knowledge of spiritual destinations and their significance is remarkable. Highly recommended!",
      trips: 3,
      rating: 5,
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "From booking to return, everything is handled with care. The spiritual guidance during trips is exceptional.",
      trips: 4,
      rating: 5,
    },
    {
      name: "Suresh Gupta",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Margika Yatra understands the true essence of spiritual travel. Each trip deepens our connection with the divine.",
      trips: 6,
      rating: 5,
    },
    {
      name: "Meera Singh",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      text: "The attention to detail and spiritual atmosphere they create during trips is unmatched. Truly blessed to travel with them.",
      trips: 2,
      rating: 5,
    },
    {
      name: "Amit Joshi",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Every trip with Margika Yatra has been a journey of self-discovery. The team's dedication to spiritual tourism is inspiring.",
      trips: 4,
      rating: 5,
    },
  ]

  const handleBookSimilarTrip = (tripName: string) => {
    const message = `🙏 Namaste! I saw the previous trip "${tripName}" and would like to book a similar spiritual journey. Please provide details and availability. Thank you! 🕉️`
    const whatsappUrl = `https://wa.me/918433684155?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <EnhancedLightningEffects />
      <ParticleEffects />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-800/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-orange-300 hover:text-orange-200">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.5)",
                  "0 0 40px rgba(251, 146, 60, 0.8)",
                  "0 0 20px rgba(251, 146, 60, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Previous Spiritual Journeys
            </motion.h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Relive the divine moments and sacred experiences from our past pilgrimages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Previous Trips Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-300 mb-4">Sacred Journeys Completed</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Each journey has been a unique spiritual experience, creating lasting memories and deep connections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  boxShadow: "0 25px 50px rgba(251, 146, 60, 0.3)",
                }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-400/30 overflow-hidden hover:border-orange-300/60 transition-all duration-500 shadow-2xl h-full">
                  <div className="relative h-64">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/30 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge className="bg-orange-500/90 text-white backdrop-blur-sm">
                        <Users className="h-3 w-3 mr-1" />
                        {trip.participants} Pilgrims
                      </Badge>
                      <div className="flex items-center bg-orange-500/90 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {trip.rating}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{trip.name}</h3>
                      <div className="flex items-center text-orange-300 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{trip.date}</span>
                      </div>
                      <div className="flex items-center text-orange-300">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{trip.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-orange-200 text-sm mb-4">{trip.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-orange-300 mb-2">Trip Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {trip.highlights.map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-orange-400/30 text-orange-300">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-800/30 p-3 rounded-lg mb-4">
                      <div className="flex items-start">
                        <Heart className="h-4 w-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-orange-200 text-sm italic">"{trip.testimonial}"</p>
                          <p className="text-orange-300 text-xs mt-1">- {trip.testimonialBy}</p>
                        </div>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-lg"
                        onClick={() => handleBookSimilarTrip(trip.name)}
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        Book Similar Trip
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Margika Yatra Family Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent">
              Our Margika Yatra Family
            </h2>
            <p className="text-orange-100 text-lg max-w-3xl mx-auto">
              Meet our beloved travelers who have become part of our spiritual family through multiple journeys of faith
              and discovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyTestimonials.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-400/30 hover:border-orange-300/60 transition-all duration-500 h-full shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={70}
                          height={70}
                          className="rounded-full mr-4 border-2 border-orange-400/50"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          {member.trips} trips
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-300 text-lg">{member.name}</h4>
                        <p className="text-orange-200 text-sm">{member.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(member.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-orange-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-900/30 p-4 rounded-lg mb-4">
                      <p className="text-orange-200 italic text-sm leading-relaxed">"{member.text}"</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-orange-300">
                        <Award className="h-4 w-4 mr-1" />
                        <span>Loyal Family Member</span>
                      </div>
                      <div className="flex items-center text-orange-300">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{member.trips} Journeys</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Family Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: "1000+", label: "Happy Pilgrims", icon: Users },
                { number: "150+", label: "Completed Trips", icon: Camera },
                { number: "4.9", label: "Average Rating", icon: Star },
                { number: "95%", label: "Return Travelers", icon: Heart },
              ].map((stat, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 146, 60, 0.3)" }}>
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-400/30 text-center backdrop-blur-sm shadow-xl">
                    <CardContent className="p-6">
                      <stat.icon className="h-12 w-12 text-orange-300 mx-auto mb-4" />
                      <h4 className="text-3xl font-bold text-white mb-2">{stat.number}</h4>
                      <p className="text-orange-200">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent">
              Ready to Join Our Spiritual Family?
            </h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
              Embark on your own transformative journey and become part of our growing family of spiritual travelers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-trip">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 146, 60, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-3 text-lg shadow-2xl border border-orange-400/50"
                  >
                    Book Your Journey
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>

              <Link href="/personalized-trip">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 146, 60, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-400 text-orange-200 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg shadow-2xl backdrop-blur-sm"
                  >
                    Plan Custom Trip
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Enhanced WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
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
          <Phone className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </div>
  )
}
