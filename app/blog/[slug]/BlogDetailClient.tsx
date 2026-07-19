"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { CalendarDays, Clock, MapPin, Sparkles, Phone, MessageSquare, ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Blog Data Types
interface Section {
  id: string
  title: string
}

interface Faq {
  q: string
  a: string
}

interface BlogData {
  title: string
  subtitle: string
  badge: string
  date: string
  readTime: string
  location: string
  coverImage: string
  sections: Section[]
  faqs: Faq[]
  content: React.ComponentType<{ activeSection: string }>
}

// 1. Content Component for First Time Pilgrim Guide
function FirstTimePilgrimContent({ activeSection }: { activeSection: string }) {
  return (
    <>
      {/* Introduction Section */}
      <div id="intro" className="scroll-mt-28">
        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed mb-6 italic border-l-4 border-orange-500 pl-4 bg-orange-50/30 py-2 rounded-r-md">
          Planning your first sacred journey can feel overwhelming, and that&apos;s exactly why good <strong>pilgrimage travel tips</strong> matter so much before you set out. India is home to thousands of temples, shrines, and holy sites, each with its own rituals, customs, and rhythm. Whether you&apos;re heading to the Himalayas for Char Dham or joining a temple trail in South India, a little preparation goes a long way in making the experience peaceful rather than stressful.
        </p>
        <p className="mb-6">
          This guide walks you through everything a first-time pilgrim needs to know from what to pack to how a <Link prefetch={true} href="/" className="text-orange-600 font-semibold hover:underline"><strong>Spiritual Travel Agency India</strong></Link> can simplify the entire trip. Think of it as the conversation you&apos;d have with a well-traveled friend before your journey begins.
        </p>
      </div>

      {/* Why Planning Differs */}
      <section id="why-planning" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">01.</span> Why First-Time Pilgrims Need a Different Kind of Travel Planning
        </h2>
        <p>
          Pilgrimage travel isn&apos;t like a regular vacation. You&apos;re not chasing sightseeing checklists — you&apos;re seeking stillness, tradition, and sometimes physical endurance too.
        </p>
        <p className="mb-4">
          Many first-timers underestimate three things:
        </p>
        <ul className="grid gap-3 list-none pl-0 mb-6">
          <li className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100/50 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900 block">The physical demands</strong>
              <span className="text-sm text-gray-600">High-altitude environments or long-distance driving routes require physical preparation and pacing.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100/50 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900 block">The importance of timing</strong>
              <span className="text-sm text-gray-600">Scheduling around local festivals, weather changes, and specific temple hours is critical.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100/50 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900 block">The pace of the trip</strong>
              <span className="text-sm text-gray-600">The daily routine of a pilgrimage is focused on devotion and rest, differing from standard leisure trips.</span>
            </div>
          </li>
        </ul>
        <p>
          Understanding this shift in mindset early makes the rest of your planning much easier.
        </p>
      </section>

      {/* Choosing the Right Agency */}
      <section id="choosing-agency" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">02.</span> Choosing the Right Spiritual Travel Agency in India
        </h2>
        <p>
          A reliable <strong>Spiritual Travel Agency India</strong> does more than book tickets. It handles permits, local guides, accommodation near shrines, and last-minute changes that are common on pilgrimage routes.
        </p>
        <p className="mb-4">
          When evaluating an agency, ask yourself:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Do they have experience with the specific route or shrine you&apos;re visiting?</li>
          <li>Can they arrange a <Link prefetch={true} href="/personalized-trip" className="text-orange-600 hover:underline"><strong>customized pilgrimage tour India</strong></Link> based on your pace and preferences?</li>
          <li>Do they offer dedicated support for elderly travelers or families with children?</li>
          <li>Is there someone available on-call to help with issues during the trip itself?</li>
        </ul>
        <p>
          A good agency won&apos;t just move you from point A to point B. They&apos;ll help you understand the significance of each stop, so the journey feels meaningful rather than mechanical.
        </p>
      </section>

      {/* Customized Tours */}
      <section id="customized-tours" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">03.</span> Benefits of a Customized Pilgrimage Tour in India
        </h2>
        <p>
          Not every pilgrim wants the same experience. Some prefer a quiet, unhurried trip focused on one or two shrines. Others want to cover an entire circuit like the Char Dham or Jyotirlinga trail in a set number of days.
        </p>
        <div className="bg-orange-50/40 border border-orange-100 rounded-lg p-6 mb-6">
          <p className="font-serif text-lg font-medium text-orange-900 mb-3">A customized tour allows you to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Choose your own travel pace</strong>, which is especially useful for older travelers or children.</li>
            <li><strong>Add or skip destinations</strong> based on personal and family significance.</li>
            <li><strong>Select accommodation types</strong>, from simple authentic dharamshalas to comfortable modern hotels.</li>
            <li><strong>Plan around specific festivals</strong> or auspicious dates matching your stars or schedule.</li>
          </ul>
        </div>
        <p>
          This flexibility is often the biggest difference between a stressful trip and a genuinely fulfilling one.
        </p>
      </section>

      {/* Spiritual Travel in India */}
      <section id="unique-spiritual" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">04.</span> Spiritual Travel in India: What Makes It Unique
        </h2>
        <p>
          Spiritual travel in India isn&apos;t confined to one religion or region. From the ghats of Varanasi to the gurdwaras of Punjab, the virtues of Ajmer, and the Buddhist monasteries of Ladakh, the diversity is genuinely remarkable.
        </p>
        <p>
          What ties these journeys together is a shared sense of purpose. People aren&apos;t just visiting a place; they&apos;re participating in something that has continued, largely unchanged, for centuries.
        </p>
        <p>
          If you&apos;re new to this kind of travel, it helps to research the specific customs of your destination beforehand. A shrine in Kerala may have very different dress codes and rituals compared to one in Rajasthan.
        </p>
      </section>

      {/* Group Pilgrimages */}
      <section id="group-pilgrimage" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">05.</span> Planning a Group Pilgrimage Tour in India
        </h2>
        <p>
          Traveling with others, whether it&apos;s an organized group or your own family, changes the logistics quite a bit.
        </p>
        <p>
          <strong>Group pilgrimage tour packages India</strong> typically include shared transport, fixed itineraries, and group accommodation, which can reduce costs significantly compared to solo travel.
        </p>
        <div className="bg-amber-50/30 border border-amber-200/50 rounded-lg p-5 my-6">
          <h4 className="font-semibold text-gray-900 mb-3">Here&apos;s what to keep in mind before joining a group tour:</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Check the group size — smaller groups usually mean more flexibility and attention.</li>
            <li>Ask about the pace of the itinerary, especially for physically demanding routes.</li>
            <li>Confirm meal arrangements, particularly if you have dietary restrictions (e.g. Pure Veg, Jain meals).</li>
            <li>Look into whether the group includes a knowledgeable coordinator or guide familiar with the site&apos;s history.</li>
          </ul>
        </div>
        <p>
          Group travel also brings a sense of community. Sharing meals and long journeys with fellow pilgrims often becomes one of the most memorable parts of the trip.
        </p>
      </section>

      {/* Senior Citizen Travel */}
      <section id="senior-citizen" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">06.</span> Senior Citizen Pilgrimage Tour in India: Special Considerations
        </h2>
        <p>
          Many pilgrims are elderly, and a well-planned <strong>senior citizen pilgrimage tour India</strong> can make these journeys accessible and comfortable rather than exhausting.
        </p>
        <p className="mb-4">
          A few practical points worth discussing with your travel agency:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Ask about routes with fewer steep climbs or long walking stretches.</li>
          <li>Confirm availability of wheelchair assistance or palki options at major shrines.</li>
          <li>Check if the itinerary includes adequate rest days between destinations to prevent fatigue.</li>
          <li>Ensure accommodations are close to the pilgrimage site to reduce daily travel time.</li>
        </ul>
        <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-gray-600 bg-orange-50/20 rounded-r">
          &ldquo;Have you traveled with elderly parents before? If so, you already know that pacing and comfort matter far more than covering every possible stop.&rdquo;
        </blockquote>
        <p>
          It&apos;s also worth carrying a basic medical kit and a list of regular medications, along with copies of any prescriptions, especially for high-altitude pilgrimages like Kedarnath or Amarnath.
        </p>
      </section>

      {/* Family Guide */}
      <section id="family-guide" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">07.</span> Family Pilgrimage Travel Guide: Traveling with Children
        </h2>
        <p>
          A <strong>family pilgrimage travel guide</strong> wouldn&apos;t be complete without addressing the unique challenges of traveling with kids. Long queues, early morning rituals, and crowded temple premises can be tiring for children.
        </p>
        <p className="mb-4">
          Some practical suggestions:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Choose shorter, less crowded pilgrimage circuits for younger children.</li>
          <li>Carry dry snacks, water, and small games for long waiting periods.</li>
          <li>Explain the significance of the visit in simple stories beforehand; children engage more when they understand the &ldquo;why&rdquo;.</li>
          <li>Avoid over-packing the itinerary; one meaningful temple visit is better than five rushed ones.</li>
        </ul>
        <p>
          Families often find that pilgrimage trips, when paced well, become some of the most bonding experiences they share together.
        </p>
      </section>

      {/* What to Carry */}
      <section id="what-to-carry" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">08.</span> What to Carry for a Pilgrimage Trip
        </h2>
        <p>
          Packing right is one of the most practical parts of any <strong>religious travel guide</strong>. Requirements vary by destination, but here&apos;s a general checklist:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm">
            <h4 className="font-serif text-orange-900 font-bold mb-3">Essentials</h4>
            <ul className="list-none pl-0 text-xs space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Comfortable, modest clothing</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Head scarf / Shawl</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Easy-to-remove slip-on shoes</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Refillable water bottle</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Personal medications</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm">
            <h4 className="font-serif text-orange-900 font-bold mb-3">For Trekking / Altitudes</h4>
            <ul className="list-none pl-0 text-xs space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Layered clothing for cold</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Quality raincoat / Poncho</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Sturdy trekking poles</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Altitude sickness medicines</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm">
            <h4 className="font-serif text-orange-900 font-bold mb-3">Documents & Cash</h4>
            <ul className="list-none pl-0 text-xs space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Valid ID cards (Aadhaar, etc.)</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Printed permits & bookings</li>
              <li className="flex gap-2"><span className="text-orange-500">✦</span> Small denomination cash notes</li>
            </ul>
          </div>
        </div>
        <p>
          Keeping your bag light but well-organized makes a noticeable difference, especially on routes involving long walks or queuing.
        </p>
      </section>

      {/* Practical Tips */}
      <section id="practical-tips" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">09.</span> Practical Pilgrimage Travel Tips Before You Go
        </h2>
        <ul className="list-none pl-0 space-y-3 mb-6">
          <li className="flex items-start gap-3 text-gray-700">
            <span className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
            <span><strong>Check the season.</strong> Many Himalayan shrines close during winter months due to heavy snow.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <span className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
            <span><strong>Book accommodation early</strong>, particularly during major festivals when local demand spikes.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <span className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</span>
            <span><strong>Respect local customs</strong>, including strict photography restrictions inside temple sanctums.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <span className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</span>
            <span><strong>Stay hydrated and rested</strong>, especially before high-altitude visits.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <span className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">5</span>
            <span><strong>Keep emergency contacts handy</strong>, including your travel agency&apos;s local coordinator.</span>
          </li>
        </ul>
        <p>
          None of these tips are complicated, but together they prevent most of the common issues first-time pilgrims run into.
        </p>

        <h3 className="text-xl font-serif font-medium text-orange-950 mt-8 mb-3">Conclusion: Making Your First Pilgrimage Meaningful</h3>
        <p>
          Your first pilgrimage doesn&apos;t need to be perfectly planned to be meaningful, but a little preparation certainly helps it go smoothly. From choosing between a <strong>customized pilgrimage tour India</strong> and a group package, to packing the right essentials, every decision shapes how peaceful your journey feels.
        </p>
        <p>
          India&apos;s pilgrimage circuits offer something genuinely rare: a chance to slow down and connect with centuries-old traditions. Whether you&apos;re traveling solo, with elderly parents, or as a family, working with an experienced <strong>Spiritual Travel Agency India</strong> can take the logistical stress off your shoulders, leaving you free to focus on the experience itself.
        </p>
      </section>
    </>
  )
}

