"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    text: "Mali is an incredible instructor! Patient, encouraging, and really knows how to read the waves. I went from never surfing to catching waves on my first day!",
  },
  {
    name: "Thomas Mueller",
    country: "Germany",
    rating: 5,
    text: "Best surf experience in Sri Lanka! The equipment was great, and Mali's teaching style made everything so easy to understand. Highly recommend!",
  },
  {
    name: "Emma Chen",
    country: "Singapore",
    rating: 5,
    text: "Took my kids for lessons and they absolutely loved it. Two instructors for safety was really reassuring. The king coconut after was the cherry on top!",
  },
  {
    name: "James Wilson",
    country: "UK",
    rating: 5,
    text: "As an intermediate surfer, Mali helped me improve my technique significantly. His local knowledge of the waves is unmatched. Will definitely come back!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-cyan-50/30 to-white">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Surfers Say"
          description="Don't just take our word for it — hear from the amazing people who've surfed with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-10 h-10 text-teal-500/10 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 font-body leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-sm">
                      <span className="font-subtitle font-bold text-white text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-subtitle font-bold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-500 text-sm font-body">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA - Fixed visibility with solid styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://google.com/search?q=Hiriketiya+Surf+with+Mali+reviews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-teal-500 text-teal-600 font-subtitle font-bold rounded-xl shadow-lg hover:bg-teal-50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>See all reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;