"use client";

import { motion } from "framer-motion";
import { Check, Users, User, Baby, Clock, MessageCircle, Waves, Star } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const inclusions = [
    "Professional Surfboard",
    "High-quality Rash guard",
    "Ocean-safe Sun cream",
    "Zinc Skin protection",
    "Complete First aid",
    "Post-surf King coconut"
];

const beginnerLessons = [
    { id: "A", title: "Beginner Lesson", duration: "1.5 Hr", price: "LKR 6,000", details: "Personal one-on-one instructor", icon: User },
    { id: "B", title: "Beginner Lesson", duration: "1.5 Hr", price: "LKR 5,500", details: "Semi-private (2 persons, 1 instructor)", icon: Users },
    { id: "C", title: "Under 10 Years", duration: "1.5 Hr", price: "LKR 8,000", details: "Two instructors for maximum safety", icon: Baby },
    { id: "D", title: "Special Beginner", duration: "2 Hr", price: "LKR 7,000", details: "Intensive session for first-timers", icon: User },
    { id: "E", title: "Team Lesson", duration: "1.5 Hr", price: "LKR 5,000", details: "Group session (Min 4 members)", icon: Users },
];

const intermediateLessons = [
    { id: "F", title: "Intermediate Lesson", duration: "1.5 Hr", price: "LKR 8,000", details: "Private session focusing on technique", icon: User },
    { id: "G", title: "Intermediate Lesson", duration: "1.5 Hr", price: "LKR 7,000", details: "Semi-private intermediate coaching", icon: Users },
];

const Lessons = () => {
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Centered Modern Page Hero */}
            <section className="relative py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 -translate-x-1/2" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

                <div className="container mx-auto container-padding relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 mb-6 font-subtitle text-xs font-bold uppercase tracking-wider">
                            <Star className="w-3.5 h-3.5" />
                            Premium Lessons
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl mb-8 leading-tight">
                            Surf Lessons with <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Mali</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            Choose the perfect lesson for your skill level. Our expert guidance ensures you catch your first wave with confidence and safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-24 bg-white">
                <div className="container mx-auto container-padding">
                    {/* Inclusions Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto -mt-12 relative z-30 mb-20"
                    >
                        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-4 px-6 text-center shadow-lg">
                                <h3 className="font-subtitle font-bold text-white text-xl flex items-center justify-center gap-2">
                                    <Star className="w-5 h-5 fill-white" />
                                    Included in Every Lesson
                                    <Star className="w-5 h-5 fill-white" />
                                </h3>
                            </div>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {inclusions.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                                                <Check className="w-4 h-4 text-teal-600 group-hover:text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Beginner Sessions */}
                    <div className="mb-24">
                        <SectionHeader
                            subtitle="Step 1"
                            title="Beginner Sessions"
                            description="From your very first time on a board to standing up and riding your first wave. We make learning to surf safe and extremely fun!"
                            align="center"
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {beginnerLessons.map((lesson, i) => (
                                <motion.div key={lesson.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <Card className="h-full border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 rounded-2xl group">
                                        <CardContent className="p-8">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                                                    <lesson.icon className="w-7 h-7 text-teal-600 group-hover:text-white" />
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                                    Option {lesson.id}
                                                </div>
                                            </div>
                                            <h4 className="font-subtitle font-bold text-2xl text-slate-900 mb-2">{lesson.title}</h4>
                                            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-body">
                                                <Clock className="w-4 h-4" />
                                                <span>Session: {lesson.duration}</span>
                                            </div>
                                            <p className="text-slate-600 mb-8 font-body min-h-[3rem]">{lesson.details}</p>
                                            <div className="flex items-baseline gap-1">
                                                <p className="font-subtitle font-black text-3xl text-teal-600">{lesson.price}</p>
                                                <span className="text-sm font-semibold text-slate-400">/ person</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Intermediate Sessions */}
                    <div className="mb-24">
                        <SectionHeader
                            subtitle="Step 2"
                            title="Intermediate Coaching"
                            description="Ready to head to the lineup? Master turtle rolls, cutbacks, and better wave reading with our expert intermediate courses."
                            align="center"
                        />
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {intermediateLessons.map((lesson, i) => (
                                <motion.div key={lesson.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <Card className="h-full border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 rounded-2xl group">
                                        <CardContent className="p-8">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                                                    <lesson.icon className="w-7 h-7 text-cyan-600 group-hover:text-white" />
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                                    Option {lesson.id}
                                                </div>
                                            </div>
                                            <h4 className="font-subtitle font-bold text-2xl text-slate-900 mb-2">{lesson.title}</h4>
                                            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-body">
                                                <Clock className="w-4 h-4" />
                                                <span>Session: {lesson.duration}</span>
                                            </div>
                                            <p className="text-slate-600 mb-8 font-body min-h-[3rem]">{lesson.details}</p>
                                            <div className="flex items-baseline gap-1">
                                                <p className="font-subtitle font-black text-3xl text-cyan-600">{lesson.price}</p>
                                                <span className="text-sm font-semibold text-slate-400">/ person</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center p-12 bg-slate-50 border-2 border-dashed border-teal-200 rounded-[3rem] relative overflow-hidden shadow-inner"
                    >
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <Waves className="w-full h-full text-teal-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-title text-3xl md:text-4xl text-slate-900 mb-6">Ready to Book Your Session?</h3>
                            <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg font-body">
                                Spot availability is limited during peak season. Message Mali directly to secure your time in the water!
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-subtitle font-bold px-12 py-8 rounded-2xl text-lg shadow-xl shadow-green-500/10 group transition-all duration-300"
                            >
                                <a href="https://wa.me/94705583277?text=Hi%20Mali!%20I'd%20like%20to%20book%20a%20lesson." target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 w-6 h-6 fill-white transition-transform group-hover:scale-110" />
                                    Book via WhatsApp
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Lessons;
