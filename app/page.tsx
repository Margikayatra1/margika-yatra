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
import { ParticleEffects } from "@/components/particle-effects"
import Image from "next/image"
import Link from "next/link"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState, useRef } from "react";


export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const stats = [
    { icon: Users, number: 3000, suffix: "+", label: "Happy Pilgrims" },
    { icon: Award, number: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
    { icon: Ship, number: 50, suffix: "+", label: "Sacred Destinations" },
    { icon: Heart, number: 3, suffix: "+", label: "Years Experience" },
  ];


  const handleGeneralWhatsapp = () => {
    const phoneNumber = '+917208771688'; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hello, I'm interested in a spiritual trip with Margika Yatra.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    // Safely access window object
    if (typeof window !== 'undefined') {
      window.open(whatsappURL, '_blank');
    }
  }

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
      image: "/mp.jpg",
      description: "Visit the sacred Jyotirlingas",
      location: "Madhya Pradesh",
    },
    {
      name: "3 Jyotirling of Maharashtra",
      price: "₹12,999",
      duration: "3N/4D",
      image: "/mh.jpg",
      description: "Explore Maharashtra's divine temples",
      location: "Maharashtra",
    },
    {
      name: "Varanasi-Ayodhya-Prayagraj",
      price: "₹15,999",
      duration: "3N/4D",
      image: "/up.jpg",
      description: "Tri-city spiritual circuit",
      location: "Uttar Pradesh",
    },
    {
      name: "Rameshwaram",
      price: "₹14,999",
      duration: "3N/4D",
      image: "/rameshwaram.jpg",
      description: "Southern pilgrimage destination",
      location: "Tamil Nadu",
    },
    {
      name: "Jagannath Puri",
      price: "₹12,999",
      duration: "2N/3D",
      image: "/puri.png",
      description: "Sacred journey to the land of Lord Jagannath",
      location: "Odisha",
    },
    {
      name: "Meghalaya",
      price: "₹19,999",
      duration: "5N/6D",
      image: "/mg.png",
      description: "Land of clouds and natural beauty",
      location: "Meghalaya",
    },
  ]

  const handleBookNow = (packageName: string, price: string) => {
    const message = `🙏 Namaste! I'm interested in booking the ${packageName} package (${price}). Please provide more details and availability. Thank you! 🕉️`
    const whatsappUrl = `https://wa.me/917208771688?text=${encodeURIComponent(message)}`
    // Safely access window object
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, "_blank")
    }
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
      image: "/badal.JPG",
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

  const allUpcomingEvents = [
    {
      name: "Dev Deepawali",
      date: "23rd–25th November",
      location: "Varanasi (River Cruise Experience)",
      image: "/DD1.PNG",
      description: "Experience the magical festival of lights in Varanasi.",
    },
    // {
    //   name: "Ziro Valley Retreat",
    //   date: "23rd-29th September",
    //   location: "Ziro Valley, Arunachal Pradesh",
    //   image: "/z.jpg",
    //   description: "Immerse yourself in the serene beauty of Ziro Valley with our exclusive retreat.",
    // },
    // {
    //   name: "Hornbill festival",
    //   date: "1st–5th December",
    //   location: "Nagaland",
    //   image: "/naga.jpg",
    //   description: "Join us for the vibrant Hornbill Festival in Nagaland, celebrating the rich culture and traditions of the Naga tribes.",
    // }
    //add more events as needed
  ];

  // Take only the first 3 upcoming events
  const upcomingEvents = allUpcomingEvents.slice(0, 3);

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    dragFree: false,
  }, [autoplay.current]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

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
            src="/rambg.jpg"
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
              We believe travel is not just about exploring new places; it's about discovering the depths of your soul.
              Our spiritual journeys are designed to inspire inner transformation, reconnect you with your higher self,
              and immerse you in the sacred energies of India's most mystical places.
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
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
            className="text-center mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
          </motion.div>
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

          {/* Embla Carousel for 1 visible slide at a time with dots and autoplay */}
          <div className="relative embla max-w-3xl mx-auto"> {/* MODIFIED: Changed max-w-2xl to max-w-3xl */}
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
                          <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                            onClick={() => {
                              // You might want a specific handler for events or direct WhatsApp message
                              if (typeof window !== 'undefined') {
                                const eventMessage = `Hello, I'm interested in the "${event.name}" event (${event.date}). Can you provide more details?`;
                                window.open(`https://wa.me/917208771688?text=${encodeURIComponent(eventMessage)}`, '_blank');
                              }
                            }}
                          >
                            Enquire Now
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </Button>
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
                key={index}
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
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg shadow-xl border-0 font-semibold"
                        onClick={() => handleBookNow(pkg.name, pkg.price)}
                      >
                        Book Now
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      

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
                    onClick={handleGeneralWhatsapp} // Using the safely wrapped function
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
