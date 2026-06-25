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
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
    >
      <Card className="bg-white/80 backdrop-blur-sm border-orange-200 text-center shadow-xl">
        <CardContent className="p-6">
          <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
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
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const stats: StatItem[] = [
    { icon: Users, number: 3000, suffix: "+", label: "Happy Pilgrims" },
    { icon: Award, number: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
    { icon: Ship, number: 50, suffix: "+", label: "Sacred Destinations" },
    { icon: Heart, number: 3, suffix: "+", label: "Years Experience" },
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
    "/8.jpg",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const homeFaqs = [
    {
      q: "What kind of yatra packages do you offer?",
      a: "We offer pilgrimage packages to Char Dham, Do Dham, Vaishno Devi, Kedarnath, Amarnath, and other major spiritual destinations across India, with both group and customised private tours."
    },
    {
      q: "What is included in the package price?",
      a: "Our packages typically include accommodation, meals, transport, an experienced tour guide, and temple darshan arrangements. Inclusions vary slightly by package, and our team will share a detailed breakdown before booking."
    },
    {
      q: "Can you customise a package for my family or group?",
      a: "Absolutely. We design custom itineraries based on your group size, budget, comfort level, and the number of days you have, including special arrangements for senior citizens."
    },
    {
      q: "Are your packages suitable for senior citizens?",
      a: "Yes, many of our pilgrims are elderly travellers. We offer comfortable transport, paced itineraries, wheelchair and pony assistance where needed, and on-trip support from our team."
    },
    {
      q: "Do you provide VIP or priority darshan?",
      a: "Yes, VIP and priority darshan can be arranged at select temples, subject to availability, to help you avoid long queues during your visit."
    },
    {
      q: "What is the best time of year to travel?",
      a: "This depends on the destination — most Himalayan yatras run from May to October, while shrines like Vaishno Devi are open year-round. Our team can recommend the ideal time based on your chosen package."
    },
    {
      q: "How do I book a yatra with you?",
      a: "You can book by calling our team, sending us a message on WhatsApp, or filling out the enquiry form on our website. We'll guide you through the available packages and help confirm your dates."
    },
    {
      q: "What are your payment and cancellation terms?",
      a: "We require a partial advance to confirm your booking, with the balance payable before departure. Cancellation terms vary by package and travel season; our team will explain these clearly at the time of booking."
    }
  ];

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/HomeMain.png"
            alt="Spiritual Journey"
            fill
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
              Best Spiritual Travel
              <br />
              Agency in India
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Embark on a transformative spiritual journey that connects your soul with India's most sacred
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
                  onClick={() => {
                    if (typeof document !== 'undefined') {
                      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
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

      <CharStats />

      {/* About Us Section */}
      <section id="about" className="py-12 relative bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              About Margika Yatra
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
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
              <div className="grid grid-cols-2 gap-6">
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
              animate={{ x: [0, -2752] }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {Array.from({ length: 16 }, (_, index) => {
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
                              fill
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
                  </motion.div>
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
                      <div className="flex items-center text-gray-700 mb-6">
                        <IndianRupee className="h-5 w-5 mr-2 text-orange-500" />
                        <span className="font-bold text-xl">{pkg.price}</span>
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side content */}
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-orange-600 text-xs font-bold tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-orange-500 rounded"></span>
                <span>Common Questions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Frequently
                <span className="block font-serif italic text-orange-600 font-medium mt-1">Asked Questions</span>
              </h2>
              
              <div className="w-16 h-[2px] bg-gray-300"></div>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                Everything you need to know before booking your spiritual journey with Margi Ka Yatra — from Mumbai, Thane, or anywhere in India.
              </p>
              
              <div className="flex flex-col gap-3 pt-4 items-start">
                <motion.a 
                  href="tel:+917208771688"
                  className="inline-flex items-center gap-2.5 bg-[#E8631C] text-white font-bold py-[15px] px-[26px] rounded-lg shadow-sm transition-all duration-150 text-[13.5px] tracking-[0.5px] uppercase w-fit"
                  whileHover={{ y: -2, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base leading-none">📞</span>
                  <span>SPEAK TO AN EXPERT</span>
                </motion.a>
                
                <motion.button 
                  onClick={handleGeneralWhatsapp}
                  className="inline-flex items-center gap-2.5 bg-[#3CBE5E] text-white font-bold py-[15px] px-[26px] rounded-lg shadow-sm transition-all duration-150 text-[13.5px] tracking-[0.5px] uppercase w-fit"
                  whileHover={{ y: -2, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WHATSAPP A QUESTION</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side Accordion */}
            <motion.div 
              className="lg:col-span-7 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {homeFaqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border-b border-orange-200/60 pb-2 last:border-0"
                  >
                    <button
                      className="w-full flex items-center justify-between py-5 text-left text-gray-800 hover:text-orange-600 font-semibold transition-colors duration-200 group focus:outline-none"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="text-base md:text-lg pr-4">{item.q}</span>
                      <span className={`w-8 h-8 rounded-full border border-orange-300 flex items-center justify-center text-orange-600 font-light text-xl transition-all duration-300 shrink-0 ${isOpen ? 'bg-orange-500 text-white border-orange-500 rotate-45' : 'bg-transparent group-hover:bg-orange-50'}`}>
                        +
                      </span>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isOpen ? "auto" : 0, 
                        opacity: isOpen ? 1 : 0 
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                        {item.a}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
            
          </div>
        </div>
      </section>

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
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Call Us</h3>
                  <p className="text-gray-700 mb-4">+91 72087 71688</p>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
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
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Email Us</h3>
                  <p className="text-gray-700 mb-4">margikayatra@gmail.com</p>
                  <a href="mailto:margikayatra@gmail.com">
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
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
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Our Office</h3>
                  <p className="text-gray-700 mb-4">
                    Azadnagar, Kolshet Road, Thane West (400607), Mumbai, Maharashtra
                  </p>
                  <a href="https://www.google.com/maps/search/Margika+Yatra" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
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
