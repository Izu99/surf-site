"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, User, Baby } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const lessonTypes = [
  {
    icon: User,
    title: "Beginner Lessons",
    description: "Perfect for first-timers. Learn the basics of surfing with personal instruction and all equipment included.",
    price: "From LKR 5,000",
    duration: "1.5 - 2 hours",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80",
  },
  {
    icon: Baby,
    title: "Kids Surfing",
    description: "Safe and fun lessons for children under 10 with two dedicated instructors for maximum safety.",
    price: "LKR 8,000",
    duration: "1.5 hours",
    image: "https://images.unsplash.com/photo-1537519646099-335112f03225?w=600&q=80",
  },
  {
    icon: Users,
    title: "Intermediate Classes",
    description: "Ready to level up? Master advanced techniques and catch bigger waves with expert guidance.",
    price: "From LKR 7,000",
    duration: "1.5 hours",
    image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=600&q=80",
  },
];

const LessonsPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Our Programs"
          title="Find Your Perfect Wave"
          description="Whether you're a total beginner, bringing the kids, or looking to level up your intermediate skills, we have a package for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {lessonTypes.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white">
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <lesson.icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <h3 className="font-title text-xl md:text-2xl text-slate-900">
                    {lesson.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-600 font-body text-sm leading-relaxed">
                    {lesson.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <p className="font-subtitle font-semibold text-teal-600 text-lg">
                        {lesson.price}
                      </p>
                      <p className="text-slate-500 text-xs font-body">
                        {lesson.duration}
                      </p>
                    </div>
                    <Link
                      href="/lessons"
                      className="text-teal-600 hover:text-teal-700 font-subtitle font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-subtitle font-semibold px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/lessons">
              View All Lessons
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LessonsPreview;