"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/ui/newheader"
import { Footer } from "@/components/footer"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"
import { GoogleReviews } from "@/components/ui/google-reviews"
import Link from "next/link"
import Image from "next/image"

function CharDhamDetail() {
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

  const dhams = [
    {
      name: "Yamunotri",
      desc: "Source of River Yamuna",
      detail: "The westernmost shrine, dedicated to Goddess Yamuna. Set at 3,293 m, reached by a scenic 6 km trek from Janki Chatti.",
      image: "/Chardham1.png",
    },
    {
      name: "Gangotri",
      desc: "Origin of the Holy Ganga",
      detail: "Dedicated to Goddess Ganga, situated at 3,100 m. The glacier source Gaumukh lies 19 km further upstream.",
      image: "/Chardham2.png",
    },
    {
      name: "Kedarnath",
      desc: "Sacred Jyotirlinga of Shiva",
      detail: "One of the 12 Jyotirlingas, at 3,583 m. Helicopter options available. The most demanding and most divine of the four dhams.",
      image: "/Chardham3.png",
    },
    {
      name: "Badrinath",
      desc: "Abode of Lord Vishnu",
      detail: "Situated at 3,133 m in the Garhwal Himalayas, this Vishnu temple is accessible by road — most accessible of all four dhams.",
      image: "/Chardham4.png",
    },
  ]

  const packages = [
    {
      name: "Complete Char Dham Yatra Package",
      duration: "12 - 16 Days · Uttarakhand",
      price: "₹26,999",
      originalPrice: "₹31,999",
      badge: "☁ Most Complete",
      image: "/CharDham.jpeg",
      desc: "The full sacred circuit — Yamunotri, Gangotri, Kedarnath & Badrinath. All four dhams, VIP darshan at every shrine, private AC transport, vegetarian meals, and your dedicated Margika coordinator throughout. The most complete pilgrimage journey a Hindu family can undertake.",
      tags: ["VIP Darshan", "AC Transport", "Veg Meals", "Helicopter Option", "All Permits", "Palki & Pony", "Tour Coordinator"],
      featured: true,
    },
    {
      name: "Do Dham Yatra Kedarnath & Badrinath",
      duration: "7 - 9 Days · Uttarakhand",
      price: "₹19,999",
      originalPrice: "₹24,999",
      badge: "☁ Most Popular",
      image: "/Dodham.jpeg",
      desc: "For those with limited time or physical constraints. A spiritually complete alternative — the Jyotirlinga at Kedarnath and the Vishnu temple at Badrinath. Gentle pace, helicopter access, ideal for seniors and families.",
      tags: ["Helicopter Option", "Senior Friendly", "VIP Darshan", "Veg Meals"],
    },
    // {
    //   name: "Kedarnath Helicopter Package",
    //   duration: "5 - 7 Days · Uttarakhand",
    //   price: "₹29,999",
    //   badge: "▾ Premium",
    //   image: "/rambg.jpg",
    //   desc: "The premium choice for those who cannot trek. Helicopter to Kedarnath, VIP darshan, luxury accommodation. Book early — slots are extremely limited every season.",
    //   tags: ["Helicopter Included", "Luxury Hotels", "Priority Darshan"],
    // },
  ]

  const features = [
    ["🙏", "VIP Darshan at All Four Dhams", "Shorter waits, calmer entry, more time in the sanctum — no rushing, no crowds."],
    ["🏨", "Vetted Hotels & Vegetarian Meals", "Hot water, clean rooms, pure sattvic vegetarian food — vetted by us before every season."],
    ["👴", "Senior Citizen–Friendly Planning", "Palki, pony, helicopter, ground-floor rooms, extra coordinator attention — we plan for your comfort."],
    ["💰", "Full Transparency on Pricing", "No hidden costs, no last-minute surprises. What you see is what you pay."],
    ["📍", "Departures from Thane & Mumbai", "We coordinate from Thane railway station and Mumbai airport. Visit our Brahmand office before booking."],
  ]

  const faqs = [
    ["What is included in the Char Dham package?", "All travel from Mumbai/Thane, accommodation, vegetarian meals, private AC transport, VIP darshan assistance, permits, and a dedicated tour coordinator are included. Helicopter at Kedarnath is available as an add-on."],
    ["What is the best time for Char Dham Yatra?", "May–June and September–October are the best months. Temples close for winter from Diwali onward. Book early — slots fill up fast during peak season, especially helicopter bookings."],
    ["Do you provide VIP Darshan?", "Yes. We arrange priority darshan at all four dhams, significantly reducing wait times and letting you experience darshan in a composed, unhurried state — no rushing, no crushing crowds."],
    ["Are packages suitable for senior citizens?", "Absolutely. We offer pony and palki services, helicopter options at Kedarnath, gentle-paced itineraries, ground-floor room requests, and extra coordinator attention for senior travellers."],
    ["How many days does Char Dham take?", "Char Dham takes 12–16 days including travel from Mumbai/Thane. Do Dham (Kedarnath + Badrinath) takes 7–9 days. We also offer customised durations for groups with specific time constraints."],
    ["Do you offer customised family packages?", "Yes. We design itineraries for multi-generational families — from grandparents to children — with appropriate pacing, accommodation, and full support at every step of the journey."],
  ]

  return (
    <div className="char-dham-page">
      <style jsx global>{`
        

        .char-dham-page {
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
        .char-dham-page * { box-sizing: border-box; }
        .char-nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 5%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(249,115,22,0.15);
        }
        .char-logo { display: flex; align-items: center; gap: 12px; color: var(--gold); text-decoration: none; }
        .char-logo img { width: 42px; height: 42px; border-radius: 999px; object-fit: contain; }
        .char-logo span { font-family: "Cormorant Garamond", serif; font-size: 22px; font-weight: 600; letter-spacing: 0.08em; }
        .char-nav-actions { display: flex; gap: 12px; align-items: center; }
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
          transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s;
        }

        .char-actions,
        .char-package-foot > div {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .char-actions .char-btn,
        .char-actions .char-btn-outline,
        .char-actions .char-btn-wa,
        .char-package-foot > div .char-btn,
        .char-package-foot > div .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }
        .char-btn { background: var(--saffron); }
        .char-btn:hover { background: var(--saffron-light); transform: translateY(-2px); }
        .char-btn-outline { border-color: rgba(249,115,22,0.55); background: transparent; color: var(--gold); }
        .char-btn-outline:hover { border-color: var(--gold); background: rgba(249,115,22,0.12); }
        .char-btn-wa { background: #25d366; }
        .char-btn-wa:hover { background: #1eb858; transform: translateY(-2px); }
        .char-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 130px 5% 80px;
          overflow: hidden;
          background-image: url('/CharDham.jpeg');
          background-size: cover;
          background-position: center;
          animation: charZoom 12s ease-out forwards;
        }
        .char-hero::after { z-index: 1;
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,247,237,0.62) 62%, rgba(255,247,237,0.98));
        }
        @keyframes charZoom { from { transform: scale(1.05); } to { transform: scale(1); } }
        .char-hero-content {
          position: relative;
          z-index: 2;
          max-width: 840px;
          animation: charFadeUp 0.8s 0.1s ease forwards; will-change: transform, opacity;
        }
        @keyframes charFadeUp { from { opacity: 0.01; transform: translate3d(0, 28px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        .char-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--saffron);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .char-tag::before { content: ""; width: 30px; height: 1px; background: var(--saffron); }
        .char-title {
          margin: 0 0 14px;
          color: var(--cream);
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(42px, 7vw, 88px);
          font-weight: 300;
          line-height: 1.05;
        }
        .char-title em, .char-section-title em { color: var(--gold); font-style: italic; }
        .char-subtitle {
          max-width: 560px;
          margin: 0 0 36px;
          color: black;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.75;
        }
        .char-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .char-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
        }
        .char-stat { text-align: center; border-right: 1px solid rgba(255,255,255,0.2); }
        .char-stat:last-child { border-right: 0; }
        .char-stat strong {
          display: block;
          color: white;
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          line-height: 1;
        }
        .char-stat span { color: rgba(255,255,255,0.82); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .char-section { padding: clamp(64px, 8vw, 110px) 5%; }
        .char-section.alt { background: rgba(249,115,22,0.04); }
        .char-wrap { max-width: 1200px; margin: 0 auto; }
        .char-two { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
        .char-section-title {
          margin: 0 0 16px;
          color: var(--cream);
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(34px, 4.8vw, 58px);
          font-weight: 400;
          line-height: 1.15;
        }
        .char-rule { width: 60px; height: 1px; margin: 24px 0; background: var(--gold); }
        .char-body { max-width: 650px; color: rgba(17,24,39,0.75); font-size: 15px; font-weight: 300; line-height: 1.82; }
        .char-photo-main { width: 100%; height: 520px; border-radius: 4px; object-fit: cover; filter: brightness(0.86) saturate(1.08); }
        .char-intro-visual { position: relative; }
        .char-photo-float {
          position: absolute;
          right: -30px;
          bottom: -30px;
          width: 200px;
          height: 200px;
          border: 4px solid #ffffff;
          border-radius: 4px;
          object-fit: cover;
          filter: brightness(0.9) saturate(1.2);
        }
        .char-quote {
          margin-top: 34px;
          padding: 24px 28px;
          border-left: 2px solid var(--saffron);
          background: rgba(232,135,26,0.07);
          color: var(--gold);
          font-family: "Cormorant Garamond", serif;
          font-size: 21px;
          font-style: italic;
          line-height: 1.6;
        }
        .char-center { max-width: 680px; margin: 0 auto 56px; text-align: center; }
        .char-center .char-tag { justify-content: center; }
        .char-center .char-rule { margin-left: auto; margin-right: auto; }
        .char-dhams { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .char-dham-card { position: relative; min-height: 480px; overflow: hidden; }
        .char-dham-card img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.58) saturate(1.1); transition: transform 0.65s, filter 0.65s; }
        .char-dham-card:hover img { transform: scale(1.07); filter: brightness(0.75) saturate(1.2); }
        .char-dham-copy {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
          background: linear-gradient(to top, rgba(26,18,8,0.96), rgba(26,18,8,0.2) 62%, transparent);
        }
        .char-dham-num { color: rgba(212,175,106,0.28); font-family: "Cormorant Garamond", serif; font-size: 56px; line-height: 1; }
        .char-dham-name { color: #ffffff; font-family: "Cormorant Garamond", serif; font-size: 27px; font-weight: 500; }
        .char-dham-desc { color: var(--saffron); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .char-dham-detail { margin-top: 10px; color: rgba(255, 255, 255, 0.8); font-size: 13px; line-height: 1.6; }
        .char-packages-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 28px;
          margin-bottom: 48px;
        }
        .char-packages { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .char-package {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(249,115,22,0.22);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
        }
        .char-package:hover { transform: translateY(-6px); border-color: rgba(249,115,22,0.42); box-shadow: 0 20px 60px rgba(249,115,22,0.1); }
        .char-package.featured { grid-column: span 2; display: grid; grid-template-columns: 1.12fr 0.88fr; border-color: rgba(249,115,22,0.55); }
        .char-package-img { position: relative; height: 268px; overflow: hidden; }
        .char-package.featured .char-package-img { height: 480px; }
        .char-package-img img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.86) saturate(1.08); transition: transform 0.6s ease; }
        .char-package:hover .char-package-img img { transform: scale(1.04); }
        .char-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          border-radius: 1px;
          background: var(--saffron);
          padding: 5px 12px;
          color: white;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .char-package-body { display: flex; flex-direction: column; justify-content: space-between; min-height: 336px; padding: 28px 30px 30px; }
        .char-package.featured .char-package-body { min-height: 390px; padding: 34px 32px 30px; }
        .char-duration { color: var(--saffron); font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; }
        .char-package-name { margin: 10px 0 14px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: 28px; font-weight: 500; line-height: 1.12; }
        .char-package.featured .char-package-name { max-width: 420px; font-size: 34px; }
        .char-package-desc { color: rgba(17,24,39,0.75); font-size: 13px; line-height: 1.72; }
        .char-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0 24px; }
        .char-tags span { border: 1px solid rgba(232,135,26,0.45); border-radius: 99px; background: rgba(232,135,26,0.08); color: var(--saffron-dark); padding: 5px 11px; font-size: 10px; }
        .char-package-foot { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .char-price small { display: block; color: var(--smoke); font-size: 10px; }
        .char-price strong { color: var(--gold); font-family: serif; font-size: 30px; font-weight: 400; }
        .char-light { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: #ffffff; }
        .char-light .char-section-title { color: #ffffff; }
        .char-light .char-body { color: rgba(255,255,255,0.85); }
        .char-light .char-features li { border-bottom: 1px solid rgba(255,255,255,0.15); }
        .char-light .char-features h3 { color: #ffffff; }
        .char-light .char-features p { color: rgba(255,255,255,0.8); }
        .char-light .char-feature-icon { background: rgba(255,255,255,0.15); color: #ffffff; }
        .char-features { margin-top: 36px; list-style: none; padding: 0; }
        .char-features li { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(17,24,39,0.1); }
        .char-feature-icon { display: grid; place-items: center; width: 40px; height: 40px; flex: none; border-radius: 3px; background: rgba(232,135,26,0.12); }
        .char-features h3 { margin: 0 0 4px; color: var(--cream); font-size: 15px; font-weight: 500; }
        .char-features p { margin: 0; color: var(--smoke); font-size: 13px; line-height: 1.55; }
        .char-why-visual { position: relative; }
        .char-why-float {
          position: absolute;
          left: -20px;
          bottom: -20px;
          max-width: 420px;
          padding: 24px 28px;
          border-left: 3px solid var(--saffron);
          border-radius: 4px;
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(249,115,22,0.08);
        }
        .char-why-float p { margin: 0 0 4px; color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 18px; font-style: italic; }
        .char-why-float span { color: var(--smoke); font-size: 12px; letter-spacing: 0.08em; }
        .char-steps { display: grid; grid-template-columns: repeat(6, 1fr); gap: 18px; position: relative; }
        .char-steps::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 7%;
          right: 7%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,135,26,0.45) 12%, rgba(232,135,26,0.45) 88%, transparent);
        }
        .char-step { position: relative; z-index: 1; text-align: center; }
        .char-step-dot {
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          border: 1px solid rgba(232,135,26,0.45);
          border-radius: 999px;
          background: var(--ink-mid);
          color: var(--cream);
          font-size: 22px;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .char-step:hover .char-step-dot {
          background: var(--saffron);
          border-color: var(--saffron);
          color: white;
          box-shadow: 0 0 0 1px rgba(232,135,26,0.2);
          transform: scale(1.1);
        }
        .char-step h3 { margin: 0 0 6px; color: var(--cream); font-size: 13px; font-weight: 500; }
        .char-step p { margin: 0; color: var(--smoke); font-size: 12px; line-height: 1.5; }
        .char-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 260px 260px; grid-auto-rows: 260px; gap: 4px; }
        .char-gallery div { overflow: hidden; }
        .char-gallery div:first-child { grid-row: span 2; }
        .char-gallery div:nth-child(5) { grid-column: span 2; }
        .char-gallery img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.82) saturate(1.1); transition: transform 0.5s; }
        .char-gallery img:hover { transform: scale(1.06); }
        .char-testimonial {
          padding: 80px 5%;
          background: linear-gradient(135deg, var(--saffron-dark), var(--saffron), var(--saffron-dark));
          text-align: center;
        }
        .char-testimonial blockquote { max-width: 850px; margin: 0 auto 22px; color: white; font-family: "Cormorant Garamond", serif; font-size: clamp(23px, 3vw, 36px); font-style: italic; line-height: 1.5; }
        .char-testimonial p { color: rgba(255,255,255,0.82); font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; }
        .char-faq { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; }
        .char-faq-item { border-bottom: 1px solid rgba(249,115,22,0.16); }
        .char-faq-q { width: 100%; display: flex; justify-content: space-between; gap: 16px; padding: 20px 0; border: 0; background: transparent; color: var(--cream); text-align: left; font-size: 15px; cursor: pointer; }
        .char-faq-q span { display: grid; place-items: center; width: 24px; height: 24px; flex: none; border: 1px solid rgba(249,115,22,0.35); border-radius: 999px; color: var(--gold); transition: transform 0.3s; }
        .char-faq-item.open .char-faq-q span { transform: rotate(45deg); }
        .char-faq-a { display: none; padding-bottom: 20px; color: rgba(17,24,39,0.7); font-size: 14px; line-height: 1.75; }
        .char-faq-item.open .char-faq-a { display: block; }
        .char-cta {
          position: relative;
          padding: 100px 5%;
          text-align: center;
          overflow: hidden;
          background-image: url('/rambg.jpg');
          background-size: cover;
          background-position: center;
        }
        .char-cta::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(26,18,8,0.9), rgba(26,18,8,0.7)); z-index: 1; }
        .char-cta-content { position: relative; max-width: 760px; margin: 0 auto; z-index: 2; }
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
        .char-footer-bottom { display: flex; justify-content: space-between; gap: 20px; max-width: 1200px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07); }
        .char-sticky-wa { position: fixed; right: 28px; bottom: 28px; z-index: 60; display: grid; place-items: center; width: 58px; height: 58px; border-radius: 999px; background: #25d366; box-shadow: 0 4px 24px rgba(37,211,102,0.55); color: white; text-decoration: none; font-size: 25px; }
        .char-reveal { opacity: 0.01; transform: translate3d(0, 28px, 0); transition: opacity 0.7s ease, transform 0.7s ease; }
        .char-visible { opacity: 1; transform: translate3d(0, 0, 0); }
        @media (max-width: 980px) {
          .char-two, .char-faq { grid-template-columns: 1fr; }
          .char-dhams, .char-packages, .char-stats { grid-template-columns: 1fr 1fr; }
          .char-package.featured { grid-column: span 1; grid-template-columns: 1fr; }
          .char-package.featured .char-package-img { height: 280px; }
          .char-package.featured .char-package-body { min-height: auto; }
          .char-steps { grid-template-columns: repeat(3, 1fr); }
          .char-steps::before { display: none; }
          .char-gallery { grid-template-columns: 1fr 1fr; grid-auto-rows: 220px; }
          .char-gallery div:first-child, .char-gallery div:nth-child(5) { grid-row: auto; grid-column: auto; }
          .char-footer-grid { grid-template-columns: 1fr; }
          .char-photo-float { display: none; }
          .char-why-float { position: static; margin-top: 16px; }
        }
        @media (max-width: 640px) {
          .char-nav { padding: 14px 4%; }
          .char-logo span { font-size: 17px; }
          .char-nav-actions .char-btn-outline { display: none; }
          .char-actions,
          .char-package-foot > div {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .char-actions .char-btn,
          .char-actions .char-btn-outline,
          .char-actions .char-btn-wa,
          .char-package-foot > div .char-btn,
          .char-package-foot > div .char-btn-outline {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .char-nav-actions { gap: 8px; }
          .char-nav-actions .char-btn, .char-nav-actions .char-btn-outline { width: auto; min-height: 40px; padding: 12px 14px; }
          .char-hero { min-height: 92vh; padding: 115px 5% 56px; }
          .char-actions, .char-package-foot, .char-packages-head, .char-footer-bottom { flex-direction: column; align-items: stretch; }
          .char-dhams, .char-packages, .char-stats, .char-steps, .char-gallery { grid-template-columns: 1fr; }
          .char-stat { border-right: 0; padding: 12px 0; }
          .char-photo-main { height: 360px; }
          .char-dham-card { min-height: 390px; }
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
          .char-packages-head { text-align: center; }
          .char-packages-head p { margin: 0 auto; }
        }
      `}</style>


      <Header />

      {/* <section className="char-hero">
        <div className="char-hero-content">
          <div className="char-tag" style={{ fontWeight: 700, fontSize: 14 }}>Sacred Himalayan Pilgrimage</div>
          <h1 className="char-title">Char Dham &<br /><em>Do Dham Yatra</em></h1>
          <p className="char-subtitle" style={{ color: 'var(--black)', fontWeight: 400 }}>Plan your sacred Himalayan pilgrimage with confidence — departing from Mumbai & Thane. VIP darshan, expert coordinators, senior-friendly packages.</p>
          <div className="char-actions">
            <a href="tel:+917208771688" className="char-btn">📞 Call to Book</a>
            <a href={wa("I want to enquire about Char Dham Yatra")} className="char-btn-wa">WhatsApp Us</a>
         
            <a href="/Margika_yatra_Chardham_Yatra_2026.pdf" download="Margika_yatra_Chardham_Yatra_2026.pdf" className="char-btn">Download Itinerary</a>
          </div>
        </div>
      </section> */}

      <CharStats />

      <section className="char-section">
        <div className="char-wrap char-two">
          <div className="char-intro-visual char-reveal">
            <img
              className="char-photo-main"
              src="/4dham.png"
              alt="Char Dham Yatra"
            />
            <img
              className="char-photo-float"
              src="/1.jpg"
              alt="Margika Yatra pilgrims"
            />
          </div>
          <div className="char-reveal">
            <div className="char-tag">A Once-in-a-Lifetime Journey</div>
            <h2 className="char-section-title">The Char Dham<br /><em>Yatra</em></h2>
            <div className="char-rule" />
            <p className="char-body">Yamunotri, Gangotri, Kedarnath, Badrinath — four shrines, one sacred circuit that Hindus have walked for centuries. Completing the Char Dham Yatra is not just a journey across Uttarakhand; it is a journey inward.</p>
            <p className="char-body" style={{ marginTop: 16 }}>The Himalayan terrain, altitude, seasonal permits, and helicopter bookings can quickly overwhelm even the most prepared traveller. That is precisely why yatris across India trust Margika Yatra — so they can focus entirely on their faith.</p>
            <div className="char-quote">"We handle every detail. You carry only your devotion."</div>
          </div>
        </div>
      </section>

      <section className="char-section alt">
        <div className="char-wrap">
          <div className="char-center char-reveal">
            <div className="char-tag">The Sacred Circuit</div>
            <h2 className="char-section-title">Four Shrines,<br /><em>One Eternal Path</em></h2>
            <div className="char-rule" />
            <p className="char-body">Each dham represents a cardinal direction and a divine energy. Together, they form the most sacred circuit in Hinduism.</p>
          </div>
          <div className="char-dhams">
            {dhams.map((dham, index) => (
              <article className="char-dham-card" key={dham.name}>
                <Image unoptimized={true} quality={60} src={dham.image} alt={dham.name} width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

      <section className="char-section">
        <div className="char-wrap">
          <div className="char-packages-head char-reveal">
            <div>
              <div className="char-tag">Our Offerings</div>
              <h2 className="char-section-title">Choose Your<br /><em>Sacred Journey</em></h2>
            </div>
            <p className="char-body" style={{ maxWidth: 340 }}>All packages depart from Mumbai & Thane. Customisation available for all group sizes.</p>
          </div>
          <div className="char-packages">
            {packages.map((item) => (
              <article className={`char-package char-reveal ${item.featured ? "featured" : ""}`} key={item.name}>
                <div className="char-package-img">
                  <Image unoptimized={true} quality={60} src={item.image} alt={item.name} width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="char-badge">{item.badge}</div>
                </div>
                <div className="char-package-body">
                  <div>
                    <div className="char-duration">{item.duration}</div>
                    <h3 className="char-package-name">{item.name}</h3>
                    <p className="char-package-desc">{item.desc}</p>
                    <div className="char-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="char-package-foot">
                    <div className="char-price">
                      <small>Starting from</small>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '20px', fontWeight: 500 }}>{item.originalPrice}</span>
                        <strong>{item.price}</strong>
                      </div>
                      <small style={{ display: "inline" }}>/ person</small>
                    </div>
                    {item.featured ? (
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <a href="tel:+917208771688" className="char-btn-outline">Call Us</a>
                        <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn">Book Now →</a>
                        <a href="/Margika_yatra_Chardham_Yatra_2026.pdf" download="Margika_yatra_Chardham_Yatra_2026.pdf" className="char-btn-outline">Download Itinerary</a>

                      </div>
                    ) : (
                      <a href={wa(`I want to enquire about ${item.name}`)} className="char-btn">Enquire →</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="char-reveal" style={{ marginTop: 40, textAlign: "center" }}>
            <p className="char-body" style={{ margin: "0 auto 16px" }}>Need a custom package for your family, group, or temple sangat?</p>
            <Link prefetch={true} href="/personalized-trip" className="char-btn-outline">Customise My Yatra</Link>
          </div>
        </div>
      </section>

      <section className="char-section char-light">
        <div className="char-wrap char-two">
          <div className="char-reveal">
            <div className="char-tag" style={{ color: "#ffffff" }}>Why Choose Us</div>
            <h2 className="char-section-title">Why Mumbai & Thane<br /><em style={{ color: "#ffffff" }}>Yatris Choose Margika</em></h2>
            <div className="char-rule" style={{ background: "#ffffff" }} />
            <p className="char-body" style={{ fontWeight: 700, color: "#ffffff" }}>We are based in Brahmand, Thane — when you call us, you speak to a local who understands your community, your expectations, and your schedule. That local trust is something no national online operator can replicate.</p>
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
            <div className="char-why-visual">
              <img className="char-photo-main" src="/2.jpg" alt="Margika Yatra group pilgrimage" />
              <div className="char-why-float">
                <p>"Many yatris return telling us this felt like the most complete journey of their lives."</p>
                <span>— Margika Yatra Team</span>
              </div>
            </div>
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
            {[
              ["📞", "Inquiry", "Call, WhatsApp, or fill our online form"],
              ["💬", "Consultation", "We understand your group, dates & needs within 24 hrs"],
              ["📋", "Customisation", "Itinerary built around you, with clear pricing"],
              ["✅", "Confirmation", "Secure your spot with a simple advance payment"],
              ["🛕", "On-Trip Support", "Coordinator with you; 24x7 WhatsApp assistance"],
              ["🙌", "Post-Yatra", "We check in once you are safely home"],
            ].map(([icon, title, text]) => (
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
            <div className="char-tag">Memories from the Mountains</div>
            <h2 className="char-section-title">Yatris Who <em>Walked Before You</em></h2>
          </div>
          <div className="char-gallery">
            {["/1.jpg", "/2.jpg", "/Home1.jpeg", "/Home2.jpeg", "/5.jpg", "/6.jpg", "/Home3.jpeg", "/Home4.jpeg", "/Home5.jpeg", "/Home6.jpg", "/Home7.jpg"].map((image) => (
              <div key={image}><Image unoptimized={true} quality={60} src={image} alt="Margika Yatra pilgrims" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            ))}
          </div>
        </div>
      </section>
      <GoogleReviews />

      <FAQ />

      <section className="char-cta">
        <div className="char-cta-content char-reveal">
          <div className="char-tag">Yatra Season Fills Up Fast</div>
          <h2 className="char-section-title">Secure Your Sacred<br /><em>Spot Today</em></h2>
          <p className="char-body" style={{ margin: "0 auto 34px", textAlign: "center", fontWeight: 700 }}>Char Dham 2026 slots — especially helicopters — are extremely limited. Reach out today to check availability for your dates and group size.</p>
          <div className="char-actions" style={{ justifyContent: "center" }}>
            <a href="tel:+917208771688" className="char-btn">📞 Call Now — +91 72087 71688</a>
            <a href={wa("I want to check Char Dham availability for 2026")} className="char-btn-wa">WhatsApp to Check Availability</a>
          </div>
        </div>
      </section>

      <Footer />

      <a href={wa("Hi Margika Yatra! I want to enquire about Char Dham Yatra")} className="char-sticky-wa" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}




export { CharDhamDetail };
