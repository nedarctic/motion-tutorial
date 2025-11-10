"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import ForegroundCarousel from "./ForegroundCarousel";
import { manrope } from "../fonts";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Image from "next/image";
import { images } from "../data/lib";


export default function HeroSection() {
    const [bgIndex, setBgIndex] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(1);
    const [finished, setFinished] = useState(false);
    const [showFinalText, setShowFinalText] = useState(false);
    const heroRef = useRef(null);

    const nextImage = () => {
        if (bgIndex < images.length - 1) {
            setBgIndex((prev) => prev + 1);
            setCarouselIndex((prev) => prev + 1);
        } else {
            setFinished(true);
            setShowFinalText(true);
        }
    };

    // Core animation timing
    useEffect(() => {
        if (bgIndex < images.length - 1) {
            const timer = setTimeout(() => {
                setBgIndex((prev) => prev + 1);
                setCarouselIndex((prev) => prev + 1);
            }, 4000);
            return () => clearTimeout(timer);
        } else {
            const endTimer = setTimeout(() => {
                setFinished(true);
                setShowFinalText(true);
            }, 4000);
            return () => clearTimeout(endTimer);
        }
    }, [bgIndex]);

    // Scroll to next section after 3s of final text
    useEffect(() => {
        if (showFinalText) {
            const scrollTimer = setTimeout(() => {
                const nextSection = document.getElementById("next-section");
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 3000);
            return () => clearTimeout(scrollTimer);
        }
    }, [showFinalText]);

    // Replay when hero re-enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Reset all states to restart animation
                        setBgIndex(0);
                        setCarouselIndex(1);
                        setFinished(false);
                        setShowFinalText(false);
                    }
                });
            },
            { threshold: 0.6 } // hero must be ~60% visible
        );

        const current = heroRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    // Container variant for staggering children
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.4, // delay between each child
            },
        },
    };

    // Individual item variant
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section
            ref={heroRef}
            className="relative h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center"
        >
            {/* Background */}
            <AnimatePresence mode="wait">
                {!finished && (
                    <BackgroundImage key={images[bgIndex].src} image={images[bgIndex]} />
                )}
            </AnimatePresence>

            {/* Foreground Carousel */}
            {!finished && (
                <div className="absolute left-1/2 bottom-40 flex justify-center">
                    <ForegroundCarousel images={images} currentIndex={carouselIndex} />
                </div>
            )}

            {/* Forward button */}
            {!finished && (
                < button
                    onClick={nextImage}
                    disabled={finished || bgIndex >= images.length - 1}
                    className="absolute top-3/5 left-12 w-20 h-20 md:w-16 md:h-16 rounded-full bg-transparent text-white flex items-center justify-center shadow-lg hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    <TfiArrowCircleRight className="text-xl md:text-2xl" size={50} />
                </button>)
            }

            {/* Image counter */}
            {!finished && (
                <div className="absolute right-20 bottom-25 flex flex-col items-center gap-4 z-30">
                    <div className={`${manrope.className} text-white flex items-baseline gap-2`}>
                        <span className="text-2xl md:text-4xl font-extrabold leading-none">
                            {String(bgIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg md:text-xl opacity-90">/</span>
                        <span className="text-base md:text-lg opacity-80">
                            {String(images.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {showFinalText && (
                    <motion.div
                        className={`${manrope.className} absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold gap-16`}
                        style={{
                            backgroundImage: `
                    radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%),
                    url(${images[3].src})
                `,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        {/* Hero-style branding */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold text-center"
                            variants={item}
                        >
                            Curated by Ray
                        </motion.h1>

                        {/* Logo */}
                        <motion.div
                            className="flex justify-center items-center"
                            variants={item}
                        >
                            <Image
                                src="/light-logo.svg"
                                alt="Curated by Ray logo"
                                width={300}   // blown-out width
                                height={300}  // blown-out height
                            />
                        </motion.div>

                        {/* Supporting text */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold text-center"
                            variants={item}
                        >
                            Begin Your Journey
                        </motion.h1>
                        
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}