// 2. Content Component for Top 25 Pilgrimage Places in India
function Top25PilgrimagesContent({ activeSection }: { activeSection: string }) {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed mb-6 italic border-l-4 border-orange-500 pl-4 bg-orange-50/30 py-2 rounded-r-md">
          If you&apos;ve ever felt that quiet pull to step away from routine life and reconnect with something bigger, you&apos;re not alone. India has been answering that call for thousands of years.
        </p>
        <p className="mb-6">
          When people search for the best pilgrimage places in India, they&apos;re usually not just looking for a travel checklist — they&apos;re looking for meaning, tradition, and a sense of belonging that only these sacred sites seem to offer. This guide walks you through the top pilgrimage places in India, organized by region and significance.
        </p>
      </div>

      <section id="why-different" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">01.</span> Why Pilgrimage Travel in India Is Different
        </h2>
        <p>
          India isn&apos;t short on religious places. What makes it unique is the sheer diversity — Hindu temples, Sikh gurudwaras, Buddhist stupas, churches, and dargahs often exist within a few hours of each other.
        </p>
        <p>
          Planning a trip to these holy places in India takes more than picking a destination off a list. You need to account for altitude (in the case of Himalayan shrines), seasonal closures, crowd patterns during festivals, and physical accessibility for elderly travelers.
        </p>
        <p>
          That&apos;s exactly why many families now prefer working with a spiritual tour company instead of planning everything themselves.
        </p>
      </section>

      <section id="char-dham" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">02.</span> Char Dham Yatra: The Himalayan Circuit
        </h2>
        <p>
          The Char Dham Yatra covers four of the most revered spiritual places in India, all located in Uttarakhand.
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Yamunotri</strong> – Source of the Yamuna river, reached after a moderate trek.</li>
          <li><strong>Gangotri</strong> – Origin point of the Ganga, set amid pine forests.</li>
          <li><strong>Kedarnath</strong> – One of the twelve Jyotirlingas, involving a steep uphill trek or pony/helicopter ride.</li>
          <li><strong>Badrinath</strong> – Dedicated to Lord Vishnu, accessible by road.</li>
        </ul>
        <p>
          The Yatra typically opens between April and May and closes around October or November due to heavy snowfall. Booking a Char Dham Yatra package from Mumbai in advance matters here, since flights connect through Dehradun and road travel through the hills takes longer than most people expect.
        </p>
        <p className="italic bg-orange-50/50 p-3 rounded border border-orange-100 text-sm">
          <strong>Practical tip:</strong> If you&apos;re traveling with elderly parents, ask your operator specifically about pony, palki, or helicopter options for Kedarnath. The trek isn&apos;t for everyone, and a good agency will tell you this honestly instead of glossing over it.
        </p>
      </section>

      <section id="jyotirlingas" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">03.</span> The Twelve Jyotirlingas
        </h2>
        <p>
          Among Hindu pilgrimage places in India, the twelve Jyotirlingas hold a special place. Three of them are conveniently located within Maharashtra:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Trimbakeshwar</strong> (Nashik)</li>
          <li><strong>Bhimashankar</strong> (Pune district)</li>
          <li><strong>Grishneshwar</strong> (near Ellora)</li>
        </ul>
        <p>
          A 3 Jyotirlingas Maharashtra tour package is ideal for a short 3-4 day trip, especially for travelers based in Mumbai, Thane, or Pune who don&apos;t want to take extended leave from work. These shrines are also close to other attractions like the Ellora Caves, making the trip culturally rich, not just religious.
        </p>
        <p>
          Other major Jyotirlingas outside Maharashtra include Somnath (Gujarat), Mahakaleshwar (Ujjain), Omkareshwar (Madhya Pradesh), Kashi Vishwanath (Varanasi), Baidyanath (Jharkhand), Nageshwar (Gujarat), Rameshwaram (Tamil Nadu), and Mallikarjuna (Andhra Pradesh).
        </p>
      </section>

      <section id="south" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">04.</span> Char Dham of the South &amp; Jagannath Puri
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Char Dham of the South: Rameshwaram</h3>
        <p>
          Rameshwaram is one of the four Char Dhams of India (the other set, distinct from the Himalayan Char Dham) and one of the most famous pilgrimage places in India. The Ramanathaswamy Temple here is known for its long pillared corridors — among the longest of any temple in the country.
        </p>
        <p>
          A well-planned Rameshwaram tour package usually combines a visit here with Madurai&apos;s Meenakshi Temple and sometimes Kanyakumari.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Jagannath Puri: Odisha&apos;s Spiritual Heart</h3>
        <p>
          The Jagannath Temple in Puri is one of the Char Dham sites and among the most visited pilgrimage destinations in India. The annual Rath Yatra draws enormous crowds.
        </p>
        <p>
          A Jagannath Puri tour package from Mumbai typically includes connecting flights to Bhubaneswar, followed by a road journey to Puri, often paired with visits to the Sun Temple in Konark and Bhubaneswar&apos;s own temple cluster.
        </p>
      </section>

      <section id="other-sites" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">05.</span> Other Must-Visit Pilgrimage Sites Across India
        </h2>
        <p>
          Here&apos;s a broader list rounding out the top 25 pilgrimage places in India:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-6 text-sm">
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Vaishno Devi (Jammu)</strong> – A cave shrine reached via a 12-km trek or pony/palki ride.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Amarnath (Kashmir)</strong> – A seasonal ice lingam shrine, open only in summer.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Golden Temple (Amritsar)</strong> – The holiest Sikh gurudwara, open to all faiths.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Varanasi (UP)</strong> – One of the oldest living cities, central to Hindu ritual.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Tirupati Balaji (AP)</strong> – Among the wealthiest and most visited temples globally.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Shirdi (Maharashtra)</strong> – Dedicated to Sai Baba, drawing devotees across religions.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Ajmer Sharif Dargah (Rajasthan)</strong> – A revered Sufi shrine.</li>
          <li className="bg-white border border-orange-100 p-3 rounded shadow-sm"><strong>Dwarka (Gujarat)</strong> – Associated with Lord Krishna, part of the Char Dham circuit.</li>
        </ul>
        <p>
          Other notable sites include Bodh Gaya (Bihar), Haridwar and Rishikesh (Uttarakhand), Sabarimala (Kerala), Velankanni Church (Tamil Nadu), Pushkar (Rajasthan), Kamakhya Temple (Assam), and Siddhivinayak Temple (Mumbai).
        </p>
        <p>
          Each of these serves a slightly different kind of traveler — some are physically demanding, some are family-friendly, and some are best visited during specific festivals for the full experience.
        </p>
      </section>

      <section id="planning" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">06.</span> Choosing Between DIY Travel and a Spiritual Tour Operator
        </h2>
        <p>
          Here&apos;s something most blogs won&apos;t tell you plainly: pilgrimage travel in India often involves more logistics than a regular holiday. Temple timings change seasonally, certain shrines have dress codes, and high-altitude routes can shut without warning due to weather.
        </p>
        <p>
          This is where working with the best spiritual travel agency India has to offer can genuinely simplify things — not because you can&apos;t do it yourself, but because local knowledge saves time and avoids last-minute stress.
        </p>
        <p>
          If you&apos;re based in Mumbai or the surrounding suburbs, look for a pilgrimage tour operator Thane West residents already trust, since local operators tend to understand regional travel patterns — like which trains and flights connect best from Thane and Mumbai to pilgrimage hubs.
        </p>
      </section>

      <section id="packages" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">07.</span> Spiritual Tour Packages Worth Considering
        </h2>
        <p>
          Depending on your priorities, here&apos;s how most spiritual tour packages India are typically structured:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Short weekend trips</strong> – 3 Jyotirlingas Maharashtra tour, Shirdi, or Siddhivinayak combined with Trimbakeshwar.</li>
          <li><strong>Week-long circuits</strong> – Char Dham Yatra, Rameshwaram with Madurai, or Jagannath Puri with Konark.</li>
          <li><strong>Temple-focused itineraries</strong> – Temple tour packages India covering South Indian temple towns like Madurai, Rameshwaram, and Kanyakumari together.</li>
        </ul>
      </section>

      <section id="seniors" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">08.</span> Planning for Senior Citizens
        </h2>
        <p>
          A large number of pilgrimage travelers are older adults, and not every itinerary suits them equally. A good senior citizen pilgrimage tour India itinerary should include:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Slower daily pace with fewer back-to-back destinations</li>
          <li>Access to wheelchairs, palkis, or pony rides at trek-based shrines</li>
          <li>Ground-floor or elevator-accessible accommodation</li>
          <li>A trained attendant or guide accompanying the group</li>
        </ul>
        <p>
          If you&apos;re planning for parents or grandparents, it&apos;s worth asking any operator directly how they handle medical emergencies on the route, a question that separates experienced agencies from newer ones.
        </p>
      </section>

      <section id="conclusion" className="scroll-mt-28 border-t border-orange-100/60 pt-6 pb-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">09.</span> Final Thoughts
        </h2>
        <p>
          India&apos;s pilgrimage circuit is vast, and no single trip covers all 25 sites at once, nor should it. The best approach is to pick a circuit that matches your beliefs, your physical comfort, and the time you have available, whether that&apos;s a quick weekend to the Jyotirlingas near Mumbai or a longer Char Dham journey through the Himalayas.
        </p>
        <p>
          Whichever path you choose, a little planning goes a long way toward making the journey feel peaceful rather than rushed. If you&apos;d like help mapping out an itinerary that fits your family&apos;s needs, a good local travel advisor can walk you through the options at your own pace.
        </p>
      </section>
    </>
  )
}

