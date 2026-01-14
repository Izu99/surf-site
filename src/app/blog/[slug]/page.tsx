"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
    const params = useParams();
    const slug = params.slug as string;

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                    <Button asChild variant="ghost" className="mb-8"><Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4" />Back to Blog</Link></Button>
                    <div className="aspect-video bg-ocean-gradient rounded-2xl mb-8" />
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6"><span className="flex items-center gap-2"><Calendar className="w-4 h-4" />January 5, 2026</span><span className="flex items-center gap-2"><Clock className="w-4 h-4" />5 min read</span></div>
                    <h1 className="font-title text-3xl md:text-4xl mb-6 capitalize">{slug?.replace(/-/g, " ")}</h1>
                    <div className="prose prose-lg max-w-none font-body text-foreground">
                        <p className="text-muted-foreground leading-relaxed mb-6">This is a sample blog post content. In a full implementation, this would be fetched from a CMS or database based on the slug parameter.</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">Surfing in Sri Lanka offers an incredible experience for surfers of all levels. The warm tropical waters, consistent swells, and beautiful scenery make it a perfect destination for your surf adventure.</p>
                        <p className="text-muted-foreground leading-relaxed">Whether you're a complete beginner or looking to improve your skills, Hiriketiya Bay provides the ideal conditions for learning and progression.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogPost;
