"use client"
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

const VIDEO_ID = 'hnb6s7g6kEY'

export default function TeaserSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <Card className="bg-white/80 border-orange-200 shadow-2xl">
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-orange-600 mb-4">Watch Our Teaser</h3>
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-xl relative">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=1&rel=0&modestbranding=1`}
              title="Margika Yatra teaser"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="w-full h-full relative group block"
              aria-label="Play Margika Yatra teaser video"
            >
              {/* Thumbnail — no YouTube JS loaded until click */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image unoptimized={true} src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt="Watch Margika Yatra Teaser"
                className="w-full h-full object-cover"
                loading="lazy" width={800} height={600} quality={60} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Play button overlay */}
              <span className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                <span className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
