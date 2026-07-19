import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Disable preload to eliminate the 370ms render-blocking request
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'Spiritual Tour Packages from Mumbai | Margika Yatra',
  description: 'Book spiritual tour & pilgrimage packages from Mumbai with Margika Yatra. Char Dham, Kerala, Dwarka-Somnath & more. VIP darshan assured, 4.9★ rated agency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — lazyOnload so it never blocks render */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NBVQGFC');`,
          }}
        />
      </head>
      <body className={inter.variable} style={{ fontFamily: 'var(--font-inter), Arial, sans-serif' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NBVQGFC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
