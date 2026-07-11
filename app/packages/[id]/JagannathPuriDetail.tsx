"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { CharStats } from "@/components/char-stats"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { FAQ } from "@/components/faq"

export function JagannathPuriDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
      "What is included in the Jagannath Puri tour package?",
      "Your package includes hotel stays, daily breakfast and dinner (vegetarian/sattvic), private AC transport for all transfers and sightseeing, guided temple visits, Jagannath temple darshan coordination, Konark Sun temple guided entry, and Bhubaneswar sightseeing."
    ],
    [
      "How many days does the Jagannath Puri trip take?",
      "Our standard Jagannath Puri package is 3 days and 2 nights, which is well-paced to cover Bhubaneswar arrival, Puri Jagannath temple, Golden Beach, Raghurajpur artist village, Konark Sun Temple, and Bhubaneswar's Lingaraj temple before departure."
    ],
    [
      "Can we book the Jagannath Puri tour package from Mumbai?",
      "Yes. Margika Yatra is based in Thane and serves travellers across Mumbai and Maharashtra. We handle the entire booking, flight or train travel coordination, hotels, private transport and guided darshan from start to finish."
    ],
    [
      "Do you arrange the Mahaprasad at Jagannath Temple?",
      "Yes. Partaking of the holy Mahaprasad (cooked in clay pots using traditional methods) is a key part of the Puri yatra. We arrange and coordinate the Mahaprasad experience for our yatra groups."
    ],
    [
      "What is the best time to visit Jagannath Puri?",
      "The best time to visit coastal Odisha is from October to March when the weather is pleasant and cool. The famous Rath Yatra occurs in June/July; it is spiritually significant but highly crowded, requiring booking months in advance."
    ]
  ]

  const sights = [
    {
      name: "Jagannath Temple",
      desc: "One of the Char Dham",
      detail: "The 12th-century abode of Lord Jagannath, Balabhadra and Subhadra, famous for its Mahaprasad, the evening flag-changing ritual and the grand Rath Yatra.",
      image: "/jag1.jpg"
    },
    {
      name: "Konark Sun Temple",
      desc: "UNESCO World Heritage",
      detail: "The 13th-century temple shaped as the Sun God's giant stone chariot, with intricately carved wheels and horses — one of India's architectural wonders.",
      image: "/jag2.jpg"
    },
    {
      name: "Lingaraj Temple",
      desc: "Ancient Shiva Shrine",
      detail: "Bhubaneswar's grandest temple, dedicated to Lord Shiva as Harihara, a masterpiece of Kalinga architecture and a deeply revered place of worship.",
      image: "/jag3.jpg"
    }
  ]

  return (
    <div className="puri-page-wrapper">
      <style jsx global>{`
        .puri-page-wrapper {
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

        .puri-page-wrapper * { box-sizing: border-box; }

        /* NAV */
        .p-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 5%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          transition: background 0.4s;
        }
        .p-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(249, 115, 22, 0.08);
        }
        .p-nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .p-nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--gold); letter-spacing: 0.08em; }
        .p-nav-cta { display: flex; gap: 12px; align-items: center; }
        .p-btn-nav {
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 2px;
          cursor: pointer; text-decoration: none; transition: all 0.3s;
        }
        .p-btn-ghost { border: 1px solid rgba(194, 65, 12, 0.45); color: var(--gold); background: transparent; }
        .p-btn-ghost:hover { border-color: var(--gold); background: rgba(249, 115, 22, 0.08); }
        .p-btn-saffron { background: var(--saffron); color: var(--white); border: none; }
        .p-btn-saffron:hover { background: var(--saffron-light); transform: translateY(-1px); }

        /* HERO */
        .p-hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
          background: url('/rambg.jpg') center/cover no-repeat;
          padding-top: 130px;
        }
        .p-hero-img {
          position: absolute; inset: 0;
          background: url('/jagmain2.png') center/cover no-repeat;
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }
        .p-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.85) 100%);
        }
        .p-hero-content {
          position: relative; z-index: 2;
          padding: 0 5% 80px;
          max-width: 860px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .p-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron); margin-bottom: 20px;
        }
        .p-hero-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--saffron); }
        .p-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6.4vw, 80px);
          font-weight: 300; line-height: 1.1;
          color: var(--white);
          margin-bottom: 14px;
        }
        .p-hero-title em { color: #f5a94e; font-style: italic; }
        .p-hero-subtitle {
          font-size: 15px; font-weight: 300; color: rgba(255, 255, 255, 0.85);
          margin-bottom: 36px; max-width: 580px; line-height: 1.7;
        }
        .p-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Global uniform button sizing */
        .puri-page-wrapper .p-btn-primary,
        .puri-page-wrapper .v-btn-primary,
        .puri-page-wrapper .p-btn-secondary,
        .puri-page-wrapper .p-btn-wa,
        .puri-page-wrapper .v-btn-wa,
        .puri-page-wrapper .v-btn-book-outline,
        .puri-page-wrapper .char-btn-outline {
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

        .puri-page-wrapper .p-hero-ctas,
        .puri-page-wrapper .v-cta-buttons {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .puri-page-wrapper .r-price-actions {
         margin-top: 15px;
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: nowrap !important;
        }
        .puri-page-wrapper .p-hero-ctas .p-btn-primary,
        .puri-page-wrapper .p-hero-ctas .p-btn-wa,
        .puri-page-wrapper .p-hero-ctas .p-btn-secondary,
        .puri-page-wrapper .p-hero-ctas .char-btn-outline,
        .puri-page-wrapper .r-price-actions .p-btn-primary,
        .puri-page-wrapper .r-price-actions .p-btn-wa,
        .puri-page-wrapper .r-price-actions .v-btn-book-outline,
        .puri-page-wrapper .r-price-actions .char-btn-outline,
        .puri-page-wrapper .v-cta-buttons .v-btn-primary,
        .puri-page-wrapper .v-cta-buttons .v-btn-wa,
        .puri-page-wrapper .v-cta-buttons .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }
        .p-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .p-btn-primary::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.15); opacity: 0; transition: opacity 0.3s; }
        .p-btn-primary:hover::after { opacity: 1; }
        .p-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .p-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 400;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s;
        }
        .p-btn-secondary:hover { border-color: var(--white); background: rgba(255, 255, 255, 0.1); color: var(--white); }
        .p-btn-wa {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #25D366; color: white;
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none; transition: all 0.3s;
        }
        .p-btn-wa:hover { background: #1EB858; transform: translateY(-2px); }

        /* STATS STRIP */
        .p-stats-strip {
          position: relative; z-index: 3;
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .p-stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .p-stat-item:last-child { border-right: none; }
        .p-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 600; color: var(--white); line-height: 1; }
        .p-stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }

        /* SECTIONS */
        .p-section { padding: clamp(60px, 8vw, 120px) 5%; }
        .p-section.alt { background: rgba(249, 115, 22, 0.03); }
        .p-section-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron); margin-bottom: 16px;
        }
        .p-section-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--saffron); }
        .p-section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 400; line-height: 1.2; color: var(--cream); margin-bottom: 16px; }
        .p-section-title em { color: var(--gold); font-style: italic; }
        .p-section-body { font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--smoke); max-width: 620px; }
        .p-gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }

        /* INTRO */
        .p-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .p-intro-visual { position: relative; }
        .p-intro-img-main { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.85) saturate(1.1); }
        .p-intro-img-float { position: absolute; bottom: -30px; right: -30px; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid var(--ink-mid); filter: brightness(0.9) saturate(1.2); }
        .p-intro-quote { margin-top: 40px; padding: 24px 28px; border-left: 2px solid var(--saffron); background: rgba(249, 115, 22, 0.05); border-radius: 0 4px 4px 0; }
        .p-intro-quote p { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--gold); line-height: 1.6; }

        /* DHAMS GRID */
        .p-dhams-header { text-align: center; max-width: 660px; margin: 0 auto 60px; }
        .p-dhams-header .v-gold-rule { margin: 24px auto; }
        .p-dhams-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto; }
        .p-dham-card { position: relative; height: 480px; overflow: hidden; cursor: default; }
        .p-dham-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.6) saturate(1.1); }
        .p-dham-card:hover img { transform: scale(1.08); filter: brightness(0.75) saturate(1.2); }
        .p-dham-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
        .p-dham-num { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 300; color: rgba(255, 255, 255, 0.25); line-height: 1; margin-bottom: 4px; transform: translateY(10px); transition: transform 0.5s, color 0.5s; }
        .p-dham-card:hover .p-dham-num { color: rgba(255, 255, 255, 0.5); transform: translateY(0); }
        .p-dham-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 500; color: #ffffff; margin-bottom: 4px; }
        .p-dham-desc { font-size: 12px; letter-spacing: 0.08em; color: var(--saffron); text-transform: uppercase; }
        .p-dham-detail { font-size: 13px; color: rgba(255, 255, 255, 0.85); margin-top: 8px; max-height: 0; overflow: hidden; transition: max-height 0.5s, opacity 0.4s; opacity: 0; line-height: 1.6; }
        .p-dham-card:hover .p-dham-detail { max-height: 150px; opacity: 1; }

        /* COMPLETE SECTION */
        .p-complete-section { background: linear-gradient(135deg, var(--saffron) 0%, #e8871a 100%); color: #ffffff; }
        .p-complete-wrap { max-width: 980px; margin: 0 auto; }
        .p-complete-head { text-align: center; margin-bottom: 36px; }
        .p-complete-head .v-section-tag { color: #ffffff; justify-content: center; margin: 0 auto 16px; }
        .p-complete-head .v-section-tag::before { background: #ffffff; }
        .p-complete-head .v-section-title { color: #ffffff; }
        .p-complete-head .v-section-title em { color: #fff5e6; }
        .p-complete-head .v-gold-rule { margin: 20px auto; background: #ffffff; }
        .p-complete-body p { color: rgba(255, 255, 255, 0.95); font-size: 15.5px; line-height: 1.9; margin-bottom: 18px; }
        .p-complete-body strong { color: #ffffff; font-weight: 600; }
        .p-complete-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 36px; }
        .p-btn-dark { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #111827; color: var(--white); padding: 15px 30px; border-radius: 2px; font-size: 13px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; }
        .p-btn-dark:hover { background: #1f2937; transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

        /* PRICING */
        .p-price-header { text-align: center; max-width: 660px; margin: 0 auto 50px; }
        .p-price-header .v-gold-rule { margin: 24px auto; }
        .p-price-card { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr 1fr; background: rgba(255,255,255,0.85); border: 1px solid rgba(249, 115, 22, 0.15); border-radius: 8px; overflow: hidden; box-shadow: 0 12px 40px rgba(249,115,22,0.06); transition: transform 0.4s, box-shadow 0.4s; }
        .p-price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 50px rgba(249,115,22,0.1); }
        .p-price-card-media { position: relative; min-height: 440px; overflow: hidden; }
        .p-price-card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.6s; }
        .p-price-card:hover .p-price-card-media img { transform: scale(1.05); }
        .p-price-badge { position: absolute; top: 18px; left: 18px; background: var(--saffron); color: var(--white); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; }
        .p-price-media-cities { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; gap: 8px; flex-wrap: wrap; }
        .p-price-media-cities span { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: var(--white); background: rgba(26,18,8,0.6); border: 1px solid rgba(212,175,106,0.4); padding: 6px 12px; border-radius: 2px; backdrop-filter: blur(4px); }
        .p-price-card-body { padding: 40px 42px; display: flex; flex-direction: column; justify-content: space-between; }
        .p-price-card-body .v-pkg-duration { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--saffron); margin-bottom: 10px; }
        .p-price-card-body .v-pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 500; color: var(--cream); margin-bottom: 14px; line-height: 1.15; }
        .p-price-card-body .v-pkg-desc { font-size: 14px; color: var(--smoke); line-height: 1.75; margin-bottom: 22px; }
        .p-price-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: auto; }

        /* Pricing includes and amount */
        .puri-page-wrapper .v-pkg-includes { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .puri-page-wrapper .v-pkg-tag { font-size: 11px; padding: 4px 10px; border-radius: 2px; border: 1px solid rgba(249, 115, 22, 0.25); color: var(--gold); }
        .r-price-amount-wrap { display: flex; flex-direction: column; }
        .r-price-from { font-size: 11px; color: var(--smoke); letter-spacing: 0.06em; text-transform: uppercase; }
        .r-price-amount { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: var(--gold); line-height: 1.1; font-weight: 600; }
        .r-price-per { font-size: 13px; color: var(--smoke); margin-top: -4px; }
        .r-price-note { font-size: 11px; color: var(--smoke); margin-top: 8px; max-width: 280px; line-height: 1.5; }
        .r-price-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }

        /* ITINERARY */
        .r-itin-header, .p-itin-header { text-align: center; max-width: 660px; margin: 0 auto 60px; }
        .r-itin-header .v-gold-rule, .p-itin-header .v-gold-rule { margin: 24px auto; }
        .r-itin-timeline, .p-itin-timeline { max-width: 920px; margin: 0 auto; }
        .r-itin-day, .p-itin-day { display: grid; grid-template-columns: 150px 1fr; gap: 30px; padding-bottom: 50px; position: relative; }
        .r-itin-day::before, .p-itin-day::before { content: ''; position: absolute; left: 16px; top: 12px; bottom: -10px; width: 1px; background: linear-gradient(to bottom, var(--saffron), rgba(232,135,26,0.15)); }
        .r-itin-day:last-child, .p-itin-day:last-child { padding-bottom: 0; }
        .r-itin-day:last-child::before, .p-itin-day:last-child::before { display: none; }
        .r-itin-daybadge, .p-itin-daybadge { position: relative; }
        .r-itin-dot, .p-itin-dot { width: 34px; height: 34px; border-radius: 50%; background: var(--saffron); display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 600; font-size: 14px; position: relative; z-index: 2; box-shadow: 0 0 0 6px rgba(232,135,26,0.12); }
        .r-itin-daylabel, .p-itin-daylabel { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: var(--gold); margin-top: 14px; line-height: 1.3; }

        .puri-page-wrapper .r-itin-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 6px;
          padding: 26px 28px;
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.05);
        }
        .puri-page-wrapper .r-itin-card h3 {
          color: var(--cream);
          font-size: 22px;
          margin-bottom: 12px;
        }
        .puri-page-wrapper .r-itin-list {
          list-style: none;
          padding: 0;
        }
        .puri-page-wrapper .r-itin-list li {
          position: relative;
          padding-left: 22px;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 9px;
          color: var(--cream);
        }
        .puri-page-wrapper .r-itin-list li::before {
          content: "🕉";
          position: absolute;
          left: 0;
          color: var(--saffron);
        }
        .puri-page-wrapper .r-itin-list li strong {
          color: var(--gold);
        }
        .puri-page-wrapper .r-itin-route {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 16px;
        }

        .puri-page-wrapper .v-btn-nav {
          font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 2px;
          cursor: pointer; text-decoration: none; transition: all 0.3s;
        }
        .puri-page-wrapper .v-btn-ghost { border: 1px solid rgba(194, 65, 12, 0.45); color: var(--gold); background: transparent; }
        .puri-page-wrapper .v-btn-ghost:hover { border-color: var(--gold); background: rgba(249, 115, 22, 0.08); }
        .puri-page-wrapper .v-btn-saffron { background: var(--saffron); color: var(--white); border: none; }
        .puri-page-wrapper .v-btn-saffron:hover { background: var(--saffron-light); }

        .puri-page-wrapper .v-btn-book-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: var(--gold);
          padding: 16px 32px; border-radius: 2px;
          border: 1px solid rgba(194, 65, 12, 0.45);
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s;
        }
        .puri-page-wrapper .v-btn-book-outline:hover {
          border-color: var(--gold); background: rgba(249, 115, 22, 0.08);
        }

        /* WHY CHOOSE - Dark Section */
        .v-why-section, .p-why-section {
          background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%) !important;
          color: #ffffff !important;
        }
        .v-why-section .v-section-title, .p-why-section .p-section-title {
          color: #ffffff !important;
        }
        .v-why-section .v-section-body, .p-why-section .p-section-body {
          color: #ffffff !important;
        }
        .v-why-grid, .p-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .v-why-visual, .p-why-visual {
          position: relative;
        }
        .v-why-visual img, .p-why-visual img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 4px;
        }
        .v-why-float-card, .p-why-float-card {
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
        .v-why-float-card p, .p-why-float-card p {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-style: italic;
          color: var(--gold);
        }
        .v-why-float-card span, .p-why-float-card span {
          font-size: 12px;
          color: var(--smoke);
          letter-spacing: 0.08em;
        }
        .v-features-list, .p-features-list {
          list-style: none;
          margin-top: 40px;
        }
        .v-feature-item, .p-feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: padding-left 0.3s;
        }
        .v-feature-item:hover, .p-feature-item:hover {
          padding-left: 8px;
        }
        .v-feature-item:last-child, .p-feature-item:last-child {
          border-bottom: none !important;
        }
        .v-feature-icon, .p-feature-icon {
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
        .v-feature-text h4, .p-feature-text h4 {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff !important;
          margin-bottom: 3px;
        }
         .v-feature-text p, .p-feature-text p {
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

        /* CTA BANNER */
        .v-cta-banner {
          position: relative;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background: url('/rambg.jpg') center/cover no-repeat;
        }
        .v-cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Jagannath_temple%2C_Puri.jpg/1280px-Jagannath_temple%2C_Puri.jpg")
            center/cover no-repeat;
          filter: brightness(0.22) saturate(0.8);
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

        .v-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s;
        }
        .v-btn-primary:hover {
          background: var(--saffron-light); transform: translateY(-2px);
        }
        .v-btn-wa {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #25D366; color: white;
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none; transition: all 0.3s;
        }
        .v-btn-wa:hover { background: #1EB858; transform: translateY(-2px); }

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

        /* V-PREFIX SHARED STYLES (FAQ, complete-journey, etc.) */
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

        /* FAQ */
        .v-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1200px; margin: 0 auto; }
        .v-faq-list { margin-top: 12px; }
        .v-faq-item { border-bottom: 1px solid rgba(249, 115, 22, 0.15); overflow: hidden; }
        .v-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15px; font-weight: 400; color: var(--cream); transition: color 0.3s; gap: 12px; border: none; background: transparent; width: 100%; text-align: left; }
        .v-faq-q:hover { color: var(--gold); }
        .v-faq-icon { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; border: 1px solid rgba(249, 115, 22, 0.3); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--gold); transition: transform 0.3s; }
        .v-faq-item.open .v-faq-icon { transform: rotate(45deg); }
        .v-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; font-size: 14px; color: var(--smoke); line-height: 1.75; padding-bottom: 0; }
        .v-faq-item.open .v-faq-a { max-height: 200px; padding-bottom: 20px; }

        @media (max-width: 900px) {
          .puri-page-wrapper .p-hero-ctas,
          .puri-page-wrapper .r-price-actions,
          .puri-page-wrapper .p-complete-ctas,
          .puri-page-wrapper .v-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .puri-page-wrapper .p-hero-ctas .p-btn-primary,
          .puri-page-wrapper .p-hero-ctas .p-btn-wa,
          .puri-page-wrapper .p-hero-ctas .p-btn-secondary,
          .puri-page-wrapper .p-hero-ctas .char-btn-outline,
          .puri-page-wrapper .r-price-actions .p-btn-primary,
          .puri-page-wrapper .r-price-actions .p-btn-wa,
          .puri-page-wrapper .r-price-actions .v-btn-book-outline,
          .puri-page-wrapper .r-price-actions .char-btn-outline,
          .puri-page-wrapper .p-complete-ctas .p-btn-dark,
          .puri-page-wrapper .v-cta-buttons .v-btn-primary,
          .puri-page-wrapper .v-cta-buttons .v-btn-wa,
          .puri-page-wrapper .v-cta-buttons .char-btn-outline {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .p-intro-grid, .v-why-grid, .p-why-grid, .v-faq-grid { grid-template-columns: 1fr; }
          .p-dhams-grid { grid-template-columns: 1fr; }
          .p-price-card { grid-template-columns: 1fr; }
          .p-price-card-media { min-height: 260px; }
          .p-stats-strip { grid-template-columns: 1fr 1fr; gap: 20px; }
          .p-stat-item { border-right: none; }
          .p-intro-img-float { display: none; }
          .v-why-float-card, .p-why-float-card { position: static; margin-top: 16px; max-width: none; }
          .r-itin-day, .p-itin-day { grid-template-columns: 1fr; gap: 14px; }
          .r-itin-day::before, .p-itin-day::before { display: none; }
          .p-nav { padding: 16px 4%; }
          .p-nav-cta .p-btn-ghost { display: none; }

          /* Mobile Center Alignment for headings */
          .puri-page-wrapper .p-hero-content { text-align: center; }
          .puri-page-wrapper .p-hero-tag { display: flex; width: 100%; justify-content: center; }
          .puri-page-wrapper .p-hero-subtitle { margin-left: auto; margin-right: auto; }
          .puri-page-wrapper .p-hero-ctas { justify-content: center; }

          .puri-page-wrapper .p-intro-grid .reveal:last-child { text-align: center; }
          .puri-page-wrapper .p-intro-grid .p-section-tag { display: flex; width: 100%; justify-content: center; }
          .puri-page-wrapper .p-intro-grid .p-gold-rule { margin-left: auto; margin-right: auto; }
          .puri-page-wrapper .p-intro-grid .p-section-body { margin-left: auto; margin-right: auto; }
          .puri-page-wrapper .p-intro-grid .p-intro-quote { text-align: center; border-left: none; border-top: 2px solid var(--saffron); border-bottom: 2px solid var(--saffron); padding: 16px 0; }

          .puri-page-wrapper .p-dhams-header,
          .puri-page-wrapper .p-price-header,
          .puri-page-wrapper .p-complete-head,
          .puri-page-wrapper .r-itin-header {
            text-align: center !important;
          }
          .puri-page-wrapper .p-dhams-header .v-gold-rule,
          .puri-page-wrapper .p-price-header .v-gold-rule,
          .puri-page-wrapper .p-complete-head .v-gold-rule,
          .puri-page-wrapper .r-itin-header .v-gold-rule {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .puri-page-wrapper .p-complete-body {
            text-align: center !important;
          }
          .puri-page-wrapper .p-complete-ctas {
            justify-content: center !important;
          }

          .puri-page-wrapper .v-why-grid .reveal:first-child,
          .puri-page-wrapper .p-why-grid .reveal:first-child {
            text-align: center;
          }
          .puri-page-wrapper .v-why-grid .v-section-tag,
          .puri-page-wrapper .p-why-grid .v-section-tag {
            display: flex; width: 100%; justify-content: center;
          }
          .puri-page-wrapper .v-why-grid .v-gold-rule,
          .puri-page-wrapper .p-why-grid .v-gold-rule {
            margin-left: auto; margin-right: auto;
          }
          .puri-page-wrapper .v-why-grid .v-section-body,
          .puri-page-wrapper .p-why-grid .v-section-body {
            margin-left: auto; margin-right: auto;
          }
          .puri-page-wrapper .v-why-float-card,
          .puri-page-wrapper .p-why-float-card {
            position: static; margin-top: 16px; max-width: none; text-align: center; border-left: none; border-top: 2px solid var(--gold); border-bottom: 2px solid var(--gold); padding: 16px 0;
          }
          .puri-page-wrapper .v-features-list,
          .puri-page-wrapper .p-features-list {
            text-align: left;
          }

          .puri-page-wrapper .r-itin-daybadge {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 560px) {
          .p-price-footer { flex-direction: column; align-items: flex-start; }
          .p-price-card-body { padding: 30px 26px; }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <section className="p-hero">
        <div className="p-hero-img"></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="p-hero-tag" style={{ color: "var(--saffron-dark)", fontWeight: 900, fontSize: 14 }}>Jagannath Puri · Konark · Lingaraj</div>
          <h1 className="p-hero-title">Jagannath Puri<br /><em>Tour Package</em></h1>
          <p className="p-hero-subtitle">A guided spiritual journey to Puri — Jagannath temple darshan, the Konark Sun Temple, Lingaraj, Vimala Shaktipeeth and the Golden Beach. Flights, hotels and darshan fully coordinated for travellers from Mumbai & Thane.</p>
          <div className="p-hero-ctas">
            <a href="tel:+917208771688" className="p-btn-primary">📞 Call to Book</a>
            <a href={wa("I want to enquire about the Jagannath Puri tour package")} className="p-btn-wa" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
            <a href="/Gujarat.pdf" download="Gujarat.pdf" className="p-btn-primary">Download Itinerary</a>
          </div>
        </div>
      </section>

      <CharStats />

      {/* INTRO */}
      <section className="p-section">
        <div className="p-intro-grid">
          <div className="p-intro-visual reveal">
            <img
              className="p-intro-img-main"
              src="/jagmain2.png"
              alt="Jagannath Temple Puri"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <img className="p-intro-img-float" src="/1.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="p-section-tag">Char Dham of the East · Land of Lord Jagannath</div>
            <h2 className="p-section-title">Jagannath Puri Tour Package —<br /><em>The Abode of Lord Jagannath</em></h2>
            <div className="p-gold-rule"></div>
            <p className="p-section-body">Puri is one of the four sacred Char Dham shrines of India, home to the magnificent Jagannath Temple where Lord Jagannath is worshipped with his elder brother Balabhadra and sister Subhadra. This Jagannath Puri tour package brings together the grand temple darshan, the famous Mahaprasad, the UNESCO-listed Konark Sun Temple and the ancient Lingaraj Temple in Bhubaneswar.</p>
            <p className="p-section-body" style={{ marginTop: 16 }}>For travellers from Mumbai and Thane, reaching coastal Odisha can feel like a long haul to plan. Our Puri travel package takes care of everything — flights or trains, hotels, AC transport and darshan timings — so the whole family can focus on the devotion and the sea breeze rather than the logistics.</p>
            <div className="p-intro-quote">
              <p>"Where the Lord of the Universe resides — we handle the journey, you carry the devotion."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGHTS */}
      <section className="p-section alt">
        <div className="p-dhams-header reveal">
          <div className="p-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>What You Will See</div>
          <h2 className="p-section-title">The Sacred Sights<br /><em>of Your Puri Yatra</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="p-section-body" style={{ margin: "0 auto", textAlign: "center" }}>From the towering Jagannath temple to the sun-chariot of Konark, each stop on this Puri sightseeing package carries centuries of devotion and heritage.</p>
        </div>
        <div className="p-dhams-grid">
          {sights.map((dham, index) => (
            <div className="p-dham-card" key={dham.name}>
              <img src={dham.image} alt={dham.name} />
              <div className="p-dham-overlay">
                <div className="p-dham-num">0{index + 1}</div>
                <div className="p-dham-name">{dham.name}</div>
                <div className="p-dham-desc">{dham.desc}</div>
                <p className="p-dham-detail">{dham.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE COMPLETE JOURNEY */}
      <section className="p-section p-complete-section">
        <div className="p-complete-wrap">
          <div className="p-complete-head reveal">
            <div className="p-complete-head">
              <div className="v-section-tag" style={{ color: "#ffffff", justifyContent: "center", margin: "0 auto 16px" }}>The Complete Journey</div>
              <h2 className="v-section-title" style={{ color: "#ffffff" }}>Complete Jagannath Puri<br /><em>Tour Package</em></h2>
              <div className="v-gold-rule" style={{ margin: "20px auto", background: "#ffffff" }}></div>
            </div>
          </div>
          <div className="p-complete-body reveal reveal-delay-1">
            <p>This Jagannath Puri tour package is designed as a smooth Odisha pilgrimage that travellers from Mumbai and Thane can join with ease, flying or taking the train into <strong>Bhubaneswar</strong> and driving down to the holy coastal town of Puri. The heart of the journey is darshan at the <strong>Jagannath Temple</strong> — one of the four sacred Char Dhams — where you seek the blessings of Lord Jagannath and partake of the famous <strong>Mahaprasad</strong>, the temple's sacred offering.</p>
            <p>Along the way the package covers the most meaningful sights of the region. You visit the <strong>Vimala Shaktipeeth</strong> within the temple complex; the artists' village of <strong>Raghurajpur</strong>, famous for its Pattachitra paintings; the <strong>Sakshi Gopal Temple</strong> and the <strong>Gundicha Temple</strong>; the serene <strong>Golden Beach</strong> at sunset; and the spectacular <strong>Konark Sun Temple</strong>, a UNESCO World Heritage Site carved as the Sun God's chariot. The yatra is rounded off in Bhubaneswar with darshan at the ancient <strong>Lingaraj Temple</strong> and a visit to the <strong>Odisha State Museum</strong>, giving you a complete blend of devotion, heritage and coastal calm.</p>
            <p>Every departure includes return travel coordination, comfortable hotel stays, a private AC vehicle, guided darshan and a dedicated coordinator. For families and senior citizens from Mumbai and Thane, this is one of the easiest and most peaceful ways to complete the Jagannath Puri yatra without any travel stress.</p>
            <div className="p-complete-ctas">
              <a href="tel:+917208771688" className="p-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>📞 Call Now</a>
              <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="p-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>Book Now </a>
              <a href="/Gujarat.pdf" download="Gujarat.pdf" className="p-btn-dark" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>Download Itinerary</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="p-section">
        <div className="p-price-header reveal">
          <div className="p-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Package & Pricing</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>Your Jagannath Puri<br /><em>Yatra, Fully Sorted</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="p-section-body" style={{ margin: "0 auto", textAlign: "center" }}>One clear, well-organised Jagannath Puri tour package — travel, comfortable stays, AC transport, guided darshan and full coordination from Mumbai & Thane. Transparent pricing, no hidden costs.</p>
        </div>
        <div className="p-price-card reveal">
          <div className="p-price-card-media">
            <img
              src="/JagM.jpeg"
              alt="Konark Sun Temple"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="p-price-badge">⭐ Most Loved</div>
            <div className="p-price-media-cities"><span>PURI</span><span>KONARK</span><span>BHUBANESWAR</span></div>
          </div>
          <div className="p-price-card-body">
            <div>
              <div className="v-pkg-duration">3 Days / 2 Nights · Puri + Konark + Bhubaneswar · From Mumbai / Thane</div>
              <div className="v-pkg-name">Jagannath Puri Tour Package</div>
              <p className="v-pkg-desc">The complete Puri darshan — Jagannath Temple and Mahaprasad, Vimala Shaktipeeth, the Konark Sun Temple, Lingaraj Temple, Raghurajpur, Gundicha Temple and the Golden Beach. Travel, hotels, private AC transport and guided darshan all included.</p>
              <div className="v-pkg-includes">
                <span className="v-pkg-tag">Jagannath Darshan</span>
                <span className="v-pkg-tag">Konark Sun Temple</span>
                <span className="v-pkg-tag">Lingaraj Temple</span>
                <span className="v-pkg-tag">Vimala Shaktipeeth</span>
                <span className="v-pkg-tag">Golden Beach</span>
                <span className="v-pkg-tag">AC Transport</span>
                <span className="v-pkg-tag">Mumbai–Thane Support</span>
              </div>
            </div>
            <div className="r-price-footer">
              <div className="r-price-amount-wrap">
                <span className="r-price-from">Starting from</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span className="r-price-amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹17,999</span>
                  <span className="r-price-amount">₹12,999</span>
                </div>
                <span className="r-price-per"> / person</span>
                <span className="r-price-note">Varies with travel mode, group size & hotel category. Was <span style={{ textDecoration: 'line-through' }}>₹17,999</span>. Final quote on enquiry.</span>
              </div>
              <div className="r-price-actions">
                <a href="tel:+917208771688" className="v-btn-book-outline">Call Us</a>
                <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="p-btn-primary">Book Now </a>
                <a href="/Gujarat.pdf" download="Gujarat.pdf" className="char-btn-outline">Download Itinerary</a>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--smoke)", maxWidth: 640, margin: "28px auto 0" }}>
          Want to add Chilika Lake, or travel as a family group or temple sangha from Mumbai or Thane?{" "}
          <a href={wa("I want a custom quote for the Jagannath Puri tour package")} style={{ color: "var(--saffron)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
            Message us for a personalised quote →
          </a>
        </p>
      </section>

      {/* ITINERARY */}
      <section className="p-section alt">
        <div className="r-itin-header reveal">
          <div className="p-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Day-by-Day Plan</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>Detailed Tour<br /><em>Itinerary</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
          <p className="p-section-body" style={{ margin: "0 auto", textAlign: "center" }}>A clear 3-day Jagannath Puri yatra covering Puri, Konark and Bhubaneswar. Dates, duration and temple order can be fully customised for your group or family.</p>
        </div>
        <div className="r-itin-timeline">
          <div className="reveal">
            <div className="r-itin-day">
              <div className="r-itin-daybadge"><div className="r-itin-dot">1</div><div className="r-itin-daylabel">Day 1<br />Bhubaneswar → Puri</div></div>
              <div className="r-itin-card">
                <h3>Arrival, Puri Sightseeing & Golden Beach</h3>
                <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Pickup · Raghurajpur · Sakshi Gopal · Gundicha · Golden Beach</div>
                <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                  <li><strong>Pickup from Bhubaneswar</strong> airport / railway station</li>
                  <li>Lunch and drive towards <strong>Puri</strong></li>
                  <li>Sightseeing — <strong>Raghurajpur Artist Village</strong>, <strong>Sakshi Gopal Temple</strong> & <strong>Gundicha Temple</strong></li>
                  <li>Hotel check-in</li>
                  <li>Relax at the <strong>Golden Beach</strong> in the evening</li>
                </ul>
              </div>
            </div>

            <div className="r-itin-day">
              <div className="r-itin-daybadge"><div className="r-itin-dot">2</div><div className="r-itin-daylabel">Day 2<br />Puri → Konark → Bhubaneswar</div></div>
              <div className="r-itin-card">
                <h3>Jagannath Darshan & the Konark Sun Temple</h3>
                <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Jagannath Darshan · Vimala Shaktipeeth · Konark</div>
                <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                  <li>Morning <strong>Jagannath Puri Temple darshan</strong></li>
                  <li><strong>Vimala Shaktipeeth</strong> & local temples within the complex</li>
                  <li>Breakfast, then check-out</li>
                  <li>Drive to the <strong>Konark Sun Temple</strong>, explore the site</li>
                  <li>Drive to <strong>Bhubaneswar</strong>, hotel check-in & rest</li>
                </ul>
              </div>
            </div>

            <div className="r-itin-day">
              <div className="r-itin-daybadge"><div className="r-itin-dot">3</div><div className="r-itin-daylabel">Day 3<br />Bhubaneswar → Departure</div></div>
              <div className="r-itin-card">
                <h3>Lingaraj Darshan & Departure</h3>
                <div className="r-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Lingaraj Temple · Museum · Drop</div>
                <ul className="r-itin-list" style={{ listStyle: "none", padding: 0 }}>
                  <li>Early morning <strong>Lingaraj Temple darshan</strong></li>
                  <li>Visit the <strong>Odisha State Museum</strong></li>
                  <li>Breakfast, check-out and <strong>drop to Bhubaneswar airport / railway station</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MARGIKA */}
      <section className="p-section v-why-section">
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
              <img src="/2.jpg" alt="Margika Yatra group" />
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
        <div className="v-cta-banner-content reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Plan Your Yatra with Confidence</div>
          <h2 className="v-section-title">Book Your Jagannath Puri<br /><em>Tour Today</em></h2>
          <p className="v-section-body" style={{ fontWeight: "900" }}>Tell us your dates and group size, and our Mumbai–Thane team will put together a clear, personalised plan with honest pricing. No pressure — just guidance and support every step of the way.</p>
          <div className="v-cta-buttons">
            <a href="tel:+917208771688" className="v-btn-primary">📞 Call Now — +91 72087 71688</a>
            <a href={wa("I want to plan the Jagannath Puri tour package")} className="v-btn-wa" target="_blank" rel="noopener noreferrer">
              WhatsApp to Plan
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* STICKY WHATSAPP */}
      <a href={wa("Hi Margika Yatra! I want to enquire about the Jagannath Puri tour package")} className="v-sticky-wa" title="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}