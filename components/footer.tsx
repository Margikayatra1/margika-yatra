"use client"

import { Instagram, Phone, Mail, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-100 to-orange-200 border-t border-orange-300 py-12 relative">
      <style>{`
        .footer-logo {
          transition: transform 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-icon {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .footer-icon:hover {
          transform: scale(1.15);
          color: #ea580c;
        }

        .footer-link {
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-link:hover {
          color: #ea580c;
          padding-left: 4px;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="footer-logo space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Margika Yatra Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent ml-2">
                  MARGIKA YATRA
                </span>
              </div>
            </Link>

            <p className="text-gray-700 mb-6 max-w-md font-medium leading-relaxed">
              Transforming lives through spiritual journeys. Experience the divine with our carefully curated
              vessel-based pilgrimages.
            </p>

            {/* Social icons */}
            <div className="flex space-x-5">
              
                href="https://www.instagram.com/margika_yatra_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-icon text-orange-600"
              >
                <Instagram className="h-6 w-6" />
              </a>
              
                href="tel:+918433684155"
                aria-label="Call us"
                className="footer-icon text-orange-600"
              >
                <Phone className="h-6 w-6" />
              </a>
              
                href="mailto:margikayatra@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                className="footer-icon text-orange-600"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-orange-700 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Book Trip', href: '/book-trip' },
                { label: 'Personalized Trip', href: '/personalized-trip' },
                { label: 'Reviews', href: '/previous-trips' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-gray-700 font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-orange-700 mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">Mumbai • Thane</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                
                  href="tel:+918433684155"
                  className="text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors"
                >
                  +91 8433684155
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                
                  href="tel:+917715069696"
                  className="text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors"
                >
                  +91 7715069696
                </a>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">4.9/5 Google Rating</span>
              </div>

              {/* WhatsApp CTA — mobile friendly tap target */}
              
                href="https://wa.me/917208771688?text=Hello%2C%20I%27m%20interested%20in%20a%20spiritual%20trip%20with%20Margika%20Yatra."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 shadow-md"
              >
                {/* WhatsApp SVG icon — no extra package needed */}
                <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-300 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 font-medium text-sm">
            © {new Date().getFullYear()} Margika Yatra Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with 🙏 for spiritual travelers
          </p>
        </div>
      </div>
    </footer>
  )
}
