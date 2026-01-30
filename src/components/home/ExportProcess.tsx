"use client";

import { Leaf, ShieldCheck, Ship, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: <Leaf size={28} />,
        title: "1. Sourcing",
        subtitle: "Direct from Farmers",
        desc: "We partner with local growers to ensure ethical sourcing and premium raw materials."
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "2. Quality Control",
        subtitle: "Strict Grading",
        desc: "Every batch undergoes rigorous moisture, size, and defect testing before packing."
    },
    {
        icon: <Ship size={28} />,
        title: "3. Global Shipping",
        subtitle: "Safe FOB/CIF Delivery",
        desc: "Secure stuffing and export documentation for hassle-free international logistics."
    }
];

export function ExportProcess() {
    return (
        <section id="process" className="py-32 bg-stone-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Seamless Export Process</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        From our plantations to your port, we handle every detail with precision.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Connecting Line */}
                    <div className="absolute top-[3.5rem] left-0 w-full h-1 bg-white/10 hidden md:block">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.3, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-28 h-28 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-gold/50 transition-colors duration-500 shadow-xl">
                                    <div className="text-gold group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                                <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-4">{step.subtitle}</h4>
                                <p className="text-white/50 text-base leading-relaxed max-w-xs">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
