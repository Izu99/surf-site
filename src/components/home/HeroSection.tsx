"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Star } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80",
  "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=1920&q=80",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80",
  "https://images.unsplash.com/photo-1528150177508-7c0c366a5b46?w=1920&q=80",
  "https://images.unsplash.com/photo-1606988288304-6f0cfb5299f1?w=1920&q=80",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt={`Surfing Scene ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Darker gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/95 z-10" />
      </div>

      {/* Subtle floating shapes */}
      <div className="absolute inset-0 opacity-10 z-20 pointer-events-none">
        {/* ... (keeping previous motion divs) ... */}
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container-padding relative z-20 text-center text-white pt-24 pb-48">
        {/* ... (keeping previous content) ... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 text-white drop-shadow-2xl"
          >
            Ride the Waves of
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent drop-shadow-none">
              Hiriketiya Bay
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
          >
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="font-subtitle text-sm md:text-base text-white font-medium">
              Sri Lanka's Premier Surf School
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-subtitle leading-relaxed drop-shadow-lg"
          >
            Experience the thrill of surfing in Sri Lanka's most beautiful bay.
            Expert coaching from beginner to pro with Mali, your trusted surf guide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-subtitle font-semibold text-base md:text-lg px-8 py-6 md:px-10 md:py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
            >
              <Link href="/lessons">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 hover:border-white font-subtitle font-semibold text-base md:text-lg px-8 py-6 md:px-10 md:py-7 rounded-xl transition-all duration-300 shadow-lg"
            >
              <a
                href="https://wa.me/94705583277?text=Hi%20Mali!%20I'm%20interested%20in%20surf%20lessons."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Waves className="mr-2 w-5 h-5" />
                Contact Mali
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Happy Surfers" },
              { number: "10+", label: "Years Experience" },
              { number: "5★", label: "Rated School" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <div className="text-2xl md:text-4xl font-bold text-teal-400 mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-subtitle">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-teal-400 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Single Subtle Low-Opacity Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-48 lg:h-64"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#14b8a6"
            opacity="0.1"
            animate={{
              d: [
                "M0,100 C240,140 480,140 720,100 C960,60 1200,60 1440,100 L1440,200 L0,200 Z",
                "M0,110 C240,70 480,70 720,110 C960,150 1200,150 1440,110 L1440,200 L0,200 Z",
                "M0,100 C240,140 480,140 720,100 C960,60 1200,60 1440,100 L1440,200 L0,200 Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
