"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import ForegroundCarousel from "./ForegroundCarousel";
import { manrope } from "../fonts";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Image from "next/image";
import { images } from "../data/lib";
import { satisfy } from "../fonts";

export default function HeroSection() {
    const [bgIndex, setBgIndex] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(1);
    const [finished, setFinished] = useState(false);
    const [showFinalText, setShowFinalText] = useState(false);
    const heroRef = useRef<HTMLElement | null>(null);

    const nextImage = () => {
        if (bgIndex < images.length - 1) {
            setBgIndex(prev => prev + 1);
            setCarouselIndex(prev => prev + 1);
        } else {
            setFinished(true);
            setShowFinalText(true);
        }
    };

    useEffect(() => {
        if (bgIndex < images.length - 1) {
            const timer = setTimeout(() => {
                setBgIndex(prev => prev + 1);
                setCarouselIndex(prev => prev + 1);
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

    useEffect(() => {
        if (showFinalText) {
            const scrollTimer = setTimeout(() => {
                const nextSection = document.getElementById("next-section");
                if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
            }, 3000);
            return () => clearTimeout(scrollTimer);
        }
    }, [showFinalText]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setBgIndex(0);
                        setCarouselIndex(1);
                        setFinished(false);
                        setShowFinalText(false);
                    }
                });
            },
            { threshold: 0.6 }
        );

        const current = heroRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    const fadeUpTransition: Transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] };

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.4 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: fadeUpTransition }
    };

    return (
        <section
            ref={heroRef}
            className="relative h-screen lg:min-h-[600px] lg:max-h-[800px] overflow-hidden bg-black text-white flex flex-col items-center justify-center"
        >
            <AnimatePresence mode="wait">
                {!finished && (
                    <motion.div
                        key="hero-animated-group"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] } }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >

                        {/* button to go to next image */}

                        <button
                            onClick={nextImage}
                            disabled={finished || bgIndex >= images.length - 1}
                            className={`
                                absolute left-8 sm:left-16 lg:left-28 bottom-8 lg:bottom-10 
                                w-16 h-16 sm:w-20 sm:h-20 
                                rounded-full 
                                bg-black/40 backdrop-blur-sm border-2 border-[#DCCAB2]/60
                                text-[#DCCAB2] hover:bg-black/60 hover:border-[#DCCAB2] hover:scale-110
                                flex items-center justify-center 
                                shadow-2xl z-40
                                transition-all duration-300
                                disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
                            `}
                            aria-label="Next image"
                        >
                            <TfiArrowCircleRight className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md" />
                        </button>

                        {/* Background image */}

                        <BackgroundImage key={images[bgIndex].src} image={images[bgIndex]} />

                        {/* foreground carousel */}

                        <div className="absolute left-1/2 bottom-25 flex justify-center">
                            <ForegroundCarousel images={images} currentIndex={carouselIndex} />
                        </div>

                        {/* Image counter */}

                        <div className="absolute right-10 sm:right-20 bottom-10 flex flex-col items-center gap-4 z-30">
                            <div className={`${manrope.className} text-white flex items-baseline gap-2`}>
                                <span className="text-4xl text-[#DCCAB2] md:text-4xl font-extrabold leading-none">
                                    {String(bgIndex + 1).padStart(2, "0")}
                                </span>
                                <span className="text-lg text-[#DCCAB2] md:text-xl opacity-90">/</span>
                                <span className="text-base text-[#DCCAB2] md:text-lg opacity-80">
                                    {String(images.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showFinalText && (
                    <motion.div
                        className={`${manrope.className} absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold gap-16`}
                        style={{
                            backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%), url(${images[3].src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <motion.h1
                            className={`${satisfy.className} text-[#DCCAB2] text-5xl md:text-7xl font-extrabold text-center`}
                            variants={item}
                        >
                            Curated by Ray
                        </motion.h1>

                        <motion.div className="flex justify-center items-center" variants={item}>
                            <Image src="/Pale Beige Logo.svg" alt="Curated by Ray logo" width={300} height={300} />
                        </motion.div>

                        <motion.h1
                            className={`${satisfy.className} text-[#DCCAB2] text-xl md:text-2xl font-extrabold text-center`}
                            variants={item}
                        >
                            Begin Your Journey
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
