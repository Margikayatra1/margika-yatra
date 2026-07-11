"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import TeaserSection from "./youtube";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
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
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleEffects } from "@/components/particle-effects"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"
import Image from "next/image"
import Link from "next/link"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState, useRef } from "react";
import { tripPackages } from "@/lib/trip-packages"



// ✅ Using LucideIcon type instead of React.ElementType — no React import needed
interface StatItem {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
  decimals?: number;
}

function StatCard({ stat }: { stat: StatItem }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
    >
      <Card className="bg-white/80 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
          <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4 flex-shrink-0" />
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
          <p className="text-gray-600 font-medium leading-tight">{stat.label}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => { setIsMobile(window.innerWidth < 768) }, [])

  const { scrollYProgress } = useScroll()
  // Disable scroll-linked parallax on mobile — fires every pixel and causes jank
  const backgroundY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "200%"])

  const stats: StatItem[] = [
    { icon: Users, number: 5000, suffix: "+", label: "Happy Pilgrims" },
    { icon: Award, number: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
    { icon: Ship, number: 50, suffix: "+", label: "Sacred Destinations" },
    { icon: Heart, number: 100, suffix: "%", label: "VIP Darshan" },
  ];

  const handleGeneralWhatsapp = () => {
    const phoneNumber = '+917208771688';
    const message = encodeURIComponent("Hello, I'm interested in a spiritual trip with Margika Yatra.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    if (typeof window !== 'undefined') {
      window.open(whatsappURL, '_blank');
    }
  }

  const packages = tripPackages

  const tripImages = [
    "/1.jpg",
    "/2.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/Home1.jpeg",
    "/Home2.jpeg",
    "/Home3.jpeg",
    "/Home4.jpeg",
    "/Home5.jpeg",
    "/Home6.jpg",
    "/Home7.jpg"
  ];

  const allUpcomingEvents = [
    {
      name: "Dev Deepawali",
      date: "23rd–25th November",
      location: "Varanasi (River Cruise Experience)",
      image: "/DD1.PNG",
      description: "Experience the magical festival of lights in Varanasi.",
    },
  ];

  const upcomingEvents = allUpcomingEvents.slice(0, 3);

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    dragFree: false,
  }, [autoplay.current as any]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  // ✅ Fixed: removed unused `emblaApi` parameter name, use the outer scoped one
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900 overflow-x-hidden relative">
      <ParticleEffects />
      <Header />

      {/* Animated Background Orbs — desktop only, infinite loops are too costly on mobile */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-orange-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-orange-600/30 rounded-full blur-3xl"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5], rotate: [360, 180, 0] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/HomeMain.png"
            alt="Spiritual Journey"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-orange-50/30 to-orange-100/50" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center" style={{ marginTop: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: textY }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              Best Spiritual Travel
              <br />
              Agency in India
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Embark on a transformative spiritual journey that connects your soul with India's most sacred
              destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div
                className="w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] active:scale-95"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                  onClick={() => {
                    if (typeof document !== 'undefined') {
                      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Explore Packages
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div
                className="w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)] active:scale-95"
              >
                <Link href="/personalized-trip" className="w-full sm:w-auto block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg shadow-xl backdrop-blur-sm font-semibold"
                  >
                    Plan Custom Trip
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-1/4 left-10 text-orange-400 hidden md:block"
              animate={{ y: [0, -30, 0], rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Mountain className="h-16 w-16 opacity-60 drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-10 text-orange-400 hidden md:block"
              animate={{ y: [0, 30, 0], rotate: [0, -10, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Ship className="h-20 w-20 opacity-60 drop-shadow-lg" />
            </motion.div>
          </>
        )}
      </section>

      {/* <CharStats /> */}

      {/* About Us Section */}
      <section id="about" className="py-12 relative bg-gradient-to-b from-orange-50 to-white mt-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              About Margika Yatra
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
              We believe travel is not just about exploring new places; it&apos;s about discovering the depths of your soul.
              Our spiritual journeys are designed to inspire inner transformation, reconnect you with your higher self,
              and immerse you in the sacred energies of India&apos;s most mystical places.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TeaserSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6 items-stretch">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Trips Photo Slider */}
      <section className="py-12 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Previous Trips Gallery
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Beautiful moments from our spiritual journeys with fellow travelers
            </p>
          </motion.div>

          {/* Photo Slider */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 pb-6"
              animate={{ x: [0, -4128] }}
              transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {Array.from({ length: tripImages.length * 2 }, (_, index) => {
                const image = tripImages[index % tripImages.length];

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] snap-center"
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden shadow-xl h-64">
                      <div className="relative h-full">
                        {image ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={image}
                              alt={`Trip ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 320px"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
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
                  </div>
                );
              })}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Join us for these special spiritual journeys and create memories that last a lifetime
            </p>
          </motion.div>

          <div className="relative embla max-w-3xl mx-auto">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="embla__slide flex-shrink-0 w-full pl-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden group hover:border-orange-300 transition-all duration-500 shadow-2xl h-full flex flex-col">
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={event.image}
                          alt={event.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <Badge className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg font-semibold">
                          Featured Event
                        </Badge>
                      </div>

                      <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">{event.name}</h3>
                          <p className="text-gray-700 text-base mb-4 line-clamp-2">{event.description}</p>
                          <div className="flex items-center text-gray-700 mb-2">
                            <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-700 mb-6">
                            <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link href={event.name === "Dev Deepawali" ? "/packages/dev-deepawali" : "/#packages"}>
                            <Button
                              size="lg"
                              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                            >
                              View Package Details
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="embla__dots flex justify-center mt-6">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`embla__dot w-3 h-3 mx-1 rounded-full ${index === selectedIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section id="packages" className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Our Spiritual Packages
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Explore our curated spiritual tour packages designed to elevate your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(249, 115, 22, 0.2)" }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-orange-200 overflow-hidden group hover:border-orange-300 transition-all duration-500 shadow-2xl h-full flex flex-col">
                  <div className="relative h-52">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg font-semibold">
                      {pkg.location}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">{pkg.name}</h3>
                      <p className="text-gray-700 text-base mb-4 line-clamp-2">{pkg.description}</p>
                      <div className="flex items-center text-gray-700 mb-2">
                        <Clock className="h-5 w-5 mr-2 text-orange-500" />
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700 mb-6 gap-2">
                        <IndianRupee className="h-5 w-5 text-orange-500" />
                        <span className="line-through text-gray-400 text-base">{pkg.originalPrice.replace("₹", "")}</span>
                        <span className="font-bold text-xl text-orange-600">{pkg.price.replace("₹", "")}</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="space-y-3"
                    >
                      <Link href={pkg.id === "ujjain" ? "/ujjain-omkareshwar-tour-package" : pkg.id === "kerala" ? "/kerala-tour-packages-from-mumbai" : `/packages/${pkg.id}`}>
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                        >
                          Book Now
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Have questions or ready to book your journey? Reach out to us!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Call & WhatsApp</h3>
                    <p className="text-gray-700 mb-4">+91 72087 71688</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full mt-auto"
                    onClick={handleGeneralWhatsapp}
                  >
                    Message on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Email Address</h3>
                    <p className="text-gray-700 mb-4">margikayatra@gmail.com</p>
                  </div>
                  <a href="mailto:margikayatra@gmail.com" className="w-full mt-auto">
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full">
                      Send Email
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-orange-200 text-center shadow-xl h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Our Office</h3>
                    <p className="text-gray-700 mb-4">
                      Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                    </p>
                  </div>
                  <a href="https://www.google.com/maps/search/Margika+Yatra" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full">
                      View on Map
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
