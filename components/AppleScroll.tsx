"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AppleScroll() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const text1Y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const text2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
    const text3Y = useTransform(scrollYProgress, [0.6, 0.8], [40, 0]);

    return (
        <section ref={ref} className="h-[300vh] bg-black text-white">

            <div className="sticky top-0 h-screen flex items-center justify-center">

                {/* Text 1 */}
                <motion.h1
                    style={{ y: text1Y }}
                    className="absolute text-5xl font-bold"
                >
                    Designed for Performance
                </motion.h1>

                {/* Text 2 */}
                <motion.h1
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute text-5xl font-bold"
                >
                    Built with Precision
                </motion.h1>

                {/* Text 3 */}
                <motion.h1
                    style={{ opacity: text3Opacity, y: text3Y }}
                    className="absolute text-5xl font-bold"
                >
                    Engineered for Scale
                </motion.h1>

            </div>
        </section>
    );
}