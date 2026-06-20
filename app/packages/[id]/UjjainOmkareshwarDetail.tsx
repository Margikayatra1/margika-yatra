"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { GoogleReviews } from "@/components/ui/google-reviews"

export function UjjainOmkareshwarDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const razorpayLink = "https://rzp.io/rzp/zCOhd60"

  useEffect(() => {
    // Scroll listener for nav element
    const nav = document.getElementById("mainNav")
    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav?.classList.add("scrolled")
      } else {
        nav?.classList.remove("scrolled")
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Scroll reveal setup
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // Set page SEO metadata dynamically
    document.title = "Ujjain Omkareshwar Tour Package from Mumbai & Thane | Margika Yatra"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Book Ujjain Omkareshwar Tour Package from Mumbai & Thane with Margika Yatra. Mahakal Bhasma Aarti, VIP Darshan at 2 Jyotirlingas, Narmada Boat Ride. 3 Nights / 4 Days. Call now."
      )
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  const faqs = [
    [
      "What is included in the Ujjain Omkareshwar tour package?",
      "The package covers hotel accommodation (2 nights in Ujjain), Mahakal Bhasma Aarti VIP pass, VIP Darshan at Omkareshwar and Mamleshwar Jyotirlinga, Narmada boat ride, Shani Mandir, all Ujjain temple visits, breakfast and dinner daily, and a private AC vehicle throughout. Train or flight travel to Ujjain is not included — we help you plan this separately."
    ],
    [
      "How do I reach Ujjain from Mumbai or Thane?",
      "The most practical option is an overnight train from CSMT or Dadar — the Avantika Express (12961) or Maharashtra Express (11093) reach Ujjain in roughly 12–14 hours. You can also fly into Indore airport (about 55 km from Ujjain). We guide you on the best travel option based on your dates and group."
    ],
    [
      "Is Bhasma Aarti guaranteed in this package?",
      "We book Bhasma Aarti passes well in advance and these are almost always secured. However, in rare cases where the temple management cancels or restricts passes due to official events or VIP schedules, it is beyond any operator's control. In such situations, we make every effort to provide a meaningful alternative experience — we do not leave this unaddressed."
    ],
    [
      "What is the best time to visit Ujjain and Omkareshwar?",
      "October to March is the most comfortable period — pleasant temperatures, manageable crowds, and clear skies. Summers (April to June) can be very hot in Madhya Pradesh. The Mahashivaratri period and Navratri see very high footfall at both temples. If you prefer a quieter, more composed darshan, avoid peak festival weeks."
    ],
    [
      "Is this package suitable for senior citizens?",
      "Yes. Ujjain and Omkareshwar are both relatively accessible — no mountain trekking or extreme altitude. We request ground-floor rooms, ensure comfortable pacing, and give extra attention to elderly travellers. The only physically demanding part is the Bhasma Aarti timing (after midnight) — we advise senior yatris to rest well the previous afternoon."
    ],
    [
      "Can I customise this package for my group or family?",
      "Absolutely. Group size, duration, hotel category, additional temples, or an extended stay — we customise all of it. Many families from Thane and Mumbai book private group departures so they travel at their own pace without joining a fixed batch. WhatsApp us with your group size and we will share a personalised quote."
    ],
    [
      "What other temples are visited in Ujjain apart from Mahakaleshwar?",
      "On Day 1, the itinerary covers Kaal Bhairav Temple, Gadkalika Mata, Mangal Nath (the origin point of Mars in Vedic astrology), Harsiddhi Mata, Rinmukteshwar Temple, and the Ram Ghat Shipra Aarti. Ujjain has 84 major temples — the ones on our itinerary are the most spiritually significant and well-connected for a one-day circuit."
    ],
    [
      "What is the significance of Omkareshwar Jyotirlinga?",
      "Omkareshwar is the fourth of the twelve Jyotirlingas. It is located on Mandhata Island in the Narmada River — a natural island shaped like the Sanskrit symbol Om. The temple enshrines both Omkareshwar and Mamleshwar (considered part of the same Jyotirlinga) on either side of the river. A visit here, combined with the Narmada boat ride, is a deeply moving experience."
    ]
  ]

  return (
    <div className="ujjain-page">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(([q, a]) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": a
              }
            }))
          })
        }}
      />

      {/* TourPackage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Ujjain Omkareshwar Tour Package",
            "description": "3 Nights 4 Days spiritual tour covering Mahakaleshwar Jyotirlinga Ujjain and Omkareshwar Jyotirlinga with Bhasma Aarti, VIP Darshan, and Narmada Boat Ride.",
            "provider": {
              "@type": "TravelAgency",
              "name": "Margika Yatra",
              "url": "https://www.margikayatra.com",
              "telephone": "+917208771688",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Brahmand, Azad Nagar",
                "addressLocality": "Thane West",
                "postalCode": "400607",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "touristType": "PilgrimageTourist",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "15999",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "15999",
                "priceCurrency": "INR",
                "unitText": "per person"
              }
            }
          })
        }}
      />
      <style jsx global>{`
        .ujjain-page {
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
          --section-pad: clamp(60px, 8vw, 100px);

          background: linear-gradient(to bottom right, #ffffff, #fff7ed, #ffedd5);
          color: var(--cream);
          font-family: 'Jost', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .ujjain-page * { box-sizing: border-box; }
        .ujjain-page *:not(header, header *, footer, footer *) { margin: 0; padding: 0; }
        
        .ujjain-page ::-webkit-scrollbar { width: 4px; }
        .ujjain-page ::-webkit-scrollbar-track { background: var(--ink-mid); }
        .ujjain-page ::-webkit-scrollbar-thumb { background: var(--saffron); border-radius: 2px; }



        /* HERO */
        .ujjain-page .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: url('/rambg.jpg') center/cover no-repeat; }
        .ujjain-page .hero-img {
          position: absolute; inset: 0;
          background: url('Ujjainmain.png') center/cover no-repeat;
          transform: scale(1.05);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }
        .ujjain-page .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.85) 100%);
        }
        .ujjain-page .hero-content {
          position: relative; z-index: 2;
          padding: 0 5% 80px; max-width: 820px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 1.2s 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .ujjain-page .hero-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--saffron); margin-bottom: 20px; }
        .ujjain-page .hero-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--saffron); }
        .ujjain-page .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(42px, 7vw, 84px); font-weight: 300; line-height: 1.1; color: var(--white); margin-bottom: 12px; }
        .ujjain-page .hero-title em { color: #f5a94e; font-style: italic; }
        .ujjain-page .hero-subtitle { font-size: 15px; font-weight: 300; color: rgba(255, 255, 255, 0.85); margin-bottom: 40px; max-width: 520px; line-height: 1.7; }
        .ujjain-page .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .ujjain-page .hero-badges { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 28px; }
        .ujjain-page .hero-badge { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(255, 255, 255, 0.85); letter-spacing: 0.05em; }
        .ujjain-page .hero-badge::before { content: '✓'; color: var(--saffron); font-weight: 600; }

        .ujjain-page .btn-primary { display: inline-flex; align-items: center; gap: 10px; background: var(--saffron); color: var(--white); padding: 16px 32px; border-radius: 2px; font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; position: relative; overflow: hidden; }
        .ujjain-page .btn-primary::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.15); opacity: 0; transition: opacity 0.3s; }
        .ujjain-page .btn-primary:hover::after { opacity: 1; }
        .ujjain-page .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .ujjain-page .btn-secondary { display: inline-flex; align-items: center; gap: 10px; background: transparent; color: var(--white); padding: 16px 32px; border-radius: 2px; border: 1px solid rgba(255, 255, 255, 0.4); font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; cursor: pointer; transition: all 0.3s; }
        .ujjain-page .btn-secondary:hover { border-color: var(--white); background: rgba(255, 255, 255, 0.1); color: var(--white); }
        .ujjain-page .btn-wa { display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: white; padding: 16px 32px; border-radius: 2px; font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s; }
        .ujjain-page .btn-wa:hover { background: #1EB858; transform: translateY(-2px); }
        .ujjain-page .btn-wa svg { width: 18px; height: 18px; fill: white; }
        .ujjain-page .char-btn-outline {
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
        .ujjain-page .char-btn-outline:hover {
          border-color: var(--gold);
          background: rgba(249, 115, 22, 0.12);
          color: var(--gold);
        }

        /* STATS STRIP */
        .ujjain-page .stats-strip { position: relative; z-index: 3; background: linear-gradient(90deg, var(--saffron-dark), var(--saffron)); padding: 28px 5%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .ujjain-page .stat-item { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .ujjain-page .stat-item:last-child { border-right: none; }
        .ujjain-page .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 600; color: var(--white); line-height: 1; }
        .ujjain-page .stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }

        /* SECTION SHARED */
        .ujjain-page section { padding: var(--section-pad) 5%; }
        .ujjain-page .section-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--saffron); margin-bottom: 16px; }
        .ujjain-page .section-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--saffron); }
        .ujjain-page .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 400; line-height: 1.2; color: var(--cream); margin-bottom: 16px; }
        .ujjain-page .section-title em { color: var(--gold); font-style: italic; }
        .ujjain-page .section-body { font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--smoke); max-width: 620px; }
        .ujjain-page .gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }

        /* INTRO */
        .ujjain-page .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .ujjain-page .intro-visual { position: relative; }
        .ujjain-page .intro-img-main { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; filter: brightness(0.85) saturate(1.1); }
        .ujjain-page .intro-img-float { position: absolute; bottom: -30px; right: -30px; width: 200px; height: 200px; object-fit: cover; border-radius: 4px; border: 4px solid var(--ink-mid); filter: brightness(0.9) saturate(1.2); }
        .ujjain-page .intro-quote { margin-top: 40px; padding: 24px 28px; border-left: 2px solid var(--saffron); background: rgba(249, 115, 22, 0.05); border-radius: 0 4px 4px 0; }
        .ujjain-page .intro-quote p { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--gold); line-height: 1.6; }

        /* HIGHLIGHTS GRID */
        .ujjain-page .highlights-section { background: rgba(249, 115, 22, 0.03); }
        .ujjain-page .highlights-header { text-align: center; max-width: 600px; margin: 0 auto 60px; }
        .ujjain-page .highlights-header .gold-rule { margin: 24px auto; }
        .ujjain-page .highlights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto; }
        .ujjain-page .hl-card { position: relative; height: 380px; overflow: hidden; cursor: default; }
        .ujjain-page .hl-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.55) saturate(1.1); }
        .ujjain-page .hl-card:hover img { transform: scale(1.08); filter: brightness(0.72) saturate(1.2); }
        .ujjain-page .hl-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
        .ujjain-page .hl-num { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 300; color: rgba(255, 255, 255, 0.22); line-height: 1; margin-bottom: 4px; transform: translateY(10px); transition: transform 0.5s, color 0.5s; }
        .ujjain-page .hl-card:hover .hl-num { color: rgba(255, 255, 255, 0.5); transform: translateY(0); }
        .ujjain-page .hl-name { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 500; color: #ffffff; margin-bottom: 4px; }
        .ujjain-page .hl-desc { font-size: 12px; letter-spacing: 0.08em; color: var(--saffron); text-transform: uppercase; }
        .ujjain-page .hl-detail { font-size: 13px; color: rgba(255, 255, 255, 0.85); margin-top: 8px; max-height: 0; overflow: hidden; transition: max-height 0.5s, opacity 0.4s; opacity: 0; line-height: 1.6; }
        .ujjain-page .hl-card:hover .hl-detail { max-height: 80px; opacity: 1; }

        /* PACKAGE PRICING */
        .ujjain-page .price-section { background: rgba(249, 115, 22, 0.02); }
        .ujjain-page .price-header { text-align: center; max-width: 660px; margin: 0 auto 50px; }
        .ujjain-page .price-header .gold-rule { margin: 24px auto; }
        .ujjain-page .price-card {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1.1fr 1fr;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.15);
          border-radius: 8px; overflow: hidden;
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.06);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .ujjain-page .price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 50px rgba(249, 115, 22, 0.1); }
        .ujjain-page .price-card-media { position: relative; min-height: 440px; overflow: hidden; }
        .ujjain-page .price-card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.78) saturate(1.1); transition: transform 0.6s; }
        .ujjain-page .price-card:hover .price-card-media img { transform: scale(1.05); }
        .ujjain-page .price-badge {
          position: absolute; top: 18px; left: 18px;
          background: var(--saffron); color: var(--white);
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 2px;
        }
        .ujjain-page .price-media-cities { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; gap: 8px; flex-wrap: wrap; }
        .ujjain-page .price-media-cities span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          color: var(--white); background: rgba(26,18,8,0.6);
          border: 1px solid rgba(212,175,106,0.4);
          padding: 6px 14px; border-radius: 2px; backdrop-filter: blur(4px);
        }
        .ujjain-page .price-card-body { padding: 40px 42px; display: flex; flex-direction: column; justify-content: space-between; }
        .ujjain-page .price-card-body .pkg-duration { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--saffron); margin-bottom: 10px; }
        .ujjain-page .price-card-body .pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 500; color: var(--cream); margin-bottom: 14px; line-height: 1.15; }
        .ujjain-page .price-card-body .pkg-desc { font-size: 14px; color: var(--smoke); line-height: 1.75; margin-bottom: 22px; }
        .ujjain-page .price-card-body .pkg-includes { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; }
        .ujjain-page .price-card-body .pkg-tag { font-size: 11px; padding: 5px 12px; border-radius: 20px; background: rgba(249, 115, 22, 0.08); color: var(--gold); border: 1px solid rgba(249, 115, 22, 0.2); }
        .ujjain-page .price-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: auto; }
        .ujjain-page .price-amount-wrap { display: flex; flex-direction: column; }
        .ujjain-page .price-from { font-size: 11px; color: var(--smoke); letter-spacing: 0.06em; }
        .ujjain-page .price-amount { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: var(--gold); line-height: 1.1; }
        .ujjain-page .price-per { font-size: 13px; color: var(--smoke); margin-top: -4px; }
        .ujjain-page .price-note { font-size: 11px; color: var(--smoke); margin-top: 8px; max-width: 240px; line-height: 1.5; }
        .ujjain-page .price-actions { display: flex; gap: 12px; align-items: center; }
        .ujjain-page .btn-book { background: var(--saffron); color: white; padding: 13px 24px; border-radius: 2px; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; transition: all 0.3s; cursor: pointer; border: none; }
        .ujjain-page .btn-book:hover { background: var(--saffron-light); }
        .ujjain-page .btn-book-outline { background: transparent; color: var(--gold); padding: 13px 26px; border-radius: 2px; border: 1px solid rgba(194, 65, 12, 0.45); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: all 0.3s; cursor: pointer; }
        .ujjain-page .btn-book-outline:hover { background: rgba(249, 115, 22, 0.08); }

        /* ITINERARY */
        .ujjain-page .itinerary-section { background: rgba(249, 115, 22, 0.02); }
        .ujjain-page .itinerary-header { text-align: center; max-width: 600px; margin: 0 auto 60px; }
        .ujjain-page .itinerary-header .gold-rule { margin: 20px auto; }
        .ujjain-page .itinerary-days { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
        .ujjain-page .day-card { border-radius: 6px; overflow: hidden; background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(249, 115, 22, 0.15); transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s; }
        .ujjain-page .day-card:hover { transform: translateY(-6px); border-color: rgba(232, 135, 26, 0.45); box-shadow: 0 12px 40px rgba(249, 115, 22, 0.08); }
        .ujjain-page .day-img { position: relative; height: 200px; overflow: hidden; }
        .ujjain-page .day-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: brightness(0.75) saturate(1.1); }
        .ujjain-page .day-card:hover .day-img img { transform: scale(1.05); }
        .ujjain-page .day-badge { position: absolute; top: 16px; left: 16px; background: var(--saffron); color: white; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 12px; border-radius: 2px; }
        .ujjain-page .day-body { padding: 24px 26px 28px; }
        .ujjain-page .day-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 500; color: var(--cream); margin-bottom: 16px; }
        .ujjain-page .day-stops { list-style: none; }
        .ujjain-page .day-stops li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: var(--cream); line-height: 1.5; padding: 6px 0; border-bottom: 1px solid rgba(249, 115, 22, 0.08); }
        .ujjain-page .day-stops li:last-child { border-bottom: none; }
        .ujjain-page .day-stops li::before { content: '🕉'; font-size: 12px; margin-top: 1px; flex-shrink: 0; color: var(--saffron); }
        .ujjain-page .day-note { margin-top: 14px; padding: 12px 14px; background: rgba(249, 115, 22, 0.05); border-left: 2px solid var(--saffron); border-radius: 0 3px 3px 0; font-size: 12px; color: var(--smoke); line-height: 1.6; }

        /* WHY US - Inverted Dark Section */
        .ujjain-page .why-section { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%); color: #ffffff; }
        .ujjain-page .why-section .section-title { color: #ffffff; }
        .ujjain-page .why-section .section-body { color: rgba(255, 255, 255, 0.85); }
        .ujjain-page .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .ujjain-page .why-visual { position: relative; }
        .ujjain-page .why-visual img { width: 100%; height: 520px; object-fit: cover; border-radius: 4px; }
        .ujjain-page .why-float-card { position: absolute; bottom: -20px; left: -20px; background: var(--ink-mid); color: var(--cream); padding: 24px 28px; border-radius: 4px; border-left: 3px solid var(--saffron); box-shadow: 0 20px 50px rgba(0,0,0,0.15); max-width: 300px; }
        .ujjain-page .why-float-card p { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-style: italic; color: var(--gold); }
        .ujjain-page .why-float-card span { font-size: 12px; color: var(--smoke); letter-spacing: 0.08em; margin-top: 8px; display: block; }
        .ujjain-page .features-list { list-style: none; margin-top: 40px; }
        .ujjain-page .feature-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1); transition: padding-left 0.3s; }
        .ujjain-page .feature-item:hover { padding-left: 8px; }
        .ujjain-page .feature-item:last-child { border-bottom: none; }
        .ujjain-page .feature-icon { width: 40px; height: 40px; min-width: 40px; background: rgba(255, 255, 255, 0.15); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .ujjain-page .feature-text h4 { font-size: 15px; font-weight: 500; color: #ffffff; margin-bottom: 3px; }
        .ujjain-page .feature-text p { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.5; }

        /* BOOKING STEPS */
        .ujjain-page .steps-section { background: rgba(249, 115, 22, 0.03); }
        .ujjain-page .steps-header { text-align: center; margin-bottom: 60px; }
        .ujjain-page .steps-header .gold-rule { margin: 20px auto; }
        .ujjain-page .steps-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; max-width: 1100px; margin: 0 auto; position: relative; }
        .ujjain-page .steps-grid::before { content: ''; position: absolute; top: 32px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--saffron), transparent); }
        .ujjain-page .step-item { text-align: center; padding: 0 10px; }
        .ujjain-page .step-dot { width: 64px; height: 64px; border-radius: 50%; background: rgba(232, 135, 26, 0.12); border: 1px solid rgba(232, 135, 26, 0.35); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 16px; position: relative; z-index: 1; transition: all 0.3s; }
        .ujjain-page .step-item:hover .step-dot { background: var(--saffron); border-color: var(--saffron); transform: scale(1.1); }
        .ujjain-page .step-title { font-size: 13px; font-weight: 500; color: var(--cream); margin-bottom: 6px; }
        .ujjain-page .step-desc { font-size: 12px; color: var(--smoke); line-height: 1.5; }

        /* OTHER PACKAGES */
        .ujjain-page .pkg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1200px; margin: 40px auto 0; }
        .ujjain-page .pkg-card { border-radius: 6px; overflow: hidden; background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(249, 115, 22, 0.15); transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s; }
        .ujjain-page .pkg-card:hover { transform: translateY(-5px); border-color: rgba(232, 135, 26, 0.35); box-shadow: 0 10px 30px rgba(249, 115, 22, 0.08); }
        .ujjain-page .pkg-img { position: relative; height: 200px; overflow: hidden; }
        .ujjain-page .pkg-img img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75) saturate(1.1); transition: transform 0.6s; }
        .ujjain-page .pkg-card:hover .pkg-img img { transform: scale(1.05); }
        .ujjain-page .pkg-badge { position: absolute; top: 14px; left: 14px; background: var(--saffron); color: white; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; }
        .ujjain-page .pkg-body { padding: 22px 24px 26px; }
        .ujjain-page .pkg-duration { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--saffron); margin-bottom: 6px; }
        .ujjain-page .pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 500; color: var(--cream); margin-bottom: 10px; }
        .ujjain-page .pkg-desc { font-size: 13px; color: var(--smoke); line-height: 1.7; margin-bottom: 18px; }
        .ujjain-page .pkg-cta { display: inline-flex; text-decoration: none; background: var(--saffron); color: white; padding: 10px 22px; border-radius: 2px; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.3s; }
        .ujjain-page .pkg-cta:hover { background: var(--saffron-light); }

        /* TESTIMONIAL */
        .ujjain-page .testimonial-section { background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 50%, var(--saffron-dark) 100%); text-align: center; padding: 80px 5%; }
        .ujjain-page .testimonial-icon { font-size: 40px; margin-bottom: 20px; opacity: 0.6; }
        .ujjain-page .testimonial-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(22px, 3vw, 34px); font-weight: 400; font-style: italic; color: var(--white); max-width: 800px; margin: 0 auto 24px; line-height: 1.5; }
        .ujjain-page .testimonial-author { font-size: 13px; letter-spacing: 0.12em; color: rgba(255,255,255,0.8); }
        .ujjain-page .testimonial-stars { font-size: 18px; color: var(--gold-light); margin-top: 12px; letter-spacing: 4px; }

        /* FAQ */
        .ujjain-page .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1200px; margin: 0 auto; }
        .ujjain-page .faq-list { margin-top: 0; }
        .ujjain-page .faq-item { border-bottom: 1px solid rgba(249, 115, 22, 0.15); overflow: hidden; }
        .ujjain-page .faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15px; font-weight: 400; color: var(--cream); transition: color 0.3s; gap: 12px; }
        .ujjain-page .faq-q:hover { color: var(--gold); }
        .ujjain-page .faq-icon { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; border: 1px solid rgba(249, 115, 22, 0.3); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--gold); transition: transform 0.3s; }
        .ujjain-page .faq-item.open .faq-icon { transform: rotate(45deg); }
        .ujjain-page .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; font-size: 14px; color: var(--smoke); line-height: 1.75; }
        .ujjain-page .faq-item.open .faq-a { max-height: 200px; padding-bottom: 20px; }

        /* CTA BANNER */
        .ujjain-page .cta-banner { position: relative; padding: 100px 5%; display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; background: url('/rambg.jpg') center/cover no-repeat; }
        .ujjain-page .cta-banner::before { content: ''; position: absolute; inset: 0; background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Omkareshwar_temple.jpg/1280px-Omkareshwar_temple.jpg') center/cover no-repeat; filter: brightness(0.22) saturate(0.7); }
        .ujjain-page .cta-banner-content { position: relative; z-index: 1; max-width: 700px; }
        .ujjain-page .cta-banner .section-title { text-align: center; color: #ffffff; }
        .ujjain-page .cta-banner .section-body { margin: 0 auto 40px; text-align: center; color: rgba(255, 255, 255, 0.85); }
        .ujjain-page .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* GALLERY */
        .ujjain-page .gallery-strip { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 240px 240px; gap: 4px; max-width: 1300px; margin: 40px auto 80px; }
        .ujjain-page .gallery-item { overflow: hidden; position: relative; }
        .ujjain-page .gallery-item img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8) saturate(1.1); transition: transform 0.5s, filter 0.5s; }
        .ujjain-page .gallery-item:hover img { transform: scale(1.06); filter: brightness(0.9) saturate(1.3); }
        .ujjain-page .gallery-item:nth-child(1) { grid-row: span 2; }
        .ujjain-page .gallery-item:nth-child(5) { grid-column: span 2; }



        /* STICKY WA */
        .ujjain-page .sticky-wa { position: fixed; bottom: 28px; right: 28px; z-index: 200; width: 58px; height: 58px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.5); text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; animation: pulse-wa 3s infinite; }
        .ujjain-page .sticky-wa:hover { transform: scale(1.1); box-shadow: 0 6px 30px rgba(37,211,102,0.7); }
        @keyframes pulse-wa { 0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); } 50% { box-shadow: 0 4px 30px rgba(37,211,102,0.8); } }
        .ujjain-page .sticky-wa svg { width: 30px; height: 30px; fill: white; }

        /* ANIMATIONS */
        .ujjain-page .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .ujjain-page .reveal.visible { opacity: 1; transform: translateY(0); }
        .ujjain-page .reveal-delay-1 { transition-delay: 0.1s; }
        .ujjain-page .reveal-delay-2 { transition-delay: 0.2s; }
        .ujjain-page .reveal-delay-3 { transition-delay: 0.3s; }
        .ujjain-page .reveal-delay-4 { transition-delay: 0.4s; }

        /* NOTE BOX */
        .ujjain-page .note-box { background: rgba(249, 115, 22, 0.05); border: 1px solid rgba(249, 115, 22, 0.2); border-radius: 6px; padding: 20px 24px; margin-top: 32px; max-width: 1200px; margin-left: auto; margin-right: auto; }
        .ujjain-page .note-box p { font-size: 13px; color: var(--smoke); line-height: 1.7; }
        .ujjain-page .note-box strong { color: var(--saffron); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .ujjain-page .intro-grid, .ujjain-page .why-grid, .ujjain-page .faq-grid { grid-template-columns: 1fr; }
          .ujjain-page .price-card { grid-template-columns: 1fr; }
          .ujjain-page .price-card-media { min-height: 260px; }
          .ujjain-page .highlights-grid { grid-template-columns: 1fr 1fr; }
          .ujjain-page .itinerary-days { grid-template-columns: 1fr; }
          .ujjain-page .steps-grid { grid-template-columns: repeat(3, 1fr); }
          .ujjain-page .gallery-strip { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
          .ujjain-page .gallery-item:nth-child(1) { grid-row: span 1; }
          .ujjain-page .gallery-item:nth-child(5) { grid-column: span 1; }
          .ujjain-page .stats-strip { grid-template-columns: 1fr 1fr; gap: 20px; }
          .ujjain-page .stat-item { border-right: none; }

          .ujjain-page .intro-img-float { display: none; }
          .ujjain-page .pkg-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .ujjain-page .price-footer { flex-direction: column; align-items: flex-start; }
          .ujjain-page .price-card-body { padding: 30px 26px; }
          .ujjain-page .highlights-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">2 Sacred Jyotirlingas · 3 Nights 4 Days</div>
          <h1 className="hero-title">Ujjain Omkareshwar<br /><em>Tour Package</em></h1>
          <p className="hero-subtitle">Mahakal Bhasma Aarti at dawn. VIP darshan at two Jyotirlingas. The sacred Narmada at Omkareshwar. Departing from Mumbai &amp; Thane — fully planned, nothing to worry about.</p>
          <div className="hero-ctas">
            <a href="tel:+917208771688" className="btn-primary">📞 Call to Book</a>
            <a href={wa("I want to enquire about Ujjain Omkareshwar tour package")} className="btn-wa" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href="/Ujjain.pdf" download="Ujjain.pdf" className="char-btn-outline">
              Download Itinerary
            </a>
          </div>
          <div className="hero-badges">
            <span className="hero-badge">Bhasma Aarti Pass Included</span>
            <span className="hero-badge">VIP Darshan at Both Jyotirlingas</span>
            <span className="hero-badge">Departures from Mumbai &amp; Thane</span>
            <span className="hero-badge">Vegetarian Meals</span>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">Happy Yatris</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4.9★</div>
          <div className="stat-label">Google Rating</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2</div>
          <div className="stat-label">Jyotirlingas Covered</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">VIP Darshan Assured</div>
        </div>
      </div>

      {/* INTRO / ABOUT */}
      <section>
        <div className="intro-grid">
          <div className="intro-visual reveal">
            <img className="intro-img-main"
              src="/Ujjainmain2.png"
              alt="Mahakaleshwar Temple Ujjain — Jyotirlinga"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }} />
            <img className="intro-img-float"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Omkareshwar_temple.jpg/640px-Omkareshwar_temple.jpg"
              alt="Omkareshwar Jyotirlinga on Narmada Island"
              onError={(e) => { (e.target as HTMLElement).style.display = 'none' }} />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-tag">2 Jyotirlingas · One Sacred Journey</div>
            <h2 className="section-title">Ujjain Omkareshwar Tour Package —<br /><em>Where Shiva's Presence Is Felt</em></h2>
            <div className="gold-rule"></div>
            <p className="section-body">Ujjain is one of the seven sacred cities in Hinduism — home to Mahakaleshwar, the only south-facing Jyotirlinga and the only one where Bhasma Aarti is performed with sacred ash at midnight. Omkareshwar, just 130 km away, sits on a natural island in the Narmada River shaped like the Om symbol — home to the fourth Jyotirlinga.</p>
            <p className="section-body" style={{ marginTop: '16px' }}>Covering both in a single 3-night, 4-day trip is not just convenient — it is the ideal way to complete two out of twelve Jyotirlingas in one meaningful journey. Travellers from Mumbai and Thane find this one of the most spiritually fulfilling short breaks they can plan in India.</p>
            <div className="intro-quote">
              <p>"Two Jyotirlingas. Four days. A lifetime of memory."</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION HIGHLIGHTS */}
      <section className="highlights-section">
        <div className="highlights-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Sacred Destinations</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>The Temples You<br /><em>Will Visit</em></h2>
          <div className="gold-rule"></div>
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>Each stop on this itinerary carries centuries of devotion. Here is what makes this route so spiritually significant.</p>
        </div>
        <div className="highlights-grid">
          <div className="hl-card">
            <img
              src="/Ujj1.jpg"
              alt="Mahakaleshwar Temple Ujjain — Jyotirlinga"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">01</div>
              <div className="hl-name">Mahakaleshwar Temple</div>
              <div className="hl-desc">Jyotirlinga No. 3 · Ujjain</div>
              <div className="hl-detail">The only south-facing Jyotirlinga in all twelve. Bhasma Aarti here — performed with sacred ash — begins around 4:00 AM and is unlike any spiritual experience in India.</div>
            </div>
          </div>
          <div className="hl-card">
            <img
              src="Ujj2.jpg"
              alt="Omkareshwar Jyotirlinga Temple Madhya Pradesh"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">02</div>
              <div className="hl-name">Omkareshwar Jyotirlinga</div>
              <div className="hl-desc">Jyotirlinga No. 4 · Narmada Island</div>
              <div className="hl-detail">Situated on Mandhata Island where the Narmada and Kaveri rivers meet, forming the sacred Om shape. VIP darshan is arranged to ensure a composed, peaceful experience.</div>
            </div>
          </div>
          <div className="hl-card">
            <img
              src="Ujj3.jpg"
              alt="Ram Ghat Ujjain Shipra Aarti"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
            <div className="hl-overlay">
              <div className="hl-num">03</div>
              <div className="hl-name">Ram Ghat Shipra Aarti</div>
              <div className="hl-desc">Sacred Ghat · Ujjain</div>
              <div className="hl-detail">The evening aarti on the banks of the Shipra River is one of Ujjain's most calming rituals. The chanting, lamps, and river reflections stay with you long after you leave.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE PRICING */}
      <section className="price-section">
        <div className="price-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Package & Pricing</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Your Ujjain Omkareshwar<br /><em>Yatra, Fully Sorted</em></h2>
          <div className="gold-rule"></div>
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>One clear, all-inclusive Ujjain Omkareshwar tour package — Mahakal Bhasma Aarti VIP pass, VIP Darshan at both Jyotirlingas, hotels, private AC transport, vegetarian meals and full coordination from Mumbai &amp; Thane. Transparent pricing, no hidden costs.</p>
        </div>

        <div className="price-card reveal">
          <div className="price-card-media">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Omkareshwar_Jyotirlinga_Temple%2C_Madhya_Pradesh%2C_India.jpg/1280px-Omkareshwar_Jyotirlinga_Temple%2C_Madhya_Pradesh%2C_India.jpg" alt="Ujjain Omkareshwar tour package — Mahakaleshwar and Omkareshwar Jyotirlinga" onError={(e) => { (e.target as HTMLImageElement).src = '/Ujjainmain3.jpg' }} />
            <div className="price-badge">⭐ Most Loved</div>
            <div className="price-media-cities">
              <span>UJJAIN</span><span>OMKARESHWAR</span><span>2 JYOTIRLINGAS</span>
            </div>
          </div>
          <div className="price-card-body">
            <div>
              <div className="pkg-duration">3 Nights / 4 Days · Ujjain + Omkareshwar · Departures from Mumbai / Thane</div>
              <div className="pkg-name">Ujjain Omkareshwar Tour Package</div>
              <p className="pkg-desc">The complete 2 Jyotirlinga circuit — the Mahakal Bhasma Aarti VIP pass at Mahakaleshwar, VIP Darshan at Omkareshwar Jyotirlinga and Mamleshwar Jyotirlinga, the Narmada boat ride, and the full Ujjain temple circuit (Kaal Bhairav, Gadkalika Mata, Mangal Nath, Harsiddhi Mata, Rinmukteshwar and the Ram Ghat Shipra Aarti). Comfortable hotels near the Mahakal temple, private AC transport, pure vegetarian meals and a dedicated coordinator with 24×7 support are all included.</p>
              <div className="pkg-includes">
                <span className="pkg-tag">Bhasma Aarti VIP Pass</span>
                <span className="pkg-tag">VIP Darshan · 2 Jyotirlingas</span>
                <span className="pkg-tag">Narmada Boat Ride</span>
                <span className="pkg-tag">AC Transport</span>
                <span className="pkg-tag">Veg Meals</span>
                <span className="pkg-tag">Hotel Stay (Ujjain)</span>
                <span className="pkg-tag">Ujjain Temple Circuit</span>
                <span className="pkg-tag">Mumbai–Thane Support</span>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-amount-wrap">
                <span className="price-from">Starting from</span>
                <span className="price-amount">₹15,999</span>
                <span className="price-per"> / person</span>
                <span className="price-note">Final price depends on dates, group size &amp; hotel category. Airfare/train not included.</span>
              </div>
              <div className="price-actions">
                <a href="tel:+917208771688" className="btn-book-outline">Call Us</a>
                <a href={razorpayLink} className="btn-book" target="_blank" rel="noopener noreferrer">Book Now →</a>
                <a href="/Ujjain.pdf" download="Ujjain.pdf" className="char-btn-outline">
                  Download Itinerary
                </a>
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--smoke)', maxWidth: '640px', margin: '28px auto 0' }}>Looking for a longer stay, a premium hotel, or a custom group rate for your family or sangat? <a href={wa("I want a custom quote for the Ujjain Omkareshwar tour package")} style={{ color: 'var(--saffron)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Message us for a personalised quote →</a></p>
      </section>

      {/* DETAILED ITINERARY */}
      <section className="itinerary-section">
        <div className="itinerary-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Day-by-Day Plan</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Detailed Tour<br /><em>Itinerary</em></h2>
          <div className="gold-rule"></div>
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>Every hour is planned with purpose — so you spend your time in darshan and prayer, not logistics.</p>
        </div>
        <div className="itinerary-days">
          {/* DAY 1 */}
          <div className="day-card reveal">
            <div className="day-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ram_Ghat%2C_Ujjain.jpg/1280px-Ram_Ghat%2C_Ujjain.jpg"
                alt="Ujjain Day 1 — Temple Circuit"
                onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
              />
              <div className="day-badge">Day 1 — Ujjain</div>
            </div>
            <div className="day-body">
              <div className="day-title">Ujjain Temple Circuit</div>
              <ul className="day-stops">
                <li>Check-in at hotel near Mahakal</li>
                <li>Kaal Bhairav Temple darshan</li>
                <li>Gadkalika Mata Temple</li>
                <li>Mangal Nath Temple (Mars origin)</li>
                <li>Ram Ghat — Shipra Aarti (evening)</li>
                <li>Harsiddhi Mata Temple</li>
                <li>Rinmukteshwar Temple</li>
                <li>Return to hotel — rest</li>
              </ul>
              <div className="day-note"><strong>Note:</strong> The Shipra Aarti at Ram Ghat typically happens at sunset. Timings may vary by season — we plan accordingly.</div>
            </div>
          </div>
          {/* DAY 2 */}
          <div className="day-card reveal reveal-delay-1">
            <div className="day-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mahakaleshwar_Jyotirlinga%2C_Ujjain.jpg/1280px-Mahakaleshwar_Jyotirlinga%2C_Ujjain.jpg"
                alt="Bhasma Aarti Ujjain — Mahakaleshwar"
                onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
              />
              <div className="day-badge">Day 2 — Bhasma Aarti + Omkareshwar</div>
            </div>
            <div className="day-body">
              <div className="day-title">Bhasma Aarti & Omkareshwar</div>
              <ul className="day-stops">
                <li>~12:30 AM — depart for Mahakal Bhasma Aarti</li>
                <li>Bhasma Aarti darshan (VIP pass secured)</li>
                <li>Return to hotel by 6:00 AM — breakfast &amp; rest</li>
                <li>Drive to Omkareshwar (~2.5 hrs)</li>
                <li>Omkareshwar Jyotirlinga — VIP darshan</li>
                <li>Mamleshwar Jyotirlinga darshan</li>
                <li>Narmada River boat ride</li>
                <li>Shani Mandir darshan</li>
                <li>Return to Ujjain — dinner &amp; rest</li>
              </ul>
              <div className="day-note"><strong>Important:</strong> If Bhasma Aarti passes cannot be arranged due to unforeseen temple circumstances, we will provide equivalent spiritual compensation — we never leave this unaddressed.</div>
            </div>
          </div>
          {/* DAY 3 */}
          <div className="day-card reveal reveal-delay-2">
            <div className="day-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Omkareshwar_temple.jpg/1280px-Omkareshwar_temple.jpg"
                alt="Day 3 — Departure from Ujjain"
                onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
              />
              <div className="day-badge">Day 3 / 4 — Departure</div>
            </div>
            <div className="day-body">
              <div className="day-title">Morning & Check-Out</div>
              <ul className="day-stops">
                <li>Morning breakfast at hotel</li>
                <li>Free time for shopping (Prasad, puja items — own expenses)</li>
                <li>Visit any missed temples at your own pace</li>
                <li>Check-out from hotel</li>
                <li>Transfer to Ujjain railway station / Indore airport</li>
                <li>Journey back to Mumbai / Thane</li>
              </ul>
              <div className="day-note"><strong>Shopping Tip:</strong> Ujjain's Freeganj area is known for quality puja items, silver, and Mahakal-themed prasad. Budget 1–2 hours if you plan to shop.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MARGIKA */}
      <section className="why-section">
        <div className="why-grid">
          <div className="reveal">
            <div className="section-tag" style={{ color: '#ffffff', '--saffron': '#ffffff' } as React.CSSProperties}>Why Choose Us</div>
            <h2 className="section-title">Why Mumbai &amp; Thane<br /><em>Yatris Choose Margika</em></h2>
            <div className="gold-rule" style={{ background: '#ffffff' }}></div>
            <p className="section-body">We are based in Brahmand, Thane. When you call us, you speak to someone from your community — not a national call centre. That personal understanding shapes how we plan every trip.</p>
            <ul className="features-list">
              <li className="feature-item">
                <div className="feature-icon">🙏</div>
                <div className="feature-text"><h4>Bhasma Aarti Passes — Secured in Advance</h4><p>Passes are limited and go fast. We book them well before your travel date so there is no last-minute uncertainty.</p></div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text"><h4>VIP Darshan at Both Jyotirlingas</h4><p>Shorter queues, more time in the sanctum, no scrambling — we arrange priority darshan at Mahakaleshwar and Omkareshwar both.</p></div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">👴</div>
                <div className="feature-text"><h4>Senior Citizen &amp; Family Friendly</h4><p>Gentle itinerary pacing, ground-floor room requests, and extra care for elderly travellers. Many Mumbai families travel with grandparents on this trip.</p></div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-text"><h4>Transparent Pricing — No Surprises</h4><p>You get a clear, itemised quote before confirming. What is in the package is in the package. No hidden charges after departure.</p></div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">📍</div>
                <div className="feature-text"><h4>Departures from Thane &amp; Mumbai</h4><p>We coordinate from Thane railway station and CSMT / Dadar. No need to travel to a central office — we come to your convenience.</p></div>
              </li>
            </ul>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="why-visual">
              <img src="https://www.margikayatra.com/2.jpg" alt="Margika Yatra group pilgrimage — Ujjain" onError={(e) => { (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mahakaleshwar_Jyotirlinga%2C_Ujjain.jpg/640px-Mahakaleshwar_Jyotirlinga%2C_Ujjain.jpg' }} />
              <div className="why-float-card">
                <p>"Every yatri from our group got Bhasma Aarti darshan. Margika handled everything — from Thane to Ujjain."</p>
                <span>— Sunita & Prakash Deshmukh, Thane</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="steps-section">
        <div className="steps-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Simple &amp; Transparent</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>How Your<br /><em>Yatra Begins</em></h2>
          <div className="gold-rule" style={{ margin: '20px auto' }}></div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--smoke)', maxWidth: '500px', margin: '0 auto' }}>From your first inquiry to the moment you return home — we are with you at every step.</p>
        </div>
        <div className="steps-grid">
          <div className="step-item reveal">
            <div className="step-dot">📞</div>
            <div className="step-title">Inquiry</div>
            <div className="step-desc">Call or WhatsApp — share your travel dates and group size</div>
          </div>
          <div className="step-item reveal reveal-delay-1">
            <div className="step-dot">💬</div>
            <div className="step-title">Consultation</div>
            <div className="step-desc">We discuss your needs and share a clear itinerary within 24 hrs</div>
          </div>
          <div className="step-item reveal reveal-delay-2">
            <div className="step-dot">📋</div>
            <div className="step-title">Confirmation</div>
            <div className="step-desc">Simple advance to lock your dates and Bhasma Aarti passes</div>
          </div>
          <div className="step-item reveal reveal-delay-3">
            <div className="step-dot">🛕</div>
            <div className="step-title">On-Tour Support</div>
            <div className="step-desc">Dedicated coordinator handles all logistics during the yatra</div>
          </div>
          <div className="step-item reveal reveal-delay-4">
            <div className="step-dot">🙌</div>
            <div className="step-title">Safe Return</div>
            <div className="step-desc">We assist with transfers and follow up for your feedback</div>
          </div>
        </div>
      </section>

      {/* OTHER PACKAGES */}
      <section style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(212,175,106,0.1)' }}>
        <div className="price-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Explore More</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Other Spiritual<br /><em>Journeys</em></h2>
          <div className="gold-rule"></div>
        </div>
        <div className="pkg-grid">
          {/* Package 1 */}
          <div className="pkg-card reveal">
            <div className="pkg-img">
              <img src="/DD1.PNG" alt="Dev Deepawali in Varanasi" />
              <div className="pkg-badge">Once a Year</div>
            </div>
            <div className="pkg-body">
              <div className="pkg-duration">2 Nights / 3 Days</div>
              <h3 className="pkg-name">Dev Deepawali Varanasi</h3>
              <p className="pkg-desc">Experience Varanasi lit by a million diyas on Kartik Purnima. Includes boat ride and special Ganga Aarti entry.</p>
              <Link href="/packages/dev-deepawali" className="pkg-cta">View Details</Link>
            </div>
          </div>
          {/* Package 2 */}
          <div className="pkg-card reveal reveal-delay-1">
            <div className="pkg-img">
              <img src="/mh.jpg" alt="3 Jyotirling of Maharashtra" />
              <div className="pkg-badge">Jyotirlinga</div>
            </div>
            <div className="pkg-body">
              <div className="pkg-duration">3 Nights / 4 Days</div>
              <h3 className="pkg-name">3 Jyotirling Maharashtra</h3>
              <p className="pkg-desc">Explore Trimbakeshwar, Bhimashankar, Grishneshwar, and Shirdi in a structured, senior-friendly travel route.</p>
              <Link href="/packages/maharashtra" className="pkg-cta">View Details</Link>
            </div>
          </div>
          {/* Package 3 */}
          <div className="pkg-card reveal reveal-delay-2">
            <div className="pkg-img">
              <img src="/rambg.jpg" alt="Dwarka Somnath Gujarat Yatra" />
              <div className="pkg-badge">Popular</div>
            </div>
            <div className="pkg-body">
              <div className="pkg-duration">3 Nights / 4 Days</div>
              <h3 className="pkg-name">Dwarka Somnath Yatra</h3>
              <p className="pkg-desc">Sacred Gujarat pilgrimage covering Dwarkadhish Temple, Somnath Temple, Nageshwar Jyotirlinga &amp; Beyt Dwarka.</p>
              <Link href="/packages/dwarka-somnath" className="pkg-cta">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQ */}
      <section style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="faq-grid">
          <div className="reveal">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">Frequently<br /><em>Asked Questions</em></h2>
            <div className="gold-rule"></div>
            <p className="section-body">Every question a traveller from Mumbai or Thane might have before booking this trip — answered honestly.</p>
            <div style={{ marginTop: '32px' }}>
              <a href="tel:+917208771688" className="btn-primary" style={{ display: 'inline-flex', marginBottom: '12px' }}>📞 Speak to an Expert</a>
              <br />
              <a href={wa("I have a question about Ujjain Omkareshwar tour package")} className="btn-wa" style={{ display: 'inline-flex', marginTop: '10px' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp a Question
              </a>
            </div>
          </div>
          <div className="faq-list reveal">
            {faqs.map(([q, a], idx) => (
              <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={idx}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {q}
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* GALLERY */}
      <div className="gallery-strip">
        <div className="gallery-item"><img src="/1.jpg" alt="Pilgrim group photo 1" /></div>
        <div className="gallery-item"><img src="/2.jpg" alt="Pilgrim group photo 2" /></div>
        {/* <div className="gallery-item"><img src="/3.jpg" alt="Pilgrim group photo 3" /></div>
        <div className="gallery-item"><img src="/4.jpg" alt="Pilgrim group photo 4" /></div> */}
        <div className="gallery-item"><img src="/5.jpg" alt="Pilgrim group photo 5" /></div>
        <div className="gallery-item"><img src="/6.jpg" alt="Pilgrim group photo 6" /></div>
      </div>


      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-content reveal">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Plan Your Sacred Yatra</h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.8)', margin: '0 auto 40px' }}>Secure your Bhasma Aarti VIP passes and comfortable hotel stay close to the temple. Speak to our Thane office today.</p>
          <div className="cta-buttons">
            <a href="tel:+917208771688" className="btn-primary">📞 Call Now: +91 72087 71688</a>
            <a href={wa("I want to book Ujjain Omkareshwar tour package")} className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp to Book</a>
            <a href="/Ujjain.pdf" download="Ujjain.pdf" className="char-btn-outline">
              Download Itinerary
            </a>
          </div>
        </div>
      </section>


      <Footer />

      {/* STICKY WA */}
      <a href={wa("Hi Margika Yatra! I want to enquire about the Ujjain Omkareshwar tour package")} className="sticky-wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  )
}
