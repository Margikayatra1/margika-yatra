import Image from "next/image"
import { Card } from "@/components/ui/card"

// Reduced to 6 images — gallery doubles them for seamless loop, so 6 is plenty
// Chose smallest files first to reduce initial payload
const tripImages = [
  "/7.jpg", "/8.jpg", "/Home3.jpeg", "/Home4.jpeg", "/Home5.jpeg", "/devmain2.jpg"
]

// Pure CSS infinite scroll — zero JS animation cost, runs on compositor thread
export function PhotoGallery() {
  return (
    <div className="relative overflow-hidden">
      <div className="photo-gallery-track flex gap-6 pb-6" aria-hidden="true">
        {/* Double the images for seamless loop */}
        {[...tripImages, ...tripImages].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 group cursor-pointer snap-center"
          >
            <Card className="bg-white/90 border-orange-200 overflow-hidden shadow-xl h-64">
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Trip memory ${(index % tripImages.length) + 1}`}
                  fill
                  sizes="320px"
                  className="object-cover"
                  loading="lazy"
                  quality={65}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none z-10" />
    </div>
  )
}
