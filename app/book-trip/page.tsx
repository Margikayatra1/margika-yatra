"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, IndianRupee, Phone, Mail, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function BookTripPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    date: "",
    specialRequests: "",
  })

  const packages = [
    {
      id: "char-dham",
      name: "Char Dham & Do Dham Yatra",
      price: "₹34,999",
      duration: "10N/11D",
      image: "4dham.png",
      description: "Sacred journey to the four holy shrines",
      location: "Uttarakhand",
      highlights: ["Kedarnath", "Badrinath", "Gangotri", "Yamunotri"],
    },
    {
      id: "varanasi",
      name: "Varanasi",
      price: "₹7,999",
      duration: "2N/3D",
      image: "vr.jpg",
      description: "Experience the spiritual capital of India",
      location: "Uttar Pradesh",
      highlights: ["Ganga Aarti", "Kashi Vishwanath", "River Cruise", "Sarnath"],
    },
    {
      id: "ujjain",
      name: "Ujjain & Omkareshwar",
      price: "₹10,999",
      duration: "2N/3D",
      image: "uj.jpg",
      description: "Visit the sacred Jyotirlingas",
      location: "Madhya Pradesh",
      highlights: ["Mahakaleshwar", "Omkareshwar", "Narmada River", "Ancient Temples"],
    },
    {
      id: "maharashtra",
      name: "3 Jyotirling of Maharashtra",
      price: "₹12,999",
      duration: "3N/4D",
      image: "mh.jpg",
      description: "Explore Maharashtra's divine temples",
      location: "Maharashtra",
      highlights: ["Trimbakeshwar", "Bhimashankar", "Grishneshwar", "Shirdi"],
    },
    {
      id: "tri-city",
      name: "Varanasi-Ayodhya-Prayagraj",
      price: "₹15,999",
      duration: "3N/4D",
      image: "up.jpg",
      description: "Tri-city spiritual circuit",
      location: "Uttar Pradesh",
      highlights: ["Ram Janmabhoomi", "Triveni Sangam", "Hanuman Garhi", "Ganga Aarti"],
    },
    {
      id: "rameshwaram",
      name: "Rameshwaram",
      price: "₹14,999",
      duration: "3N/4D",
      image: "rameshwaram.jpg",
      description: "Southern pilgrimage destination",
      location: "Tamil Nadu",
      highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Adam's Bridge", "Pamban Bridge"],
    },
    {
      id: "ziro",
      name: "Arunachal Pradesh - Ziro Valley",
      price: "₹54,999",
      duration: "6N/7D",
      image: "z.jpg",
      description: "Mystical valleys and ancient wisdom",
      location: "Arunachal Pradesh",
      highlights: ["Ziro Valley", "Apatani Tribe", "Talley Valley", "Buddhist Monasteries"],
    },
    {
      id: "meghalaya",
      name: "Meghalaya",
      price: "₹19,999",
      duration: "5N/6D",
      image: "mg.png",
      description: "Land of clouds and natural beauty",
      location: "Meghalaya",
      highlights: ["Living Root Bridges", "Cherrapunji", "Mawlynnong", "Sacred Groves"],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage)

    // Create WhatsApp message
    const whatsappMessage = `🙏 *Margika Yatra Booking Request* 🙏

*Package:* ${selectedPkg?.name || "Not selected"}
*Duration:* ${selectedPkg?.duration || "N/A"}
*Price:* ${selectedPkg?.price || "N/A"}

*Personal Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Travelers: ${formData.travelers}
Preferred Date: ${formData.date}

*Special Requests:*
${formData.specialRequests || "None"}

Please confirm availability and provide further details.

Thank you! 🕉️`

    // Create email content
    const emailSubject = `Booking Request - ${selectedPkg?.name || "Spiritual Journey"}`
    const emailBody = `Dear Margika Yatra Team,

I would like to book the following spiritual journey:

Package: ${selectedPkg?.name || "Not selected"}
Duration: ${selectedPkg?.duration || "N/A"}
Price: ${selectedPkg?.price || "N/A"}
Location: ${selectedPkg?.location || "N/A"}

Personal Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Number of Travelers: ${formData.travelers}
Preferred Date: ${formData.date}

Special Requests:
${formData.specialRequests || "None"}

Please confirm availability and provide further booking details.

Best regards,
${formData.name}`

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/917208771688?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Open email client
    const emailUrl = `mailto:margikayatra@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(emailUrl, "_blank")

    // Show success message
    alert(
      "Booking request sent! We've opened WhatsApp and your email client. Please send both messages to confirm your booking.",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-orange-400 hover:text-orange-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Book Your Spiritual Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully curated packages and embark on a transformative spiritual experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Select Your Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <Card
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 border-2 overflow-hidden h-full transition-all duration-500 ${
                      selectedPackage === pkg.id
                        ? "border-orange-500 ring-2 ring-orange-500/20"
                        : "border-orange-500/20 hover:border-orange-500/40"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-orange-500 text-white">{pkg.duration}</Badge>
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center text-orange-400 text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{pkg.location}</span>
                        </div>
                      </div>
                      {selectedPackage === pkg.id && (
                        <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                          <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">Selected</div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-orange-400 mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pkg.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-xl font-bold text-orange-500">
                          <IndianRupee className="h-4 w-4" />
                          <span>{pkg.price.replace("₹", "")}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span className="text-sm">{pkg.duration}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {pkg.highlights.slice(0, 2).map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-orange-500/30 text-orange-300">
                              {highlight}
                            </Badge>
                          ))}
                          {pkg.highlights.length > 2 && (
                            <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-300">
                              +{pkg.highlights.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Complete Your Booking</h2>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedPackage && (
                    <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <h3 className="text-lg font-semibold text-orange-400 mb-2">Selected Package</h3>
                      <p className="text-white">{packages.find((pkg) => pkg.id === selectedPackage)?.name}</p>
                      <p className="text-gray-300 text-sm">
                        {packages.find((pkg) => pkg.id === selectedPackage)?.duration} •{" "}
                        {packages.find((pkg) => pkg.id === selectedPackage)?.price}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Number of Travelers *</label>
                      <Input
                        name="travelers"
                        type="number"
                        min="1"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        placeholder="Enter number of travelers"
                        className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date *</label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any special requirements, dietary preferences, or accessibility needs..."
                      rows={4}
                      className="w-full p-3 bg-slate-700 border border-orange-500/20 rounded-lg text-white focus:border-orange-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">What happens next?</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• We'll contact you within 24 hours to confirm your booking</li>
                      <li>• Our team will discuss the itinerary and answer any questions</li>
                      <li>• Payment details and travel documents will be shared</li>
                      <li>• You'll receive a detailed travel guide before departure</li>
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg"
                      disabled={!selectedPackage}
                    >
                      {selectedPackage ? "Submit Booking Request" : "Please Select a Package First"}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6">Our travel experts are here to assist you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+917208771688"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 7208771688
              </motion.a>
              <motion.a
                href="mailto:margikayatra@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email: margikayatra@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.a
          href="https://wa.me/917208771688"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </div>
  )
}
