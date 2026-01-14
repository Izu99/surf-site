"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background patterns - Subtle light theme decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto container-padding relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 mb-8 font-subtitle text-sm font-semibold tracking-wide uppercase shadow-sm"
          >
            <Waves className="w-4 h-4" />
            Limited Spots Available
          </motion.div>

          <h2 className="font-title text-4xl md:text-6xl text-slate-900 mb-8 drop-shadow-sm">
            Ready to Catch Your <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">First Wave?</span>
          </h2>

          <p className="text-slate-600 font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in Hiriketiya and discover why surfing is more than just a sport —
            it's a way of life. Book your lesson today and let the adventure begin!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-subtitle font-bold text-lg px-10 py-8 rounded-2xl shadow-xl shadow-teal-500/10 transition-all duration-300 group"
            >
              <Link href="/lessons">
                Browse Lessons
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-subtitle font-bold text-lg px-10 py-8 rounded-2xl shadow-xl shadow-green-500/10 transition-all duration-300"
            >
              <a
                href="https://wa.me/94705583277?text=Hi%20Mali!%20I'm%20ready%20to%20book%20my%20surf%20lesson!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-6 h-6 fill-white" />
                Book via WhatsApp
              </a>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-slate-400 font-body text-sm"
          >
            Flexible scheduling • Gear included • Expert coaching
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;