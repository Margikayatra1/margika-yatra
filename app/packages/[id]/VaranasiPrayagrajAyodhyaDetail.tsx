"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"

export function VaranasiPrayagrajAyodhyaDetail() {
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
      "What is included in the Varanasi Prayagraj Ayodhya tour package?",
      "Your package includes hotel stays, daily breakfast and dinner (vegetarian/sattvic), private AC transport for all transfers and sightseeing, guided temple visits, a Ganga boat ride in Varanasi, VIP darshan assistance at Kashi Vishwanath and Shri Ram Mandir, and full coordination from our Mumbai and Thane team.",
    ],
    [
      "How many days does the Varanasi Prayagraj Ayodhya trip take?",
      "The full itinerary covers Varanasi, Prayagraj and Ayodhya in a comfortable multi-day plan. Many travellers prefer this slightly longer route so each city gets proper time. We also offer shorter and longer versions depending on your dates and how relaxed you want the pace to be.",
    ],
    [
      "Can we book this Varanasi Ayodhya tour package from Mumbai?",
      "Yes. Margika Yatra is based in Thane and serves travellers across Mumbai and Maharashtra. We handle your booking, train or flight guidance, hotels, transport and darshan from start to finish, and you can call us or visit our Thane office before you travel.",
    ],
    [
      "Do you arrange VIP darshan at Ram Mandir and Kashi Vishwanath?",
      "Yes, we provide VIP darshan assistance at Shri Ram Mandir and Kashi Vishwanath. Because these passes depend on temple rules and availability, we recommend booking at least 15 days in advance so we can arrange everything smoothly for your group.",
    ],
    [
      "What is the best time to visit Varanasi, Prayagraj and Ayodhya?",
      "October to March offers the most pleasant weather for all three cities, with cool mornings ideal for the Ganga Aarti and boat ride. Festival times like Dev Deepawali in Varanasi and Ram Navami in Ayodhya are spiritually special but very crowded, so early booking is essential.",
    ],
    [
      "Is this pilgrimage suitable for senior citizens and families?",
      "Absolutely. We plan a gentle pace, sensible rest, comfortable hotels and extra coordinator attention for elderly travellers. Families with children are equally welcome — the itinerary can be adjusted so darshan and travel never feel rushed for anyone in the group.",
    ],
    [
      "Are the meals vegetarian during the tour?",
      "Yes. Daily breakfast and dinner are pure vegetarian and sattvic, in keeping with the spirit of a pilgrimage. If anyone in your group has specific dietary needs, let us know in advance and we will do our best to arrange suitable options.",
    ],
    [
      "Can the itinerary be customised for our group?",
      "Yes. The temple order, hotel category, travel dates and number of days can all be tailored to your group size and preferences. Whether it is a family, a friends' group or a temple sangat from Mumbai or Thane, we build the plan around you.",
    ],
  ]

  const cities = [
    {
      name: "Varanasi (Kashi)",
      desc: "City of Lord Shiva",
      detail:
        "Home to the Kashi Vishwanath Jyotirlinga, the grand Ganga Aarti at Dashashwamedh Ghat, and a sunrise boat ride past the 84 ghats. The spiritual heart of the journey.",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=700&q=80",
    },
    {
      name: "Prayagraj",
      desc: "The Triveni Sangam",
      detail:
        "The sacred meeting of the Ganga, Yamuna and the unseen Saraswati. A holy Sangam Snan, Alopi Mata Shaktipeeth and Bade Hanumanji darshan await here.",
      image: "/Ayo1.png",
    },
    {
      name: "Ayodhya",
      desc: "Birthplace of Lord Ram",
      detail:
        "The grand Shri Ram Janmabhoomi Mandir, Hanuman Garhi, Kanak Bhavan and the evening Saryu Aarti — a fitting and emotional close to your yatra.",
      image: "/Ayo2.png",
    },
  ]

  return (
    <div className="varanasi-page-wrapper">
      <style jsx global>{`
        .varanasi-page-wrapper {
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

        .varanasi-page-wrapper * { box-sizing: border-box; }

        /* NAV */
        .v-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 5%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          transition: background 0.4s;
        }
        .v-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(249, 115, 22, 0.08);
        }
        .v-nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .v-nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--gold); letter-spacing: 0.08em; }
        .v-nav-cta { display: flex; gap: 12px; align-items: center; }
        .v-btn-nav {
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 2px;
          cursor: pointer; text-decoration: none; transition: all 0.3s;
        }
        .v-btn-ghost { border: 1px solid rgba(194, 65, 12, 0.45); color: var(--gold); background: transparent; }
        .v-btn-ghost:hover { border-color: var(--gold); background: rgba(249, 115, 22, 0.08); }
        .v-btn-saffron { background: var(--saffron); color: var(--white); border: none; }
        .v-btn-saffron:hover { background: var(--saffron-light); transform: translateY(-1px); }

        /* HERO */
        .v-hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
          background: url('/rambg.jpg') center/cover no-repeat;
          padding-top: 130px;
        }
        .v-hero-img {
          position: absolute; inset: 0;
          background: url('/Ayomain.png') center/cover no-repeat;
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }
        .v-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.65) 65%, rgba(0, 0, 0, 0.9) 100%);
        }
        .v-hero-content {
          position: relative; z-index: 2;
          padding: 0 5% 80px;
          max-width: 860px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .v-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--saffron-light); margin-bottom: 20px;
        }
        .v-hero-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--saffron-light); }
        .v-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6.4vw, 80px);
          font-weight: 300; line-height: 1.1;
          color: var(--white);
          margin-bottom: 14px;
        }
        .v-hero-title em { color: #f5a94e; font-style: italic; }
        .v-hero-subtitle {
          font-size: 15px; font-weight: 300; color: rgba(255, 255, 255, 0.85);
          margin-bottom: 36px; max-width: 560px; line-height: 1.7;
        }
        .v-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .v-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .v-btn-primary::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.15); opacity: 0; transition: opacity 0.3s; }
        .v-btn-primary:hover::after { opacity: 1; }
        .v-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .v-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 400;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s;
        }
        .v-btn-secondary:hover { border-color: var(--white); color: var(--white); background: rgba(255, 255, 255, 0.1); }
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

    
        .char-btn-outline:hover {
          border-color: var(--gold);
          background: rgba(249, 115, 22, 0.12);
          color: var(--gold);
        }

        /* Global uniform button sizing */
        .v-btn-primary,
        .v-btn-secondary,
        .v-btn-wa,
        .v-btn-book-outline,
        .char-btn-outline {
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

        .v-hero-ctas,
        .v-price-actions,
        .v-cta-buttons {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .v-hero-ctas .v-btn-primary,
        .v-hero-ctas .v-btn-wa,
        .v-hero-ctas .v-btn-secondary,
        .v-hero-ctas .char-btn-outline,
        .v-price-actions .v-btn-primary,
        .v-price-actions .v-btn-wa,
        .v-price-actions .v-btn-book-outline,
        .v-price-actions .char-btn-outline,
        .v-cta-buttons .v-btn-primary,
        .v-cta-buttons .v-btn-wa,
        .v-cta-buttons .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
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

        /* STATS STRIP */
        .v-stats-strip {
          position: relative; z-index: 3;
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .v-stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .v-stat-item:last-child { border-right: none; }
        .v-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 600; color: var(--white); line-height: 1; }
        .v-stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }

        /* SECTIONS */
        .v-section { padding: clamp(60px, 8vw, 120px) 5%; }
        .v-section.alt { background: var(--ink-mid); }
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

        /* INTRO */
        .v-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .v-intro-visual { position: relative; }
        .v-intro-img-main { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.95) saturate(1.1); }
        .v-intro-img-float { position: absolute; bottom: -30px; right: -30px; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid var(--ink); filter: brightness(0.95) saturate(1.2); }
        .v-intro-quote { margin-top: 40px; padding: 24px 28px; border-left: 2px solid var(--saffron); background: rgba(249, 115, 22, 0.05); border-radius: 0 4px 4px 0; }
        .v-intro-quote p { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--gold); line-height: 1.6; }

        /* CITIES GRID */
        .v-dhams-header { text-align: center; max-width: 640px; margin: 0 auto 60px; }
        .v-dhams-header .v-gold-rule { margin: 24px auto; }
        .v-dhams-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto; }
        .v-dham-card { position: relative; height: 480px; overflow: hidden; cursor: default; }
        .v-dham-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.65) saturate(1.1); }
        .v-dham-card:hover img { transform: scale(1.08); filter: brightness(0.75) saturate(1.2); }
        .v-dham-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
        .v-dham-num { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 300; color: rgba(255, 255, 255, 0.25); line-height: 1; margin-bottom: 4px; transform: translateY(10px); transition: transform 0.5s, color 0.5s; }
        .v-dham-card:hover .v-dham-num { color: rgba(255, 255, 255, 0.5); transform: translateY(0); }
        .v-dham-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 500; color: var(--white); margin-bottom: 4px; }
        .v-dham-desc { font-size: 12px; letter-spacing: 0.08em; color: var(--saffron-light); text-transform: uppercase; }
        .v-dham-detail { font-size: 13px; color: rgba(255, 255, 255, 0.85); margin-top: 8px; max-height: 0; overflow: hidden; transition: max-height 0.5s, opacity 0.4s; opacity: 0; line-height: 1.6; }
        .v-dham-card:hover .v-dham-detail { max-height: 120px; opacity: 1; }

        /* PRICING CARD */
        .v-price-header { text-align: center; max-width: 640px; margin: 0 auto 50px; }
        .v-price-header .v-gold-rule { margin: 24px auto; }
        .v-price-card {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1.1fr 1fr;
          background: var(--white);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 10px 40px rgba(249, 115, 22, 0.05);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .v-price-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(249, 115, 22, 0.12); }
        .v-price-card-media { position: relative; min-height: 420px; overflow: hidden; }
        .v-price-card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85) saturate(1.1); transition: transform 0.6s; }
        .v-price-card:hover .v-price-card-media img { transform: scale(1.05); }
        .v-price-badge {
          position: absolute; top: 18px; left: 18px;
          background: var(--saffron); color: var(--white);
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 2px;
        }
        .v-price-media-cities {
          position: absolute; left: 18px; right: 18px; bottom: 18px;
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .v-price-media-cities span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          color: var(--white); background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 6px 14px; border-radius: 2px; backdrop-filter: blur(4px);
        }
        .v-price-card-body { padding: 40px 42px; display: flex; flex-direction: column; justify-content: space-between; }
        .v-pkg-duration { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--saffron); margin-bottom: 10px; }
        .v-pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 500; color: var(--cream); margin-bottom: 14px; line-height: 1.15; }
        .v-pkg-desc { font-size: 14px; color: var(--smoke); line-height: 1.75; margin-bottom: 22px; }
        .v-pkg-includes { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; }
        .v-pkg-tag { font-size: 11px; padding: 5px 12px; border-radius: 20px; background: rgba(249, 115, 22, 0.08); color: var(--gold); border: 1px solid rgba(249, 115, 22, 0.15); }
        .v-price-footer { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: auto; width: 100%; }
        .v-price-amount-wrap { display: flex; flex-direction: column; min-width: 200px; }
        .v-price-from { font-size: 11px; color: var(--smoke); letter-spacing: 0.06em; }
        .v-price-amount { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: var(--gold); line-height: 1.1; }
        .v-price-per { font-size: 13px; color: var(--smoke); margin-top: -4px; }
        .v-price-note { font-size: 11px; color: var(--smoke); margin-top: 8px; max-width: 220px; line-height: 1.5; }
        .v-price-actions { display: flex; gap: 12px; align-items: center; flex: 1; justify-content: flex-end; }
        .v-price-actions .v-btn-book-outline,
        .v-price-actions .v-btn-primary,
        .v-price-actions .char-btn-outline {
          min-height: 50px !important;
          padding: 12px 24px !important;
          border-radius: 4px !important;
          font-size: 12px !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          flex: 1 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .v-btn-book-outline { background: transparent; color: var(--saffron); padding: 13px 26px; border-radius: 2px; border: 1px solid var(--saffron); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s; cursor: pointer; }
        .v-btn-book-outline:hover { background: var(--saffron); color: white; }

        /* ITINERARY */
        .v-itin-header { text-align: center; max-width: 640px; margin: 0 auto 60px; }
        .v-itin-header .v-gold-rule { margin: 24px auto; }
        
        .v-itin-timeline { max-width: 920px; margin: 0 auto; }
        .v-itin-day { display: grid; grid-template-columns: 130px 1fr; gap: 30px; padding-bottom: 50px; position: relative; }
        .v-itin-day::before { content: ''; position: absolute; left: 16px; top: 12px; bottom: -10px; width: 1px; background: linear-gradient(to bottom, var(--saffron), rgba(249, 115, 22, 0.15)); }
        .v-itin-day:last-child { padding-bottom: 0; }
        .v-itin-day:last-child::before { display: none; }
        .v-itin-daybadge { position: relative; }
        .v-itin-dot { width: 34px; height: 34px; border-radius: 50%; background: var(--saffron); display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 600; font-size: 14px; position: relative; z-index: 2; box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.12); }
        .v-itin-daylabel { font-family: 'Cormorant Garamond', serif; font-size: 19px; color: var(--gold); margin-top: 14px; line-height: 1.3; }

        .v-itin-card {
          background: var(--white) !important;
          border: 1px solid rgba(249, 115, 22, 0.15) !important;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.03);
        }
        .v-itin-card h3 {
          color: var(--cream) !important;
        }
        .v-itin-list li {
          color: var(--cream) !important;
          position: relative;
          padding-left: 22px;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 9px;
        }
        .v-itin-list li::before {
          content: '◆' !important;
          position: absolute;
          left: 0;
          color: var(--saffron) !important;
          font-size: 9px !important;
          top: 1px !important;
        }
        
        /* WHY US */
        .v-why-section { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: var(--white); }
        .v-why-section .v-section-title { color: var(--white); }
        .v-why-section .v-section-body { color: rgba(255, 255, 255, 0.85); }
        .v-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .v-why-visual { position: relative; }
        .v-why-visual img { width: 100%; height: 500px; object-fit: cover; border-radius: 4px; }
        .v-why-float-card { position: absolute; bottom: -20px; left: -20px; background: var(--white); color: var(--cream); padding: 24px 28px; border-radius: 4px; border-left: 3px solid var(--saffron); box-shadow: 0 20px 50px rgba(0,0,0,0.15); max-width: 300px; }
        .v-why-float-card p { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-style: italic; color: var(--gold); line-height: 1.5; }
        .v-why-float-card span { font-size: 12px; color: var(--smoke); letter-spacing: 0.08em; }
        .v-features-list { list-style: none; margin-top: 40px; }
        .v-feature-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1); transition: padding-left 0.3s; }
        .v-feature-item:hover { padding-left: 8px; }
        .v-feature-item:last-child { border-bottom: none; }
        .v-feature-icon { width: 40px; height: 40px; min-width: 40px; background: rgba(255, 255, 255, 0.08); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .v-feature-text h4 { font-size: 15px; font-weight: 500; color: var(--white); margin-bottom: 3px; }
        .v-feature-text p { font-size: 13px; color: #ffffff; line-height: 1.5; }

        /* STEPS */
        .v-steps-header { text-align: center; margin-bottom: 60px; }
        .v-steps-header .v-gold-rule { margin: 20px auto; }
        .v-steps-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; max-width: 1100px; margin: 0 auto; position: relative; }
        .v-steps-grid::before { content: ''; position: absolute; top: 32px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--saffron), transparent); }
        .v-step-item { text-align: center; padding: 0 10px; }
        .v-step-dot { width: 64px; height: 64px; border-radius: 50%; background: rgba(249, 115, 22, 0.06); border: 1px solid rgba(249, 115, 22, 0.15); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 16px; position: relative; z-index: 1; transition: all 0.3s; }
        .v-step-item:hover .v-step-dot { background: var(--saffron); border-color: var(--saffron); transform: scale(1.1); color: var(--white); }
        .v-step-title { font-size: 13px; font-weight: 500; color: var(--cream); margin-bottom: 6px; }
        .v-step-desc { font-size: 12px; color: var(--smoke); line-height: 1.5; }

        /* GALLERY */
        .v-gallery-strip { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 260px 260px; grid-auto-rows: 260px; gap: 4px; max-width: 1300px; margin: 40px auto 0; }
        .v-gallery-item { overflow: hidden; position: relative; }
        .v-gallery-item img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85) saturate(1.1); transition: transform 0.5s, filter 0.5s; }
        .v-gallery-item:hover img { transform: scale(1.06); filter: brightness(0.95) saturate(1.3); }
        .v-gallery-item:nth-child(1) { grid-row: span 2; }
        .v-gallery-item:nth-child(5) { grid-column: span 2; }

        /* TESTIMONIAL */
        .v-testimonial-section { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 50%, var(--saffron-dark) 100%); text-align: center; padding: 80px 5%; }
        .v-testimonial-icon { font-size: 40px; margin-bottom: 20px; opacity: 0.6; }
        .v-testimonial-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(22px, 3vw, 34px); font-weight: 400; font-style: italic; color: var(--white); max-width: 800px; margin: 0 auto 24px; line-height: 1.5; }
        .v-testimonial-author { font-size: 13px; letter-spacing: 0.12em; color: rgba(255,255,255,0.85); }
        .v-testimonial-stars { font-size: 18px; color: var(--gold-light); margin-top: 12px; letter-spacing: 4px; }

        /* FAQ */
        .v-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1200px; margin: 0 auto; }
        .v-faq-list { margin-top: 12px; }
        .v-faq-item { border-bottom: 1px solid rgba(249, 115, 22, 0.15); overflow: hidden; }
        .v-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15px; font-weight: 400; color: var(--cream); transition: color 0.3s; gap: 12px; border: none; background: transparent; width: 100%; text-align: left; }
        .v-faq-q:hover { color: var(--gold); }
        .v-faq-icon { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; border: 1px solid rgba(249, 115, 22, 0.3); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--gold); transition: transform 0.3s; }
        .v-faq-item.open .v-faq-icon { transform: rotate(45deg); }
        .v-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; font-size: 14px; color: var(--smoke); line-height: 1.75; padding-bottom: 0; }
        .v-faq-item.open .v-faq-a { max-height: 320px; padding-bottom: 20px; }

        /* CTA BANNER */
        .v-cta-banner { position: relative; padding: 100px 5%; display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; background: url('/rambg.jpg') center/cover no-repeat; }
        .v-cta-banner::before { content: ''; position: absolute; inset: 0; background: url('/rambg.jpg') center/cover no-repeat; filter: brightness(0.25) saturate(0.8); }
        .v-cta-banner-content { position: relative; z-index: 1; max-width: 700px; }
        .v-cta-banner .v-section-title { text-align: center; color: var(--white) !important; }
        .v-cta-banner .v-section-body { margin: 0 auto 40px; text-align: center; color: rgba(255, 255, 255, 0.8) !important; }
        .v-cta-buttons { display: flex; gap: 16px; justify-content: center; align-items: center; }
        .v-cta-buttons a {
          min-height: 50px !important;
          padding: 12px 24px !important;
          border-radius: 4px !important;
          font-size: 13px !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 1;
          max-width: 320px;
        }



        /* STICKY WA */
        .v-sticky-wa { position: fixed; bottom: 28px; right: 28px; z-index: 200; width: 58px; height: 58px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.5); text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; animation: pulse-wa 3s infinite; }
        .v-sticky-wa:hover { transform: scale(1.1); box-shadow: 0 6px 30px rgba(37,211,102,0.7); }
        @keyframes pulse-wa { 0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); } 50% { box-shadow: 0 4px 30px rgba(37,211,102,0.8); } }
        .v-sticky-wa svg { width: 30px; height: 30px; fill: white; }

        /* REVEAL */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        .v-faq-grid > div:first-child > div[style*="marginTop"] {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          align-items: flex-start !important;
          margin-top: 24px !important;
        }
        .v-faq-grid > div:first-child br {
          display: none;
        }
        .v-faq-grid .v-btn-primary,
        .v-faq-grid .v-btn-wa {
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          min-height: unset !important;
          height: auto !important;
          padding: 15px 26px !important;
          border-radius: 8px !important;
          font-size: 13.5px !important;
          font-weight: 700 !important;
          letter-spacing: 0.5px !important;
          text-transform: uppercase !important;
          width: fit-content !important;
          margin: 0 !important;
        }
        .v-faq-grid .v-btn-primary {
          background: #E8631C !important;
          color: white !important;
        }
        .v-faq-grid .v-btn-primary:hover {
          background: #d15313 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.12);
        }
        .v-faq-grid .v-btn-wa {
          background: #3CBE5E !important;
          color: white !important;
        }
        .v-faq-grid .v-btn-wa:hover {
          background: #32a850 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.12);
        }

        @media (max-width: 900px) {
          .v-intro-grid, .v-why-grid, .v-faq-grid { grid-template-columns: 1fr; }
          .v-dhams-grid { grid-template-columns: 1fr; }
          .v-price-card { grid-template-columns: 1fr; }
          .v-price-card-media { min-height: 260px; }
          .v-steps-grid { grid-template-columns: repeat(3, 1fr); row-gap: 36px; }
          .v-steps-grid::before { display: none; }
          .v-gallery-strip { grid-template-columns: 1fr 1fr; grid-auto-rows: 220px; }
          .v-gallery-item:nth-child(1) { grid-row: span 1; }
          .v-gallery-item:nth-child(5) { grid-column: span 1; }
          .v-stats-strip { grid-template-columns: 1fr 1fr; gap: 20px; }
          .v-stat-item { border-right: none; }

          .v-intro-img-float { display: none; }
          .v-why-float-card { position: static; margin-top: 16px; max-width: none; text-align: center; border-left: none; border-top: 2px solid var(--gold); border-bottom: 2px solid var(--gold); padding: 16px 0; }
          .v-itin-day { grid-template-columns: 1fr; gap: 14px; }
          .v-itin-day::before { display: none; }
          .v-itin-daybadge { display: flex; flex-direction: column; align-items: center; text-align: center; }
          .v-nav { padding: 16px 4%; }
          .v-nav-cta .v-btn-ghost { display: none; }
          
          /* Mobile Center Alignment for headings */
          .v-hero-content { text-align: center; }
          .v-hero-tag { display: flex; width: 100%; justify-content: center; }
          .v-hero-subtitle { margin-left: auto; margin-right: auto; }
          .v-hero-ctas { justify-content: center; }

          .v-hero-ctas,
          .v-price-actions,
          .v-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .v-hero-ctas .v-btn-primary,
          .v-hero-ctas .v-btn-wa,
          .v-hero-ctas .v-btn-secondary,
          .v-hero-ctas .char-btn-outline,
          .v-price-actions .v-btn-primary,
          .v-price-actions .v-btn-wa,
          .v-price-actions .v-btn-book-outline,
          .v-price-actions .char-btn-outline,
          .v-cta-buttons .v-btn-primary,
          .v-cta-buttons .v-btn-wa,
          .v-cta-buttons .char-btn-outline {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .v-intro-grid .reveal:last-child { text-align: center; }
          .v-intro-grid .v-section-tag { display: flex; width: 100%; justify-content: center; }
          .v-intro-grid .v-gold-rule { margin-left: auto; margin-right: auto; }
          .v-intro-grid .v-section-body { margin-left: auto; margin-right: auto; }
          .v-intro-grid .v-intro-quote { text-align: center; border-left: none; border-top: 2px solid var(--gold); border-bottom: 2px solid var(--gold); padding: 16px 0; }

          .v-why-grid .reveal:first-child { text-align: center; }
          .v-why-grid .v-section-tag { display: flex; width: 100%; justify-content: center; }
          .v-why-grid .v-gold-rule { margin-left: auto; margin-right: auto; }
          .v-why-grid .v-section-body { margin-left: auto; margin-right: auto; }
          .v-features-list { text-align: left; }

          .v-dhams-header, .v-price-header, .v-itin-header { text-align: center; }
          .v-dhams-header .v-section-title, .v-price-header .v-section-title, .v-itin-header .v-section-title { text-align: center; }
          .v-dhams-header .v-gold-rule, .v-price-header .v-gold-rule, .v-itin-header .v-gold-rule { margin-left: auto; margin-right: auto; }

          .v-faq-grid > div:first-child {
            text-align: center;
          }
          .v-faq-grid > div:first-child .v-section-tag {
            justify-content: center;
          }
          .v-faq-grid > div:first-child .v-gold-rule {
            margin-left: auto;
            margin-right: auto;
          }
          .v-faq-grid > div:first-child .v-section-body {
            margin-left: auto;
            margin-right: auto;
          }
          .v-faq-grid > div:first-child div[style*="marginTop"] {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 560px) {
          .v-steps-grid { grid-template-columns: 1fr; gap: 36px; }
          .v-price-footer { flex-direction: column; align-items: stretch; gap: 24px; }
          .v-price-card-body { padding: 30px 26px; }
          .v-gallery-strip { grid-template-columns: 1fr; }
          .v-price-actions {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
            gap: 10px;
          }
          .v-price-actions .v-btn-book-outline,
          .v-price-actions .v-btn-primary,
          .v-price-actions .char-btn-outline {
            width: 100% !important;
            text-align: center;
            box-sizing: border-box;
            display: inline-flex !important;
            justify-content: center;
            align-items: center;
            min-height: 48px;
            padding: 12px 20px !important;
            border-radius: 4px !important;
            font-size: 13px !important;
          }
          .v-hero-ctas {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
            gap: 10px;
          }
          .v-hero-ctas .v-btn-primary,
          .v-hero-ctas .v-btn-wa {
            width: 100% !important;
            text-align: center;
            box-sizing: border-box;
            display: inline-flex !important;
            justify-content: center;
            align-items: center;
            min-height: 48px;
            padding: 12px 20px !important;
            border-radius: 4px !important;
            font-size: 13px !important;
          }
          .v-cta-buttons {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
            gap: 10px;
          }
          .v-cta-buttons a {
            width: 100% !important;
            max-width: none !important;
            text-align: center;
            box-sizing: border-box;
            display: inline-flex !important;
            justify-content: center;
            align-items: center;
            min-height: 48px;
            padding: 12px 20px !important;
            border-radius: 4px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <section className="v-hero">
        <div className="v-hero-img"></div>
        <div className="v-hero-overlay"></div>
        <div className="v-hero-content">
          <div className="v-hero-tag" style={{ fontWeight: 700, fontSize: 14 }}>Kashi · Prayagraj · Ayodhya</div>
          <h1 className="v-hero-title">Varanasi Prayagraj Ayodhya<br /><em>Tour Package</em></h1>
          <p className="v-hero-subtitle">A guided spiritual journey through three of India's holiest cities — from the ghats of Kashi to the Sangam at Prayagraj to Lord Ram's Ayodhya. Departures and full coordination from Mumbai & Thane.</p>
          <div className="v-hero-ctas">
            <a href="tel:+917208771688" className="v-btn-primary">📞 Call to Book</a>
            <a href={wa("I want to enquire about the Varanasi Prayagraj Ayodhya tour package")} className="v-btn-wa" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white" className="mr-2" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href="/UTTAR_PRADESH_MARGIKA_YATRA.pdf" download="UTTAR PRADESH. MARGIKA YATRA_20260528_190003_0000_ CM.pdf" className="v-btn-primary">
              Download Itinerary
            </a>
          </div>
        </div>
      </section>

      <CharStats />

      {/* INTRO */}
      <section className="v-section">
        <div className="v-intro-grid">
          <div className="v-intro-visual reveal">
            <img className="v-intro-img-main" src="/Ayomain2.png" alt="Varanasi Prayagraj Ayodhya tour package" />
            <img className="v-intro-img-float" src="/1.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="v-section-tag">Three Cities · One Sacred Circuit</div>
            <h2 className="v-section-title">The Kashi–Prayagraj–<br /><em>Ayodhya Yatra</em></h2>
            <div className="v-gold-rule"></div>
            <p className="v-section-body">The Varanasi, Prayagraj and Ayodhya tour package connects three of Hinduism's most revered cities into one well-paced pilgrimage. You begin in Kashi, Lord Shiva's eternal city on the Ganga, move to the holy Triveni Sangam at Prayagraj, and complete the journey at Shri Ram Janmabhoomi in Ayodhya.</p>
            <p className="v-section-body" style={{ marginTop: 16 }}>Long distance temple travel, hotel timing, darshan queues and inter-city drives can quickly tire a family. That is exactly why travellers from Mumbai, Thane and across India let Margika Yatra plan and coordinate every detail, so you can give your full attention to the darshan, not the logistics.</p>
            <div className="v-intro-quote">
              <p>"We handle every detail. You carry only your devotion."</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CITIES */}
      <section className="v-section alt">
        <div className="v-dhams-header reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>The Sacred Triangle</div>
          <h2 className="v-section-title">Three Holy Cities,<br /><em>One Journey of Faith</em></h2>
          <div className="v-gold-rule"></div>
          <p className="v-section-body" style={{ margin: "0 auto", textAlign: "center" }}>Each city carries its own deity, its own rivers, and its own place in the Hindu heart. Together they make one of India's most meaningful pilgrimage routes.</p>
        </div>
        <div className="v-dhams-grid">
          {cities.map((city, idx) => (
            <div className="v-dham-card" key={city.name}>
              <img src={city.image} alt={city.name} />
              <div className="v-dham-overlay">
                <div className="v-dham-num">0{idx + 1}</div>
                <div className="v-dham-name">{city.name}</div>
                <div className="v-dham-desc">{city.desc}</div>
                <p className="v-dham-detail">{city.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="v-section">
        <div className="v-price-header reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Package & Pricing</div>
          <h2 className="v-section-title">Your Yatra, <em>Fully Sorted</em></h2>
          <div className="v-gold-rule"></div>
          <p className="v-section-body" style={{ margin: "0 auto", textAlign: "center" }}>One clear, all-inclusive package — hotels, transport, meals, guided darshan and full coordination from Mumbai & Thane. Transparent pricing, no hidden costs.</p>
        </div>

        <div className="v-price-card reveal">
          <div className="v-price-card-media">
            <img src="/Ayomain3.png" alt="Varanasi Prayagraj Ayodhya tour package" />
            <div className="v-price-badge">⭐ Most Loved</div>
            <div className="v-price-media-cities">
              <span>KASHI</span><span>PRAYAGRAJ</span><span>AYODHYA</span>
            </div>
          </div>
          <div className="v-price-card-body">
            <div>
              <div className="v-pkg-duration">4 Days · Varanasi · Prayagraj · Ayodhya</div>
              <div className="v-pkg-name">Varanasi Prayagraj Ayodhya Tour Package</div>
              <p className="v-pkg-desc">The complete spiritual circuit — Kashi Vishwanath darshan, Ganga Aarti, a sunrise boat ride over the 84 ghats, the Triveni Sangam Snan at Prayagraj, and Shri Ram Janmabhoomi with the Saryu Aarti in Ayodhya. Hotels, private AC transport, veg meals and guided darshan included.</p>
              <div className="v-pkg-includes">
                <span className="v-pkg-tag">VIP Darshan</span>
                <span className="v-pkg-tag">AC Transport</span>
                <span className="v-pkg-tag">Veg Meals</span>
                <span className="v-pkg-tag">Hotel Stay</span>
                <span className="v-pkg-tag">Ganga Boat Ride</span>
                <span className="v-pkg-tag">Guided Tours</span>
                <span className="v-pkg-tag">Mumbai–Thane Support</span>
              </div>
            </div>
            <div className="v-price-footer">
              <div className="v-price-amount-wrap">
                <span className="v-price-from">Starting from</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span className="v-price-amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹18,499</span>
                  <span className="v-price-amount">₹13,499</span>
                </div>
                <span className="v-price-per"> / person</span>
                <span className="v-price-note">Final price depends on dates, group size & hotel category. Was <span style={{ textDecoration: 'line-through' }}>₹18,499</span>.</span>
              </div>
              <div className="v-price-actions">
                <a href="tel:+917208771688" className="v-btn-book-outline">Call Us</a>
                <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="v-btn-primary">Book Now </a>
                <a href="/UTTAR_PRADESH_MARGIKA_YATRA.pdf" download="UTTAR_PRADESH_MARGIKA_YATRA.pdf" className="char-btn-outline">Download Itinerary</a>

              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "var(--smoke)", maxWidth: 620, margin: "28px auto 0" }}>
          Looking for a longer stay, a premium hotel, or a custom group rate?{" "}
          <a href={wa("I want a custom quote for the Varanasi Prayagraj Ayodhya tour")} style={{ color: "var(--saffron)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
            Message us for a personalised quote →
          </a>
        </p>
      </section>

      {/* ITINERARY */}
      <section className="v-section alt">
        <div className="v-itin-header reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Day-Wise Tour Overview</div>
          <h2 className="v-section-title">Your Detailed<br /><em>Spiritual Itinerary</em></h2>
          <div className="v-gold-rule"></div>
          <p className="v-section-body" style={{ margin: "0 auto", textAlign: "center" }}>A clear, day-by-day plan covering Varanasi, Prayagraj and Ayodhya. Timings and temple order can be customised to your group, dates and pace.</p>
        </div>

        <div className="v-itin-timeline">
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <button className={`v-btn-nav ${activeDay === "day1" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day1")}>Day 1</button>
            <button className={`v-btn-nav ${activeDay === "day2" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day2")}>Day 2</button>
            <button className={`v-btn-nav ${activeDay === "day3" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day3")}>Day 3</button>
            <button className={`v-btn-nav ${activeDay === "day4" ? "v-btn-saffron" : "v-btn-ghost"}`} onClick={() => setActiveDay("day4")}>Day 4</button>
          </div>

          <div className="reveal">
            {activeDay === "day1" && (
              <div className="v-itin-day">
                <div className="v-itin-daybadge"><div className="v-itin-dot">1</div><div className="v-itin-daylabel">Day 1<br />Varanasi</div></div>
                <div className="v-itin-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,106,0.15)", borderRadius: 6, padding: "26px 28px" }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 23, color: "var(--cream)", marginBottom: 6 }}>Arrival & the Spiritual Heart of Kashi</h3>
                  <div className="v-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Hotel Check-in · Temple Darshan · Ganga Aarti</div>
                  <ul className="v-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }} className="before:content-['◆'] before:absolute before:left-0 before:color-[var(--saffron)] before:font-size-[9px] before:top-[5px]"><strong>Hotel check-in</strong> and freshen up after arrival</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Kaal Bhairav Temple</strong> darshan — the guardian deity of Kashi</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Maha Mrityunjay Temple</strong> for a peaceful darshan</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Ganga Aarti at Dashashwamedh Ghat</strong> — the day's spiritual highlight</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Explore <strong>Dashashwamedh shopping street</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Annapurna Temple</strong> darshan</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Kashi Vishwanath Shayan Aarti</strong>, then back to hotel</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day2" && (
              <div className="v-itin-day">
                <div className="v-itin-daybadge"><div className="v-itin-dot">2</div><div className="v-itin-daylabel">Day 2<br />Varanasi</div></div>
                <div className="v-itin-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,106,0.15)", borderRadius: 6, padding: "26px 28px" }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 23, color: "var(--cream)", marginBottom: 6 }}>Morning on the Ganga & Kashi Vishwanath</h3>
                  <div className="v-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Mangala Aarti · Boat Ride · Kashi Vishwanath</div>
                  <ul className="v-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Early morning <strong>Mangala Aarti</strong> (assistance provided)</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Subah-e-Banaras</strong> — morning music and yoga by the river</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Morning boat ride</strong> to explore all 84 ghats</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Kashi Vishwanath darshan</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Sankat Mochan Hanuman Temple</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Durga Mata Mandir</strong> darshan</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day3" && (
              <div className="v-itin-day">
                <div className="v-itin-daybadge"><div className="v-itin-dot">3</div><div className="v-itin-daylabel">Day 3<br />Prayagraj → Ayodhya</div></div>
                <div className="v-itin-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,106,0.15)", borderRadius: 6, padding: "26px 28px" }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 23, color: "var(--cream)", marginBottom: 6 }}>Triveni Sangam to Lord Ram's City</h3>
                  <div className="v-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Sangam Snan · Shaktipeeth · Drive to Ayodhya · Saryu Aarti</div>
                  <ul className="v-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Early morning drive to <strong>Prayagraj</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Triveni Sangam Snan</strong> — holy dip at the confluence</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Alopi Mata Shaktipeeth</strong> darshan</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Bade Hanumanji</strong> darshan</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Drive onward to <strong>Ayodhya</strong> and hotel check-in</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Explore <strong>Lata Chowk & Surya Stambh</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Evening <strong>Saryu Aarti</strong>, then overnight stay in Ayodhya</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDay === "day4" && (
              <div className="v-itin-day">
                <div className="v-itin-daybadge"><div className="v-itin-dot">4</div><div className="v-itin-daylabel">Day 4<br />Ayodhya</div></div>
                <div className="v-itin-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,106,0.15)", borderRadius: 6, padding: "26px 28px" }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 23, color: "var(--cream)", marginBottom: 6 }}>Shri Ram Janmabhoomi & Departure</h3>
                  <div className="v-itin-route" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 16 }}>Ram Mandir · Hanuman Garhi · Kanak Bhavan · Drop</div>
                  <ul className="v-itin-list" style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Morning breakfast at the hotel</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Ram Mandir (Shri Ram Janmabhoomi) darshan</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Hanuman Garhi</strong> darshan</li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Explore <strong>Kanak Bhavan</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}>Visit <strong>Dashrath Mahal</strong></li>
                    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14, color: "rgba(250,245,236,0.78)", lineHeight: 1.7, marginBottom: 9 }}><strong>Drop to airport / railway station</strong> for your return</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MARGIKA */}
      <section className="v-section v-why-section">
        <div className="v-why-grid">
          <div className="reveal">
            <div className="v-section-tag" style={{ color: "#ffffff", "--saffron": "#ffffff" } as React.CSSProperties}>Why Choose Us</div>
            <h2 className="v-section-title">Why Mumbai & Thane<br /><em style={{ color: "#ffffff" }}>Yatris Choose Margika</em></h2>
            <div className="v-gold-rule" style={{ background: "#ffffff" }}></div>
            <p className="v-section-body" style={{ fontWeight: 700, color: "#ffffff" }}>We are based in Brahmand, Thane. When you call us, you speak to a local team that understands your community, your travel concerns and your schedule — a level of trust no distant online operator can match. We specialise in spiritual journeys, so the planning is in experienced hands.</p>
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

      {/* HOW IT WORKS */}
      <section className="v-section alt">
        <div className="v-steps-header reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Simple & Transparent</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>How Your <em>Booking Works</em></h2>
          <div className="v-gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="v-steps-grid">
          <div className="v-step-item reveal"><div className="v-step-dot">📞</div><div className="v-step-title">Enquiry</div><div className="v-step-desc">Call, WhatsApp or fill our online form</div></div>
          <div className="v-step-item reveal reveal-delay-1"><div className="v-step-dot">💬</div><div className="v-step-title">Consultation</div><div className="v-step-desc">We learn your group, dates & needs within 24 hrs</div></div>
          <div className="v-step-item reveal reveal-delay-2"><div className="v-step-dot">📋</div><div className="v-step-title">Custom Plan</div><div className="v-step-desc">An itinerary built around you, with clear pricing</div></div>
          <div className="v-step-item reveal reveal-delay-3"><div className="v-step-dot">✅</div><div className="v-step-title">Confirmation</div><div className="v-step-desc">Secure your spot with a simple advance</div></div>
          <div className="v-step-item reveal reveal-delay-4"><div className="v-step-dot">🛕</div><div className="v-step-title">On-Trip Support</div><div className="v-step-desc">Guided darshan & 24×7 WhatsApp help</div></div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="v-section">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 12px" }}>Glimpses of the Yatra</div>
          <h2 className="v-section-title" style={{ textAlign: "center" }}>Moments from <em>Sacred Journeys</em></h2>
        </div>
        <div className="v-gallery-strip">
          <div className="v-gallery-item"><img src="/1.jpg" alt="Varanasi Ganga Aarti" /></div>
          <div className="v-gallery-item"><img src="/2.jpg" alt="Kashi Vishwanath" /></div>
          <div className="v-gallery-item"><img src="/Home1.jpeg" alt="Prayagraj Triveni Sangam" /></div>
          <div className="v-gallery-item"><img src="/Home2.jpeg" alt="Ayodhya Ram Mandir" /></div>
          <div className="v-gallery-item"><img src="/5.jpg" alt="Spiritual tour" /></div>
          <div className="v-gallery-item"><img src="/6.jpg" alt="Saryu Aarti" /></div>
          <div className="v-gallery-item"><img src="/Home3.jpeg" alt="Saryu Aarti" /></div>
          <div className="v-gallery-item"><img src="/Home4.jpeg" alt="Saryu Aarti" /></div>
          <div className="v-gallery-item"><img src="/Home5.jpeg" alt="Saryu Aarti" /></div>
          <div className="v-gallery-item"><img src="/Home6.jpg" alt="Saryu Aarti" /></div>
          <div className="v-gallery-item"><img src="/Home7.jpg" alt="Saryu Aarti" /></div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQ */}
      <FAQ/>

      {/* CTA BANNER */}
      <div className="v-cta-banner">
        <div className="v-cta-banner-content reveal">
          <div className="v-section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Plan Your Yatra with Confidence</div>
          <h2 className="v-section-title">Book Your Varanasi Prayagraj<br /><em>Ayodhya Tour Today</em></h2>
          <p className="v-section-body">Tell us your dates and group size, and our Mumbai–Thane team will put together a clear, personalised plan with honest pricing. No pressure — just guidance and support every step of the way.</p>
          <div className="v-cta-buttons">
            <a href="tel:+917208771688" className="v-btn-primary">📞 Call Now — +91 72087 71688</a>
            <a href={wa("I want to plan the Varanasi Prayagraj Ayodhya tour package")} className="v-btn-wa" target="_blank" rel="noopener noreferrer">
              WhatsApp to Check Availability
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* STICKY WHATSAPP */}
      <a href={wa("Hi Margika Yatra! I want to enquire about the Varanasi Prayagraj Ayodhya tour package")} className="v-sticky-wa" title="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}
