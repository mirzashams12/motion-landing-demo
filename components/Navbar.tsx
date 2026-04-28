"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            let closestSection = "home";
            let minDistance = Number.POSITIVE_INFINITY;

            const screenCenter = window.innerHeight * 0.6;

            links.forEach((link) => {
                const el = document.getElementById(link.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;

                const distance = Math.abs(screenCenter - elementCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = link.id;
                }
            });

            setActive((prev) => (prev === closestSection ? prev : closestSection));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div className="mt-4 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex gap-8 text-sm">

                {links.map((link) => (
                    <motion.span
                        key={link.id}
                        onClick={() => scrollTo(link.id)}
                        className={`cursor-pointer ${active === link.id ? "text-white" : "text-white/60"
                            }`}
                        whileHover={{ y: -2 }}
                    >
                        {link.name}
                    </motion.span>
                ))}

            </div>
        </div>
    );
}