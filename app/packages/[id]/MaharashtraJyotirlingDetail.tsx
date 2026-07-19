"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/ui/newheader"
import { Footer } from "@/components/footer"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"
import { GoogleReviews } from "@/components/ui/google-reviews"
import Link from "next/link"
import Image from "next/image"

function PackageHtmlPage({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      className="fixed inset-0 z-50 h-screen w-screen border-0 bg-[#1A1208]"
    />
  )
}

function MaharashtraJyotirlingHtml() {
  return <PackageHtmlPage src="/maharashtra-jyotirlinga.html" title="Three Jyotirlinga Maharashtra Tour Package" />
}

function MaharashtraJyotirlingDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const razorpayLink = "https://rzp.io/rzp/zCOhd60"

  useEffect(() => {
    const reveals = document.querySelectorAll(".char-reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("char-visible")
        })
      },
      { threshold: 0.12 },
    )

    reveals.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  const jyotirlingas = [
    {
      name: "Bhimashankar",
      desc: "Sahyadri hills and Bhima river source",
      detail:
        "A forested Shiva shrine in the Western Ghats, loved for its calm setting, powerful darshan, and monsoon greenery.",
      image: "/mh1.png",
    },
    {
      name: "Trimbakeshwar",
      desc: "Origin of the sacred Godavari",
      detail:
        "Near Nashik, Trimbakeshwar is known for its rare three-faced lingam and deep connection with the Godavari river.",
      image:
        "/mh2.png",
    },
    {
      name: "Grishneshwar",
      desc: "The last of the twelve Jyotirlingas",
      detail:
        "A red-stone temple beside the Ellora Caves, combining sacred Jyotirlinga darshan with Maharashtra's heritage route.",
      image: "/mh3.png",
    },
  ]

  const itinerary = [
    {
      day: "Day 1",
      route: "Pune to Grishneshwar",
      title: "Pickup, Shani Shingnapur and Grishneshwar",
      points: [
        "Pickup from Pune airport, railway station, bus stand, or your hotel.",
        "Proceed towards Shani Shingnapur for darshan.",
        "Continue to Grishneshwar and check in near the temple route.",
        "Evening darshan planning and overnight stay near Grishneshwar.",
      ],
    },
    {
      day: "Day 2",
      route: "Grishneshwar to Trimbakeshwar to Pune",
      title: "Jyotirlinga darshan with Ellora and Nashik route",
      points: [
        "Early morning Grishneshwar Jyotirlinga darshan.",
        "Visit Ellora Caves depending on timing and crowd conditions.",
        "Drive towards Nashik for Trimbakeshwar Jyotirlinga darshan.",
        "Return to Pune for overnight stay.",
      ],
    },
    {
      day: "Day 3",
      route: "Bhimashankar and Pune drop",
      title: "Bhimashankar, Dagdu Seth Ganpati and Shaniwar Wada",
      points: [
        "Early drive to Bhimashankar for the third Jyotirlinga darshan.",
        "Return to Pune and visit Dagdu Seth Ganpati if time permits.",
        "Short Pune heritage stop at Shaniwar Wada, subject to schedule.",
        "Drop at Pune airport, railway station, bus stand, or your hotel.",
      ],
    },
  ]

  const features = [
    ["📍", "Mumbai & Thane Friendly", "We coordinate your Pune joining plan and guide the route from first call to final drop."],
    ["🚗", "Private AC Transport", "Vehicle options for couples, families, and groups with tolls, parking, and driver allowance planned clearly."],
    ["🛕", "Three Jyotirlingas Covered", "Bhimashankar, Trimbakeshwar, and Grishneshwar are covered at a comfortable darshan pace."],
    ["📋", "Personalised Planning", "Dates, pace, vehicle, temple order, and group size are shaped around your family or group."],
    ["💰", "Transparent Pricing", "Per-person cost is shared clearly by group size before you confirm the booking."],
  ]

  const packages = [
    ["2 Guests", "Sedan", "₹13,860"],
    ["4 Guests", "Sedan", "₹9,360"],
    ["6 Guests", "Ertiga", "₹8,660"],
    ["6 Guests", "Innova", "₹8,960"],
    ["6 Guests", "Innova Crysta", "₹9,460"],
    ["12 Guests", "Tempo Traveller (12-Seater)", "₹11,999"],
  ]

  const faqs = [
    [
      "Which three Jyotirlingas are covered in the Maharashtra tour package?",
      "The Maharashtra three Jyotirling tour package covers Bhimashankar, Trimbakeshwar, and Grishneshwar. The trip also adds Shani Shingnapur, Ellora Caves, Dagdu Seth Ganpati, and Shaniwar Wada.",
    ],
    [
      "Can I book the 3 Jyotirlinga Maharashtra tour package from Mumbai or Thane?",
      "Yes. The circuit runs on a Pune base, and we help travellers from Mumbai and Thane plan joining travel to Pune, then coordinate the rest of the yatra end to end.",
    ],
    [
      "How many days does the Maharashtra 3 Jyotirlinga trip take?",
      "The standard Maharashtra 3 Jyotirlinga tour is 3 days and 2 nights, covering all three Jyotirlingas at a comfortable pace along with Shani Shingnapur, Ellora, and Pune sightseeing.",
    ],
    [
      "What is the price of the Maharashtra three Jyotirling package?",
      "The price depends on group size and vehicle. As a guide, it starts from around ₹11,999 per person for a 12-seater group and is higher for smaller groups.",
    ],
    [
      "What is the best time to visit the 3 Jyotirlinga of Maharashtra?",
      "October to March is the most comfortable period. Shravan and Mahashivaratri are spiritually special but crowded, while monsoon makes Bhimashankar especially scenic.",
    ],
    [
      "Is this Maharashtra Jyotirling tour suitable for senior citizens and families?",
      "Yes. There is no extreme altitude or mandatory trek, and the temples are road-accessible. We keep the pace gentle with sensible rest.",
    ],
    [
      "What does the package include and exclude?",
      "Included: hotel stays, private AC transport, sightseeing as per itinerary, tolls, parking, and driver allowances. GST, airfare or train fare, meals unless specified, personal expenses, entry tickets, and VIP darshan tickets are extra.",
    ],
  ]

  return (
    <div className="char-dham-page maharashtra-page">
      <style jsx global>{`
        

        .maharashtra-page {
          --saffron: #f97316;
          --saffron-light: #fdba74;
          --saffron-dark: #ea580c;
          --gold: #c2410c;
          --cream: #111827;
          --ink: #ffffff;
          --ink-mid: #fff7ed;
          --smoke: #4b5563;
          min-height: 100vh;
          overflow-x: hidden;
          background: linear-gradient(to bottom right, #ffffff, #fff7ed, #ffedd5);
          color: var(--cream);
          font-family: "Jost", sans-serif;
        }
        .maharashtra-page * { box-sizing: border-box; }
        .maharashtra-page img { max-width: 100%; display: block; }
        .mh-hero::before {
          background: #0d1b3e;
        }
        .mh-complete { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: #ffffff; }
        .mh-complete .char-section-title { color: #ffffff; }
        .mh-complete .char-body {
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
          margin: 0 auto;
        }
        .mh-complete .char-tag { color: #ffffff; }
        .mh-complete .char-tag::before { background: #ffffff; }
        .mh-complete .char-rule { background: #ffffff; }
        .mh-complete .char-btn-outline { color: #ffffff; border-color: #ffffff; }
        .mh-itinerary { max-width: 920px; margin: 0 auto; }
        .mh-day { display: grid; grid-template-columns: 150px 1fr; gap: 30px; position: relative; padding-bottom: 48px; }
        .mh-day::before { content: ""; position: absolute; left: 16px; top: 12px; bottom: -8px; width: 1px; background: linear-gradient(to bottom, var(--saffron), rgba(249,115,22,0.14)); }
        .mh-day:last-child { padding-bottom: 0; }
        .mh-day:last-child::before { display: none; }
        .mh-dot { position: relative; z-index: 1; display: grid; place-items: center; width: 34px; height: 34px; border-radius: 999px; background: var(--saffron); color: white; font-weight: 600; box-shadow: 0 0 0 6px rgba(249,115,22,0.12); }
        .mh-daylabel { margin-top: 14px; color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 19px; line-height: 1.25; }
        .mh-itin-card { border: 1px solid rgba(249,115,22,0.15); border-radius: 6px; background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); box-shadow: 0 10px 30px rgba(249,115,22,0.04); padding: 26px 28px; }
        .mh-itin-card h3 { margin: 0 0 8px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: 25px; font-weight: 500; }
        .mh-route { margin-bottom: 16px; color: var(--saffron); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .mh-list { list-style: none; margin: 0; padding: 0; }
        .mh-list li { position: relative; margin-bottom: 9px; padding-left: 22px; color: rgba(17,24,39,0.8); font-size: 14px; line-height: 1.7; }
        .mh-list li::before { content: "◆"; position: absolute; left: 0; top: 5px; color: var(--saffron); font-size: 9px; }
        .mh-price-card { display: grid; grid-template-columns: 1.05fr 1fr; max-width: 1100px; margin: 0 auto 40px; overflow: hidden; border: 1px solid rgba(249,115,22,0.22); border-radius: 8px; background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); box-shadow: 0 20px 40px rgba(249,115,22,0.06); transition: transform 0.35s, box-shadow 0.35s; }
        .mh-price-card:hover { transform: translateY(-4px); box-shadow: 0 30px 80px rgba(249,115,22,0.12); }
        .mh-price-media { position: relative; min-height: 440px; overflow: hidden; }
        .mh-price-media img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.6s; }
        .mh-price-card:hover .mh-price-media img { transform: scale(1.05); }
        .mh-badge { position: absolute; top: 18px; left: 18px; background: var(--saffron); color: white; padding: 6px 14px; border-radius: 2px; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
        .mh-cities { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; flex-wrap: wrap; gap: 8px; }
        .mh-cities span { border: 1px solid rgba(212,175,106,0.4); border-radius: 2px; background: rgba(26,18,8,0.6); color: #ffffff; padding: 6px 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; }
        .mh-price-body { display: flex; flex-direction: column; justify-content: space-between; padding: 40px 42px; }
        .mh-price-name { margin: 10px 0 14px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: 34px; font-weight: 500; line-height: 1.15; }
        .mh-price-desc { color: rgba(17,24,39,0.7); font-size: 14px; line-height: 1.75; }
        .mh-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0 30px; }
        .mh-tags span { border: 1px solid rgba(232,135,26,0.2); border-radius: 99px; background: rgba(232,135,26,0.1); color: var(--saffron-dark); padding: 5px 12px; font-size: 11px; }
        .mh-price-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .mh-amount { display: block; color: var(--gold); font-family: serif; font-size: 44px; line-height: 1.1; }
        .mh-note { display: block; max-width: 240px; margin-top: 8px; color: var(--smoke); font-size: 11px; line-height: 1.5; }
        .mh-price-actions { display: flex; gap: 16px; align-items: center; }
        .mh-table-wrap { max-width: 900px; margin: 0 auto; overflow-x: auto; }
        .mh-table { width: 100%; min-width: 480px; border-collapse: collapse; }
        .mh-table th, .mh-table td { padding: 13px 18px; border-bottom: 1px solid rgba(249,115,22,0.12); text-align: left; font-size: 14px; }
        .mh-table th { background: rgba(232,135,26,0.12); color: var(--gold); font-size: 12px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; }
        .mh-table td { color: rgba(17,24,39,0.8); }
        .mh-table td:last-child { color: var(--gold); font-weight: 500; }
        .char-nav { position: fixed; inset: 0 0 auto 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 18px 5%; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(249,115,22,0.15); }
        .char-logo { display: flex; align-items: center; gap: 12px; color: var(--gold); text-decoration: none; }
        .char-logo span { font-family: "Cormorant Garamond", serif; font-size: 22px; font-weight: 600; letter-spacing: 0.08em; }
        .char-nav-actions, .char-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

        /* Global uniform button sizing */
        .char-btn, .char-btn-outline, .char-btn-wa {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px !important;
          min-height: 50px !important;
          padding: 12px 24px !important;
          border-radius: 4px !important;
          border: 1px solid transparent;
          color: white;
          font-size: 12px !important;
          font-weight: 500 !important;
          letter-spacing: 0.1em !important;
          text-decoration: none !important;
          text-transform: uppercase !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }

        .char-actions,
        .mh-price-actions {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .char-actions .char-btn,
        .char-actions .char-btn-outline,
        .char-actions .char-btn-wa,
        .mh-price-actions .char-btn,
        .mh-price-actions .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }
        .char-btn { background: var(--saffron); }
        .char-btn:hover { background: var(--saffron-light); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .char-btn-outline { border-color: rgba(249,115,22,0.55); background: var(--saffron); }
        .char-btn-outline:hover { border-color: var(--gold); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .char-btn-wa { background: #25d366; }
        .char-btn-wa:hover { background: #1eb858; transform: translateY(-2px); }
        .char-hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; padding: 130px 5% 80px; overflow: hidden; }
        .char-hero::before { content: ""; position: absolute; inset: 0; animation: charZoom 12s ease-out forwards; }
        .char-hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,247,237,0.6) 64%, rgba(255,247,237,0.98)); }
        @keyframes charZoom { from { transform: scale(1.05); } to { transform: scale(1); } }
        .char-hero-content { position: relative; z-index: 1; max-width: 860px; animation: charFadeUp 0.8s 0.1s ease forwards; will-change: transform, opacity; }
        @keyframes charFadeUp { from { opacity: 0.01; transform: translate3d(0, 28px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        .char-tag { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px; color: var(--saffron-dark); font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; }
        .char-tag::before { content: ""; width: 30px; height: 1px; background: var(--saffron); }
        .char-title { margin: 0 0 14px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: clamp(42px, 7vw, 88px); font-weight: 300; line-height: 1.05; }
        .char-title em, .char-section-title em { color: var(--gold); font-style: italic; }
        .char-subtitle { max-width: 600px; margin: 0 0 36px; color: black; font-size: 15px; font-weight: 300; line-height: 1.75; }
        .char-stats { display: grid; grid-template-columns: repeat(4, 1fr); background: linear-gradient(90deg, var(--saffron-dark), var(--saffron)); padding: 28px 5%; }
        .char-stat { text-align: center; border-right: 1px solid rgba(255,255,255,0.2); }
        .char-stat:last-child { border-right: 0; }
        .char-stat strong { display: block; color: white; font-family: "Cormorant Garamond", serif; font-size: 38px; line-height: 1; }
        .char-stat span { color: rgba(255,255,255,0.82); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .char-section { padding: clamp(64px, 8vw, 110px) 5%; }
        .char-section.alt { background: rgba(249,115,22,0.04); }
        .char-wrap { max-width: 1200px; margin: 0 auto; }
        .char-two { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
        .char-section-title { margin: 0 0 16px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: clamp(34px, 4.8vw, 58px); font-weight: 400; line-height: 1.15; }
        .char-rule { width: 60px; height: 1px; margin: 24px 0; background: var(--gold); }
        .char-body { max-width: 650px; color: rgba(17,24,39,0.75); font-size: 15px; font-weight: 300; line-height: 1.82; }
        .char-photo-main { width: 100%; height: 520px; border-radius: 4px; object-fit: cover; filter: brightness(0.86) saturate(1.08); }
        .char-intro-visual { position: relative; }
        .char-photo-float { position: absolute; right: -30px; bottom: -30px; width: 200px; height: 200px; border: 4px solid #ffffff; border-radius: 4px; object-fit: cover; }
        .char-quote { margin-top: 34px; padding: 22px 26px; border-left: 2px solid var(--saffron); background: rgba(232,135,26,0.06); color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 20px; font-style: italic; line-height: 1.55; }
        .char-center { max-width: 700px; margin: 0 auto 56px; text-align: center; }
        .char-center .char-tag { justify-content: center; }
        .char-center .char-rule { margin-left: auto; margin-right: auto; }
        .char-dhams { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .char-dham-card { position: relative; min-height: 480px; overflow: hidden; }
        .char-dham-card img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.58) saturate(1.1); transition: transform 0.65s, filter 0.65s; }
        .char-dham-card:hover img { transform: scale(1.07); filter: brightness(0.75) saturate(1.2); }
        .char-dham-copy { position: absolute; inset: auto 0 0; padding: 28px; background: linear-gradient(to top, rgba(26,18,8,0.95), transparent); }
        .char-dham-num { color: rgba(212,175,106,0.28); font-family: "Cormorant Garamond", serif; font-size: 56px; line-height: 1; }
        .char-dham-name { color: #ffffff; font-family: "Cormorant Garamond", serif; font-size: 27px; font-weight: 500; }
        .char-dham-desc { color: var(--saffron); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .char-dham-detail { margin-top: 10px; color: rgba(255, 255, 255, 0.8); font-size: 13px; line-height: 1.6; }
        .char-light { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: #ffffff; }
        .char-light .char-section-title { color: #ffffff; }
        .char-light .char-body { color: rgba(255,255,255,0.95); }
        .char-light .char-features li { border-bottom: 1px solid rgba(255,255,255,0.15); }
        .char-light .char-features h3 { color: #ffffff; }
        .char-light .char-features p { color: rgba(255,255,255,0.8); }
        .char-light .char-feature-icon { background: rgba(255,255,255,0.15); color: #ffffff; }
        .char-features { margin-top: 36px; list-style: none; padding: 0; }
        .char-features li { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(17,24,39,0.1); }
        .char-feature-icon { display: grid; place-items: center; width: 40px; height: 40px; flex: none; border-radius: 3px; background: rgba(232,135,26,0.12); }
        .char-features h3 { margin: 0 0 4px; color: var(--cream); font-size: 15px; font-weight: 500; }
        .char-features p { margin: 0; color: var(--smoke); font-size: 13px; line-height: 1.55; }
        .char-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; }
        .char-step { text-align: center; }
        .char-step-dot { display: grid; place-items: center; width: 58px; height: 58px; margin: 0 auto 14px; border: 1px solid rgba(212,175,106,0.4); border-radius: 999px; background: var(--ink-mid); font-size: 22px; transition: transform 0.3s, background 0.3s; }
        .char-step:hover .char-step-dot { transform: translateY(-6px); background: var(--saffron); color: white; }
        .char-step h3 { margin: 0 0 6px; color: var(--cream); font-size: 13px; font-weight: 500; }
        .char-step p { margin: 0; color: var(--smoke); font-size: 12px; line-height: 1.5; }
        .char-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 260px 260px; grid-auto-rows: 260px; gap: 4px; }
        .char-gallery div { overflow: hidden; }
        .char-gallery div:first-child { grid-row: span 2; }
        .char-gallery div:nth-child(5) { grid-column: span 2; }
        .char-gallery img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.82) saturate(1.1); transition: transform 0.5s; }
        .char-gallery img:hover { transform: scale(1.06); }
        .char-testimonial { padding: 80px 5%; background: linear-gradient(90deg, var(--saffron-dark), var(--saffron)); text-align: center; }
        .char-testimonial blockquote { max-width: 850px; margin: 0 auto 22px; color: white; font-family: "Cormorant Garamond", serif; font-size: clamp(23px, 3vw, 36px); font-style: italic; line-height: 1.5; }
        .char-testimonial p { color: rgba(255,255,255,0.82); font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; }
        .char-faq { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; }
        .char-faq-item { border-bottom: 1px solid rgba(249,115,22,0.16); }
        .char-faq-q { width: 100%; display: flex; justify-content: space-between; gap: 16px; padding: 20px 0; border: 0; background: transparent; color: var(--cream); text-align: left; font-size: 15px; cursor: pointer; }
        .char-faq-q span { display: grid; place-items: center; width: 24px; height: 24px; flex: none; border: 1px solid rgba(249,115,22,0.35); border-radius: 999px; color: var(--gold); transition: transform 0.3s; }
        .char-faq-item.open .char-faq-q span { transform: rotate(45deg); }
        .char-faq-a { display: none; padding-bottom: 20px; color: rgba(17,24,39,0.7); font-size: 14px; line-height: 1.75; }
        .char-faq-item.open .char-faq-a { display: block; }
        .char-cta { position: relative; padding: 110px 5%; overflow: hidden; text-align: center; }
        .char-cta::before { content: ""; position: absolute; inset: 0;  filter: brightness(0.24) saturate(0.85); }
        .char-cta-content { position: relative; max-width: 760px; margin: 0 auto; }
        .char-cta .char-section-title { color: #ffffff; }
        .char-cta .char-body { color: rgba(255, 255, 255, 0.9); }
        .char-footer { padding: 50px 5% 30px; border-top: 1px solid rgba(249,115,22,0.15); background: var(--ink-mid); }
        .char-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 50px; max-width: 1200px; margin: 0 auto 36px; }
        .char-footer h3 { margin: 0 0 12px; color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 24px; letter-spacing: 0.08em; }
        .char-footer p, .char-footer a { color: var(--smoke); font-size: 13px; line-height: 1.75; text-decoration: none; }
        .char-footer a:hover { color: var(--saffron); }
        .char-footer h4 { margin: 0 0 16px; color: var(--saffron); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; }
        .char-footer ul { padding: 0; margin: 0; list-style: none; }
        .char-footer li { margin-bottom: 10px; }
        .char-footer-bottom { display: flex; justify-content: space-between; gap: 20px; max-width: 1200px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(17,24,39,0.07); }
        .char-sticky-wa { position: fixed; right: 28px; bottom: 28px; z-index: 60; display: grid; place-items: center; width: 58px; height: 58px; border-radius: 999px; background: #25d366; box-shadow: 0 4px 24px rgba(37,211,102,0.55); color: white; text-decoration: none; font-size: 25px; }
        .char-reveal { opacity: 0.01; transform: translate3d(0, 28px, 0); transition: opacity 0.7s ease, transform 0.7s ease; }
        .char-visible { opacity: 1; transform: translate3d(0, 0, 0); }
        @media (max-width: 980px) {
          .char-two, .char-faq, .mh-price-card { grid-template-columns: 1fr; }
          .char-dhams, .char-stats { grid-template-columns: 1fr 1fr; }
          .char-steps { grid-template-columns: repeat(3, 1fr); }
          .char-gallery { grid-template-columns: 1fr 1fr; grid-auto-rows: 220px; }
          .char-gallery div:first-child, .char-gallery div:nth-child(5) { grid-row: auto; grid-column: auto; }
          .char-footer-grid { grid-template-columns: 1fr; }
          .char-photo-float { display: none; }
        }
        @media (max-width: 640px) {
          .char-nav { padding: 14px 4%; }
          .char-logo span { font-size: 17px; }
          .char-nav-actions .char-btn-outline { display: none; }
          .char-actions,
          .mh-price-actions {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .char-actions .char-btn,
          .char-actions .char-btn-outline,
          .char-actions .char-btn-wa,
          .mh-price-actions .char-btn,
          .mh-price-actions .char-btn-outline {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .char-nav-actions .char-btn { width: auto; min-height: 40px; padding: 12px 14px; }
          .char-hero { min-height: 92vh; padding: 115px 5% 56px; }
          .char-actions, .mh-price-footer, .mh-price-actions, .char-footer-bottom { flex-direction: column; align-items: stretch; }
          .char-dhams, .char-stats, .char-steps, .char-gallery { grid-template-columns: 1fr; }
          .char-stat { border-right: 0; padding: 12px 0; }
          .char-photo-main { height: 360px; }
          .char-dham-card { min-height: 390px; }
          .mh-day { grid-template-columns: 1fr; gap: 14px; }
          .mh-day::before { display: none; }
          .mh-day > div:first-child { display: flex; flex-direction: column; align-items: center; text-align: center; }
          .mh-price-media { min-height: 260px; }
          .mh-price-body { padding: 30px 26px; }
          .char-sticky-wa { right: 18px; bottom: 18px; }
          .char-title { text-align: center; }
          .char-section-title { text-align: center; }
          .char-subtitle { text-align: center; }
          .char-tag { display: flex; width: 100%; justify-content: center; }
          .char-rule { margin-left: auto; margin-right: auto; }
          .char-light .char-section-title { text-align: center; }
          .char-light .char-tag { display: flex; width: 100%; justify-content: center; }
          .char-light .char-body { text-align: center; margin-left: auto; margin-right: auto; }
          .char-two { text-align: center; }
          .char-two .char-body { text-align: center; margin-left: auto; margin-right: auto; }
          .char-two .char-quote { text-align: center; border-left: none; border-top: 2px solid var(--saffron); border-bottom: 2px solid var(--saffron); padding: 16px 0; }
        }

        /* MAHARASHTRA HERO IMAGE */
        .mh-hero .hero-img {
          position: absolute;
          inset: 0;
          
          transform: scale(1.05);
          animation: mhHeroZoom 12s ease-out forwards;
        }
        @keyframes mhHeroZoom {
          to { transform: scale(1); }
        }
        .mh-hero .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.05) 30%,
            rgba(255, 247, 237, 0.45) 65%,
            rgba(255, 247, 237, 0.92) 100%
          );
        }
        .mh-hero::before, .mh-hero::after {
          content: none !important;
        }
      `}</style>

      <Header />
      <section className="char-hero mh-hero">
        <div className="hero-img"><Image unoptimized={true} src="/Mahamain.png" alt="Hero" fill priority sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>
        <div className="hero-overlay"></div>
        <div className="char-hero-content">
          <div className="char-tag" style={{ fontWeight: 900, fontSize: 14 }}>Bhimashankar · Trimbakeshwar · Grishneshwar</div>
          <h1 className="char-title">Three Jyotirlinga Maharashtra<br /><em>Tour Package</em></h1>
          <p className="char-subtitle" style={{ color: 'var(--black)', fontWeight: 500 }}>A guided pilgrimage to the 3 Jyotirlinga of Maharashtra with Shani Shingnapur, Ellora Caves, and Pune heritage. Planned and coordinated for travellers from Mumbai and Thane.</p>
          <div className="char-actions">
            {/* <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn">Book Now →</a> */}
            <a href="tel:+917208771688" className="char-btn-outline">📞 Call to Book</a>
            <a href={wa("I want to enquire about the Three Jyotirlinga Maharashtra tour package")} className="char-btn-wa">WhatsApp Us</a>
            <a href="/Maharashtra_3_Jyotirlinga.pdf" download="MAHARASHTRA'S (3 Jyotirlinga) MARGIKA YATRA.pdf" className="char-btn-outline">Download Itinerary</a>
          </div>
        </div>
      </section>

      <CharStats />

      <section className="char-section">
        <div className="char-wrap char-two">
          <div className="char-intro-visual char-reveal">
            <img className="char-photo-main" src="/jyoti.jpeg" alt="Three Jyotirlinga Maharashtra Yatra" />
          </div>
          <div className="char-reveal">
            <div className="char-tag">A Sacred Maharashtra Circuit</div>
            <h2 className="char-section-title">Three Jyotirlingas,<br /><em>One Smooth Yatra</em></h2>
            <div className="char-rule" />
            <p className="char-body">This Maharashtra Jyotirlinga route brings together Bhimashankar, Trimbakeshwar, and Grishneshwar with the spiritual stops of Shani Shingnapur, Ellora Caves, Dagdu Seth Ganpati, and Shaniwar Wada.</p>
            <p className="char-body" style={{ marginTop: 16 }}>Margika Yatra coordinates the route, vehicle, stay, and darshan timing so your family can focus on devotion instead of logistics.</p>
            <div className="char-quote">"You bring the dates and your group. We shape the yatra around you."</div>
          </div>
        </div>
      </section>

      <section className="char-section alt">
        <div className="char-wrap">
          <div className="char-center char-reveal">
            <div className="char-tag">The Sacred Route</div>
            <h2 className="char-section-title">The 3 Jyotirlinga<br /><em>of Maharashtra</em></h2>
            <div className="char-rule" />
            <p className="char-body">Each temple has its own energy, route rhythm, and story. Together, they create one of Maharashtra's most loved Shiva circuits.</p>
          </div>
          <div className="char-dhams">
            {jyotirlingas.map((dham, index) => (
              <article className="char-dham-card char-reveal" key={dham.name}>
                <Image unoptimized={true} quality={60} src={dham.image} alt={dham.name}  width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="char-dham-copy">
                  <div className="char-dham-num">{String(index + 1).padStart(2, "0")}</div>
                  <div className="char-dham-name">{dham.name}</div>
                  <div className="char-dham-desc">{dham.desc}</div>
                  <p className="char-dham-detail">{dham.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="char-section mh-complete">
        <div className="char-wrap char-reveal" style={{ maxWidth: 980 }}>
          <div className="char-center" style={{ marginBottom: 36 }}>
            <div className="char-tag">Complete Package</div>
            <h2 className="char-section-title">Maharashtra Three Jyotirlinga<br /><em style={{ color: "#ffffff" }}>Tour from Mumbai & Thane</em></h2>
            <div className="char-rule" />
          </div>
          <p className="char-body">This 3 days / 2 nights journey is designed for families, senior citizens, groups, and Shiva devotees who want all three Jyotirlingas covered without rushing. The route is Pune-based, with support for Mumbai and Thane travellers joining by train, bus, flight, or private plan.</p>
          <p className="char-body" style={{ marginTop: 16 }}>The package keeps the experience practical: comfortable hotel stays, private AC transport, planned point-to-point sightseeing, and clear per-person pricing by group size.</p>
          <div className="char-actions" style={{ justifyContent: "center", marginTop: 34 }}>
            <a href="tel:+917208771688" className="char-btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff" }}>📞 Call Now</a>
            <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn" style={{ background: "transparent", color: "#ffffff", border: "1px solid #ffffff" }}>Book Now →</a>
            <a href="/Maharashtra_3_Jyotirlinga.pdf" download="Maharashtra_3_Jyotirlinga.pdf" className="char-btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff" }}> Download Itinerary</a>
          </div>
        </div>
      </section>

      <section className="char-section">
        <div className="char-center char-reveal">
          <div className="char-tag">Detailed Itinerary</div>
          <h2 className="char-section-title">Three Days,<br /><em>Clearly Planned</em></h2>
          <div className="char-rule" />
        </div>
        <div className="mh-itinerary">
          {itinerary.map((day, index) => (
            <div className="mh-day char-reveal" key={day.day}>
              <div>
                <div className="mh-dot">{index + 1}</div>
                <div className="mh-daylabel">{day.day}<br />{day.route}</div>
              </div>
              <div className="mh-itin-card">
                <h3>{day.title}</h3>
                <div className="mh-route">{day.route}</div>
                <ul className="mh-list">
                  {day.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="char-section alt">
        <div className="char-center char-reveal">
          <div className="char-tag">Package & Pricing</div>
          <h2 className="char-section-title">Your Maharashtra 3 Jyotirlinga<br /><em>Trip, Fully Sorted</em></h2>
          <div className="char-rule" />
        </div>
        <div className="mh-price-card char-reveal">
          <div className="mh-price-media">
            <Image unoptimized={true} quality={60} src="/mh2.png" alt="Maharashtra 3 Jyotirlinga tour package"  width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="mh-badge">Most Loved</div>
            <div className="mh-cities"><span>BHIMASHANKAR</span><span>TRIMBAKESHWAR</span><span>GRISHNESHWAR</span></div>
          </div>
          <div className="mh-price-body">
            <div>
              <div className="char-tag">3 Days / 2 Nights · Pune-Based · Join from Mumbai / Thane</div>
              <h3 className="mh-price-name">Maharashtra Three Jyotirlinga Tour</h3>
              <p className="mh-price-desc">A guided private-vehicle circuit covering all three Maharashtra Jyotirlingas, Shani Shingnapur, Ellora Caves, Dagdu Seth Ganpati, and Shaniwar Wada with hotel stays and route coordination.</p>
              <div className="mh-tags">
                {["Private AC Transport", "Hotel Stays", "Temple Route Support", "Pune Pickup & Drop", "Family Friendly"].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="mh-price-footer">
              <div>
                <small>Starting from</small>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span className="mh-amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹16,999</span>
                  <span className="mh-amount">₹11,999</span>
                </div>
                <small>/ person</small>
                <span className="mh-note">Per-head cost varies with group size and vehicle. Was <span style={{ textDecoration: 'line-through' }}>₹16,999</span>. Airfare/train not included.</span>
              </div>
              <div className="mh-price-actions">
                <a href="tel:+917208771688" className="char-btn-outline">Call Us</a>
                <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn">Book Now →</a>
                <a href="/Maharashtra_3_Jyotirlinga.pdf" download="MAHARASHTRA'S (3 Jyotirlinga) MARGIKA YATRA.pdf" className="char-btn-outline">Download Itinerary</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mh-table-wrap char-reveal">
          <table className="mh-table">
            <thead><tr><th>Group Size</th><th>Vehicle</th><th>Per Person</th></tr></thead>
            <tbody>{packages.map(([group, vehicle, price]) => <tr key={`${group}-${vehicle}`}><td>{group}</td><td>{vehicle}</td><td>{price}</td></tr>)}</tbody>
          </table>
        </div> */}
      </section>

      <section className="char-section char-light">
        <div className="char-wrap char-two">
          <div className="char-reveal">
            <div className="char-tag" style={{ color: "#ffffff" }}>Why Margika</div>
            <h2 className="char-section-title">Why Mumbai & Thane<br /><em style={{ color: "#ffffff" }}>Travellers Choose Us</em></h2>
            <div className="char-rule" style={{ background: "#ffffff" }} />
            <p className="char-body" style={{ color: "#ffffff", fontWeight: 700 }}>We are based in Thane, so your booking conversation stays local, practical, and personal. You get honest planning, route clarity, and responsive coordination before and during the journey.</p>
            <ul className="char-features">
              {features.map(([icon, title, text]) => (
                <li key={title}>
                  <span className="char-feature-icon">{icon}</span>
                  <div><h3>{title}</h3><p style={{ color: "#ffffff" }}>{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="char-reveal">
            <img className="char-photo-main" src="/2.jpg" alt="Margika Yatra group trip" />
          </div>
        </div>
      </section>

      <section className="char-section alt">
        <div className="char-wrap">
          <div className="char-center char-reveal">
            <div className="char-tag">Simple & Transparent</div>
            <h2 className="char-section-title">How Your <em>Yatra Begins</em></h2>
            <div className="char-rule" />
          </div>
          <div className="char-steps">
            {[["📞", "Inquiry", "Call or WhatsApp your dates"], ["💬", "Consultation", "We understand group size and pace"], ["📋", "Custom Plan", "Quote and itinerary are shared clearly"], ["✅", "Confirmation", "Book with advance payment"], ["🛕", "On-Trip Support", "Coordinator support through the route"]].map(([icon, title, text]) => (
              <div className="char-step char-reveal" key={title}>
                <div className="char-step-dot">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="char-section">
        <div className="char-wrap">
          <div className="char-center char-reveal">
            <div className="char-tag">Memories from Our Trips</div>
            <h2 className="char-section-title">Yatris Who <em>Travelled Before You</em></h2>
          </div>
          <div className="char-gallery">
            {["/1.jpg", "/2.jpg", "/Home1.jpeg", "/Home2.jpeg", "/5.jpg", "/6.jpg", "/Home3.jpeg", "/Home4.jpeg", "/Home5.jpeg", "/Home6.jpg", "/Home7.jpg"].map((image) => (
              <div key={image}><Image unoptimized={true} quality={60} src={image} alt="Margika Yatra travellers"  width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            ))}
          </div>
        </div>
      </section>
      <GoogleReviews />

   <FAQ/>
   
      <section className="char-cta">
        <div style={{position: 'absolute', inset: 0, zIndex: 0}}><img src="/rambg.jpg" alt="Banner" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
        <div className="char-cta-content char-reveal">
          <div className="char-tag">Plan Your Maharashtra Jyotirlinga Yatra</div>
          <h2 className="char-section-title">Book Your Three Jyotirlinga<br /><em>Maharashtra Tour Today</em></h2>
          <p className="char-body" style={{ margin: "0 auto 34px", textAlign: "center", fontWeight: 700 }}>Tell us your dates, group size, and pickup point. Our Mumbai-Thane team will put together a clear itinerary with an honest per-person quote.</p>
          <div className="char-actions" style={{ justifyContent: "center" }}>
            <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn">Book Now →</a>
            <a href={wa("I want to plan the Three Jyotirlinga Maharashtra tour package")} className="char-btn-wa">WhatsApp to Plan</a>

          </div>
        </div>
      </section>

      <Footer />

      <a href={wa("Hi Margika Yatra! I want to enquire about the Three Jyotirlinga Maharashtra tour package")} className="char-sticky-wa" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}


export { MaharashtraJyotirlingDetail };
