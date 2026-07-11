"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"

export function DevDeepawaliDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeDay, setActiveDay] = useState<string>("day1")
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

    // Floating particles setup
    const container = document.getElementById("heroParticles")
    if (container) {
      container.innerHTML = "" // Clear standard content
      const particleCount = 25
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div")
        p.className = "particle"
        p.style.left = Math.random() * 100 + "%"
        p.style.animationDelay = Math.random() * 10 + "s"
        p.style.animationDuration = 6 + Math.random() * 8 + "s"
        container.appendChild(p)
      }
    }

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
    document.title = "Dev Deepawali Tour Package from Mumbai & Thane | Varanasi Dev Diwali 2026 | Margika Yatra"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Join Margika Yatra's Dev Deepawali tour package from Mumbai & Thane. Witness the magical Ganga Aarti, Mangala Aarti at Kashi Vishwanath & Dev Diwali celebrations in Varanasi 2026. Book now."
      )
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  return (
    <>
      <div className="dd-page">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap");

        .dd-page {
          --saffron: #f97316;
          --saffron-light: #fdba74;
          --saffron-dark: #ea580c;
          --gold: #c2410c;
          --gold-light: #fed7aa;
          --cream: #111827;
          --cream-warm: #fcf6ec;
          --ink: #ffffff;
          --ink-mid: #fff7ed;
          --ink-light: #fed7aa;
          --smoke: #4b5563;
          --white: #ffffff;
          --deep-blue: #0d1b3e;
          --section-pad: clamp(60px, 8vw, 120px);

          background: linear-gradient(to bottom right, #ffffff, #fff7ed, #ffedd5);
          color: var(--cream);
          font-family: "Jost", sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .dd-page * {
          box-sizing: border-box;
        }
          .dd-page *:not(header, header *, footer, footer *, .char-stats-wrapper, .char-stats-wrapper *) { margin: 0; padding: 0; }

        /* SCROLLBAR */
        .dd-page ::-webkit-scrollbar {
          width: 4px;
        }
        .dd-page ::-webkit-scrollbar-track {
          background: var(--ink-mid);
        }
        .dd-page ::-webkit-scrollbar-thumb {
          background: var(--saffron);
          border-radius: 2px;
        }



        /* HERO */
        .dd-page .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          background: url('/rambg.jpg') center/cover no-repeat;
          padding-top: 130px;
        }
        .dd-page .hero-img {
          position: absolute;
          inset: 0;
          background: url("/devmain.png")
            center/cover no-repeat;
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom {
          to {
            transform: scale(1);
          }
        }
        .dd-page .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.1) 30%,
            rgba(255, 247, 237, 0.65) 65%,
            rgba(255, 247, 237, 0.98) 100%
          );
        }
        /* Diyas floating particles */
        .dd-page .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .dd-page .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffd700, #ff8c00);
          box-shadow: 0 0 12px 4px rgba(255, 180, 0, 0.6);
          animation: float linear infinite;
          opacity: 0;
        }
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20vh) scale(1);
            opacity: 0;
          }
        }

        .dd-page .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 5% 80px;
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
        .dd-page .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 20px;
        }
        .dd-page .hero-tag::before {
          content: "";
          display: block;
          width: 30px;
          height: 1px;
          background: var(--saffron);
        }
        .dd-page .hero-event-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.35);
          padding: 7px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: var(--gold);
        }
        .dd-page .hero-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(42px, 6.5vw, 82px);
          font-weight: 300;
          line-height: 1.08;
          color: var(--cream);
          margin-bottom: 14px;
        }
        .dd-page .hero-title em {
          color: var(--gold);
          font-style: italic;
        }
        .dd-page .hero-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: rgba(17, 24, 39, 0.75);
          margin-bottom: 40px;
          max-width: 560px;
          line-height: 1.75;
        }
        .dd-page .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Global uniform button sizing */
        .dd-page .btn-primary,
        .dd-page .btn-secondary,
        .dd-page .btn-wa,
        .dd-page .btn-book,
        .dd-page .btn-book-outline,
        .dd-page .char-btn-outline {
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

        .dd-page .hero-ctas,
        .dd-page .cta-buttons {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }
        .dd-page .price-actions {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
          flex-wrap: nowrap !important;
        }
        .dd-page .hero-ctas .btn-primary,
        .dd-page .hero-ctas .btn-wa,
        .dd-page .hero-ctas .btn-secondary,
        .dd-page .hero-ctas .char-btn-outline,
        .dd-page .price-actions .btn-primary,
        .dd-page .price-actions .btn-secondary,
        .dd-page .price-actions .char-btn-outline,
        .dd-page .cta-buttons .btn-primary,
        .dd-page .cta-buttons .btn-wa,
        .dd-page .cta-buttons .btn-secondary,
        .dd-page .cta-buttons .char-btn-outline {
          flex: 1 !important;
          max-width: 320px !important;
          text-align: center !important;
        }
        .dd-page .btn-primary {
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
        .dd-page .btn-primary::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.15);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .dd-page .btn-primary:hover::after {
          opacity: 1;
        }
        .dd-page .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(232, 135, 26, 0.4);
        }
        .dd-page .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: var(--saffron);
          padding: 16px 32px;
         border-radius: 2px;
          border: 1px solid var(--saffron);
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .dd-page .btn-secondary:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        .dd-page .btn-wa {
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
        .dd-page .btn-wa:hover {
          background: #1eb858;
          transform: translateY(-2px);
        }
        .dd-page .btn-wa svg {
          width: 18px;
          height: 18px;
          fill: white;
        }

        /* STATS */
        .dd-page .stats-strip {
          position: relative;
          z-index: 3;
          background: linear-gradient(90deg, var(--saffron-dark), var(--saffron));
          padding: 28px 5%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .dd-page .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dd-page .stat-item:last-child {
          border-right: none;
        }
        .dd-page .stat-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          font-weight: 600;
          color: var(--white);
          line-height: 1;
        }
        .dd-page .stat-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 4px;
        }

        /* SECTION SHARED */
        .dd-page section {
          padding: var(--section-pad) 5%;
        }
        .dd-page .section-tag {
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
        .dd-page .section-tag::before {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background: var(--saffron);
        }
        .dd-page .section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--cream);
          margin-bottom: 16px;
        }
        .dd-page .section-title em {
          color: var(--gold);
          font-style: italic;
        }
        .dd-page .section-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(17, 24, 39, 0.75);
          max-width: 620px;
        }
        .dd-page .gold-rule {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 24px 0;
        }

        /* INTRO GRID */
        .dd-page .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .dd-page .intro-visual {
          position: relative;
        }
        .dd-page .intro-img-main {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 4px;
          filter: brightness(0.88) saturate(1.2);
        }
        .dd-page .intro-img-float {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
          border: 4px solid var(--ink);
          filter: brightness(0.9) saturate(1.3);
        }
        .dd-page .intro-quote {
          margin-top: 40px;
          padding: 24px 28px;
          border-left: 2px solid var(--saffron);
          background: rgba(232, 135, 26, 0.06);
          border-radius: 0 4px 4px 0;
        }
        .dd-page .intro-quote p {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 300;
          color: var(--gold);
          line-height: 1.6;
        }

        /* HIGHLIGHT MOMENTS */
        .dd-page .highlights-section {
          background: rgba(249, 115, 22, 0.03);
        }
        .dd-page .highlights-header {
          text-align: center;
          max-width: 640px;
          margin: 100px auto 60px;
          padding-top: 80px;
        }
        .dd-page .highlights-header .gold-rule {
          margin: 24px auto;
        }
        .dd-page .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .dd-page .hl-card {
          position: relative;
          height: 420px;
          overflow: hidden;
          cursor: default;
        }
        .dd-page .hl-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.55) saturate(1.2);
        }
        .dd-page .hl-card:hover img {
          transform: scale(1.08);
          filter: brightness(0.72) saturate(1.3);
        }
        .dd-page .hl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(26, 18, 8, 0.96) 0%,
            rgba(26, 18, 8, 0.15) 65%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
        }
        .dd-page .hl-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 52px;
          font-weight: 300;
          color: rgba(212, 175, 106, 0.22);
          line-height: 1;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform 0.5s, color 0.5s;
        }
        .dd-page .hl-card:hover .hl-num {
          color: rgba(212, 175, 106, 0.5);
          transform: translateY(0);
        }
        .dd-page .hl-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .dd-page .hl-tag {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--saffron);
          text-transform: uppercase;
        }
        .dd-page .hl-detail {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 8px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s, opacity 0.4s;
          opacity: 0;
          line-height: 1.6;
        }
        .dd-page .hl-card:hover .hl-detail {
          max-height: 100px;
          opacity: 1;
        }

        /* PACKAGE PRICING */
        .dd-page .price-section { background: rgba(249, 115, 22, 0.02); }
        .dd-page .price-header { text-align: center; max-width: 660px; margin: 100px auto 50px; padding-top: 80px; }
        .dd-page .price-header .gold-rule { margin: 24px auto; }
        .dd-page .price-card {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1.1fr 1fr;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.06);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .dd-page .price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 50px rgba(249, 115, 22, 0.1); }
        .dd-page .price-card-media { position: relative; min-height: 440px; overflow: hidden; }
        .dd-page .price-card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.6s; }
        .dd-page .price-card:hover .price-card-media img { transform: scale(1.05); }
        .dd-page .price-badge {
          position: absolute; top: 18px; left: 18px;
          background: var(--saffron); color: var(--white);
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 2px;
        }
        .dd-page .price-media-cities { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; gap: 8px; flex-wrap: wrap; }
        .dd-page .price-media-cities span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          color: var(--white); background: rgba(26,18,8,0.6);
          border: 1px solid rgba(212,175,106,0.4);
          padding: 6px 14px; border-radius: 2px; backdrop-filter: blur(4px);
        }
        .dd-page .price-card-body { padding: 40px 42px; display: flex; flex-direction: column; justify-content: space-between; }
        .dd-page .price-card-body .pkg-duration { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--saffron); margin-bottom: 10px; }
        .dd-page .price-card-body .pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 500; color: var(--cream); margin-bottom: 14px; line-height: 1.15; }
        .dd-page .price-card-body .pkg-desc { font-size: 14px; color: var(--smoke); line-height: 1.75; margin-bottom: 22px; }
        .dd-page .price-card-body .pkg-includes { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; }
        .dd-page .price-card-body .pkg-tag { font-size: 11px; padding: 5px 12px; border-radius: 20px; background: rgba(249, 115, 22, 0.08); color: var(--gold); border: 1px solid rgba(249, 115, 22, 0.2); }
        .dd-page .price-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: auto; }
        .dd-page .price-amount-wrap { display: flex; flex-direction: column; }
        .dd-page .price-from { font-size: 11px; color: var(--smoke); letter-spacing: 0.06em; }
        .dd-page .price-amount { font-family: serif; font-size: 44px; color: var(--gold); line-height: 1.1; }
        .dd-page .price-per { font-size: 13px; color: var(--smoke); margin-top: -4px; }
        .dd-page .price-note { font-size: 11px; color: var(--smoke); margin-top: 8px; max-width: 240px; line-height: 1.5; }
        .dd-page .price-actions { display: flex; gap: 12px; align-items: center; }

        /* ITINERARY */
        .dd-page .itinerary-section {
          max-width: 1200px;
          margin: 100px auto;
          padding-top: 60px;
        }
        .dd-page .itin-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 50px;
        }
        .dd-page .itin-header .gold-rule {
          margin: 24px auto;
        }
        .dd-page .itin-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .dd-page .day-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .dd-page .day-tab {
          padding: 8px 20px;
          border-radius: 2px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(249, 115, 22, 0.25);
          color: var(--smoke);
          cursor: pointer;
          transition: all 0.3s;
          background: transparent;
        }
        .dd-page .day-tab.active {
          background: var(--saffron);
          color: white;
          border-color: var(--saffron);
        }
        .dd-page .day-tab:hover:not(.active) {
          border-color: var(--gold);
          color: var(--gold);
        }
        .dd-page .day-panel {
          display: none;
        }
        .dd-page .day-panel.active {
          display: block;
        }
        .dd-page .day-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 8px;
        }
        .dd-page .day-subtitle {
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--saffron);
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .dd-page .activity-list {
          list-style: none;
        }
        .dd-page .activity-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(249, 115, 22, 0.1);
          }
        .dd-page .activity-item:last-child {
          border-bottom: none;
        }
        .dd-page .activity-dot {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: rgba(232, 135, 26, 0.12);
          border: 1px solid rgba(232, 135, 26, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .dd-page .activity-text {
          font-size: 14px;
          color: rgba(17, 24, 39, 0.8);
          line-height: 1.6;
        }
        .dd-page .activity-text strong {
          color: var(--cream);
          font-weight: 500;
        }

        .dd-page .itin-img-stack {
          position: relative;
        }
        .dd-page .itin-img-main {
          width: 100%;
          height: 740px;
          object-fit: cover;
          border-radius: 4px;
          filter: brightness(0.82) saturate(1.2);
        }
        .dd-page .itin-img-secondary {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 4px;
          filter: brightness(0.82) saturate(1.15);
          margin-top: 4px;
        }
        .dd-page .itin-ctas {
          display: flex;
          gap: 10px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        /* INCLUSIONS */
        .dd-page .inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px;
          max-width: 1200px;
          margin: 40px auto 0;
        }
        .dd-page .inc-card {
          padding: 32px 36px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(249, 115, 22, 0.15);
          box-shadow: 0 10px 30px rgba(249,115,22,0.04);
          transition: border-color 0.3s, transform 0.3s;
        }
        .dd-page .inc-card:hover {
          border-color: rgba(232, 135, 26, 0.35);
          transform: translateY(-3px);
        }
        .dd-page .inc-icon {
          font-size: 28px;
          margin-bottom: 14px;
        }
        .dd-page .inc-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: var(--cream);
          margin-bottom: 6px;
        }
        .dd-page .inc-desc {
          font-size: 13px;
          color: var(--smoke);
          line-height: 1.65;
        }

        /* WHY Choose US */
        .dd-page .why-section {
          background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%);
          color: var(--ink);
        }
        .dd-page .why-section .section-title {
          color: var(--ink);
        }
        .dd-page .why-section .section-body {
          color: var(--ink-light);
        }
        .dd-page .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 100px auto;
          padding-top: 80px;
        }
        .dd-page .why-visual {
          position: relative;
        }
        .dd-page .why-visual img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 4px;
        }
        .dd-page .why-float-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: var(--ink);
          color: var(--cream);
          padding: 24px 28px;
          border-radius: 4px;
          border-left: 3px solid var(--saffron);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        .dd-page .why-float-card p {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-style: italic;
          color: var(--gold);
        }
        .dd-page .why-float-card span {
          font-size: 12px;
          color: var(--smoke);
          letter-spacing: 0.08em;
        }
        .dd-page .features-list {
          list-style: none;
          margin-top: 40px;
        }
        .dd-page .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(26, 18, 8, 0.1);
          transition: padding-left 0.3s;
        }
        .dd-page .feature-item:hover {
          padding-left: 8px;
        }
        .dd-page .feature-item:last-child {
          border-bottom: none;
        }
        .dd-page .feature-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: rgba(232, 135, 26, 0.1);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .dd-page .feature-text h4 {
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 3px;
        }
        .dd-page .feature-text p {
          font-size: 13px;
          color: var(--smoke);
          line-height: 1.5;
        }

        /* STEPS */
        .dd-page .steps-section {
          background: rgba(255, 255, 255, 0.02);
        }
        .dd-page .steps-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .dd-page .steps-header .gold-rule {
          margin: 20px auto;
        }
        .dd-page .steps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .dd-page .steps-grid::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--saffron), transparent);
        }
        .dd-page .step-item {
          text-align: center;
          padding: 0 10px;
        }
        .dd-page .step-dot {
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
        .dd-page .step-item:hover .step-dot {
          background: var(--saffron);
          border-color: var(--saffron);
          transform: scale(1.1);
        }
        .dd-page .step-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 6px;
        }
        .dd-page .step-desc {
          font-size: 12px;
          color: var(--smoke);
          line-height: 1.5;
        }

        /* GALLERY */
        .dd-page .gallery-strip {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          grid-template-rows: 260px 260px;
          gap: 4px;
          max-width: 1300px;
          margin: 40px auto 0;
        }
        .dd-page .gallery-item {
          overflow: hidden;
          position: relative;
        }
        .dd-page .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.78) saturate(1.15);
          transition: transform 0.5s, filter 0.5s;
        }
        .dd-page .gallery-item:hover img {
          transform: scale(1.06);
          filter: brightness(0.9) saturate(1.3);
        }
        .dd-page .gallery-item:nth-child(1) {
          grid-row: span 2;
        }
        .dd-page .gallery-item:nth-child(5) {
          grid-column: span 2;
        }

        /* TESTIMONIAL */
        .dd-page .testimonial-section {
          background: linear-gradient(135deg, #0d1b3e 0%, #1a2e6b 50%, #0d1b3e 100%);
          text-align: center;
          padding: 80px 5%;
          position: relative;
          overflow: hidden;
        }
        .dd-page .testimonial-section::before {
          content: "🪔";
          font-size: 160px;
          opacity: 0.04;
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
        }
        .dd-page .testimonial-icon {
          font-size: 40px;
          margin-bottom: 20px;
          opacity: 0.6;
        }
        .dd-page .testimonial-text {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 400;
          font-style: italic;
          color: var(--white);
          max-width: 800px;
          margin: 0 auto 24px;
          line-height: 1.5;
        }
        .dd-page .testimonial-author {
          font-size: 13px;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.75);
        }
        .dd-page .testimonial-stars {
          font-size: 18px;
          color: var(--gold-light);
          margin-top: 12px;
          letter-spacing: 4px;
        }

        /* OTHER PACKAGES */
        .dd-page .other-pkgs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 40px auto 0;
        }
        .dd-page .opkg-card {
          border-radius: 4px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(249, 115, 22, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s;
        }
        .dd-page .opkg-card:hover {
          transform: translateY(-5px);
          border-color: rgba(232, 135, 26, 0.35);
          box-shadow: 0 16px 50px rgba(249, 115, 22, 0.08);
        }
        .dd-page .opkg-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          filter: brightness(0.78) saturate(1.1);
          transition: transform 0.5s;
        }
        .dd-page .opkg-card:hover .opkg-img {
          transform: scale(1.04);
        }
        .dd-page .opkg-body {
          padding: 20px 22px 24px;
        }
        .dd-page .opkg-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: var(--cream);
          margin-bottom: 6px;
        }
        .dd-page .opkg-desc {
          font-size: 13px;
          color: var(--smoke);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .dd-page .opkg-link {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--saffron);
          text-decoration: none;
        }
        .dd-page .opkg-link:hover {
          color: var(--gold);
        }

        /* FAQ */
        .dd-page .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 100px auto;
        }
        .dd-page .faq-list {
          margin-top: 40px;
        }
        .dd-page .faq-item {
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          overflow: hidden;
        }
        .dd-page .faq-q {
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
        .dd-page .faq-q:hover {
          color: var(--gold);
        }
        .dd-page .faq-icon {
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
        .dd-page .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }
        .dd-page .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease;
          font-size: 14px;
          color: rgba(17, 24, 39, 0.7);
          line-height: 1.75;
          padding-bottom: 0;
        }
        .dd-page .faq-item.open .faq-a {
          max-height: 220px;
          padding-bottom: 20px;
        }
