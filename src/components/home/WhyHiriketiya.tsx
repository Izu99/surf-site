"use client";

import { motion } from "framer-motion";
import { Waves, MapPin, Sun, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const features = [
  {
    icon: Waves,
    title: "Perfect Waves",
    description: "Consistent, mellow waves ideal for all skill levels",
  },
  {
    icon: MapPin,
    title: "Stunning Location",
    description: "Horseshoe-shaped bay with pristine golden sand",
  },
  {
    icon: Sun,
    title: "Year-Round Surfing",
    description: "Great conditions throughout the year",
  },
  {
    icon: Heart,
    title: "Welcoming Community",
    description: "Friendly locals and fellow surf enthusiasts",
  },
];

const WhyHiriketiya = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-cyan-50/30 overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <SectionHeader
              subtitle="Location"
              title="Why Hiriketiya?"
              description="Known for its consistent, mellow waves and horseshoe-shaped beauty, Hiriketiya is the ultimate playground for surfers of all levels."
              align="left"
              className="mb-8"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-sm">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-subtitle font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm font-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Grid - Unsplash surf images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image - Beautiful bay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80"
                  alt="Beautiful ocean waves at Hiriketiya Bay"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Smaller image - Surf action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80"
                  alt="Surfing at Hiriketiya"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Stats card - Gradient background */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 p-6 flex flex-col justify-center shadow-lg"
              >
                <div className="text-center text-white">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <MapPin className="w-10 h-10 mx-auto mb-3 opacity-90" />
                  </motion.div>
                  <h3 className="font-title text-xl mb-1 font-bold">Hiriketiya Bay</h3>
                  <p className="font-body text-white/90 text-sm">Sri Lanka's Hidden Gem</p>
                </div>
              </motion.div>
            </div>

            {/* Floating badge - Solid white background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border-2 border-teal-500"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-subtitle font-semibold text-slate-900">Perfect Swells</p>
                  <p className="text-slate-600 text-sm font-body">Year-round</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHiriketiya;
