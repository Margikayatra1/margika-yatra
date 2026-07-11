"use client"

import { Users, Star, ShieldCheck } from "lucide-react"

// Icon box class extracted — no backdrop-blur, uses solid bg instead for mobile perf
const iconBox = "w-11 h-11 rounded-xl bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-150 group-hover:bg-white/30"

export function CharStats() {
  return (
    <div className="relative z-10 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 border-y border-white/10 shadow-[0_6px_20px_-4px_rgba(234,88,12,0.25)]">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
          
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className={iconBox}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5">5000+</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">Happy Yatris</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 hidden md:block" />

          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className={iconBox}>
              <Star className="h-5 w-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5">4.9★</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">Google Rating</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 hidden md:block" />

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className={iconBox}>
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5">100%</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">VIP Darshan Assured</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