// 3. Content Component for Best Religious Places in India
function BestReligiousPlacesContent({ activeSection }: { activeSection: string }) {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed mb-6 italic border-l-4 border-orange-500 pl-4 bg-orange-50/30 py-2 rounded-r-md">
          Planning a trip to the best religious places to visit in India can feel overwhelming at first — there are simply so many options, spread across mountains, coastlines, and ancient cities.
        </p>
        <p className="mb-6">
          This guide breaks things down by region and purpose, so you can figure out which sites actually fit your time, budget, and beliefs, instead of just following a generic bucket list. Whether you&apos;re looking at a short weekend visit or a longer multi-state circuit, here&apos;s what actually matters when planning around these religious places in India.
        </p>
      </div>

      <section id="what-makes-worth" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">01.</span> What Makes a Religious Site &quot;Worth the Trip&quot;
        </h2>
        <p>
          Not every temple or shrine needs to be on your itinerary, and that&apos;s okay. Some of the famous religious places in India are worth visiting purely for their historical weight, think centuries-old architecture and unbroken ritual traditions. Others matter more for personal or community faith reasons.
        </p>
        <p>Before booking anything, it helps to ask a few honest questions:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Is this a seasonal site (like Kedarnath, which shuts in winter)?</li>
          <li>Does it involve trekking, or is it fully road-accessible?</li>
          <li>Are there specific dress codes or entry restrictions?</li>
        </ul>
        <p>
          Getting these details right upfront saves a lot of last-minute stress, especially if you&apos;re traveling with family.
        </p>
      </section>

      <section id="kedarnath" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">02.</span> Kedarnath: The Himalayan Shrine That Needs Real Planning
        </h2>
        <p>
          Kedarnath is one of the twelve Jyotirlingas and among the most physically demanding of the top religious places in India to visit. The temple sits at over 3,500 metres, reached via a roughly 16-18 km trek from Gaurikund, or shorter helicopter transfers for those who can&apos;t manage the walk.
        </p>
        <p>A well-structured Kedarnath tour package typically includes:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Registration and biometric verification (mandatory for the Yatra)</li>
          <li>Accommodation in Guptkashi or Sonprayag before the trek</li>
          <li>Pony, palki, or helicopter options for elderly or less mobile travelers</li>
        </ul>
        <p className="italic bg-orange-50/50 p-3 rounded border border-orange-100 text-sm">
          <strong>Real talk:</strong> The weather here changes fast, even in peak season (May to October). If your operator doesn&apos;t mention buffer days for weather delays, that&apos;s a red flag worth asking about directly.
        </p>
      </section>

      <section id="jyotirlinga-circuit" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">03.</span> The Jyotirlinga Circuit: Beyond Just One Temple
        </h2>
        <p>
          If Kedarnath sparked your interest in the twelve Jyotirlingas, a broader Jyotirlinga tour package lets you cover several in one structured trip rather than planning each visit separately.
        </p>
        <p>
          Among these, Mahakaleshwar in Ujjain deserves special mention. It&apos;s one of the few Jyotirlingas where the Bhasma Aarti — an early morning ritual using sacred ash — draws pilgrims from across the country. A dedicated Mahakaleshwar tour package usually times the visit around this early ritual, since regular daytime darshan queues can run long, especially during Shravan month.
        </p>
        <p>
          Other Jyotirlingas worth combining into a circuit include Somnath, Omkareshwar, and Grishneshwar, each reachable within a few hours of each other in central and western India.
        </p>
      </section>

      <section id="varanasi-ayodhya" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">04.</span> Varanasi and Ayodhya: Twin Cities of Faith
        </h2>
        <p>
          Few cities carry the spiritual weight of Varanasi, one of the oldest continuously inhabited cities in the world. The Kashi Vishwanath Temple here is itself a Jyotirlinga, and the evening Ganga Aarti at Dashashwamedh Ghat is something most first-time visitors describe as genuinely moving.
        </p>
        <p>
          Ayodhya, roughly 200 km away, has become an increasingly significant stop following the Ram Mandir&apos;s completion. Because of their proximity, a combined Varanasi Ayodhya tour package is now one of the more popular circuits for pilgrims wanting both cities in a single trip.
        </p>
        <p className="italic bg-orange-50/50 p-3 rounded border border-orange-100 text-sm">
          <strong>A practical note:</strong> Varanasi&apos;s ghats get crowded fast during festivals like Dev Deepawali. If you&apos;re traveling with older family members, plan the ghat visits for early morning or late evening when it&apos;s a little easier to move around.
        </p>
      </section>

      <section id="jagannath-puri" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">05.</span> Jagannath Puri: Odisha&apos;s Spiritual Anchor
        </h2>
        <p>
          The Jagannath Temple in Puri is one of India&apos;s four Char Dham sites and remains one of the most visited spiritual places to visit in India. Even outside the Rath Yatra festival, the temple draws a steady flow of devotees year-round.
        </p>
        <p>
          For travelers based in Maharashtra, a Jagannath Puri tour package from Mumbai typically involves a flight into Bhubaneswar followed by a short road journey, often combined with the Sun Temple at Konark.
        </p>
        <p className="italic bg-orange-50/50 p-3 rounded border border-orange-100 text-sm">
          <strong>One detail that catches people off guard:</strong> non-Hindus are not permitted inside the main sanctum at Jagannath Puri. It&apos;s worth confirming this with your travel operator well before the trip so there&apos;s no confusion on the day.
        </p>
      </section>

      <section id="rameshwaram" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">06.</span> Rameshwaram: Where Two Traditions Meet
        </h2>
        <p>
          Rameshwaram holds a unique place among pilgrimage places in India — it&apos;s one of the four Char Dhams and home to one of the twelve Jyotirlingas, the Ramanathaswamy Temple, known for its remarkably long pillared corridors.
        </p>
        <p>
          A typical Rameshwaram tour package pairs the temple visit with Madurai&apos;s Meenakshi Amman Temple, since the two cities are well connected by road and rail.
        </p>
        <p>
          Have you ever wondered why pilgrims take a ritual bath at 22 wells inside the temple before darshan? It&apos;s believed to cleanse specific sins, and most local guides can walk you through the sequence properly rather than leaving you to guess.
        </p>
      </section>

      <section id="kerala" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">07.</span> Kerala: A Different Kind of Spiritual Journey
        </h2>
        <p>
          Kerala doesn&apos;t always come up first when people think of religious travel, but it holds an unusually diverse mix of faiths in a small geographic area — from the Sabarimala Ayyappa Temple to centuries-old churches in Kochi and the Cheraman Juma Masjid, often cited as one of India&apos;s earliest mosques.
        </p>
        <p>
          A Kerala tour package from Mumbai works well for travelers who want a slower, multi-faith itinerary rather than a single-temple focus. Backwater stays in Alleppey also make for a natural break between temple visits, which matters if you&apos;re traveling with people who aren&apos;t purely there for religious reasons.
        </p>
        <p className="italic bg-orange-50/50 p-3 rounded border border-orange-100 text-sm">
          <strong>Note for Sabarimala specifically:</strong> the temple has strict entry protocols, including a 41-day vratham (fasting period) for male devotees before the trek, so this isn&apos;t a spontaneous add-on to a Kerala trip — it needs advance planning.
        </p>
      </section>

      <section id="char-dham-picture" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">08.</span> Char Dham Yatra: The Bigger Himalayan Picture
        </h2>
        <p>
          Kedarnath is one part of a larger Char Dham Yatra package, which also includes Yamunotri, Gangotri, and Badrinath. Together, these four sites form one of the most demanding but rewarding pilgrimage circuits in the country.
        </p>
        <p>
          The Yatra season generally runs from late April/May through October or November, closing before heavy snowfall makes the routes impassable. Given the altitude and trekking involved, most families choose to break the circuit across 7-9 days rather than rushing through it.
        </p>
      </section>

      <section id="choosing-package" className="scroll-mt-28 border-t border-orange-100/60 pt-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">09.</span> Choosing the Right Package for Your Family
        </h2>
        <p>Not every pilgrimage trip suits every traveler. Here&apos;s a rough way to think about it:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>First-time or elderly travelers:</strong> Start with road-accessible sites like Puri, Rameshwaram, or Varanasi-Ayodhya before attempting Himalayan treks.</li>
          <li><strong>Physically able pilgrims:</strong> Kedarnath and the full Char Dham Yatra offer a more intense, immersive experience.</li>
          <li><strong>Multi-faith or slower-paced travel:</strong> Kerala&apos;s mixed circuit gives more breathing room between religious stops.</li>
        </ul>
        <p>
          If you&apos;re unsure, it&apos;s worth asking any tour operator directly how they&apos;d sequence a trip for your specific group — a good one will actually tailor the order, not just sell you a fixed package.
        </p>
      </section>

      <section id="conclusion" className="scroll-mt-28 border-t border-orange-100/60 pt-6 pb-6">
        <h2 className="text-2xl font-serif font-medium text-orange-950 mb-4 flex items-center gap-3">
          <span className="text-orange-600">10.</span> Final Thoughts
        </h2>
        <p>
          India&apos;s religious landscape is too vast to fit into one trip, and that&apos;s part of what makes it worth returning to again and again. Whether you&apos;re drawn to the Himalayan intensity of Kedarnath, the ritual depth of Mahakaleshwar, or the quieter, layered faith traditions of Kerala, the key is matching the destination to your own pace and comfort level.
        </p>
        <p>
          If you&apos;d like help figuring out which circuit makes sense for your next trip, it&apos;s worth having a quick conversation with a local travel advisor who can walk you through the realistic timelines and options.
        </p>
      </section>
    </>
  )
}

