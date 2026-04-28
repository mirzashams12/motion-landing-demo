"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

    const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX - 100);
        y.set(e.clientY - 100);
    };

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX - 100);
            y.set(e.clientY - 100);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", handleMouseMove);
    }

    return (
        <motion.div
            style={{
                translateX: smoothX,
                translateY: smoothY,
            }}
            className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-white/10 blur-3xl z-[999]"
        />
    );
}