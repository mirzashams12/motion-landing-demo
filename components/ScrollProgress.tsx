"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // smooth it (premium feel)
    const smooth = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 0.2,
    });

    return (
        <motion.div
            style={{ scaleX: smooth }}
            className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[100]"
        />
    );
}