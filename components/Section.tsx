"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Section({ title, id }: { title: string, id: string }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 80, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.85,
                delay: 0.1,
                ease: EASE,
            }}
            viewport={{ once: true }}
            className="min-h-[70vh] py-40 flex items-center justify-center bg-neutral-900 text-white"
        >
            <h2 className="text-3xl">{title}</h2>
        </motion.section>
    );
}