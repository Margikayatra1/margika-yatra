"use client"
 
import { motion } from "framer-motion"
import { Ship, Instagram, Phone, Mail, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
 
export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FEE6C7] to-[#FEDEBD] border-t border-[#CB460C]/25 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(203, 70, 12, 0.4)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Margika Yatra Logo"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#CB460C] to-[#E65314] bg-clip-text text-transparent">
                  MARGIKA YATRA
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-900 mb-4 max-w-md font-medium">
              Transforming lives through spiritual journeys. Experience the divine with our carefully curated
              vessel-based pilgrimages.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/margika_yatra_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(203, 70, 12, 0.3)" }}
                  className="text-[#CB460C] hover:text-[#CB460C]/85"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
   
                <motion.a
                  href="tel:+918433684155"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(203, 70, 12, 0.3)" }}
                  className="text-[#CB460C] hover:text-[#CB460C]/85"
                >
                  <Phone className="h-6 w-6" />
                </motion.a>
   
                <motion.a
                  href="mailto:margikayatra@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(203, 70, 12, 0.3)" }}
                  className="text-[#CB460C] hover:text-[#CB460C]/85"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
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
 
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#CB460C] mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book-trip" className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium">
                  Book Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/personalized-trip"
                  className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium"
                >
                  Personalized Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/previous-trips"
                  className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-900 hover:text-[#CB460C] transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
 
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#CB460C] mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="https://google.com/maps/place/Margika+Yatra/data=!4m2!3m1!1s0x0:0xc632cafdeb26659c?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center md:justify-start hover:text-[#CB460C] transition-colors"
              >
                <MapPin className="h-4 w-4 text-[#CB460C] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-900 text-sm font-medium hover:text-[#CB460C]">
                  Mumbai • Thane
                </span>
              </a>
              <a href="tel:+918433684155" className="flex items-center justify-center md:justify-start hover:text-[#CB460C] transition-colors">
                <Phone className="h-4 w-4 text-[#CB460C] mr-2" />
                <span className="text-gray-900 text-sm font-medium hover:text-[#CB460C]">+91 8433684155</span>
              </a>
              {/* <a href="tel:+917715069696" className="flex items-center justify-center md:justify-start hover:text-[#CB460C] transition-colors">
                <Phone className="h-4 w-4 text-[#CB460C] mr-2" />
                <span className="text-gray-900 text-sm font-medium hover:text-[#CB460C]">+91 7715069696</span>
              </a> */}
              <a href="tel:+919594555745" className="flex items-center justify-center md:justify-start hover:text-[#CB460C] transition-colors">
                <Phone className="h-4 w-4 text-[#CB460C] mr-2" />
                <span className="text-gray-900 text-sm font-medium hover:text-[#CB460C]">+91 9594555745</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Margika+Yatra/@19.2392611,72.9800892,17z/data=!4m8!3m7!1s0x3be7bb4a72190c11:0xc632cafdeb26659c!8m2!3d19.2392611!4d72.9800892!9m1!1b1!16s%2Fg%2F11x7ytny4c?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-[#CB460C] transition-colors"
              >
                <Star className="h-4 w-4 text-[#CB460C] mr-2" />
                <span className="text-gray-900 text-sm font-medium hover:text-[#CB460C]">4.9/5 Google Rating</span>
              </a>
            </div>
          </div>
        </div>
 
        <div className="border-t border-[#CB460C]/25 mt-8 pt-8 text-center">
          <p className="text-gray-900 font-medium">
            © {new Date().getFullYear()} Margika Yatra Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
