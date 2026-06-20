"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { GoogleReviews } from "@/components/ui/google-reviews"

export function KeralaDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeDay, setActiveDay] = useState<string>("day1")
  const razorpayLink = "https://rzp.io/rzp/zCOhd60"

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))

    const nav = document.getElementById("mainNav")
    const handleScroll = () => {
      if (window.scrollY > 50) nav?.classList.add("scrolled")
      else nav?.classList.remove("scrolled")
    }
    window.addEventListener("scroll", handleScroll)

    document.title = "Kerala Tour Package from Mumbai & Thane | Munnar Alleppey Thekkady Kochi | Margika Yatra"

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  return (
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

        .dd-page * { box-sizing: border-box; }
        .dd-page *:not(header, header *, footer, footer *) { margin: 0; padding: 0; }

        .dd-page ::-webkit-scrollbar { width: 4px; }
        .dd-page ::-webkit-scrollbar-track { background: var(--ink-mid); }
        .dd-page ::-webkit-scrollbar-thumb { background: var(--saffron); border-radius: 2px; }
   




        .dd-page .char-btn-outline {
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




        /* HERO */
        .dd-page .hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
        }
        .dd-page .hero-img {
          position: absolute; inset: 0;
          background: url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80") center/cover no-repeat;
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }
        .dd-page .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.35) 0%,
            rgba(0,0,0,0.25) 30%,
            rgba(10,5,0,0.72) 60%,
            rgba(10,5,0,0.96) 100%
          );
        }
        .dd-page .hero-content {
          position: relative; z-index: 2;
          padding: 0 5% 80px; max-width: 860px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .dd-page .hero-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #fdba74; margin-bottom: 20px; }
        .dd-page .hero-tag::before { content: ""; display: block; width: 30px; height: 1px; background: #fdba74; }
        .dd-page .hero-event-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(249,115,22,0.25); border: 1px solid rgba(249,115,22,0.6); padding: 7px 16px; border-radius: 20px; margin-bottom: 24px; font-size: 12px; letter-spacing: 0.1em; color: #fdba74; }
        .dd-page .hero-title { font-family: "Cormorant Garamond", serif; font-size: clamp(42px, 6.5vw, 82px); font-weight: 300; line-height: 1.08; color: #ffffff; margin-bottom: 14px; }
        .dd-page .hero-title em { color: #f5a94e; font-style: italic; }
        .dd-page .hero-subtitle { font-size: 15px; font-weight: 300; color: rgba(255,255,255,0.85); margin-bottom: 40px; max-width: 560px; line-height: 1.75; }
        .dd-page .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        /* BUTTONS */
        .dd-page .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--saffron); color: var(--white);
          padding: 16px 32px; border-radius: 2px;
          font-family: "Jost", sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.3s; position: relative; overflow: hidden;
        }
        .dd-page .btn-primary::after { content: ""; position: absolute; inset: 0; background: rgba(255,255,255,0.15); opacity: 0; transition: opacity 0.3s; }
        .dd-page .btn-primary:hover::after { opacity: 1; }
        .dd-page .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .dd-page .btn-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: transparent; color: #ffffff; padding: 16px 32px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.45); font-family: "Jost", sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; cursor: pointer; transition: all 0.3s; }
        .dd-page .btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
        .dd-page .btn-wa { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #25d366; color: white; padding: 16px 32px; border-radius: 2px; font-family: "Jost", sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; }
        .dd-page .btn-wa:hover { background: #1eb858; transform: translateY(-2px); }
        .dd-page .btn-wa svg { width: 18px; height: 18px; fill: white; }

        /* STATS */
        .dd-page .stats-strip { position: relative; z-index: 3; background: linear-gradient(90deg, var(--saffron-dark), var(--saffron)); padding: 28px 5%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .dd-page .stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .dd-page .stat-item:last-child { border-right: none; }
        .dd-page .stat-num { font-family: "Cormorant Garamond", serif; font-size: 38px; font-weight: 600; color: var(--white); line-height: 1; }
        .dd-page .stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }

        /* SECTION SHARED */
        .dd-page section { padding: var(--section-pad) 5%; }
        .dd-page .section-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--saffron); margin-bottom: 16px; }
        .dd-page .section-tag::before { content: ""; display: block; width: 24px; height: 1px; background: #fdba74; }
        .dd-page .section-title { font-family: "Cormorant Garamond", serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 400; line-height: 1.2; color: var(--cream); margin-bottom: 16px; }
        .dd-page .section-title em { color: var(--gold); font-style: italic; }
        .dd-page .section-body { font-size: 15px; font-weight: 300; line-height: 1.8; color: rgba(17,24,39,0.75); max-width: 620px; }
        .dd-page .gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }

        /* INTRO GRID */
        .dd-page .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .dd-page .intro-visual { position: relative; }
        .dd-page .intro-img-main { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.88) saturate(1.2); }
        .dd-page .intro-img-float { position: absolute; bottom: -30px; right: -30px; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid var(--ink); filter: brightness(0.9) saturate(1.3); }
        .dd-page .intro-quote { margin-top: 40px; padding: 24px 28px; border-left: 2px solid var(--saffron); background: rgba(232,135,26,0.06); border-radius: 0 4px 4px 0; }
        .dd-page .intro-quote p { font-family: "Cormorant Garamond", serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--gold); line-height: 1.6; }

        /* HIGHLIGHTS */
        .dd-page .highlights-section { background: rgba(249,115,22,0.03); }
        .dd-page .highlights-header { text-align: center; max-width: 640px; margin: 0 auto 60px; }
        .dd-page .highlights-header .gold-rule { margin: 24px auto; }
        .dd-page .highlights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto; }
        .dd-page .hl-card { position: relative; height: 420px; overflow: hidden; cursor: default; }
        .dd-page .hl-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.55) saturate(1.2); }
        .dd-page .hl-card:hover img { transform: scale(1.08); filter: brightness(0.72) saturate(1.3); }
        .dd-page .hl-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,18,8,0.96) 0%, rgba(26,18,8,0.15) 65%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
        .dd-page .hl-num { font-family: "Cormorant Garamond", serif; font-size: 52px; font-weight: 300; color: rgba(212,175,106,0.22); line-height: 1; margin-bottom: 4px; transform: translateY(10px); transition: transform 0.5s, color 0.5s; }
        .dd-page .hl-card:hover .hl-num { color: rgba(212,175,106,0.5); transform: translateY(0); }
        .dd-page .hl-name { font-family: "Cormorant Garamond", serif; font-size: 24px; font-weight: 500; color: #ffffff; margin-bottom: 4px; }
        .dd-page .hl-tag { font-size: 11px; letter-spacing: 0.08em; color: var(--saffron); text-transform: uppercase; }
        .dd-page .hl-detail { font-size: 13px; color: rgba(255,255,255,0.85); margin-top: 8px; max-height: 0; overflow: hidden; transition: max-height 0.5s, opacity 0.4s; opacity: 0; line-height: 1.6; }
        .dd-page .hl-card:hover .hl-detail { max-height: 100px; opacity: 1; }

        /* ITINERARY */
        .dd-page .itinerary-section { max-width: 1200px; margin: 0 auto; }
        .dd-page .itin-header { margin-bottom: 50px; }
        .dd-page .itin-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: start; }
        .dd-page .day-tabs { display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; }
        .dd-page .day-tab { padding: 8px 20px; border-radius: 2px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid rgba(249,115,22,0.25); color: var(--smoke); cursor: pointer; transition: all 0.3s; background: transparent; }
        .dd-page .day-tab.active { background: var(--saffron); color: white; border-color: var(--saffron); }
        .dd-page .day-tab:hover:not(.active) { border-color: var(--gold); color: var(--gold); }
        .dd-page .day-panel { display: none; }
        .dd-page .day-panel.active { display: block; }
        .dd-page .day-title { font-family: "Cormorant Garamond", serif; font-size: 26px; font-weight: 500; color: var(--cream); margin-bottom: 8px; }
        .dd-page .day-subtitle { font-size: 12px; letter-spacing: 0.12em; color: var(--saffron); text-transform: uppercase; margin-bottom: 20px; }
        .dd-page .activity-list { list-style: none; }
        .dd-page .activity-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid rgba(249,115,22,0.1); }
        .dd-page .activity-item:last-child { border-bottom: none; }
        .dd-page .activity-dot { width: 28px; height: 28px; min-width: 28px; border-radius: 50%; background: rgba(232,135,26,0.12); border: 1px solid rgba(232,135,26,0.3); display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .dd-page .activity-text { font-size: 14px; color: rgba(17,24,39,0.8); line-height: 1.6; }
        .dd-page .activity-text strong { color: var(--cream); font-weight: 500; }
        .dd-page .itin-img-stack { position: relative; }
        .dd-page .itin-img-main { width: 100%; height: 440px; object-fit: cover; border-radius: 4px; filter: brightness(0.82) saturate(1.2); }
        .dd-page .itin-img-secondary { width: 100%; height: 220px; object-fit: cover; border-radius: 4px; filter: brightness(0.82) saturate(1.15); margin-top: 4px; }
        .dd-page .itin-ctas { display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }

        /* INCLUSIONS */
        .dd-page .inclusions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; max-width: 1200px; margin: 40px auto 0; }
        .dd-page .inc-card { padding: 32px 36px; background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); border: 1px solid rgba(249,115,22,0.15); box-shadow: 0 10px 30px rgba(249,115,22,0.04); transition: border-color 0.3s, transform 0.3s; }
        .dd-page .inc-card:hover { border-color: rgba(232,135,26,0.35); transform: translateY(-3px); }
        .dd-page .inc-icon { font-size: 28px; margin-bottom: 14px; }
        .dd-page .inc-title { font-family: "Cormorant Garamond", serif; font-size: 20px; color: var(--cream); margin-bottom: 6px; }
        .dd-page .inc-desc { font-size: 13px; color: var(--smoke); line-height: 1.65; }

        /* WHY */
        .dd-page .why-section { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: var(--ink); }
        .dd-page .why-section .section-title { color: var(--ink); }
        .dd-page .why-section .section-body { color: var(--ink-light); }
        .dd-page .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .dd-page .why-visual { position: relative; }
        .dd-page .why-visual img { width: 100%; height: 500px; object-fit: cover; border-radius: 4px; }
        .dd-page .why-float-card { position: absolute; bottom: -20px; left: -20px; background: var(--ink-mid); color: var(--cream); padding: 24px 28px; border-radius: 4px; border-left: 3px solid var(--saffron); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
        .dd-page .why-float-card p { font-family: "Cormorant Garamond", serif; font-size: 18px; font-style: italic; color: var(--gold); }
        .dd-page .why-float-card span { font-size: 12px; color: var(--smoke); letter-spacing: 0.08em; }
        .dd-page .features-list { list-style: none; margin-top: 40px; }
        .dd-page .feature-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.1); transition: padding-left 0.3s; }
        .dd-page .feature-item:hover { padding-left: 8px; }
        .dd-page .feature-item:last-child { border-bottom: none; }
        .dd-page .feature-icon { width: 40px; height: 40px; min-width: 40px; background: rgba(255,255,255,0.15); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .dd-page .feature-text h4 { font-size: 15px; font-weight: 500; color: var(--ink); margin-bottom: 3px; }
        .dd-page .feature-text p { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.5; }

        /* PRICE SECTION */
        .dd-page .price-section {
          background: rgba(255,255,255,0.02);
        }
        .dd-page .price-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 50px;
        }
        .dd-page .price-header .gold-rule {
          margin: 24px auto;
        }
        .dd-page .price-card {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(232,135,26,0.35);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(0,0,0,0.45);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .dd-page .price-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.55);
        }
        .dd-page .price-card-media {
          position: relative;
          min-height: 440px;
          overflow: hidden;
        }
        .dd-page .price-card-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.82) saturate(1.1);
          transition: transform 0.6s;
        }
        .dd-page .price-card:hover .price-card-media img {
          transform: scale(1.05);
        }
        .dd-page .price-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          background: var(--saffron);
          color: var(--white);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 2px;
        }
        .dd-page .price-media-cities {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .dd-page .price-media-cities span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--cream);
          background: rgba(26,18,8,0.6);
          border: 1px solid rgba(212,175,106,0.4);
          padding: 6px 12px;
          border-radius: 2px;
          backdrop-filter: blur(4px);
        }
        .dd-page .price-card-body {
          padding: 40px 42px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dd-page .price-card-body .pkg-duration {
          font-size: 11px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 10px;
        }
        .dd-page .price-card-body .pkg-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 14px;
          line-height: 1.15;
        }
        .dd-page .price-card-body .pkg-desc {
          font-size: 14px;
          color: var(--smoke);
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .dd-page .pkg-includes {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
        }
        .dd-page .pkg-tag {
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(232,135,26,0.1);
          color: var(--saffron-light);
          border: 1px solid rgba(232,135,26,0.2);
        }
        .dd-page .price-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .dd-page .price-amount-wrap {
          display: flex;
          flex-direction: column;
        }
        .dd-page .price-from {
          font-size: 11px;
          color: var(--smoke);
          letter-spacing: 0.06em;
        }
        .dd-page .price-amount {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          color: var(--gold);
          line-height: 1.1;
        }
        .dd-page .price-per {
          font-size: 13px;
          color: var(--smoke);
          margin-top: -4px;
        }
        .dd-page .price-note {
          font-size: 11px;
          color: var(--smoke);
          margin-top: 8px;
          max-width: 240px;
          line-height: 1.5;
        }
        .dd-page .price-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .dd-page .btn-book {
          background: var(--saffron);
          color: white;
          padding: 13px 24px;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .dd-page .btn-book:hover {
          background: var(--saffron-light);
        }
        .dd-page .btn-book-outline {
          background: transparent;
          color: var(--saffron);
          padding: 13px 26px;
          border-radius: 2px;
          border: 1px solid var(--saffron);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }
        .dd-page .btn-book-outline:hover {
          background: var(--saffron);
          color: white;
        }

        /* STEPS */
        .dd-page .steps-section { background: rgba(255,255,255,0.02); }
        .dd-page .steps-header { text-align: center; margin-bottom: 60px; }
        .dd-page .steps-header .gold-rule { margin: 20px auto; }
        .dd-page .steps-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; max-width: 1200px; margin: 0 auto; position: relative; }
        .dd-page .steps-grid::before { content: ""; position: absolute; top: 32px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--saffron), transparent); }
        .dd-page .step-item { text-align: center; padding: 0 10px; }
        .dd-page .step-dot { width: 64px; height: 64px; border-radius: 50%; background: rgba(232,135,26,0.12); border: 1px solid rgba(232,135,26,0.35); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 16px; position: relative; z-index: 1; transition: all 0.3s; }
        .dd-page .step-item:hover .step-dot { background: var(--saffron); border-color: var(--saffron); transform: scale(1.1); }
        .dd-page .step-title { font-size: 13px; font-weight: 500; color: var(--cream); margin-bottom: 6px; }
        .dd-page .step-desc { font-size: 12px; color: var(--smoke); line-height: 1.5; }

        /* TESTIMONIAL */
        .dd-page .testimonial-section { background: linear-gradient(135deg, #0d1b3e 0%, #1a2e6b 50%, #0d1b3e 100%); text-align: center; padding: 80px 5%; position: relative; overflow: hidden; }
        .dd-page .testimonial-section::before { content: "🌴"; font-size: 160px; opacity: 0.04; position: absolute; right: 5%; top: 50%; transform: translateY(-50%); }
        .dd-page .testimonial-icon { font-size: 40px; margin-bottom: 20px; opacity: 0.6; }
        .dd-page .testimonial-text { font-family: "Cormorant Garamond", serif; font-size: clamp(22px, 3vw, 36px); font-weight: 400; font-style: italic; color: var(--white); max-width: 800px; margin: 0 auto 24px; line-height: 1.5; }
        .dd-page .testimonial-author { font-size: 13px; letter-spacing: 0.12em; color: rgba(255,255,255,0.75); }
        .dd-page .testimonial-stars { font-size: 18px; color: var(--gold-light); margin-top: 12px; letter-spacing: 4px; }

        /* OTHER PACKAGES */
        .dd-page .other-pkgs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1200px; margin: 40px auto 0; }
        .dd-page .opkg-card { border-radius: 4px; overflow: hidden; background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); border: 1px solid rgba(249,115,22,0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.02); transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s; }
        .dd-page .opkg-card:hover { transform: translateY(-5px); border-color: rgba(232,135,26,0.35); box-shadow: 0 16px 50px rgba(249,115,22,0.08); }
        .dd-page .opkg-img { width: 100%; height: 180px; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.5s; }
        .dd-page .opkg-card:hover .opkg-img { transform: scale(1.04); }
        .dd-page .opkg-body { padding: 20px 22px 24px; }
        .dd-page .opkg-name { font-family: "Cormorant Garamond", serif; font-size: 20px; color: var(--cream); margin-bottom: 6px; }
        .dd-page .opkg-desc { font-size: 13px; color: var(--smoke); line-height: 1.6; margin-bottom: 16px; }
        .dd-page .opkg-link { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--saffron); text-decoration: none; }
        .dd-page .opkg-link:hover { color: var(--gold); }

        /* FAQ */
        .dd-page .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1200px; margin: 0 auto; }
        .dd-page .faq-list { margin-top: 40px; }
        .dd-page .faq-item { border-bottom: 1px solid rgba(249,115,22,0.15); overflow: hidden; }
        .dd-page .faq-q { width: 100%; background: transparent; border: none; display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15px; font-weight: 400; color: var(--cream); transition: color 0.3s; gap: 12px; text-align: left; }
        .dd-page .faq-q:hover { color: var(--gold); }
        .dd-page .faq-icon { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; border: 1px solid rgba(249,115,22,0.3); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--gold); transition: transform 0.3s; }
        .dd-page .faq-item.open .faq-icon { transform: rotate(45deg); }
        .dd-page .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; font-size: 14px; color: rgba(17,24,39,0.7); line-height: 1.75; padding-bottom: 0; }
        .dd-page .faq-item.open .faq-a { max-height: 220px; padding-bottom: 20px; }

        /* CTA BANNER */
        .dd-page .cta-banner { position: relative; padding: 100px 5%; display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; }
        .dd-page .cta-banner::before { content: ""; position: absolute; inset: 0; background: url("https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=1600&q=80") center/cover no-repeat; filter: brightness(0.2) saturate(0.7); }
        .dd-page .cta-banner-content { position: relative; z-index: 1; max-width: 700px; }
        .dd-page .cta-banner .section-title { text-align: center; }
        .dd-page .cta-banner .section-body { margin: 0 auto 40px; text-align: center; }
        .dd-page .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* COMPLETE SECTION */
        .dd-page .complete-section { background: linear-gradient(135deg, var(--saffron) 0%, #e8871a 100%); color: #ffffff; padding: 80px 20px; }
        .dd-page .complete-wrap { max-width: 980px; margin: 0 auto; }
        .dd-page .complete-head { text-align: center; margin-bottom: 36px; }
        .dd-page .complete-head .section-tag { color: #ffffff !important; justify-content: center; margin: 0 auto 16px; }
        .dd-page .complete-head .section-tag::before { background: #ffffff !important; }
        .dd-page .complete-head .section-title { color: #ffffff !important; }
        .dd-page .complete-head .section-title em { color: #fff5e6; }
        .dd-page .complete-head .gold-rule { margin: 20px auto; background: #ffffff; width: 80px; height: 2px; }
        .dd-page .complete-body p { color: rgba(255, 255, 255, 0.95); font-size: 15.5px; line-height: 1.9; margin-bottom: 18px; text-align: center; }
        .dd-page .complete-body strong { color: #ffffff; font-weight: 600; }
        .dd-page .complete-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 36px; }
        .dd-page .btn-dark { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: transparent; color: #ffffff !important; padding: 15px 30px; border-radius: 6px; font-size: 13px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: 1.5px solid #ffffff; transition: all 0.3s; }
        .dd-page .btn-dark:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

        /* STICKY WA */
        .dd-page .sticky-wa { position: fixed; bottom: 28px; right: 28px; z-index: 999; width: 56px; height: 56px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.5); transition: transform 0.3s; }
        .dd-page .sticky-wa:hover { transform: scale(1.1); }
        .dd-page .sticky-wa svg { width: 28px; height: 28px; fill: white; }

        /* REVEAL */
        .dd-page .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .dd-page .reveal.visible { opacity: 1; transform: translateY(0); }
        .dd-page .reveal-delay-1 { transition-delay: 0.15s; }
        .dd-page .reveal-delay-2 { transition-delay: 0.3s; }
        .dd-page .reveal-delay-3 { transition-delay: 0.45s; }
        .dd-page .reveal-delay-4 { transition-delay: 0.6s; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .dd-page .intro-grid, .dd-page .why-grid, .dd-page .faq-grid, .dd-page .itin-layout { grid-template-columns: 1fr; gap: 40px; }
          .dd-page .highlights-grid { grid-template-columns: 1fr 1fr; }
          .dd-page .steps-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .dd-page .steps-grid::before { display: none; }
          .dd-page .stats-strip { grid-template-columns: repeat(2, 1fr); gap: 2px; }
          .dd-page .other-pkgs { grid-template-columns: 1fr; }
          .dd-page .inclusions-grid { grid-template-columns: 1fr; }
          .dd-page .intro-img-float { display: none; }
          .dd-page .price-card { grid-template-columns: 1fr; }
          .dd-page .price-card-media { min-height: 260px; }
        }
        @media (max-width: 600px) {
          .dd-page .highlights-grid { grid-template-columns: 1fr; }
          .dd-page .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .dd-page .hero-title { font-size: 40px; }
          .dd-page .price-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      {/* NAV */}

      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-event-badge">🌴 Kerala · God's Own Country</div>
          <div className="hero-tag">Margika Yatra · Holiday Travel</div>
          <h1 className="hero-title">
            Kerala Tour Package<br />from<br /><em>Mumbai & Thane</em>
          </h1>
          <p className="hero-subtitle">
            Misty tea hills, spice forests, a night on an Alleppey houseboat, and the colonial charm of Fort Kochi
            — all arranged from your doorstep in Mumbai or Thane. A complete 4-day holiday with zero planning stress.
          </p>
          <div className="hero-ctas">
            <a href="tel:+917208771688" className="btn-primary">📞 Call Now to Book</a>
            <a href={wa("I want to book the Kerala tour package from Mumbai")} className="btn-wa" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp to Book
            </a>
            <a href="/Kerala_Itinerary.pdf" download="Kerala_Itinerary.pdf" className="char-btn-outline">Download Itinerary</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stat-item"><div className="stat-num">500+</div><div className="stat-label">Happy Travellers</div></div>
        <div className="stat-item"><div className="stat-num">4.9★</div><div className="stat-label">Google Rating</div></div>
        <div className="stat-item"><div className="stat-num">4D / 3N</div><div className="stat-label">Well-Paced Holiday</div></div>
        <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Hassle-Free Planning</div></div>
      </div>

      {/* INTRO */}
      <section>
        <div className="intro-grid">
          <div className="intro-visual reveal">
            <img className="intro-img-main" src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000&q=80" alt="Munnar Tea Gardens Kerala" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            <img className="intro-img-float" src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=500&q=80" alt="Kerala Backwaters Houseboat" onError={(e) => { (e.target as HTMLElement).style.display = "none" }} />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-tag">God's Own Country · Family & Couple Holiday</div>
            <h2 className="section-title">Kerala Tour Packages<br /><em>— God's Own Country Awaits</em></h2>
            <div className="gold-rule"></div>
            <p className="section-body">
              Our Kerala tour packages from Mumbai bring together everything that makes this southern state special
              — the misty tea hills of Munnar, the spice gardens and Periyar wildlife of Thekkady, a night on an
              Alleppey backwater houseboat, and the colonial charm of Fort Kochi.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              Planning all of this from Mumbai or Thane can take time. We take care of the flights, hotels, AC
              transport, sightseeing and the houseboat stay — so you simply arrive and enjoy. From your first
              enquiry to your safe return, every detail is handled by our team.
            </p>
            <div className="intro-quote">
              <p>"The hills, the backwaters and the sea — we plan the journey, you simply soak it all in."</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights-section">
        <div className="highlights-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Your Kerala Circuit</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Four Destinations,<br /><em>One Perfect Holiday</em></h2>
          <div className="gold-rule" style={{ margin: "24px auto" }}></div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>From hill stations to backwaters to the coast, this Kerala package covers the very best the state has to offer.</p>
        </div>
        <div className="highlights-grid">
          <div className="hl-card">
            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80" alt="Munnar Tea Hills Kerala" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            <div className="hl-overlay">
              <div className="hl-num">01</div>
              <div className="hl-name">Munnar</div>
              <div className="hl-tag">The Tea Hills</div>
              <div className="hl-detail">Rolling emerald tea estates, cool mountain air, Mattupetty Dam and the sunrise at Kolukkumalai — Kerala's most loved hill station.</div>
            </div>
          </div>
          <div className="hl-card">
            <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=700&q=80" alt="Thekkady Periyar Kerala" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            <div className="hl-overlay">
              <div className="hl-num">02</div>
              <div className="hl-name">Thekkady</div>
              <div className="hl-tag">Periyar & Spice Country</div>
              <div className="hl-detail">A boat ride on Periyar Lake, a wildlife or jeep safari, fragrant spice gardens and an evening Kathakali cultural show.</div>
            </div>
          </div>
          <div className="hl-card">
            <img src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=700&q=80" alt="Alleppey Backwaters Kerala" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            <div className="hl-overlay">
              <div className="hl-num">03</div>
              <div className="hl-name">Alleppey</div>
              <div className="hl-tag">The Backwaters</div>
              <div className="hl-detail">A traditional houseboat gliding through palm-lined canals — the iconic Kerala backwater experience, with home-cooked meals on board.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerary">
        <div className="itinerary-section">
          <div className="itin-header reveal">
            <div className="section-tag">Complete Itinerary</div>
            <h2 className="section-title">Kerala Holiday Package<br /><em>— What Your Days Look Like</em></h2>
            <div className="gold-rule"></div>
            <p className="section-body">A thoughtfully sequenced 4-day, 3-night plan — Munnar, Thekkady, Alleppey and Kochi — crafted for families and couples from Mumbai & Thane.</p>
          </div>

          <div className="itin-layout reveal reveal-delay-1">
            <div>
              <div className="day-tabs">
                {["day1", "day2", "day3", "day4"].map((d, i) => (
                  <button key={d} className={`day-tab ${activeDay === d ? "active" : ""}`} onClick={() => setActiveDay(d)}>Day {i + 1}</button>
                ))}
              </div>

              {activeDay === "day1" && (
                <div className="day-panel active">
                  <div className="day-title">Arrival & Munnar Sightseeing</div>
                  <div className="day-subtitle">Day 1 · Cochin Pickup · Tea Gardens · Mattupetty · Kolukkumalai</div>
                  <ul className="activity-list">
                    <li className="activity-item"><div className="activity-dot">✈️</div><div className="activity-text"><strong>Pick-up from Cochin Airport</strong> — Your tour begins the moment you land. Our driver will be waiting.</div></li>
                    <li className="activity-item"><div className="activity-dot">🚗</div><div className="activity-text"><strong>Drive to Munnar</strong> — A scenic drive through winding ghats and rubber plantations. Hotel check-in on arrival.</div></li>
                    <li className="activity-item"><div className="activity-dot">🍃</div><div className="activity-text"><strong>Tea Garden Visit</strong> — Walk through the famous rolling tea estates of Munnar and understand how tea is processed.</div></li>
                    <li className="activity-item"><div className="activity-dot">💧</div><div className="activity-text"><strong>Mattupetty Dam</strong> — A picturesque reservoir set against the hills, popular for its serene views and boating.</div></li>
                    <li className="activity-item"><div className="activity-dot">🌄</div><div className="activity-text"><strong>Kolukkumalai</strong> — The world's highest tea estate, offering breathtaking sunrise views. A rare and memorable experience.</div></li>
                    <li className="activity-item"><div className="activity-dot">🏨</div><div className="activity-text"><strong>Overnight Stay in Munnar</strong> — Rest well in the cool mountain air.</div></li>
                  </ul>
                </div>
              )}

              {activeDay === "day2" && (
                <div className="day-panel active">
                  <div className="day-title">Thekkady Exploration</div>
                  <div className="day-subtitle">Day 2 · Periyar Lake · Safari · Spice Garden · Kathakali</div>
                  <ul className="activity-list">
                    <li className="activity-item"><div className="activity-dot">🚗</div><div className="activity-text"><strong>Drive to Thekkady</strong> — Through spice-scented forests and winding mountain roads.</div></li>
                    <li className="activity-item"><div className="activity-dot">🚣</div><div className="activity-text"><strong>Periyar Lake Boat Ride</strong> — Cruise the lake inside Periyar wildlife sanctuary with chances of spotting elephants and bison.</div></li>
                    <li className="activity-item"><div className="activity-dot">🐘</div><div className="activity-text"><strong>Elephant or Jeep Safari</strong> — Choose your wildlife adventure inside the Periyar reserve forest.</div></li>
                    <li className="activity-item"><div className="activity-dot">🌿</div><div className="activity-text"><strong>Spice Garden Visit</strong> — Walk through a fragrant garden of cardamom, pepper, cloves and cinnamon with a knowledgeable guide.</div></li>
                    <li className="activity-item"><div className="activity-dot">🎭</div><div className="activity-text"><strong>Kathakali Cultural Show</strong> — An evening performance of Kerala's iconic classical dance-drama with elaborate costumes and facial expressions.</div></li>
                    <li className="activity-item"><div className="activity-dot">🏨</div><div className="activity-text"><strong>Overnight Stay in Thekkady</strong></div></li>
                  </ul>
                </div>
              )}

              {activeDay === "day3" && (
                <div className="day-panel active">
                  <div className="day-title">Alleppey Backwaters & Houseboat</div>
                  <div className="day-subtitle">Day 3 · Drive to Alleppey · Houseboat Check-in · Backwater Cruise</div>
                  <ul className="activity-list">
                    <li className="activity-item"><div className="activity-dot">🚗</div><div className="activity-text"><strong>Drive to Alleppey</strong> — Hotel check-out and scenic drive through Kerala's backwater belt.</div></li>
                    <li className="activity-item"><div className="activity-dot">🛥️</div><div className="activity-text"><strong>Houseboat Check-in</strong> — Board your traditional Kerala kettuvallam (houseboat) — a floating bedroom with a kitchen and sundeck.</div></li>
                    <li className="activity-item"><div className="activity-dot">🌿</div><div className="activity-text"><strong>Backwater Cruise</strong> — Drift through palm-lined canals, passing paddy fields, village life and tranquil waterways.</div></li>
                    <li className="activity-item"><div className="activity-dot">🍽️</div><div className="activity-text"><strong>Home-Style Meals On Board</strong> — Fresh Kerala fish curry, rice and vegetable dishes prepared by your houseboat cook.</div></li>
                    <li className="activity-item"><div className="activity-dot">🌙</div><div className="activity-text"><strong>Overnight Stay on Houseboat</strong> — Possibly the most memorable night of the trip — moored on still backwaters under a Kerala sky.</div></li>
                  </ul>
                </div>
              )}

              {activeDay === "day4" && (
                <div className="day-panel active">
                  <div className="day-title">Kochi Exploration & Departure</div>
                  <div className="day-subtitle">Day 4 · Fort Kochi · Jew Town · Shopping · Airport Drop</div>
                  <ul className="activity-list">
                    <li className="activity-item"><div className="activity-dot">🚗</div><div className="activity-text"><strong>Drive to Kochi</strong> — Check out from the houseboat and head to the heritage city of Kochi.</div></li>
                    <li className="activity-item"><div className="activity-dot">🎣</div><div className="activity-text"><strong>Fort Kochi & Chinese Fishing Nets</strong> — The iconic cantilevered fishing nets of Fort Kochi at sunrise are a photographer's dream.</div></li>
                    <li className="activity-item"><div className="activity-dot">🏛️</div><div className="activity-text"><strong>Jew Town & Spice Markets</strong> — Cobblestone streets, antique shops and the historic Paradesi synagogue.</div></li>
                    <li className="activity-item"><div className="activity-dot">🛍️</div><div className="activity-text"><strong>Shopping Time</strong> — Spices, Kasavu sarees, coir products and Kerala handicrafts to carry home.</div></li>
                    <li className="activity-item"><div className="activity-dot">✈️</div><div className="activity-text"><strong>Drop at Cochin Airport</strong> — Timely transfer for your return flight to Mumbai.</div></li>
                  </ul>
                </div>
              )}

              <div className="itin-ctas">
                <a href="tel:+917208771688" className="btn-primary">📞 Call Now</a>
                <a href={wa("I want to book the Kerala tour package from Mumbai")} className="btn-wa" style={{ padding: "14px 24px" }} target="_blank" rel="noopener noreferrer">Book Now</a>
                {/* <a href={wa("Please send me the Kerala tour itinerary PDF")} className="btn-secondary" style={{ padding: "14px 24px" }} target="_blank" rel="noopener noreferrer">📄 Download Itinerary</a> */}
              </div>
            </div>

            <div className="itin-img-stack">
              <img className="itin-img-main" src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=900&q=80" alt="Alleppey Houseboat Kerala" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
              <img className="itin-img-secondary" src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80" alt="Munnar Tea Gardens" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      {/* <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 12px" }}>What's Included</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Everything <em>Taken Care Of</em></h2>
          </div>
          <div className="inclusions-grid">
            <div className="inc-card reveal"><div className="inc-icon">✈️</div><div className="inc-title">Flight / Train Coordination</div><div className="inc-desc">Return flights or train bookings from Mumbai or Thane coordinated by our team, including Cochin airport pickup on arrival.</div></div>
            <div className="inc-card reveal reveal-delay-1"><div className="inc-icon">🏨</div><div className="inc-title">Hotel Stay + Houseboat Night</div><div className="inc-desc">Comfortable hotels in Munnar and Thekkady, plus a traditional Alleppey houseboat night — all vetted and pre-booked.</div></div>
            <div className="inc-card reveal reveal-delay-2"><div className="inc-icon">🚌</div><div className="inc-title">All Local Transport</div><div className="inc-desc">Private AC vehicle for all intercity transfers and sightseeing throughout the tour. No auto-haggling, no shared cabs.</div></div>
            <div className="inc-card reveal reveal-delay-3"><div className="inc-icon">🌿</div><div className="inc-title">All Sightseeing</div><div className="inc-desc">Tea gardens, Mattupetty Dam, Kolukkumalai, Periyar Lake, spice garden, Fort Kochi and Chinese fishing nets — all included.</div></div>
            <div className="inc-card reveal"><div className="inc-icon">🎭</div><div className="inc-title">Kathakali Cultural Show</div><div className="inc-desc">Entry to a Mudra Kathakali cultural show in Thekkady — one of Kerala's most iconic and unique art forms.</div></div>
            <div className="inc-card reveal reveal-delay-1"><div className="inc-icon">👤</div><div className="inc-title">Dedicated Tour Coordinator</div><div className="inc-desc">A Margika Yatra representative handles all logistics, timings, and on-ground support throughout your Kerala holiday.</div></div>
          </div>
        </div>
      </section> */}

      {/* THE COMPLETE JOURNEY */}
      <section className="complete-section">
        <div className="complete-wrap">
          <div className="complete-head reveal">
            <div className="complete-head">
              <div className="section-tag" style={{ color: "#ffffff", justifyContent: "center", margin: "0 auto 16px" }}>The Complete Journey</div>
              <h2 className="section-title" style={{ color: "#ffffff" }}>Complete Kerala<br /><em>Tour Package from Mumbai</em></h2>
              <div className="gold-rule" style={{ margin: "20px auto", background: "#ffffff" }}></div>
            </div>
          </div>
          <div className="complete-body reveal reveal-delay-1">
            <p>This Kerala travel package is designed as a relaxed yet complete holiday that families and couples from Mumbai and Thane can step straight into, flying into <strong>Cochin</strong> and travelling through the best of the state. Your journey begins in <strong>Munnar</strong>, where you explore the famous tea gardens, the <strong>Mattupetty Dam</strong> and the breathtaking sunrise viewpoint at <strong>Kolukkumalai</strong>, the world's highest tea estate.</p>
            <p>From the hills you move to <strong>Thekkady</strong>, home to the <strong>Periyar wildlife sanctuary</strong> — enjoy a lake boat ride, an elephant or jeep safari, a walk through fragrant <strong>spice gardens</strong> and an evening <strong>Kathakali cultural show</strong>. Next comes the highlight of any Kerala trip: a stay on a traditional <strong>Alleppey houseboat</strong>, drifting through the emerald backwaters with home-style meals served on board. The holiday winds down in <strong>Kochi</strong>, where you explore <strong>Fort Kochi</strong>, the Chinese fishing nets, historic <strong>Jew Town</strong> and the bustling markets, with time to shop before your departure.</p>
            <p>Every package includes return flights or train coordination, comfortable hotel stays, the houseboat experience, a private AC vehicle, sightseeing and a dedicated coordinator. For families and couples from Mumbai and Thane, this is one of the easiest and most rewarding ways to experience God's Own Country without any planning stress.</p>
            <div className="complete-ctas">
              <a href="tel:+917208771688" className="btn-dark">📞 Call Now</a>
              <a href={wa("I want to book the Kerala tour package from Mumbai")} className="btn-dark" target="_blank" rel="noopener noreferrer">Book Now →</a>
              <a href="/Kerala_Itinerary.pdf" download="Kerala_Itinerary.pdf" className="btn-dark">Download Itinerary</a>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE & PRICING */}
      <section className="price-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="price-header reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 12px" }}>Package & Pricing</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Your Kerala Holiday<br /><em>from Mumbai, Fully Sorted</em></h2>
            <div className="gold-rule" style={{ margin: "20px auto" }}></div>
            <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>One clear, well-organised Kerala tour package with price — travel, comfortable stays, a backwater houseboat, AC transport and full coordination from Mumbai &amp; Thane. Transparent pricing, no hidden costs.</p>
          </div>

          <div className="price-card reveal">
            <div className="price-card-media">
              <img src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=900&q=80" alt="Kerala tour package from Mumbai — Munnar, Thekkady, Alleppey, Kochi" onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
              <div className="price-badge">⭐ Most Loved</div>
              <div className="price-media-cities">
                <span>MUNNAR</span>
                <span>THEKKADY</span>
                <span>ALLEPPEY</span>
                <span>KOCHI</span>
              </div>
            </div>
            <div className="price-card-body">
              <div>
                <div className="pkg-duration">4 Days / 3 Nights · Munnar–Thekkady–Alleppey–Kochi · From Mumbai / Thane / Pune</div>
                <h3 className="pkg-name">Kerala Tour Package from Mumbai</h3>
                <p className="pkg-desc">The complete Kerala holiday — Munnar's tea gardens and Kolukkumalai, Thekkady's Periyar wildlife and spice gardens, an Alleppey backwater houseboat, and historic Fort Kochi. Flights/train, hotels, the houseboat stay, private AC transport and sightseeing all included.</p>
                <div className="pkg-includes">
                  <span className="pkg-tag">Houseboat Stay</span>
                  <span className="pkg-tag">Periyar Safari</span>
                  <span className="pkg-tag">Tea Gardens</span>
                  <span className="pkg-tag">Kathakali Show</span>
                  <span className="pkg-tag">Hotel Stay</span>
                  <span className="pkg-tag">AC Transport</span>
                  <span className="pkg-tag">Mumbai–Thane Support</span>
                </div>
              </div>
              <div className="price-footer">
                <div className="price-amount-wrap">
                  <span className="price-from">Starting from</span>
                  <span className="price-amount">₹18,999</span>
                  <span className="price-per"> / person</span>
                  <span className="price-note">Varies with travel mode, group size &amp; hotel category. Final quote on enquiry.</span>
                </div>
                <div className="price-actions">
                  <a href="tel:+917208771688" className="btn-book-outline">Call Us</a>
                  <a href={wa("I want to book the Kerala tour package from Mumbai")} className="btn-book" target="_blank" rel="noopener noreferrer">Book Now →</a>
                  <a href="/Kerala_Itinerary.pdf" download="Kerala_Itinerary.pdf" className="btn-book-outline">Download Itinerary</a>
                </div>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--smoke)", maxWidth: 640, margin: "28px auto 0" }}>
            Planning a honeymoon, a family trip or a senior-friendly Kerala holiday from Mumbai or Thane?{" "}
            <a href={wa("I want a custom Kerala package quote from Mumbai")} style={{ color: "var(--saffron)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              Message us for a personalised quote →
            </a>
          </p>
        </div>
      </section>

      {/* WHY MARGIKA */}
      <section className="why-section">
        <div className="why-grid">
          <div className="reveal">
            <div className="section-tag" style={{ color: "#ffffff", "--saffron": "#ffffff" } as React.CSSProperties}>Why Choose Us</div>
            <h2 className="section-title">Why Mumbai & Thane<br /><em>Travellers Choose Margika</em></h2>
            <div className="gold-rule" style={{ background: "#ffffff" }}></div>
            <p className="section-body">We are based in Brahmand, Thane. When you call us, you speak to someone from your community who understands your expectations and schedule. That local trust is something no large national portal can offer.</p>
            <ul className="features-list">
              <li className="feature-item"><div className="feature-icon">🌴</div><div className="feature-text"><h4>Tailored for Families & Couples</h4><p>Honeymoon, family or senior-friendly Kerala trips — the pace and stays are shaped around you.</p></div></li>
              <li className="feature-item"><div className="feature-icon">✈️</div><div className="feature-text"><h4>End-to-End from Mumbai</h4><p>Flights, Cochin transfers, hotels, the houseboat and all sightseeing — handled entirely by us.</p></div></li>
              <li className="feature-item"><div className="feature-icon">📍</div><div className="feature-text"><h4>Local Office in Thane</h4><p>Visit our Brahmand, Thane office before booking. Meet us in person and ask every question you have.</p></div></li>
              <li className="feature-item"><div className="feature-icon">💰</div><div className="feature-text"><h4>Transparent Pricing</h4><p>The price you see is the price you pay. No hidden extras or surprise charges at destination.</p></div></li>
              <li className="feature-item"><div className="feature-icon">📞</div><div className="feature-text"><h4>24×7 Support on Tour</h4><p>Our coordinator is with your group throughout the trip and our Thane office is reachable on WhatsApp.</p></div></li>
            </ul>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="why-visual">
              <img
                src="https://www.margikayatra.com/2.jpg"
                alt="Margika Yatra Kerala group"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80" }}
              />
              <div className="why-float-card">
                <p>"The houseboat night in Alleppey was the most peaceful evening our family has had in years."</p>
                <span>— Margika Yatra Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps-section">
        <div className="steps-header reveal">
          <div className="section-tag" style={{ justifyContent: "center", margin: "0 auto 16px" }}>Simple & Transparent</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>How Your <em>Booking Begins</em></h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="steps-grid">
          <div className="step-item reveal"><div className="step-dot">📞</div><div className="step-title">Inquiry</div><div className="step-desc">Call or WhatsApp us with your preferred dates and group size</div></div>
          <div className="step-item reveal reveal-delay-1"><div className="step-dot">💬</div><div className="step-title">Consultation</div><div className="step-desc">We understand your group, interests and travel preferences</div></div>
          <div className="step-item reveal reveal-delay-2"><div className="step-dot">📋</div><div className="step-title">Proposal</div><div className="step-desc">Clear itinerary with an honest per-person quote sent to you</div></div>
          <div className="step-item reveal reveal-delay-3"><div className="step-dot">✅</div><div className="step-title">Confirmation</div><div className="step-desc">Secure your booking with a simple advance payment</div></div>
          <div className="step-item reveal reveal-delay-4"><div className="step-dot">🌴</div><div className="step-title">On-Tour Support</div><div className="step-desc">Dedicated coordinator handles all logistics during the holiday</div></div>
          <div className="step-item reveal"><div className="step-dot">🙌</div><div className="step-title">Safe Return</div><div className="step-desc">We assist with transfers and follow up for your feedback</div></div>
        </div>
      </section>

      <GoogleReviews />

      {/* OTHER PACKAGES */}
      <section>
        <div className="itin-header reveal" style={{ textAlign: "center", margin: "0 auto 40px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Other Packages</div>
          <h2 className="section-title">Other Sacred & Holiday <em>Packages</em></h2>
          <div className="gold-rule" style={{ margin: "20px auto" }}></div>
        </div>
        <div className="other-pkgs reveal">
          <div className="opkg-card">
            <img className="opkg-img" src="/up.jpg" alt="Varanasi Ayodhya Prayagraj" />
            <div className="opkg-body">
              <h3 className="opkg-name">Varanasi–Ayodhya–Prayagraj</h3>
              <p className="opkg-desc">Cover the ultimate Uttar Pradesh tri-city circuit. Visit Ram Mandir, Triveni Sangam, and Kashi Vishwanath.</p>
              <Link href="/packages/tri-city" className="opkg-link">View Package →</Link>
            </div>
          </div>
          <div className="opkg-card">
            <img className="opkg-img" src="/rameshwaram.jpg" alt="Rameshwaram" />
            <div className="opkg-body">
              <h3 className="opkg-name">Rameshwaram & Madurai Meenakshi</h3>
              <p className="opkg-desc">Embark on a sacred Southern pilgrimage to the holy shores of Rameshwaram and the grand halls of Madurai.</p>
              <Link href="/packages/rameshwaram" className="opkg-link">View Package →</Link>
            </div>
          </div>
          <div className="opkg-card">
            <img className="opkg-img" src="/dd.jpg" alt="Dev Deepawali Varanasi" />
            <div className="opkg-body">
              <h3 className="opkg-name">Dev Deepawali Varanasi</h3>
              <p className="opkg-desc">Witness the gods' own Diwali — a million earthen lamps lining all 84 ghats of Kashi on Kartik Purnima.</p>
              <Link href="/packages/dev-deepawali" className="opkg-link">View Package →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="faq-grid">
          <div className="reveal">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">Frequently<br /><em>Asked Questions</em></h2>
            <div className="gold-rule"></div>
            <p className="section-body">Everything you need to know before booking your Kerala tour package from Mumbai or Thane.</p>
            <div className="itin-ctas" style={{ marginTop: 24 }}>
              <a href="tel:+917208771688" className="btn-primary">📞 Speak to an Expert</a>
              <a href={wa("I have a question about the Kerala tour package")} className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp a Question</a>
            </div>
          </div>
          <div className="faq-list reveal">
            {[
              ["What is included in the Kerala tour package from Mumbai?", "Your package includes return travel coordination (flight or train), comfortable hotel stays, an Alleppey backwater houseboat experience, private AC transport for all transfers and sightseeing, and guided visits across Munnar, Thekkady, Alleppey and Kochi with full support from our Thane team."],
              ["How do I reach Kerala from Mumbai?", "The fastest way is a direct flight from Mumbai to Cochin (around 2–2.5 hours), from where your tour begins. We arrange the best option for your budget and dates and handle the Cochin airport pickup and all onward transfers."],
              ["How many days are enough for a Kerala trip from Mumbai?", "A 4-day trip comfortably covers Munnar, Thekkady, Alleppey and Kochi at a relaxed pace. If you would like to add Kovalam, Wayanad or Guruvayur, we can extend to 6–7 days."],
              ["What is the price of a Kerala tour package from Mumbai?", "Our Kerala packages start from around ₹18,999 per person, depending on travel mode, season, hotel category and group size. Share your dates on WhatsApp and we will send a clear, transparent quote with no hidden costs."],
              ["Is this Kerala package good for couples and honeymoon?", "Yes. Kerala is one of India's most popular honeymoon destinations. We can upgrade hotels, add a candlelight dinner or a private houseboat to make your Kerala honeymoon extra special."],
              ["Is Kerala suitable for a family trip with kids and elders?", "Absolutely. The pace is gentle, drives are scenic, and experiences — tea gardens, wildlife safari, houseboat, beach — are enjoyable for all ages. We arrange family rooms, suitable meals and extra attention for elderly travellers."],
            ].map(([q, a], idx) => (
              <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={idx}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {q}<span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-content reveal">
          <h2 className="section-title" style={{ color: "var(--white)", marginBottom: 16 }}>Book Your Kerala Holiday Today</h2>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.8)", margin: "0 auto 32px" }}>
            Kerala houseboat slots and hill-station hotels fill up fast, especially for peak season. Plan your Mumbai–Kerala holiday today.
          </p>
          <div className="cta-buttons">
            <a href="tel:+917208771688" className="btn-primary">📞 Call Now to Book</a>
            <a href={wa("I want to check availability for Kerala tour package from Mumbai")} className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp to Check Availability</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* STICKY WA */}
      <a href={wa("Hi Margika Yatra! I want to enquire about Kerala tour package")} className="sticky-wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}