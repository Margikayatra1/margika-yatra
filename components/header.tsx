"use client"
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/previous-trips' },
    { name: 'Book a Trip', href: '/book-trip' },
    { name: 'Personalized Trip', href: '/personalized-trip' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // ✅ useCallback so the function reference is stable — avoids re-adding listener on every render
  const onScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    // ✅ passive: true — critical for mobile, tells browser scroll listener won't call preventDefault()
    // This allows the browser to scroll without waiting for JS to finish
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    // ✅ Pure CSS transition instead of framer-motion animate — runs on compositor thread
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-md backdrop-blur-md py-2 border-b border-orange-200'
          : 'bg-white/95 backdrop-blur-md border-b border-orange-100 py-4'
      }`}
      // ✅ CSS slide-in animation instead of framer-motion
      style={{ animation: 'slideDown 0.5s ease-out forwards' }}
    >
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        /* Underline hover effect — pure CSS, zero JS */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f97316;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Logo hover — CSS instead of framer-motion whileHover */
        .logo-wrap {
          transition: transform 0.2s ease;
        }
        .logo-wrap:hover {
          transform: scale(1.05);
        }

        /* Nav item hover lift — CSS instead of framer-motion whileHover y:-2 */
        .nav-item {
          transition: transform 0.2s ease;
        }
        .nav-item:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo — next/image instead of <img> for better mobile performance */}
          <Link href="/">
            <div className="logo-wrap flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Margika Yatra Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
                priority // ✅ preloads logo — improves LCP score on mobile
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                MARGIKA YATRA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="nav-item">
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    href={item.href}
                    className="nav-link relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-sm"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-sm"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                aria-label="Open menu"
              >
                {/* ✅ Toggle icon based on state — better UX than always showing Menu */}
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-orange-200 w-72">
              {/* Logo inside drawer */}
              <div className="flex items-center space-x-2 mb-8 pt-2">
                <Image
                  src="/logo.png"
                  alt="Margika Yatra Logo"
                  width={36}
                  height={36}
                  className="rounded-full object-contain"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  MARGIKA YATRA
                </span>
              </div>

              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 py-3 px-3 rounded-lg block font-semibold text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA inside mobile menu */}
              <div className="absolute bottom-8 left-4 right-4">
                <Link href="/book-trip" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg active:scale-95 transition-transform duration-150">
                    Book a Trip 🙏
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
