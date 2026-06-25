"use client"

import { Users, Star, ShieldCheck } from "lucide-react"

export function CharStats() {
  return (
    <div className="relative z-10 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 border-y border-white/10 shadow-[0_10px_25px_-5px_rgba(234,88,12,0.2)]">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
          
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
              <Users className="h-5 w-5 text-white drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5 drop-shadow-sm">500+</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">Happy Yatris</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 hidden md:block" />

          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
              <Star className="h-5 w-5 text-white fill-white drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5 drop-shadow-sm">4.9★</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">Google Rating</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 hidden md:block" />

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
              <ShieldCheck className="h-5 w-5 text-white drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <strong className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-0.5 drop-shadow-sm">100%</strong>
              <span className="text-white/85 text-[10px] md:text-xs font-bold tracking-widest uppercase">VIP Darshan Assured</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
