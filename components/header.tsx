
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Reviews', href: '/previous-trips' },
    { name: 'Book a Trip', href: '/book-trip' },
    { name: 'Personalized Trip', href: '/personalized-trip' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (typeof document !== 'undefined') {
        const element = document.getElementById(href.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 10);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-md backdrop-blur-md py-2 border-b border-orange-200'
          : 'bg-white/95 backdrop-blur-md border-b border-orange-100 py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header content */}
      <div className="container mx-auto px-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(249, 115, 22, 0.5)',
              }}
            >
              <img
                src="/logo.png"
                alt="Margika Yatra Logo"
                className="h-10 w-10 rounded-full object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                MARGIKA YATRA
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation + SignIn */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group font-semibold text-sm"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group font-semibold text-sm"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-orange-600 hover:text-orange-700"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-orange-200">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2 block font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
