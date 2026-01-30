"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const slides = [
    {
        id: "coffee",
        title: "Premium Indonesian Coffee",
        subtitle: "Robusta & Arabica beans sourced from high-altitude volcanic soils.",
        image: "/images/hero-coffee.png",
        color: "from-orange-900/80 to-black/60",
    },
    {
        id: "charcoal",
        title: "High-Calorie Coconut Charcoal",
        subtitle: "Clean burning, long-lasting briquettes for shisha and BBQ.",
        image: "/images/hero-charcoal.png",
        color: "from-stone-900/80 to-black/60",
    },
    {
        id: "spices",
        title: "Exotic Spices & Cloves",
        subtitle: "Aromatic treasures directly from the Spice Islands.",
        image: "/images/hero-spices.png",
        color: "from-amber-900/80 to-black/60",
    },
];

export function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-advance slides every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center">
            {/* Background with Crossfade */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }} // Slower transition for cinematic feel
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[activeSlide].image}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slides[activeSlide].color} mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/40" /> {/* General darkening */}
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Text Content */}
                <div className="lg:col-span-7 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                    >
                        <MapPin size={14} className="text-gold" />
                        <span className="text-xs uppercase tracking-widest text-white/90">Surabaya • Indonesia</span>
                    </motion.div>

                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={activeSlide}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6"
                            >
                                {slides[activeSlide].title.split(" ").slice(0, 2).join(" ")} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                                    {slides[activeSlide].title.split(" ").slice(2).join(" ")}
                                </span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light"
                    >
                        Trusted Indonesian trading company specializing in high-quality agricultural & charcoal products. We guarantee consistent supply and on-time delivery for global partners.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" onClick={() => window.open('https://wa.me/628155018955', '_blank')}>
                            Start Inquiry
                            <ArrowRight size={20} />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Catalog
                        </Button>
                    </motion.div>

                    {/* Social Proof Floating Card - Fixed Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-12 hidden md:block" // Changed from absolute to static with margin
                    >
                        <GlassCard className="p-4 flex items-center gap-4 max-w-xs bg-white/5 border-white/10">
                            <div className="p-3 rounded-full bg-gold/20 text-gold">
                                <Globe size={24} />
                            </div>
                            <div>
                                <div className="flex text-gold text-xs mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-white font-medium">Exporting to 10+ Countries</p>
                                <p className="text-xs text-white/60">Trusted Global Partner</p>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Right Side Navigation / Slider */}
                <div className="lg:col-span-5 relative h-full flex flex-col justify-center items-end gap-6 pointer-events-none">
                    {/* We make this container pointer-events-none so it doesn't block bg clicks, 
              but enable pointer events on the buttons */}
                    <div className="pointer-events-auto flex flex-col gap-4">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                onClick={() => setActiveSlide(index)}
                                className={`group cursor-pointer flex items-center justify-end gap-4 transition-all duration-300 ${activeSlide === index ? 'opacity-100 translate-x-0' : 'opacity-50 hover:opacity-80 translate-x-4'}`}
                            >
                                <div className="text-right">
                                    <p className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeSlide === index ? 'text-gold' : 'text-white'}`}>
                                        0{index + 1}
                                    </p>
                                    <p className="text-white font-serif text-lg">{slide.id.charAt(0).toUpperCase() + slide.id.slice(1)}</p>
                                </div>
                                <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${activeSlide === index ? 'border-gold scale-110 shadow-lg' : 'border-transparent grayscale'}`}>
                                    <Image src={slide.image} alt={slide.id} fill className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
