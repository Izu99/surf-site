"use client";

import { motion } from "framer-motion";
import { Shirt, Sun, Heart, Droplets, Umbrella, Coffee } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const inclusions = [
  {
    icon: Umbrella,
    title: "Surfboard",
    description: "Premium boards for all skill levels",
  },
  {
    icon: Shirt,
    title: "Rash Guard",
    description: "Comfortable surf shirts included",
  },
  {
    icon: Sun,
    title: "Sun Cream",
    description: "Keep protected from the tropical sun",
  },
  {
    icon: Droplets,
    title: "Zinc Protection",
    description: "Extra UV protection for your face",
  },
  {
    icon: Heart,
    title: "First Aid",
    description: "Safety is our top priority",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    description: "King coconut or water after surfing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const MaliTouchSection = () => {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Top Transition Gradient - Unified with the wave color */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-teal-500/20 via-teal-500/5 to-white z-0 pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Mali Image - Unsplash surf instructor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
                  alt="Professional Surf Instructor"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-4 border-teal-200 -z-10" />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-teal-500"
              >
                <div className="text-center">
                  <p className="font-title text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">10+</p>
                  <p className="font-subtitle text-sm text-slate-600 font-medium mt-1">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              subtitle="The Mali Touch"
              title="More Than Just a Lesson"
              description="We don't just teach you to surf; we welcome you to the family. Every lesson includes premium gear and a refreshing post-surf treat to celebrate your progress."
              align="left"
              className="mb-0"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {inclusions.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full card-hover border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subtitle font-semibold text-lg text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-body text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MaliTouchSection;
