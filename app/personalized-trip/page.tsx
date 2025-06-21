"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  Phone,
  Mail,
  ChevronRight,
  ArrowLeft,
  Star,
  Clock,
  Mountain,
  Ship,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightningEffects } from "@/components/lightning-effects"
import Image from "next/image"
import Link from "next/link"

export default function PersonalizedTripPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    budget: "",
    duration: "",
    startDate: "",
    destinations: "",
    interests: [],
    accommodation: "",
    transportation: "",
    specialRequests: "",
    spiritualGoals: "",
  })

  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const interests = [
    "Temple Visits",
    "River Cruises",
    "Meditation Retreats",
    "Yoga Sessions",
    "Cultural Experiences",
    "Nature & Wildlife",
    "Adventure Activities",
    "Local Cuisine",
    "Photography",
    "Spiritual Healing",
    "Ayurveda & Wellness",
    "Festivals & Celebrations",
  ]

  const spiritualDestinations = [
    {
      name: "Varanasi",
      image: "vr.jpg",
      description: "The spiritual capital of India",
      highlights: ["Ganga Aarti", "Ancient Temples", "River Ghats"],
    },
    {
      name: "Rishikesh",
      image: "ri.jpg",
      description: "Yoga capital of the world",
      highlights: ["Yoga Ashrams", "Ganga River", "Adventure Sports"],
    },
    {
      name: "Kedarnath",
      image: "ke.jpg",
      description: "Sacred Himalayan shrine",
      highlights: ["Ancient Temple", "Mountain Trek", "Spiritual Energy"],
    },
    {
      name: "Ujjain",
      image: "uj.jpg",
      description: "City of Mahakal",
      highlights: ["Mahakaleshwar", "Kumbh Mela", "Ancient History"],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInterestToggle = (interest: string) => {
    const updatedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest]

    setSelectedInterests(updatedInterests)
    setFormData({
      ...formData,
      // interests: updatedInterests,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const whatsappMessage = `🙏 *Margika Yatra - Personalized Trip Request* 🙏

*Personal Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Trip Details:*
Travelers: ${formData.travelers}
Duration: ${formData.duration}
Budget: ${formData.budget}
Start Date: ${formData.startDate}
Destinations: ${formData.destinations}

*Preferences:*
Interests: ${selectedInterests.join(", ")}
Accommodation: ${formData.accommodation}
Transportation: ${formData.transportation}

*Spiritual Goals:*
${formData.spiritualGoals}

*Special Requests:*
${formData.specialRequests}

Please create a personalized itinerary for us.

Thank you! 🕉️`

    // Create email content
    const emailSubject = `Personalized Trip Request - ${formData.name}`
    const emailBody = `Dear Margika Yatra Team,

I would like to plan a personalized spiritual journey with the following details:

Personal Information:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Trip Details:
Number of Travelers: ${formData.travelers}
Duration: ${formData.duration}
Budget Range: ${formData.budget}
Preferred Start Date: ${formData.startDate}
Desired Destinations: ${formData.destinations}

Interests: ${selectedInterests.join(", ")}
Accommodation Preference: ${formData.accommodation}
Transportation Preference: ${formData.transportation}

Spiritual Goals:
${formData.spiritualGoals}

Special Requests:
${formData.specialRequests}

Please create a personalized itinerary and provide cost details.

Best regards,
${formData.name}`

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/918433684155?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Open email client
    const emailUrl = `mailto:margikayatra@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(emailUrl, "_blank")

    // Show success message
    alert(
      "Personalized trip request sent! We've opened WhatsApp and your email client. Please send both messages and we'll create your custom itinerary within 24 hours.",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <LightningEffects />
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
              Plan Your Personalized
              <br />
              Spiritual Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create a custom spiritual experience tailored to your unique preferences, goals, and spiritual aspirations
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-orange-400"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Mountain className="h-10 w-10 opacity-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-orange-400"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Ship className="h-12 w-12 opacity-20" />
        </motion.div>
      </section>

      {/* Inspiration Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Popular Spiritual Destinations</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get inspired by these sacred places. We can include any of these or other destinations in your
              personalized journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {spiritualDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500">
                  <div className="relative h-40">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <h3 className="text-lg font-bold text-white">{destination.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-400 text-sm mb-3">{destination.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-orange-500/30 text-orange-300">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Trip Form */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Tell Us About Your Dream Journey</h2>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Personal Information
                    </h3>
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
                      <div className="md:col-span-2">
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
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Trip Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Number of Travelers *</label>
                        <Input
                          name="travelers"
                          type="number"
                          min="1"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          placeholder="Enter number"
                          className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Duration *</label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-slate-700 border border-orange-500/20 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                          required
                        >
                          <option value="">Select duration</option>
                          <option value="2-3 days">2-3 days</option>
                          <option value="4-5 days">4-5 days</option>
                          <option value="6-7 days">6-7 days</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="2+ weeks">2+ weeks</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-slate-700 border border-orange-500/20 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select budget</option>
                          <option value="under-10k">Under ₹10,000</option>
                          <option value="10k-25k">₹10,000 - ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                          <option value="100k+">₹1,00,000+</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Start Date</label>
                        <Input
                          name="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destinations */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Destinations & Preferences
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Desired Destinations (separate multiple with commas)
                        </label>
                        <Input
                          name="destinations"
                          value={formData.destinations}
                          onChange={handleInputChange}
                          placeholder="e.g., Varanasi, Rishikesh, Kedarnath, Ujjain..."
                          className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Select Your Interests (choose all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {interests.map((interest) => (
                            <motion.div key={interest} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <button
                                type="button"
                                onClick={() => handleInterestToggle(interest)}
                                className={`w-full p-3 text-sm rounded-lg border transition-all duration-300 ${
                                  selectedInterests.includes(interest)
                                    ? "bg-orange-500 border-orange-500 text-white"
                                    : "bg-slate-700 border-orange-500/20 text-gray-300 hover:border-orange-500/40"
                                }`}
                              >
                                {interest}
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation & Transportation */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                      <Star className="h-5 w-5 mr-2" />
                      Accommodation & Transportation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Accommodation Preference</label>
                        <select
                          name="accommodation"
                          value={formData.accommodation}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-slate-700 border border-orange-500/20 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select preference</option>
                          <option value="budget">Budget Hotels/Guesthouses</option>
                          <option value="mid-range">Mid-range Hotels</option>
                          <option value="luxury">Luxury Hotels/Resorts</option>
                          <option value="ashram">Ashrams/Spiritual Centers</option>
                          <option value="heritage">Heritage Properties</option>
                          <option value="mixed">Mixed (variety)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Transportation Preference
                        </label>
                        <select
                          name="transportation"
                          value={formData.transportation}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-slate-700 border border-orange-500/20 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select preference</option>
                          <option value="private-car">Private Car/Taxi</option>
                          <option value="train">Train Journey</option>
                          <option value="flight">Flight + Local Transport</option>
                          <option value="bus">Bus/Coach</option>
                          <option value="mixed">Mixed Transportation</option>
                          <option value="eco-friendly">Eco-friendly Options</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Spiritual Goals */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Spiritual Goals & Special Requests
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          What are your spiritual goals for this journey?
                        </label>
                        <Textarea
                          name="spiritualGoals"
                          value={formData.spiritualGoals}
                          onChange={handleInputChange}
                          placeholder="e.g., Inner peace, spiritual healing, connecting with divine energy, meditation practice, cultural understanding..."
                          rows={3}
                          className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Special Requests & Additional Information
                        </label>
                        <Textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          placeholder="Dietary restrictions, accessibility needs, special occasions, group requirements, specific rituals or ceremonies you'd like to participate in..."
                          rows={4}
                          className="bg-slate-700 border-orange-500/20 text-white focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Process Information */}
                  <div className="bg-slate-700/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-orange-500" />
                      Our Personalized Planning Process
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">1.</span>
                        We'll contact you within 24 hours to discuss your requirements in detail
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">2.</span>
                        Our spiritual travel experts will create a custom itinerary based on your preferences
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">3.</span>
                        We'll provide detailed cost breakdown and make adjustments as needed
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">4.</span>
                        Once approved, we'll handle all bookings and provide comprehensive travel support
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">5.</span>
                        Enjoy your personalized spiritual journey with 24/7 support throughout
                      </li>
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 text-lg"
                    >
                      Submit Personalized Trip Request
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
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Questions About Your Personalized Journey?</h3>
            <p className="text-gray-300 mb-6">
              Our spiritual travel consultants are here to help you create the perfect experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+918433684155"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 8433684155
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
          href="https://wa.me/918433684155"
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
