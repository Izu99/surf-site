"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
    {
        slug: "beginners-guide",
        title: "A Beginner's Guide to Surfing in Sri Lanka",
        excerpt: "Everything you need to know before catching your first wave in the tropical paradise of Hiriketiya.",
        date: "Jan 5, 2026",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80",
        category: "Learning"
    },
    {
        slug: "best-time-surf",
        title: "Best Time to Surf in Hiriketiya Bay",
        excerpt: "Understanding the seasons and swells for the perfect surf trip to the South Coast.",
        date: "Dec 28, 2025",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80",
        category: "Travel"
    },
    {
        slug: "surf-etiquette",
        title: "Surf Etiquette: Rules Every Surfer Should Know",
        excerpt: "Learn the unwritten rules of the lineup and be a respectful surfer in the water.",
        date: "Dec 15, 2025",
        image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=600&q=80",
        category: "Safety"
    },
    {
        slug: "choosing-surfboard",
        title: "Choosing the Right Surfboard for Your Level",
        excerpt: "From longboards to shortboards - find your perfect match for more fun and progress.",
        date: "Dec 8, 2025",
        image: "https://images.unsplash.com/photo-1537519646099-335112f03225?w=600&q=80",
        category: "Gear"
    },
    {
        slug: "ocean-safety",
        title: "Ocean Safety Tips for Beginners",
        excerpt: "Stay safe while having fun in the water with these essential tips from Mali.",
        date: "Nov 30, 2025",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        category: "Safety"
    },
    {
        slug: "hiriketiya-hidden-gems",
        title: "Hidden Gems Around Hiriketiya Bay",
        excerpt: "Explore the beautiful spots beyond the beach during your surf trip with our local guide.",
        date: "Nov 22, 2025",
        image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&q=80",
        category: "Travel"
    }
];

const Blog = () => {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-6 font-subtitle text-xs font-bold uppercase tracking-wider">
                            <Calendar className="w-3.5 h-3.5" />
                            Surf Stories
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl mb-8 leading-tight">
                            Surf Stories & <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Expert Tips</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            Insights, tips, and stories from the waves and local life of Hiriketiya. Learn from the locals, ride with the best.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white flex flex-col">
                                    <div className="relative h-60 overflow-hidden shrink-0">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-teal-600 uppercase tracking-wider shadow-md">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <CardContent className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-slate-400 text-xs font-subtitle font-medium mb-4 uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>5 min read</span>
                                            </div>
                                        </div>

                                        <h3 className="font-subtitle font-bold text-xl text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-teal-600 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-500 font-body text-sm mb-8 line-clamp-2 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-teal-600 font-subtitle font-bold text-sm uppercase tracking-wider group/link"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Newsletter Callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 p-12 bg-slate-50 rounded-[3rem] text-center border-2 border-dashed border-teal-200"
                    >
                        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="font-title text-3xl text-slate-900 mb-4">Never Miss a Swell</h3>
                        <p className="text-slate-600 max-w-lg mx-auto mb-10 font-body">
                            Join our newsletter for the latest surf tips, season updates, and special offers from Hiriketiya Surf with Mali.
                        </p>
                        <div className="max-w-md mx-auto flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-teal-500 outline-none font-body transition-colors"
                            />
                            <button className="px-8 py-4 bg-slate-900 text-white font-subtitle font-bold rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-slate-900/20">
                                Join
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
