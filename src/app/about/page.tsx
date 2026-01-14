"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Award, MapPin, Waves, Star } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Centered Modern Page Hero */}
            <section className="relative py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 -translate-x-1/2" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

                <div className="container mx-auto container-padding relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 mb-6 font-subtitle text-xs font-bold uppercase tracking-wider">
                            <Waves className="w-3.5 h-3.5" />
                            Our Story
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl mb-8 leading-tight">
                            About <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Hiriketiya Surf</span> with Mali
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            Your gateway to riding the waves at one of Sri Lanka's most beautiful and legendary surf spots. Professional coaching, local soul.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto container-padding">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
                                    alt="Mali - Professional Surf Instructor"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-50 rounded-[2.5rem] -z-0" />

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-10 -right-4 z-20 bg-white p-6 rounded-2xl shadow-xl border-2 border-teal-500"
                            >
                                <div className="text-center">
                                    <p className="font-title text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">10+</p>
                                    <p className="font-subtitle text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 mb-6 font-subtitle text-sm font-bold uppercase tracking-wide">
                                <Award className="w-4 h-4" />
                                Professional Instructor
                            </div>
                            <h2 className="font-title text-4xl md:text-5xl text-slate-900 mb-8">Meet Mali</h2>
                            <div className="space-y-6 text-slate-600 font-body text-lg leading-relaxed">
                                <p>
                                    Mali is a professional surf instructor with years of experience riding and teaching in Hiriketiya's legendary waves. With a deep love for the ocean and a friendly, patient teaching style, Mali makes learning to surf fun, safe, and rewarding.
                                </p>
                                <p>
                                    Whether it's your first time standing up on a board or you're looking to master advanced maneuvers, Mali provides the personalized attention and local insights you need to succeed.
                                </p>
                                <div className="pt-4 flex items-center gap-3 text-teal-600 font-subtitle font-bold">
                                    <MapPin className="w-5 h-5" />
                                    <span>Based in Hiriketiya Bay, Sri Lanka</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto container-padding text-center">
                    <SectionHeader subtitle="Values" title="Our Mission" className="mb-16" />
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Heart,
                                title: "Build Confidence",
                                desc: "We focus on making you feel safe and comfortable in the water, giving you the heart to catch any wave.",
                                color: "bg-rose-50 text-rose-500"
                            },
                            {
                                icon: Shield,
                                title: "Proper Technique",
                                desc: "Ocean safety and technical skills are at the center of everything we teach to ensure you progress correctly.",
                                color: "bg-teal-50 text-teal-600"
                            },
                            {
                                icon: Star,
                                title: "Unforgettable Moments",
                                desc: "Creating memories that last a lifetime in the tropical paradise of Hiriketiya Bay.",
                                color: "bg-amber-50 text-amber-500"
                            }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                                    <CardContent className="p-10">
                                        <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110`}>
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-subtitle font-bold text-xl text-slate-900 mb-4">{item.title}</h4>
                                        <p className="text-slate-500 font-body leading-relaxed">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section - Great for AEO/SEO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader subtitle="Questions?" title="Frequently Asked Questions" className="mb-16" />
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is the best time to surf in Hiriketiya?",
                                    a: "The main surf season in Hiriketiya is from November to April when the waves are consistently clean and perfect for all levels. However, the bay is surfable almost year-round due to its protected geography."
                                },
                                {
                                    q: "Do I need my own surfboard?",
                                    a: "No, all surf lessons with Mali include a high-quality surfboard suited to your skill level, as well as a rash guard and ocean-safe sun protection."
                                },
                                {
                                    q: "Are lessons suitable for children?",
                                    a: "Yes! We offer special lessons for children under 10. Our instructors are patient and prioritize safety above everything else to ensure kids have a great first experience."
                                },
                                {
                                    q: "How do I book a lesson?",
                                    a: "The easiest way is to message Mali directly on WhatsApp using the button on our site, or use the contact form to send us your details."
                                }
                            ].map((faq, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                                        <h3 className="font-subtitle font-bold text-xl text-slate-900 mb-4 flex items-center gap-3">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm">?</span>
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 font-body leading-relaxed ml-11">{faq.a}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
