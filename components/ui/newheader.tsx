"use client"
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { tripPackages } from '@/lib/trip-packages';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Packages', dropdown: true },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/previous-trips' },
    { name: 'Book a Trip', href: '/book-trip' },
    { name: 'Personalized Trip', href: '/personalized-trip' },
    { name: 'Contact Us', href: '/contact' },
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

  const onScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const razorpayLink = "https://rzp.io/rzp/zCOhd60";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-md backdrop-blur-md border-b border-orange-200'
          : 'bg-white/95 backdrop-blur-md border-b border-orange-100'
      } py-1.5 sm:py-2`}
      style={{ animation: 'slideDown 0.5s ease-out forwards' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

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

        .logo-wrap {
          transition: transform 0.2s ease;
        }
        .logo-wrap:hover {
          transform: scale(1.02);
        }

        .nav-item {
          transition: transform 0.2s ease;
        }
        .nav-item:hover {
          transform: translateY(-1px);
        }

        /* Buttons – sized to match nav links */
        .btn-nav {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-family: 'Jost', sans-serif !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          padding: 6px 14px !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          text-decoration: none !important;
          transition: all 0.2s ease-in-out !important;
          white-space: nowrap !important;
          height: 34px !important;
          box-sizing: border-box !important;
        }
        
        .btn-ghost {
          border: 1.5px solid #f97316 !important;
          color: #c2410c !important;
          background: #f8fafc !important;
        }
        
        .btn-ghost:hover {
          background: #ffedd5 !important;
          transform: translateY(-1px) !important;
        }
        
        .btn-saffron {
          background: #f97316 !important;
          color: #ffffff !important;
          border: none !important;
        }
        
        .btn-saffron:hover {
          background: #ea580c !important;
          transform: translateY(-1px) !important;
        }

        .btn-phone-icon {
          font-size: 14px !important;
          margin-right: 6px !important;
          display: inline-flex !important;
          align-items: center !important;
        }

        .nav-cta {
          align-items: center !important;
          gap: 12px !important;
        }
      `}} />

      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between gap-2">

          {/* Logo */}
          <Link prefetch={true} href="/">
            <div className="logo-wrap flex items-center space-x-1.5 sm:space-x-2">
              <Image unoptimized={true}
                src="/logo.png"
                alt="Margika Yatra Logo"
                width={36}
                height={36}
                className="rounded-full object-contain w-7 h-7 sm:w-9 sm:h-9"
                priority
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent whitespace-nowrap">
                MARGIKA YATRA
              </span>
            </div>
          </Link>

          {/* Right side container for nav menu and actions */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger className="flex items-center gap-1 nav-link relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-sm outline-none">
                        {item.name} <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md border-orange-100 shadow-xl rounded-xl mt-2 p-2">
                        {tripPackages.map((pkg) => (
                          <DropdownMenuItem key={pkg.id} className="cursor-pointer hover:bg-[#FF9933] focus:bg-[#FF9933] rounded-md transition-colors group" asChild>
                            <Link prefetch={true} href={`/packages/${pkg.id}`} className="block w-full py-2 px-3 text-sm font-medium text-gray-700 group-hover:text-white group-focus:text-white">
                              {pkg.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                const isHashOnHome = item.href!.startsWith('/#') && pathname === '/';
                return (
                  <div key={item.name} className="nav-item">
                    {isHashOnHome ? (
                      <button
                        onClick={() => handleNavClick(item.href!)}
                        className="nav-link relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-sm"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link prefetch={true}
                        href={item.href!}
                        className="nav-link relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-sm"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Actions */}
            <div className="nav-cta hidden lg:flex items-center space-x-3">
              <a href="tel:+917208771688" className="btn-nav btn-ghost">
                <span className="btn-phone-icon">📞</span> +91 72087 71688
              </a>
              <a href={razorpayLink} className="btn-nav btn-saffron" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
                aria-label="Open menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-orange-200 w-72 flex flex-col h-full overflow-hidden">
              {/* Logo inside drawer */}
              <div className="flex items-center space-x-2 mb-6 pt-2 shrink-0">
                <Image unoptimized={true}
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

              <div className="flex flex-col space-y-1 overflow-y-auto flex-1 pr-2">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.name} className="py-2">
                        <button 
                          onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                          className="w-full text-left text-gray-700 font-semibold text-base px-3 mb-2 flex items-center justify-between hover:text-orange-600 transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180 text-orange-600' : ''}`} />
                        </button>
                        
                        <div className={`flex flex-col space-y-1 pl-4 border-l-2 border-orange-100 ml-4 overflow-hidden transition-all duration-300 ease-in-out ${isPackagesOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                          {tripPackages.map((pkg) => (
                            <Link prefetch={true}
                              key={pkg.id}
                              href={`/packages/${pkg.id}`}
                              className="text-gray-600 hover:text-white hover:bg-[#FF9933] transition-colors duration-200 py-2 px-3 rounded-lg block text-sm font-medium"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsPackagesOpen(false);
                              }}
                            >
                              {pkg.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isHashOnHome = item.href!.startsWith('/#') && pathname === '/';
                  return isHashOnHome ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href!)}
                      className="text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 py-3 px-3 rounded-lg block font-semibold text-base w-full"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link prefetch={true}
                      key={item.name}
                      href={item.href!}
                      className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 py-3 px-3 rounded-lg block font-semibold text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* CTA inside mobile menu */}
              <div className="shrink-0 pt-4 pb-6 px-0 space-y-3 border-t border-orange-100 mt-auto">
                <a
                  href="tel:+917208771688"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-orange-300 text-[#c2410c] font-bold text-base hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 +91 72087 71688
                </a>
                <a
                  href={razorpayLink}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg active:scale-95 transition-transform duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
} 

