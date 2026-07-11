"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Shield, ArrowLeft, Mail, Phone, MapPin, Globe,
  Compass, Info, Eye, Cookie, BarChart2, Share2, 
  Lock, CreditCard, Megaphone, Scale, Link2, 
  UserX, Calendar, RefreshCw, FileText
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleEffects } from "@/components/particle-effects"
import Link from "next/link"

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("1")

  const sections = [
    {
      id: "1",
      icon: <Compass className="h-5 w-5 text-orange-600" />,
      title: "1. Who We Are",
      content: "Margika Yatra is a spiritual travel agency specializing in pilgrimage tours, religious travel packages, customized spiritual journeys, and devotional tourism across India. Our services include Char Dham Yatra, Kedarnath & Badrinath Tours, Jyotirlinga Yatra Packages, Varanasi, Ayodhya, Jagannath Puri, Rameshwaram, and custom group or senior citizen tours.",
    },
    {
      id: "2",
      icon: <Info className="h-5 w-5 text-orange-600" />,
      title: "2. Information We Collect",
      content: "We collect personal information you voluntarily provide when you submit an inquiry form, request a callback, contact us via phone, email, or WhatsApp, or book a tour package. This information may include your Full Name, Email Address, Phone Number, City/State, Travel Preferences, Number of Travelers, Booking Details, and Payment Information (processed securely through third-party providers).\n\nAdditionally, when you visit our website, we may automatically collect data such as IP address, browser type, device information, pages visited, time spent, referral sources, and cookie data.",
    },
    {
      id: "3",
      icon: <Eye className="h-5 w-5 text-orange-600" />,
      title: "3. How We Use Your Information",
      content: "We use your information to process bookings, respond to inquiries, provide customer support, share tour package details, send booking confirmations, communicate important travel-related details, conduct marketing promotions, and comply with legal obligations.",
    },
    {
      id: "4",
      icon: <Cookie className="h-5 w-5 text-orange-600" />,
      title: "4. Cookies and Tracking Technologies",
      content: "Our website uses cookies and similar technologies to improve functionality, remember user preferences, understand visitor behavior, and measure marketing campaign effectiveness. You may disable cookies through your browser settings, though some website features may not function properly.",
    },
    {
      id: "5",
      icon: <BarChart2 className="h-5 w-5 text-orange-600" />,
      title: "5. Google Analytics and Third-Party Services",
      content: "We may use third-party tools such as Google Analytics, Google Ads, Google Business Profile, Meta (Facebook) Advertising Tools, and WhatsApp Communication Services. These platforms collect information according to their own privacy policies.",
    },
    {
      id: "6",
      icon: <Share2 className="h-5 w-5 text-orange-600" />,
      title: "6. Sharing of Information",
      content: "Margika Yatra does not sell, rent, or trade your personal information. We share information only when necessary with hotels/accommodation providers, transport partners, tour guides, payment processors, and government authorities (when required by law).",
    },
    {
      id: "7",
      icon: <Lock className="h-5 w-5 text-orange-600" />,
      title: "7. Data Security",
      content: "We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, disclosure, alteration, loss, or destruction. However, no online transmission or storage method is 100% secure.",
    },
    {
      id: "8",
      icon: <CreditCard className="h-5 w-5 text-orange-600" />,
      title: "8. Payment Security",
      content: "Payments made through our channels are processed by secure third-party payment gateways. Margika Yatra does not store sensitive payment details such as debit/credit card numbers, CVVs, or online banking credentials.",
    },
    {
      id: "9",
      icon: <Megaphone className="h-5 w-5 text-orange-600" />,
      title: "9. Marketing Communications",
      content: "We may send tour package updates, promotional offers, and pilgrimage announcements. You may opt out of these communications at any time by clicking the unsubscribe link in our emails or contacting our team.",
    },
    {
      id: "10",
      icon: <Scale className="h-5 w-5 text-orange-600" />,
      title: "10. Your Rights",
      content: "You may have the right to access your personal information, request corrections or deletions, withdraw consent, and opt out of marketing communications. Please contact us to exercise these rights.",
    },
    {
      id: "11",
      icon: <Link2 className="h-5 w-5 text-orange-600" />,
      title: "11. Third-Party Links",
      content: "Our website may link to external travel partners, government portals, or religious institutions. We are not responsible for their content or privacy practices.",
    },
    {
      id: "12",
      icon: <UserX className="h-5 w-5 text-orange-600" />,
      title: "12. Children's Privacy",
      content: "Our services are intended for individuals above 18 or those traveling under parental supervision. We do not knowingly collect personal info from children without parental consent.",
    },
    {
      id: "13",
      icon: <Calendar className="h-5 w-5 text-orange-600" />,
      title: "13. Data Retention",
      content: "We retain personal information only as long as necessary to fulfill booking obligations, provide support, resolve disputes, enforce agreements, or satisfy legal requirements.",
    },
    {
      id: "14",
      icon: <RefreshCw className="h-5 w-5 text-orange-600" />,
      title: "14. Changes to This Privacy Policy",
      content: "Margika Yatra reserves the right to update this policy at any time. Changes will be posted on this page with an updated effective date. Continued website use constitutes acceptance.",
    },
  ]

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(`section-${section.id}`)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
      const yOffset = -100 // Header offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-orange-100/30 text-gray-900 overflow-x-hidden">
      <ParticleEffects />
      <Header />

      {/* Hero Header Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(254,230,199,0.3),transparent_60%)]" />
        <div className="container mx-auto px-4 z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-500 mb-6 transition-colors font-semibold group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto bg-orange-100/80 border border-orange-200/50 p-4 rounded-2xl w-fit shadow-md mb-2"
          >
            <Shield className="h-12 w-12 text-orange-600 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 font-semibold max-w-xl mx-auto flex items-center justify-center gap-2"
          >
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>Effective Date: June 2026</span>
          </motion.p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sticky Sidebar Menu */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block max-h-[80vh] overflow-y-auto bg-white/95 border border-orange-100/80 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4" /> Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === sec.id
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 translate-x-1"
                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
                    }`}
                  >
                    <span className={`transition-colors ${activeSection === sec.id ? "text-white" : "text-orange-500"}`}>
                      {sec.icon}
                    </span>
                    <span className="truncate">{sec.title.substring(3)}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Right Detailed Sections */}
            <main className="lg:col-span-8 space-y-6">
              
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/95 border border-orange-100 rounded-2xl p-6 md:p-8 shadow-lg space-y-4"
              >
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Welcome to <strong>Margika Yatra</strong>. We value your privacy and are committed to protecting the personal information you share with us.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy explains how Margika Yatra collects, uses, stores, and protects your information when you visit our website, submit an inquiry, book a tour package, or interact with our services. By using our website and services, you agree to the terms outlined in this Privacy Policy.
                </p>
              </motion.div>

              {/* Loop and render individual sections */}
              <div className="space-y-6">
                {sections.map((sec, index) => (
                  <motion.div
                    key={sec.id}
                    id={`section-${sec.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white border border-orange-100/70 hover:border-orange-200/90 transition-all duration-300 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg space-y-4"
                  >
                    <div className="flex items-center space-x-3 pb-3 border-b border-orange-100/50 justify-center lg:justify-start text-center lg:text-left">
                      <div className="p-2 bg-orange-50 rounded-xl">
                        {sec.icon}
                      </div>
                      <h2 className="text-xl font-extrabold text-gray-900 text-center lg:text-left">{sec.title}</h2>
                    </div>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base text-center lg:text-left">
                      {sec.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Information block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-orange-50/50 border-2 border-orange-200/60 rounded-2xl p-6 md:p-8 shadow-xl space-y-6"
              >
                <div className="flex items-center space-x-3 pb-3 border-b border-orange-200/50 justify-center lg:justify-start">
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <Shield className="h-6 w-6 text-orange-700" />
                  </div>
                  <h2 className="text-xl font-extrabold text-gray-950 text-center lg:text-left">15. Contact Us</h2>
                </div>
                <p className="text-gray-700 text-base text-center lg:text-left">
                  If you have any questions, feedback, or concerns regarding this Privacy Policy, our data practices, or your personal information, please reach out to our team:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <a 
                    href="https://www.margikayatra.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3 bg-white border border-orange-100 hover:border-orange-300 rounded-xl hover:shadow-md transition-all group"
                  >
                    <Globe className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-orange-600 font-semibold transition-colors">www.margikayatra.com</span>
                  </a>
                  <a 
                    href="mailto:margikayatra@gmail.com" 
                    className="flex items-center space-x-3 p-3 bg-white border border-orange-100 hover:border-orange-300 rounded-xl hover:shadow-md transition-all group"
                  >
                    <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-orange-600 font-semibold transition-colors">margikayatra@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 p-3 bg-white border border-orange-100 rounded-xl">
                    <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">+91 84336 84155</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white border border-orange-100 rounded-xl">
                    <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Thane, Mumbai, India</span>
                  </div>
                </div>
              </motion.div>

              {/* Consent and Agreement Notice */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-orange-500/10 border border-orange-500/25 rounded-2xl p-6 text-sm text-gray-700 leading-relaxed shadow-inner"
              >
                <span className="font-extrabold text-orange-800 uppercase tracking-widest block mb-2 text-center lg:text-left">Consent & Agreement</span>
                <p className="text-center lg:text-left">By using the Margika Yatra website, submitting inquiry forms, booking tour packages, or interacting with our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy and the collection and use of information as described herein.</p>
              </motion.div>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
