"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Star, ArrowLeft, Heart, Camera, Award, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
      image: "/4dham.png",
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
      image: "/dd.jpg",
      description: "Witnessed the divine Ganga Aarti during the festival of lights",
      highlights: ["Ganga Aarti", "River Cruise", "Kashi Vishwanath", "Sarnath Visit"],
      rating: 5.0,
      testimonial: "The most beautiful spiritual experience of my life!",
      testimonialBy: "Rajesh Kumar, Delhi",
    },
    {
      id: 3,
      name: "Ujjain Kumbh Experience",
      date: "April 10-14, 2023",
      location: "Ujjain, MP",
      participants: 28,
      image: "/uj.jpg",
      description: "Participated in the sacred Kumbh Mela at Ujjain",
      highlights: ["Holy Bath", "Mahakaleshwar Temple", "Kumbh Procession", "Sant Darshan"],
      rating: 4.8,
      testimonial: "Felt blessed to be part of such a divine gathering.",
      testimonialBy: "Meera Patel, Ahmedabad",
    },
    {
      id: 4,
      name: "Rameshwaram Pilgrimage",
      date: "January 20-24, 2023",
      location: "Tamil Nadu",
      participants: 38,
      image: "/rameshwaram.jpg",
      description: "Sacred journey to the island temple of Lord Shiva",
      highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Agni Theertham", "Abdul Kalam Memorial"],
      rating: 4.7,
      testimonial: "The temple architecture and spiritual vibes were amazing.",
      testimonialBy: "Suresh Reddy, Hyderabad",
    },
    {
      id: 5,
      name: "Meghalaya Nature Retreat",
      date: "October 15-21, 2022",
      location: "Meghalaya",
      participants: 25,
      image: "/meghalaya.jpg",
      description: "Explored the pristine beauty of Northeast India",
      highlights: ["Cherrapunji Falls", "Living Root Bridges", "Mawlynnong Village", "Crystal Clear Lakes"],
      rating: 4.9,
      testimonial: "Nature at its finest! Refreshed my soul completely.",
      testimonialBy: "Anita Singh, Kolkata",
    },
    {
      id: 6,
      name: "Maharashtra Jyotirling Circuit",
      date: "December 5-10, 2022",
      location: "Maharashtra",
      participants: 42,
      image: "/mh.jpg",
      description: "Visited the three Jyotirlingas of Maharashtra",
      highlights: ["Trimbakeshwar", "Bhimashankar", "Grishneshwar", "Shirdi Sai Baba"],
      rating: 4.6,
      testimonial: "Well organized trip covering all major temples.",
      testimonialBy: "Ganesh Kulkarni, Pune",
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Margika Yatra made my spiritual journey unforgettable. The attention to detail and care for pilgrims is exceptional.",
      trips: 3,
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "I've traveled with them multiple times. Their knowledge of sacred places and arrangements are always perfect.",
      trips: 5,
      rating: 5,
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "The spiritual energy and positive vibes throughout the journey were incredible. Highly recommend!",
      trips: 2,
      rating: 5,
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Professional service with a personal touch. They understand the spiritual needs of every traveler.",
      trips: 1,
      rating: 4,
    },
    {
      name: "Anita Singh",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      text: "Beautiful memories created with Margika Yatra. The team ensures comfort while maintaining spiritual focus.",
      trips: 3,
      rating: 5,
    },
    {
      name: "Ganesh Kulkarni",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Every trip with Margika Yatra has been a journey of self-discovery. The team's dedication to spiritual tourism is inspiring.",
      trips: 4,
      rating: 5,
    },
  ]

  const handleBookSimilarTrip = (tripName: string) => {
    const message = `🙏 Namaste! I saw the previous trip "${tripName}" and would like to book a similar spiritual journey. Please provide details and availability. Thank you! 🕉️`
    const whatsappUrl = `https://wa.me/917208771688?text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <ParticleEffects />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/rambg.jpg"
            alt="Reviews & Spiritual Journeys"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
              Reviews & Spiritual Journeys
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Read testimonials and relive the sacred memories from our pilgrimages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews & Spiritual Journeys Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
              >
                <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 overflow-hidden group hover:border-orange-400 transition-all duration-500 shadow-2xl h-full flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={trip.image}
                      alt={trip.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge className="bg-orange-500 text-white shadow-lg font-semibold">
                        {trip.location}
                      </Badge>
                      <Badge className="bg-slate-900/80 text-white shadow-lg font-semibold">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {trip.rating}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-400 mb-2">{trip.name}</h3>
                      <p className="text-gray-300 text-base mb-4 line-clamp-2">{trip.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                          <span className="text-sm">{trip.date}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-2 text-orange-400" />
                          <span className="text-sm">{trip.participants} Participants</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-orange-300 mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trip.highlights.slice(0, 3).map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                              {highlight}
                            </Badge>
                          ))}
                          {trip.highlights.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                              +{trip.highlights.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-gray-300 italic">"{trip.testimonial}"</p>
                        <p className="text-xs text-orange-400 mt-1">- {trip.testimonialBy}</p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-base shadow-xl border-0 font-semibold"
                        onClick={() => handleBookSimilarTrip(trip.name)}
                      >
                        <Heart className="mr-2 h-4 w-4" />
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

      {/* Testimonials Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              What Our Pilgrims Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from our fellow spiritual travelers about their transformative experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(249, 115, 22, 0.2)" }}
              >
                <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 overflow-hidden group hover:border-orange-400 transition-all duration-500 shadow-2xl h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-orange-400">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 ml-2">({testimonial.rating}/5)</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Award className="h-3 w-3 mr-1" />
                        {testimonial.trips} trips
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Ready for Your Next Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our spiritual community and create your own sacred memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/book-trip">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                  >
                    Book Your Trip Now
                    <Camera className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg shadow-xl backdrop-blur-sm font-semibold"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://wa.me/917208771688?text=Hello! I would like to know more about your spiritual trips.', '_blank')
                    }
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
