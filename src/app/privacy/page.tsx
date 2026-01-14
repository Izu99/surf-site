"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

const Privacy = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <SectionHeader title="Privacy Policy" />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto prose prose-lg font-body text-muted-foreground">
                    <p className="mb-6">Last updated: January 2026</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">1. Information We Collect</h3>
                    <p className="mb-4">We collect information you provide directly to us, such as when you book a lesson, contact us, or sign up for our newsletter. This may include your name, email address, phone number, and country.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">2. How We Use Your Information</h3>
                    <p className="mb-4">We use the information we collect to process bookings, communicate with you about our services, and improve our offerings.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">3. Information Sharing</h3>
                    <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">4. Data Security</h3>
                    <p className="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">5. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@hiriketiyasurf.com or +94 70 558 3277.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Privacy;
