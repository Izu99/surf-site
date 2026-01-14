"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/94705583277?text=Hi%20Mali!%20I'm%20interested%20in%20surf%20lessons."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 group"
      style={{ backgroundColor: '#25D366' }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />

      {/* Pulse rings - WhatsApp green */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: '#25D366' }}
      />
      <span
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          backgroundColor: '#25D366',
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          animationDelay: "0.5s",
        }}
      />

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 px-4 py-2 bg-slate-900 text-white text-sm font-subtitle rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
      >
        Chat with Mali on WhatsApp
      </motion.span>
    </motion.a>
  );
};

export default WhatsAppButton;