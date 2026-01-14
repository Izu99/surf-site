"use client";

import { motion } from "framer-motion";
import { Camera, Play, Maximize2, Waves, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
    {
        id: 1,
        type: "image",
        src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
        alt: "Surfer catching a wave",
        className: "md:col-span-2 md:row-span-2",
        title: "Sunset Session"
    },
    {
        id: 2,
        type: "image",
        src: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800&q=80",
        alt: "Hiriketiya Beach view",
        className: "md:col-span-1 md:row-span-1",
        title: "The Bay"
    },
    {
        id: 3,
        type: "video-card",
        src: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&q=80",
        alt: "Surf lesson video thumbnail",
        className: "md:col-span-1 md:row-span-1",
        title: "Watch Action"
    },
    {
        id: 4,
        type: "image",
        src: "https://images.unsplash.com/photo-1537519646099-335112f03225?w=800&q=80",
        alt: "Surfboard on sand",
        className: "md:col-span-1 md:row-span-2",
        title: "Board Demo"
    },
    {
        id: 5,
        type: "image",
        src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
        alt: "Tropical palms",
        className: "md:col-span-2 md:row-span-1",
        title: "Tropical Vibes"
    },
    {
        id: 6,
        type: "image",
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
        alt: "Mali coaching student",
        className: "md:col-span-1 md:row-span-1",
        title: "Coaching"
    },
    {
        id: 7,
        type: "image",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
        alt: "Ocean texture",
        className: "md:col-span-3 md:row-span-1",
        title: "Crystal Waters"
    }
];

const Gallery = () => {
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Centered Modern Page Hero */}
            <section className="relative py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden text-center">
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
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 mb-6 font-subtitle text-xs font-bold uppercase tracking-wider">
                            <Camera className="w-3.5 h-3.5" />
                            Visual Journey
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl mb-8 leading-tight">
                            Captured <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Moments</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            A visual story of sun, salt, and surf at Hiriketiya Bay. See the energy and soul of Sri Lanka's premier surf spot.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-6">
                        {galleryItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative overflow-hidden rounded-[2rem] bg-slate-100 ${item.className}`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-white font-subtitle font-bold text-xl mb-1">{item.title}</p>
                                            <p className="text-teal-400 text-sm font-body">Hiriketiya Bay</p>
                                        </div>
                                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                                            {item.type === "video-card" ? <Play className="w-5 h-5 fill-white" /> : <Maximize2 className="w-5 h-5" />}
                                        </div>
                                    </div>
                                </div>
                                {item.type === "video-card" && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                            <Play className="w-8 h-8 fill-white ml-1" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Instagram CTA */}
                    <div className="mt-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 border-2 border-dashed border-teal-100 rounded-[3rem] p-12 max-w-4xl mx-auto"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                                <Instagram className="w-8 h-8" />
                            </div>
                            <h3 className="font-title text-3xl text-slate-900 mb-4">Follow the Waves on Social</h3>
                            <p className="text-slate-600 font-body mb-10 max-w-lg mx-auto">
                                Want to see more daily updates from the water? Join our community on Instagram for surf photos, videos, and stories.
                            </p>
                            <Button className="bg-slate-900 hover:bg-teal-600 text-white font-subtitle font-bold px-10 py-7 rounded-2xl text-lg transition-all group shadow-xl shadow-slate-900/10">
                                @hiriketiyasurfwithmali
                                <Waves className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Gallery;
