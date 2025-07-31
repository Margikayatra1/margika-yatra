"use client"

import { motion } from "framer-motion"
import { Ship, Instagram, Phone, Mail, MapPin, Star } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-100 to-orange-200 border-t border-orange-300 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
                }}
              >
                <img
                src="/logo.png"
                alt="Margika Yatra Logo"
                className="h-10 w-10 rounded-full object-contain"
              />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  MARGIKA YATRA
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-700 mb-4 max-w-md font-medium">
              Transforming lives through spiritual journeys. Experience the divine with our carefully curated
              vessel-based pilgrimages.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/margika_yatra/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" }}
                className="text-orange-600 hover:text-orange-700"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="tel:+918433684155"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" }}
                className="text-orange-600 hover:text-orange-700"
              >
                <Phone className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="mailto:margikayatra@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" }}
                className="text-orange-600 hover:text-orange-700"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>

          </div>

          <div>
            <h4 className="font-bold text-orange-700 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book-trip" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                  Book Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/personalized-trip"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Personalized Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/previous-trips"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-orange-700 mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-gray-700 text-sm font-medium">+91 8433684155</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-gray-700 text-sm font-medium">+91 9336566695</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-gray-700 text-sm font-medium">4.9/5 Google Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-300 mt-8 pt-8 text-center">
          <p className="text-gray-700 font-medium">
            © {new Date().getFullYear()} Margika Yatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
