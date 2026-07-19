"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { CharStats } from "@/components/char-stats"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { FAQ } from "@/components/faq"

export function RameshwaramDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeDay, setActiveDay] = useState<string>("day1")
  const [scrolled, setScrolled] = useState(false)
  const razorpayLink = "https://rzp.io/rzp/zCOhd60"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)

    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.12 }
    )

    reveals.forEach((item) => observer.observe(item))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  const faqs = [
    [
      "What is included in the Rameshwaram tour package?",
      "Your package includes hotel stays, daily breakfast and dinner (vegetarian/sattvic), private AC transport for all transfers and sightseeing, guided temple visits, Agni Theertham bath assistance, Ramanathaswamy Jyotirlinga darshan coordination, and Meenakshi Amman Temple visit."
    ],
    [
      "How many days does the Rameshwaram yatra take?",
      "Our standard Rameshwaram spiritual package is a well-paced 4-day / 3-night tour. This provides ample time for the long temple queues, the ritual bath, Dhanushkodi exploration and Madurai Meenakshi temple sightseeing."
    ],
    [
      "Do you arrange flights or trains from Mumbai?",
      "Yes, we fully coordinate return flight or train ticket bookings from Mumbai/Thane as per your preferred dates and budget. The tour itinerary is base-priced from Madurai, and travel tickets are added on actuals."
    ],
    [
      "How does the ritual bath at Rameshwaram work?",
      "Pilgrims first take a holy dip in the calm waters of Agni Theertham (sea shore). Following this, you proceed to the temple complex to bathe at the 22 sacred wells (theerthams), each containing water of different temperatures and therapeutic properties."
    ],
    [
      "Is the tour suitable for senior citizens?",
      "Yes. The temple town is flat and doesn't require high-altitude trekking. We arrange comfortable hotels, keep the travel pace relaxed, and provide dedicated coordinator support for senior citizens."
    ]
  ]

  const sights = [
    {
      name: "Ramanathaswamy Temple",
      desc: "Jyotirlinga & Char Dham",
      detail: "One of the twelve Jyotirlingas and a Char Dham shrine, famous for the longest temple corridor in India and 22 sacred wells (theerthams) where pilgrims bathe before darshan.",
      image: "/Rammain2.jpg"
    },
    {
      name: "Dhanushkodi",
      desc: "Land's End & Ram Sethu",
      detail: "The southern tip where the Bay of Bengal meets the Indian Ocean — the legendary starting point of Ram Sethu, with the haunting beauty of the old ghost town.",
      image: "/ram1.jpg"
    },
    {
      name: "Pamban Bridge",
      desc: "India's Iconic Sea Bridge",
      detail: "The famous bridge connecting Rameshwaram island to the mainland, offering breathtaking views over the blue waters — a memorable highlight of every Rameshwaram yatra.",
      image: "/ram2.jpg"
    }
  ]

  return (
    <div className="rameshwaram-page-wrapper">
      <style jsx global>{`
        .rameshwaram-page-wrapper {
          --saffron: #f97316;
          --saffron-light: #fdba74;
          --saffron-dark: #ea580c;
          --gold: #c2410c;
          --gold-light: #fdba74;
          --cream: #111827;
          --cream-warm: #fff7ed;
          --ink: #ffffff;
          --ink-mid: #fff7ed;
          --ink-light: #fed7aa;
          --smoke: #4b5563;
          --white: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
          background: linear-gradient(to bottom right, #ffffff, #fff7ed, #ffedd5);
          color: var(--cream);
          font-family: "Jost", sans-serif;
        }

        .rameshwaram-page-wrapper * { box-sizing: border-box; }

        /* NAV */
        .r-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 5%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          transition: background 0.4s;
        }
        .r-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(249, 115, 22, 0.08);
        }
        .r-nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .r-nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--gold); letter-spacing: 0.08em; }
        .r-nav-cta { display: flex; gap: 12px; align-items: center; }
        .r-btn-nav {
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 2px;
          cursor: pointer; text-decoration: none; transition: all 0.3s;
        }
        .r-btn-ghost { border: 1px solid rgba(194, 65, 12, 0.45); color: var(--gold); background: transparent; }
        .r-btn-ghost:hover { border-color: var(--gold); background: rgba(249, 115, 22, 0.08); }
        .r-btn-saffron { background: var(--saffron); color: var(--white); border: none; }
        .r-btn-saffron:hover { background: var(--saffron-light); transform: translateY(-1px); }

        /* HERO */
        .r-hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
          background: #0d1b3e;
          padding-top: 130px;
        }
        .r-hero-img {
          position: absolute; inset: 0;
          
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }
        .r-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.85) 100%);
        }
        .r-hero-content {
          position: relative; z-index: 2;
          padding: 0 5% 80px;
          max-width: 860px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .r-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron-dark); margin-bottom: 20px;
        }
        .r-hero-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--saffron); }
        .r-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6.4vw, 80px);
          font-weight: 300; line-height: 1.1;
          color: var(--white);
          margin-bottom: 14px;
        }
        .r-hero-title em { color: #f5a94e; font-style: italic; }
        .r-hero-subtitle {
          font-size: 15px; font-weight: 300; color: rgba(255, 255, 255, 0.85);
          margin-bottom: 36px; max-width: 580px; line-height: 1.7;
        }
        .r-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Global uniform button sizing */
        .rameshwaram-page-wrapper .r-btn-primary,
        .rameshwaram-page-wrapper .v-btn-primary,
        .rameshwaram-page-wrapper .r-btn-secondary,
        .rameshwaram-page-wrapper .r-btn-wa,
        .rameshwaram-page-wrapper .v-btn-wa,
        .rameshwaram-page-wrapper .v-btn-book-outline,
        .rameshwaram-page-wrapper .char-btn-outline {
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

        .rameshwaram-page-wrapper .r-hero-ctas,
        .rameshwaram-page-wrapper .r-price-actions,
        .rameshwaram-page-wrapper .v-cta-buttons {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .rameshwaram-page-wrapper .r-hero-ctas .r-btn-primary,
        .rameshwaram-page-wrapper .r-hero-ctas .r-btn-wa,
        .rameshwaram-page-wrapper .r-hero-ctas .r-btn-secondary,
        .rameshwaram-page-wrapper .r-hero-ctas .char-btn-outline,
        .rameshwaram-page-wrapper .r-price-actions .r-btn-primary,
        .rameshwaram-page-wrapper .r-price-actions .r-btn-wa,
        .rameshwaram-page-wrapper .r-price-actions .v-btn-book-outline,
        .rameshwaram-page-wrapper .r-price-actions .char-btn-outline,
        .rameshwaram-page-wrapper .v-cta-buttons .v-btn-primary,
        .rameshwaram-page-wrapper .v-cta-buttons .v-btn-wa,
        .rameshwaram-page-wrapper .v-cta-buttons .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }
        .r-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .r-btn-primary::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.15); opacity: 0; transition: opacity 0.3s; }
        .r-btn-primary:hover::after { opacity: 1; }
        .r-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .r-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 400;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s;
        }
        .r-btn-secondary:hover { border-color: var(--white); background: rgba(255, 255, 255, 0.1); color: var(--white); }
        .r-btn-wa {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #25D366; color: white;
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none; transition: all 0.3s;
        }
        .r-btn-wa:hover { background: #1EB858; transform: translateY(-2px); }

        /* STATS STRIP */
        .r-stats-strip {
          position: relative; z-index: 3;
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .r-stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .r-stat-item:last-child { border-right: none; }
        .r-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 600; color: var(--white); line-height: 1; }
        .r-stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }

        /* SECTIONS */
        .r-section { padding: clamp(60px, 8vw, 120px) 5%; }
        .r-section.alt { background: rgba(249, 115, 22, 0.03); }
        .r-section-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron); margin-bottom: 16px;
        }
        .r-section-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--saffron); }
        .r-section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 400; line-height: 1.2; color: var(--cream); margin-bottom: 16px; }
        .r-section-title em { color: var(--gold); font-style: italic; }
        .r-section-body { font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--smoke); max-width: 620px; }
        .r-gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }

        /* INTRO */
        .r-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .r-intro-visual { position: relative; }
        .r-intro-img-main { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.85) saturate(1.1); }
        .r-intro-img-float { position: absolute; bottom: -30px; right: -30px; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid var(--ink-mid); filter: brightness(0.9) saturate(1.2); }
        .r-intro-quote { margin-top: 40px; padding: 24px 28px; border-left: 2px solid var(--saffron); background: rgba(249, 115, 22, 0.05); border-radius: 0 4px 4px 0; }
        .r-intro-quote p { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--gold); line-height: 1.6; }

        /* DHAMS GRID */
        .r-dhams-header { text-align: center; max-width: 660px; margin: 0 auto 60px; }
        .r-dhams-header .v-gold-rule { margin: 24px auto; }
        .r-dhams-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto; }
        .r-dham-card { position: relative; height: 480px; overflow: hidden; cursor: default; }
        .r-dham-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.6) saturate(1.1); }
        .r-dham-card:hover img { transform: scale(1.08); filter: brightness(0.75) saturate(1.2); }
        .r-dham-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
        .r-dham-num { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 300; color: rgba(255, 255, 255, 0.25); line-height: 1; margin-bottom: 4px; transform: translateY(10px); transition: transform 0.5s, color 0.5s; }
        .r-dham-card:hover .r-dham-num { color: rgba(255, 255, 255, 0.5); transform: translateY(0); }
        .r-dham-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 500; color: #ffffff; margin-bottom: 4px; }
        .r-dham-desc { font-size: 12px; letter-spacing: 0.08em; color: var(--saffron); text-transform: uppercase; }
        .r-dham-detail { font-size: 13px; color: rgba(255, 255, 255, 0.85); margin-top: 8px; max-height: 0; overflow: hidden; transition: max-height 0.5s, opacity 0.4s; opacity: 0; line-height: 1.6; }
        .r-dham-card:hover .r-dham-detail { max-height: 150px; opacity: 1; }

        /* COMPLETE SECTION */
        .r-complete-section { background: linear-gradient(135deg, var(--saffron) 0%, #e8871a 100%); color: #ffffff; }
        .r-complete-wrap { max-width: 980px; margin: 0 auto; }
        .r-complete-head { text-align: center; margin-bottom: 36px; }
        .r-complete-head .v-section-tag { color: #ffffff; justify-content: center; margin: 0 auto 16px; }
        .r-complete-head .v-section-tag::before { background: #ffffff; }
        .r-complete-head .v-section-title { color: #ffffff; }
        .r-complete-head .v-section-title em { color: #fff5e6; }
        .r-complete-head .v-gold-rule { margin: 20px auto; background: #ffffff; }
        .r-complete-body p { color: rgba(255, 255, 255, 0.95); font-size: 15.5px; line-height: 1.9; margin-bottom: 18px; }
        .r-complete-body strong { color: #ffffff; font-weight: 600; }
        .r-complete-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 36px; }
        .r-btn-dark { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #111827; color: var(--white); padding: 15px 30px; border-radius: 2px; font-size: 13px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; }
        .r-btn-dark:hover { background: #1f2937; transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

        /* PRICING */
        .r-price-header { text-align: center; max-width: 660px; margin: 0 auto 50px; }
        .r-price-header .v-gold-rule { margin: 24px auto; }
        .r-price-card { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr 1fr; background: rgba(255,255,255,0.85); border: 1px solid rgba(249, 115, 22, 0.15); border-radius: 8px; overflow: hidden; box-shadow: 0 12px 40px rgba(249,115,22,0.06); transition: transform 0.4s, box-shadow 0.4s; }
        .r-price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 50px rgba(249,115,22,0.1); }
        .r-price-card-media { position: relative; min-height: 440px; overflow: hidden; }
        .r-price-card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.6s; }
        .r-price-card:hover .r-price-card-media img { transform: scale(1.05); }
        .r-price-badge { position: absolute; top: 18px; left: 18px; background: var(--saffron); color: var(--white); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; }
        .r-price-media-cities { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; gap: 8px; flex-wrap: wrap; }
        .r-price-media-cities span { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: var(--white); background: rgba(26,18,8,0.6); border: 1px solid rgba(212,175,106,0.4); padding: 6px 12px; border-radius: 2px; backdrop-filter: blur(4px); }
        .r-price-card-body { padding: 40px 42px; display: flex; flex-direction: column; justify-content: space-between; }
        .r-price-card-body .v-pkg-duration { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--saffron); margin-bottom: 10px; }
        .r-price-card-body .v-pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 500; color: var(--cream); margin-bottom: 14px; line-height: 1.15; }
        .r-price-card-body .v-pkg-desc { font-size: 14px; color: var(--smoke); line-height: 1.75; margin-bottom: 22px; }
        .r-price-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: auto; }
        .r-price-amount-wrap { display: flex; flex-direction: column; }
        .r-price-from { font-size: 11px; color: var(--smoke); letter-spacing: 0.06em; text-transform: uppercase; }
        .r-price-amount { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: var(--gold); line-height: 1.1; font-weight: 600; }
        .r-price-per { font-size: 13px; color: var(--smoke); margin-top: -4px; }
        .r-price-note { font-size: 11px; color: var(--smoke); margin-top: 8px; max-width: 280px; line-height: 1.5; }

        .rameshwaram-page-wrapper .v-pkg-includes { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .rameshwaram-page-wrapper .v-pkg-tag { font-size: 11px; padding: 4px 10px; border-radius: 2px; border: 1px solid rgba(249, 115, 22, 0.25); color: var(--gold); }

        .rameshwaram-page-wrapper .v-btn-book-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: var(--gold);
          padding: 16px 32px; border-radius: 2px;
          border: 1px solid rgba(194, 65, 12, 0.45);
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s;
        }
        .rameshwaram-page-wrapper .v-btn-book-outline:hover {
          border-color: var(--gold); background: rgba(249, 115, 22, 0.08);
        }

        /* ITINERARY */
        .r-itin-header { text-align: center; max-width: 660px; margin: 0 auto 60px; }
        .r-itin-header .v-gold-rule { margin: 24px auto; }
        .r-itin-timeline { max-width: 920px; margin: 0 auto; }
        .r-itin-day { display: grid; grid-template-columns: 150px 1fr; gap: 30px; padding-bottom: 50px; position: relative; }
        .r-itin-day::before { content: ''; position: absolute; left: 16px; top: 12px; bottom: -10px; width: 1px; background: linear-gradient(to bottom, var(--saffron), rgba(232,135,26,0.15)); }
        .r-itin-day:last-child { padding-bottom: 0; }
        .r-itin-day:last-child::before { display: none; }
        .r-itin-daybadge { position: relative; }
        .r-itin-dot { width: 34px; height: 34px; border-radius: 50%; background: var(--saffron); display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 600; font-size: 14px; position: relative; z-index: 2; box-shadow: 0 0 0 6px rgba(232,135,26,0.12); }
        .r-itin-daylabel { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: var(--gold); margin-top: 14px; line-height: 1.3; }

        .rameshwaram-page-wrapper .r-itin-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 6px;
          padding: 26px 28px;
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.05);
        }
        .rameshwaram-page-wrapper .r-itin-card h3 {
          color: var(--cream);
          font-size: 22px;
          margin-bottom: 12px;
        }
        .rameshwaram-page-wrapper .r-itin-list li {
          color: var(--cream);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 9px;
          position: relative;
          padding-left: 22px;
        }
        .rameshwaram-page-wrapper .r-itin-list li::before {
          content: "🕉";
          position: absolute;
          left: 0;
          color: var(--saffron);
        }
        .rameshwaram-page-wrapper .r-itin-list li strong {
          color: var(--gold);
        }

        .rameshwaram-page-wrapper .v-btn-nav {
          font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 2px;
          cursor: pointer; text-decoration: none; transition: all 0.3s;
        }
        .rameshwaram-page-wrapper .v-btn-ghost { border: 1px solid rgba(194, 65, 12, 0.45); color: var(--gold); background: transparent; }
        .rameshwaram-page-wrapper .v-btn-ghost:hover { border-color: var(--gold); background: rgba(249, 115, 22, 0.08); }
        .rameshwaram-page-wrapper .v-btn-saffron { background: var(--saffron); color: var(--white); border: none; }
        .rameshwaram-page-wrapper .v-btn-saffron:hover { background: var(--saffron-light); }

        /* WHY Choose US - Inverted Dark Section */
        .v-why-section {
          background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%) !important;
          color: #ffffff !important;
        }
        .v-why-section .v-section-title {
          color: #ffffff !important;
        }
        .v-why-section .v-section-body {
          color: #ffffff !important;
        }
        .v-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .v-why-visual {
          position: relative;
        }
        .v-why-visual img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 4px;
        }


        .char-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 13px 24px;
          border-radius: 3px;
          border: 1px solid rgba(249, 115, 22, 0.55);
          background: transparent;
          color: var(--gold);
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .v-why-float-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: var(--ink-mid) !important;
          color: var(--cream) !important;
          padding: 24px 28px;
          border-radius: 4px;
          border-left: 3px solid var(--saffron);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        .v-why-float-card p {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-style: italic;
          color: var(--gold);
        }
        .v-why-float-card span {
          font-size: 12px;
          color: var(--smoke);
          letter-spacing: 0.08em;
        }
        .v-features-list {
          list-style: none;
          margin-top: 40px;
        }
        .v-feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: padding-left 0.3s;
        }
        .v-feature-item:hover {
          padding-left: 8px;
        }
        .v-feature-item:last-child {
          border-bottom: none !important;
        }
        .v-feature-icon {
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
        .v-feature-text h4 {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff !important;
          margin-bottom: 3px;
        }
        .v-feature-text p {
          font-size: 13px;
          color: #ffffff !important;
          line-height: 1.55;
        }

        /* FAQ */
        .v-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .v-faq-list {
          margin-top: 40px;
        }
        .v-faq-item {
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          overflow: hidden;
        }
        .v-faq-q {
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
        .v-faq-q:hover {
          color: var(--gold);
        }
        .v-faq-icon {
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
        .v-faq-item.open .v-faq-icon {
          transform: rotate(45deg);
        }
        .v-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, padding 0.45s ease;
          font-size: 14px;
          color: var(--smoke);
          line-height: 1.8;
          padding-bottom: 0;
        }
        .v-faq-item.open .v-faq-a {
          max-height: 200px;
          padding-bottom: 20px;
        }

        /* V-PREFIX SHARED STYLES (used in FAQ, complete-journey, etc.) */
        .v-section-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron); margin-bottom: 16px;
        }
        .v-section-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--saffron); }
        .v-section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 400; line-height: 1.2; color: var(--cream); margin-bottom: 16px; }
        .v-section-title em { color: var(--gold); font-style: italic; }
        .v-section-body { font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--smoke); max-width: 620px; }
        .v-gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }
        .v-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .v-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .v-btn-wa {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #25D366; color: white;
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none; transition: all 0.3s;
        }
        .v-btn-wa:hover { background: #1EB858; transform: translateY(-2px); }

        /* CTA BANNER */
        .v-cta-banner {
          position: relative;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background: #0d1b3e;
     
        }
        .v-cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          
          filter: brightness(0.2) saturate(0.4);
        }
        .v-cta-banner-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
        }
        .v-cta-banner .v-section-title {
          text-align: center;
          color: #ffffff;
        }
        .v-cta-banner .v-section-body {
          margin: 0 auto 40px;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
          
          
        }
        .v-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }



        /* STICKY WA */
        .v-sticky-wa {
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
        .v-sticky-wa:hover {
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
        .v-sticky-wa svg {
          width: 30px;
          height: 30px;
          fill: white;
        }

        .r-price-actions { display: flex; gap: 12px; align-items: center; }

        .r-intro-visual { position: relative; min-height: 520px; padding-bottom: 30px; padding-right: 30px; box-sizing: content-box; }
        .r-intro-img-main { display: block; width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.95) saturate(1.1); position: relative; z-index: 1; }
        .r-intro-img-float { position: absolute; bottom: 0; right: 0; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid #ffffff; filter: brightness(0.95) saturate(1.2); z-index: 2; }

        @media (max-width: 900px) {
          .r-intro-visual { min-height: auto; padding: 0; box-sizing: border-box; }
          .r-intro-img-main { height: 360px; }
          .rameshwaram-page-wrapper .r-hero-ctas,
          .rameshwaram-page-wrapper .r-price-actions,
          .rameshwaram-page-wrapper .r-complete-ctas,
          .rameshwaram-page-wrapper .v-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .rameshwaram-page-wrapper .r-hero-ctas .r-btn-primary,
          .rameshwaram-page-wrapper .r-hero-ctas .r-btn-wa,
          .rameshwaram-page-wrapper .r-hero-ctas .r-btn-secondary,
          .rameshwaram-page-wrapper .r-hero-ctas .char-btn-outline,
          .rameshwaram-page-wrapper .r-price-actions .r-btn-primary,
          .rameshwaram-page-wrapper .r-price-actions .r-btn-wa,
          .rameshwaram-page-wrapper .r-price-actions .v-btn-book-outline,
          .rameshwaram-page-wrapper .r-price-actions .char-btn-outline,
          .rameshwaram-page-wrapper .r-complete-ctas .r-btn-dark,
          .rameshwaram-page-wrapper .v-cta-buttons .v-btn-primary,
          .rameshwaram-page-wrapper .v-cta-buttons .v-btn-wa,
          .rameshwaram-page-wrapper .v-cta-buttons .char-btn-outline {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .r-intro-grid, .v-why-grid, .v-faq-grid { grid-template-columns: 1fr; gap: 32px; }
          .r-dhams-grid { grid-template-columns: 1fr; }
          .r-price-card { grid-template-columns: 1fr; }
          .r-price-card-media { min-height: 260px; }
          .r-stats-strip { grid-template-columns: 1fr 1fr; gap: 20px; }
          .r-stat-item { border-right: none; }

          .r-intro-img-float { display: none; }
          .v-why-float-card { position: static; margin-top: 16px; max-width: none; }
          .r-itin-day { grid-template-columns: 1fr; gap: 14px; }
          .r-itin-day::before { display: none; }
          .r-nav { padding: 16px 4%; }
          .r-nav-cta .r-btn-ghost { display: none; }

          /* Mobile Center Alignment for headings */
          .rameshwaram-page-wrapper .r-hero-content { text-align: center; }
          .rameshwaram-page-wrapper .r-hero-tag { display: flex; width: 100%; justify-content: center; }
          .rameshwaram-page-wrapper .r-hero-subtitle { margin-left: auto; margin-right: auto; }
          .rameshwaram-page-wrapper .r-hero-ctas { justify-content: center; }

          .rameshwaram-page-wrapper .r-intro-grid .reveal:last-child { text-align: center; }
          .rameshwaram-page-wrapper .r-intro-grid .r-section-tag { display: flex; width: 100%; justify-content: center; }
          .rameshwaram-page-wrapper .r-intro-grid .r-gold-rule { margin-left: auto; margin-right: auto; }
          .rameshwaram-page-wrapper .r-intro-grid .r-section-body { margin-left: auto; margin-right: auto; }
          .rameshwaram-page-wrapper .r-intro-grid .r-intro-quote { text-align: center; border-left: none; border-top: 2px solid var(--saffron); border-bottom: 2px solid var(--saffron); padding: 16px 0; }

          .rameshwaram-page-wrapper .r-dhams-header,
          .rameshwaram-page-wrapper .r-price-header,
          .rameshwaram-page-wrapper .r-complete-head,
          .rameshwaram-page-wrapper .r-itin-header {
            text-align: center !important;
          }
          .rameshwaram-page-wrapper .r-dhams-header .v-gold-rule,
          .rameshwaram-page-wrapper .r-price-header .v-gold-rule,
          .rameshwaram-page-wrapper .r-complete-head .v-gold-rule,
          .rameshwaram-page-wrapper .r-itin-header .v-gold-rule {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .rameshwaram-page-wrapper .r-complete-body {
            text-align: center !important;
          }
          .rameshwaram-page-wrapper .r-complete-ctas {
            justify-content: center !important;
          }

          .rameshwaram-page-wrapper .v-why-grid .reveal:first-child { text-align: center; }
          .rameshwaram-page-wrapper .v-why-grid .v-section-tag { display: flex; width: 100%; justify-content: center; }
          .rameshwaram-page-wrapper .v-why-grid .v-gold-rule { margin-left: auto; margin-right: auto; }
          .rameshwaram-page-wrapper .v-why-grid .v-section-body { margin-left: auto; margin-right: auto; }
          .rameshwaram-page-wrapper .v-why-float-card { position: static; margin-top: 16px; max-width: none; text-align: center; border-left: none; border-top: 2px solid var(--gold); border-bottom: 2px solid var(--gold); padding: 16px 0; }
          .rameshwaram-page-wrapper .v-features-list { text-align: left; }
        }
        @media (max-width: 560px) {
          .r-price-footer { flex-direction: column; align-items: flex-start; }
          .r-price-card-body { padding: 30px 26px; }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <section className="r-hero">
        <div className="r-hero-img"><Image unoptimized={true} src="/Rammain.png" alt="Hero" fill priority sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>
        <div className="r-hero-overlay"></div>
        <div className="r-hero-content">
          {/* <div className="r-hero-tag" style={{ color: "var(--saffron-dark)", fontWeight: 900, fontSize: 14 }}>Ramanathaswamy · Dhanushkodi · Madurai</div> */}
          <h1 className="r-hero-title">Rameshwaram<br /><em>Tour Package</em></h1>
          <p className="r-hero-subtitle">A guided spiritual journey to Rameshwaram — Ramanathaswamy Jyotirlinga darshan, the holy Agni Theertham, Dhanushkodi, Pamban Bridge and Madurai's Meenakshi temple. Flights, hotels and darshan fully coordinated for travellers from Mumbai & Thane.</p>
          <div className="r-hero-ctas">
            <a href="tel:+917208771688" className="r-btn-primary">📞 Call to Book</a>
            <a href={wa("I want to enquire about the Rameshwaram tour package")} className="r-btn-wa" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
            <a href="/Rameshwaram.pdf" download="Rameshwaram.pdf" className="r-btn-primary">Download Itinerary</a>
          </div>
        </div>
      </section>

      <CharStats />

      {/* INTRO */}
      <section className="r-section">
        <div className="r-intro-grid">
          <div className="r-intro-visual reveal">
            <Image unoptimized={true} width={800} height={520} className="r-intro-img-main" src="/ram.jpg" alt="Rameshwaram Ramanathaswamy Corridor" />
            <Image unoptimized={true} width={200} height={200} className="r-intro-img-float" src="/1.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="r-section-tag">Char Dham of the South · One Sacred Island</div>
            <h2 className="r-section-title">Rameshwaram Tour Package —<br /><em>The Holy Land of Lord Ram & Shiva</em></h2>
            <div className="r-gold-rule"></div>
            <p className="r-section-body">Rameshwaram is where the Ramayana comes alive. This is the island from which Lord Ram is believed to have built the bridge to Lanka, and where he worshipped Lord Shiva — making the Ramanathaswamy Temple both one of the twelve Jyotirlingas and one of the four sacred Char Dham shrines of India.</p>
            <p className="r-section-body" style={{ marginTop: 16 }}>For travellers from Mumbai and Thane, reaching this corner of Tamil Nadu can feel daunting. Our Rameshwaram spiritual tour package removes all of that — flights or trains, hotels, AC transport and darshan timings are arranged for you, so the whole family can focus on the prayers and the sea air rather than the planning.</p>
            <div className="r-intro-quote">
              <p>"Where Lord Ram once prayed to Mahadev — we carry the arrangements, you carry the devotion."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGHTS */}
      <section className="r-section alt">
        <div className="r-dhams-header reveal">
          <div className="r-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>What You Will See</div>
          <h2 className="r-section-title">The Sacred Sights<br /><em>of Rameshwaram</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="r-section-body" style={{ margin: "0 auto", textAlign: "center" }}>From the grand temple corridors to the meeting of two seas, each stop on this Rameshwaram darshan package carries its own place in the Ramayana.</p>
        </div>
        <div className="r-dhams-grid">
          {sights.map((dham, index) => (
            <div className="r-dham-card" key={dham.name}>
              <Image unoptimized={true} quality={60} width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={dham.image} alt={dham.name} />
              <div className="r-dham-overlay">
                <div className="r-dham-num">0{index + 1}</div>
                <div className="r-dham-name">{dham.name}</div>
                <div className="r-dham-desc">{dham.desc}</div>
                <p className="r-dham-detail">{dham.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="r-section">
        <div className="r-price-header reveal">
          <div className="r-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Package & Pricing</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>Your Rameshwaram<br /><em>Yatra, Fully Sorted</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="r-section-body" style={{ margin: "0 auto", textAlign: "center" }}>One clear, well-organised Rameshwaram spiritual tour package — travel, comfortable stays, AC transport, guided darshan and full coordination from Mumbai & Thane. Transparent pricing, no hidden costs.</p>
        </div>
        <div className="r-price-card reveal">
          <div className="r-price-card-media">
            <Image unoptimized={true} src="/ram.jpg"
              alt="Rameshwaram Tour"
              width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            <div className="r-price-badge">⭐ Most Loved</div>
            <div className="r-price-media-cities"><span>RAMESHWARAM</span><span>DHANUSHKODI</span><span>MADURAI</span></div>
          </div>
          <div className="r-price-card-body">
            <div>
              <div className="v-pkg-duration">4 Days / 3 Nights · Rameshwaram + Madurai · From Mumbai / Thane</div>
              <div className="v-pkg-name">Rameshwaram Spiritual Tour Package</div>
              <p className="v-pkg-desc">The complete Rameshwaram darshan — Ramanathaswamy Jyotirlinga, Agni Theertham and the 22 holy wells, with Dhanushkodi, Pamban Bridge, Panchamukhi Hanuman, the Kalam Memorial and Madurai's Meenakshi Amman Temple. Travel, hotels, private AC transport and guided darshan all included.</p>
              <div className="v-pkg-includes">
                <span className="v-pkg-tag">Jyotirlinga Darshan</span>
                <span className="v-pkg-tag">Agni Theertham</span>
                <span className="v-pkg-tag">Dhanushkodi</span>
                <span className="v-pkg-tag">Madurai Meenakshi</span>
                <span className="v-pkg-tag">Hotel Stay</span>
                <span className="v-pkg-tag">AC Transport</span>
                <span className="v-pkg-tag">Mumbai–Thane Support</span>
              </div>
            </div>
            <div className="r-price-footer">
              <div className="r-price-amount-wrap">
                <span className="r-price-from">Starting from</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span className="r-price-amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹14,499</span>
                  <span className="r-price-amount">₹9,499</span>
                </div>
                <span className="r-price-per"> / person</span>
                <span className="r-price-note">Standard Package: ₹9,499 / person (was <span style={{ textDecoration: 'line-through' }}>₹14,499</span>). Premium Package: ₹12,499 / person (was <span style={{ textDecoration: 'line-through' }}>₹17,499</span>). Final price depends on dates, group size &amp; hotel category.</span>
              </div>
              <div className="r-price-actions">
                <a href="tel:+917208771688" className="v-btn-book-outline">Call Us</a>
                <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="r-btn-primary">Book Now </a>
                <a href="/Rameshwaram.pdf" download="Rameshwaram.pdf" className="char-btn-outline">Download Itinerary</a>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--smoke)", maxWidth: 640, margin: "28px auto 0" }}>
          Want to extend with Kanyakumari, or travel as a family group or temple sangat from Mumbai or Thane?{" "}
          <a href={wa("I want a custom quote for the Rameshwaram tour package")} style={{ color: "var(--saffron)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
            Message us for a personalised quote →
          </a>
        </p>
      </section>

      {/* THE COMPLETE JOURNEY */}
      <section className="r-section r-complete-section">
        <div className="r-complete-wrap">
          <div className="r-complete-head reveal">
            <div className="r-complete-head">
              <div className="v-section-tag" style={{ color: "#ffffff", justifyContent: "center", margin: "0 auto 16px" }}>The Complete Journey</div>
              <h2 className="v-section-title" style={{ color: "#ffffff" }}>Complete Rameshwaram<br /><em>Spiritual Tour Package</em></h2>
              <div className="v-gold-rule" style={{ margin: "20px auto", background: "#ffffff" }}></div>
            </div>
          </div>
          <div className="r-complete-body reveal reveal-delay-1">
            <p>This Rameshwaram tour package is designed as a smooth South India pilgrimage that travellers from Mumbai and Thane can join with ease, usually flying into <strong>Madurai</strong> and driving across the <strong>Pamban Bridge</strong> to the holy island. Your yatra centres on the magnificent <strong>Ramanathaswamy Temple</strong> — one of the twelve Jyotirlingas and a Char Dham shrine — where you take a sacred bath at <strong>Agni Theertham</strong> and the 22 holy wells before darshan of the Shivalinga said to have been worshipped by Lord Ram himself.</p>
            <p>Beyond the main temple, the package covers the most meaningful sites of the island. You visit <strong>Dhanushkodi</strong>, the windswept land's end where Ram Sethu began and the Bay of Bengal meets the Indian Ocean; the <strong>Panchamukhi (Five-Faced) Hanuman Temple</strong> with its floating stones; <strong>Gandhamadhana Parvatham</strong> with Lord Ram's footprint; <strong>Villondi Theertham</strong>, the freshwater spring in the sea; and the <strong>Dr. APJ Abdul Kalam Memorial</strong>. Most journeys also include darshan at the towering <strong>Meenakshi Amman Temple in Madurai</strong>, one of Tamil Nadu's most beautiful temples, making this a complete South India spiritual experience.</p>
            <p>Every departure includes return flights or trains, comfortable hotel stays near the temple, a private AC vehicle, guided darshan and a dedicated coordinator. For families and senior citizens from Mumbai and Thane, this is one of the easiest and most peaceful ways to complete the Rameshwaram yatra without any of the travel stress.</p>
            <div className="r-complete-ctas">
              <a href="tel:+917208771688" className="r-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>📞 Call Now</a>
              <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="r-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>Book Now </a>
              <a href="/Rameshwaram.pdf" download="Rameshwaram.pdf" className="r-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>Download Itinerary</a>
            </div>
          </div>
        </div>
      </section>



      {/* ITINERARY */}
      {/* <section className="r-section alt">
        <div className="r-itin-header reveal">
          <div className="r-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Day-by-Day Plan</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>Detailed Tour<br /><em>Itinerary</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="r-section-body" style={{ margin: "0 auto", textAlign: "center" }}>A sample 4-day Rameshwaram yatra with Madurai. Dates, duration and temple order can be fully customised for your group, family or temple sangat.</p>
        </div>
        <div className="r-itin-timeline">
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <button className={`v-btn-nav ${activeDay === "day1" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day1")}>Day 1</button>
            <button className={`v-btn-nav ${activeDay === "day2" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day2")}>Day 2</button>
            <button className={`v-btn-nav ${activeDay === "day3" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day3")}>Day 3</button>
            <button className={`v-btn-nav ${activeDay === "day4" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day4")}>Day 4</button>
          </div>

          <div className="reveal">
            {activeDay === "day1" && (
              <div className="r-itin-day">
                <div className="r-itin-daybadge"><div className="r-itin-dot">1</div><div className="r-itin-daylabel">Day 1<br />Mumbai → Madurai → Rameshwaram</div></div>
                <div className="r-itin-card">
                  <h3>Arrival & Journey to the Holy Island</h3>
                  <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Flight / Train · Madurai · Pamban Bridge · Hotel</div>
                  <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Departure from <strong>Mumbai</strong> by flight or train to <strong>Madurai</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Meet our representative and drive towards Rameshwaram</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Cross the iconic <strong>Pamban Bridge</strong> onto Rameshwaram island</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Hotel check-in and rest</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Evening at leisure near the temple, dinner and overnight stay</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day2" && (
              <div className="r-itin-day">
                <div className="r-itin-daybadge"><div className="r-itin-dot">2</div><div className="r-itin-daylabel">Day 2<br />Rameshwaram Temple</div></div>
                <div className="r-itin-card">
                  <h3>Agni Theertham & Ramanathaswamy Darshan</h3>
                  <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Agni Theertham · 22 Theerthams · Jyotirlinga Darshan</div>
                  <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Early morning holy bath at <strong>Agni Theertham</strong> (the sea shore)</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Bath at the <strong>22 sacred theerthams</strong> (wells) inside the temple</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Ramanathaswamy Jyotirlinga darshan</strong> & temple corridor</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Optional special pooja / abhishekam (on request)</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Visit <strong>Kodandaramaswamy Temple</strong> & nearby shrines</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day3" && (
              <div className="r-itin-day">
                <div className="r-itin-daybadge"><div className="r-itin-dot">3</div><div className="r-itin-daylabel">Day 3<br />Dhanushkodi & Island Sightseeing</div></div>
                <div className="r-itin-card">
                  <h3>Dhanushkodi, Hanuman Temple & Kalam Memorial</h3>
                  <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Dhanushkodi · Panchamukhi Hanuman · Kalam Memorial</div>
                  <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Dhanushkodi</strong> — the ghost town & Ram Sethu viewpoint</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Where the Bay of Bengal meets the Indian Ocean</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Panchamukhi (Five-Faced) Hanuman Temple</strong> & floating stones</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Gandhamadhana Parvatham</strong> — Lord Ram's footprint (Ramar Patham)</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Villondi Theertham</strong> — freshwater spring in the sea</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Dr. APJ Abdul Kalam Memorial</strong>, then back to hotel</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day4" && (
              <div className="r-itin-day">
                <div className="r-itin-daybadge"><div className="r-itin-dot">4</div><div className="r-itin-daylabel">Day 4<br />Madurai → Mumbai</div></div>
                <div className="r-itin-card">
                  <h3>Meenakshi Temple & Return</h3>
                  <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Madurai · Meenakshi Amman · Departure</div>
                  <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>After breakfast, check-out and drive to <strong>Madurai</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Meenakshi Amman Temple darshan</strong> — Madurai's grand temple</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Time permitting, brief Madurai sightseeing</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Transfer to Madurai airport / railway station</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Return flight or train to <strong>Mumbai</strong> with divine blessings</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* WHY CHOOSE MARGIKA */}
      <section className="r-section v-why-section">
        <div className="v-why-grid">
          <div className="reveal">
            <div className="v-section-tag" style={{ color: "#ffffff", "--saffron": "#ffffff" } as React.CSSProperties}>Why Choose Us</div>
            <h2 className="v-section-title">Why Mumbai & Thane<br /><em style={{ color: "#ffffff" }}>Yatris Choose Margika</em></h2>
            <div className="v-gold-rule" style={{ background: "#ffffff" }}></div>
            <p className="v-section-body" style={{ fontWeight: 700 }}>We are based in Brahmand, Thane. When you call us, you speak to a local team that understands your community, your travel concerns and your schedule — a level of trust no distant online operator can match. We specialise in spiritual journeys, so the planning is in experienced hands.</p>
            <ul className="v-features-list">
              <li className="v-feature-item"><div className="v-feature-icon">🛕</div><div className="v-feature-text"><h4>Specialists in Pilgrimage Travel</h4><p>Spiritual tourism is our focus — Char Dham, Kashi, Ayodhya, Jyotirlingas and more.</p></div></li>
              <li className="v-feature-item"><div className="v-feature-icon">📋</div><div className="v-feature-text"><h4>Personalised Planning</h4><p>Dates, pace, temple order and group size — your itinerary is shaped around you.</p></div></li>
              <li className="v-feature-item"><div className="v-feature-icon">💰</div><div className="v-feature-text"><h4>Transparent Pricing</h4><p>Clear inclusions, no hidden charges. What you are quoted is what you pay.</p></div></li>
              <li className="v-feature-item"><div className="v-feature-icon">👴</div><div className="v-feature-text"><h4>Comfortable for Seniors</h4><p>Gentle pacing, sensible rest, and extra coordinator attention for elderly travellers.</p></div></li>
              <li className="v-feature-item"><div className="v-feature-icon">📍</div><div className="v-feature-text"><h4>Local Mumbai & Thane Support</h4><p>Visit our Thane office before booking, and reach us on WhatsApp throughout your trip.</p></div></li>
            </ul>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="v-why-visual">
              <Image unoptimized={true} quality={60} width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/2.jpg" alt="Margika Yatra group" />
              <div className="v-why-float-card">
                <p>"Many yatris tell us this felt like the most peaceful journey of their lives."</p>
                <span>— Margika Yatra Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQ */}
    <FAQ/>

      {/* CTA BANNER */}
      <div className="v-cta-banner">
        <div style={{position: 'absolute', inset: 0, zIndex: 0}}><Image unoptimized={true} src="/rambg.jpg" alt="Banner" fill sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>
        <div className="v-cta-banner-content reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Plan Your Yatra with Confidence</div>
          <h2 className="v-section-title">Book Your Rameshwaram<br /><em>Tour Today</em></h2>
          <p className="v-section-body" style={{ fontWeight: "900" }}>Tell us your dates and group size, and our Mumbai–Thane team will put together a clear, personalised plan with honest pricing. No pressure — just guidance and support every step of the way.</p>
          <div className="v-cta-buttons">
            <a href="tel:+917208771688" className="v-btn-primary">📞 Call Now — +91 72087 71688</a>
            <a href={wa("I want to plan the Rameshwaram tour package")} className="v-btn-wa" target="_blank" rel="noopener noreferrer">
              WhatsApp to Plan
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* STICKY WHATSAPP */}
      <a href={wa("Hi Margika Yatra! I want to enquire about the Rameshwaram tour package")} className="v-sticky-wa" title="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}
