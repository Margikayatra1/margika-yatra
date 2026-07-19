"use client"
// Replaces react-countup + react-intersection-observer with native browser APIs — saves ~15KB
import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Ship, Heart, type LucideIcon } from "lucide-react"

function useCountUp(end: number, decimals: number, duration: number, triggered: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const totalFrames = Math.round(duration * 60)
    let frame = 0
    const id = setInterval(() => {
      frame++
      const t = frame / totalFrames
      const eased = 1 - Math.pow(1 - t, 3)
      const next = parseFloat((eased * end).toFixed(decimals))
      setValue(next)
      if (frame >= totalFrames) { setValue(end); clearInterval(id) }
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [triggered, end, duration, decimals])
  return value
}

interface StatItem { icon: LucideIcon; number: number; suffix: string; label: string; decimals?: number }

function StatCard({ stat }: { stat: StatItem }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.number, stat.decimals ?? 0, 2, triggered)
  const Icon = stat.icon

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const display = stat.decimals ? count.toFixed(stat.decimals) : Math.floor(count)

  return (
    <div ref={ref} className="h-full transition-transform duration-300 hover:scale-105">
      <Card className="bg-white/80 border-orange-200 text-center shadow-xl h-full">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
          <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4 flex-shrink-0" />
          <h4 className="text-2xl font-bold text-gray-800 mb-2">{triggered ? `${display}${stat.suffix}` : `0${stat.suffix}`}</h4>
          <p className="text-gray-600 font-medium leading-tight">{stat.label}</p>
        </CardContent>
      </Card>
    </div>
  )
}

const stats: StatItem[] = [
  { icon: Users, number: 5000, suffix: "+", label: "Happy Pilgrims" },
  { icon: Award, number: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
  { icon: Ship, number: 50, suffix: "+", label: "Sacred Destinations" },
  { icon: Heart, number: 100, suffix: "%", label: "VIP Darshan" },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-6 items-stretch">
      {stats.map((stat, i) => <StatCard key={i} stat={stat} />)}
    </div>
  )
}