.dd-page .char-btn-outline {
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

        


        /* CTA BANNER */
        .dd-page .cta-banner {
          position: relative;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background: url('/rambg.jpg') center/cover no-repeat;
        }
        .dd-page .cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Dev_Deepawali_-_Varanasi_Ghats.jpg/1280px-Dev_Deepawali_-_Varanasi_Ghats.jpg")
            center/cover no-repeat;
          filter: brightness(0.2) saturate(0.7);
        }
        .dd-page .cta-banner-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
        }
        .dd-page .cta-banner .section-title {
          text-align: center;
        }
        .dd-page .cta-banner .section-body {
          margin: 0 auto 40px;
          text-align: center;
        }
        .dd-page .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .dd-page .cta-banner .cta-buttons .btn-primary {
          background: #f97316 !important;
          color: var(--white);
        }



        /* STICKY WA */
        .dd-page .sticky-wa {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          transition: transform 0.3s;
        }
        .dd-page .sticky-wa:hover {
          transform: scale(1.1);
        }
        .dd-page .sticky-wa svg {
          width: 28px;
          height: 28px;
          fill: white;
        }

        /* REVEAL PRESET */
        .dd-page .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .dd-page .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .dd-page .reveal-delay-1 {
          transition-delay: 0.15s;
        }
        .dd-page .reveal-delay-2 {
          transition-delay: 0.3s;
        }
        .dd-page .reveal-delay-3 {
          transition-delay: 0.45s;
        }
        .dd-page .reveal-delay-4 {
          transition-delay: 0.6s;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .dd-page .hero-ctas,
          .dd-page .price-actions,
          .dd-page .complete-ctas,
          .dd-page .cta-buttons,
          .dd-page .itin-ctas {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 10px !important;
            padding: 0 20px !important;
            box-sizing: border-box !important;
          }
          .dd-page .hero-ctas .btn-primary,
          .dd-page .hero-ctas .btn-wa,
          .dd-page .hero-ctas .btn-secondary,
          .dd-page .hero-ctas .char-btn-outline,
          .dd-page .price-actions .btn-primary,
          .dd-page .price-actions .btn-secondary,
          .dd-page .price-actions .char-btn-outline,
          .dd-page .complete-ctas .btn-dark,
          .dd-page .cta-buttons .btn-primary,
          .dd-page .cta-buttons .btn-wa,
          .dd-page .cta-buttons .btn-secondary,
          .dd-page .cta-buttons .char-btn-outline,
          .dd-page .itin-ctas .btn-primary,
          .dd-page .itin-ctas .btn-wa,
          .dd-page .itin-ctas .btn-secondary {
            width: 100% !important;
            max-width: 420px !important;
            flex: none !important;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .dd-page .intro-grid,
          .dd-page .why-grid,
          .dd-page .faq-grid,
          .dd-page .itin-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .dd-page .highlights-grid {
            grid-template-columns: 1fr 1fr;
          }
          .dd-page .steps-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .dd-page .steps-grid::before {
            display: none;
          }
          .dd-page .stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 2px;
          }
          .dd-page .other-pkgs {
            grid-template-columns: 1fr;
          }
          .dd-page .gallery-strip {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 8px;
          }
          .dd-page .gallery-item:nth-child(1) {
            grid-row: auto;
          }
          .dd-page .gallery-item:nth-child(5) {
            grid-column: auto;
          }
          .dd-page .gallery-item {
            height: 240px;
          }
          .dd-page .inclusions-grid {
            grid-template-columns: 1fr;
          }

          .dd-page .price-card {
            grid-template-columns: 1fr;
          }
          .dd-page .price-card-media {
            min-height: 260px;
          }
          .dd-page .intro-img-float {
            display: none;
          }
          .dd-page .why-float-card {
            display: none;
          }

          /* Mobile Center Alignment for headings */
          .dd-page .hero-content { text-align: center; }
          .dd-page .hero-tag, .dd-page .hero-event-badge { display: flex; width: 100%; justify-content: center; }
          .dd-page .hero-subtitle { margin-left: auto; margin-right: auto; }
          .dd-page .hero-ctas { justify-content: center; }

          .dd-page .intro-grid .reveal:last-child { text-align: center; }
          .dd-page .intro-grid .section-tag { display: flex; width: 100%; justify-content: center; }
          .dd-page .intro-grid .gold-rule { margin-left: auto; margin-right: auto; }
          .dd-page .intro-grid .section-body { margin-left: auto; margin-right: auto; }
          .dd-page .intro-grid .intro-quote { text-align: center; border-left: none; border-top: 2px solid var(--saffron); border-bottom: 2px solid var(--saffron); padding: 16px 0; }

          .dd-page .highlights-header,
          .dd-page .price-header,
          .dd-page .complete-head,
          .dd-page .itin-header {
            text-align: center !important;
          }
          .dd-page .highlights-header .gold-rule,
          .dd-page .price-header .gold-rule,
          .dd-page .complete-head .gold-rule,
          .dd-page .itin-header .gold-rule {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .dd-page .complete-body {
            text-align: center !important;
          }
          .dd-page .complete-ctas {
            justify-content: center !important;
          }

          .dd-page .why-grid .reveal:first-child {
            text-align: center;
          }
          .dd-page .why-grid .section-tag {
            display: flex; width: 100%; justify-content: center;
          }
          .dd-page .why-grid .gold-rule {
            margin-left: auto; margin-right: auto;
          }
          .dd-page .why-grid .section-body {
            margin-left: auto; margin-right: auto;
          }
          .dd-page .features-list {
            text-align: left;
          }

          .dd-page .day-tabs {
            justify-content: center !important;
          }
          .dd-page .day-panel {
            text-align: center !important;
          }
          .dd-page .activity-list {
            text-align: left !important;
          }

          /* FAQ section center alignment */
          .dd-page .faq-grid .reveal:first-child {
            text-align: center !important;
          }
          .dd-page .faq-grid .section-tag {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .dd-page .faq-grid .gold-rule {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .dd-page .faq-grid .section-body {
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center !important;
          }
          .dd-page .faq-grid .itin-ctas {
            align-items: center !important;
          }

          .dd-page .itin-img-main {
            height: 320px !important;
          }
        }
        @media (max-width: 600px) {
          .dd-page .price-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .dd-page .price-card-body {
            padding: 30px 26px;
          }
          .dd-page .highlights-grid {
            grid-template-columns: 1fr;
          }
          .dd-page .steps-grid {
            grid-template-columns: 1fr;
          }
          .dd-page .hero-title {
            font-size: 40px;
          }
        }
      `}</style>

      {/* NAV */}
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-overlay"></div>

        {/* Floating diya particles */}
        <div className="hero-particles" id="heroParticles"></div>

        <div className="hero-content">
          <div className="hero-event-badge" style={{ color: "#f5a94e", fontWeight: 900 }}>🪔 Dev Deepawali 2026 · Varanasi</div>
          <div className="hero-tag" style={{ color: "#f5a94e", fontWeight: 900 }}>Margika Yatra · Spiritual Travel</div>
          <h1 className="hero-title">
            Dev Deepawali<br />Tour Package from<br /><em>Mumbai & Thane</em>
          </h1>
          <p className="hero-subtitle" style={{ color: 'var(--black)', fontWeight: 500 }}>
            When the gods celebrate Diwali — the 84 ghats of Varanasi light up with a million earthen lamps. Be there
            for one of the most spiritually charged nights in the Hindu calendar. A 2-night, 3-day experience you
            will carry for a lifetime.
          </p>
          <div className="hero-ctas">
            <a href="tel:+917208771688" className="btn-primary">
              📞 Call Now to Book
            </a>
            <a
              href={wa("I want to book the Dev Deepawali Varanasi package")}
              className="btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp to Book
            </a>
            <a href="/UTTAR_PRADESH_MARGIKA_YATRA.pdf" download="UTTAR_PRADESH_MARGIKA_YATRA.pdf" className="char-btn-outline">Download Itinerary</a>
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
            <img
              className="intro-img-main"
              src="/devmain2.jpg"
              alt="Dev Deepawali Varanasi Ghats lit with lamps"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <img
              className="intro-img-float"
              src="/devmain2.jpg"
              alt="Ganga Aarti Varanasi"
              onError={(e) => {
                ; (e.target as HTMLElement).style.display = "none"
              }}
            />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-tag">Dev Deepawali 2026 · Kashi</div>
            <h2 className="section-title">
              Dev Deepawali<br /><em>— The Night the Gods Celebrate</em>
            </h2>
            <div className="gold-rule"></div>
            <p className="section-body">
              Dev Deepawali falls on Kartik Purnima — the full moon night fifteen days after Diwali. On this night,
              legend holds that all the gods descend to bathe in the Ganga at Varanasi. Every one of Kashi's 84
              ghats is lined with hundreds of thousands of earthen diyas, turning the river into a river of light.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              This is not just a festival — it is a spiritual event that draws devotees and visitors from across
              India and abroad. Securing the right vantage point, the correct darshan timings at Kashi Vishwanath,
              and peaceful ghat access requires local knowledge and advance planning. That is what Margika Yatra
              provides for travelers from Mumbai and Thane.
            </p>
            <div className="intro-quote">
              <p>"We handle every arrangement. You carry only your devotion and your camera."</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT MOMENTS */}
      <section className="highlights-section">
        <div className="highlights-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>
            What You Will Experience
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Three Moments<br /><em>You Will Never Forget</em>
          </h2>
          <div className="gold-rule" style={{ margin: "24px auto" }}></div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
            Every element of this package is built around these rare, once-a-year spiritual experiences in Kashi.
          </p>
        </div>
        <div className="highlights-grid">
          <div className="hl-card">
            <img
              src="/devmain2.jpg"
              alt="Dev Deepawali lamp-lit ghats Varanasi"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">01</div>
              <div className="hl-name">Dev Deepawali Ghats</div>
              <div className="hl-tag">Kartik Purnima Festival</div>
              <div className="hl-detail">
                All 84 ghats illuminated with lakhs of earthen diyas. The reflection of light on the Ganga on this
                full moon night is an image that stays with you permanently.
              </div>
            </div>
          </div>
          <div className="hl-card">
            <img
              src="/dev1.png"
              alt="Kashi Vishwanath Temple Mangala Aarti"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">02</div>
              <div className="hl-name">Mangala Aarti at 2 AM</div>
              <div className="hl-tag">Kashi Vishwanath · Sparsh Darshan</div>
              <div className="hl-detail">
                The earliest and most sacred aarti of the day. Sparsh Darshan — touching the Jyotirlinga — is offered
                only at this hour. A profoundly rare blessing.
              </div>
            </div>
          </div>
          <div className="hl-card">
            <img
              src="/dev2.png"
              alt="Maha Ganga Aarti Dashashwamedh Ghat Varanasi"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">03</div>
              <div className="hl-name">Maha Ganga Aarti</div>
              <div className="hl-tag">Dashashwamedh Ghat</div>
              <div className="hl-detail">
                The grand evening aarti at Dashashwamedh Ghat — priests in ceremonial attire, large brass lamps,
                synchronized chanting. On Dev Deepawali, it is magnified tenfold.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE OPTIONS & PRICING */}
      <section className="price-section">
        <div className="price-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>
            Package & Pricing
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Your Dev Deepawali Yatra,<br /><em>Fully Sorted</em>
          </h2>
          <div className="gold-rule"></div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
            One clear, all-inclusive Dev Deepawali Varanasi package — travel, comfortable stays near the ghats, AC transport, festival boat ride, guided darshans, and full coordination from Mumbai & Thane. Transparent pricing, no hidden costs.
          </p>
        </div>

        <div className="price-card reveal">
          <div className="price-card-media">
            <img
              src="/devmain2.jpg"
              alt="Dev Deepawali Varanasi Ghats"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="price-badge">⭐ Most Loved</div>
            <div className="price-media-cities">
              <span>VARANASI</span><span>DEV DEEPAWALI</span><span>KASHI DARSHAN</span>
            </div>
          </div>
          <div className="price-card-body">
            <div>
              <div className="pkg-duration">2 Nights / 3 Days · Varanasi · Departures from Mumbai / Thane</div>
              <div className="pkg-name">Dev Deepawali Varanasi Package</div>
              <p className="pkg-desc">
                Experience Kashi's legendary festival of light. Witness Varanasi's 84 ghats illuminated with a million earthen diyas on Kartik Purnima. Covers Kashi Vishwanath Mangala Aarti at 2 AM, the grand Ganga Aarti from a premium boat vantage, Sarnath, and all local temples. Vegetarian meals, comfortable hotel stay, AC vehicle transfers, and a dedicated coordinator are all included.
              </p>
              <div className="pkg-includes">
                <span className="pkg-tag">Dev Deepawali Boat Ride</span>
                <span className="pkg-tag">Mangala Aarti at 2 AM</span>
                <span className="pkg-tag">Maha Ganga Aarti View</span>
                <span className="pkg-tag">Laser & Fire Show</span>
                <span className="pkg-tag">Comfortable Hotel Stay</span>
                <span className="pkg-tag">Pure Veg Meals</span>
                <span className="pkg-tag">AC local transport</span>
                <span className="pkg-tag">Mumbai–Thane Support</span>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-amount-wrap">
                <span className="price-from">Starting from</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span className="price-amount" style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '24px' }}>₹19,999</span>
                  <span className="price-amount">₹14,999</span>
                </div>
                <span className="price-per"> / person</span>
                <span className="price-note">
                  Varies with travel mode, group size & hotel category. Was <span style={{ textDecoration: 'line-through' }}>₹19,999</span>. Final quote on enquiry.
                </span>
              </div>
              <div className="price-actions">
                <a href="tel:+917208771688" className="btn-secondary" style={{ padding: "14px 24px" }}>Call Us</a>
                <a
                  href={razorpayLink}
                  className="btn-primary"
                  style={{ padding: "14px 24px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now 
                </a>
                <a
                  href="/UTTAR_PRADESH_MARGIKA_YATRA.pdf"
                  download="UTTAR_PRADESH_MARGIKA_YATRA.pdf"
                  className="char-btn-outline"
                  style={{ padding: "14px 24px" }}
                >
                  Download Itinerary
                </a>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--smoke)", maxWidth: 640, margin: "28px auto 0" }}>
          Travelling as a family group, sangha, or corporate group?{" "}
          <a
            href={wa("I want a custom quote for the Dev Deepawali Varanasi tour package")}
            style={{ color: "var(--saffron)", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us for a personalised quote →
          </a>
        </p>
      </section>

      {/* ITINERARY */}
      <section id="itinerary">
        <div className="itinerary-section">
          <div className="itin-header reveal">
            <div className="section-tag" style={{ justifyContent: "center" }}>Complete Itinerary</div>
            <h2 className="section-title">
              Dev Deepawali Varanasi Package<br /><em>— What Your Days Look Like</em>
            </h2>
            <div className="gold-rule"></div>
            <p className="section-body" style={{ margin: "0 auto" }}>
              A thoughtfully sequenced 2-night, 3-day plan crafted to capture the most spiritually significant moments
              without a moment of confusion or rush.
            </p>
          </div>

          <div className="itin-layout reveal reveal-delay-1">
            <div>
              <div className="day-tabs">
                <button
                  className={`day-tab ${activeDay === "day1" ? "active" : ""}`}
                  onClick={() => setActiveDay("day1")}
                >
                  Day 1
                </button>
                <button
                  className={`day-tab ${activeDay === "day2" ? "active" : ""}`}
                  onClick={() => setActiveDay("day2")}
                >
                  Day 2
                </button>
                <button
                  className={`day-tab ${activeDay === "day3" ? "active" : ""}`}
                  onClick={() => setActiveDay("day3")}
                >
                  Day 3
                </button>
              </div>

              {/* DAY 1 */}
              {activeDay === "day1" && (
                <div className="day-panel active" id="day1">
                  <div className="day-title">Arrival & Sacred Temples</div>
                  <div className="day-subtitle">Day 1 · Kaal Bhairav, Meditation & Shayan Aarti</div>
                  <ul className="activity-list">
                    <li className="activity-item">
                      <div className="activity-dot">🛕</div>
                      <div className="activity-text">
                        <strong>Kaal Bhairav Temple Darshan</strong> — The fearless protector of Kashi. Devotees
                        believe that taking his blessing first ensures safe movement through the city.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🛕</div>
                      <div className="activity-text">
                        <strong>Batuk Bhairav Temple</strong> — The gentler, youthful form of Bhairav. A
                        spiritually important temple often missed by tourists but held in great reverence by Kashi
                        locals.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🛕</div>
                      <div className="activity-text">
                        <strong>Mahamrityunjay Temple</strong> — One of Varanasi's most powerful Shiva temples,
                        where the Mahamrityunjay mantra is chanted continuously — a profoundly calming experience.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🍽️</div>
                      <div className="activity-text">
                        <strong>Lunch</strong> — Pure vegetarian meal at a vetted restaurant or your hotel.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🧘</div>
                      <div className="activity-text">
                        <strong>Swarved Meditation Centre</strong> — A serene, world-class meditation space in
                        Varanasi. Time for inward stillness before the evening's grand celebrations.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">☕</div>
                      <div className="activity-text">
                        <strong>High Tea & Snacks</strong> — Refreshments at the centre or nearby.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🔔</div>
                      <div className="activity-text">
                        <strong>Shayan Aarti at Kashi Vishwanath</strong> — The final aarti of the day, performed
                        as the deity is ceremonially prepared for rest. Deeply devotional and intimate.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🍽️</div>
                      <div className="activity-text">
                        <strong>Dinner & Rest</strong> — Early sleep is essential — tomorrow begins at 2 AM sharp.
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* DAY 2 */}
              {activeDay === "day2" && (
                <div className="day-panel active" id="day2">
                  <div className="day-title">The Sacred Pre-Dawn & Dev Deepawali</div>
                  <div className="day-subtitle">Day 2 · Mangala Aarti, Ghats & the Festival Night</div>
                  <ul className="activity-list">
                    <li className="activity-item">
                      <div className="activity-dot">🌙</div>
                      <div className="activity-text">
                        <strong>2:00 AM — Mangala Aarti, Kashi Vishwanath (Sparsh Darshan)</strong> — The holiest
                        hour at Kashi Vishwanath. Sparsh Darshan means you physically touch the Jyotirlinga — a
                        blessing available only at this aarti. Deeply rare and emotionally overwhelming for most
                        devotees.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🛕</div>
                      <div className="activity-text">
                        <strong>Annapurna Temple Darshan</strong> — Located adjacent to Kashi Vishwanath, Goddess
                        Annapurna — the goddess of food and nourishment — ensures the spiritual circuit of Kashi is
                        complete.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">☕</div>
                      <div className="activity-text">
                        <strong>Laxmi Chai & Toast</strong> — The famous early-morning chai ritual of Varanasi.
                        Warm, sweet, and utterly grounding after the pre-dawn darshan.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🍽️</div>
                      <div className="activity-text">
                        <strong>Brunch</strong> — Rest and a proper vegetarian meal to restore energy before the
                        evening.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🏨</div>
                      <div className="activity-text">
                        <strong>Hotel Rest (Ready for the Event)</strong> — Time at the hotel to freshen up and
                        prepare for the festival evening. Your coordinator will brief you on ghat access and timing.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🚣</div>
                      <div className="activity-text">
                        <strong>Exploring Banaras Ghats</strong> — A guided walk or boat ride along the 84 ghats
                        — watching them transform as diyas are set out row by row in the afternoon light.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🔥</div>
                      <div className="activity-text">
                        <strong>Maha Ganga Aarti</strong> — The grand Dashashwamedh Ghat aarti, magnified on Dev
                        Deepawali. Best experienced from the ghat itself or from a boat on the river.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">✨</div>
                      <div className="activity-text">
                        <strong>Laser Show</strong> — A modern light installation that complements the traditional
                        lamp festival, telling the story of Kashi through light and sound.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🎇</div>
                      <div className="activity-text">
                        <strong>Fire Show</strong> — Performers at the ghats present fire rituals in the backdrop
                        of a million diyas. The energy of this night is unlike anything else.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🍽️</div>
                      <div className="activity-text">
                        <strong>Dinner & Rest</strong> — Dinner after the celebrations. Time to absorb the magnitude
                        of what you have just witnessed.
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* DAY 3 */}
              {activeDay === "day3" && (
                <div className="day-panel active" id="day3">
                  <div className="day-title">Departure Day</div>
                  <div className="day-subtitle">Day 3 · Final Darshan & Return Journey</div>
                  <ul className="activity-list">
                    <li className="activity-item">
                      <div className="activity-dot">🌅</div>
                      <div className="activity-text">
                        <strong>Morning at the Ghats</strong> — An optional sunrise boat ride on the Ganga —
                        Varanasi mornings are unlike any other in the world. The mist on the river after the
                        previous night's million diyas is something to see.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🍽️</div>
                      <div className="activity-text">
                        <strong>Breakfast & Check-out</strong> — After a relaxed breakfast, check out of the hotel
                        at the appropriate time.
                      </div>
                    </li>
                    <li className="activity-item">
                      <div className="activity-dot">🚉</div>
                      <div className="activity-text">
                        <strong>Transfer to Varanasi Airport / Railway Station</strong> — Your coordinator arranges
                        timely transfer to your departure point for your return to Mumbai or Thane.
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              <div className="itin-ctas">
                <a href="tel:+917208771688" className="btn-primary">
                  📞 Call Now
                </a>
                <a
                  href={wa("I want to book Dev Deepawali Varanasi package")}
                  className="btn-wa"
                  style={{ padding: "14px 24px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
                {/* <a href="/Gujarat.pdf" download="Gujarat.pdf" className="char-btn-outline">Download Itinerary</a> */}
              </div>
            </div>

            <div className="itin-img-stack">
              <img
                className="itin-img-main"
                src="/DevM.jpeg"
                alt="Dev Deepawali Varanasi Ghats 2026"
                onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 12px" }}>
              What's Included
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Everything <em>Taken Care Of</em>
            </h2>
          </div>
          <div className="inclusions-grid">
            <div className="inc-card reveal">
              <div className="inc-icon">🏨</div>
              <div className="inc-title">Comfortable Hotel Stay</div>
              <div className="inc-desc">
                2 nights at a vetted hotel in Varanasi — clean rooms, hot water, and a location that ensures you reach
                the ghats without long commutes on festival night.
              </div>
            </div>
            <div className="inc-card reveal reveal-delay-1">
              <div className="inc-icon">🚌</div>
              <div className="inc-title">All Local Transport</div>
              <div className="inc-desc">
                AC vehicle for all temple transfers, ghat visits, and airport/station drop. No auto-rickshaw haggling,
                no last-minute arrangements on your own during a crowded festival.
              </div>
            </div>
            <div className="inc-card reveal reveal-delay-2">
              <div className="inc-icon">🛕</div>
              <div className="inc-title">All Darshan Assistance</div>
              <div className="inc-desc">
                Kashi Vishwanath Mangala Aarti at 2 AM (Sparsh Darshan), Annapurna Temple, Kaal Bhairav, Batuk Bhairav,
                and Mahamrityunjay Temple — our coordinator handles all queuing and access.
              </div>
            </div>
            <div className="inc-card reveal reveal-delay-3">
              <div className="inc-icon">🪔</div>
              <div className="inc-title">Dev Deepawali Event Access</div>
              <div className="inc-desc">
                Prime vantage point for Maha Ganga Aarti, Laser Show, and Fire Show. Our team secures positioning at
                the ghats before the crowds arrive so you get the full view.
              </div>
            </div>
            <div className="inc-card reveal">
              <div className="inc-icon">🍽️</div>
              <div className="inc-title">Vegetarian Meals</div>
              <div className="inc-desc">
                Pure sattvic vegetarian food throughout — breakfast, brunch, lunch, high tea, and dinner as per
                itinerary. No compromise on quality or purity during a pilgrimage.
              </div>
            </div>
            <div className="inc-card reveal reveal-delay-1">
              <div className="inc-icon">👤</div>
              <div className="inc-title">Dedicated Tour Coordinator</div>
              <div className="inc-desc">
                A Margika Yatra representative travels with your group, handling all logistics, timings, and
                on-ground needs. You focus on the experience — we handle the rest.
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="feature-icon">👨‍👩‍👧</div>
                <div className="feature-text">
                  <h4>Family & Senior-Friendly</h4>
                  <p style={{ color: "#ffffff" }}>
                    Dev Deepawali includes a 2 AM darshan — we plan every timing, transport, and support around the
                    comfort of all age groups in your family.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-text">
                  <h4>Transparent Pricing</h4>
                  <p style={{ color: "#ffffff" }}>
                    The price you see is the price you pay. No hidden extras, no surprise charges at the destination.
                    What we quote is complete.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">📞</div>
                <div className="feature-text">
                  <h4>24×7 Support on Tour</h4>
                  <p style={{ color: "#ffffff" }}>
                    Our coordinator is with your group throughout. And our Thane office remains reachable on WhatsApp
                    for any support needed by family back home.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="why-visual">
              <img
                src="https://www.margikayatra.com/2.jpg"
                alt="Margika Yatra group Varanasi"
                onError={(e) => {
                  ; (e.target as HTMLImageElement).src =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ganga_Aarti_Varanasi.jpg/640px-Ganga_Aarti_Varanasi.jpg"
                }}
              />
              <div className="why-float-card">
                <p>"Every year our yatris tell us Dev Deepawali was the most moving night of their lives."</p>
                <span>— Margika Yatra Team</span>
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
            How Your <em>Booking Begins</em>
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

      {/* GALLERY */}
      <section>
        <div className="itin-header reveal" style={{ textAlign: "center", margin: "140px auto 40px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Memories of Kashi
          </div>
          <h2 className="section-title">
            Yatris Who <em>Travelled Before You</em>
          </h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="gallery-strip reveal" style={{ marginBottom: "60px" }}>
          <div className="gallery-item">
            <img src="/1.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item">
            <img src="/2.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item">
            <img src="/Home1.jpeg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item">
            <img src="/Home2.jpeg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item">
            <img src="/5.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item">
            <img src="/6.jpg" alt="Margika Yatra pilgrims" />
          </div>
          <div className="gallery-item"><img src="/Home3.jpeg" alt="Margika Yatra pilgrims" /></div>
          <div className="gallery-item"><img src="/Home4.jpeg" alt="Margika Yatra pilgrims" /></div>
          <div className="gallery-item"><img src="/Home5.jpeg" alt="Margika Yatra pilgrims" /></div>
          <div className="gallery-item"><img src="/Home6.jpg" alt="Margika Yatra pilgrims" /></div>
          <div className="gallery-item"><img src="/Home7.jpg" alt="Margika Yatra pilgrims" /></div>
        </div>
      </section>

      <GoogleReviews />

      {/* OTHER PACKAGES */}
      <section>
        <div className="itin-header reveal" style={{ textAlign: "center", margin: "0 auto 40px" }}>
          <div className="section-tag" style={{ justifyContent: "center", marginTop: "100px" }}>
            Other Pilgrimages
          </div>
          <h2 className="section-title">
            Other Sacred <em>Packages</em>
          </h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="other-pkgs reveal">
          <div className="opkg-card">
            <img className="opkg-img" src="/up.jpg" alt="Varanasi Ayodhya Prayagraj" />
            <div className="opkg-body">
              <h3 className="opkg-name">Varanasi-Ayodhya-Prayagraj</h3>
              <p className="opkg-desc">
                Cover the ultimate Uttar Pradesh tri-city circuit. Visit Ram Mandir, Triveni Sangam, and Kashi Vishwanath.
              </p>
              <Link href="/packages/varanasi" className="opkg-link">
                View Package →
              </Link>
            </div>
          </div>
          <div className="opkg-card">
            <img className="opkg-img" src="/rameshwaram.jpg" alt="Rameshwaram" />
            <div className="opkg-body">
              <h3 className="opkg-name">Rameshwaram & Madurai Meenakshi</h3>
              <p className="opkg-desc">
                Embark on a sacred Southern pilgrimage to the holy shores of Rameshwaram and the grand halls of Madurai.
              </p>
              <Link href="/packages/rameshwaram" className="opkg-link">
                View Package →
              </Link>
            </div>
          </div>
          <div className="opkg-card">
            <img className="opkg-img" src="/puri.png" alt="Jagannath Puri" />
            <div className="opkg-body">
              <h3 className="opkg-name">Jagannath Puri & Konark</h3>
              <p className="opkg-desc">
                Visit the sacred land of Lord Jagannath, Konark Sun Temple, and the holy temples of Bhubaneswar.
              </p>
              <Link href="/packages/jagannath-puri" className="opkg-link">
                View Package →
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end dd-page */}

      {/* FAQ — outside dd-page to avoid CSS conflicts */}
      <FAQ />

      <div className="dd-page">{/* re-enter dd-page for CTA vars */}
      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-content reveal">
          <h2 className="section-title" style={{ color: "var(--white)", marginBottom: 16 }}>
            Witness the River of Light
          </h2>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.8)", margin: "0 auto 32px", fontWeight: "900", fontSize: "18px" }}>
            Varanasi's Dev Deepawali 2026 slots are extremely limited due to boat and hotel availability. Plan your
            yatra today.
          </p>
          <div className="cta-buttons">
            <a href="tel:+917208771688" className="btn-primary">
              📞 Call Now to Book
            </a>
            <a
              href={wa("I want to check availability for Dev Deepawali Varanasi package")}
              className="btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp to Check Availability
            </a>
          </div>
        </div>
      </section>

      </div>{/* end dd-page for CTA */}

      <Footer />

      {/* STICKY WA */}
      <a
        href={wa("Hi Margika Yatra! I want to enquire about Dev Deepawali package")}
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
