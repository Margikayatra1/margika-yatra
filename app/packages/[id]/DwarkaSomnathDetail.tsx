"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"

export function DwarkaSomnathDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 0: true })
  const razorpayLink = "https://rzp.io/rzp/zCOhd60"

  useEffect(() => {
    // Setup scroll reveals
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))

    // Scroll listener for Nav
    const nav = document.getElementById("mainNav")
    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav?.classList.add("scrolled")
      } else {
        nav?.classList.remove("scrolled")
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Set page SEO metadata dynamically
    document.title = "Gujarat Tour Package from Mumbai & Thane | Margika Yatra – Dwarka, Somnath, Nageshwar"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Book your Gujarat tour package with Margika Yatra. 3-night itinerary covering Dwarkadhish Temple, Nageshwar Jyotirlinga & Somnath. Departures from Mumbai & Thane. Call +91 72087 71688."
      )
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDay = (idx: number) => {
    setOpenDays((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  const itinerary = [
    {
      day: 1,
      route: "Dwarka",
      title: "Arrival — Dwarkadhish Darshan, Gomti Ghat & Beyt Dwarka",
      points: [
        "Check-in at hotel — freshen up and rest after your journey from Mumbai or Thane",
        "Lunch — pure vegetarian meal included",
        "Visit Dwarkadhish Temple — darshan at this 2,500-year-old shrine, one of the four sacred Char Dhams of Hinduism, dedicated to Lord Krishna",
        "Gomti Ghat — take a holy dip at this sacred ghat where the Gomti River meets the Arabian Sea; witness the evening aarti",
        "High Tea",
        "Visit Rukmini Devi Temple — the only temple dedicated to Goddess Rukmini (consort of Lord Krishna) in India; uniquely located 3 km from Dwarka city",
        "Beyt Dwarka — the island believed to have been Lord Krishna's personal residence; ferry ride included for a truly special darshan",
        "Shopping time in Dwarka market",
        "Dinner & overnight stay at hotel in Dwarka",
      ],
    },
    {
      day: 2,
      route: "Nageshwar → Somnath",
      title: "Nageshwar Jyotirlinga Darshan & Somnath Arrival",
      points: [
        "Breakfast at hotel — early start to the most spiritually significant day of the tour",
        "Visit Gopi Talav — the sacred lake where legend says the Gopis dissolved their bodies waiting for Lord Krishna; a meditative, beautiful spot",
        "Early morning departure to Nageshwar Jyotirlinga — 17 km from Dwarka, the first among the 12 Jyotirlingas; the 25-meter seated Shiva statue here is an extraordinary sight",
        "Nageshwar Temple Darshan — complete the Jyotirlinga darshan at a calm and unhurried pace",
        "Lunch en route to Somnath",
        "Proceed to Somnath — 240 km from Nageshwar; comfortable AC transport throughout",
        "High Tea",
        "Visit Madhavpur Beach — a serene coastal stop en route with beautiful sunset views",
        "Evening darshan at Somnath Temple — arrive in time for the famous aarti and, if timing permits, the evening light-and-sound show",
        "Dinner & hotel check-in in Somnath / Veraval",
        "Overnight rest",
      ],
    },
    {
      day: 3,
      route: "Somnath",
      title: "Early Morning Somnath Darshan, Sightseeing & Departure",
      points: [
        "Early morning darshan at Somnath Temple — begin the day with the sacred morning aarti at one of India's most powerful Jyotirlingas",
        "Breakfast at hotel",
        "Local sightseeing in Somnath area — Triveni Ghat (confluence of Hiran, Kapila & Saraswati rivers), Bhalka Teertha (where Lord Krishna departed from this world), and Prabhas Patan Museum",
        "Shopping time — Somnath market for local crafts, religious items & Gujarati textiles",
        "Drop at Veraval Railway Station for your return journey to Mumbai or Thane",
      ],
    },
    {
      day: 4,
      route: "Return",
      title: "Journey Home — Mumbai & Thane Arrival",
      points: [
        "Overnight train / return journey from Veraval to Mumbai or Thane (train tickets arranged or guided as per selected package)",
        "Arrive home with memories, blessings, and the satisfaction of having completed a meaningful pilgrimage",
        "Margika Yatra team checks in on WhatsApp to confirm your safe return",
      ],
    },
  ]

  const highlights = [
    {
      name: "Dwarka",
      desc: "Char Dham · Kingdom of Lord Krishna",
      detail:
        "The legendary city of Lord Krishna, one of the four sacred Char Dhams. Dwarkadhish Temple stands 51 meters tall, with darshan at Gomti Ghat, Rukmini Temple & Beyt Dwarka island.",
      image: "/Dw1.jpeg",
    },
    {
      name: "Nageshwar",
      desc: "1st Jyotirlinga · Lord of Snakes",
      detail:
        "The first among the 12 Jyotirlingas, 17 km from Dwarka. A colossal 25-meter idol of Lord Shiva welcomes devotees. Early morning darshan is deeply peaceful.",
      image: "/Dw2.jpeg",
    },
    {
      name: "Somnath",
      desc: "First Jyotirlinga · Eternal Shiva Temple",
      detail:
        "The most celebrated of all Jyotirlingas, standing at the confluence of three sacred rivers and the Arabian Sea. The light-and-sound show here is one of the finest in India.",
      image: "/Dw3.jpeg",
    },
    {
      name: "Gopi Talav & Gomti Ghat",
      desc: "Sacred Lakes · Sunset & Serenity",
      detail:
        "Gomti Ghat for the holy evening aarti in Dwarka; Gopi Talav — where the Gopis waited for Lord Krishna. Also includes Madhavpur Beach for a serene sunset before Somnath darshan.",
      image: "/Dw4.jpeg",
    },
  ]

  const packages = [
    { group: "2 Guests", vehicle: "Sedan", price: "₹11,360" },
    { group: "4 Guests", vehicle: "Sedan", price: "₹7,960" },
    { group: "6 Guests", vehicle: "Ertiga", price: "₹6,999" },
    { group: "6 Guests", vehicle: "Innova", price: "₹7,660" },
    { group: "12 Guests", vehicle: "Tempo Traveller (12-Seater)", price: "₹5,960" },
  ]

  const faqs = [
    [
      "What is included in a Gujarat tour package from Mumbai?",
      "A standard Gujarat tour package from Mumbai includes transportation, hotel accommodation, vegetarian meals (breakfast, lunch & dinner), darshan at Dwarkadhish Temple, Nageshwar Jyotirlinga, and Somnath Temple, plus local sightseeing at Gomti Ghat, Beyt Dwarka, Gopi Talav, and Madhavpur Beach.",
    ],
    [
      "How many days is the Margika Yatra Gujarat package?",
      "The standard Gujarat tour package by Margika Yatra is a 3-night, 4-day itinerary covering Dwarka, Nageshwar, and Somnath. Extended or custom durations are available on request.",
    ],
    [
      "Is the Gujarat tour package suitable for families?",
      "Yes. The package is planned for all age groups including senior citizens, couples, and families with children. The pace is comfortable, meals are pure vegetarian, and our team provides full on-ground support throughout.",
    ],
    [
      "What is the Gujarat tour package price from Mumbai?",
      "Gujarat tour package prices start from ₹8,999 per person for standard package (Premium package is ₹14,999 per person), depending on the batch size, hotel category, and travel mode. Call or WhatsApp Margika Yatra at +91 72087 71688 for a personalised quote.",
    ],
    [
      "Does the Gujarat package cover Nageshwar Jyotirlinga?",
      "Yes. Nageshwar Jyotirlinga — one of the 12 sacred Jyotirlingas of Lord Shiva — is included on Day 2 of the itinerary. Early morning departure ensures darshan before large crowds gather.",
    ],
    [
      "What is the best time to visit Dwarka and Somnath?",
      "October to March is the most comfortable time to visit Dwarka and Somnath. Winters are pleasant (15–28°C), skies are clear, and festivals like Kartik Purnima make the experience even more special.",
    ],
  ]

  return (
    <>
      <div className="gujarat-page">
      <style jsx global>{`
        .gujarat-page {
          --saffron: #f97316;
          --saffron-light: #fdba74;
          --saffron-dark: #ea580c;
          --gold: #c2410c;
          --gold-light: #fdba74;
          --cream: #111827;
          --cream-warm: #fff7ed;
          --ink: #ffffff;
          --ink-mid: #fff7ed;
          --smoke: #4b5563;
          --white: #ffffff;
          --section-pad: clamp(60px, 8vw, 120px);

          background: linear-gradient(to bottom right, #ffffff, #fff7ed, #ffedd5);
          color: var(--cream);
          font-family: "Jost", sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .gujarat-page * {
          box-sizing: border-box;
        }
        .gujarat-page *:not(header, header *, footer, footer *, .char-stats-wrapper, .char-stats-wrapper *) { margin: 0; padding: 0; }

        .gujarat-page ::-webkit-scrollbar {
          width: 4px;
        }
        .gujarat-page ::-webkit-scrollbar-track {
          background: var(--ink-mid);
        }
        .gujarat-page ::-webkit-scrollbar-thumb {
          background: var(--saffron);
          border-radius: 2px;
        }



        /* HERO */
        .gujarat-page .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          background: #0d1b3e;
          padding: 130px 5% 80px;
        }
        .gujarat-page .hero-img {
          position: absolute;
          inset: 0;
          
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom {
          to {
            transform: scale(1);
          }
        }
        .gujarat-page .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.15) 30%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
        .gujarat-page .hero-content {
          position: relative;
          z-index: 2;
          padding: 0;
          max-width: 860px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .gujarat-page .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron-light);
          margin-bottom: 20px;
        }
        .gujarat-page .hero-tag::before {
          content: "";
          display: block;
          width: 30px;
          height: 1px;
          background: var(--saffron-light);
        }
        .gujarat-page .hero-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(42px, 7vw, 88px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 12px;
        }
        .gujarat-page .hero-title em {
          color: #f5a94e;
          font-style: italic;
        }
        .gujarat-page .hero-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 40px;
          max-width: 520px;
          line-height: 1.75;
        }
        /* Global uniform button sizing */
        .gujarat-page .btn-primary,
        .gujarat-page .btn-secondary,
        .gujarat-page .btn-wa,
        .gujarat-page .btn-book,
        .gujarat-page .btn-book-outline,
        .gujarat-page .char-btn-outline {
          min-height: 50px !important;
          padding: 12px 24px !important;
          border-radius: 4px !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .gujarat-page .hero-ctas,
        .gujarat-page .price-actions,
        .gujarat-page .cta-buttons,
        .gujarat-page .day-ctas {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .gujarat-page .hero-ctas .btn-primary,
        .gujarat-page .hero-ctas .btn-wa,
        .gujarat-page .hero-ctas .btn-secondary,
        .gujarat-page .hero-ctas .char-btn-outline,
        .gujarat-page .price-actions .btn-book,
        .gujarat-page .price-actions .btn-book-outline,
        .gujarat-page .cta-buttons .btn-primary,
        .gujarat-page .cta-buttons .btn-wa,
        .gujarat-page .cta-buttons .btn-secondary,
        .gujarat-page .cta-buttons .char-btn-outline,
        .gujarat-page .day-ctas .btn-book,
        .gujarat-page .day-ctas .btn-book-outline,
        .gujarat-page .day-ctas .btn-secondary {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }

        .gujarat-page .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .gujarat-page .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--saffron);
          color: var(--white);
          padding: 16px 32px;
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .gujarat-page .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(232, 135, 26, 0.4);
          background: var(--saffron-light);
        }
        .gujarat-page .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: var(--white);
          padding: 16px 32px;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .gujarat-page .btn-secondary:hover {
          border-color: var(--white);
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
        }
        .gujarat-page .btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25d366;
          color: white;
          padding: 16px 32px;
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
        }
        .gujarat-page .btn-wa:hover {
          background: #1eb858;
          transform: translateY(-2px);
        }
        .gujarat-page .btn-wa svg {
          width: 18px;
          height: 18px;
          fill: white;
        }

        /* STATS STRIP */
        .gujarat-page .stats-strip {
          position: relative;
          z-index: 3;
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .gujarat-page .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }
        .gujarat-page .stat-item:last-child {
          border-right: none;
        }
        .gujarat-page .stat-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          font-weight: 600;
          color: var(--white);
          line-height: 1;
        }
        .gujarat-page .stat-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 4px;
        }

        /* SECTION SHARED */
        .gujarat-page section {
          padding: var(--section-pad) 5%;
        }
        .gujarat-page .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 16px;
        }
        .gujarat-page .section-tag::before {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background: var(--saffron);
        }
        .gujarat-page .section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 4.5vw, 54px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--cream);
          margin-bottom: 16px;
        }
        .gujarat-page .section-title em {
          color: var(--gold);
          font-style: italic;
        }
        .gujarat-page .section-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--smoke);
          max-width: 640px;
        }
        .gujarat-page .gold-rule {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 24px 0;
        }

        /* INTRO */
        .gujarat-page .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .gujarat-page .intro-visual {
          position: relative;
        }
        .gujarat-page .intro-img-main {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 4px;
          filter: brightness(0.85) saturate(1.1);
        }
        .gujarat-page .intro-img-float {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
          border: 4px solid var(--ink);
          filter: brightness(0.9) saturate(1.2);
        }
        .gujarat-page .intro-quote {
          margin-top: 40px;
          padding: 24px 28px;
          border-left: 2px solid var(--saffron);
          background: rgba(249, 115, 22, 0.05);
          border-radius: 0 4px 4px 0;
        }
        .gujarat-page .intro-quote p {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 300;
          color: var(--gold);
          line-height: 1.65;
        }

        /* HIGHLIGHTS GRID */
        .gujarat-page .highlights-section {
          background: rgba(249, 115, 22, 0.03);
        }
        .gujarat-page .highlights-header {
          text-align: center;
          max-width: 620px;
          margin: 100px auto;
          padding-top: 80px ;
        }
        .gujarat-page .highlights-header .gold-rule {
          margin: 24px auto;
        }
        .gujarat-page .dhams-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .gujarat-page .dham-card {
          position: relative;
          height: 460px;
          overflow: hidden;
          cursor: default;
        }
        .gujarat-page .dham-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.58) saturate(1.1);
        }
        .gujarat-page .dham-card:hover img {
          transform: scale(1.08);
          filter: brightness(0.75) saturate(1.2);
        }
        .gujarat-page .dham-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.15) 60%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
        }
        .gujarat-page .dham-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 52px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.22);
          line-height: 1;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform 0.5s, color 0.5s;
        }
        .gujarat-page .dham-card:hover .dham-num {
          color: rgba(255, 255, 255, 0.5);
          transform: translateY(0);
        }
        .gujarat-page .dham-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .gujarat-page .dham-desc {
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--saffron);
          text-transform: uppercase;
        }
        .gujarat-page .dham-detail {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 8px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s, opacity 0.4s;
          opacity: 0;
          line-height: 1.65;
        }
        .gujarat-page .dham-card:hover .dham-detail {
          max-height: 90px;
          opacity: 1;
        }

        /* ITINERARY */
        .gujarat-page .itinerary-section {
          max-width: 1200px;
          margin: 100px auto;
        }
        .gujarat-page .itinerary-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 50px;
        }
        .gujarat-page .itinerary-header .section-tag {
          justify-content: center;
          margin: 0 auto 16px;
        }
        .gujarat-page .itinerary-header .gold-rule {
          margin: 20px auto;
        }
        .gujarat-page .itinerary-day {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 6px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .gujarat-page .itinerary-day:hover {
          border-color: rgba(232, 135, 26, 0.45);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.06);
        }
        .gujarat-page .day-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 30px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .gujarat-page .day-header:hover {
          background: rgba(232, 135, 26, 0.04);
        }
        .gujarat-page .day-num-badge {
          min-width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(232, 135, 26, 0.12);
          border: 1px solid rgba(232, 135, 26, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--saffron);
        }
        .gujarat-page .day-title-wrap {
          flex: 1;
        }
        .gujarat-page .day-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 4px;
        }
        .gujarat-page .day-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--cream);
        }
        .gujarat-page .day-toggle {
          font-size: 22px;
          color: var(--gold);
          transition: transform 0.35s;
          min-width: 24px;
          text-align: center;
        }
        .gujarat-page .itinerary-day.open .day-toggle {
          transform: rotate(45deg);
        }
        .gujarat-page .day-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, padding 0.45s ease;
          padding: 0 30px;
        }
        .gujarat-page .itinerary-day.open .day-body {
          max-height: 600px;
          padding: 0 30px 28px;
        }
        .gujarat-page .day-items {
          list-style: none;
        }
        .gujarat-page .day-items li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(249, 115, 22, 0.08);
          font-size: 14px;
          color: var(--cream);
          line-height: 1.65;
        }
        .gujarat-page .day-items li:last-child {
          border-bottom: none;
        }
        .gujarat-page .day-items li::before {
          content: "🕉";
          font-size: 13px;
          min-width: 20px;
          margin-top: 2px;
          color: var(--saffron);
        }
        .gujarat-page .day-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .gujarat-page .btn-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--saffron);
          color: white;
          padding: 12px 24px;
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .gujarat-page .btn-book:hover {
          background: var(--saffron-light);
        }
        .gujarat-page .btn-book-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--saffron);
          padding: 12px 24px;
          border-radius: 2px;
          border: 1px solid var(--saffron);
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }
        .gujarat-page .btn-book-outline:hover {
          background: var(--saffron);
          color: white;
        }
        .gujarat-page .day-ctas .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: var(--smoke);
          border: 1px solid rgba(17, 24, 39, 0.2);
          transition: all 0.3s;
        }
        .gujarat-page .day-ctas .btn-secondary:hover {
          border-color: var(--saffron);
          color: var(--saffron);
          background: rgba(249, 115, 22, 0.05);
        }

        /* PRICING TABLE */
        .gujarat-page .mh-table-wrap {
          max-width: 900px;
          margin: 40px auto 0;
          overflow-x: auto;
        }
        .gujarat-page .mh-table {
          width: 100%;
          min-width: 480px;
          border-collapse: collapse;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .gujarat-page .mh-table th,
        .gujarat-page .mh-table td {
          padding: 14px 20px;
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          text-align: left;
          font-size: 14px;
        }
        .gujarat-page .mh-table th {
          background: rgba(232, 135, 26, 0.08);
          color: var(--gold);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .gujarat-page .mh-table td {
          color: var(--cream);
        }
        .gujarat-page .mh-table td:last-child {
          color: var(--gold);
          font-weight: 600;
        }

        /* WHY Choose US - Inverted Dark Section */
        .gujarat-page .why-section {
          background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%);
          color: #ffffff;
        }
        .gujarat-page .why-section .section-title {
          color: #ffffff;
        }
        .gujarat-page .why-section .section-body {
          color: rgba(255, 255, 255, 0.85);
        }
        .gujarat-page .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 100px auto;
          padding-top: 80px ;
        }
        .gujarat-page .why-visual {
          position: relative;
        }
        .gujarat-page .why-visual img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 4px;
        }
        .gujarat-page .why-float-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: var(--ink-mid);
          color: var(--cream);
          padding: 24px 28px;
          border-radius: 4px;
          border-left: 3px solid var(--saffron);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        .gujarat-page .why-float-card p {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-style: italic;
          color: var(--gold);
        }
        .gujarat-page .why-float-card span {
          font-size: 12px;
          color: var(--smoke);
          letter-spacing: 0.08em;
        }
        .gujarat-page .features-list {
          list-style: none;
          margin-top: 40px;
        }
        .gujarat-page .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: padding-left 0.3s;
        }
        .gujarat-page .feature-item:hover {
          padding-left: 8px;
        }
        .gujarat-page .feature-item:last-child {
          border-bottom: none;
        }
        .gujarat-page .feature-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: rgba(232, 135, 26, 0.15);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .gujarat-page .feature-text h4 {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 3px;
        }
        .gujarat-page .feature-text p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.55;
        }

        /* STEPS */
        .gujarat-page .steps-section {
          background: rgba(249, 115, 22, 0.03);
        }
        .gujarat-page .steps-header {
          text-align: center;
          margin: 100px auto;
          padding-top: 80px ;
        }
        .gujarat-page .steps-header .gold-rule {
          margin: 20px auto;
        }
        .gujarat-page .steps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1200px;
          margin: 100px auto;
          position: relative;
        }
        .gujarat-page .steps-grid::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--saffron), transparent);
        }
        .gujarat-page .step-item {
          text-align: center;
          padding: 0 10px;
        }
        .gujarat-page .step-dot {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(232, 135, 26, 0.12);
          border: 1px solid rgba(232, 135, 26, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 16px;
          position: relative;
          z-index: 1;
          transition: all 0.3s;
        }
        .gujarat-page .step-item:hover .step-dot {
          background: var(--saffron);
          border-color: var(--saffron);
          transform: scale(1.1);
        }
        .gujarat-page .step-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 6px;
        }
        .gujarat-page .step-desc {
          font-size: 12px;
          color: var(--smoke);
          line-height: 1.55;
        }

        /* GALLERY */
        .gujarat-page .gallery-strip {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          grid-template-rows: 260px 260px;
          gap: 4px;
          max-width: 1300px;
          margin: 40px auto 0;
        }
        .gujarat-page .gallery-item {
          overflow: hidden;
          position: relative;
        }
        .gujarat-page .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8) saturate(1.1);
          transition: transform 0.5s, filter 0.5s;
        }
        .gujarat-page .gallery-item:hover img {
          transform: scale(1.06);
          filter: brightness(0.9) saturate(1.3);
        }
        .gujarat-page .gallery-item:nth-child(1) {
          grid-row: span 2;
        }
        .gujarat-page .gallery-item:nth-child(5) {
          grid-column: span 2;
        }

        /* TESTIMONIAL */
        .gujarat-page .testimonial-section {
          background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 50%, var(--saffron-dark) 100%);
          text-align: center;
          padding: var(--section-pad) 5%;
        }

        .gujarat-page .testimonial-icon {
          font-size: 40px;
          margin-bottom: 20px;
          opacity: 0.6;
        }
        .gujarat-page .testimonial-text {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 400;
          font-style: italic;
          color: var(--white);
          max-width: 800px;
          margin: 0 auto 24px;
          line-height: 1.55;
        }
        .gujarat-page .testimonial-author {
          font-size: 13px;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.8);
        }
        .gujarat-page .testimonial-stars {
          font-size: 18px;
          color: var(--gold-light);
          margin-top: 12px;
          letter-spacing: 4px;
        }

        /* FAQ */
        .gujarat-page .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 100px auto;
        }
        .gujarat-page .faq-list {
          margin-top: 40px;
        }
        .gujarat-page .faq-item {
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          overflow: hidden;
        }
        .gujarat-page .faq-q {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          cursor: pointer;
          font-size: 15px;
          font-weight: 400;
          color: var(--cream);
          transition: color 0.3s;
          gap: 12px;
          text-align: left;
        }
        .gujarat-page .faq-q:hover {
          color: var(--gold);
        }
        .gujarat-page .faq-icon {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border-radius: 50%;
          border: 1px solid rgba(249, 115, 22, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--gold);
          transition: transform 0.3s;
        }
        .gujarat-page .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }
        .gujarat-page .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, padding 0.45s ease;
          font-size: 14px;
          color: var(--smoke);
          line-height: 1.8;
          padding-bottom: 0;
        }
        .gujarat-page .faq-item.open .faq-a {
          max-height: 200px;
          padding-bottom: 20px;
        }

        /* CHOOSE YOUR JOURNEY / FEATURED PACKAGES */
        .gujarat-page .featured-pkgs-section {
          background: rgba(249, 115, 22, 0.02);
        }
        .gujarat-page .featured-pkgs-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          padding-top: 80px ;
        }
        .gujarat-page .featured-pkgs-header .gold-rule {
          margin: 20px auto;
        }

        .gujarat-page .featured-grid {
          max-width: 1100px;
          margin: 0 auto;
        }
        .gujarat-page .feat-card-main {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.06);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .gujarat-page .feat-card-main:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(249, 115, 22, 0.1);
        }
        .gujarat-page .feat-card-main .feat-img {
          position: relative;
          min-height: 440px;
          overflow: hidden;
        }

        .gujarat-page .feat-card-main .feat-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.78) saturate(1.1);
          transition: transform 0.6s;
        }
        .gujarat-page .feat-card-main:hover .feat-img img {
          transform: scale(1.05);
        }
        .gujarat-page .feat-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          background: var(--saffron);
          color: white;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 2px;
          z-index: 2;
        }
        .gujarat-page .feat-body {
          padding: 40px 42px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .gujarat-page .feat-label {
          font-size: 11px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 10px;
        }
        .gujarat-page .feat-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 30px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 14px;
          line-height: 1.15;
        }
        .gujarat-page .feat-name em {
          color: var(--gold);
          font-style: italic;
        }
        .gujarat-page .feat-desc {
          font-size: 14px;
          color: var(--smoke);
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .gujarat-page .feat-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
        }
        .gujarat-page .feat-tag {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 2px;
          border: 1px solid rgba(249, 115, 22, 0.25);
          color: var(--gold);
        }
        .gujarat-page .feat-footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          margin-top: auto;
          width: 100%;
        }
        .gujarat-page .feat-price {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .gujarat-page .feat-price .from {
          font-size: 11px;
          color: var(--smoke);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .gujarat-page .feat-price .amount {
          font-family: "Cormorant Garamond", serif;
          font-size: 44px;
          color: var(--gold);
          line-height: 1.1;
          font-weight: 600;
        }
        .gujarat-page .feat-price .per {
          font-size: 13px;
          color: var(--smoke);
          margin-top: -2px;
        }
        .gujarat-page .feat-price-note {
          font-size: 11.5px;
          color: var(--smoke);
          margin-top: 10px;
          line-height: 1.6;
          max-width: 420px;
        }
        .gujarat-page .feat-ctas {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          flex-wrap: nowrap !important;
          width: 100% !important;
        }
        .gujarat-page .feat-ctas .btn-feat-call,
        .gujarat-page .feat-ctas .btn-feat-book,
        .gujarat-page .feat-ctas .btn-feat-download {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
          white-space: nowrap !important;
        }
        .gujarat-page .btn-feat-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--gold);
          padding: 15px 30px;
          border-radius: 2px;
          border: 1px solid rgba(194, 65, 12, 0.45);
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }
        .gujarat-page .btn-feat-call:hover {
          border-color: var(--gold);
          background: rgba(249, 115, 22, 0.08);
        }
        .gujarat-page .btn-feat-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--saffron);
          color: white;
          padding: 15px 30px;
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .gujarat-page .btn-feat-book:hover {
          background: var(--saffron-light);
        }
        .gujarat-page .btn-feat-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--gold);
          padding: 15px 30px;
          border-radius: 2px;
          border: 1px solid rgba(194, 65, 12, 0.45);
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }
        .gujarat-page .btn-feat-download:hover {
          border-color: var(--gold);
          background: rgba(249, 115, 22, 0.08);
        }

        @media (max-width: 900px) {
          .gujarat-page .feat-card-main {
            grid-template-columns: 1fr;
          }
          .gujarat-page .feat-card-main .feat-img {
            min-height: 260px;
            height: 260px;
          }
        }
        @media (max-width: 600px) {
          .gujarat-page .feat-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .gujarat-page .feat-body {
            padding: 30px 26px;
          }
        }

        /* OTHER PACKAGES */
        .gujarat-page .other-pkgs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 40px auto 0;
        }
        .gujarat-page .other-pkg-card {
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(249, 115, 22, 0.15);
          transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s;
          background: rgba(255, 255, 255, 0.85);
        }
        .gujarat-page .other-pkg-card:hover {
          transform: translateY(-5px);
          border-color: rgba(232, 135, 26, 0.35);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.08);
        }
        .gujarat-page .other-pkg-img {
          height: 200px;
          overflow: hidden;
        }
        .gujarat-page .other-pkg-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8);
          transition: transform 0.5s;
        }
        .gujarat-page .other-pkg-card:hover .other-pkg-img img {
          transform: scale(1.07);
        }
        .gujarat-page .other-pkg-body {
          padding: 20px 22px 22px;
        }
        .gujarat-page .other-pkg-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 6px;
        }
        .gujarat-page .other-pkg-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: var(--cream);
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .gujarat-page .other-pkg-desc {
          font-size: 13px;
          color: var(--smoke);
          line-height: 1.7;
          margin-bottom: 18px;
        }
        .gujarat-page .other-pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .gujarat-page .other-pkg-price {
          font-family: "Cormorant Garamond", serif;
        }
        .gujarat-page .other-pkg-price span {
          font-size: 22px;
          color: var(--gold);
        }
        .gujarat-page .other-pkg-price sub {
          font-size: 12px;
          color: var(--smoke);
        }
        /* CTA BANNER */
        .gujarat-page .cta-banner {
          position: relative;
          padding: var(--section-pad) 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background: #0d1b3e;
        }
        .gujarat-page .cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          
          filter: brightness(0.22) saturate(0.8);
        }
        .gujarat-page .cta-banner-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
        }
        .gujarat-page .cta-banner .section-title {
          text-align: center;
          color: #ffffff;
        }
        .gujarat-page .cta-banner .section-body {
          margin: 0 auto 40px;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
        }
        .gujarat-page .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }



        /* STICKY WA */
        .gujarat-page .sticky-wa {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 200;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
          animation: pulse-wa 3s infinite;
        }
        .gujarat-page .sticky-wa:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.7);
        }
        @keyframes pulse-wa {
          0%,
          100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          }
          50% {
            box-shadow: 0 4px 30px rgba(37, 211, 102, 0.8);
          }
        }
        .gujarat-page .sticky-wa svg {
          width: 30px;
          height: 30px;
          fill: white;
        }

        /* REVEAL PRESET */
        .gujarat-page .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .gujarat-page .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gujarat-page .reveal-delay-1 {
          transition-delay: 0.1s;
        }
        .gujarat-page .reveal-delay-2 {
          transition-delay: 0.2s;
        }
        .gujarat-page .reveal-delay-3 {
          transition-delay: 0.3s;
        }
        .gujarat-page .reveal-delay-4 {
          transition-delay: 0.4s;
        }
      
.gujarat-page .char-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 13px 24px;
          border-radius: 3px;
          border: 1px solid rgba(249, 115, 22, 0.55);
           background: var(--saffron); color: var(--white);
          color: var(--white);
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
      



        .gujarat-page .intro-visual { position: relative; min-height: 520px; padding-bottom: 30px; padding-right: 30px; box-sizing: content-box; }
        .gujarat-page .intro-img-main { display: block; width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.95) saturate(1.1); position: relative; z-index: 1; }
        .gujarat-page .intro-img-float { position: absolute; bottom: 0; right: 0; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid #ffffff; filter: brightness(0.95) saturate(1.2); z-index: 2; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .gujarat-page .intro-visual { min-height: auto; padding: 0; box-sizing: border-box; }
          .gujarat-page .intro-img-main { height: 360px; }
          .gujarat-page .intro-img-float { display: none; }
          .gujarat-page .hero-ctas,
          .gujarat-page .price-actions,
          .gujarat-page .cta-buttons,
          .gujarat-page .day-ctas,
          .gujarat-page .feat-ctas {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 10px !important;
            padding: 0 20px !important;
            box-sizing: border-box !important;
          }
          .gujarat-page .hero-ctas .btn-primary,
          .gujarat-page .hero-ctas .btn-wa,
          .gujarat-page .hero-ctas .btn-secondary,
          .gujarat-page .hero-ctas .char-btn-outline,
          .gujarat-page .price-actions .btn-book,
          .gujarat-page .price-actions .btn-book-outline,
          .gujarat-page .cta-buttons .btn-primary,
          .gujarat-page .cta-buttons .btn-wa,
          .gujarat-page .cta-buttons .btn-secondary,
          .gujarat-page .cta-buttons .char-btn-outline,
          .gujarat-page .day-ctas .btn-book,
          .gujarat-page .day-ctas .btn-book-outline,
          .gujarat-page .day-ctas .btn-secondary,
          .gujarat-page .feat-ctas .btn-feat-call,
          .gujarat-page .feat-ctas .btn-feat-book,
          .gujarat-page .feat-ctas .btn-feat-download {
            width: 100% !important;
            max-width: 420px !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .gujarat-page .intro-grid,
          .gujarat-page .why-grid,
          .gujarat-page .faq-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .gujarat-page .dhams-grid {
            grid-template-columns: 1fr;
          }
          .gujarat-page .other-pkgs-grid {
            grid-template-columns: 1fr;
          }
          .gujarat-page .steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .gujarat-page .steps-grid::before {
            display: none;
          }
          .gujarat-page .gallery-strip {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .gujarat-page .gallery-item:nth-child(1) {
            grid-row: span 1;
          }
          .gujarat-page .gallery-item:nth-child(5) {
            grid-column: span 1;
          }
          .gujarat-page .stats-strip {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .gujarat-page .stat-item {
            border-right: none;
          }

          .gujarat-page .intro-img-float {
            display: none;
          }
          .gujarat-page .why-float-card {
            position: static;
            margin-top: 16px;
          }

          /* Mobile Center Alignment for headings */
          .gujarat-page .hero-content {
            text-align: center !important;
          }
          .gujarat-page .hero-tag, .gujarat-page .hero-event-badge {
            display: flex !important; width: 100% !important; justify-content: center !important;
          }
          .gujarat-page .hero-subtitle {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .intro-grid .reveal:nth-child(2) {
            text-align: center !important;
          }
          .gujarat-page .intro-grid .section-tag {
            display: flex !important; width: 100% !important; justify-content: center !important;
          }
          .gujarat-page .intro-grid .gold-rule {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .intro-grid .section-body {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .itinerary-header {
            text-align: center !important;
          }
          .gujarat-page .itinerary-header .section-tag {
            display: flex !important; width: 100% !important; justify-content: center !important;
          }
          .gujarat-page .itinerary-header .gold-rule {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .itinerary-header .section-body {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .why-grid .reveal:first-child {
            text-align: center !important;
          }
          .gujarat-page .why-grid .section-tag {
            display: flex !important; width: 100% !important; justify-content: center !important;
          }
          .gujarat-page .why-grid .gold-rule {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .why-grid .section-body {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .features-list {
            text-align: left !important;
          }
          .gujarat-page .faq-grid .reveal:first-child {
            text-align: center !important;
          }
          .gujarat-page .faq-grid .section-tag {
            display: flex !important; width: 100% !important; justify-content: center !important;
          }
          .gujarat-page .faq-grid .gold-rule {
            margin-left: auto !important; margin-right: auto !important;
          }
          .gujarat-page .faq-grid .section-body {
            margin-left: auto !important; margin-right: auto !important;
          }
        }
      `}</style>

      {/* NAV */}
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"><Image unoptimized={true} src="/DwMain.jpeg" alt="Hero" fill priority sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag" style={{ color: "var(--saffron-light)", fontWeight: 900, fontSize: 14 }}>Sacred Gujarat Pilgrimage</div>
          <h1 className="hero-title">
            Gujarat Tour Package<br />from <em>Mumbai & Thane</em>
          </h1>
          <p className="hero-subtitle">
            Dwarka — Nageshwar Jyotirlinga — Somnath. Three of India's most sacred shrines, thoughtfully connected
            in one comfortable package. Departing from Mumbai and Thane.
          </p>
          <div className="hero-ctas">
            <a href="tel:+917208771688" className="btn-primary">
              📞 Call Now
            </a>
            <a
              href={wa("I want to enquire about Gujarat tour package")}
              className="btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a href="/Gujarat.pdf" download="Gujarat.pdf" className="char-btn-outline">Download Itinerary</a>
          </div>
        </div>
      </section>

      <div className="char-stats-wrapper mb-20">
        <CharStats />
      </div>

      {/* INTRO */}
      <section>
        <div className="intro-grid">
          <div className="intro-visual reveal">
            <img className="intro-img-main" src="/Dw1.jpeg" alt="Dwarkadhish Temple Dwarka Gujarat" />
            <img className="intro-img-float" src="/1.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-tag">Spiritual Gujarat</div>
            <h2 className="section-title">
              Gujarat Tour Package<br /><em>— Where Devotion Meets the Sea</em>
            </h2>
            <div className="gold-rule"></div>
            <p className="section-body">
              Gujarat holds some of the most significant pilgrimage sites in all of India — and this tour brings the
              most important ones together. The Gujarat tour package from Margika Yatra covers Dwarka, one of the
              four sacred dhams of Hinduism; Nageshwar Jyotirlinga, the first among the 12 Jyotirlingas of Lord Shiva;
              and Somnath, the eternal abode of the Moon God — rebuilt twelve times and standing today as a symbol of
              unbreakable faith.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              This is a well-paced 3-night, 4-day journey designed for families, couples, and senior pilgrims traveling
              from Mumbai and Thane. The route is straightforward, the temples are deeply significant, and our team
              handles every arrangement so you can focus entirely on your spiritual experience.
            </p>
            <div className="intro-quote">
              <p>
                "Gujarat is not just a state to visit — it is a sacred geography that has shaped Indian civilisation,
                faith, and devotion for thousands of years."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION HIGHLIGHTS */}
      <section className="highlights-section">
        <div className="highlights-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>
            Sacred Destinations
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Gujarat's <em>Divine Circuit</em>
          </h2>
          <div className="gold-rule" style={{ margin: "24px auto" }}></div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
            Each destination in this package carries centuries of devotion, mythology, and spiritual power.
          </p>
        </div>
        <div className="dhams-grid">
          {highlights.map((dham, index) => (
            <div className="dham-card" key={dham.name}>
              <Image unoptimized={true} src={dham.image}
                alt={dham.name}
                width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="dham-overlay">
                <div className="dham-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="dham-name">{dham.name}</div>
                <div className="dham-desc">{dham.desc}</div>
                <p className="dham-detail">{dham.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerary">
        <div className="itinerary-section">
          <div className="itinerary-header reveal">
            <div className="section-tag">Complete Itinerary</div>
            <h2 className="section-title">
              Gujarat Tour Package<br /><em>— 3 Nights, 4 Days</em>
            </h2>
            <div className="gold-rule"></div>
            <p className="section-body">
              Every day is planned with purpose — meaningful darshan, comfortable travel, and time to breathe in
              between. Here is exactly what you get.
            </p>
          </div>

          <div className="itinerary-list reveal">
            {itinerary.map((day, idx) => (
              <div className={`itinerary-day ${openDays[idx] ? "open" : ""}`} key={day.day}>
                <div className="day-header" onClick={() => toggleDay(idx)}>
                  <div className="day-num-badge">{day.day}</div>
                  <div className="day-title-wrap">
                    <div className="day-label">
                      Day {day.day} · {day.route}
                    </div>
                    <div className="day-title">{day.title}</div>
                  </div>
                  <div className="day-toggle">+</div>
                </div>
                <div className="day-body">
                  <ul className="day-items">
                    {day.points.map((pt, pidx) => (
                      <li key={pidx}>{pt}</li>
                    ))}
                  </ul>
                  <div className="day-ctas">
                    <a href="tel:+917208771688" className="btn-book">
                      📞 Call Now
                    </a>
                    <a
                      href={razorpayLink}
                      className="btn-book-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                    <a
                      href="/Gujarat.pdf"
                      download="Gujarat_Itinerary_Margika_Yatra.pdf"
                      className="btn-secondary"
                      style={{ padding: "12px 24px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      📄 Download Itinerary
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE OPTIONS & PRICING */}
      {/* <section style={{ background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 50, textAlign: "center" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Pricing & Vehicles
            </div>
            <h2 className="section-title">
              Dwarka - Somnath Yatra<br /><em>— Complete Package Pricing</em>
            </h2>
            <div className="gold-rule" style={{ margin: "20px auto" }}></div>
            <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
              We keep our pricing fully transparent. Standard package costs based on private vehicle selections and group size.
            </p>
          </div>

          <div className="mh-table-wrap reveal">
            <table className="mh-table">
              <thead>
                <tr>
                  <th>Group Size</th>
                  <th>Vehicle</th>
                  <th>Per Person Price</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx}>
                    <td>{pkg.group}</td>
                    <td>{pkg.vehicle}</td>
                    <td>{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* WHY MARGIKA */}
      <section className="why-section">
        <div className="why-grid">
          <div className="reveal">
            <div className="section-tag" style={{ color: "#ffffff", "--saffron": "#ffffff" } as React.CSSProperties}>
              Why Choose Us
            </div>
            <h2 className="section-title">
              Why Mumbai & Thane<br /><em style={{ color: "#ffffff" }}>Yatris Choose Margika</em>
            </h2>
            <div className="gold-rule" style={{ background: "#ffffff" }}></div>
            <p className="section-body" style={{ fontWeight: 700, color: "#ffffff" }}>
              We are based in Brahmand, Thane. When you call us, you speak to someone from your community who
              understands your expectations, your schedule, and the kind of service you deserve. That local trust is
              something no large national portal can offer.
            </p>
            <ul className="features-list">
              <li className="feature-item">
                <div className="feature-icon">🙏</div>
                <div className="feature-text">
                  <h4>Spiritual Tourism Specialists</h4>
                  <p style={{ color: "#ffffff" }}>
                    Not a generic tour operator. We plan exclusively for pilgrimage and spiritual travel — temples,
                    aartis, and festival timings are our expertise.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">📍</div>
                <div className="feature-text">
                  <h4>Local Office in Thane</h4>
                  <p style={{ color: "#ffffff" }}>
                    Walk in to our Brahmand, Thane office before booking. Meet us in person, ask every question. That
                    transparency builds the trust that online operators can't.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">👴</div>
                <div className="feature-text">
                  <h4>Family & Senior-Friendly</h4>
                  <p style={{ color: "#ffffff" }}>
                    We plan every timing, transport, and support around the comfort of all age groups in your family
                    with minimal commutes.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="why-visual">
              <Image unoptimized={true} src="/Dw3.jpeg"
                alt="Margika Yatra group Gujarat"
                width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="why-float-card">
                <p>"Dwarkadhish and Somnath Jyotirlinga darshans are experiences that stay with you forever."</p>
                <span>— Margika Yatra Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR JOURNEY */}
      <section className="featured-pkgs-section">
        <div className="featured-pkgs-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>
            Best Gujarat Tour Package
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Choose Your <em>Journey</em>
          </h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
            Select the Gujarat pilgrimage experience that suits you best — all packages depart from Mumbai &amp; Thane.
          </p>
        </div>
        <div className="featured-grid">
          {/* Main Featured Card */}
          <div className="feat-card-main reveal">
            <div className="feat-img">
              <Image unoptimized={true} src="/Dw1.jpeg"
                alt="Gujarat Pilgrimage Package — Dwarka Somnath Nageshwar"
                width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="feat-badge">Most Popular</div>
            </div>
            <div className="feat-body">
              <div className="feat-label">Gujarat Pilgrimage · 3N / 4D</div>
              <div className="feat-name">
                Gujarat Pilgrimage Package —<br /><em>Dwarka, Nageshwar &amp; Somnath</em>
              </div>
              <p className="feat-desc">
                Our signature Gujarat package covering three of the most important pilgrimage sites of India — Dwarkadhish Temple (Char Dham), Nageshwar Jyotirlinga (1st among 12 Jyotirlingas), and Somnath Temple (1st Jyotirlinga). Includes hotel stays, all vegetarian meals, AC transport, and expert guidance throughout.
              </p>
              <div className="feat-tags">
                <span className="feat-tag">Char Dham</span>
                <span className="feat-tag">Jyotirlinga</span>
                <span className="feat-tag">Annual Darshan</span>
                <span className="feat-tag">Sea Facing</span>
              </div>
              <div className="feat-footer">
                <div className="feat-price">
                  <span className="from">Starting from</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span className="amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹13,999</span>
                    <span className="amount">₹8,999</span>
                  </div>
                  <span className="per"> / person</span>
                  <span className="feat-price-note">Varies with travel mode, group size & hotel category. Was <span style={{ textDecoration: 'line-through' }}>₹13,999</span>. Final quote on enquiry.</span>
                </div>
                <div className="feat-ctas">
                  <a href="tel:+917208771688" className="btn-feat-call">Call Us</a>
                  <a href={razorpayLink} className="btn-feat-book" target="_blank" rel="noopener noreferrer">
                    Book Now 
                  </a>
                  <a href="/Gujarat.pdf" download="Gujarat_Itinerary.pdf" className="btn-feat-download">
                    Download Itinerary
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="steps-section">
        <div className="steps-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>
            Simple & Transparent
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            How Your <em>Yatra Begins</em>
          </h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="steps-grid">
          <div className="step-item reveal">
            <div className="step-dot">📞</div>
            <div className="step-title">Inquiry</div>
            <div className="step-desc">Call or WhatsApp us with your preferred dates and group size</div>
          </div>
          <div className="step-item reveal reveal-delay-1">
            <div className="step-dot">💬</div>
            <div className="step-title">Consultation</div>
            <div className="step-desc">We understand your group size, pacing, and senior citizen needs</div>
          </div>
          <div className="step-item reveal reveal-delay-2">
            <div className="step-dot">📋</div>
            <div className="step-title">proposal</div>
            <div className="step-desc">We share a clear itinerary with an honest per-person quote</div>
          </div>
          <div className="step-item reveal reveal-delay-3">
            <div className="step-dot">✅</div>
            <div className="step-title">Confirmation</div>
            <div className="step-desc">Secure your booking with a simple advance payment</div>
          </div>
          <div className="step-item reveal reveal-delay-4">
            <div className="step-dot">🛕</div>
            <div className="step-title">On-Tour Support</div>
            <div className="step-desc">Dedicated coordinator handles all logistics during the yatra</div>
          </div>
          <div className="step-item reveal">
            <div className="step-dot">🙌</div>
            <div className="step-title">Safe Return</div>
            <div className="step-desc">We assist with transfers and follow up for your feedback</div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      </div>{/* end gujarat-page */}

      {/* FAQ — outside gujarat-page to avoid CSS conflicts */}
      <FAQ />

      <div className="gujarat-page">{/* re-enter gujarat-page for CTA vars */}

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div style={{position: 'absolute', inset: 0, zIndex: 0}}><Image unoptimized={true} src="/rambg.jpg" alt="Banner" fill sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>
        <div className="cta-banner-content reveal">
          <h2 className="section-title" style={{ color: "var(--white)", marginBottom: 16 }}>
            Experience the Divine Land of Gujarat
          </h2>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.8)", margin: "0 auto 32px", fontWeight: "900", fontSize: "16px" }}>
            Book your sacred Dwarka, Nageshwar, and Somnath yatra batch today. Stays and transfers are fully arranged.
          </p>
          <div className="cta-buttons">
            <a href="tel:+917208771688" className="btn-primary">
              📞 Call Now to Book
            </a>
            <a
              href={wa("I want to check availability for Gujarat Dwarka Somnath tour package")}
              className="btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp to Book
            </a>
            {/* <a href="/Gujarat.pdf" download="Gujarat_Itinerary_Margika_Yatra.pdf" className="btn-secondary">
              Download Itinerary
            </a> */}
          </div>
        </div>
      </section>

      </div>{/* end gujarat-page for CTA */}

      <Footer />

      {/* STICKY WA */}
      <a
        href={wa("Hi Margika Yatra! I want to enquire about Gujarat tour package")}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 200,
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          textDecoration: "none",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "white" }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}
