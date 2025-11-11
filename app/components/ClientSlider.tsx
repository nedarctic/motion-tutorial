"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { clientLogos } from "../data/lib";

export default function ClientsSlider() {
    return (
        <section className="relative w-full overflow-hidden py-16 bg-zinc-50 dark:bg-black">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white mb-12">
                Our Trusted Partners
            </h2>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {/* Duplicate logos to make the loop seamless */}
                    {[...clientLogos, ...clientLogos].map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center min-w-[150px] min-h-20"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={150}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
