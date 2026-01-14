"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  // Different styles for home page vs other pages
  const headerBg = scrolled || !isHomePage
    ? "bg-white/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  const textColor = scrolled || !isHomePage
    ? "text-slate-900"
    : "text-white";

  const linkColor = (active: boolean) => {
    if (scrolled || !isHomePage) {
      return active ? "text-teal-600" : "text-slate-700 hover:text-teal-600";
    }
    return active ? "text-teal-400" : "text-white hover:text-teal-300";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img
                src={logo.src}
                alt="Hiriketiya Surf with Mali"
                className="h-12 md:h-16 w-auto drop-shadow-lg"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-subtitle text-base font-medium transition-all duration-300 relative group ${linkColor(isActive(link.href))}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${isActive(link.href)
                    ? "w-full bg-gradient-to-r from-teal-500 to-cyan-500"
                    : "w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-cyan-500"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+94705583277"
              className={`flex items-center gap-2 text-sm font-subtitle transition-colors ${scrolled || !isHomePage
                ? "text-slate-600 hover:text-teal-600"
                : "text-white/90 hover:text-white"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+94 70 558 3277</span>
            </a>

            <Button
              asChild
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://wa.me/94705583277?text=Hi%20Mali!%20I'm%20interested%20in%20surf%20lessons."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Waves className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || !isHomePage
              ? "text-slate-900 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
          >
            <nav className="container-padding py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-subtitle text-lg font-medium py-3 px-4 rounded-lg block transition-all duration-300 ${isActive(link.href)
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-slate-200 flex flex-col gap-3"
              >
                <a
                  href="tel:+94705583277"
                  className="flex items-center gap-2 text-sm font-subtitle text-slate-600 px-4 py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+94 70 558 3277</span>
                </a>

                <Button
                  asChild
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white w-full shadow-lg"
                >
                  <a
                    href="https://wa.me/94705583277?text=Hi%20Mali!%20I'm%20interested%20in%20surf%20lessons."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Waves className="w-4 h-4 mr-2" />
                    Book Your Lesson
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;