import { notFound } from "next/navigation"

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("intro")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Get current blog database content
  const blog = blogDatabase[slug as keyof typeof blogDatabase]
  if (!blog) return notFound()
  const ContentComponent = blog.content

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)

      const sectionIds = blog.sections.map((s) => s.id)
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [blog])

  const wa = (text: string) => `https://wa.me/917208771688?text=${encodeURIComponent(text)}`

  return (
    <main className="min-h-screen bg-[#fffcf8] text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-[1000] h-1 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#181009] overflow-hidden">
        {/* Background image with high contrast */}
        <div className="absolute inset-0 z-0">
          <Image unoptimized={true}
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover opacity-70 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1005]/30 via-[#0a0600]/45 to-[#0a0600]/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/10 border border-orange-400/30 text-orange-400 px-3 py-1 hover:bg-orange-500/20 text-sm tracking-wider uppercase font-semibold">
              {blog.badge}
            </Badge>
            <h1 className="mb-6 font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white tracking-wide">
              {blog.title} <br />
              <span className="text-orange-300 font-normal italic">{blog.subtitle}</span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 border-t border-b border-white/10 py-4 max-w-2xl mx-auto">
              <span className="flex items-center gap-2 text-white">
                <CalendarDays className="h-4 w-4 text-orange-400" />
                {blog.date}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-2 text-white">
                <Clock className="h-4 w-4 text-orange-400" />
                {blog.readTime}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4 text-orange-400" />
                {blog.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-8 md:gap-12 items-start">
          
          {/* Left Column: Sticky Table of Contents (Desktop Only) */}
          <aside className="hidden lg:block sticky top-28 space-y-6 self-start max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-thin">
            <div className="bg-white/80 border border-orange-100/60 rounded-lg p-5 backdrop-blur-sm">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-orange-100">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {blog.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-xs font-medium transition-all duration-200 py-1 border-l-2 pl-3 ${
                      activeSection === section.id
                        ? "border-orange-500 text-orange-600 font-semibold translate-x-1"
                        : "border-transparent text-gray-500 hover:text-gray-900 hover:border-orange-200"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-lg p-5 shadow-lg">
              <Sparkles className="h-6 w-6 text-orange-200 mb-3" />
              <h4 className="font-serif text-lg font-medium leading-snug mb-2">Need a custom itinerary?</h4>
              <p className="text-xs text-orange-50/90 leading-relaxed mb-4">
                Let us plan your spiritual journey from Thane, Mumbai or anywhere in India.
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+917208771688"
                  className="flex items-center justify-center gap-2 bg-white text-orange-700 py-2 rounded font-medium text-xs hover:bg-orange-50 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Expert
                </a>
                <a 
                  href={wa(`I want to enquire about ${blog.title}`)}
                  className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-2 rounded font-medium text-xs hover:bg-emerald-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </aside>

          {/* Middle Column: The Article Content */}
          <article className="prose prose-orange max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h2:font-medium prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-orange-950 prose-h3:text-lg prose-h3:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-gray-700">
            <ContentComponent activeSection={activeSection} />

            {/* FAQs Accordion */}
            {blog.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28 border-t border-orange-100/60 pt-8 pb-10">
                <h2 className="text-3xl font-serif font-medium text-orange-950 mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-orange-600" /> Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {blog.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index} 
                        className="border border-orange-100 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-lg font-medium text-gray-900 hover:text-orange-700 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <span className={`text-2xl font-light text-orange-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </button>
                        
                        <div 
                          className="transition-all duration-300 ease-in-out overflow-hidden"
                          style={{ 
                            maxHeight: isOpen ? "300px" : "0px",
                            opacity: isOpen ? 1 : 0
                          }}
                        >
                          <p className="p-5 pt-0 text-sm leading-relaxed text-gray-600 border-t border-orange-50/50 bg-[#fffdfb]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Right Column: Floating Sidebar Widgets */}
          <aside className="space-y-6 sticky top-28 self-start lg:block">
            {/* Promo / Booking Card */}
            <Card className="border-orange-100 bg-white shadow-lg overflow-hidden relative">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-50">
                  Plan With Experts
                </Badge>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  Margika Yatra Services
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  We specialize in senior-citizen friendly and family pilgrimages with direct support from our office in Brahmand, Thane.
                </p>
                
                <div className="space-y-3.5 mb-6 text-xs text-gray-700">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>VIP Darshan & Puja Passes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>Comfortable AC Vehicles & Hotels</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>Sattvic Pure Vegetarian Meals</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>24x7 WhatsApp Coordinator Support</span>
                  </div>
                </div>

                <Link prefetch={true} href="/book-trip">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium group py-5 shadow-md shadow-orange-600/10">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="border-orange-50 bg-[#fffdfb] p-6 shadow-md">
              <h4 className="font-serif font-semibold text-gray-900 mb-2">Visit Our Thane Office</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Have questions? Come visit us in person to plan your trip face-to-face.
              </p>
              <div className="text-xs text-gray-700 space-y-1">
                <p className="font-semibold text-orange-950">Margika Yatra Office</p>
                <p>Brahmand, Thane West,</p>
                <p>Maharashtra, India</p>
              </div>
            </Card>
          </aside>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

// Database of Blog Posts
const blogDatabase: Record<string, BlogData> = {
  "first-time-pilgrim-guide": {
    title: "Travel Tips for First-Time Pilgrims",
    subtitle: "A Guide to India's Sacred Journeys",
    badge: "First-Time Pilgrim Guide",
    date: "July 3, 2026",
    readTime: "8 min read",
    location: "India",
    coverImage: "/HomeMain.png",
    sections: [
      { id: "intro", title: "Introduction" },
      { id: "why-planning", title: "Why Planning Differs" },
      { id: "choosing-agency", title: "Choosing the Right Agency" },
      { id: "customized-tours", title: "Benefits of Customization" },
      { id: "unique-spiritual", title: "Spiritual Travel in India" },
      { id: "group-pilgrimage", title: "Group Pilgrimages" },
      { id: "senior-citizen", title: "Senior Citizen Travel" },
      { id: "family-guide", title: "Traveling with Children" },
      { id: "what-to-carry", title: "What to Carry" },
      { id: "practical-tips", title: "Before You Go Tips" },
      { id: "faqs", title: "Frequently Asked Questions" }
    ],
    faqs: [
      {
        q: "What are the most important pilgrimage travel tips for first-time travelers?",
        a: "Start by researching the specific customs and dress codes of your destination, book accommodation early during festival seasons, and pack according to the climate and altitude of the site. Working with a Spiritual Travel Agency India can also help you avoid common planning mistakes."
      },
      {
        q: "How is a customized pilgrimage tour different from a fixed group tour?",
        a: "A customized pilgrimage tour India lets you choose your own pace, destinations, and accommodation type, while a fixed group tour follows a set itinerary shared with other travelers. Both have their advantages depending on your comfort level and budget."
      },
      {
        q: "Are group pilgrimage tour packages in India suitable for solo travelers?",
        a: "Yes. Group pilgrimage tour packages India are often a good option for solo travelers, since they provide company, shared costs, and the safety of traveling with others on unfamiliar routes."
      },
      {
        q: "What should senior citizens keep in mind before a pilgrimage trip?",
        a: "A senior citizen pilgrimage tour India should include adequate rest days, minimal walking on steep routes, and accommodations close to the shrine. Carrying medical documents and regular medications is also essential."
      },
      {
        q: "What should I carry for a pilgrimage trip to high-altitude shrines?",
        a: "Along with standard essentials, carry layered clothing, a raincoat, comfortable trekking footwear, and any doctor-approved medication for altitude sickness. This list is a core part of any practical religious travel guide for Himalayan pilgrimages."
      }
    ],
    content: FirstTimePilgrimContent
  },
  "top-25-pilgrimage-places-in-india": {
    title: "Top 25 Best Pilgrimage Places in India",
    subtitle: "A Complete Guide to the Best Pilgrimage Places in India",
    badge: "Travel Guide",
    date: "June 28, 2026",
    readTime: "7 min read",
    location: "India",
    coverImage: "/dev1.png",
    sections: [
      { id: "intro", title: "Introduction" },
      { id: "why-different", title: "Why Pilgrimage Travel Is Different" },
      { id: "char-dham", title: "Char Dham Yatra: Himalayan Circuit" },
      { id: "jyotirlingas", title: "The Twelve Jyotirlingas" },
      { id: "south", title: "Rameshwaram & Jagannath Puri" },
      { id: "other-sites", title: "Other Must-Visit Pilgrimage Sites" },
      { id: "planning", title: "Planning & Tour Operators" },
      { id: "packages", title: "Spiritual Tour Packages Worth Considering" },
      { id: "seniors", title: "Planning for Senior Citizens" },
      { id: "conclusion", title: "Final Thoughts" }
    ],
    faqs: [
      {
        q: "What are the best pilgrimage places in India for a short weekend trip?",
        a: "If you're short on time, the 3 Jyotirlingas Maharashtra tour (Trimbakeshwar, Bhimashankar, and Grishneshwar) or a Shirdi-Siddhivinayak combo are ideal, since both can be completed in 2–3 days from Mumbai or Thane."
      },
      {
        q: "Which is the best time to do the Char Dham Yatra?",
        a: "The Char Dham Yatra usually runs from late April/May to October or November, as the Himalayan shrines close during winter due to snowfall."
      },
      {
        q: "Is Rameshwaram suitable for elderly travelers?",
        a: "Yes, Rameshwaram is fairly accessible by road and doesn't involve trekking, making it one of the more comfortable Hindu pilgrimage places in India for senior citizens, though the temple corridors do involve considerable walking."
      },
      {
        q: "Do I need to book a Jagannath Puri tour package from Mumbai in advance?",
        a: "Yes, especially during the Rath Yatra festival season, when flights to Bhubaneswar and hotels in Puri fill up quickly."
      },
      {
        q: "Why should I use a pilgrimage tour operator instead of planning independently?",
        a: "A local pilgrimage tour operator, especially one familiar with routes from Thane West or Mumbai, can help navigate seasonal closures, temple etiquette, and transport connections — details that are easy to miss when planning solo."
      }
    ],
    content: Top25PilgrimagesContent
  },
  "best-religious-places-to-visit-in-india": {
    title: "Best Religious Places to Visit in India",
    subtitle: "A Practical Guide for Every Traveler",
    badge: "Travel Guide",
    date: "June 15, 2026",
    readTime: "6 min read",
    location: "India",
    coverImage: "/rambg.jpg",
    sections: [
      { id: "intro", title: "Introduction" },
      { id: "what-makes-worth", title: "What Makes a Site Worth the Trip" },
      { id: "kedarnath", title: "Kedarnath: Himalayan Shrine" },
      { id: "jyotirlinga-circuit", title: "The Jyotirlinga Circuit" },
      { id: "varanasi-ayodhya", title: "Varanasi and Ayodhya" },
      { id: "jagannath-puri", title: "Jagannath Puri" },
      { id: "rameshwaram", title: "Rameshwaram" },
      { id: "kerala", title: "Kerala" },
      { id: "char-dham-picture", title: "Char Dham Yatra" },
      { id: "choosing-package", title: "Choosing the Right Package" },
      { id: "conclusion", title: "Final Thoughts" }
    ],
    faqs: [
      {
        q: "What are the best religious places to visit in India for first-time pilgrims?",
        a: "Road-accessible sites like Jagannath Puri, Rameshwaram, and the Varanasi-Ayodhya circuit are good starting points, since they don't require trekking like Kedarnath does."
      },
      {
        q: "When is the best time to book a Kedarnath tour package?",
        a: "The Kedarnath Yatra runs from roughly May to October, and it's best to book at least a few months ahead since registration slots and accommodation fill up quickly during peak season (May-June)."
      },
      {
        q: "Can a Jyotirlinga tour package cover Mahakaleshwar and other temples together?",
        a: "Yes, many operators combine Mahakaleshwar with nearby Jyotirlingas like Omkareshwar into a single circuit, which is more efficient than visiting each one separately."
      },
      {
        q: "Is a Varanasi Ayodhya tour package worth doing in one trip?",
        a: "Yes, since the two cities are about 200 km apart, combining them into one trip is common and lets you experience both the Kashi Vishwanath Temple and the Ram Mandir without excessive travel time."
      },
      {
        q: "What should I know before booking a Jagannath Puri tour package from Mumbai?",
        a: "Beyond flight connections through Bhubaneswar, it's important to know that non-Hindus cannot enter the temple's main sanctum, and booking early is essential during the Rath Yatra festival period."
      }
    ],
    content: BestReligiousPlacesContent
  }
}
