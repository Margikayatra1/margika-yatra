"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock, CreditCard, IndianRupee, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
// import { Header } from "@/components/header"
import { GoogleReviews } from "@/components/ui/google-reviews"
import { openPaymentLink } from "@/lib/payment-links"
import { getTripPackage } from "@/lib/trip-packages"
import { VaranasiPrayagrajAyodhyaDetail } from "./VaranasiPrayagrajAyodhyaDetail"
import { RameshwaramDetail } from "./RameshwaramDetail"
import { JagannathPuriDetail } from "./JagannathPuriDetail"
import { DevDeepawaliDetail } from "./DevDeepawaliDetail"
import { DwarkaSomnathDetail } from "./DwarkaSomnathDetail"
import { UjjainOmkareshwarDetail } from "./UjjainOmkareshwarDetail"
import { KeralaDetail } from "./KeralaDetail"
import { Header } from "@/components/ui/newheader"
import { CharStats } from "@/components/char-stats"


export default function PackageDetailPage() {
  const params = useParams<{ id: string }>()
  const pkg = getTripPackage(params.id)

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-orange-600">Package not found</h1>
          <p className="mb-8 text-gray-700">Please choose a package from our spiritual packages section.</p>
          <Link href="/#packages">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Packages
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const handleWhatsapp = () => {
    const message = `Namaste! I want to know more about ${pkg.name} package (${pkg.price}, ${pkg.duration}). Please share details and availability.`
    window.open(`https://wa.me/917208771688?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  if (pkg.id === "char-dham") {
    return <CharDhamDetail />
  }

  if (pkg.id === "maharashtra") {
    return <MaharashtraJyotirlingDetail />
  }

  if (pkg.id === "ujjain") {
    return <UjjainOmkareshwarDetail />
  }

  if (pkg.id === "dev-deepawali") {
    return <DevDeepawaliDetail />
  }

  if (pkg.id === "dwarka-somnath") {
    return <DwarkaSomnathDetail />
  }

  if (pkg.id === "varanasi" || pkg.id === "tri-city") {
    return <VaranasiPrayagrajAyodhyaDetail />
  }

  if (pkg.id === "rameshwaram") {
    return <RameshwaramDetail />
  }

  if (pkg.id === "jagannath-puri") {
    return <JagannathPuriDetail />
  }

  if (pkg.id === "kerala") {
    return <KeralaDetail />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 text-gray-900">
      <Header />

      <main>
        <section className="relative pt-28">
          <div className="container mx-auto px-4">
            <Link href="/#packages">
              <Button variant="ghost" className="mb-5 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Packages
              </Button>
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="relative min-h-[320px] overflow-hidden rounded-lg shadow-2xl md:min-h-[520px]">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <Badge className="mb-3 bg-orange-500 text-white">{pkg.location}</Badge>
                    <h1 className="max-w-3xl text-3xl font-bold text-white drop-shadow md:text-5xl">{pkg.name}</h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="border-orange-200 bg-white/95 shadow-2xl">
                  <CardContent className="p-6">
                    <p className="mb-5 text-gray-700">{pkg.description}</p>

                    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded-lg bg-orange-50 p-4">
                        <MapPin className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Location</p>
                        <p className="font-bold text-gray-900">{pkg.location}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-4">
                        <Clock className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Duration</p>
                        <p className="font-bold text-gray-900">{pkg.duration}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-4">
                        <IndianRupee className="mb-2 h-5 w-5 text-orange-500" />
                        <p className="text-xs font-semibold uppercase text-gray-500">Starting From</p>
                        <p className="font-bold text-gray-900">{pkg.price}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="mb-3 text-xl font-bold text-orange-700">Highlights</h2>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline" className="border-orange-300 text-orange-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
                        onClick={() => openPaymentLink(pkg.name, pkg.price)}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-orange-500 text-orange-700 hover:bg-orange-50"
                        onClick={handleWhatsapp}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Enquire on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
            <Card className="border-orange-200 bg-white/90 shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-orange-700">Package Details</h2>
                <p className="leading-7 text-gray-700">{pkg.overview}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white/90 shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-orange-700">Included</h2>
                <div className="grid gap-3">
                  {pkg.inclusions.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-800">
                      <CheckCircle2 className="h-5 w-5 flex-none text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

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
          background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trimbakeshwar_Shiva_Temple.jpg/1280px-Trimbakeshwar_Shiva_Temple.jpg") center/cover no-repeat;
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
        .mh-amount { display: block; color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 44px; line-height: 1.1; }
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
        .char-btn, .char-btn-outline, .char-btn-wa { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 46px; padding: 13px 24px; border: 1px solid transparent; border-radius: 3px; color: white; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-decoration: none; text-transform: uppercase; transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s; }
        .char-btn { background: var(--saffron); }
        .char-btn:hover { background: var(--saffron-light); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,135,26,0.4); }
        .char-btn-outline { border-color: rgba(249,115,22,0.55); background: transparent; color: var(--gold); }
        .char-btn-outline:hover { border-color: var(--gold); background: rgba(249,115,22,0.12); }
        .char-btn-wa { background: #25d366; }
        .char-btn-wa:hover { background: #1eb858; transform: translateY(-2px); }
        .char-hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; padding: 130px 5% 80px; overflow: hidden; }
        .char-hero::before { content: ""; position: absolute; inset: 0; animation: charZoom 12s ease-out forwards; }
        .char-hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,247,237,0.6) 64%, rgba(255,247,237,0.98)); }
        @keyframes charZoom { from { transform: scale(1.05); } to { transform: scale(1); } }
        .char-hero-content { position: relative; z-index: 1; max-width: 860px; animation: charFadeUp 1s 0.2s ease both; }
        @keyframes charFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        .char-tag { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px; color: var(--saffron); font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; }
        .char-tag::before { content: ""; width: 30px; height: 1px; background: var(--saffron); }
        .char-title { margin: 0 0 14px; color: var(--cream); font-family: "Cormorant Garamond", serif; font-size: clamp(42px, 7vw, 88px); font-weight: 300; line-height: 1.05; }
        .char-title em, .char-section-title em { color: var(--gold); font-style: italic; }
        .char-subtitle { max-width: 600px; margin: 0 0 36px; color: rgba(17,24,39,0.8); font-size: 15px; font-weight: 300; line-height: 1.75; }
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
        .char-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 260px 260px; gap: 4px; }
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
        .char-cta::before { content: ""; position: absolute; inset: 0; background: url("/mh.jpg") center/cover no-repeat; filter: brightness(0.24) saturate(0.85); }
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
        .char-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .char-visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 980px) {
          .char-two, .char-faq, .mh-price-card { grid-template-columns: 1fr; }
          .char-dhams, .char-stats { grid-template-columns: 1fr 1fr; }
          .char-steps { grid-template-columns: repeat(3, 1fr); }
          .char-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: 220px; }
          .char-gallery div:first-child, .char-gallery div:nth-child(5) { grid-row: auto; grid-column: auto; }
          .char-footer-grid { grid-template-columns: 1fr; }
          .char-photo-float { display: none; }
        }
        @media (max-width: 640px) {
          .char-nav { padding: 14px 4%; }
          .char-logo span { font-size: 17px; }
          .char-nav-actions .char-btn-outline { display: none; }
          .char-btn, .char-btn-outline, .char-btn-wa { width: 100%; padding: 13px 16px; font-size: 11px; }
          .char-nav-actions .char-btn { width: auto; min-height: 40px; padding: 12px 14px; }
          .char-hero { min-height: 92vh; padding: 115px 5% 56px; }
          .char-actions, .mh-price-footer, .mh-price-actions, .char-footer-bottom { flex-direction: column; align-items: stretch; }
          .char-dhams, .char-stats, .char-steps, .char-gallery { grid-template-columns: 1fr; }
          .char-stat { border-right: 0; padding: 12px 0; }
          .char-photo-main { height: 360px; }
          .char-dham-card { min-height: 390px; }
          .mh-day { grid-template-columns: 1fr; gap: 14px; }
          .mh-day::before { display: none; }
          .mh-price-media { min-height: 260px; }
          .mh-price-body { padding: 30px 26px; }
          .char-sticky-wa { right: 18px; bottom: 18px; }
        }

        /* MAHARASHTRA HERO IMAGE */
        .mh-hero .hero-img {
          position: absolute;
          inset: 0;
          background: url("/Mahamain.png") center / cover no-repeat;
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
        <div className="hero-img"></div>
        <div className="hero-overlay"></div>
        <div className="char-hero-content">
          <div className="char-tag">Bhimashankar · Trimbakeshwar · Grishneshwar</div>
          <h1 className="char-title">Three Jyotirlinga Maharashtra<br /><em>Tour Package</em></h1>
          <p className="char-subtitle">A guided pilgrimage to the 3 Jyotirlinga of Maharashtra with Shani Shingnapur, Ellora Caves, and Pune heritage. Planned and coordinated for travellers from Mumbai and Thane.</p>
          <div className="char-actions">
            {/* <a href={razorpayLink} target="_blank" rel="noopener noreferrer" className="char-btn">Book Now →</a> */}
            <a href="tel:+917208771688" className="char-btn-outline">📞 Call to Book</a>
            <a href={wa("I want to enquire about the Three Jyotirlinga Maharashtra tour package")} className="char-btn-wa">WhatsApp Us</a>
            <a href="/Maharashtra_3_Jyotirlinga.pdf" download="MAHARASHTRA'S (3 Jyotirlinga) MARGIKA YATRA.pdf" className="char-btn-outline">Download Itinerary</a>
          </div>
        </div>
      </section>

     <CharStats/>

      <section className="char-section">
        <div className="char-wrap char-two">
          <div className="char-intro-visual char-reveal">
            <img className="char-photo-main" src="/Mah.jpeg" alt="Three Jyotirlinga Maharashtra Yatra" />
            {/* <img className="char-photo-float" src="/3.jpg" alt="Margika Yatra travellers" /> */}
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
                <img src={dham.image} alt={dham.name} />
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
            <h2 className="char-section-title">Maharashtra Three Jyotirlinga<br /><em>Tour from Mumbai & Thane</em></h2>
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
            <img
              src="/mh2.png"
              alt="Maharashtra 3 Jyotirlinga tour package"
              onError={(e) => { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
            />
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
                <span className="mh-amount">₹11,999</span>
                <small>/ person</small>
                <span className="mh-note">Per-head cost varies with group size and vehicle. Airfare/train not included.</span>
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
            <div className="char-tag">Why Margika</div>
            <h2 className="char-section-title">Why Mumbai & Thane<br /><em>Travellers Choose Us</em></h2>
            <div className="char-rule" style={{ background: "#ffffff" }} />
            <p className="char-body">We are based in Thane, so your booking conversation stays local, practical, and personal. You get honest planning, route clarity, and responsive coordination before and during the journey.</p>
            <ul className="char-features">
              {features.map(([icon, title, text]) => (
                <li key={title}>
                  <span className="char-feature-icon">{icon}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
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
            {["/1.jpg", "/2.jpg", "/5.jpg", "/6.jpg"].map((image) => (
              <div key={image}><img src={image} alt="Margika Yatra travellers" /></div>
            ))}
          </div>
        </div>
      </section>
      <GoogleReviews />

      <section className="char-section">
        <div className="char-wrap char-faq">
          <div className="char-reveal">
            <div className="char-tag">Common Questions</div>
            <h2 className="char-section-title">Frequently<br /><em>Asked Questions</em></h2>
            <div className="char-rule" />
            <p className="char-body">Everything you may want to know before booking your three Jyotirling Maharashtra tour package from Mumbai or Thane.</p>
            <div className="char-actions" style={{ marginTop: 30 }}>
              <a href="tel:+917208771688" className="char-btn">📞 Speak to an Expert</a>
              <a href={wa("I have a question about the Three Jyotirlinga Maharashtra tour package")} className="char-btn-wa">WhatsApp a Question</a>
            </div>
          </div>
          <div className="char-reveal">
            {faqs.map(([question, answer], index) => (
              <div className={`char-faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button className="char-faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {question}
                  <span>+</span>
                </button>
                <div className="char-faq-a">{answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="char-cta">
        <div className="char-cta-content char-reveal">
          <div className="char-tag">Plan Your Maharashtra Jyotirlinga Yatra</div>
          <h2 className="char-section-title">Book Your Three Jyotirlinga<br /><em>Maharashtra Tour Today</em></h2>
          <p className="char-body" style={{ margin: "0 auto 34px", textAlign: "center" }}>Tell us your dates, group size, and pickup point. Our Mumbai-Thane team will put together a clear itinerary with an honest per-person quote.</p>
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
      badge: "☁ Most Complete",
      image: "/4dham.png",
      desc: "The full sacred circuit — Yamunotri, Gangotri, Kedarnath & Badrinath. All four dhams, VIP darshan at every shrine, private AC transport, vegetarian meals, and your dedicated Margika coordinator throughout. The most complete pilgrimage journey a Hindu family can undertake.",
      tags: ["VIP Darshan", "AC Transport", "Veg Meals", "Helicopter Option", "All Permits", "Palki & Pony", "Tour Coordinator"],
      featured: true,
    },
    {
      name: "Do Dham Yatra Kedarnath & Badrinath",
      duration: "7 - 9 Days · Uttarakhand",
      price: "₹19,999",
      badge: "☁ Most Popular",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 13px 24px;
          border-radius: 3px;
          border: 1px solid transparent;
          color: white;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.25s, background 0.25s, border-color 0.25s, color 0.25s;
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
        }
        .char-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("/4dham.png") center/cover no-repeat;
          animation: charZoom 12s ease-out forwards;
        }
        .char-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,247,237,0.62) 62%, rgba(255,247,237,0.98));
        }
        @keyframes charZoom { from { transform: scale(1.05); } to { transform: scale(1); } }
        .char-hero-content {
          position: relative;
          z-index: 1;
          max-width: 840px;
          animation: charFadeUp 1s 0.2s ease both;
        }
        @keyframes charFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
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
          color: rgba(17,24,39,0.8);
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
        .char-package.featured .char-package-img { height: 390px; }
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
        .char-price strong { color: var(--gold); font-family: "Cormorant Garamond", serif; font-size: 30px; font-weight: 400; }
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
        .char-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; grid-template-rows: 260px 260px; gap: 4px; }
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
        }
        .char-cta::before { content: ""; position: absolute; inset: 0; background: url("/rambg.jpg") center/cover no-repeat; filter: brightness(0.24) saturate(0.85); }
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
        .char-footer-bottom { display: flex; justify-content: space-between; gap: 20px; max-width: 1200px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07); }
        .char-sticky-wa { position: fixed; right: 28px; bottom: 28px; z-index: 60; display: grid; place-items: center; width: 58px; height: 58px; border-radius: 999px; background: #25d366; box-shadow: 0 4px 24px rgba(37,211,102,0.55); color: white; text-decoration: none; font-size: 25px; }
        .char-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .char-visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 980px) {
          .char-two, .char-faq { grid-template-columns: 1fr; }
          .char-dhams, .char-packages, .char-stats { grid-template-columns: 1fr 1fr; }
          .char-package.featured { grid-column: span 1; grid-template-columns: 1fr; }
          .char-package.featured .char-package-img { height: 280px; }
          .char-package.featured .char-package-body { min-height: auto; }
          .char-steps { grid-template-columns: repeat(3, 1fr); }
          .char-steps::before { display: none; }
          .char-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: 220px; }
          .char-gallery div:first-child, .char-gallery div:nth-child(5) { grid-row: auto; grid-column: auto; }
          .char-footer-grid { grid-template-columns: 1fr; }
          .char-photo-float { display: none; }
          .char-why-float { position: static; margin-top: 16px; }
        }
        @media (max-width: 640px) {
          .char-nav { padding: 14px 4%; }
          .char-logo span { font-size: 17px; }
          .char-nav-actions .char-btn-outline { display: none; }
          .char-btn, .char-btn-outline, .char-btn-wa { width: 100%; padding: 13px 16px; font-size: 11px; }
          .char-nav-actions { gap: 8px; }
          .char-nav-actions .char-btn, .char-nav-actions .char-btn-outline { width: auto; min-height: 40px; padding: 12px 14px; }
          .char-hero { min-height: 92vh; padding: 115px 5% 56px; }
          .char-actions, .char-package-foot, .char-packages-head, .char-footer-bottom { flex-direction: column; align-items: stretch; }
          .char-dhams, .char-packages, .char-stats, .char-steps, .char-gallery { grid-template-columns: 1fr; }
          .char-stat { border-right: 0; padding: 12px 0; }
          .char-photo-main { height: 360px; }
          .char-dham-card { min-height: 390px; }
          .char-sticky-wa { right: 18px; bottom: 18px; }
        }
      `}</style>


      <Header />

      <section className="char-hero">

        <div className="char-hero-content">
          <div className="char-tag">Sacred Himalayan Pilgrimage</div>
          <h1 className="char-title">Char Dham &<br /><em>Do Dham Yatra</em></h1>
          <p className="char-subtitle">Plan your sacred Himalayan pilgrimage with confidence — departing from Mumbai & Thane. VIP darshan, expert coordinators, senior-friendly packages.</p>
          <div className="char-actions">
            <a href="tel:+917208771688" className="char-btn">📞 Call to Book</a>
            <a href={wa("I want to enquire about Char Dham Yatra")} className="char-btn-wa">WhatsApp Us</a>
            {/* <Link href="/book-trip" className="char-btn-outline">Request a Free Quote</Link> */}
            <a href="/Margika_yatra_Chardham_Yatra_2026.pdf" download="Margika_yatra_Chardham_Yatra_2026.pdf" className="char-btn-outline">Download Itinerary</a>
          </div>
        </div>
      </section>

     <CharStats/>
     
      <section className="char-section">
        <div className="char-wrap char-two">
          <div className="char-intro-visual char-reveal">
            <img className="char-photo-main" src="/4dham.png" alt="Char Dham Yatra" />
            <img className="char-photo-float" src="/1.jpg" alt="Margika Yatra pilgrims" />
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
                <img src={dham.image} alt={dham.name} />
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
                  <img src={item.image} alt={item.name} />
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
                    <div className="char-price"><small>Starting from</small><strong>{item.price}</strong> <small style={{ display: "inline" }}>/ person</small></div>
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
            <Link href="/personalized-trip" className="char-btn-outline">Customise My Yatra</Link>
          </div>
        </div>
      </section>

      <section className="char-section char-light">
        <div className="char-wrap char-two">
          <div className="char-reveal">
            <div className="char-tag">Why Choose Us</div>
            <h2 className="char-section-title">Why Mumbai & Thane<br /><em>Yatris Choose Margika</em></h2>
            <div className="char-rule" style={{ background: "#ffffff" }} />
            <p className="char-body">We are based in Brahmand, Thane — when you call us, you speak to a local who understands your community, your expectations, and your schedule. That local trust is something no national online operator can replicate.</p>
            <ul className="char-features">
              {features.map(([icon, title, text]) => (
                <li key={title}>
                  <span className="char-feature-icon">{icon}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
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
            {["/1.jpg", "/2.jpg", "/5.jpg", "/6.jpg"].map
              ((image) => (
                <div key={image}><img src={image} alt="Margika Yatra pilgrims" /></div>
              ))}
          </div>
        </div>
      </section>
      <GoogleReviews />

      <section className="char-section">
        <div className="char-wrap char-faq">
          <div className="char-reveal">
            <div className="char-tag">Common Questions</div>
            <h2 className="char-section-title">Frequently<br /><em>Asked Questions</em></h2>
            <div className="char-rule" />
            <p className="char-body">Everything you need to know before booking your Char Dham Yatra from Mumbai or Thane.</p>
            <div className="char-actions" style={{ marginTop: 30 }}>
              <a href="tel:+917208771688" className="char-btn">📞 Speak to an Expert</a><br />
              <a href={wa("I have a question about Char Dham Yatra")} className="char-btn-wa">WhatsApp a Question</a>
            </div>
          </div>
          <div className="char-reveal">
            {faqs.map(([question, answer], index) => (
              <div className={`char-faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button className="char-faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {question}
                  <span>+</span>
                </button>
                <div className="char-faq-a">{answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="char-cta">
        <div className="char-cta-content char-reveal">
          <div className="char-tag">Yatra Season Fills Up Fast</div>
          <h2 className="char-section-title">Secure Your Sacred<br /><em>Spot Today</em></h2>
          <p className="char-body" style={{ margin: "0 auto 34px", textAlign: "center" }}>Char Dham 2026 slots — especially helicopters — are extremely limited. Reach out today to check availability for your dates and group size.</p>
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



