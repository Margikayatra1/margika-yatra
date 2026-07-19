const fs = require('fs');

const original = fs.readFileSync('app/packages/[id]/page.tsx', 'utf-8');

const genericStart = original.indexOf('return (\n    <div className="min-h-screen bg-gradient-to-br');
const genericEnd = original.indexOf('function PackageHtmlPage');

const htmlPageStart = original.indexOf('function PackageHtmlPage');
const charDetailStart = original.indexOf('function CharDhamDetail');

const genericCode = `"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock, CreditCard, IndianRupee, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/newheader"
import { openPaymentLink } from "@/lib/payment-links"

export function GenericPackageDetail({ pkg }: { pkg: any }) {
  const handleWhatsapp = () => {
    const message = \`Namaste! I want to know more about \${pkg.name} package (\${pkg.price}, \${pkg.duration}). Please share details and availability.\`
    window.open(\`https://wa.me/917208771688?text=\${encodeURIComponent(message)}\`, "_blank", "noopener,noreferrer")
  }

` + original.substring(genericStart, genericEnd);

fs.writeFileSync('app/packages/[id]/GenericPackageDetail.tsx', genericCode);

const mahaCode = `"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/ui/newheader"
import { Footer } from "@/components/footer"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"
import { GoogleReviews } from "@/components/ui/google-reviews"
import Link from "next/link"

` + original.substring(htmlPageStart, charDetailStart) + `\nexport { MaharashtraJyotirlingDetail };\n`;

fs.writeFileSync('app/packages/[id]/MaharashtraJyotirlingDetail.tsx', mahaCode);

const charCode = `"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/ui/newheader"
import { Footer } from "@/components/footer"
import { CharStats } from "@/components/char-stats"
import { FAQ } from "@/components/faq"
import { GoogleReviews } from "@/components/ui/google-reviews"
import Link from "next/link"

` + original.substring(charDetailStart) + `\nexport { CharDhamDetail };\n`;

fs.writeFileSync('app/packages/[id]/CharDhamDetail.tsx', charCode);

const newPageCode = `import { tripPackages, getTripPackage } from "@/lib/trip-packages"
import { Header } from "@/components/ui/newheader"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import nextDynamic from 'next/dynamic'

const VaranasiPrayagrajAyodhyaDetail = nextDynamic(() => import('./VaranasiPrayagrajAyodhyaDetail').then(mod => mod.VaranasiPrayagrajAyodhyaDetail))
const RameshwaramDetail = nextDynamic(() => import('./RameshwaramDetail').then(mod => mod.RameshwaramDetail))
const JagannathPuriDetail = nextDynamic(() => import('./JagannathPuriDetail').then(mod => mod.JagannathPuriDetail))
const DevDeepawaliDetail = nextDynamic(() => import('./DevDeepawaliDetail').then(mod => mod.DevDeepawaliDetail))
const DwarkaSomnathDetail = nextDynamic(() => import('./DwarkaSomnathDetail').then(mod => mod.DwarkaSomnathDetail))
const UjjainOmkareshwarDetail = nextDynamic(() => import('./UjjainOmkareshwarDetail').then(mod => mod.UjjainOmkareshwarDetail))
const KeralaDetail = nextDynamic(() => import('./KeralaDetail').then(mod => mod.KeralaDetail))
const MaharashtraJyotirlingDetail = nextDynamic(() => import('./MaharashtraJyotirlingDetail').then(mod => mod.MaharashtraJyotirlingDetail))
const CharDhamDetail = nextDynamic(() => import('./CharDhamDetail').then(mod => mod.CharDhamDetail))
const GenericPackageDetail = nextDynamic(() => import('./GenericPackageDetail').then(mod => mod.GenericPackageDetail))

export function generateStaticParams() {
  return tripPackages.map((pkg) => ({
    id: pkg.id,
  }))
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
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

  if (pkg.id === "char-dham") return <CharDhamDetail />
  if (pkg.id === "maharashtra") return <MaharashtraJyotirlingDetail />
  if (pkg.id === "ujjain") return <UjjainOmkareshwarDetail />
  if (pkg.id === "dev-deepawali") return <DevDeepawaliDetail />
  if (pkg.id === "dwarka-somnath") return <DwarkaSomnathDetail />
  if (pkg.id === "varanasi" || pkg.id === "tri-city") return <VaranasiPrayagrajAyodhyaDetail />
  if (pkg.id === "rameshwaram") return <RameshwaramDetail />
  if (pkg.id === "jagannath-puri") return <JagannathPuriDetail />
  if (pkg.id === "kerala") return <KeralaDetail />

  return <GenericPackageDetail pkg={pkg} />
}
`;

fs.writeFileSync('app/packages/[id]/page.tsx', newPageCode);

console.log("Extraction complete!");
