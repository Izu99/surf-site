"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-cyan-50/30 to-white">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Experience the Waves"
          title="See Us in Action"
          description="Watch our surf lessons and feel the excitement of catching your first wave at Hiriketiya Bay."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Surf Lessons at Hiriketiya Bay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Video thumbnail from Unsplash */}
                <img
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=1200&q=80"
                  alt="Surfing at Hiriketiya"
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/60" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center group transition-all duration-300"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-teal-600 fill-teal-600 ml-1 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="font-title text-2xl md:text-3xl font-bold mb-2">
                    Learn to Surf with Mali
                  </h3>
                  <p className="font-subtitle text-white/90">
                    Professional surf instruction in paradise
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Video stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: "Lesson Duration", value: "2 Hours" },
              { label: "Group Size", value: "Max 4" },
              { label: "All Levels", value: "Welcome" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center p-4 bg-white rounded-xl shadow-md"
              >
                <p className="font-subtitle text-sm text-slate-600 mb-1">{stat.label}</p>
                <p className="font-title text-lg font-bold text-teal-600">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
