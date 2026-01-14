"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Waves, Instagram, Facebook, Youtube } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <main className="pt-24 min-h-screen bg-slate-50">
            {/* Centered Modern Page Hero - Light Theme */}
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
                            <Send className="w-3.5 h-3.5" />
                            Contact Us
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl mb-8 leading-tight">
                            Start Your <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Surf Journey</span> With Us
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            Have questions or ready to book? We're here to help you catch your first wave in paradise. Reach out to Mali directly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Balanced Main Contact Section */}
            <section className="relative pb-24">
                <div className="container mx-auto container-padding">
                    <div className="max-w-7xl mx-auto -mt-12 relative z-30">
                        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                            {/* Left Side: Modern Form (60%) */}
                            <div className="lg:w-[60%] p-8 md:p-12 lg:p-16">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/20">
                                        <Send className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-title text-3xl text-slate-900 font-bold">Booking Request</h3>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="name" className="text-sm font-subtitle font-bold text-slate-500 uppercase tracking-wider">Full Name</Label>
                                            <Input id="name" placeholder="John Smith" className="rounded-2xl border-slate-100 bg-slate-50/50 py-7 px-6 focus:bg-white transition-all text-slate-900 font-medium outline-none border-2 focus:border-teal-500/30" />
                                        </div>
                                        <div className="space-y-2.5">
                                            <Label htmlFor="email" className="text-sm font-subtitle font-bold text-slate-500 uppercase tracking-wider">Email Address</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="rounded-2xl border-slate-100 bg-slate-50/50 py-7 px-6 focus:bg-white transition-all text-slate-900 font-medium outline-none border-2 focus:border-teal-500/30" />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="phone" className="text-sm font-subtitle font-bold text-slate-500 uppercase tracking-wider">WhatsApp Number</Label>
                                            <Input id="phone" placeholder="+94 XX XXX XXXX" className="rounded-2xl border-slate-100 bg-slate-50/50 py-7 px-6 focus:bg-white transition-all text-slate-900 font-medium outline-none border-2 focus:border-teal-500/30" />
                                        </div>
                                        <div className="space-y-2.5">
                                            <Label className="text-sm font-subtitle font-bold text-slate-500 uppercase tracking-wider">Lesson Type</Label>
                                            <Select>
                                                <SelectTrigger className="rounded-2xl border-slate-100 bg-slate-50/50 py-7 px-6 focus:bg-white text-slate-900 font-medium border-2 focus:border-teal-500/30">
                                                    <SelectValue placeholder="Select a lesson" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-slate-100 bg-white shadow-2xl">
                                                    <SelectItem value="beginner-a">Option A: Beginner (Private)</SelectItem>
                                                    <SelectItem value="beginner-b">Option B: Beginner (Semi-private)</SelectItem>
                                                    <SelectItem value="beginner-c">Option C: Under 10 Years</SelectItem>
                                                    <SelectItem value="beginner-d">Option D: Special Beginner (2 Hr)</SelectItem>
                                                    <SelectItem value="beginner-e">Option E: Team Lesson (Min 4)</SelectItem>
                                                    <SelectItem value="intermediate-f">Option F: Intermediate (Private)</SelectItem>
                                                    <SelectItem value="intermediate-g">Option G: Intermediate (Semi-private)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label htmlFor="message" className="text-sm font-subtitle font-bold text-slate-500 uppercase tracking-wider">Your Message</Label>
                                        <Textarea id="message" placeholder="Any special requests or details about your surf level?" rows={5} className="rounded-2xl border-slate-100 bg-slate-50/50 px-6 py-5 focus:bg-white transition-all text-slate-900 font-medium outline-none border-2 focus:border-teal-500/30" />
                                    </div>

                                    <Button type="submit" className="w-full bg-slate-900 hover:bg-teal-600 text-white font-subtitle font-bold py-8 rounded-2xl text-lg transition-all duration-300 shadow-xl shadow-slate-900/10 group">
                                        Send Message
                                        <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </form>
                            </div>

                            {/* Right Side: Contact Details (40%) */}
                            <div className="lg:w-[40%] bg-slate-50 p-8 md:p-12 lg:p-16 flex flex-col border-l border-slate-100">
                                <div className="mb-12">
                                    <h3 className="font-title text-3xl text-slate-900 font-bold mb-8">Let's Connect</h3>
                                    <div className="space-y-6">
                                        {[
                                            { icon: MapPin, title: "Our Base", text: "Hiriketiya Beach, Dikwella", color: "bg-white text-teal-600 shadow-sm" },
                                            { icon: Phone, title: "Phone / WhatsApp", text: "+94 70 558 3277", color: "bg-white text-blue-600 shadow-sm" },
                                            { icon: Mail, title: "Email Support", text: "info@hiriketiyasurf.com", color: "bg-white text-rose-600 shadow-sm" },
                                            { icon: Clock, title: "Open Hours", text: "Daily: 6 AM - 6 PM", color: "bg-white text-amber-600 shadow-sm" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-5 group">
                                                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 border border-slate-100 transition-transform group-hover:scale-110`}>
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                                                    <p className="text-slate-900 font-semibold font-subtitle">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto space-y-8">
                                    <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-subtitle font-bold py-8 rounded-2xl text-lg shadow-xl shadow-green-500/10 flex items-center justify-center gap-3">
                                        <a href="https://wa.me/94705583277" target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="w-7 h-7 fill-white" />
                                            WhatsApp Mali
                                        </a>
                                    </Button>

                                    <div className="space-y-4">
                                        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Follow Our Waves</p>
                                        <div className="flex justify-center gap-4">
                                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-100 hover:shadow-lg transition-all duration-300">
                                                    <Icon className="w-5 h-5" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Map Section - Clean Transition */}
            <section className="relative w-full">
                <div className="container mx-auto container-padding mb-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-600 font-subtitle text-xs font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4" />
                        Find us on the Beach
                    </div>
                </div>

                <div className="w-full relative h-[600px] group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4700.610404362476!2d80.70641070343125!3d5.963392994625643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1366e9b42e095%3A0x9e533650b0813670!2sHiriketiya%20Beach!5e1!3m2!1sen!2slk!4v1768245192034!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hiriketiya Surf with Mali Location"
                        className="grayscale hover:grayscale-0 transition-all duration-1000"
                    />

                    {/* Integrated Map Card */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-xl">
                        <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-teal-100 flex items-center gap-8">
                            <div className="w-20 h-20 rounded-3xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 shrink-0 animate-pulse">
                                <Waves className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-title text-2xl font-bold text-slate-900 mb-1">See You at the Bay</h4>
                                <p className="text-slate-500 font-body">We're located right on the sand at Hiriketiya Beach. Perfect swells, clear water, and the best surf team waiting for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
