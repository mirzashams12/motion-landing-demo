"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Timeline() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 80, scale: 0.96 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.75,
                ease: EASE,
            },
        },
    };

    return (
        <section ref={ref} className="relative py-40 bg-black text-white">
            <div className="max-w-4xl mx-auto relative">

                {/* Line */}
                <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/20">
                    <motion.div
                        style={{ height }}
                        className="w-full bg-gradient-to-b from-white via-gray-300 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    />
                </div>

                {/* Items */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {[1, 2, 3].map((num, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className={`mb-24 flex ${i % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                        >
                            <div className="w-1/2 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                                <h3 className="text-xl font-semibold">Step {num}</h3>
                                <p className="mt-2 text-sm opacity-70">
                                    Smooth scroll-based reveal with clean motion.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}