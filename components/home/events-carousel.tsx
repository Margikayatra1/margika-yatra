"use client"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useRef, useState } from "react"

interface EventItem {
  name: string; date: string; location: string; image: string; description: string
}

export function EventsCarousel({ events }: { events: EventItem[] }) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplay.current as any])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])
  const onSelect = useCallback(() => { if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap()) }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative embla max-w-3xl mx-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full pl-4"
            >
              <Card className="bg-white/90 border-orange-200 overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="relative h-64 md:h-80">
                  <Image quality={65} src={event.image} alt={event.name} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" loading="lazy" />
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg font-semibold">Featured Event</Badge>
                </div>
                <CardContent className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">{event.name}</h3>
                    <p className="text-gray-700 text-base mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center text-gray-700 mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-orange-500" /><span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-6">
                      <MapPin className="h-5 w-5 mr-2 text-orange-500" /><span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <Link href={event.name === "Dev Deepawali" ? "/packages/dev-deepawali" : "/#packages"}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl border-0 font-semibold">
                      Book Now <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {scrollSnaps.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full ${i === selectedIndex ? 'bg-orange-500' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
