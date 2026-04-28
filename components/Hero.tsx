"use client";
import MagneticButton from "@/components/MagneticButton";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Hero({ id }: { id: string }) {
    return (
        <section id={id} className="h-screen relative flex items-center justify-center text-white overflow-hidden">

            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative text-center">



                {/* Headline */}
                <motion.h1
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-5xl font-bold"
                >
                    Build the Future
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                    className="mt-4 text-lg opacity-80"
                >
                    Scroll to experience the story
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.8, // comes AFTER text
                        ease: EASE,
                    }}
                    className="mt-10"
                >
                    <MagneticButton>
                        Get Started
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}