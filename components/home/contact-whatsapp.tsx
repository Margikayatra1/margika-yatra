"use client"
import { Button } from "@/components/ui/button"

export function ContactWhatsapp() {
  const handleGeneralWhatsapp = () => {
    const phoneNumber = '+917208771688'
    const message = encodeURIComponent("Hello, I'm interested in a spiritual trip with Margika Yatra.")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <Button
      variant="outline"
      className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full mt-auto"
      onClick={handleGeneralWhatsapp}
    >
      Message on WhatsApp
    </Button>
  )
}
