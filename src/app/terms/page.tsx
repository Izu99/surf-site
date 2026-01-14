"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

const Terms = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <SectionHeader title="Terms & Conditions" />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto prose prose-lg font-body text-muted-foreground">
                    <p className="mb-6">Last updated: January 2026</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">1. Booking & Payment</h3>
                    <p className="mb-4">Lessons must be booked in advance via WhatsApp or our contact form. Payment is due at the time of the lesson. We accept cash payments in LKR.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">2. Cancellation Policy</h3>
                    <p className="mb-4">Cancellations made 24 hours or more before the scheduled lesson will receive a full refund. Late cancellations may be subject to charges.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">3. Safety & Liability</h3>
                    <p className="mb-4">Surfing is an inherently risky activity. Participants must follow all instructor guidance. By booking a lesson, you acknowledge and accept these risks.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">4. Weather Conditions</h3>
                    <p className="mb-4">Lessons may be rescheduled due to unsafe weather or ocean conditions. The final decision rests with the instructor for safety reasons.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">5. Equipment</h3>
                    <p className="mb-4">All equipment is provided. Participants are responsible for any damage caused by negligent use of equipment.</p>
                    <h3 className="font-subtitle font-semibold text-foreground text-xl mt-8 mb-4">6. Contact</h3>
                    <p>For any questions regarding these terms, please contact us at info@hiriketiyasurf.com.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Terms;
